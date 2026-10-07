Patrol Route — Prototype v0.10

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
- Build Coverage Route follows road edges continuously; it does not draw straight shortcuts between disconnected traversal steps.

TECHNICAL BEHAVIOR
- Primary data source: Hernando County Central GIS Basemap / Streets (layer 10047).
- Intersection noding and conservative T-junction repair are performed before connected-network selection.
- Technical counts are retained in a collapsed details section.
- The non-local-road checkbox allows comparison against the unfiltered county set.

Filtering defaults to existing local/minor streets. Major, special, reserved, platted, collector, municipal, parkway, truck-route, partial, and evacuation-road features remain available to the diagnostic check.

External runtime assets: Leaflet, Leaflet Draw, OpenStreetMap tiles, and the public Hernando County ArcGIS FeatureServer. An internet connection is required for maps and road loading.
