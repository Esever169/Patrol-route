PATROL ROUTE v0.16 — STRICT POCKET SEQUENCING

Built from v0.15 after full-route simulation review.

Major changes:
- Patrol pockets are now HARD sequencing units, not just a route-cost preference.
- Once the route enters a pocket, it solves and completes all required streets in that pocket before leaving.
- Each pocket uses its own open Chinese-Postman trail, with a flexible exit chosen to reduce local repetition.
- Travel between pockets uses the connector network first and avoids cutting through unfinished pockets.
- Main-strip reuse receives escalating penalties.
- Intersection reversals receive an extreme penalty unless a dead-end forces them.
- Completed pockets are never intentionally re-entered.
- Auto-finish no longer returns to START; it ends naturally after the last required coverage.
- Remaining required main/connector streets are handled as a final continuous sweep.
- Roundabout recognition now includes compact graph-level cycles with 3+ approaches, even when county GIS splits the circle across multiple features.
- Ordinary neighborhood loops are protected by perimeter/diameter guards and should not be classified as roundabouts.
- Diagnostics now show intersection reversals, main-strip repeats, and pocket re-entries.
- County GIS, OSM supplements, divided-road reduction, GPS, simulation, and GitHub Pages deployment are preserved.
- New service-worker cache version prevents v0.15 from persisting.

Deployment:
Replace the repository-root files with this package and commit to main. Hard-refresh once after GitHub Pages deploys.
