Patrol Route — Prototype v0.12

DEPLOYMENT
Upload these four files to the root of the GitHub Pages repository:
  index.html
  manifest.webmanifest
  service-worker.js
  README.txt

The app is static and needs no build step. GitHub Pages must be served over HTTPS.

OPERATOR WORKFLOW
- Draw a circle, rectangle, or freeform patrol area.
- Choose START, then choose Auto-finish, a map-selected FINISH, or Return to START.
- Load Connected Streets selects the county-road component nearest START and ignores unrelated fragments.
- Build Optimized Route uses an open/closed Chinese Postman calculation: only shortest paths required to pair odd intersections are repeated, followed by a continuous Euler traversal.
- Auto-finish compares endpoint candidates to reduce added mileage. Chosen FINISH and Return to START enforce their requested endpoints.
- During simulation or live GPS, the blue route shrinks behind the patrol marker, a faint green trace shows completed travel, and the sidebar reports completion percentage.
- Local SPECIAL-status, collector, and minor evacuation streets are retained; only clearly non-built or major/non-local classes are filtered by default.
- Closed centerline loops are detected as roundabouts/loop streets. Nearby street endpoints may attach to those loops within a loop-specific 18 m tolerance, while ordinary topology repairs remain limited to 4 m.
- T-junction repair now inserts the actual short connector edge as well as splitting the receiving line, preventing visibly connected streets from being discarded as separate components.
- County GIS remains primary. Named and unnamed residential OSM geometry is used only when it is missing from or spatially distinct from county centerlines, covering new developments such as Genovesa Loop without duplicating established roads.

TECHNICAL BEHAVIOR
- Primary data source: Hernando County Central GIS Basemap / Streets (layer 10047).
- Intersection noding and conservative T-junction repair are performed before connected-network selection.
- Technical counts are retained in a collapsed details section.
- The non-local-road checkbox allows comparison against the unfiltered county set.

Filtering defaults to existing local/minor streets. Major, special, reserved, platted, collector, municipal, parkway, truck-route, partial, and evacuation-road features remain available to the diagnostic check.

External runtime assets: Leaflet, Leaflet Draw, OpenStreetMap tiles, and the public Hernando County ArcGIS FeatureServer. An internet connection is required for maps and road loading.
