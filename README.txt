PATROL ROUTE v0.18 — BLOCK / LOOP TRAVERSAL ENGINE

This version replaces the v0.17 geographic-zone sequencing model.

Core routing model:
- Runs Tarjan bridge detection on the full drivable street graph.
- Removing bridges produces maximal loop/block groups.
- Bridge edges represent spurs, dead ends, and true connections between blocks.
- The route traverses the resulting block tree from START.
- Each loop/block is cleared as one unit before the route leaves it.
- Attached bridge/spur subtrees are serviced when their gateway is encountered.
- Return-to-START routes return from every bridge branch as topology requires.
- Auto-finish selects one active leaf branch to remain open, avoiding an unnecessary
  return along that final branch.
- Chosen FINISH uses the block containing the requested finish point.

Loop behavior:
- Each block is solved as an open/closed postman trail as appropriate.
- Right-hand turns are a soft tie-breaker only inside loop traversal.
- Required coverage always outranks the right-turn preference.

Metrics:
- Bridge-repeat floor: lower-bound repeat mileage forced specifically by required
  graph bridges/spurs. This is intentionally labeled a floor, not a claim of the
  complete mathematical CPP optimum.
- Above bridge floor: repeated mileage beyond that unavoidable bridge lower bound.
- Cleanup savings: redundant closed excursions removed after the route is built.

Preserved:
- Hernando County GIS road source
- OSM supplement
- divided-road mileage reduction
- roundabout normalization
- START / auto finish / chosen finish / return to START
- GPS and simulation
- short redundant-excursion cleanup

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
