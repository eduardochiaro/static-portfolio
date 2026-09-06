import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import Awards from '@/components/resume/Awards';
import Languages from '@/components/resume/Languages';
import Skills from '@/components/Skills';
import metaData from '@/data/metadata.json';
import resumeData from '@/data/resume.json';

export default function Resume() {
  const { personalInfo, skills, summary, experience, languages, awards } = resumeData;
  const page = metaData.resume;
  const since = experience.reduce((min, exp) => (exp.startDate < min ? exp.startDate : min), experience[0]?.startDate ?? '').slice(0, 4);

  return (
    <PageLayout section={page.section} branch={page.branch}>
      <Hero title={`${page.heroTitle}${since}`} name={page.heroName} oneLine>
        <p className="text-mono-text mb-3">{personalInfo.role}</p>
        <h2 className="mb-3 text-5xl font-bold text-white">{personalInfo.name}</h2>
        <p>{summary}</p>
      </Hero>

      <div className="mx-auto max-w-6xl px-6">
        <div className="border-mono-border text-mono-text-muted flex flex-wrap gap-x-8 gap-y-2 border-t pt-5 text-sm">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition">
            {personalInfo.email}
          </a>
          <span>{personalInfo.location}</span>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            {personalInfo.github}
          </a>
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            {personalInfo.linkedin}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-14 px-6 md:flex-row">
        <div className="md:w-2/3">
          <Experience experience={experience} compact />
        </div>
        <aside className="md:w-1/3">
          <Skills skills={skills} small />
          <Languages languages={languages} />
          <Awards awards={awards} />
        </aside>
      </div>
    </PageLayout>
  );
}
