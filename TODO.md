# Contact Section Renovation Plan

## Information Gathered

1. **Current State**: `src/components/sections/Contact.tsx` only contains a contact form
2. **Project Context**: Next.js + Tailwind CSS + TypeScript website for "Pondok Pesanten Dar Al-Qur'an"
3. **Color Scheme**: Islamic primary green (`#027532`), neutral grays
4. **Available Icons**: `MapPin`, `Phone`, `Mail`, `Clock`, `Send` from Icons.tsx
5. **Subpages**: `src/app/kontak/` with `alamat/` and `sosial-media/` directories
6. **Tailwind Config**: Custom shadows (`shadow-soft`, `shadow-elevated`) and colors defined in globals.css

## Plan: Redesign Contact Section with 3 Boxes

### Box 1: Informasi Kontak (Contact Information)
- Address display
- Phone number(s)
- Email address
- Operating hours
- Use icons: MapPin, Phone, Mail, Clock

### Box 2: Peta Lokasi (Location Map)
- Google Maps embed placeholder
- Visual location representation
- Styled container with shadow

### Box 3: Hubungi Kami (Contact Form)
- Keep existing form functionality
- Name, Email, Message fields
- Submit button with loading state

### Layout Design
- Three-column grid on desktop
- Single column on mobile
- Consistent spacing and shadow styling
- Rounded corners matching design system (32px)
- Background decoration elements

## Files to Edit
- `src/components/sections/Contact.tsx` - Main implementation

## Implementation Steps
1. ✅ Create three-column layout structure
2. ✅ Build Informasi Kontak box with contact details
3. ✅ Add Peta Lokasi box with map placeholder
4. ✅ Redesign Hubungi Kami form to fit the box layout
5. ✅ Ensure responsive design for mobile devices
6. ✅ Apply consistent styling (shadows, rounded corners, colors)

## Follow-up Steps
- Test responsiveness across screen sizes
- Verify form validation works correctly
- Check color contrast and accessibility

