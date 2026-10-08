PATROL ROUTE v0.18.5 — PRE-ROUTING JUNCTION CORRIDOR EXCLUSION

Why this change:
v0.18.4 only changed roundabout feeder corridors to non-required coverage.
Those roads still remained in the routing graph and could distort block/bridge
topology or prevent the block solver from finding a continuous route.
Manual deletion worked because it removed the roads before topology was built.

v0.18.5 now mirrors that behavior automatically:
- Detects roundabout, roundabout-approach, and junction-feeder corridor candidates.
- Before route optimization, tests whether required coverage remains connected
  from START if those candidate edges are removed.
- If safe, removes the entire unnecessary corridor from the routing graph.
- If the full removal would disconnect required coverage, greedily removes only
  the safe candidate pieces and retains whatever is genuinely needed for transit.
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
