PATROL ROUTE v0.18.6 — WHOLE MAIN-CORRIDOR EXCLUSION

Why this change:
v0.18.4 only changed roundabout feeder corridors to non-required coverage.
Those roads still remained in the routing graph and could distort block/bridge
topology or prevent the block solver from finding a continuous route.
Manual deletion worked because it removed the roads before topology was built.

v0.18.6 applies the stronger whole-corridor rule:
- Detects named main corridors that touch a roundabout, roundabout approach,
  or junction-feeder corridor.
- Temporarily removes the whole named main-strip + junction corridor before
  block and bridge topology is built.
- Tests whether every required residential edge remains reachable from START.
- Residential side-street connections no longer automatically protect the
  main corridor when the same streets remain reachable through the neighborhood.
- If whole-corridor removal is unsafe, removes only individually safe junction
  pieces and keeps the portions genuinely required for transit.
- Rebuilds graph keys and semantic classification after exclusion.
- The block/loop engine then sees the same reduced topology that manual deletion
  would have produced.
- The existing Edit Roads mode remains available as a manual override.

Preserved:
- v0.18 block/loop traversal
- live subtree pruning
- roundabout topology detection
- in-block local continuity scoring
- right-turn loop tie-breaking
- bridge-repeat floor metrics
- county GIS + OSM supplement
- divided-road handling
- START / FINISH modes
- GPS and simulation

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
