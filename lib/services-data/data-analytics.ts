import { ServiceCategory } from "./types"

export const dataAnalytics: ServiceCategory = {
  title: "Data, Analytics & Reporting",
  slug: "data-analytics-reporting",
  description:
    "We build the analytics infrastructure that turns raw data into revenue decisions. Dashboards your team trusts, attribution that traces ads to closed deals, predictive models that forecast pipeline, and user experience analysis that converts more visitors — all connected to your CRM.",
  sectionTitle: "You Have the Data. You Just Can't See It.",
  sectionText:
    "Most B2B companies are drowning in data and starving for insight. GA4 is partially configured. CRM dashboards show activity, not revenue. Attribution is broken — half your leads show as 'Direct.' Marketing reports on CPL while sales reports on pipeline, and leadership can't tell which campaigns actually generate revenue. We fix this by building analytics systems that give every team a single source of truth.",
  whyTitle: "Why Insightstap for Analytics & Reporting",
  whyText:
    "Analytics isn't a reporting exercise — it's decision-making infrastructure. We connect every data source into one layer: GA4, HubSpot, Salesforce, ad platforms, enrichment tools, and product analytics. We model attribution across every touchpoint. We build dashboards that update in real time. And we deploy predictive models that forecast pipeline with accuracy your spreadsheets can't match.",
  seo: {
    title: "Data, Analytics & Reporting | Revenue Analytics, Dashboards & Attribution — Insightstap",
    meta: "Build analytics infrastructure that connects CRM, ads, and web data into revenue insights. Dashboards, attribution, forecasting, and UX analysis for B2B.",
    keywords: "Revenue Analytics, B2B Dashboards, Attribution Modeling, Predictive Forecasting, GA4, Data Analytics, CRM Analytics, UX Analysis, Frontend Development",
  },
  services: [
    {
      title: "Revenue Data Analytics",
      slug: "revenue-data-analytics",
      opening:
        "Every B2B company has data. Most of it is scattered, disconnected, and useless for decisions. Web analytics lives in GA4. Pipeline data lives in HubSpot. Ad performance lives in LinkedIn and Google. Nobody has connected these into a single revenue picture. Revenue data analytics connects everything into one unified layer — so marketing, sales, and leadership all see the same truth.",
      metrics: [
        { value: "73%", label: "of B2B data goes unused because it's siloed across disconnected tools" },
        { value: "2x", label: "faster decision-making with unified revenue data" },
        { value: "35%", label: "improvement in marketing ROI when revenue data drives budget allocation" },
      ],
      approach: [
        { title: "Data Source Integration", description: "We connect GA4, HubSpot, Salesforce, ad platforms, enrichment tools, and product analytics into one unified data layer. No more siloed dashboards.", icon: "Database" },
        { title: "Revenue Metrics Design", description: "We define the metrics that matter — CAC, LTV, pipeline velocity, deal conversion rates, channel ROAS, and cohort performance — aligned to your business model.", icon: "BarChart3" },
        { title: "Cross-Channel Analysis", description: "Performance analyzed across every channel — ads, outbound, inbound, ABM, events — with common attribution and consistent definitions.", icon: "Layers" },
        { title: "Leadership Reporting", description: "Executive-ready reports that answer the questions leadership actually asks: Where is revenue coming from? What's working? Where should we invest next?", icon: "TrendingUp" },
      ],
      philosophy: [
        { frontTitle: "Data Without Connection Is Noise", frontText: "Individual dashboards are easy. Connected revenue intelligence is rare.", backText: "GA4 alone is useful. HubSpot alone is useful. But neither shows you the full revenue picture. Revenue data analytics connects every source into one layer where you can trace a visitor from first ad click through every touchpoint to closed deal." },
        { frontTitle: "Metrics Must Match Decisions", frontText: "Tracking 50 metrics and making decisions on 3 is a waste.", backText: "Most analytics setups track everything and answer nothing. We start with the decisions — where to spend budget, which campaigns to scale, which deals to prioritize — and build the analytics infrastructure that answers those questions directly." },
        { frontTitle: "Trust Is the Product", frontText: "A dashboard nobody trusts is worse than no dashboard.", backText: "The biggest challenge in analytics isn't building dashboards. It's building trust. When data is accurate, definitions are consistent, and dashboards refresh reliably, teams stop debating numbers and start using them." },
        { frontTitle: "Revenue-Centric", frontText: "Every metric should trace back to revenue.", backText: "We orient every analytics system around revenue. Not traffic, not leads, not MQLs. Revenue. Every metric either connects directly to pipeline and closed deals or supports a metric that does." },
      ],
      workflow: [
        { step: "01", title: "Audit Data Sources", description: "What's connected, what's siloed, what's missing, and what's inaccurate. We map the gap between what you're measuring and what you need to know.", icon: "Search" },
        { step: "02", title: "Build Unified Data Layer", description: "Data sources connected. Metrics defined. Attribution configured. Dashboards built. Every team gets the view they need — from the same underlying truth.", icon: "Database" },
        { step: "03", title: "Maintain & Evolve", description: "As your GTM evolves, we add new data sources, refine metrics, and ensure the analytics system keeps pace with your business.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "Which data sources can you connect?", answer: "GA4, HubSpot, Salesforce, LinkedIn Ads, Google Ads, Meta, Clay, Apollo, Mixpanel, Heap, and custom databases." },
        { question: "How long does it take?", answer: "Most revenue analytics systems go live in 2–4 weeks." },
        { question: "Do you maintain it ongoing?", answer: "Yes. Data quality monitoring, metric refinement, and dashboard updates as your business evolves." },
      ],
      ctaTitle: "Data Should Clarify Revenue, Not Complicate It.",
      ctaDescription: "Build a unified analytics layer that connects your CRM, ads, and web data into one revenue picture.",
      seo: {
        title: "Revenue Data Analytics | Unified B2B Data Infrastructure — Insightstap",
        meta: "Connect CRM, ads, web, and enrichment data into one revenue analytics layer for smarter B2B decisions.",
        keywords: "Revenue Analytics, Data Analytics, B2B Analytics, Data Infrastructure, Revenue Intelligence",
      },
    },
    {
      title: "Dashboard Development",
      slug: "dashboard-development",
      opening:
        "Your team has dashboards. The problem is nobody uses them. Marketing has one in Looker Studio. Sales has one in HubSpot. Leadership gets a slide deck once a month. None of them agree. None of them show revenue. A well-built dashboard isn't a wall of charts — it's a decision tool showing the right metrics, to the right team, at the right time, from trusted data.",
      metrics: [
        { value: "70%", label: "of dashboards go unused within 90 days of deployment" },
        { value: "3x", label: "faster decision-making with role-specific dashboards" },
        { value: "100%", label: "adoption when dashboards answer the questions teams actually ask" },
      ],
      approach: [
        { title: "Marketing Dashboards", description: "Channel performance, campaign ROAS, lead generation, funnel conversion, and content engagement. Everything marketing needs to optimize spend.", icon: "BarChart3" },
        { title: "Sales Dashboards", description: "Pipeline health, deal velocity, rep performance, forecast accuracy, and activity metrics. Everything sales needs to close faster.", icon: "TrendingUp" },
        { title: "Leadership Dashboards", description: "Revenue trends, CAC, LTV, pipeline coverage, channel mix, and forecast. The executive view that drives investment decisions.", icon: "Eye" },
        { title: "Custom Operational Dashboards", description: "Any operational metric your business needs tracked — product usage, support efficiency, customer health, or operational throughput.", icon: "Settings" },
      ],
      philosophy: [
        { frontTitle: "Decision-First Design", frontText: "A dashboard's job is to answer a question, not display data.", backText: "Most dashboards fail because they're designed around available data, not around decisions. We flip this. We ask: What decisions does this team make weekly? What data do they need? Then we build exactly that." },
        { frontTitle: "Role-Specific Views", frontText: "Marketing, sales, and leadership need different views of the same data.", backText: "A CMO needs channel ROAS and pipeline attribution. A sales director needs deal velocity and forecast accuracy. A CEO needs revenue trends and CAC. We build role-specific views from one unified data layer." },
        { frontTitle: "Trust Through Accuracy", frontText: "A beautiful dashboard with bad data is worse than a spreadsheet.", backText: "We obsess over data accuracy. Every metric has a clear definition. Every data source is validated. Refresh schedules are reliable. Because a dashboard that's wrong once loses trust forever." },
        { frontTitle: "Simplicity Wins", frontText: "The best dashboards show less, not more.", backText: "Dashboard bloat kills adoption. We ruthlessly simplify — showing only the metrics that drive decisions for each audience. If a metric doesn't change a decision, it doesn't make the dashboard." },
      ],
      workflow: [
        { step: "01", title: "Interview Stakeholders", description: "What does each team need to know weekly? What metrics drive their actions? What questions do they ask every Monday morning?", icon: "Users" },
        { step: "02", title: "Build Role-Specific Dashboards", description: "Looker Studio, HubSpot, or custom platforms. Real-time data. Clean design. 3–5 key metrics per view. Built to be used, not just viewed.", icon: "BarChart3" },
        { step: "03", title: "Iterate & Refine", description: "Dashboards evolve as teams use them. We refine views, add metrics, and ensure ongoing accuracy and relevance.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "Which platforms do you build on?", answer: "Looker Studio, HubSpot Dashboards, and custom solutions. Platform depends on your stack and needs." },
        { question: "How long does a dashboard project take?", answer: "Most dashboards go live in 1–3 weeks depending on data complexity." },
        { question: "Do you maintain them?", answer: "Yes. Ongoing data quality monitoring, metric updates, and design refinements." },
      ],
      ctaTitle: "Dashboards Should Trigger Action — Not Become Reports No One Reads.",
      ctaDescription: "Build role-specific dashboards that your marketing, sales, and leadership teams actually use every day.",
      seo: {
        title: "Dashboard Development | B2B Revenue Dashboards — Insightstap",
        meta: "Custom dashboards for marketing, sales, and leadership. Built on real data. Designed for decisions.",
        keywords: "Dashboard Development, B2B Dashboards, Revenue Dashboards, Looker Studio, HubSpot Dashboards",
      },
    },
    {
      title: "Attribution Modeling",
      slug: "attribution-modeling",
      opening:
        "Your marketing team says the blog drove the deal. Sales says it was the cold email. The CEO thinks it was the LinkedIn ad. Everyone's right — and everyone's wrong. Most B2B deals involve 15–20 touchpoints across 3–6 months. Multi-touch attribution distributes credit across the actual journey — so you know what's really driving revenue.",
      metrics: [
        { value: "15-20", label: "touchpoints in the average B2B buying journey before closed-won" },
        { value: "40%", label: "of marketing budget misallocated due to inaccurate attribution" },
        { value: "100%", label: "attribution clarity when multi-touch models connect ads, web, CRM, and revenue" },
      ],
      approach: [
        { title: "Multi-Touch Attribution", description: "Credit distributed across every touchpoint — first touch, lead creation, opportunity creation, and closed-won. Every channel gets fair credit.", icon: "Workflow" },
        { title: "Channel Attribution", description: "Know which channels — organic, paid, outbound, ABM, events, referrals — actually generate revenue. Not just leads. Revenue.", icon: "BarChart3" },
        { title: "Campaign Attribution", description: "Trace specific campaigns to pipeline and closed deals. Which LinkedIn campaign generated the most revenue? Which blog series influenced the most deals?", icon: "Target" },
        { title: "UTM Governance", description: "Clean, consistent UTM parameters across every channel. No more 'Direct' leads from broken URLs. Every touchpoint properly tagged and tracked.", icon: "Settings" },
      ],
      philosophy: [
        { frontTitle: "Both First-Touch and Last-Touch Are Wrong", frontText: "B2B deals have 15–20 touchpoints. Giving all credit to one is misleading.", backText: "First-touch attribution overvalues awareness channels. Last-touch overvalues conversion channels. Multi-touch attribution distributes credit across the actual journey — revealing which channels initiate, which influence, and which close." },
        { frontTitle: "Attribution Drives Budget", frontText: "If you can't attribute revenue, you can't allocate budget.", backText: "Every budget decision is an attribution decision. Without accurate attribution, these decisions are based on gut feel. With it, they're based on revenue data." },
        { frontTitle: "Clean Data First", frontText: "Attribution models on dirty data produce confident lies.", backText: "An attribution model is only as good as the data feeding it. If UTM parameters are inconsistent, if GA4 events are misconfigured, if CRM entries are incomplete — the model will be confidently wrong. We fix the data foundation first." },
        { frontTitle: "The Full Journey Matters", frontText: "Attribution shouldn't stop at the form fill.", backText: "Most attribution models stop at lead creation. We extend attribution through the full CRM lifecycle — from first ad impression to closed-won revenue." },
      ],
      workflow: [
        { step: "01", title: "Audit Tracking & UTMs", description: "Where is attribution breaking? Which channels are over- or under-credited? Where does data go dark between touchpoints?", icon: "Search" },
        { step: "02", title: "Implement Multi-Touch Model", description: "UTM governance enforced. GA4 tracking corrected. CRM touchpoints mapped. Attribution model deployed with channel, campaign, and content-level visibility.", icon: "Workflow" },
        { step: "03", title: "Calibrate & Refine", description: "As new channels launch and buyer behavior evolves, we adjust attribution weights and ensure the model stays accurate.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "What attribution model do you use?", answer: "Multi-touch with flexible weighting. We can implement linear, time-decay, position-based, or custom models depending on your sales cycle." },
        { question: "Does this work with HubSpot?", answer: "Yes. HubSpot's native attribution combined with GA4 data and our UTM governance for full-journey visibility." },
        { question: "How long does implementation take?", answer: "Most attribution models go live in 2–3 weeks. Calibration takes 30–60 days of data." },
      ],
      ctaTitle: "Stop Guessing Which Channels Generate Revenue. Start Knowing.",
      ctaDescription: "Build multi-touch attribution that traces every touchpoint from first click to closed deal.",
      seo: {
        title: "Attribution Modeling | Multi-Touch Revenue Attribution — Insightstap",
        meta: "Multi-touch attribution that traces every touchpoint from first click to closed deal. Real revenue attribution for B2B.",
        keywords: "Attribution Modeling, Multi-Touch Attribution, Revenue Attribution, B2B Attribution, UTM Governance",
      },
    },
    {
      title: "Predictive Forecasting",
      slug: "predictive-forecasting",
      opening:
        "Your sales forecast is a spreadsheet where reps estimate close dates and leadership hopes for the best. It's wrong every quarter. Predictive forecasting replaces gut feel with AI-powered models that analyze deal signals, buyer behavior, engagement patterns, and historical conversion data — to tell you what's actually going to close, when, and why.",
      metrics: [
        { value: "50%+", label: "of sales forecasts miss by more than 10%" },
        { value: "90%+", label: "forecast accuracy achievable with AI-powered predictive models" },
        { value: "25%", label: "improvement in win rates when reps focus on highest-scored deals" },
      ],
      approach: [
        { title: "Deal Scoring", description: "AI models that score every deal based on engagement signals, buyer behavior, deal velocity, stakeholder involvement, and historical win patterns.", icon: "Brain" },
        { title: "Pipeline Forecasting", description: "Revenue predictions based on deal scores, stage conversion rates, and historical data — not rep estimates. Forecast with confidence.", icon: "TrendingUp" },
        { title: "At-Risk Deal Identification", description: "Early warning signals for deals that are stalling — engagement drops, timeline slips, stakeholder disengagement. Catch problems before they become losses.", icon: "Eye" },
        { title: "Scenario Modeling", description: "What happens if you increase outbound by 20%? What if close rates improve by 5%? Test scenarios before committing resources.", icon: "Layers" },
      ],
      philosophy: [
        { frontTitle: "Data Over Gut Feel", frontText: "Rep estimates are optimistic by nature. Models are objective.", backText: "Sales reps overestimate close probability on deals they're emotionally invested in. Predictive models eliminate this bias by scoring deals on objective signals — engagement patterns, deal velocity, and historical conversion data." },
        { frontTitle: "Signals Predict Outcomes", frontText: "The signals a deal emits during its lifecycle predict whether it will close.", backText: "A deal in 'Negotiation' stage might be dead if the buyer stopped responding. A deal in 'Discovery' might be accelerating if three stakeholders just engaged. We build models that read signals, not stage labels." },
        { frontTitle: "Catch Problems Early", frontText: "The best time to save a deal is before it's lost.", backText: "Most teams discover a deal is at risk when the forecast misses. We identify at-risk deals weeks earlier — based on engagement drops and disengagement patterns — giving your team time to intervene." },
        { frontTitle: "Forecast Is a Decision Tool", frontText: "A forecast that doesn't change decisions is just a number.", backText: "Accurate forecasts drive better decisions — when to hire, where to invest, which markets to enter. A reliable forecast is the foundation of strategic planning." },
      ],
      workflow: [
        { step: "01", title: "Analyze Historical Data", description: "Win/loss patterns, deal velocity, stage conversion rates, and engagement signals. We identify the predictive features that matter most.", icon: "Search" },
        { step: "02", title: "Build Predictive Model", description: "Deal scoring, pipeline forecasting, at-risk alerts, and scenario modeling connected to your CRM. Predictions in real time.", icon: "Brain" },
        { step: "03", title: "Calibrate & Improve", description: "As more deals close and more data flows, the model gets smarter. We retrain quarterly and monitor accuracy continuously.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "How much historical data do we need?", answer: "Ideally 6–12 months of deal data with 50+ closed deals. We can start with less and improve as data accumulates." },
        { question: "Does this integrate with HubSpot?", answer: "Yes. Deal scores and forecasts surface directly inside your CRM." },
        { question: "How accurate is the forecast?", answer: "Most models achieve 85–90%+ accuracy within the first quarter of calibration." },
      ],
      ctaTitle: "Stop Guessing Your Forecast. Start Predicting It.",
      ctaDescription: "Deploy AI-powered deal scoring and pipeline forecasting that predicts revenue with 90%+ accuracy.",
      seo: {
        title: "Predictive Forecasting | AI-Powered Pipeline Prediction — Insightstap",
        meta: "AI-powered deal scoring and pipeline forecasting that predicts revenue with 90%+ accuracy.",
        keywords: "Predictive Forecasting, Pipeline Prediction, Deal Scoring, Sales Forecast, AI Forecasting",
      },
    },
    {
      title: "User Experience Analysis",
      slug: "user-experience-analysis",
      opening:
        "Your website gets traffic. But it's not converting. And you don't know why. Is it the messaging? The layout? The form? User experience analysis replaces guessing with data — heatmaps, session recordings, funnel analysis, and behavioral insights that show exactly where visitors drop off, what they ignore, and what makes them convert.",
      metrics: [
        { value: "88%", label: "of online visitors won't return after a bad user experience" },
        { value: "2-3x", label: "conversion improvement from data-driven UX optimization" },
        { value: "70%", label: "of B2B buying decisions influenced by the website experience" },
      ],
      approach: [
        { title: "Heatmap Analysis", description: "Click maps, scroll maps, and attention maps that show exactly where visitors look, click, and ignore. Visual evidence of what works and what doesn't.", icon: "Eye" },
        { title: "Session Recordings", description: "Watch real visitor sessions to see their actual behavior — confusion, hesitation, rage clicks, and drop-off points. Better than any survey.", icon: "Monitor" },
        { title: "Funnel Analysis", description: "Step-by-step conversion funnel breakdowns showing where visitors drop off between landing and conversion. Identify the exact friction points.", icon: "Filter" },
        { title: "A/B Testing", description: "Structured experiments testing messaging, layout, design, and CTAs — with statistical significance, not gut calls. Let visitors decide what works.", icon: "Zap" },
      ],
      philosophy: [
        { frontTitle: "Evidence Over Opinion", frontText: "Your designer thinks the hero section is great. Your visitors disagree.", backText: "Design decisions based on stakeholder opinions are guesses. UX analysis replaces those guesses with evidence. When you can see that 80% of visitors never scroll past the fold, the optimization becomes obvious." },
        { frontTitle: "Small Changes, Big Impact", frontText: "You don't always need a redesign. Sometimes you need a better button.", backText: "A complete website redesign takes months. Moving a CTA above the fold, shortening a form by two fields, or changing a headline takes days. UX analysis identifies which small changes have the biggest impact." },
        { frontTitle: "Conversion Is a System", frontText: "Page speed, messaging, layout, forms, and trust signals all contribute.", backText: "A great headline on a slow page doesn't convert. We analyze the entire conversion system — speed, messaging, layout, forms, trust elements, and mobile experience — to find every friction point." },
        { frontTitle: "Continuous Testing", frontText: "UX optimization isn't a project. It's a practice.", backText: "One round of optimization is good. Continuous testing is transformative. We run monthly A/B testing cycles that compound — each improvement builds on the last." },
      ],
      workflow: [
        { step: "01", title: "Deploy Tracking & Collect Data", description: "Heatmaps, session recordings, and funnel analytics on your key pages. We collect 2–4 weeks of behavioral data before any recommendations.", icon: "Eye" },
        { step: "02", title: "Analyze & Prioritize", description: "Specific, evidence-backed recommendations ranked by impact and effort. Quick wins implemented immediately. Bigger experiments queued.", icon: "Search" },
        { step: "03", title: "Test & Optimize Continuously", description: "Monthly experiments, measured with statistical significance, driving sustained conversion improvement.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "Which tools do you use?", answer: "Hotjar, Microsoft Clarity, FullStory, Google Optimize, and custom analytics depending on your needs." },
        { question: "How fast do we see conversion improvement?", answer: "Quick wins from the first analysis typically show in 2–4 weeks. Sustained improvement compounds monthly." },
        { question: "Do you redesign our website?", answer: "Not necessarily. Most improvements come from targeted optimizations based on behavioral data — not full redesigns." },
      ],
      ctaTitle: "Your Visitors Are Telling You Why They Don't Convert. Let's Listen.",
      ctaDescription: "Deploy heatmaps, session recordings, and A/B testing to find and fix every conversion friction point.",
      seo: {
        title: "User Experience Analysis | CRO & Behavioral Analytics — Insightstap",
        meta: "Heatmaps, session recordings, funnel analysis, and A/B testing to improve B2B website conversion rates.",
        keywords: "UX Analysis, CRO, Heatmaps, Session Recordings, Conversion Optimization, A/B Testing",
      },
    },
    {
      title: "Front End Development",
      slug: "front-end-development",
      opening:
        "Your website is your most important sales asset. It's where buyers form their first impression, evaluate your credibility, and decide whether to engage. But most B2B websites are slow, outdated, and disconnected from analytics and CRM. We build high-performance websites, landing pages, and web applications in React and Next.js — designed for conversion, optimized for speed, and fully integrated with your analytics stack.",
      metrics: [
        { value: "53%", label: "of mobile visitors leave a site that takes longer than 3 seconds to load" },
        { value: "2x", label: "higher conversion rates on optimized, fast-loading B2B websites" },
        { value: "70%", label: "of B2B buying decisions influenced by the website experience" },
      ],
      approach: [
        { title: "React & Next.js Development", description: "Modern web applications built with React and Next.js for speed, SEO, and scalability. Server-side rendering and static generation for peak performance.", icon: "Code" },
        { title: "Landing Page Development", description: "High-conversion landing pages designed for specific campaigns, audiences, and offers. Built fast, tested constantly, and integrated with your ad and CRM stack.", icon: "Layers" },
        { title: "Analytics Integration", description: "GA4, Tag Manager, heatmaps, and CRM tracking built into every page from day one. Every visitor action measured. Every conversion tracked.", icon: "BarChart3" },
        { title: "CMS & CRM Connection", description: "Content management, form submissions, lead routing, and contact creation all connected to HubSpot or your CRM. No disconnected contact forms.", icon: "Plug" },
      ],
      philosophy: [
        { frontTitle: "Performance Is Conversion", frontText: "A beautiful website that loads in 5 seconds loses 53% of mobile visitors.", backText: "Before a visitor reads your headline, they experience your load time. We build on Next.js because server-side rendering delivers sub-2-second load times that keep visitors engaged." },
        { frontTitle: "Built for Measurement", frontText: "Analytics shouldn't be an afterthought bolted onto a live site.", backText: "We build GA4 events, Tag Manager containers, and CRM integrations during development — not after launch. From day one, every click, form fill, and page view is tracked." },
        { frontTitle: "Conversion Architecture", frontText: "A website is a conversion system, not a brochure.", backText: "We design information architecture around the B2B buying journey — awareness visitors see credibility, consideration visitors see proof, decision visitors see clear CTAs. Every page has a job." },
        { frontTitle: "Code Quality Scales", frontText: "Clean, maintainable code means your site grows with your business.", backText: "We write clean, component-based React code with TypeScript and modern tooling. Your development team can maintain, extend, and build on our work without starting over." },
      ],
      workflow: [
        { step: "01", title: "Define Architecture & Requirements", description: "Information hierarchy, user flows, page structure, performance targets, and integration needs documented before any code is written.", icon: "Search" },
        { step: "02", title: "Build in React/Next.js", description: "Component-based development, responsive design, sub-2-second load targets, and full GA4/GTM/CRM tracking built in from day one.", icon: "Code" },
        { step: "03", title: "Optimize Based on Behavior", description: "Post-launch UX analysis, A/B testing, and conversion optimization driven by heatmaps, session recordings, and funnel data.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "Which tech stack do you use?", answer: "React, Next.js, TypeScript, and Tailwind CSS. Connected to HubSpot, GA4, and GTM." },
        { question: "Can you redesign our existing site?", answer: "Yes. We rebuild or redesign on modern frameworks with full analytics and CRM integration." },
        { question: "How long does a website build take?", answer: "Landing pages in 1–2 weeks. Full websites in 4–8 weeks depending on scope." },
      ],
      ctaTitle: "Your Website Should Convert Visitors Into Pipeline. Let's Build It.",
      ctaDescription: "Build a high-performance B2B website in React/Next.js — fast, measured, and connected to your CRM.",
      seo: {
        title: "Front End Development | React & Next.js for B2B — Insightstap",
        meta: "High-performance B2B websites and landing pages in React/Next.js. Built for conversion, speed, and analytics.",
        keywords: "Frontend Development, React, Next.js, B2B Website, Landing Pages, Web Development",
      },
    },
  ],
}
