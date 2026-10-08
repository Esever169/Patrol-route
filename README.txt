PATROL ROUTE v0.17.2 — GATEWAY-AWARE ZONES

Fixes the v0.17.1 unreachable-zone failure:
- Tiny articulation-created zones are merged into adjacent zones.
- Completed local coverage streets remain blocked during normal transitions.
- If no legal connector route exists, completed local streets may be crossed as
  last-resort transit with a very large penalty instead of making the graph impossible.
- Forced completed-zone transit is counted separately.
- Return-to-START can cross completed areas because the final return is explicitly requested.
- Dynamic next-zone selection, connector coverage credit, reversal penalties,
  main-strip penalties, county GIS, divided-road reduction, GPS and simulation remain.

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
