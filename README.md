# Kingdom research

A static HTML page inspired by the supplied parchment research-tree reference.

Open `dist/index.html` directly, or serve the `dist` directory with a static server.

- Blacksmith: general, infantry, ranged, and cavalry upgrades.
- Library: knowledge, economy, and alchemy research.
- Select cards to inspect effects and prerequisites. Research adds one level; mastering a prerequisite unlocks its successor.
- Example names, effects, and progress are illustrative, with no backend or persistent storage. Reloading restores the initial state.
- On narrow screens, each research tree scrolls horizontally and the details panel moves below the trees.
- Uses the supplied screenshot as an icon sprite. Google Fonts are optional; local serif and sans-serif fallbacks are provided.

The optional WebMCP integration exposes `read_research_tree` and `research_upgrade` when supported by the browser.
