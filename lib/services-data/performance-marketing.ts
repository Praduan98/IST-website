import { ServiceCategory } from "./types"

export const performanceMarketing: ServiceCategory = {
  title: "Performance Marketing & ABM",
  slug: "performance-marketing-abm",
  description:
    "We run performance ads and ABM campaigns powered by real buyer signals — not vanity metrics. LinkedIn, Google, Meta ads targeted at accounts showing actual intent. Every dollar tied to pipeline, not impressions.",
  sectionTitle: "Ads That Target Buyers, Not Audiences.",
  sectionText:
    "Traditional B2B advertising wastes 60–80% of budget on accounts that will never buy. We flip that by using intent signals, CRM data, and account intelligence to target only the accounts that are actively in-market. Signal-led ads convert because they reach the right people at the right time.",
  whyTitle: "Why Signal-Led Marketing with Insightstap",
  whyText:
    "We don't run ads based on demographics and job titles alone. We connect your signal infrastructure — dark funnel data, CRM intelligence, intent signals — directly to your ad platforms. The result: lower CPL, higher conversion, and ads that actually fill pipeline instead of generating vanity metrics.",
  seo: {
    title: "Performance Marketing & ABM | Signal-Led B2B Ads — Insightstap",
    meta: "Signal-led performance ads and ABM campaigns for B2B. LinkedIn, Google, Meta ads targeted at in-market accounts.",
    keywords: "Performance Marketing, ABM, B2B Ads, LinkedIn Ads, Signal-Led Marketing, Account-Based Marketing",
  },
  services: [
    {
      title: "Performance Ads Management",
      slug: "performance-ads-management",
      opening:
        "B2B ad budgets are wasted when they target broad audiences instead of in-market accounts. We manage LinkedIn, Google, and Meta ad campaigns that combine intent signals with precision targeting — so every dollar drives pipeline, not just impressions.",
      metrics: [
        { value: "40%", label: "lower cost per lead with signal-informed targeting" },
        { value: "3x", label: "ROAS improvement vs. traditional B2B ad campaigns" },
        { value: "60%", label: "of ad spend concentrated on accounts showing intent" },
      ],
      approach: [
        { title: "Multi-Platform Strategy", description: "LinkedIn for account-based targeting, Google for high-intent search capture, Meta for retargeting and lookalikes. We design the channel mix based on your ICP and where they research.", icon: "Globe" },
        { title: "Signal-Informed Targeting", description: "We layer intent signals, CRM data, and 6sense audiences onto ad platform targeting. Your ads reach accounts that are actively researching your category — not just matching a job title.", icon: "Target" },
        { title: "Creative & Messaging", description: "Ad creative that speaks to buyer signals — not generic value props. Different messaging for different intent stages. Ads that feel relevant because they are.", icon: "FileText" },
        { title: "Pipeline Attribution", description: "Full-funnel tracking from ad impression to closed deal. Know which campaigns, creatives, and audiences generate pipeline — not just clicks and form fills.", icon: "LineChart" },
      ],
      philosophy: [
        { frontTitle: "Pipeline, Not Impressions", frontText: "We measure success by pipeline generated, not impressions served. Every campaign is optimized for revenue outcomes.", backText: "Most B2B ad dashboards show impressions, clicks, and CPL. None of these tell you whether ads are generating pipeline. We build full-funnel attribution that connects ad spend to pipeline and revenue — the only metrics that matter." },
        { frontTitle: "Signal-Led Targeting", frontText: "Traditional targeting uses demographics. We layer in intent signals so your ads reach accounts that are actually in-market.", backText: "A VP of Marketing at a 500-person SaaS company is a valid targeting parameter. A VP of Marketing at a 500-person SaaS company that just visited your competitor's pricing page, posted about changing their marketing stack, and has a 6sense score of 85 — that's a buyer. We target buyers." },
        { frontTitle: "Test, Don't Guess", frontText: "Every campaign runs with structured A/B tests. Creative, messaging, audiences, and offers — all tested systematically.", backText: "We don't guess what works. We test creative variations, messaging angles, audience segments, and offers with statistical rigor. Winners get scaled. Losers get replaced. Every campaign improves based on data." },
        { frontTitle: "Channel Expertise", frontText: "LinkedIn, Google, and Meta each require different strategies. Cookie-cutter approaches waste budget.", backText: "LinkedIn is for account-based targeting and thought leadership. Google captures active search intent. Meta excels at retargeting and lookalike audiences. We design platform-specific strategies that play to each channel's strengths." },
      ],
      workflow: [
        { step: "01", title: "Strategy & Setup", description: "We define your campaign strategy, set up tracking infrastructure, build audiences from CRM and intent data, and create initial ad creative.", icon: "Target" },
        { step: "02", title: "Launch & Test", description: "Campaigns go live with structured A/B tests. We monitor performance daily, optimizing bids, audiences, and creative based on real engagement data.", icon: "Zap" },
        { step: "03", title: "Optimize & Scale", description: "Full-funnel analysis connects ad spend to pipeline. We double down on what works, cut what doesn't, and continuously improve ROAS.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "Which ad platforms do you manage?", answer: "LinkedIn Ads, Google Ads (Search, Display, YouTube), and Meta Ads (Facebook, Instagram). We select the channel mix based on your ICP and goals." },
        { question: "What's a realistic CPL for B2B?", answer: "It varies by industry and ICP. LinkedIn typically runs $50–150 per lead. Google search can be $30–100. We optimize for cost per qualified pipeline, not just raw CPL." },
        { question: "How do you track pipeline attribution?", answer: "We implement UTM tracking, CRM integration, and offline conversion imports to connect every ad dollar to pipeline stages and closed revenue." },
      ],
      ctaTitle: "Stop Wasting Ad Budget on Accounts That Will Never Buy.",
      ctaDescription: "Run signal-led ad campaigns that target in-market accounts and generate qualified pipeline.",
      seo: {
        title: "Performance Ads Management | B2B Ad Campaigns — Insightstap",
        meta: "B2B performance ads on LinkedIn, Google, and Meta — signal-informed targeting for pipeline growth.",
        keywords: "B2B Ads, Performance Marketing, LinkedIn Ads, Google Ads, Signal-Led Ads, B2B PPC",
      },
    },
    {
      title: "Bridge Ads Development",
      slug: "bridge-ads-development",
      opening:
        "Generic landing pages kill conversion. Bridge ads connect the signal that triggered the ad to a personalized experience — dynamic content, account-specific messaging, and custom CTAs that match exactly where the buyer is in their journey.",
      metrics: [
        { value: "2.5x", label: "higher conversion on bridge pages vs. generic landing pages" },
        { value: "45%", label: "longer engagement time with personalized ad experiences" },
        { value: "3x", label: "click-through improvement on signal-matched creative" },
      ],
      approach: [
        { title: "Dynamic Landing Pages", description: "Landing pages that adapt based on who's visiting — showing industry-specific content, role-relevant messaging, and account-personalized proof points. One URL, many experiences.", icon: "Monitor" },
        { title: "Signal-Matched Creative", description: "Ad creative that references the buyer's specific context — the signal that triggered the ad, their industry, their pain point. Ads that feel like they were made for the reader.", icon: "FileText" },
        { title: "Account-Specific Experiences", description: "For high-value target accounts, we build dedicated bridge experiences with their company name, relevant case studies, and tailored value propositions.", icon: "Users" },
        { title: "Conversion Path Optimization", description: "Every bridge page has a clear conversion path — optimized CTAs, reduced friction, social proof, and urgency elements tested for maximum conversion.", icon: "MousePointer" },
      ],
      philosophy: [
        { frontTitle: "Context Is Conversion", frontText: "The gap between what triggered the ad and what the landing page shows is where conversion dies. Bridge ads close that gap.", backText: "A buyer who clicked an ad about 'reducing CAC with signal-led outreach' shouldn't land on a generic homepage. They should see a page that continues that exact conversation — with relevant proof points, specific outcomes, and a CTA that matches their stage." },
        { frontTitle: "Personalization at Scale", frontText: "You can't build a unique page for every account. But you can build dynamic pages that adapt to every context.", backText: "Dynamic content replacement, conditional sections, and account-based personalization let us create landing experiences that feel custom without building thousands of static pages. One template, infinite variations." },
        { frontTitle: "Reduce Friction, Not Content", frontText: "Short forms aren't always better. The right amount of friction depends on the buyer's stage and intent level.", backText: "A buyer in decision mode with high intent will fill out a longer form for a demo. A buyer in awareness mode needs a low-friction offer like a guide download. We match form friction to buyer stage for maximum conversion." },
        { frontTitle: "Test Everything", frontText: "Headlines, CTAs, social proof placement, form length — we test every element with real traffic data.", backText: "Bridge page optimization is systematic. We test headlines, hero images, CTA copy, social proof placement, form fields, and page length — always with statistical significance before making changes." },
      ],
      workflow: [
        { step: "01", title: "Map Bridge Experiences", description: "We define which signals trigger which ad experiences, what personalization variables to use, and design the dynamic page architecture.", icon: "Search" },
        { step: "02", title: "Build & Launch", description: "Dynamic landing pages, signal-matched creative, and conversion tracking. We build the bridge infrastructure and launch with your ad campaigns.", icon: "Layers" },
        { step: "03", title: "Test & Optimize", description: "A/B testing of page elements, conversion path analysis, and continuous optimization based on engagement and conversion data.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "What's the difference between a bridge page and a landing page?", answer: "A landing page is static. A bridge page adapts based on who's visiting and what signal triggered the ad — showing personalized content, messaging, and CTAs." },
        { question: "Can bridge pages show different content for different accounts?", answer: "Yes. We use firmographic data, CRM data, and ad parameters to personalize content dynamically — from industry-specific messaging to account-named experiences." },
        { question: "Which tools do you use to build bridge pages?", answer: "Depending on your stack — custom-built with Next.js, or using platforms like Mutiny, Intellimize, or Unbounce with personalization layers." },
      ],
      ctaTitle: "Close the Gap Between Ad Click and Conversion.",
      ctaDescription: "Build bridge ad experiences that personalize landing pages to match buyer signals and intent.",
      seo: {
        title: "Bridge Ads Development | Dynamic Landing Pages — Insightstap",
        meta: "Build bridge ads with dynamic landing pages that personalize content based on buyer signals and account data.",
        keywords: "Bridge Ads, Dynamic Landing Pages, Personalized Ads, ABM Landing Pages, Conversion Optimization",
      },
    },
    {
      title: "Signal-Led ABM Campaigns",
      slug: "signal-led-abm-campaigns",
      opening:
        "Traditional ABM targets account lists and hopes for the best. Signal-led ABM targets accounts showing real buying intent — right now. We build multi-channel ABM campaigns that combine intent data with personalized outreach across ads, email, LinkedIn, and direct engagement.",
      metrics: [
        { value: "4x", label: "engagement rate vs. traditional list-based ABM" },
        { value: "35%", label: "of pipeline influenced by ABM campaigns" },
        { value: "2x", label: "deal velocity for ABM-targeted accounts" },
      ],
      approach: [
        { title: "Intent-Based Account Selection", description: "We select target accounts based on active buying signals — not just firmographic fit. 6sense intent, website visits, social activity, and hiring signals determine who gets targeted.", icon: "Target" },
        { title: "Multi-Channel Orchestration", description: "Coordinated campaigns across LinkedIn ads, Google display, personalized email, LinkedIn outreach, and direct mail. Every channel reinforces the others for maximum account penetration.", icon: "Layers" },
        { title: "Account-Specific Messaging", description: "Each target account tier gets messaging tailored to their specific context — industry challenges, recent signals, competitive landscape, and relevant case studies.", icon: "FileText" },
        { title: "Engagement Tracking & Scoring", description: "Account-level engagement scoring across all channels. Know exactly which accounts are engaging, which contacts are active, and when to escalate to sales.", icon: "BarChart3" },
      ],
      philosophy: [
        { frontTitle: "Intent Before Targeting", frontText: "Don't target accounts because they fit your ICP. Target accounts because they fit your ICP AND are showing buying intent.", backText: "ICP fit tells you who could buy. Intent signals tell you who is buying — right now. By layering intent on top of ICP, we focus your ABM budget on accounts with the highest probability of converting, not just the highest theoretical value." },
        { frontTitle: "Multi-Channel Is Non-Negotiable", frontText: "Accounts don't buy from a single touchpoint. They buy from consistent, relevant presence across every channel they use.", backText: "A LinkedIn ad alone won't close a deal. But a LinkedIn ad + a personalized email + a retargeting campaign + a relevant blog post + a sales outreach — all telling the same story — creates the impression of market leadership and inevitability." },
        { frontTitle: "Tiers, Not One-Size-Fits-All", frontText: "Your top 50 accounts deserve different treatment than your top 500. We design tiered ABM with appropriate investment per tier.", backText: "Tier 1 accounts get fully personalized experiences — custom landing pages, dedicated content, executive outreach. Tier 2 gets industry-personalized campaigns. Tier 3 gets signal-triggered automation. Investment matches opportunity." },
        { frontTitle: "Sales and Marketing Aligned", frontText: "ABM fails when marketing runs campaigns and sales ignores them. We build ABM with sales involvement from day one.", backText: "The best ABM campaigns have sales and marketing working the same accounts with coordinated messaging. We involve sales in account selection, share engagement data in real-time, and create handoff triggers that ensure marketing air cover supports sales conversations." },
      ],
      workflow: [
        { step: "01", title: "Account Selection & Tiering", description: "We select target accounts using intent data and ICP fit, then tier them by opportunity value and buying stage. Each tier gets an appropriate campaign strategy.", icon: "Target" },
        { step: "02", title: "Campaign Design & Launch", description: "Multi-channel campaigns — ads, email, LinkedIn, and content — with account-specific messaging. Coordinated launch across all channels.", icon: "Globe" },
        { step: "03", title: "Engage & Escalate", description: "Account engagement tracking, progressive profiling, and sales escalation triggers. When an account hits engagement thresholds, sales gets the signal.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "How many target accounts should we start with?", answer: "We recommend starting with 50–100 Tier 1 accounts and 200–500 Tier 2 accounts. Enough to test and learn, focused enough to see results." },
        { question: "Do we need 6sense for ABM?", answer: "6sense helps significantly for intent-based account selection. But we can run effective ABM using RB2B, Clay enrichment, and CRM data even without 6sense." },
        { question: "How long until we see ABM results?", answer: "Multi-channel ABM typically shows engagement within 2–4 weeks and pipeline influence within 60–90 days." },
      ],
      ctaTitle: "Target Accounts That Are Actually Buying. Not Just Matching.",
      ctaDescription: "Build signal-led ABM campaigns that combine intent data with personalized, multi-channel engagement.",
      seo: {
        title: "Signal-Led ABM Campaigns | Account-Based Marketing — Insightstap",
        meta: "Intent-driven ABM campaigns across ads, email, LinkedIn, and direct engagement for B2B pipeline growth.",
        keywords: "ABM, Account-Based Marketing, Intent ABM, Multi-Channel ABM, B2B ABM Campaigns",
      },
    },
    {
      title: "Signal-Led Media Strategy",
      slug: "signal-led-media-strategy",
      opening:
        "Most B2B media budgets are allocated based on historical performance and gut feel. We use intent signals — dark funnel data, 6sense scores, CRM intelligence — to dynamically allocate media spend across LinkedIn, Google, and Meta in real-time. Budget flows to where buyers are actively researching.",
      metrics: [
        { value: "50%", label: "reduction in wasted ad spend through signal-led allocation" },
        { value: "3x", label: "higher intent-to-pipeline conversion rate" },
        { value: "2x", label: "improvement in marketing-influenced pipeline" },
      ],
      approach: [
        { title: "Signal-Informed Budget Allocation", description: "We connect intent data to media planning. When signal volume spikes on a category keyword, budget shifts to capture that demand. Real-time allocation, not quarterly planning.", icon: "TrendingUp" },
        { title: "Platform-Specific Signal Strategies", description: "LinkedIn ads target accounts showing intent signals. Google ads capture high-intent searches. Meta retargets engaged accounts. Each platform gets a signal-led strategy.", icon: "Globe" },
        { title: "Dynamic Creative Optimization", description: "Ad creative adapts based on the signal that triggered the campaign. Hiring signal? Talk about scaling. Funding signal? Talk about growth investment. Competitor signal? Talk about switching.", icon: "Shuffle" },
        { title: "Real-Time Performance Dashboard", description: "Media performance tied to pipeline, not just clicks. See which signals drive the best media ROI and reallocate budget accordingly.", icon: "BarChart3" },
      ],
      philosophy: [
        { frontTitle: "Follow the Signals", frontText: "Media budgets should follow buyer intent, not quarterly plans. When signals spike, budget should shift automatically.", backText: "Fixed quarterly media budgets ignore market reality. Buyer intent fluctuates weekly. When 6sense shows a surge in accounts researching your category, your ad spend should increase to capture that wave. When intent drops, budget reallocates. Signal-led media is dynamic by design." },
        { frontTitle: "Each Platform, Different Role", frontText: "LinkedIn, Google, and Meta each play a different role in the buyer journey. Media strategy should reflect that.", backText: "LinkedIn builds awareness and credibility with decision-makers. Google captures active search intent at the bottom of funnel. Meta retargets and reinforces across the web. We design media strategies where each platform plays its optimal role." },
        { frontTitle: "Creative Must Match Signal", frontText: "Generic creative against signal-targeted audiences wastes the targeting advantage. Creative must be as signal-aware as targeting.", backText: "If your targeting uses hiring signals to find growing companies, your ad creative should speak to growth challenges — not generic brand messaging. Signal-matched creative is what turns precision targeting into pipeline." },
        { frontTitle: "Closed-Loop Measurement", frontText: "Media strategy without pipeline attribution is just spending. We close the loop from impression to revenue.", backText: "We implement full closed-loop measurement — connecting ad impressions through clicks, form fills, opportunities, and closed deals. Every media decision is informed by actual revenue data, not proxy metrics." },
      ],
      workflow: [
        { step: "01", title: "Signal Audit & Media Strategy", description: "We map available intent signals to media planning, define budget allocation rules, and design platform-specific strategies.", icon: "Search" },
        { step: "02", title: "Launch & Monitor", description: "Signal-led campaigns go live across platforms. Real-time dashboards track signal volumes, media performance, and pipeline impact.", icon: "BarChart3" },
        { step: "03", title: "Dynamic Optimization", description: "Budget reallocation based on signal trends and pipeline data. Creative refreshes driven by performance data. Continuous improvement.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "How does signal-led media differ from programmatic?", answer: "Programmatic uses behavioral data and cookies. Signal-led media uses B2B intent signals — account-level research activity, buying stages, and CRM data — for far more precise targeting." },
        { question: "What signals do you use for media planning?", answer: "6sense intent scores, RB2B visitor data, CRM engagement data, hiring and funding signals, and dark funnel intelligence." },
        { question: "Can this work with a small media budget?", answer: "Yes. Signal-led targeting actually works better with smaller budgets because it concentrates spend on the highest-value accounts instead of spreading thin." },
      ],
      ctaTitle: "Allocate Media Budget Where Buyers Are Actually Researching.",
      ctaDescription: "Build a signal-led media strategy that dynamically optimizes ad spend across channels based on real buyer intent.",
      seo: {
        title: "Signal-Led Media Strategy | Intent-Driven Ad Planning — Insightstap",
        meta: "Dynamic media strategy that allocates B2B ad budgets based on real-time intent signals across LinkedIn, Google, and Meta.",
        keywords: "Media Strategy, Signal-Led Ads, Intent Marketing, B2B Media Planning, Dynamic Budget Allocation",
      },
    },
    {
      title: "Conversion Optimization",
      slug: "conversion-optimization",
      opening:
        "You're driving traffic. You're generating clicks. But your landing pages, forms, and funnels aren't converting at the rate they should. We optimize every step of the B2B conversion path — from first visit to demo booked — using data, testing, and signal-aware personalization.",
      metrics: [
        { value: "45%", label: "improvement in landing page conversion rates" },
        { value: "2x", label: "demo booking rate with optimized conversion paths" },
        { value: "30%", label: "reduction in funnel drop-off at key stages" },
      ],
      approach: [
        { title: "Funnel Analysis & Audit", description: "We analyze every step of your conversion funnel — traffic sources, landing pages, forms, thank-you pages, and follow-up sequences. We find exactly where prospects drop off and why.", icon: "Search" },
        { title: "Landing Page Optimization", description: "Headline testing, layout optimization, social proof placement, CTA design, and mobile responsiveness. Systematic A/B testing with statistical rigor.", icon: "Monitor" },
        { title: "Form & CTA Optimization", description: "Form length, field types, progressive profiling, and smart CTAs that adapt based on visitor context. Reduce friction where it hurts, add it where it qualifies.", icon: "MousePointer" },
        { title: "Signal-Aware Personalization", description: "Show different content to different visitors based on their intent signals, account data, and funnel stage. Personalization that improves conversion without requiring development.", icon: "Zap" },
      ],
      philosophy: [
        { frontTitle: "Data Over Opinions", frontText: "We don't guess what converts. We test, measure, and let data determine winners.", backText: "Everyone has opinions about what a landing page should look like. We test those opinions with real traffic and statistical rigor. Data beats gut feel. A/B testing beats design debates. Conversion rate is the only judge." },
        { frontTitle: "Small Changes, Big Impact", frontText: "A 20% improvement in conversion doubles pipeline without spending a dollar more on ads.", backText: "Most teams focus on driving more traffic. But a 20% improvement in landing page conversion has the same pipeline impact as a 20% increase in ad budget — at zero additional cost. Conversion optimization is the highest-ROI investment in your marketing stack." },
        { frontTitle: "B2B-Specific CRO", frontText: "B2B conversion is different from B2C. Longer cycles, multiple stakeholders, and higher-value decisions require different optimization approaches.", backText: "B2C CRO focuses on impulse and urgency. B2B CRO focuses on credibility, relevance, and progressive engagement. We optimize for the B2B buyer — providing proof points, relevant case studies, and appropriate conversion actions for each funnel stage." },
        { frontTitle: "Full Funnel, Not Just Landing Pages", frontText: "Conversion optimization doesn't stop at the form fill. We optimize follow-up emails, booking flows, and handoff experiences too.", backText: "A lead who fills out a form but never shows up to the demo is a conversion failure. We optimize the entire path — thank-you pages, confirmation emails, calendar booking flows, and reminder sequences — to maximize show-up rates and progression." },
      ],
      workflow: [
        { step: "01", title: "Audit & Identify Opportunities", description: "Full funnel analysis — where traffic comes from, where it drops off, and where the biggest conversion gains are hiding.", icon: "Search" },
        { step: "02", title: "Test & Optimize", description: "Systematic A/B testing of pages, forms, CTAs, and messaging. We run tests with statistical significance and implement winners immediately.", icon: "Zap" },
        { step: "03", title: "Scale & Iterate", description: "Winning variations get deployed across all campaigns. New tests launch continuously. Conversion optimization is ongoing, not a one-time project.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "How quickly will we see results?", answer: "Most A/B tests reach statistical significance in 2–4 weeks. Initial conversion improvements are typically visible within the first month." },
        { question: "Do you redesign our entire website?", answer: "No. We focus on high-traffic, high-value pages first — landing pages, pricing pages, and key conversion points. Targeted optimization, not full redesigns." },
        { question: "Which testing tools do you use?", answer: "Google Optimize, VWO, Optimizely, or Mutiny depending on your stack. We also build custom tests when needed." },
      ],
      ctaTitle: "Convert More of the Traffic You're Already Paying For.",
      ctaDescription: "Optimize your B2B conversion path from first click to booked demo with data-driven testing.",
      seo: {
        title: "Conversion Optimization | B2B CRO & Landing Page Testing — Insightstap",
        meta: "B2B conversion rate optimization — landing pages, forms, funnels, and personalization tested for maximum pipeline impact.",
        keywords: "Conversion Optimization, CRO, Landing Page Optimization, B2B Conversion, A/B Testing",
      },
    },
    {
      title: "CRM & Ads Integration",
      slug: "crm-ads-integration",
      opening:
        "Your CRM knows which leads converted. Your ad platforms don't. That disconnect means your ads optimize for clicks instead of pipeline. We connect your CRM to your ad platforms — enabling offline conversion tracking, audience sync, and closed-loop reporting that ties every ad dollar to revenue.",
      metrics: [
        { value: "100%", label: "closed-loop attribution from ad click to closed deal" },
        { value: "35%", label: "improvement in audience targeting with CRM data sync" },
        { value: "3x", label: "better ad optimization with offline conversion signals" },
      ],
      approach: [
        { title: "Offline Conversion Tracking", description: "We send CRM conversion events — MQL, SQL, opportunity created, closed-won — back to ad platforms. Google and LinkedIn algorithms optimize for pipeline, not just form fills.", icon: "LineChart" },
        { title: "Audience Sync", description: "Customer lists, high-value prospects, and lookalike audiences synced automatically from your CRM to ad platforms. Target your best accounts and find more like them.", icon: "Users" },
        { title: "Closed-Loop Reporting", description: "Know exactly which campaigns, keywords, and ads generated pipeline and revenue. No more guessing which half of your ad budget works.", icon: "BarChart3" },
        { title: "Exclusion & Suppression Lists", description: "Automatically exclude existing customers, current opportunities, and disqualified leads from ad targeting. Stop paying to advertise to people who already bought.", icon: "Filter" },
      ],
      philosophy: [
        { frontTitle: "Optimize for Pipeline, Not Clicks", frontText: "When ad platforms only see form fills, they optimize for form fillers. When they see pipeline, they optimize for pipeline.", backText: "Google's Smart Bidding and LinkedIn's conversion optimization are powerful — but only if they have the right conversion signal. Feeding pipeline events back to ad platforms fundamentally changes what the algorithm optimizes for, resulting in dramatically better lead quality." },
        { frontTitle: "CRM Is Your Best Audience Source", frontText: "Your CRM contains your best customers. That data should power your ad targeting, not sit in a database.", backText: "Lookalike audiences built from your best customers outperform demographic targeting every time. CRM-synced exclusion lists stop you from wasting budget. Customer match audiences enable upsell campaigns. Your CRM is a targeting goldmine." },
        { frontTitle: "Close the Loop", frontText: "Without closed-loop reporting, marketing can't prove ROI and leadership can't make informed budget decisions.", backText: "The most common question in B2B marketing is 'what's working?' Without closed-loop reporting, nobody knows. We connect every ad touchpoint to pipeline and revenue so you can answer that question with data, not guesses." },
        { frontTitle: "Automate the Sync", frontText: "Manual list uploads are error-prone and always out of date. We automate CRM-to-ad sync so audiences are always current.", backText: "Manual CSV uploads to ad platforms are a common practice — and a terrible one. Data goes stale immediately. We build automated syncs that keep audiences, conversions, and exclusions updated in real-time." },
      ],
      workflow: [
        { step: "01", title: "Map Data & Integrations", description: "We map your CRM pipeline stages, define which events to send to ad platforms, and plan the integration architecture.", icon: "Database" },
        { step: "02", title: "Build & Connect", description: "Offline conversion tracking, audience sync, and exclusion lists — all configured and tested. CRM data flows to ad platforms automatically.", icon: "Workflow" },
        { step: "03", title: "Report & Optimize", description: "Closed-loop dashboards showing ad-to-pipeline attribution. Ongoing optimization as algorithms learn from pipeline signals.", icon: "BarChart3" },
      ],
      faqs: [
        { question: "Which CRM and ad platforms do you connect?", answer: "HubSpot and Salesforce to LinkedIn Ads, Google Ads, and Meta Ads. We also work with other CRMs and ad platforms as needed." },
        { question: "How does offline conversion tracking work?", answer: "We send CRM events (opportunity created, closed-won) back to ad platforms with click IDs. The ad algorithm then learns to find more users who generate pipeline, not just form fills." },
        { question: "How long until the ad algorithm learns?", answer: "Typically 2–4 weeks of conversion data is needed for ad algorithms to optimize effectively. Results improve over time as more pipeline data accumulates." },
      ],
      ctaTitle: "Connect Your CRM to Your Ads. Optimize for Revenue, Not Clicks.",
      ctaDescription: "Build closed-loop integration between your CRM and ad platforms for true pipeline attribution.",
      seo: {
        title: "CRM & Ads Integration | Closed-Loop Attribution — Insightstap",
        meta: "Connect your CRM to ad platforms for offline conversion tracking, audience sync, and pipeline-optimized advertising.",
        keywords: "CRM Ads Integration, Offline Conversions, Closed-Loop Attribution, Ad Pipeline Tracking, CRM Audience Sync",
      },
    },
  ],
}
