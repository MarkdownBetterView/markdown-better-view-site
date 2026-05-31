// Comparison matrix data (typed; DRY → renders the table).
// "?" = vendor doesn't state it (don't infer absence).
// ⚠️ Every cell must be verified against the CURRENT shipping version of each
// competitor before publishing (download/test MacMD + Marked 2). Keep "?" where
// unverified. Accuracy = legal + trust.
export type Cell = '✓' | '✗' | '?' | string;

export const columns = [
  'Markdown Better View',
  'MacMD Viewer',
  'Marked 2',
  'Quick Look',
] as const;

// Short category line under each column header (from comparison.html).
export const categories = ['Viewer', 'Viewer', 'Previewer', 'Built-in'] as const;

export const rows: { label: string; cells: Cell[] }[] = [
  { label: 'Price (one-time)', cells: ['$9.99', '$19.99', '$13.99', 'Free'] },
  { label: 'Mac App Store · sandboxed', cells: ['✓', '?', '✓', '✓'] },
  { label: 'Live reload on save', cells: ['✓', '✓', '✓', '✗'] },
  { label: 'Themes', cells: ['5 + dark', 'dark/light', 'CSS styles', '✗'] },
  { label: 'Find (with match count)', cells: ['✓', '?', '✓', '✗'] },
  { label: 'Math (KaTeX)', cells: ['✓', '?', '✓', '✗'] },
  { label: 'Mermaid diagrams', cells: ['✓', '✓', '✓', '✗'] },
  { label: 'Folder → native tabs', cells: ['✓', '?', '✗', '✗'] },
  { label: 'Quick Look + thumbnail', cells: ['✓', '✓', '✗', 'n/a'] },
  { label: 'Export PDF · Print', cells: ['✓', '?', '✓ +formats', '✗'] },
  { label: 'Reading mode', cells: ['✓', '?', '✗', '✗'] },
  { label: 'Native macOS · Apple Silicon', cells: ['✓', '?', 'older UI', '✓'] },
  { label: 'Privacy · no tracking', cells: ['✓', '?', '✓', '✓'] },
];
