Patrol Route — Diagnostic v0.9.4

DEPLOYMENT
Upload these four files to the root of the GitHub Pages repository:
  index.html
  manifest.webmanifest
  service-worker.js
  README.txt

The app is static and needs no build step. GitHub Pages must be served over HTTPS.

DIAGNOSTIC BEHAVIOR
- Primary data source: Hernando County Central GIS Basemap / Streets (layer 10047).
- Road components are assigned distinct colors after graph construction.
- Dashed orange candidates form the minimum set of shortest endpoint-to-endpoint gaps needed to span the component graph.
- Gap labels show feet and the details show the nearest road on both sides.
- Selecting a sidebar gap (or its dashed map line) zooms to it, highlights both endpoints, and opens its detail popup.
- The app checks filtered county features within 40 feet of each candidate and reports the road name and exclusion reason.
- Candidate gaps are visualization only. They are never inserted into the routing graph.
- The non-local-road checkbox allows comparison against the unfiltered county set.

Filtering defaults to existing local/minor streets. Major, special, reserved, platted, collector, municipal, parkway, truck-route, partial, and evacuation-road features remain available to the diagnostic check.

External runtime assets: Leaflet, Leaflet Draw, OpenStreetMap tiles, and the public Hernando County ArcGIS FeatureServer. An internet connection is required for maps and road loading.
