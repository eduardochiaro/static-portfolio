// ponytail: field notes are dev-only until launch. To ship them, delete this flag,
// its guards in app/page.tsx + components/PageLayout.tsx, and the `rm -rf out/notes`
// in the build script.
export const NOTES_ENABLED = process.env.NODE_ENV === 'development';
