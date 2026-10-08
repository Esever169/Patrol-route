PATROL ROUTE v0.17.1 — DYNAMIC ZONE SEQUENCING FIX

v0.17 failure:
The app chose the entire zone order before it knew where each zone's internal
coverage route would actually finish. The real exit point could differ from the
predicted entry/transition point, causing the next preselected zone to become
unreachable once completed-zone locks were applied.

v0.17.1:
- Chooses the next zone only AFTER the current zone is fully completed.
- Uses the actual current position / true previous-zone exit.
- Keeps completed REQUIRED LOCAL coverage streets locked.
- Leaves connector streets, roundabouts and shared articulation junctions usable.
- Does not silently re-enter completed local coverage.
- Reports the exact unfinished zone IDs if zoning still produces an unreachable island.
- Preserves zone completion, connector coverage credit, maneuver-history reversal penalties,
  main-strip repeat penalties, county GIS, divided-road reduction, GPS and simulation.
- Uses a new service-worker cache.

Deployment:
Replace repository-root files and commit to main.
Hard-refresh once after deployment.
