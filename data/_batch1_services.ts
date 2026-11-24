import type { Service } from './services';

export const batch1Services: Array<Service & { dateModified: string }> = [
  {
    slug: 'meta-ads',
    name: 'Meta Ads Management',
    shortName: 'Meta Ads',
    navGroup: 'found',
    icon: 'social-media',
    iconBg: 'var(--sbmc-peach)',
    dateModified: '2026-11-22',
    cardBlurb:
      'Facebook and Instagram ads that find local buyers without mixing media into our fee.',
    metaTitle: 'Meta Ads Management in Santa Barbara County',
    metaDescription:
      'Facebook and Instagram ads for Santa Barbara County. Ad spend stays separate from management. Clear tracking and seasonal budgets. Book a 20-Minute Call.',
    h1: 'Meta ads management for Santa Barbara County businesses that want buyers, not vanity reach',
    eyebrow: 'Paid Social',
    heroLede:
      'Facebook and Instagram can put your offer in front of people who live, work, or visit Santa Barbara County when search alone is too slow or too narrow. They can also burn a month of budget on tourist scrollers, lookalike audiences built from the wrong list, and a landing page that never asks for the call. We manage Meta ads with the same rules we use for Google Ads: hire-intent where it exists, creative that looks like this county, tracking you can audit, and a hard split between what you pay Meta for media and what you pay us to manage. Ad spend is never folded into our fee. If organic social or Google search would hire faster for your category, we will say so before we open Ads Manager.',
    problemFraming:
      'The common Santa Barbara County Meta story starts with a boosted post from last summer. A plate, a truck, a smiling team photo. Reach goes up. Comments stay quiet. Nobody can say which dollar produced a reservation, a consult, or a booked estimate. The next vendor rebuilds the account with broad interests, a pixel that never fired a purchase or lead event, and a creative set that could sit on any coast. The dashboard looks busy. The floor does not.\n\nAttribution is the real job. A winery pouring on Foxen Canyon Road, a restaurant near State Street, and a home-service van covering the 101 corridor do not share a conversion definition. One needs tasting reservations. One needs covers on a Tuesday in February. One needs a phone call that becomes a job. If we cannot tell a real inquiry from a profile visit, we should not scale. We install or repair the pixel, the Conversions API when it helps, and the thank-you or call events that mean someone asked for work. We will not treat a thruplay or a page like as proof the account is working.\n\nSeasonality here is not a spreadsheet average. Summer visitors change hospitality auctions. Fiesta and Solstice weekends spike some categories and fill others with noise. UCSB calendars move Goleta traffic. Slow months after Labor Day still need a phone that rings for plumbers, clinics, and shops that live on residents. We plan budgets and creative around that calendar. When the offer cannot win on paid social at the budget you have, we will say so instead of "optimizing" a sample of clicks that never had a chance to teach the algorithm anything useful.',
    whatsIncluded: [
      {
        title: 'Account structure built around real offers',
        body:
          'Campaigns split by objective and offer so a brand awareness test cannot drain the budget meant for leads or bookings. Audiences, placements, and exclusions get written from how Santa Barbara County customers actually decide, including visitor traffic we may exclude on purpose. Advantage+ tools are levers, not a default that hides what spent.',
      },
      {
        title: 'Pixel, events, and call tracking hygiene',
        body:
          'Lead, contact, and booking events tied to pages that confirm an inquiry, not a button tap that never connected. If you already have a call platform or the full CRM capturing forms, we use it. If tracking is missing, we specify what to install before media spend pretends to be proven performance.',
      },
      {
        title: 'Creative that looks like this county',
        body:
          'Ads built from your rooms, plates, bottles, job sites, and streets, not stock sunsets. Copy names the offer and the next step in plain English. We test angles you can sustain photographing. A creative calendar that needs a studio every week will fail by week three, so we will not write one.',
      },
      {
        title: 'Media spend reported apart from management',
        body:
          'You pay Meta for clicks, impressions, and deliveries. You pay us to structure, track, write, and judge what to pause. Both numbers show up every reporting cycle. We do not mark up media, and we do not bury spend inside a vague retainer line that makes the fee look smaller than it is.',
      },
      {
        title: 'Landing paths that work on a phone',
        body:
          'Ads should not dump into a slow homepage with a buried number. Traffic goes to a page that states the offer, shows you serve Santa Barbara County, and makes call, book, or write obvious with a thumb. If that page does not exist, we say whether a simple landing page or a fuller website project is the fix.',
      },
      {
        title: 'Seasonal budget and audience planning',
        body:
          'Summer visitors, Fiesta, Solstice, UCSB calendars, and the quiet weeks after Labor Day change auction prices and intent. We set budgets, schedules, and exclusions around those swings. You approve the calendar. We do not surprise you with a July invoice story after a tourist spike you never asked to chase.',
      },
      {
        title: 'Weekly notes while the account is learning',
        body:
          'Creative tests, audience cuts, frequency checks, and plain-language notes you can read. Once the account is stable, the cadence can slow. During a rebuild it should not. If nothing useful changed in a week, the note will say that too. Silence is not a management strategy.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Audit the account and the destination',
        body:
          'We open Ads Manager, the pixel, the landing pages, and whatever CRM or form stack captures leads today. We separate brand warm-up from prospecting. We read placements and audiences like a receipt. You get a written diagnosis: what to keep, what to pause, and what cannot be fixed inside Meta because the website, the offer, or the phone process is the leak. If Google Ads or the Google Business Profile would hire faster first, that recommendation is part of the deliverable.',
      },
      {
        step: 2,
        title: 'Tracking and offers before scale',
        body:
          'Events, call tracking, and CRM capture get fixed before we raise budgets. Structure follows the offers you actually want more of: reservations versus retail, emergency versus booked, hospitality versus service if the economics differ. Naming stays boring and consistent so next quarter\'s report still makes sense. You approve any claim that names price, availability, or licensing.',
      },
      {
        step: 3,
        title: 'Launch with a budget that can learn',
        body:
          'We set a media budget that can collect a useful sample without pretending a thin budget will teach a competitive auction anything. You pay Meta for delivery. You pay us to manage. Ads go live against the destinations we agreed on. The first two weeks catch obvious waste and broken events. We will not declare victory on three lead form fills that never answered the phone.',
      },
      {
        step: 4,
        title: 'Report in inquiries, then iterate',
        body:
          'Weekly notes during the rebuild, then a monthly view that still separates media from management and prospecting from warm audiences. We compare cost to inquiries and, when you share close rates, to booked work. Creative, audiences, and landing pages change when the data says they should. Seasonality gets a conversation before the weekend it hits. If paid social is not producing work after a fair learning window, we recommend cutting or moving budget to search instead of asking for more spend as the only idea.',
      },
    ],
    outcomes: [
      'A Meta ads account structured around real offers, with prospecting separated from warm and brand traffic.',
      'Pixel and conversion events you can audit, instead of engagement metrics dressed up as leads.',
      'Creative that looks like Santa Barbara County and points to a phone-friendly next step.',
      'Media spend billed by Meta and reported apart from our management fee, with no hidden markup.',
      'A budget calendar that respects summer, Fiesta, and the slow months rather than a flat number that ignores the county.',
      'Plain-language reports that show what produced inquiries and what got paused.',
    ],
    faqs: [
      {
        category: 'ads',
        question: 'Is Meta ads spend included in your management fee?',
        answer:
          'No. Ad spend goes to Meta from your billing account. Our fee is for structure, tracking, creative, and ongoing judgment. You will see both numbers every cycle. Mixing media into a management line is how owners lose the plot on what actually cost what. We will not do that.',
      },
      {
        category: 'ads',
        question: 'Do you mark up Facebook or Instagram media?',
        answer:
          'No. Clicks, impressions, and deliveries are billed by Meta. Our work is management. If a platform credit or partner benefit ever applies, it gets disclosed. Hidden markups are how trust dies in month two, and we are not interested in that model.',
      },
      {
        category: 'ads',
        question: 'Should every Santa Barbara County business run Meta ads?',
        answer:
          'No. If your customer hires from Google Maps in a hurry, search and the listing often come first. Meta helps when visual proof, local awareness, or remarketing can move someone who is not typing a hire-intent query yet. Restaurants, wineries, shops, and some wellness brands often fit. Many home-service businesses should put the first paid dollar into Google Ads. We will say which.',
      },
      {
        category: 'ads',
        question: 'How is this different from social media posting?',
        answer:
          'Posting builds presence and community on a cadence. Meta ads is paid distribution with an audience, a budget, and a destination. Boosting a random post is not a strategy. When we run paid, it has tracking and a job. Organic social stays on the social media service. Paid stays here.',
      },
      {
        category: 'ads',
        question: 'Can you guarantee a cost per lead on Meta?',
        answer:
          'No. We control structure, creative, tracking, and destinations. We cannot control Meta\'s auction, competitors, or whether your team answers the lead form. We will give a planning range after we see the offer and the account, and we will tell you when the math does not work. Guaranteed CPL is a sales line, not a media fact.',
      },
      {
        category: 'ads',
        question: 'What do you need before launch?',
        answer:
          'Business Manager access, the Facebook Page and Instagram account you want to advertise from, pixel or full CRM access when forms should sync, and a landing page that works on a phone. Photos you own help. If logins or creative are missing, the calendar waits. Live campaigns need those pieces the same way a site needs logins, photos and content before a 30-day build clock is honest.',
      },
      {
        category: 'ads',
        question: 'How do Fiesta and summer change Meta ads here?',
        answer:
          'Auction prices and audience mix move. Hospitality and retail see more visitor intent that converts in minutes or not at all. Service businesses may get more "while we are in town" noise. We plan budgets, creative, and exclusions around that calendar. Running January settings through July without a conversation is how accounts surprise you. You see the plan before the spike.',
      },
    ],
    relatedServices: [
      'social-media',
      'google-ads',
      'local-seo',
      'ecommerce-websites',
      'email-sms-marketing',
    ],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'santa-maria-digital-marketing',
      'goleta-digital-marketing',
      'lompoc-digital-marketing',
    ],
    relatedResources: [
      'google-ads-for-local-business',
      'ai-search-visibility-local-business',
      'facebook-ads-cost-local-business',
      'facebook-ads-vs-google-ads',
    ],
    relatedIndustries: ['restaurants-hospitality', 'wineries', 'ecommerce'],
    pricingNote:
      'Meta ads has two costs: media, which you pay to Meta, and management, which you pay to us. Media is driven by your category, how tight the audience and offer are, and whether tracking and landing pages already work. A downtown restaurant in summer is a different auction than a North County winery in February. After we look at the current account (or confirm there is none) and the destination those ads would hit, we send a written management range and a recommended media band for learning. The Local Lead Plan is $297/mo, or $2,970/yr (2 months free), for its bundled website, Local SEO, review requests, and follow-up. Meta media and Meta management sit outside that bundle unless we write them in. Cancel anytime with 30-day written notice on retainers we manage.',
  },
  {
    slug: 'review-management',
    name: 'Review Management',
    shortName: 'Reviews',
    navGroup: 'convert',
    icon: 'local-seo',
    iconBg: 'var(--sbmc-aqua)',
    dateModified: '2026-11-22',
    cardBlurb:
      'Honest review requests and replies that follow Google rules and build recent proof.',
    metaTitle: 'Review Management in Santa Barbara County',
    metaDescription:
      'Google review requests and replies for Santa Barbara County businesses. Policy-safe process, no fake or gated reviews. Book a 20-Minute Call.',
    h1: 'Review management for Santa Barbara County businesses that want recent proof, not fake stars',
    eyebrow: 'Convert & Trust',
    heroLede:
      'Reviews are how a stranger on the South Coast decides you are safe to call. Recency and specificity matter more than a frozen five-star average from another decade. We build review request and reply systems for Santa Barbara County operators that follow Google\'s rules: no fake reviews, no gated "only happy customers" links, no incentives that buy a star. The work ties into your Google Business Profile, your follow-up habits, and the jobs you actually finish. We will not write customer reviews for you, and we will not hide a service problem behind a marketing script. If the rating is weak because the job was weak, fix the work, then ask.',
    problemFraming:
      'South Coast searchers still open the Map Pack and scroll the stars before they dial. A listing with thirty glowing one-liners from 2019 loses to a quieter listing with recent notes that mention the roof, the cleaning, the wait time, or the way the front desk handled a hard day. Velocity and detail beat vanity counts. Most Santa Barbara County shops know that and still stall. The ask feels awkward. The link is wrong. Staff forget. Or worse, someone installs a funnel that routes unhappy people to a private form and happy people to Google. That gated flow violates Google\'s policies and trains a fake public record.\n\nThe other failure is silence after a review lands. A detailed complaint on a Montecito-facing clinic sits unanswered for three weeks. A five-star note that named a technician never got a thank-you. Q&A fills with prices you do not honor. Photos do not match the grid. The profile looks abandoned even when the trucks are busy from Carpinteria through Goleta. Review management is not a trophy case. It is a weekly operating habit: ask after completed work, reply in your voice, escalate real problems to the owner, and keep the public record honest.\n\nWe also see owners sold volume hacks. Paid posters. Review exchange groups. Gift-card-for-stars schemes. Those shortcuts risk suspension and they read fake to locals who know this county. We will not run them. If your volume of completed jobs is too low to produce a steady request rhythm, we will say that instead of inventing a growth hack. Marketing cannot manufacture trust faster than you finish good work.',
    whatsIncluded: [
      {
        title: 'Policy-safe request flow after real jobs',
        body:
          'A simple ask timed after completed work, sent by SMS, email, or a card your staff can hand over, with a direct path to your Google Business Profile. We design for honesty. No filtering unhappy customers to a private form. No incentives that violate Google\'s rules. Staff get language they can actually say on a Tuesday.',
      },
      {
        title: 'Reply voice for public reviews',
        body:
          'Short replies in your voice for new five-stars, mixed notes, and hard complaints. We thank specifics, own mistakes when they are real, and move heated threads offline without sounding like a legal bot. You approve anything sensitive. We still will not invent awards, years, or results inside a reply.',
      },
      {
        title: 'Google Business Profile alignment',
        body:
          'The request link, listing name, and categories have to match the business customers find on the South Coast. We check for duplicate listings that split reviews, wrong locations, and tracking numbers that never ring. Listing cleanup that belongs in a deeper profile engagement gets flagged rather than papered over.',
      },
      {
        title: 'Staff script and cadence you can keep',
        body:
          'Who asks, when they ask, and what happens if the customer says no. A calendar tied to job completion, not a guilt project after Fiesta. If your team cannot sustain daily asks, we set a lighter rhythm that still produces recent reviews. Empty automation with nobody watching is worse than a quieter manual habit.',
      },
      {
        title: 'Monitoring and escalation rules',
        body:
          'New reviews surface to a person who can answer, with weekend rules you agree to. Serious complaints escalate to ownership fast. We will not install alerts as theater if nobody will honor them. Speed-to-reply is part of how the listing looks alive in Santa Barbara County searches.',
      },
      {
        title: 'Optional tie-in to follow-up systems',
        body:
          'When the full CRM or your current stack can send a review ask after a won job stage, we wire that trigger so the ask is not a sticky note. Sequences stay short and stop on reply. If marketing automation is not ready, we still ship a manual process that works this month.',
      },
      {
        title: 'Monthly review of recency, not vanity totals',
        body:
          'We report how many asks went out, how replies are landing, and whether recent reviews mention the services you sell. A rising lifetime count with no new reviews this quarter is a warning, not a win. We will not invent a star-average target or a guaranteed review volume.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Read the public record and the policy risk',
        body:
          'We open the Google Business Profile, scan recent reviews, and look for gated links, incentive language, duplicate listings, or reply habits that make things worse. You tell us how a job actually ends: who closes the invoice, who walks the customer out, who sends the follow-up text. The output is a punch list of policy problems, process gaps, and what we will not install.',
      },
      {
        step: 2,
        title: 'Build the ask and the reply kit',
        body:
          'We write the request copy, choose the channel staff will use, and set reply templates you can edit. Links point straight to the listing customers should use. If the profile needs ownership or duplicate cleanup first, that happens before volume. You approve every customer-facing sentence. We still will not draft fake reviews or "sample" five-stars for the grid.',
      },
      {
        step: 3,
        title: 'Train the rhythm and watch the first weeks',
        body:
          'Staff practice the ask on real completed jobs. Alerts turn on. We watch for loops, wrong links, and people who only ask the easy customers. That last habit is how gated systems start by accident. Corrections happen in the first weeks on purpose, not after a quiet quarter.',
      },
      {
        step: 4,
        title: 'Tighten from what customers actually write',
        body:
          'Monthly, we look at recency, themes in the language customers use, and reply quality. If a service line never gets mentioned, the ask or the listing services may need work. If complaints cluster on response time, that is an operations conversation, not a copy tweak. When Local SEO or profile optimization should take over, we say so rather than stretching review management into a Map Pack promise.',
      },
    ],
    outcomes: [
      'A Google-policy-safe request process tied to completed jobs, with no fake, gated, or incentivized review schemes.',
      'Reply habits that treat public feedback as customer service, including the hard notes.',
      'Listing and link hygiene so asks send people to the right South Coast profile.',
      'Staff language and timing that can survive a normal workweek.',
      'Monitoring rules that escalate real problems to a human who can act.',
      'Reporting focused on recency and themes, not a trophy total or a guaranteed star average.',
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Will you write Google reviews for us?',
        answer:
          'No. That violates Google\'s rules and it is dishonest to neighbors who read the listing. We help you ask real customers after real work, and we help you reply. If someone offers a pack of five-star posts, walk away. Suspensions and lost trust cost more than a quiet month of honest asks.',
      },
      {
        category: 'seo',
        question: 'Can we send unhappy customers to a private form first?',
        answer:
          'No. Gating reviews that way breaks Google\'s policies. Everyone who is invited should get the same public path. If you are afraid of public feedback, fix the service issues that create it. We will still help you reply to hard reviews with calm, specific language.',
      },
      {
        category: 'seo',
        question: 'Are gift cards or discounts for reviews allowed?',
        answer:
          'Incentivized reviews are not allowed under Google\'s policies. Do not trade stars for money, credit, or entry into a giveaway. A simple thank-you after someone posts on their own is different from a bounty. We will not build a program that buys ratings.',
      },
      {
        category: 'seo',
        question: 'How many reviews do we need?',
        answer:
          'There is no magic number. Recency and specificity matter more than a pile of old one-liners. A South Coast business with fewer but recent, detailed reviews can outcompete a larger frozen average. We build a habit you can keep. We will not sell a target count as a ranking purchase.',
      },
      {
        category: 'seo',
        question: 'Is review management the same as Local SEO?',
        answer:
          'No. This service is the ask, the reply, the monitoring, and the policy-safe process. Local SEO also covers Map Pack geography, on-site pages, and a longer measurement cycle. Google Business Profile optimization covers the wider listing. Many owners need the review habit first. We will not relabel one service as the other to enlarge a package.',
      },
      {
        category: 'working-together',
        question: 'What if a false review shows up?',
        answer:
          'We help you flag content that appears fake or conflicts of interest using Google\'s tools, and we draft a calm public reply when a reply is wise. Removal is Google\'s decision, not ours. We will not promise a takedown. We will not engage in review bombing the competitor either.',
      },
      {
        category: 'working-together',
        question: 'How do we cancel if the process is not a fit?',
        answer:
          'Cancel anytime with 30-day written notice. Review work needs a few weeks to show a rhythm, so we recommend giving the habit a fair window, but that is a recommendation, not a trap. Terms sit in the proposal. Call (805) 307-7600 or email info@sbmc.io if you need the notice path clarified.',
      },
    ],
    relatedServices: [
      'google-business-profile',
      'local-seo',
      'marketing-automation',
    ],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
      'montecito-digital-marketing',
      'carpinteria-digital-marketing',
    ],
    relatedResources: [
      'how-to-get-more-google-reviews',
      'google-business-profile-optimization',
      'how-to-respond-to-negative-reviews',
    ],
    relatedIndustries: ['home-services', 'medical-wellness'],
    pricingNote:
      'Review management scope follows job volume, how many locations or listings we cover, whether asks can ride an existing CRM stage, and how much reply backlog exists on day one. A single-location Carpinteria shop is a different month than a multi-provider clinic across the South Coast. After we look at the live Google Business Profile and how jobs close today, we send a written monthly range for the process we would actually run. The Local Lead Plan is $297/mo, or $2,970/yr (2 months free), and already includes review requests inside that bundle for businesses that fit it. Standalone review management is quoted when you need this work outside the plan. Cancel anytime with 30-day written notice.',
  },
  {
    slug: 'spanish-language-marketing',
    name: 'Spanish-Language Marketing',
    shortName: 'Spanish Marketing',
    navGroup: 'found',
    icon: 'websites',
    iconBg: 'var(--sbmc-sage)',
    dateModified: '2026-11-22',
    cardBlurb:
      'Bilingual websites, listings, and campaigns that speak clearly to Spanish-preferring customers.',
    metaTitle: 'Spanish Marketing in Santa Barbara County',
    metaDescription:
      'Bilingual marketing for Santa Barbara County: Spanish web pages, Google listing copy, and campaigns done with care. Book a 20-Minute Call today.',
    h1: 'Spanish-language marketing for Santa Barbara County businesses that need to be understood',
    eyebrow: 'Get Found',
    heroLede:
      'A large share of Santa Barbara County customers prefer to read, call, or text in Spanish. If your website, Google Business Profile, and ads only speak English, you are asking those neighbors to do extra work before they hire you. We plan and produce Spanish-language marketing that is bilingual on purpose: pages, listing fields, review replies, and campaign copy written for real local use, not a machine-translated afterthought. We will not invent census percentages, community sizes, or "guaranteed reach" into any language group. We will tell you where Spanish belongs first (often the listing and the phone path), and where a full bilingual site or campaign is worth the build.',
    problemFraming:
      'The usual failure in this county is a homepage banner that says "Se habla español" next to an English-only menu, English-only forms, and a voicemail that never offers a Spanish option. Santa Maria and Lompoc households, South Coast service customers, and hospitality workers who hire home services after a shift all notice the gap. Trust drops before the quote starts. A second failure is a plug-in translation that turns your licenses, warranties, and medical disclaimers into nonsense. That is not bilingual marketing. That is liability with a language dropdown.\n\nSearch and Maps behave differently by language too. Spanish queries for plumbers, clinics, restaurants, and contractors are not a find-and-replace of your English keyword list. Categories, service names, and Google posts need human review. Review asks that only go out in English miss the customers who were happiest with a Spanish-speaking tech. Ads that spray translated headlines into the wrong audience waste media. We write and review copy with people who can catch tone, not just vocabulary.\n\nWe also see owners sold a fantasy of "capturing the Hispanic market" with one Facebook boost and a stock photo. That pitch usually arrives with invented statistics and a promise this agency will not repeat. Santa Barbara County is diverse across cities. Santa Maria and Lompoc are not interchangeable with a downtown Santa Barbara patio crowd. Your offer, your staff language capacity, and who answers the phone decide what we should build. If nobody on your team can return a Spanish call, we will say the marketing should wait on staffing rather than fill a form you cannot serve.',
    whatsIncluded: [
      {
        title: 'Language audit of the customer path',
        body:
          'Website, Google Business Profile, forms, missed-call handling, and ads reviewed for where Spanish is promised and where it actually exists. You get a plain map of gaps: banner-only claims, broken translation widgets, and phone paths that strand Spanish speakers. We prioritize the leaks that lose work this month.',
      },
      {
        title: 'Bilingual website pages worth ranking and reading',
        body:
          'Spanish service pages or a coherent bilingual structure with human-written copy, not a raw machine dump. URLs, titles, and internal links planned so Google can understand both languages. Live in 30 days once we have your logins, photos and content for the pages in scope, with honesty when legal copy needs extra review.',
      },
      {
        title: 'Google Business Profile in Spanish where it helps',
        body:
          'Description, services, posts, and review reply habits that can meet Spanish-preferring searchers on Maps. Categories stay accurate. We will not stuff every field with keyword salad in two languages. If duplicate listings or access problems block edits, that cleanup comes first.',
      },
      {
        title: 'Campaign and creative language matching',
        body:
          'When paid search or paid social is in scope, Spanish and English ads get audiences, landing pages, and call handling that match the promise in the ad. Media spend stays with the platform. We will not launch Spanish ads that land on an English-only thank-you page.',
      },
      {
        title: 'Review and follow-up messages in the right language',
        body:
          'Request and reminder copy your staff can send after jobs served in Spanish, with the same Google policy rules as our review work: no fake, gated, or incentivized reviews. Sequences stay short. If the full CRM sends the ask, we wire language to the customer\'s preference when you can store it.',
      },
      {
        title: 'Staff-facing scripts for the first hello',
        body:
          'Simple phone and SMS language for greeting, collecting the job, and handing off to a Spanish-speaking teammate when you have one. Marketing that promises Spanish and then strand callers is worse than staying English-only. We document who can take which calls before we advertise bilingual service.',
      },
      {
        title: 'Measurement without invented demographics',
        body:
          'Reporting on which Spanish pages, listing actions, and campaigns produce calls or forms you can audit. We will not paste census tables into a slide and call it attribution. If we cannot see language preference in the data you have, we say what is missing instead of guessing a percentage.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Decide where Spanish must exist first',
        body:
          'We listen to how customers already reach you: Maps, referrals, walk-ins, ads. We learn which teammates can sell and schedule in Spanish. We review the live site and listing. The deliverable is a priority order: phone and listing, then key pages, then campaigns. If staffing cannot support a bilingual promise, we write that limit down before creative starts.',
      },
      {
        step: 2,
        title: 'Write and structure the bilingual assets',
        body:
          'Copy for agreed pages, profile fields, and templates gets drafted and reviewed for tone and accuracy. Legal, medical, and licensed-trade claims get extra care. You confirm facts, prices you want public, and services you actually offer in each language. We still will not invent community statistics, awards, or results to fill a Spanish hero.',
      },
      {
        step: 3,
        title: 'Launch the path, then the promotion',
        body:
          'Pages and listing updates go live when the call path works. Forms route to people who can answer. Only then do we turn on or expand Spanish ads if they are in scope. The first weeks watch for mixed-language dead ends: Spanish ad to English form, or a translated page with an English-only booking widget.',
      },
      {
        step: 4,
        title: 'Improve from real conversations',
        body:
          'Monthly, we look at which Spanish assets produced inquiries and where callers still switched to English or hung up. Copy, routing, and page scope change from that evidence. If Local SEO, web design, or the Google Business Profile need a deeper engagement next, we scope that honestly rather than treating translation as a forever add-on with no job description.',
      },
    ],
    outcomes: [
      'A clear priority map of where Spanish must exist on your site, listing, and phone path before you advertise it.',
      'Human-written bilingual pages or profile copy for the services you can actually support.',
      'Campaign and review templates that keep language promises aligned with destinations.',
      'Staff scripts and routing rules so a Spanish inquiry reaches a person who can help.',
      'Reporting on inquiries from Spanish assets without invented census percentages or reach guarantees.',
      'A dated build window for web work: live in 30 days once we have your logins, photos and content for the agreed pages.',
    ],
    faqs: [
      {
        category: 'websites',
        question: 'Do you use automatic website translation?',
        answer:
          'Not as the finished product. Machine tools can assist a draft. A public page that sells licensed work, medical visits, or food still needs human review. We would rather ship fewer accurate Spanish pages than a full site of broken disclaimers. If a widget is already confusing customers, we will recommend turning it off.',
      },
      {
        category: 'websites',
        question: 'How long does a bilingual site take?',
        answer:
          'Live in 30 days once we have your logins, photos and content for the pages in the sitemap we agreed on. Heavy legal review, large service catalogs, or a messy URL history add time. We date that in writing. "Se habla español" on an English-only site is not a launch.',
      },
      {
        category: 'seo',
        question: 'Will Spanish pages help Local SEO in Santa Maria and Lompoc?',
        answer:
          'They can when people search in Spanish and your listing and pages match those queries with real service content. They will not override proximity or a neglected Google Business Profile. We treat Santa Maria, Lompoc, and the South Coast as real places with different search mixes, not find-and-replace tokens. No ranking guarantees.',
      },
      {
        category: 'working-together',
        question: 'What if we do not have Spanish-speaking staff?',
        answer:
          'Then we should not advertise bilingual service. We can still improve clarity for customers who read some Spanish and switch to English on the call, or we can help you hire and train before campaigns start. Marketing ahead of staffing creates angry leads. We would rather wait.',
      },
      {
        category: 'working-together',
        question: 'Can you quote the size of the Spanish-speaking market here?',
        answer:
          'Not with a made-up percentage on this page. Public census sources exist and change. Your demand depends on category, city, and who already calls you. We will look at your inquiries and Search Console, not invent a demographic slide to close a sale.',
      },
      {
        category: 'ads',
        question: 'Should Spanish ads run separately from English ads?',
        answer:
          'Usually yes. Separate campaigns keep budgets, search terms, and landing pages honest. Mixing languages in one ad group hides what worked. Media stay billed by Google or Meta. Our management fee stays separate from spend, same rule as our other ads services.',
      },
      {
        category: 'getting-started',
        question: 'How do we get started?',
        answer:
          'Book a 20-Minute Call, or email info@sbmc.io, or call (805) 307-7600. Bring examples of Spanish inquiries you already get and who can return those calls. If the Local Lead Plan fits ($297/mo, or $2,970/yr with 2 months free), we will say how bilingual work sits inside or beside that bundle. Cancel anytime with 30-day written notice on ongoing work.',
      },
    ],
    relatedServices: [
      'web-design',
      'google-business-profile',
      'local-seo',
    ],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'santa-maria-digital-marketing',
      'goleta-digital-marketing',
      'lompoc-digital-marketing',
      'carpinteria-digital-marketing',
    ],
    relatedResources: [
      'local-seo-santa-barbara',
      'web-design-cost-santa-barbara',
      'bilingual-marketing-guide-central-coast',
    ],
    relatedIndustries: ['home-services', 'restaurants-hospitality'],
    pricingNote:
      'Spanish-language marketing scope follows how many pages and listing fields need human copy, whether ads are included, whether staff can support bilingual calls, and how ready photography and English source content are. A Santa Maria home-service company that needs three Spanish service pages is a different job than a countywide hospitality brand with ads in two languages. After we look at the site, the Google Business Profile, and who answers the phone, we send a written range. The Local Lead Plan is $297/mo, or $2,970/yr (2 months free), for its standard bundle. Bilingual expansion beyond that bundle is scoped separately. Cancel anytime with 30-day written notice. Founded in 2026, we still write like neighbors, not like a translation farm.',
  },
];
