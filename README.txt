PATROL ROUTE v0.17.3 — CONNECTED MERGED-ZONE SOLVER

v0.17.2 failure:
Tiny patrol zones were merged geographically, but the merged zone's internal
required-road subgraph could still consist of multiple disconnected pieces.
solveZone() expected one connected edge graph and therefore failed with:
"Could not produce a continuous route inside patrol zone 1."

v0.17.3:
- solveZone() first finds connected components of the zone's required streets.
- It joins those pieces using the minimum available gateway/connector path.
- It may use connector, roundabout, non-required, and that zone's own streets.
- It may NOT cut through required local streets belonging to another patrol zone.
- The joined zone graph is then solved as one continuous open coverage trail.
- Connector edges used inside a zone remain drivable but are not falsely counted as new required coverage.
- Dynamic next-zone selection, tiny-zone merging, completed-zone last-resort transit,
  connector coverage credit, reversal/main-strip penalties, county GIS,
  divided-road reduction, GPS and simulation remain.

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
