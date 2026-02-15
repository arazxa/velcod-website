# Velcod.com Homepage Section Audit

Source: visual and DOM scan of `https://velcod.com` at desktop viewport `1440px` width.

## 1) Top utility/header strip
- **Approx. position/size:** starts at `0px`, height `48px`, full-width.
- **Layout:** thin horizontal strip before hero content.
- **Spacing:** compact vertical space, acts as pre-hero header band.
- **Images/icons:** none detected in this strip.

## 2) Hero section
- **Heading:** "Turn Your Idea into a Live App in 21 Days"
- **Approx. position/size:** top `48px`, height `960px`, full-width.
- **Layout:** large single hero with centered headline/subtext + primary CTA area.
- **Spacing:** very generous vertical spacing (nearly full-screen feel).
- **Typography sizing:** hero heading ~`57px`.
- **Images:** 5 images; mostly supporting badges/logos, largest detected around `145x46`.

## 3) Stats strip
- **Heading/value:** "209+"
- **Approx. position/size:** top `1008px`, height `239px`.
- **Layout:** compact metrics band (e.g., app count and delivery timing).
- **Spacing:** tighter than hero, likely 2-column stat emphasis.
- **Typography sizing:** key stat ~`40px`.
- **Images:** 1 image around `240x63`.

## 4) "Why Velcod" value proposition
- **Heading:** "Your Rapid Launch Partner, Built for Founders"
- **Approx. position/size:** top `1247px`, height `974px`.
- **Layout:** multi-point feature/value cards (grid-like blocks).
- **Spacing:** large section with substantial breathing room between items.
- **Typography sizing:** section heading ~`56px`.
- **Images:** no direct image-heavy visuals detected in this block.

## 5) Case studies / portfolio carousel
- **Heading:** "Apps We Built in 3 Weeks"
- **Approx. position/size:** top `2221px`, height `1170px`.
- **Layout:** story/case-study cards with app visuals and descriptive text.
- **Spacing:** tall section, likely slider/cards with card-to-card spacing.
- **Typography sizing:** section heading ~`56px`.
- **Images:** 5 images; largest detected around `579x506` and `579x482` (dominant screenshots/mockups).

## 6) Brand/logo marquee
- **Heading label area:** "Brands That Trust VELCOD"
- **Approx. position/size:** top `3391px`, height `399px`, with explicit marquee padding.
- **Layout:** horizontal marquee/logo wall.
- **Spacing:** padded top/bottom (~80px each by class behavior).
- **Images:** 51 logo images, common size around `135x135`.

## 7) Process / "How It Works"
- **Heading:** "Your Rapid Launch Partner, Built for Founders" (with process steps beneath)
- **Approx. position/size:** top `3791px`, height `1180px`.
- **Layout:** step-by-step process cards (discovery, build, launch, etc.).
- **Spacing:** substantial vertical stack with repeated card rhythm.
- **Typography sizing:** section heading ~`56px`.
- **Images/icons:** 5 icons/images, small (~`58x58`) supporting each step.

## 8) Video testimonials section
- **Heading:** "Real results from founders like you"
- **Approx. position/size:** top `4971px`, height `915px`.
- **Layout:** testimonial/video grid area.
- **Spacing:** medium-large section; likely card/video tiles with gutters.
- **Background:** light gray (`rgb(247, 247, 247)`) for visual separation.
- **Images:** none detected as static `<img>` (likely embedded media/cards).

## 9) AI acceleration explainer
- **Heading:** "AI Is How We Build Your App Fast"
- **Approx. position/size:** top `5886px`, height `632px`.
- **Layout:** 2-column style (text + supporting visual).
- **Spacing:** moderate section height, denser than hero/case studies.
- **Typography sizing:** heading ~`56px`.
- **Images:** 1 major image around `586x460`.

## 10) Client reviews wall
- **Heading:** "What our clients are saying"
- **Approx. position/size:** top `6518px`, height `988px`.
- **Layout:** review cards + profile visuals.
- **Spacing:** large testimonial area with many small repeated elements.
- **Typography sizing:** heading ~`56px`.
- **Images:** 49 images (avatars/logos/UI snippets), mostly small.

## 11) Rescue/continuation offer
- **Heading:** "Already started building? We can help"
- **Approx. position/size:** top `7506px`, height `656px`.
- **Layout:** likely split section with explanatory copy + one strong illustration.
- **Spacing:** medium section, concise compared to testimonial/FAQ blocks.
- **Typography sizing:** heading ~`56px`.
- **Images:** 1 image around `586x484`.

## 12) FAQ
- **Heading:** "Frequently Asked Questions"
- **Approx. position/size:** top `8162px`, height `1233px`.
- **Layout:** accordion-style Q&A list.
- **Spacing:** tallest text-heavy informational section.
- **Typography sizing:** heading ~`56px`.
- **Images:** none detected.

## 13) Final CTA banner
- **Heading:** "Ready to Turn Your Idea Into An App In Just 3 Weeks While Saving 60% In Development Costs?"
- **Approx. position/size:** top `9395px`, height `539px`.
- **Layout:** conversion-focused CTA with centered messaging.
- **Spacing:** generous but compact relative to FAQ.
- **Typography sizing:** heading ~`56px`.
- **Images:** 2 decorative/supporting images.

## 14) Footer
- **Content:** contact email, services list, platforms list, and other footer links.
- **Approx. position/size:** top `9933px`, height `602px`.
- **Layout:** multi-column footer information architecture.
- **Spacing:** medium-large footer block with grouped link lists.
- **Images:** 5 brand/footer assets.

## Spacing & rhythm observations (global)
- Page uses a **tall-section landing page rhythm** with most major content blocks between ~`632px` and ~`1233px` tall.
- Section transitions are mostly **stacked directly** (little/no empty gap), with separation created by internal padding, heading space, and background changes.
- Repeated headline scale (~`56px`) keeps section hierarchy consistent after the hero.
- Visual density alternates intentionally: **heavy visuals** (portfolio/reviews/logo wall) followed by **copy-focused sections** (AI explainer, FAQ, CTA).
