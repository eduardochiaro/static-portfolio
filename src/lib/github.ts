export type ContributionDay = {
  date: string;
  count: number;
};

export type Contributions = {
  total: number;
  /** Weeks, oldest first; each week is up to 7 days (Sun→Sat). */
  weeks: ContributionDay[][];
};

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
  }
}`;

/**
 * Contribution calendar for the last year, fetched at build time.
 * Static export means this runs once during `next build` and is baked into the HTML.
 * Without GITHUB_TOKEN (a classic PAT with no scopes is enough) it returns null and the section is skipped.
 */
export async function getContributions(login: string): Promise<Contributions | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: QUERY, variables: { login } }),
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);

    const json = await res.json();
    const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) throw new Error(json?.errors?.[0]?.message ?? 'no calendar in response');

    return {
      total: calendar.totalContributions,
      weeks: calendar.weeks.map((week: { contributionDays: { date: string; contributionCount: number }[] }) =>
        week.contributionDays.map((day) => ({ date: day.date, count: day.contributionCount })),
      ),
    };
  } catch (error) {
    console.warn('[contributions] skipped:', error instanceof Error ? error.message : error);
    return null;
  }
}
