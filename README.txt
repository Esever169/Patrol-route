PATROL ROUTE v0.16.1 — ROUTE BUILDER HOTFIX

Fixes for Build Optimized Route:
- Route button now shows a visible "Building…" status before optimization starts.
- Runtime exceptions are caught and displayed in Route Status instead of failing silently.
- Exact odd-node matching is capped at 10 terminals; larger pockets use a fast greedy + pair-swap optimizer.
- Local shortest-path trees are cached per source node instead of recomputed for every pair.
- Connector-street cleanup uses a Set instead of repeatedly rebuilding/scanning the entire edge list.
- Cleanup loop has a smaller safety bound and detects a stalled route explicitly.
- Strict pocket completion, U-turn penalties, main-strip penalties, roundabout handling, county GIS, divided-road logic, GPS and simulation are preserved.
- New service-worker cache version prevents v0.16 from persisting after deployment.

Deployment:
Replace the repository-root files with this package and commit to main.
Hard-refresh once after GitHub Pages deploys.
