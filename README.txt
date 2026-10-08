PATROL ROUTE v0.17.4 — DIRECTIONAL SWEEP + CLEANUP

Changes from v0.17.3:
- Adds signed turn awareness.
- Within a patrol zone, ordinary right turns are preferred over left turns when
  both choices continue valid coverage.
- Straight travel remains acceptable; reversals remain heavily penalized.
- The same right/left preference is used by transition pathfinding.
- Adds a post-route cleanup pass for short closed excursions (<=8 edges / 300 m)
  that add no unique required coverage.
- Cleanup never removes the only traversal of a required coverage segment.
- Route U-turn and main-strip-repeat diagnostics are recalculated after cleanup.
- Adds Cleanup savings diagnostic.
- Existing gateway-aware zones, dynamic zone sequencing, tiny-zone merging,
  connector coverage credit, last-resort completed-zone transit, roundabout logic,
  county GIS, divided-road reduction, GPS and simulation remain.

Important:
All road geometry is clipped to the selected patrol polygon during graph creation,
so this build does not intentionally route outside the drawn patrol boundary.

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
