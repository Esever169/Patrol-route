PATROL ROUTE v0.9.2 — COUNTY GIS INTERSECTION NODING

Primary source:
Hernando County Central GIS Basemap -> Streets.

Changes from v0.9.1:
- Detects true geometric intersections between county road-centerline segments.
- Splits both road lines at those intersections to create routing nodes.
- Repairs T-junction topology where an endpoint ends within 4 m of another road centerline.
- Uses only a 6 m residual gap bridge after intersection noding.
- Adds "inserted intersections" to Road graph health.
- Keeps all road groups if anything remains disconnected.
- Existing editable boundary, selected START, optimized FINISH, GPS, simulation,
  efficiency metrics and county/OSM fallback behavior remain.

GitHub Pages:
Replace the four repository-root files with these files and commit to main.
