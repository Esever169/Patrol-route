PATROL ROUTE v0.18.1 — SUBTREE PRUNING + ROAD DELETION

Routing refinement:
- Before entering any bridge/spur subtree, the route re-checks LIVE coverage state.
- If the bridge and everything below it have already been satisfied naturally,
  the entire excursion is skipped.
- The same check is applied to the one open/final branch.
- Adds Pruned branch savings diagnostic.
- Intended to eliminate unnecessary main-strip trips such as driving to an already
  satisfied roundabout and back.

Manual road editing:
- Tap a displayed road to select/unselect it.
- Selection applies to the displayed GIS/OSM feature, so a road feature's graph
  segments highlight together.
- Delete Selected Roads removes them from BOTH required coverage and routing.
- Clear Selection cancels the current selection.
- Undo Last Delete restores the most recent deletion batch.
- Restore All Roads restores every manually deleted road.
- After an edit, the graph semantics/statistics are rebuilt and the current route
  is cleared. If the deletion disconnects the road graph, Route Status warns you.

Preserved from v0.18:
- bridge/spur detection
- loop/block traversal
- right-turn loop tie-breaking
- bridge-repeat floor / above-floor metrics
- Hernando County GIS + OSM supplement
- divided-road and roundabout handling
- START/FINISH modes
- GPS and simulation
- safe short-excursion cleanup

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
