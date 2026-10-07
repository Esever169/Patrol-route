PATROL ROUTE v0.9 — HERNANDO COUNTY GIS

PRIMARY ROAD SOURCE
Hernando County Road Centerline FeatureServer:
https://services9.arcgis.com/YvdlPN5z971EmeG3/ArcGIS/rest/services/road_centerline/FeatureServer/0

What changed:
- Hernando County road centerlines are now the primary routing geometry.
- OSM remains the basemap and emergency fallback only.
- County road attributes loaded when available: road name, class, status, speed limit, one-way, surface.
- County endpoints are snapped with a conservative 4 m topology tolerance.
- Only tiny remaining county gaps (<=10 m) are auto-bridged.
- Drawn patrol boundary remains authoritative.
- Existing start-only / optimized finish routing, GPS, simulation, efficiency metrics, and route markers remain.

GitHub Pages:
Replace the existing repository files with the contents of this ZIP and commit to main.
