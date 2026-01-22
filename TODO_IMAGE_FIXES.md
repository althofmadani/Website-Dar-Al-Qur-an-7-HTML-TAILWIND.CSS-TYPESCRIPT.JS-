# Image Fixes Plan

## Issues Identified:
1. **Logo Image** - Missing height/width aspect ratio maintenance
2. **Fill Images** - Parent elements with invalid position (static instead of absolute/fixed/relative)

## Files to Edit:
1. `src/components/layout/Navbar.tsx` - Fix logo aspect ratio
2. `src/components/sections/Guru.tsx` - Add relative positioning to parent divs
3. `src/components/sections/Profil.tsx` - Add relative positioning to parent div

## Fixes Applied:

### Navbar.tsx
- [x] Add `height: "auto"` to logo Image style

### Guru.tsx
- [x] Add `relative` to pengasuh image parent div
- [x] Add `relative` to teacher images parent div (w-28 h-28)
- [x] Add `relative` to outer container div

### Profil.tsx
- [x] Add `relative` to main image parent div (already had relative)

## Status: COMPLETED

## Summary:
- Fixed logo aspect ratio by adding `height: "auto"` to Navbar.tsx
- Added `relative` positioning to 5 parent divs of fill images in Guru.tsx (1 pengasuh + 4 teachers)
- Profil.tsx already had proper `relative` positioning on parent divs

