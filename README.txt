PATROL ROUTE v0.15 — PATROL-BEHAVIOR ROUTING

Built from v0.14.1.

Major changes:
- Replaces the edge-ordering optimizer with a patrol-oriented planner.
- Detects high-confidence roundabouts separately from ordinary closed loops and treats them as drivable connectors rather than required coverage.
- Classifies long branching neighborhood spines as main connectors.
- Groups local required streets into patrol pockets and strongly prefers completing the active pocket before leaving it.
- Adds turn-aware path costs with a very large penalty for U-turns at intersections; unavoidable dead-end reversals remain allowed.
- Adds escalating penalties for repeated main-strip travel and repeated edge use.
- START/FINISH remain snapped to required coverage nodes.
- Auto-finish now naturally ends where the final patrol pocket completes.
- Adds Route U-turns, Main-strip repeats, Patrol pockets, and Detected roundabouts diagnostics.
- Keeps county GIS, OSM supplements, divided-road reduction, full drivable network continuity, GPS, simulation, and GitHub Pages deployment.
- New service-worker cache version prevents older v0.14.x assets from persisting.

Deployment:
Replace the repository-root files with this package and commit to main. Hard-refresh once after GitHub Pages deploys.
