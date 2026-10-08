PATROL ROUTE v0.18.4 — JUNCTION-FEEDER SUPPRESSION + LOCAL BLOCK CONTINUITY

Automatic main-strip / roundabout feeder suppression:
- Starts from detected roundabout nodes.
- Walks outward only through MAIN CONNECTOR edges.
- Suppresses only short/simple feeder chains (maximum 420 m).
- Any required local side street branching from the chain cancels suppression.
- A feeder is also retained if its far end immediately serves required local coverage.
- Suppressed feeder edges remain drivable transit, but are no longer mandatory coverage.
- Adds Suppressed junction feeders diagnostic.
- Branch pruning, bridge-tree need calculation, and bridge-repeat floor all ignore
  junction-only feeder edges.

In-block traversal polish:
- Keeps the v0.18 block/loop topology engine.
- Right-turn preference remains only a tie-breaker.
- Adds a local-continuity score favoring choices that lead toward nearby unfinished
  required edges in the same block.
- Strongly favors immediately adjacent required edges so parallel fingers and
  small subloops are completed before crossing to another part of the block.

Preserved:
- v0.18.2 reliable Edit Roads mode
- v0.18.3 roundabout approach logic
- live subtree pruning
- bridge-repeat floor metrics
- county GIS + OSM supplement
- divided-road handling
- START / FINISH modes
- GPS and simulation

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
