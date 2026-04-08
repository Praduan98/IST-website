import { ServiceCategory } from "./types"

export const crmAutomation: ServiceCategory = {
  title: "CRM, enrichment & automation",
  slug: "crm-enrichment-automation",
  description:
    "We implement, optimize, and automate the tools that power your revenue operations, HubSpot, Clay, Apollo, RB2B, and 6sense. From CRM setup to enrichment workflows to intent-based automation, we make your tools work together.",
  sectionTitle: "Your tools should work together. We make that happen.",
  sectionText:
    "Most B2B teams have the right tools but the wrong setup. Data sits in silos. Workflows break at handoffs. Enrichment runs but never reaches sales. We connect your CRM, enrichment, and automation stack into one integrated system that drives pipeline.",
  whyTitle: "Why InsightsTap for CRM & automation",
  whyText:
    "We're not just tool administrators. We're GTM engineers who understand how CRM, enrichment, and automation need to connect to drive revenue. We've implemented these tools for 100+ B2B companies and know exactly where setups break and how to build them right.",
  seo: {
    title: "CRM, Enrichment & Automation | HubSpot, Clay, Apollo | Insightstap",
    meta: "We implement and optimize HubSpot, Clay, Apollo, RB2B, and 6sense into one integrated revenue operations stack.",
    keywords: "CRM Automation, HubSpot Services, Clay Enrichment, Apollo Outreach, RB2B, 6sense, Revenue Operations",
  },
  services: [
    {
      title: "HubSpot services",
      slug: "hubspot-services",
      opening:
        "HubSpot is powerful, when it's set up right. Most implementations barely scratch the surface. Messy data, broken workflows, underused features, and reports nobody trusts. We transform your HubSpot from an expensive contact database into the revenue engine it's designed to be.",
      metrics: [
        { value: "65%", label: "increase in sales productivity with optimized HubSpot workflows" },
        { value: "3x", label: "improvement in lead response time with automated routing" },
        { value: "40%", label: "more accurate pipeline forecasting with clean data" },
      ],
      approach: [
        { title: "CRM onboarding & migration", description: "Clean data migration, property mapping, pipeline setup, and team training. Whether you're moving from Salesforce, spreadsheets, or starting fresh, we get you running fast.", icon: "Database" },
        { title: "Workflow automation", description: "Lead routing, deal stage automation, task creation, email sequences, and internal notifications. We automate the manual work so your team focuses on selling.", icon: "Workflow" },
        { title: "Custom objects & integrations", description: "HubSpot's custom objects and API unlock advanced use cases. We build custom data models and integrations that match your actual business processes.", icon: "Settings" },
        { title: "Reporting & dashboards", description: "Revenue attribution, pipeline velocity, conversion funnels, and forecast accuracy. Dashboards your leadership actually trusts and your team actually uses.", icon: "BarChart3" },
      ],
      philosophy: [
        { frontTitle: "CRM is infrastructure", frontText: "Your CRM isn't a tool, it's the foundation of your revenue operations. A bad setup poisons everything downstream.", backText: "Every workflow, every report, every automation depends on your CRM being set up correctly. Bad data, broken properties, and messy pipelines don't just slow your team down, they make every other GTM investment less effective. We treat CRM setup as critical infrastructure, not a software implementation." },
        { frontTitle: "Data quality is non-negotiable", frontText: "Clean data in, clean insights out. We implement validation rules, deduplication, and enrichment from day one.", backText: "The number one reason CRM implementations fail is bad data. We implement validation rules, required fields, deduplication workflows, and automatic enrichment to ensure your data stays clean, not just at launch, but permanently." },
        { frontTitle: "Adopt, don't just implement", frontText: "The best HubSpot setup is useless if your team doesn't use it. We focus on adoption, not just configuration.", backText: "We've seen too many HubSpot implementations where the setup is perfect but the team reverts to spreadsheets within a month. We focus on adoption, intuitive workflows, minimal manual steps, and training that actually sticks." },
        { frontTitle: "Grow with you", frontText: "Your HubSpot should evolve as your business grows. We build flexible architectures that scale.", backText: "What works for a 10-person sales team breaks at 50. We architect your HubSpot for where you're going, not just where you are, with flexible pipelines, scalable automation, and modular reporting." },
      ],
      workflow: [
        { step: "01", title: "Audit & plan", description: "We audit your current HubSpot setup (or plan a new implementation), identify gaps, and create a prioritized roadmap. Most teams have quick wins hiding in their existing configuration.", icon: "Search" },
        { step: "02", title: "Configure & automate", description: "Pipeline setup, workflow automation, integrations, and dashboard creation. We implement in phases, quick wins first, advanced features second.", icon: "Settings" },
        { step: "03", title: "Train & optimize", description: "Team training, adoption monitoring, and ongoing optimization based on usage patterns and business evolution.", icon: "BarChart3" },
      ],
      faqs: [
        { question: "Can you migrate us from Salesforce?", answer: "Yes. We handle full Salesforce-to-HubSpot migrations, data mapping, custom object migration, workflow recreation, and team training." },
        { question: "Do you work with HubSpot Enterprise?", answer: "Yes. We work across all HubSpot tiers, Starter, Professional, and Enterprise, and help you get maximum value from your specific plan." },
        { question: "How long does a HubSpot implementation take?", answer: "Basic setups take 2–3 weeks. Full enterprise implementations with migrations take 4–8 weeks." },
      ],
      ctaTitle: "Turn HubSpot into the revenue engine it's supposed to be.",
      ctaDescription: "Get a HubSpot implementation that your team actually uses and your leadership actually trusts.",
      seo: {
        title: "HubSpot Services | CRM Implementation & Optimization | Insightstap",
        meta: "HubSpot implementation, migration, workflow automation, and reporting optimization for B2B revenue teams.",
        keywords: "HubSpot Services, HubSpot Implementation, CRM Setup, HubSpot Automation, HubSpot Migration",
      },
    },
    {
      title: "Clay services",
      slug: "clay-services",
      opening:
        "Clay is the most powerful enrichment tool in B2B, if you know how to use it. Most teams set up basic enrichment and miss 90% of what Clay can do. We build enrichment workflows that waterfall across 50+ data providers, score leads with AI, and push enriched data directly into your CRM and outreach tools.",
      metrics: [
        { value: "10x", label: "enrichment coverage vs. single data providers" },
        { value: "85%", label: "data accuracy with waterfall enrichment logic" },
        { value: "60%", label: "reduction in manual prospect research time" },
      ],
      approach: [
        { title: "Waterfall enrichment workflows", description: "We build multi-step enrichment that tries Provider A first, falls back to Provider B, then C. Maximum coverage, minimum cost. 50+ data providers orchestrated automatically.", icon: "Layers" },
        { title: "AI-powered lead research", description: "Clay's AI columns do things no other tool can, summarize a company's recent news, extract tech stack from their website, or score ICP fit using natural language. We design these AI workflows for your specific use case.", icon: "Brain" },
        { title: "CRM & outreach integration", description: "Enriched data doesn't help if it stays in Clay. We push enriched contacts, company data, and scores directly into HubSpot, Salesforce, Apollo, or your outreach platform.", icon: "Plug" },
        { title: "Signal-triggered enrichment", description: "New website visitor? Enrich immediately. New funding round detected? Pull the executive team. We trigger enrichment workflows based on real-time signals.", icon: "Zap" },
      ],
      philosophy: [
        { frontTitle: "Waterfall everything", frontText: "No single data provider has complete coverage. Waterfall logic across 50+ providers maximizes accuracy and minimizes cost.", backText: "ZoomInfo might have 60% coverage. Apollo adds another 20%. Clearbit fills more gaps. By waterfalling across providers in the right order, we achieve 85%+ accuracy at a fraction of the cost of any single enterprise data contract." },
        { frontTitle: "Enrichment is the foundation", frontText: "Every outreach, every ad, every workflow is only as good as the data behind it. Enrichment isn't optional, it's foundational.", backText: "Sending outreach without enrichment is like driving blindfolded. You don't know the company size, the buyer's role, the tech stack, or the recent context. Enrichment turns a name into a qualified, contextual lead." },
        { frontTitle: "AI-native research", frontText: "Clay's AI columns are a superpower most teams don't use. We build AI research workflows that replace hours of manual work.", backText: "Clay's AI can analyze a company's website, summarize their recent news, extract their tech stack, and score ICP fit, all automatically. Most teams don't know these capabilities exist. We design custom AI research workflows that turn Clay into your automated research team." },
        { frontTitle: "Real-time, not batch", frontText: "Enrichment should happen the moment a signal fires, not in a weekly batch job.", backText: "Batch enrichment means stale data. We build real-time enrichment pipelines that trigger instantly, when a new visitor is identified, when a signal fires, when a lead enters your CRM. Fresh data means relevant outreach." },
      ],
      workflow: [
        { step: "01", title: "Map enrichment needs", description: "We identify what data you need on every lead, company info, contact details, tech stack, funding, ICP scoring, and design the enrichment architecture.", icon: "Database" },
        { step: "02", title: "Build Clay workflows", description: "Waterfall enrichment, AI research columns, scoring models, and integration with your CRM and outreach tools. All automated, all tested.", icon: "Layers" },
        { step: "03", title: "Optimize coverage & cost", description: "We monitor enrichment hit rates, accuracy, and provider costs, continuously optimizing the waterfall order and data sources.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "How does Clay compare to ZoomInfo?", answer: "Clay isn't a data provider, it's an enrichment orchestrator. It can use ZoomInfo as one of 50+ data sources, waterfalling across providers for maximum coverage at lower cost." },
        { question: "Can Clay connect to our CRM?", answer: "Yes. We build direct integrations with HubSpot, Salesforce, and other CRMs. Enriched data syncs automatically." },
        { question: "How much does Clay cost?", answer: "Clay pricing depends on usage. We help you optimize workflows to maximize value while controlling credit consumption." },
      ],
      ctaTitle: "Stop using 10% of Clay's power. We'll unlock the other 90%.",
      ctaDescription: "Build enrichment workflows that waterfall across 50+ providers and push rich data into your CRM automatically.",
      seo: {
        title: "Clay Services | Data Enrichment & Waterfall Workflows | Insightstap",
        meta: "Build Clay enrichment workflows with waterfall logic, AI research, and CRM integration for maximum data coverage.",
        keywords: "Clay, Data Enrichment, Waterfall Enrichment, Lead Enrichment, B2B Data, Clay Workflows",
      },
    },
    {
      title: "Apollo.io services",
      slug: "apollo-services",
      opening:
        "Apollo.io gives you access to 275M+ contacts and powerful outbound sequencing, but most teams barely use it beyond basic list building. We configure Apollo to become your full outbound engine, prospecting, sequencing, intent signals, and engagement tracking, all connected to your CRM.",
      metrics: [
        { value: "275M+", label: "contacts accessible through Apollo's database" },
        { value: "3x", label: "outbound reply rates with signal-triggered sequences" },
        { value: "50%", label: "faster prospect list building with advanced filters" },
      ],
      approach: [
        { title: "Advanced prospecting setup", description: "We configure Apollo's advanced filters, persona-based searches, technographic targeting, intent signals, and job change alerts, to build laser-focused prospect lists that match your ICP.", icon: "Search" },
        { title: "Sequence design & automation", description: "Multi-step email and LinkedIn sequences with A/B testing, send-time optimization, and automatic follow-ups. We design sequences that get replies, not spam complaints.", icon: "Mail" },
        { title: "Intent signal activation", description: "Apollo's intent data shows which accounts are researching your category. We build workflows that prioritize high-intent accounts and trigger personalized outreach automatically.", icon: "Target" },
        { title: "CRM sync & reporting", description: "Bidirectional sync with HubSpot or Salesforce. Every email sent, every reply received, every meeting booked, visible in your CRM with full attribution.", icon: "BarChart3" },
      ],
      philosophy: [
        { frontTitle: "Quality over quantity", frontText: "A 500-person list with 30% reply rate beats a 5,000-person list with 1%. We build for precision, not volume.", backText: "The era of blasting 10,000 cold emails is over. Deliverability suffers, reply rates drop, and your domain gets burned. We build Apollo campaigns around tight ICP lists with signal-triggered personalization that generates real conversations." },
        { frontTitle: "Deliverability is everything", frontText: "The best email in the world doesn't matter if it lands in spam. We optimize deliverability from day one.", backText: "Domain warming, SPF/DKIM/DMARC setup, sending limits, reply handling, and list hygiene, deliverability is a system, not a setting. We configure everything to maximize inbox placement." },
        { frontTitle: "Sequence ≠ spam", frontText: "Good sequences feel personal. Bad sequences feel automated. The difference is signal-triggered context and genuine relevance.", backText: "We design sequences where every email has a reason for existing. The first email references a specific signal. The follow-up adds new value. The breakup email respects their time. Sequences should earn replies, not annoy prospects." },
        { frontTitle: "Full attribution", frontText: "Every touchpoint tracked. Every reply logged. Every meeting attributed. Know exactly what's working.", backText: "Without full attribution, you're guessing which sequences, which messaging, and which signals drive pipeline. We ensure every Apollo interaction syncs to your CRM with complete tracking." },
      ],
      workflow: [
        { step: "01", title: "Configure & optimize Apollo", description: "Advanced filter setup, ICP targeting, domain authentication, and deliverability optimization. We build the foundation for high-performing outbound.", icon: "Search" },
        { step: "02", title: "Design & launch sequences", description: "Signal-triggered sequences with personalized messaging, A/B tests, and automated follow-ups. We design the playbook and launch the first campaigns.", icon: "Mail" },
        { step: "03", title: "Analyze & scale", description: "Reply rate analysis, sequence optimization, and scaling what works. Continuous refinement based on real engagement data.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "Is Apollo good enough as a standalone outbound tool?", answer: "For many teams, yes. Apollo combines prospecting, sequencing, and intent data in one platform. For larger operations, we integrate it with dedicated tools like Smartlead or Instantly." },
        { question: "How do you handle deliverability?", answer: "Domain warming, authentication (SPF/DKIM/DMARC), sending limits, bounce management, and list hygiene. Deliverability is a system we manage proactively." },
        { question: "Can Apollo connect to HubSpot?", answer: "Yes. We set up bidirectional sync so every email, reply, and meeting is tracked in both systems." },
      ],
      ctaTitle: "Turn Apollo into your complete outbound engine.",
      ctaDescription: "Configure Apollo for precision prospecting, signal-triggered sequences, and full CRM attribution.",
      seo: {
        title: "Apollo.io Services | Outbound Prospecting & Sequences | Insightstap",
        meta: "Apollo.io setup, sequence design, intent signal activation, and CRM integration for B2B outbound.",
        keywords: "Apollo.io, Outbound Prospecting, Email Sequences, B2B Outreach, Apollo CRM Integration",
      },
    },
    {
      title: "RB2B services",
      slug: "rb2b-services",
      opening:
        "RB2B identifies the actual people visiting your website, not just companies, but individual names, titles, emails, and LinkedIn profiles. We implement RB2B and build the automation layer that turns anonymous visitors into qualified pipeline within hours, not weeks.",
      metrics: [
        { value: "40%", label: "of anonymous website traffic identified at person level" },
        { value: "5x", label: "faster speed-to-lead vs. waiting for form fills" },
        { value: "3x", label: "higher conversion on visitors identified by RB2B" },
      ],
      approach: [
        { title: "RB2B implementation", description: "Pixel installation, tracking configuration, and data validation. We ensure RB2B captures maximum visitor data while respecting privacy regulations.", icon: "Eye" },
        { title: "Slack & CRM routing", description: "Real-time alerts when high-value visitors hit your site. Identified visitors routed to Slack channels, CRM records, and outreach sequences automatically.", icon: "Zap" },
        { title: "Visitor scoring & filtering", description: "Not every visitor matters. We build scoring rules that filter by page visited, time on site, company size, and ICP fit, so your team only sees visitors worth pursuing.", icon: "Filter" },
        { title: "Outreach automation", description: "Identified visitors automatically enter personalized outreach sequences within minutes. The page they visited becomes the conversation starter.", icon: "Mail" },
      ],
      philosophy: [
        { frontTitle: "Person-level, not company-level", frontText: "Knowing a company visited your site is useful. Knowing the exact person, their title, and the page they viewed is actionable.", backText: "Traditional visitor identification tells you 'Acme Corp visited your pricing page.' RB2B tells you 'Sarah Chen, VP of Marketing at Acme Corp, spent 4 minutes on your pricing page.' That's the difference between a data point and a conversation starter." },
        { frontTitle: "Speed is the advantage", frontText: "The company that responds within an hour has a 7x higher chance of qualifying the lead than the one that waits a day.", backText: "Website visitors are in research mode right now. An hour from now, they're back to work. A day from now, they've visited three competitors. RB2B combined with automation ensures you're first to respond, every time." },
        { frontTitle: "Signal, not surveillance", frontText: "We use visitor data to start relevant conversations, not to create creepy experiences.", backText: "The goal isn't to say 'I saw you visited our site.' It's to reference the topic they were researching and offer genuine value. The visitor data informs the conversation, it doesn't become the conversation." },
        { frontTitle: "Part of the stack", frontText: "RB2B alone is a notification tool. Connected to your CRM and outreach, it becomes a pipeline engine.", backText: "RB2B's real power comes from integration. Connected to your CRM for record creation, your enrichment tools for additional context, and your outreach platform for automated follow-up, it becomes the front door to your entire GTM system." },
      ],
      workflow: [
        { step: "01", title: "Implement & configure", description: "RB2B pixel installation, tracking setup, and data validation. We ensure maximum identification rates while maintaining compliance.", icon: "Eye" },
        { step: "02", title: "Build routing & automation", description: "Slack alerts, CRM routing, visitor scoring, and outreach sequences. High-value visitors trigger automated workflows within minutes.", icon: "Zap" },
        { step: "03", title: "Optimize & scale", description: "We monitor identification rates, scoring accuracy, and outreach conversion, continuously refining who gets routed and how.", icon: "TrendingUp" },
      ],
      faqs: [
        { question: "How does RB2B identify visitors?", answer: "RB2B uses a combination of IP resolution, cookie matching, and identity graph data to identify individual visitors at the person level." },
        { question: "Is this GDPR compliant?", answer: "RB2B focuses on US traffic identification. For international visitors, we implement appropriate compliance measures based on your requirements." },
        { question: "How many visitors can RB2B identify?", answer: "Typically 20–40% of US-based website traffic. Actual rates depend on your audience and traffic sources." },
      ],
      ctaTitle: "Stop letting website visitors leave anonymous. Identify them.",
      ctaDescription: "Implement RB2B and turn anonymous website visitors into qualified pipeline within hours.",
      seo: {
        title: "RB2B Services | Website Visitor Identification | Insightstap",
        meta: "Implement RB2B for person-level visitor identification, real-time alerts, and automated outreach.",
        keywords: "RB2B, Visitor Identification, Website Visitors, Anonymous Traffic, Lead Identification",
      },
    },
    {
      title: "6sense services",
      slug: "6sense-services",
      opening:
        "6sense reveals which accounts are actively researching your category, before they ever visit your website. We implement 6sense and connect its predictive intelligence to your ads, outreach, and CRM so your team focuses on accounts that are actually ready to buy.",
      metrics: [
        { value: "85%", label: "prediction accuracy for in-market accounts" },
        { value: "2x", label: "pipeline generated from intent-matched accounts" },
        { value: "30%", label: "shorter sales cycles when targeting in-market accounts" },
      ],
      approach: [
        { title: "6sense implementation", description: "Account matching, intent keyword configuration, buying stage setup, and segment creation. We configure 6sense to accurately identify in-market accounts for your specific category.", icon: "Target" },
        { title: "Segment & audience creation", description: "Dynamic segments based on buying stage, intent topics, firmographics, and engagement level. Audiences that automatically update as accounts move through their buying journey.", icon: "Users" },
        { title: "Ad platform integration", description: "Push 6sense audiences directly to LinkedIn, Google, and Meta ads. Target only accounts showing real intent, not entire TAM lists.", icon: "Globe" },
        { title: "Sales intelligence & alerts", description: "Real-time alerts when target accounts surge in intent. Buying stage dashboards that show your sales team exactly which accounts to prioritize this week.", icon: "BarChart3" },
      ],
      philosophy: [
        { frontTitle: "Predict, don't React", frontText: "Waiting for inbound leads means waiting for buyers who've already evaluated competitors. 6sense lets you engage during the research phase.", backText: "By the time a buyer fills out a form, they've typically completed 70% of their evaluation. 6sense identifies accounts during the research phase, giving your team the opportunity to shape the conversation before competitors enter the picture." },
        { frontTitle: "Buying stages matter", frontText: "An account in 'Awareness' needs different treatment than one in 'Decision.' 6sense buying stages guide your GTM actions.", backText: "6sense's buying stage model, Awareness, Consideration, Decision, Purchase, tells you not just who's in-market, but where they are in their journey. We map each stage to specific GTM actions: awareness gets educational content, consideration gets comparison ads, decision gets direct outreach." },
        { frontTitle: "Intent + ICP = pipeline", frontText: "Intent without ICP fit is noise. ICP without intent is cold outreach. Together, they're your best pipeline source.", backText: "A large enterprise showing intent for your category is valuable. A large enterprise showing intent that also matches your ICP, uses complementary technology, and recently received funding, that's your next customer. We layer 6sense intent with ICP data for maximum precision." },
        { frontTitle: "Connected to everything", frontText: "6sense data should flow into your ads, your CRM, your outreach, and your sales dashboards, not sit in a standalone platform.", backText: "6sense is most powerful when its data flows everywhere, informing ad targeting, prioritizing sales outreach, triggering email sequences, and updating CRM records. We build the integrations that make 6sense intelligence actionable across your entire GTM stack." },
      ],
      workflow: [
        { step: "01", title: "Configure & calibrate", description: "We set up 6sense with your ICP, intent keywords, buying stages, and account matching. Calibration ensures the predictions match your actual buyer behavior.", icon: "Target" },
        { step: "02", title: "Build segments & integrations", description: "Dynamic segments for each buying stage, connected to your ad platforms, CRM, and outreach tools. Intent data flows automatically into every GTM channel.", icon: "Users" },
        { step: "03", title: "Activate & optimize", description: "Launch intent-matched ad campaigns, enable sales alerts, and continuously refine keywords, segments, and buying stage definitions based on conversion data.", icon: "Rocket" },
      ],
      faqs: [
        { question: "How does 6sense detect intent?", answer: "6sense tracks billions of buyer research signals across the web, content consumption, comparison searches, review site visits, and more, then matches them to specific accounts using AI." },
        { question: "How accurate is 6sense's prediction?", answer: "6sense claims 85%+ accuracy on buying stage predictions. In our implementations, we've seen similar accuracy when properly calibrated with your specific ICP and intent keywords." },
        { question: "Can 6sense connect to HubSpot?", answer: "Yes. Native and custom integrations push 6sense data into HubSpot, buying stage, intent scores, and account intelligence directly on contact and company records." },
      ],
      ctaTitle: "Target accounts that are actually ready to buy.",
      ctaDescription: "Implement 6sense predictive intelligence across your ads, outreach, and CRM.",
      seo: {
        title: "6sense Services | Predictive Intent & Account Intelligence | Insightstap",
        meta: "Implement 6sense for predictive account intelligence, intent-based targeting, and buying stage visibility.",
        keywords: "6sense, Predictive Analytics, Intent Data, Account Intelligence, ABM Platform, Buying Intent",
      },
    },
  ],
}
