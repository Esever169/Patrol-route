PATROL ROUTE v0.18.2 — RELIABLE ROAD EDITING + ROUNDABOUT TOPOLOGY

Road editing:
- Adds explicit Edit Roads: OFF/ON mode.
- In edit mode, a normal map click selects the NEAREST road within 18 meters.
  The user no longer has to hit a thin Leaflet polyline exactly.
- Clicking a road feature directly also works while edit mode is ON.
- Selected road features highlight red.
- Delete Selected Roads removes them from both coverage and routing.
- Clear Selection, Undo Last Delete, and Restore All Roads remain available.
- Route/completed-route polylines are now non-interactive, so a displayed route
  cannot intercept road-edit clicks.
- Road layers are brought to the front while edit mode is active.

Roundabouts:
- Keeps feature/metadata roundabout recognition.
- Adds topology-level roundabout detection using Tarjan graph bridges.
- Finds small compact non-bridge cycle blocks even when the county splits the
  traffic circle across multiple feature IDs.
- Requires 2+ external approach arms.
- Uses perimeter, diameter, edge-count, and compactness guards to avoid treating
  ordinary neighborhood loops as roundabouts.
- Detected roundabout edges are drivable connectors, not required coverage.

Preserved:
- v0.18 block/loop traversal engine
- v0.18.1 live subtree pruning
- bridge-repeat floor metrics
- right-turn loop tie-breaking
- county GIS + OSM supplement
- divided-road handling
- START / FINISH modes
- GPS and simulation

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
