PATROL ROUTE v0.17 — ZONE-LOCKED ROUTING ENGINE

Why this version exists:
Full simulation of v0.16.3 showed that "hard pockets" were still too large and
allowed geographic ping-pong inside a single connected pocket. Required main
roads were also being cleaned up late, causing repeated travel.

Major changes:
- Replaces simple connected-component pockets with patrol ZONES based on
  articulation/branch structure of the local required-road graph.
- Oversized zones are split geographically so one huge local network cannot
  behave as a single pocket.
- Zone order is selected first and then LOCKED.
- Once a zone is completed, transition routing is forbidden from entering it again.
- Required connector/main-road segments are credited whenever they are traversed
  between zones; already-covered connector mileage is not scheduled again later.
- Adds maneuver-history detection: returning to a recently occupied intersection
  within the previous three moves is treated like a U-turn/reversal.
- Roundabout handling remains connector-only and graph-level compact-cycle aware.
- Auto-finish ends naturally; Return to START adds only the final return after
  all required coverage is complete.
- Diagnostics show zone re-entries, connector coverage credits, intersection
  reversals, and main-strip repeats.
- County GIS, OSM supplement, divided-road reduction, GPS and simulation remain.

Deployment:
Replace repository-root files and commit to main.
Hard-refresh once after GitHub Pages deploys.
