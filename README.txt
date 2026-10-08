PATROL ROUTE v0.18.3 — ROUNDABOUT APPROACH PRUNING

Focused refinement to the v0.18 block/loop engine.

Problem:
A recognized roundabout could still keep a dead excursion alive because the
short approach/main-strip stub leading to it remained marked as required coverage.

Changes:
- Short edges immediately feeding a detected roundabout can be classified as
  ROUNDABOUT APPROACH / JUNCTION ONLY.
- These approach stubs are removed from required coverage when no required local
  street depends on them beyond the roundabout.
- Branch/subtree pruning now explicitly ignores roundabout and roundabout-approach
  edges when deciding whether a branch still contains uncovered patrol work.
- The bridge-tree need calculation and bridge-repeat floor also ignore those
  junction-only approach edges.
- Road-edit mode from v0.18.2 remains unchanged.

Goal:
Prevent dead trips down a main strip whose only purpose is to reach an already
non-required roundabout, while leaving genuine frontage/side-street coverage intact.

Deployment:
Replace repository-root files and commit to main. Hard-refresh once after deployment.
