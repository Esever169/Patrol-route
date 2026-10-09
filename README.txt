PATROL ROUTE MAP-BUDDY v0.19.1

PURPOSE
Select a patrol area in Hernando County, build a practical coverage route, and
follow the remaining blue line. During simulation or live GPS, completed route
segments disappear behind the patrol marker in a Pac-Man-style display.

CORE COVERAGE RULES
- Every connected eligible street remains visible on the map.
- Residential and connector roads remain available for travel.
- Only terminal branches from a dead end to the final junction are considered
  for automatic skipping.
- A terminal branch shorter than 200 ft is visible in dashed gray but is not
  required route coverage.
- Short segments connecting two streets are never skipped merely because the
  individual GIS segment is under 200 ft.
- Consecutive segments are measured as one complete terminal branch.
- A short branch containing START or a chosen FINISH is retained as coverage.
- Loops, roundabouts, and branched streets are not treated as terminal spurs.
- If skipping a branch prevents continuous routing, that complete branch is
  restored automatically and the route builder retries.

ROUTING
- Supports automatic FINISH, a chosen FINISH, and return to START.
- Required streets are routed continuously through the connected driving graph.
- Transit-only and skipped streets remain available when needed for connectivity.
- The existing block/loop traversal, subtree pruning, road editor, county GIS,
  OSM supplements, divided-road handling, GPS, and simulation remain available.

DEPLOYMENT
Upload index.html, manifest.webmanifest, service-worker.js, and README.txt to the
repository root. Commit to main and hard-refresh once after deployment.
