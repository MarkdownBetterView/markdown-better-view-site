// Comparison matrix data (typed; DRY → renders the table).
// "?" = vendor doesn't state it (don't infer absence).
// ⚠️ Every cell must be verified against the CURRENT shipping version of each
// competitor before publishing (download/test MacMD, Marked 2, Marked 3). Keep
// "?" where unverified. Accuracy = legal + trust.
//   Marked 3 cells reflect markedapp.com's own feature/pricing copy (verified
//   2026-06); rows the vendor doesn't mention (find, math, Mermaid, folder
//   tabs, Quick Look, reading mode, privacy) stay "?" pending hands-on testing.
//   Both Marked 2 and Marked 3 are *previewers* (live-preview a file you edit
//   elsewhere) — not editors and not file-open "viewers".
export type Cell = '✓' | '✗' | '?' | string;

export const columns = [
  'Markdown Better View',
  'MacMD Viewer',
  'Marked 2',
  'Marked 3',
] as const;

// Short category line under each column header (from comparison.html).
export const categories = ['Viewer', 'Viewer', 'Previewer', 'Previewer'] as const;

export const rows: { label: string; cells: Cell[] }[] = [
  // Marked 3 is subscription ($2.99/mo introductory; one-time unlock available
  // at an unstated price), so the column header is "Price" rather than one-time.
  { label: 'Price', cells: ['$9.99', '$19.99', '$13.99', '$2.99/mo'] },
  { label: 'Mac App Store · sandboxed', cells: ['✓', '?', '✓', '✓'] },
  { label: 'Live reload on save', cells: ['✓', '✓', '✓', '✓'] },
  { label: 'Themes', cells: ['5 + dark', 'dark/light', 'CSS styles', 'themes + CSS'] },
  { label: 'Find (with match count)', cells: ['✓', '?', '✓', '?'] },
  { label: 'Math (KaTeX)', cells: ['✓', '?', '✓', '?'] },
  { label: 'Mermaid diagrams', cells: ['✓', '✓', '✓', '?'] },
  { label: 'Folder → native tabs', cells: ['✓', '?', '✗', '?'] },
  { label: 'Quick Look + thumbnail', cells: ['✓', '✓', '✗', '?'] },
  { label: 'Export PDF · Print', cells: ['✓', '?', '✓ +formats', '✓ +formats'] },
  { label: 'Reading mode', cells: ['✓', '?', '✗', '?'] },
  { label: 'Privacy · no tracking', cells: ['✓', '?', '✓', '?'] },
];
