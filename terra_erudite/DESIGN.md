---
name: Terra Erudite
colors:
  surface: '#faf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#faf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1b1c19'
  on-surface-variant: '#434843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#74584a'
  on-secondary: '#ffffff'
  secondary-container: '#fed8c5'
  on-secondary-container: '#795d4e'
  tertiary: '#0d1b03'
  on-tertiary: '#ffffff'
  tertiary-container: '#213013'
  on-tertiary-container: '#879973'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#e3bfad'
  on-secondary-fixed: '#2a170c'
  on-secondary-fixed-variant: '#5a4134'
  tertiary-fixed: '#d6e9be'
  tertiary-fixed-dim: '#bacda4'
  on-tertiary-fixed: '#111f05'
  on-tertiary-fixed-variant: '#3c4c2c'
  background: '#faf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e3e3de'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
  h1:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  h2:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  h3:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  caption:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin: 32px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The brand personality is rooted in the concept of "Organic Modernism." It balances the raw, tactile essence of agriculture with the precision of nutritional science. This design system aims to evoke a sense of grounded authority—feeling as dependable as the earth itself while remaining progressive and accessible. 

The visual style utilizes a high-end minimalist framework enriched by subtle organic textures (such as fine grain or recycled paper overlays). It avoids the coldness of pure digital minimalism by introducing warmth through soft color transitions and thoughtful whitespace, ensuring the user feels invited into a community rather than just a platform.

## Colors
The palette is a direct reflection of the "Healthy Soil. Healthy Food." philosophy. 
- **Deep Forest Green (Primary):** Used for primary actions, branding elements, and navigation to represent growth and vitality.
- **Rich Soil Brown (Secondary):** Used for accents, borders, and secondary buttons to ground the UI in a sense of tradition and reliability.
- **Moss Green (Tertiary):** A lighter, softer green used for success states, interactive highlights, and decorative elements.
- **Eggshell White (Neutral):** The primary background color, providing a warm, non-glare surface that feels more natural and premium than pure white.

## Typography
This design system employs a sophisticated typographic pairing to bridge the gap between tradition and innovation. 
- **Newsreader** is the sturdy serif chosen for headers. Its literary quality suggests established wisdom and deep-rooted knowledge.
- **Work Sans** is the crisp, professional sans-serif used for body text and functional UI elements. Its architectural clarity ensures readability during educational sessions and complex data interactions.
Hierarchies are strictly maintained with generous line heights to ensure a relaxed, educational reading experience.

## Layout & Spacing
The layout follows a 12-column fixed grid centered within the viewport, providing a stable and trustworthy structure. Spacing is governed by an 8px base unit, favoring generous "stack" spacing (vertical rhythm) to prevent information density from overwhelming the user. 

Interactive learning modules and community feeds should utilize nested padding to create clear visual containment. Margins are intentionally wide on desktop to maintain focus on the central content, mirroring the "focus" required in careful cultivation.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows** rather than stark borders. Surfaces are tiered using slight shifts in saturation:
- **Level 0 (Canvas):** The base Eggshell White.
- **Level 1 (Cards):** A slightly lighter or tinted surface with a soft, diffused shadow. Shadows should be tinted with the secondary Soil Brown (`#4E3629`) at very low opacity (5-8%) to maintain warmth.
- **Level 2 (Modals/Popovers):** Higher elevation with more pronounced blurring.

Subtle organic textures—like a very faint noise filter—are applied to the primary canvas to reduce the "digital" feel and mimic physical paper.

## Shapes
The shape language is "Rounded," utilizing a 0.5rem (8px) base radius. This softening of corners reflects the organic nature of soil and food, avoiding the clinical sharpness of industrial systems. 
- **Buttons and Inputs:** Use the base `rounded` (8px).
- **Cards and Containers:** Use `rounded-lg` (16px) to frame content gently.
- **Interactive Badges:** Use `rounded-xl` (24px) or pill shapes to denote community status or progress milestones.

## Components
- **Buttons:** Primary buttons use the Forest Green background with white text. Secondary buttons use a Soil Brown outline or a subtle tinted fill.
- **Cards:** Feature a 1px border in a pale taupe or brown to define boundaries without adding visual weight.
- **Interactive Learning Modules:** Progress indicators should use a "root and sprout" metaphor—growing horizontally as the user completes lessons.
- **Community Chips:** Used for tagging soil types, food categories, or forum topics. These use the Tertiary Moss Green with dark green text.
- **Input Fields:** Bottom-aligned labels that transition to floating labels on focus, emphasizing a "clean and modern" data entry experience.
- **Engagement Feed:** Threaded comments use vertical "root lines" (thin brown strokes) to visually connect community discussions.