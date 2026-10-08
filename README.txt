PATROL ROUTE v0.16.2 — EDGE-ID LIFECYCLE FIX

Root cause fixed:
v0.16/v0.16.1 classified patrol pockets before keepStartComponent() removed
other connected components. That operation rebuilt/reindexed the edges array,
leaving patrolClusters with stale edge IDs. Build Optimized Route then attempted
to read .required from an edge index that no longer existed.

Changes:
- Connected-component pruning now happens BEFORE patrol semantic classification.
- Rebuilds edge keys, adjacency and pocket classification after the final component is selected.
- Reindexes cluster IDs against the final edges array.
- Validates every cluster edge ID before route building.
- Adds defensive missing-edge errors instead of undefined-property crashes.
- Preserves v0.16.1 bounded matching/performance improvements.
- Preserves strict pocket completion, U-turn/main-strip penalties, roundabout logic,
  county GIS, divided-road reduction, GPS, simulation and GitHub Pages deployment.
- New service-worker cache version.

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
