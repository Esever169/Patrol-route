PATROL ROUTE v0.16.3 — SMOKE-TEST BUILD

Root cause of the v0.16.2 load failure:
- rebuildSemanticGraph() had accidentally been inserted inside keepStartComponent().
- JavaScript syntax was valid, but the function was out of scope when loadRoads() called it.

Fixes:
- Rebuilt keepStartComponent() and rebuildSemanticGraph() as separate top-level functions.
- Revalidates and renumbers patrol-cluster edge IDs after component pruning.
- Adds a startup self-check for critical application functions.
- Keeps the visible route-build exception handling from v0.16.1.
- Preserves strict pocket completion, bounded matching, U-turn/main-strip penalties,
  roundabout logic, county GIS, divided-road reduction, GPS and simulation.
- New service-worker cache version.

Validation:
- Inline JavaScript syntax is checked with Node before packaging.
- The final generated JavaScript is smoke-tested with a deterministic DOM/Leaflet harness that exercises graph build, component pruning, semantic rebuild, and the actual Build Optimized Route button handler.

Deployment:
Replace the repository-root files with this package and commit to main.
Hard-refresh once after GitHub Pages deploys.
