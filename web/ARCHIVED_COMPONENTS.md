# Archived Components Documentation

## ROI Calculator Section
**Status**: Archived (Removed from homepage)
**Archive Date**: 2026-06-17

### Component Used
- `RoiCalculator` from `@/components/RoiCalculator`

### Full Section Code
```tsx
{/* ROI CALCULATOR SECTION */}
<section className="py-24 bg-soft-white relative" id="roi-calculator">
  <div className="max-w-7xl mx-auto px-6">
    <ScrollReveal delay={1} className="mb-12 max-w-3xl">
      <h2 className="font-barlow-condensed text-4xl md:text-5xl font-bold text-deep-blue uppercase mb-4">
        Calculate Your Return on Investment
      </h2>
      <p className="font-barlow text-lg text-muted-gray">
        Discover how much you can save by automating your assembly line. Our interactive calculator provides an instant estimate of your payback period and 5-year savings.
      </p>
    </ScrollReveal>
    
    <ScrollReveal delay={2}>
      <RoiCalculator />
    </ScrollReveal>
  </div>
</section>
```

### Import Statement (if re-adding)
```tsx
import { RoiCalculator } from "@/components/RoiCalculator";
```

### Styling Notes
- Background: `bg-soft-white`
- Padding: `py-24`
- Max width: `max-w-7xl`
- Uses ScrollReveal animation component
- Responsive design with proper spacing

### To Re-implement
1. Add the import statement back to `src/app/page.tsx`
2. Copy the section code into the appropriate location in the JSX
3. Ensure `ScrollReveal` component is imported
4. Verify `RoiCalculator` component exists in `@/components/`

---

## Notes for Future Development
- Keep this file updated when archiving additional components
- All archived components include full code snippets for easy restoration
- Consider version control for tracking changes
