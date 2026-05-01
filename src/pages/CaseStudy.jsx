
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionLabel from '../components/shared/SectionLabel';
import GlassCard from '../components/shared/GlassCard';

// --- Case study data store ---
const caseStudies = {
  'unlocking-memories': {
    title: 'Unlocking Memories, Guiding Journey',
    impact: 'Helping caregivers and users navigate dementia aid products with confidence and empathy.',
    category: 'Dementia Aid Product Showcase',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/686d22073_generated_1627223a.png',
    snapshot: { role: 'UX/UI Designer', duration: 'Academic Project', tools: 'Figma, Adobe Illustrator', type: 'Product Showcase', focus: ['UX Research', 'Accessibility', 'UI Design', 'Caregiving'] },
    problem: { headline: 'Caregivers struggled to find and understand suitable dementia aid products.', who: 'Family caregivers and healthcare workers supporting dementia patients.', why: 'Existing product showcases were clinical and overwhelming — they created confusion rather than clarity at a critical decision-making moment.' },
    insights: ['Caregivers felt overwhelmed by medical jargon on product pages.', 'Product benefits were buried under technical specifications.', 'Trust was hard to establish without clear, empathetic language.', 'Users needed reassurance, not just information.'],
    persona: { name: 'Sarah, 52', desc: 'A family caregiver managing her mother\'s dementia diagnosis who needs clear, compassionate guidance on choosing assistive products.' },
    direction: 'Empathy-first content structure was prioritised over feature lists. Plain language replaced medical jargon. Visual hierarchy guided users from emotional reassurance to practical details. Accessibility standards were applied throughout.',
    process: ['Reviewed existing product information and identified pain points', 'Mapped caregiver emotional journey across the decision-making process', 'Restructured content hierarchy around user needs', 'Designed accessible, empathetic UI layouts', 'Iterated on tone and visual presentation'],
    features: ['Plain-language product descriptions', 'Empathetic onboarding flow for caregivers', 'Accessible colour contrast and typography', 'Clear comparison structure for product selection'],
    challenges: ['Balancing clinical accuracy with accessible language', 'Designing for a highly emotional user context', 'Ensuring accessibility across different ability levels'],
    reflection: { learned: 'Design for high-stakes emotional contexts requires patience, empathy, and deep user understanding.', improve: 'Conduct usability testing with actual caregivers to validate language and clarity choices.', next: 'Explore multilingual support for diverse caregiver communities.' },
    nextSlug: 'skillup',
    nextTitle: 'SkillUp',
  },
  'skillup': {
    title: 'SkillUp',
    impact: 'Motivating users to discover, learn, and grow skills through community-driven challenges.',
    category: 'Skill Library & Community Hub',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/67616339a_generated_0076cc78.png',
    snapshot: { role: 'Product Designer', duration: 'Academic Project', tools: 'Figma, Prototyping', type: 'Digital Platform', focus: ['Product Design', 'Community', 'Gamification', 'Learning Experience'] },
    problem: { headline: 'Users lacked motivation and structure to consistently learn new skills.', who: 'Young adults aged 18–30 who want to upskill but struggle with consistency.', why: 'Existing learning platforms felt isolating and progress felt invisible — leading to drop-off and disengagement.' },
    insights: ['Users gave up within 2 weeks without visible progress markers.', 'Learning felt lonely without peer accountability.', 'No clear skill pathway made starting feel overwhelming.', 'Gamification elements increased motivation and return visits.'],
    persona: { name: 'Kai, 22', desc: 'A recent graduate who wants to grow professionally but needs structure, community, and visible progress to stay motivated.' },
    direction: 'A progression-first design approach was taken. Skill paths were made visual and milestone-based. Community challenges created social accountability. Gamification was purposeful — rewarding real learning, not just logins.',
    process: ['Interviewed 6 users about their current learning habits', 'Identified key motivation and drop-off patterns', 'Designed 3 core user flows: discover, learn, challenge', 'Built interactive prototype in Figma', 'Gathered feedback and iterated on navigation structure'],
    features: ['Visual skill pathway with milestone markers', 'Community challenges with leaderboards', 'Curated skill library with structured resources', 'Progress tracking and achievement system'],
    challenges: ['Avoiding hollow gamification that feels manipulative', 'Balancing community features with focused learning', 'Making skill paths feel achievable, not overwhelming'],
    reflection: { learned: 'Motivation design requires both extrinsic hooks and intrinsic purpose — one without the other doesn\'t hold.', improve: 'Test long-term retention with a real user cohort over 4 weeks.', next: 'Explore mentor-matching feature to connect learners with practitioners.' },
    nextSlug: 'buddyboost',
    nextTitle: 'BuddyBoost',
  },
  'buddyboost': {
    title: 'BuddyBoost',
    impact: 'Helping introverts in new countries build genuine social connections with confidence.',
    category: 'Community Connection Platform',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/c556ee27e_generated_d49615d6.png',
    snapshot: { role: 'UX/UI Designer', duration: 'Academic Project', tools: 'Figma, User Research', type: 'Social Platform', focus: ['Inclusive Design', 'Social UX', 'Onboarding', 'Emotional Design'] },
    problem: { headline: 'Introverts relocating to new countries felt isolated and struggled to form real connections.', who: 'Introverted young adults aged 18–28 who have recently moved to a new country.', why: 'Existing social apps were designed for extroverts — loud, fast-paced, and socially demanding. They created anxiety rather than connection for introverted users.' },
    insights: ['Introverts avoided platforms that forced immediate social exposure.', 'Shared interests were more important than proximity when forming connections.', 'Slow, low-pressure onboarding dramatically reduced anxiety.', 'Group activities felt safer than one-on-one cold introductions.'],
    persona: { name: 'Mia, 21', desc: 'An introvert who moved abroad for university and wants to build meaningful connections but feels paralysed by traditional social apps.' },
    direction: 'Emotional safety was the core design principle. Onboarding was gradual and judgment-free. Connection started through shared interests and group activities — never forced one-on-one. UI was calm, warm, and low-stimulus.',
    process: ['Conducted empathy interviews with 5 introverts living abroad', 'Mapped emotional journey from arrival to social comfort', 'Designed low-pressure onboarding with interest-matching', 'Wireframed community activity discovery flow', 'Built and tested prototype with target users'],
    features: ['Interest-based matching before profile exposure', 'Group activity discovery for low-pressure entry points', 'Calm, low-stimulus UI design language', 'Gradual social confidence progression system'],
    challenges: ['Designing for emotional vulnerability without being condescending', 'Balancing safety features with genuine social discovery', 'Preventing the platform from feeling clinical or therapy-like'],
    reflection: { learned: 'Designing for emotional states requires as much care as designing for tasks. Feeling safe is a core usability need.', improve: 'Partner with psychologists to validate the emotional design approach.', next: 'Explore a "comfort zone challenge" feature to help users stretch gradually.' },
    nextSlug: 'mobile-app-ui',
    nextTitle: 'Mobile App UI Exploration',
  },
  'mobile-app-ui': {
    title: 'Mobile App UI Exploration',
    impact: 'Redefining how users navigate complex mobile interfaces with clarity and speed.',
    category: 'UI Design',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/0238778a7_generated_4f31b8c6.png',
    snapshot: { role: 'UI Designer', duration: '4 weeks', tools: 'Figma, Protopie', type: 'Mobile App', focus: ['UI Design', 'Interaction Design', 'Prototyping'] },
    problem: { headline: 'Users struggled to complete core tasks efficiently.', who: 'Mobile users aged 18–35 using productivity apps daily.', why: 'Poor navigation hierarchy and inconsistent UI patterns caused frustration and drop-off.', },
    insights: ['Users abandoned tasks when navigation required more than 3 taps.', 'Inconsistent button placement broke muscle memory.', 'Lack of visual hierarchy made content difficult to scan.', 'Users preferred gesture-based navigation over tab bars.'],
    persona: { name: 'Jamie, 26', desc: 'Busy professional who uses 4–5 apps daily and values speed and simplicity over feature depth.' },
    direction: 'A gesture-first approach was chosen to reduce cognitive load. A consistent 8-point grid system was applied throughout. Card-based layouts improved scannability and visual grouping. Color was used sparingly — only to signal action.',
    process: ['Mapped user journeys from 5 real users', 'Sketched 3 navigation models', 'Wireframed key screens in low fidelity', 'Built interactive prototype in Figma', 'Iterated based on peer feedback'],
    features: ['Bottom gesture nav replacing traditional tab bar', 'Card-based content grouping', 'Contextual actions reducing menu depth', 'Consistent 8pt spacing system'],
    challenges: ['Balancing feature visibility with minimal UI', 'Designing for one-handed use on large screens', 'Maintaining accessibility while using color sparingly'],
    reflection: { learned: 'Constraints drive better design decisions. Removing features often improved the experience.', improve: 'Conduct usability testing with real users rather than peer review.', next: 'Explore dark mode variant and accessibility audit.' },
    nextSlug: 'web-interface-redesign',
    nextTitle: 'Web Interface Redesign',
  },
  'web-interface-redesign': {
    title: 'Web Interface Redesign',
    impact: 'Turning a cluttered web platform into a clear, conversion-focused experience.',
    category: 'Web Design',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/fc948b90b_generated_9cdd618e.png',
    snapshot: { role: 'UX/UI Designer', duration: '6 weeks', tools: 'Figma, Adobe Illustrator', type: 'Web Redesign', focus: ['Information Architecture', 'Visual Hierarchy', 'Responsive Design'] },
    problem: { headline: 'The existing interface buried key actions and confused new users.', who: 'First-time and returning web users across all devices.', why: 'High bounce rate and low task completion pointed to fundamental usability failures.' },
    insights: ['Landing page had 11 competing calls-to-action.', 'Navigation labels were jargon-heavy and unclear.', 'Mobile layout was broken on most common screen sizes.', 'Page load felt cluttered, reducing trust.'],
    persona: { name: 'Sam, 34', desc: 'A decision-maker who visits a website once and needs to understand value within 10 seconds.' },
    direction: 'A single primary CTA per page was established. Visual hierarchy was rebuilt using type scale and white space. The navigation was simplified to 5 core items. A consistent grid ensured full responsiveness.',
    process: ['Heuristic evaluation of existing site', 'Competitor analysis of 6 similar platforms', 'Card sorting to reorganize navigation', 'Low-fidelity wireframes for all key pages', 'High-fidelity mockups and prototype'],
    features: ['Single-focus hero section', 'Simplified 5-item navigation', 'Consistent content grid', 'Responsive breakpoints for mobile, tablet, desktop'],
    challenges: ['Stakeholder attachment to old feature placements', 'Maintaining brand identity while modernising visually', 'Designing within a fixed component library'],
    reflection: { learned: 'Simplifying is harder than adding. Every removed element required justification.', improve: 'Involve stakeholders earlier in the process to reduce late-stage revisions.', next: 'A/B test the new vs old homepage to validate the redesign.' },
    nextSlug: 'design-system-study',
    nextTitle: 'Design System Study',
  },
  'design-system-study': {
    title: 'Design System Study',
    impact: 'Building a single source of truth that keeps teams aligned and products consistent.',
    category: 'Systems Design',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/00049110f_generated_387a7af8.png',
    snapshot: { role: 'Design Systems Designer', duration: '5 weeks', tools: 'Figma, Tokens Studio', type: 'Design System', focus: ['Component Design', 'Design Tokens', 'Documentation'] },
    problem: { headline: 'Inconsistent UI across screens slowed development and confused users.', who: 'Design and engineering teams building a growing product.', why: 'Without shared standards, every screen reinvented the wheel — wasting time and creating visual debt.' },
    insights: ['6 different button styles were in use across the product.', 'Color values were hardcoded, making theming impossible.', 'Developers and designers used different terminology for the same components.', 'No documentation existed for spacing or type rules.'],
    persona: { name: 'Riley, Designer', desc: 'A mid-level designer spending 30% of time recreating components that already exist elsewhere in the product.' },
    direction: 'A token-based system was built first, then components. Atomic design principles structured the library. Documentation was written alongside each component — not after.',
    process: ['Audit of existing UI across all screens', 'Define design token structure (color, spacing, type)', 'Build base components: buttons, inputs, cards', 'Compose larger patterns from base components', 'Write usage documentation for each component'],
    features: ['Token-based color and spacing system', '40+ reusable components', 'Light and dark mode support', 'Usage guidelines per component'],
    challenges: ['Deciding on token naming conventions', 'Balancing flexibility with consistency', 'Getting developer buy-in on token usage'],
    reflection: { learned: 'Documentation is as important as the components themselves.', improve: 'Build with a real product context from the start, not in isolation.', next: 'Version control the system and establish a contribution model.' },
    nextSlug: 'dashboard-ui-concept',
    nextTitle: 'Dashboard UI Concept',
  },
  'dashboard-ui-concept': {
    title: 'Dashboard UI Concept',
    impact: 'Making complex data readable and actionable at a glance.',
    category: 'Product Design',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/c641ef0ed_generated_bc50e0f0.png',
    snapshot: { role: 'Product Designer', duration: '3 weeks', tools: 'Figma, Whimsical', type: 'Dashboard', focus: ['Data Visualisation', 'Information Design', 'UI Design'] },
    problem: { headline: 'Users couldn\'t extract meaningful insight from raw data screens.', who: 'Analysts and team leads who monitor KPIs daily.', why: 'Poor data grouping and visual noise made it impossible to act on information quickly.' },
    insights: ['Users spent an average of 4 minutes finding one key metric.', 'Charts lacked context — no targets or comparisons shown.', 'Data tables were used where visualisations were more effective.', 'Mobile view was completely unusable.'],
    persona: { name: 'Alex, 41', desc: 'A team lead who checks the dashboard first thing each morning and needs the most important metric visible instantly.' },
    direction: 'A progressive disclosure approach was applied — summary first, detail on demand. Charts were chosen based on data type, not aesthetics. A clear visual hierarchy separated primary from secondary metrics.',
    process: ['Defined 5 key user goals for the dashboard', 'Mapped data hierarchy from most to least critical', 'Sketched layout concepts', 'Wireframed desktop and mobile views', 'Designed final UI with real-looking data'],
    features: ['At-a-glance KPI summary row', 'Contextual charts with targets and trends', 'Collapsible detail sections', 'Responsive layout for desktop and tablet'],
    challenges: ['Fitting dense data without overwhelming the screen', 'Choosing chart types objectively', 'Designing for different levels of data literacy'],
    reflection: { learned: 'Great dashboard design is mostly about what to leave out.', improve: 'Test with actual analysts using real workflows.', next: 'Explore personalisation — letting users pin their most-used metrics.' },
    nextSlug: 'user-research-study',
    nextTitle: 'User Research Study',
  },
  'user-research-study': {
    title: 'User Research Study',
    impact: 'Grounding design decisions in real human behaviour rather than assumption.',
    category: 'UX Research',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/1e3cd71ea_generated_5eda4a52.png',
    snapshot: { role: 'UX Researcher', duration: '4 weeks', tools: 'Maze, Notion, Figma', type: 'Research Study', focus: ['User Interviews', 'Usability Testing', 'Synthesis'] },
    problem: { headline: 'Design decisions were based on team assumptions, not real user needs.', who: 'A product team building a tool for small business owners.', why: 'Features were being built that users didn\'t ask for, while real pain points went unaddressed.' },
    insights: ['80% of users ignored the most prominent feature in the app.', 'The primary use case happened outside the intended flow.', 'Language used in the UI didn\'t match how users described their own tasks.', '3 out of 5 users failed the key task in usability testing.'],
    persona: { name: 'Dana, 38', desc: 'A small business owner with no technical background who needs tools that "just work" with minimal setup.' },
    direction: 'Research was conducted in 3 phases: discovery interviews, task-based usability testing, and a survey. Findings were synthesised into a prioritised insight map and presented to the full product team.',
    process: ['Screened and recruited 8 participants', 'Ran 45-min semi-structured interviews', 'Conducted moderated usability tests on prototype', 'Synthesised findings using affinity mapping', 'Presented insights with prioritised recommendations'],
    features: ['8 user interviews conducted', 'Usability test with 5 participants', 'Affinity map with 60+ observations', 'Prioritised recommendation report'],
    challenges: ['Recruiting the right participants within time constraints', 'Staying objective when findings contradicted team assumptions', 'Translating qualitative data into clear, actionable insights'],
    reflection: { learned: 'The most surprising finding is often the most valuable one.', improve: 'Involve the product team in synthesis, not just the output.', next: 'Run a follow-up test after the design changes are implemented.' },
    nextSlug: 'landing-page-design',
    nextTitle: 'Landing Page Design',
  },
  'landing-page-design': {
    title: 'Landing Page Design',
    impact: 'Turning visitor curiosity into confident action through focused visual storytelling.',
    category: 'Web Design',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/311c5ce77_generated_b39a4ce4.png',
    snapshot: { role: 'UI Designer', duration: '2 weeks', tools: 'Figma, Adobe Illustrator', type: 'Landing Page', focus: ['Visual Design', 'Conversion Design', 'Copywriting Direction'] },
    problem: { headline: 'The existing landing page failed to communicate value clearly.', who: 'First-time visitors with no prior brand awareness.', why: 'Visitors left without understanding what the product does or why they should care.' },
    insights: ['Users couldn\'t explain what the product did after 30 seconds on the page.', 'The hero section had no clear value proposition.', 'Social proof was buried below the fold.', 'CTA was vague — "Learn More" instead of a specific action.'],
    persona: { name: 'Morgan, 29', desc: 'A curious first-time visitor who arrives from a social media ad and needs immediate clarity on what\'s being offered.' },
    direction: 'One clear job per section. Hero answers "what is this and why do I care?" immediately. Social proof is surfaced early. A single CTA is repeated strategically without feeling repetitive.',
    process: ['Analysed heatmaps of existing page', 'Rewrote headline hierarchy with copywriter', 'Designed 3 hero layout variants', 'A/B tested CTA label with 50 users', 'Final high-fidelity design with responsive layouts'],
    features: ['Value-first hero with single CTA', 'Early social proof placement', 'Scannable benefit sections', 'Mobile-optimised layout'],
    challenges: ['Getting alignment on copy before finalising layout', 'Balancing marketing goals with user-centred design', 'Designing for both cold and warm traffic'],
    reflection: { learned: 'Words are a design element. Layout without good copy underperforms.', improve: 'Run a 5-second test earlier in the process to validate the headline.', next: 'Design and test a variant with a video hero.' },
    nextSlug: 'prototype-experiment',
    nextTitle: 'Prototype Experiment',
  },
  'prototype-experiment': {
    title: 'Prototype Experiment',
    impact: 'Exploring the boundaries of micro-interaction design to elevate perceived product quality.',
    category: 'Prototyping',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/c1f9b168e_generated_2d53621a.png',
    snapshot: { role: 'Interaction Designer', duration: '3 weeks', tools: 'Figma, ProtoPie, Lottie', type: 'Prototype', focus: ['Micro-interactions', 'Motion Design', 'Prototyping'] },
    problem: { headline: 'Static mockups failed to communicate the intended feel of the product.', who: 'Designers and stakeholders reviewing a new product concept.', why: 'Without motion, key interaction moments felt flat and unpersuasive in presentations.' },
    insights: ['Stakeholders approved static designs but questioned them in development.', 'Motion design added perceived quality beyond the visual layer.', 'Key transitions like page load and state change were unaddressed in static files.', 'Developers lacked specifications for animation timing and easing.'],
    persona: { name: 'Chris, Designer', desc: 'A product designer who knows the product should feel premium but struggles to communicate "feel" through static screens.' },
    direction: 'Each interaction was mapped to a user moment — not added for decoration. Easing curves were documented. Transitions served orientation, not entertainment. A motion vocabulary was established.',
    process: ['Identified 8 key interaction moments', 'Defined motion principles (purposeful, subtle, fast)', 'Prototyped each interaction in ProtoPie', 'Documented timing and easing for dev handoff', 'Compiled into an interactive demo deck'],
    features: ['8 fully prototyped interaction moments', 'Motion principles documentation', 'Developer-ready easing and duration specs', 'Interactive demo for stakeholder review'],
    challenges: ['Avoiding gratuitous animation that distracts', 'Keeping prototypes manageable in scope', 'Communicating motion specs in a handoff format developers could use'],
    reflection: { learned: 'Motion is a communication tool, not a decoration.', improve: 'Build a shared motion library earlier so it scales across the product.', next: 'Explore haptic feedback patterns for mobile interactions.' },
    nextSlug: 'branding-visual-direction',
    nextTitle: 'Branding & Visual Direction',
  },
  'branding-visual-direction': {
    title: 'Branding & Visual Direction',
    impact: 'Giving a brand a consistent visual voice it can grow with.',
    category: 'Visual Design',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/bb08a7467_generated_d0b5d435.png',
    snapshot: { role: 'Visual Designer', duration: '5 weeks', tools: 'Figma, Adobe Illustrator, Photoshop', type: 'Branding', focus: ['Brand Identity', 'Typography', 'Visual Language'] },
    problem: { headline: 'The brand looked different everywhere — inconsistent and untrustworthy.', who: 'A growing startup with a team of 3 designers using different visual references.', why: 'Without a defined visual system, the brand communicated different things across channels.' },
    insights: ['Logo was used in 4 different colour variations with no rule.', 'Typography was inconsistent across web, print, and social.', 'Brand colours had no defined palette or usage hierarchy.', 'Illustrations and photography had conflicting styles.'],
    persona: { name: 'The Brand', desc: 'An emerging startup that wants to feel premium and credible but currently reads as unpolished and inconsistent.' },
    direction: 'A visual identity system was built from core principles first: clarity, confidence, and approachability. Every visual decision traced back to these values. The output was a living brand guide, not a static PDF.',
    process: ['Brand audit across all existing touchpoints', 'Defined 3 core visual principles', 'Built colour system with usage rules', 'Defined typography scale and pairing', 'Designed logo lockups and usage guidelines'],
    features: ['Primary and secondary colour palette with usage rules', 'Typography system with 3 levels', 'Logo usage guidelines and clear space rules', 'Icon and illustration style direction'],
    challenges: ['Balancing founder preferences with what the audience responds to', 'Creating a system flexible enough to grow with the brand', 'Getting team-wide adoption of the new guidelines'],
    reflection: { learned: 'A brand system is only as useful as its adoption. Designing for handoff matters as much as the design itself.', improve: 'Run brand perception testing with target audience before finalising.', next: 'Apply the system to a full marketing campaign and measure consistency.' },
    nextSlug: 'frontend-practice',
    nextTitle: 'Front-End Practice',
  },
  'frontend-practice': {
    title: 'Front-End Practice',
    impact: 'Bridging the gap between design intent and technical implementation.',
    category: 'Development',
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/82e8b6485_generated_2ac3223d.png',
    snapshot: { role: 'Designer + Developer', duration: '6 weeks', tools: 'HTML, CSS, Python, Figma', type: 'Development', focus: ['Front-End Development', 'Design-to-Code', 'Responsive Layout'] },
    problem: { headline: 'Designs were being built incorrectly because designers couldn\'t communicate implementation details.', who: 'A designer who wants to understand how their work is built.', why: 'The gap between design files and coded output caused quality loss and miscommunication.' },
    insights: ['Spacing inconsistencies between design and code were the most common issue.', 'Designers didn\'t understand browser rendering constraints.', 'Font rendering differed from design tools — designs needed adjustment.', 'Responsive behaviour was never specified in design handoffs.'],
    persona: { name: 'Aiman', desc: 'A designer who wants to understand the medium they are designing for, and communicate more precisely with developers.' },
    direction: 'Built real interfaces from Figma designs using HTML and CSS. Focused on pixel-accurate implementation, responsive breakpoints, and understanding where design meets engineering constraints.',
    process: ['Selected 5 real UI designs to implement', 'Built each in HTML/CSS from scratch', 'Compared output with original design', 'Documented all gaps and learnings', 'Iterated designs based on what was learned'],
    features: ['5 fully coded UI components', 'Responsive layouts built from scratch', 'CSS custom properties matching design tokens', 'Documented gap analysis between design and code'],
    challenges: ['Understanding box model and how it affects spacing', 'Cross-browser rendering differences', 'Translating Figma auto-layout logic into Flexbox'],
    reflection: { learned: 'Designing for the medium means understanding the medium. Building interfaces made me a better designer.', improve: 'Explore CSS Grid for more complex layouts.', next: 'Learn React to build interactive design prototypes in code.' },
    nextSlug: 'mobile-app-ui',
    nextTitle: 'Mobile App UI Exploration',
  },
};

// --- Sub-components ---

function SectionDivider() {
  return <div className="w-full h-px bg-border/50 my-16" />;
}

function ProcessStep({ step, index }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-xs font-bold text-primary">{index + 1}</span>
      </div>
      <p className="text-sm text-foreground/80 pt-1.5 leading-relaxed">{step}</p>
    </div>
  );
}

function InsightItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
      <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
      <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
    </div>
  );
}

function ChallengeItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
    </div>
  );
}

// --- Main page ---

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = caseStudies[slug];

  if (!cs) {
    return (
      <div className="pt-40 px-[8vw] text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Case study not found</h1>
        <Link to="/more-works" className="text-primary hover:underline text-sm">← Back to Works</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      {/* ── 1. Hero ── */}
      <section className="px-[8vw] mb-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <Link to="/more-works" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
              <ArrowLeft className="w-4 h-4" />
              Back to More Works
            </Link>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">{cs.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              {cs.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {cs.impact}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 glass-strong rounded-3xl overflow-hidden">
              <img src={cs.image} alt={cs.title} className="w-full aspect-video object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="px-[8vw]">
        <div className="max-w-5xl mx-auto">

          {/* ── 2. Quick Snapshot ── */}
          <ScrollReveal>
            <GlassCard className="p-8 md:p-10 mb-16" hover={false}>
              <p className="text-xs font-bold tracking-widest uppercase text-primary/50 mb-6">Quick Snapshot</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { label: 'Role', value: cs.snapshot.role },
                  { label: 'Duration', value: cs.snapshot.duration },
                  { label: 'Tools', value: cs.snapshot.tools },
                  { label: 'Type', value: cs.snapshot.type },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
                <div className="col-span-2 md:col-span-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">Focus Areas</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.snapshot.focus.map((f) => (
                      <span key={f} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/8 border border-primary/15 text-primary">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* ── 3. Problem ── */}
          <ScrollReveal>
            <SectionLabel label="The Problem" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{cs.problem.headline}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <GlassCard className="p-7">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3">Who is affected</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{cs.problem.who}</p>
              </GlassCard>
              <GlassCard className="p-7">
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3">Why it matters</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{cs.problem.why}</p>
              </GlassCard>
            </div>
          </ScrollReveal>

          {/* ── 4. Research & Insights ── */}
          <ScrollReveal>
            <SectionLabel label="Research & Insights" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Key findings</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {cs.insights.map((insight) => (
                <GlassCard key={insight} className="p-6">
                  <InsightItem text={insight} />
                </GlassCard>
              ))}
            </div>
            {cs.persona && (
              <GlassCard className="p-8 mb-16 relative overflow-hidden" hover={false}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF]/5 via-transparent to-transparent pointer-events-none" />
                <div className="relative flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-[#5856D6] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">{cs.persona.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-1">User Persona</p>
                    <p className="text-base font-bold text-foreground mb-2">{cs.persona.name}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.persona.desc}</p>
                  </div>
                </div>
              </GlassCard>
            )}
          </ScrollReveal>

          {/* ── 5. Design Direction ── */}
          <ScrollReveal>
            <SectionLabel label="Design Direction" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Approach & decisions</h2>
            <GlassCard className="p-8 md:p-10 mb-16" hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">{cs.direction}</p>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* ── 6. Process ── */}
          <ScrollReveal>
            <SectionLabel label="Process" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">How it came together</h2>
            <GlassCard className="p-8 md:p-10 mb-16" hover={false}>
              <div className="space-y-5">
                {cs.process.map((step, i) => (
                  <ProcessStep key={i} step={step} index={i} />
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* ── 7. Final UI ── */}
          <ScrollReveal>
            <SectionLabel label="Final UI" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Key features & screens</h2>
            <div className="glass-strong rounded-3xl overflow-hidden mb-6">
              <img src={cs.image} alt={`${cs.title} final UI`} className="w-full aspect-video object-cover" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-16">
              {cs.features.map((f) => (
                <GlassCard key={f} className="p-6">
                  <FeatureItem text={f} />
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 8. Challenges ── */}
          <ScrollReveal>
            <SectionLabel label="Challenges" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Constraints & trade-offs</h2>
            <div className="space-y-4 mb-16">
              {cs.challenges.map((c) => (
                <GlassCard key={c} className="p-6">
                  <ChallengeItem text={c} />
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 9. Reflection ── */}
          <ScrollReveal>
            <SectionLabel label="Outcome & Reflection" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">What I learned</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-20">
              {[
                { icon: Lightbulb, label: 'Learned', text: cs.reflection.learned },
                { icon: Target, label: 'Would Improve', text: cs.reflection.improve },
                { icon: ArrowRight, label: 'What\'s Next', text: cs.reflection.next },
              ].map(({ icon: Icon, label, text }) => (
                <GlassCard key={label} className="p-7 h-full" hover={false}>
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">{label}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>

          {/* ── 10. Navigation ── */}
          <ScrollReveal>
            <div className="glass-strong rounded-3xl p-8 md:p-12 flex flex-col sm:flex-row justify-between items-center gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF]/5 via-[#EBEBFF]/8 to-[#E0F7FA]/5 pointer-events-none" />
              <Link
                to="/more-works"
                className="relative inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Works
              </Link>
              <Link
                to={`/case-study/${cs.nextSlug}`}
                className="relative inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
              >
                Next: {cs.nextTitle}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}