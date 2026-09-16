import type { FaqItem } from './faqs';

export type ServiceIconName =
  | 'local-seo'
  | 'google-ads'
  | 'websites'
  | 'social-media'
  | 'automations'
  | 'strategy';

export type ServiceNavGroup = 'found' | 'convert' | 'systems';

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  navGroup: ServiceNavGroup;
  icon: ServiceIconName;
  iconBg: string; // CSS color token like 'var(--sbmc-aqua)'
  cardBlurb: string; // 2 lines max
  metaTitle: string; // under ~60 chars, NO brand suffix
  metaDescription: string; // 140–158 chars, unique, benefit + soft CTA
  h1: string;
  heroLede: string;
  eyebrow: string;
  problemFraming: string; // 2–3 paragraphs, specific to 805
  whatsIncluded: Array<{ title: string; body: string }>; // 5–7, each body 40–60 words
  process: Array<{ step: number; title: string; body: string }>; // 4 steps
  outcomes: string[];
  faqs: FaqItem[]; // 5–7 UNIQUE per service, category matching the service
  relatedServices: string[]; // slugs
  relatedLocations: string[]; // use: santa-barbara-digital-marketing, goleta-digital-marketing, montecito-digital-marketing, carpinteria-digital-marketing
  relatedResources: string[]; // pick 2 from the allowed resource slugs
  relatedIndustries: string[]; // 1–2 from home-services, professional-services, restaurants-hospitality, medical-wellness, real-estate
  pricingNote: string | null; // null OR honest scoping copy, NO invented prices
};

const relatedLocationSlugs: Service['relatedLocations'] = [
  'santa-barbara-digital-marketing',
  'goleta-digital-marketing',
  'montecito-digital-marketing',
  'carpinteria-digital-marketing',
];

export const services: Service[] = [
  {
    slug: 'local-seo',
    name: 'Local SEO Services',
    shortName: 'Local SEO',
    navGroup: 'found',
    icon: 'local-seo',
    iconBg: 'var(--sbmc-aqua)',
    cardBlurb:
      'Get found in Google Search and Maps when locals are ready to buy.',
    metaTitle: 'Local SEO Services in Santa Barbara & the 805',
    metaDescription:
      'Show up in Google Search and Maps when Santa Barbara and Goleta customers are ready to call. Honest Local SEO, no ranking promises. Book a Free Call.',
    h1: 'Local SEO for Santa Barbara, Goleta, and the rest of the 805',
    eyebrow: 'Get Found',
    heroLede:
      'When someone on State Street, in Old Town Goleta, or sitting in a hotel off Cabrillo types a service into Google, the Map Pack usually decides who gets the call. Local SEO is the work of earning a place in that map and in the local results under it. Google weighs three things: how close you are to the searcher, how prominent your business looks, and how clearly your listing and website match the query. We work those three levers for owners who want calls from people already trying to hire someone. We will not promise a number-one ranking. We will tell you which geography is realistic for your pin, and we will measure the calls and direction requests that follow.',
    problemFraming:
      'If your shop sits in Old Town Goleta, downtown Santa Barbara searches often prefer businesses closer to State Street, even when your work is better. Google Local is not a fairness contest. Proximity is a real lever. A pin near the Funk Zone will tend to show for waterfront and downtown queries that a Hollister Avenue pin will not win. That does not mean a Goleta business is stuck. It means Goleta and west-side searches are the ones you can own, and citywide terms need stronger relevance and prominence to compete. Pretending a Goleta pin will take the downtown Map Pack is how retainers get spent on keywords Google will never award you.\n\nProminence is the second lever, and reviews do a lot of that work. A frozen five-star average from 2019 is weaker than a steady run of recent, specific reviews that mention the job you actually did. Velocity and recency matter more than a vanity count. We set up a request process that is easy for customers and honest for you. We do not write reviews, buy them, or hide the bad ones. If the rating is weak because the job was weak, marketing will not cover it. Fix the work, then ask.\n\nRelevance is the third. Categories, services, photos, and on-site pages have to describe what you sell in the language people type. A visitor searching from a hotel wants different proof than a homeowner in Carpinteria who has been putting off a roof. Fiesta, Solstice, and the summer peak change the mix of tourist and resident intent. We write for both where they exist. We skip neighborhood pages that would only swap a street name. Santa Barbara, Goleta, Montecito, and Carpinteria each get real treatment because the search behavior is actually different.',
    whatsIncluded: [
      {
        title: 'Map Pack geography and competitor read',
        body:
          'We map where your pin sits relative to the searches you want, and which nearby businesses Google already prefers. You get a plain-language view of downtown versus Goleta versus the 101 corridor, so the work starts from a realistic radius instead of a wish list of citywide keywords.',
      },
      {
        title: 'Google Business Profile cleanup',
        body:
          'Categories, services, hours, attributes, and the description get rebuilt around how customers search in this county. Storefront versus service-area settings are corrected so Google is not treating a shop as a countywide pin, or hiding a real counter behind a hidden address.',
      },
      {
        title: 'On-site pages that match the listing',
        body:
          'The website has to agree with the profile. We write or repair service pages and city context that support the queries you can actually win. No cloned neighborhood pages. If Montecito and Carpinteria need different proof, they get it. If they do not, we will not invent a thin URL.',
      },
      {
        title: 'Review velocity process',
        body:
          'A simple, honest request flow after a completed job, timed so it does not feel like a survey attack. We track recency and response, not a trophy count. Staff get a script they can actually say. We never gate reviews or ask only happy customers to post.',
      },
      {
        title: 'Name, address, and phone consistency',
        body:
          'Mismatched NAP is a quiet ranking tax. We inventory the directories that still matter, correct the ones that are wrong, and leave the graveyard of 2014 listings alone when they do not help. The goal is agreement between the site, the profile, and the places Google already trusts.',
      },
      {
        title: 'Photo and post cadence that looks like a real business',
        body:
          'Google rewards listings that look alive. We set a photo and update rhythm you can keep, using work you already do on State Street jobs, Linden Avenue storefronts, or Coast Village Road appointments. Stock filler is worse than fewer real photos.',
      },
      {
        title: 'Monthly local reporting',
        body:
          'Calls, messages, direction requests, and the queries that produced them, in English. Rankings are a supporting note, not the scoreboard. If a term moved and the phone did not, we say so. If the phone moved and the screenshot looks messy, we say that too.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Pin, radius, and offer',
        body:
          'We start with where you actually operate, not a keyword spreadsheet. You tell us which jobs you want more of, who answers the phone, and which cities you can serve well on a Tuesday. We look at the Google Business Profile, the site, and the Map Pack for your category in Santa Barbara, Goleta, and wherever else the pin can honestly compete. The output is a geography and offer list we can defend, including the searches we will not chase because proximity will block them.',
      },
      {
        step: 2,
        title: 'Listing and pages, together',
        body:
          'Profile and website get edited as one system. Categories, services, and copy on the listing have to match the H1s and service pages, or Google has to guess. We fix the guesswork. If the site is slow or unusable on a phone, that work gets flagged because a Map Pack click that lands on a broken page is a wasted win. Technical SEO lives on the SEO and website pages. Here we make sure local relevance is consistent.',
      },
      {
        step: 3,
        title: 'Reviews, photos, and proof',
        body:
          'Once the listing is accurate, prominence is mostly earned in public. We install the review request process, respond to existing reviews in your voice, and set a photo cadence tied to real jobs. This is the unglamorous part that most 805 businesses start and then drop in week three. We keep it on a calendar. If volume is too low to produce a review rhythm, we will say that instead of inventing a hack.',
      },
      {
        step: 4,
        title: 'Watch the phone, then adjust',
        body:
          'Local SEO is a three-to-six-month channel for most categories here. We report monthly on calls and maps actions, compare them to the queries you care about, and change categories, pages, or the review process when the data says so. We will not refresh a ranking screenshot every Friday and call it strategy. If ads or the website are the bottleneck, we will point you there instead of squeezing the Map Pack for a result it cannot give.',
      },
    ],
    outcomes: [
      'A written view of which Map Pack geographies your pin can realistically compete in, including Goleta versus downtown.',
      'A Google Business Profile that matches how you operate, with categories, services, and service-area settings that are not fighting each other.',
      'On-site pages that support local queries without a stack of doorway neighborhood URLs.',
      'A review request process you can run after real jobs, focused on recency rather than a frozen star average.',
      'Monthly reporting on calls, messages, and direction requests, with rankings as context rather than a promise.',
      'A clear timeline: most businesses should plan on three to six months before Map Pack movement is meaningful, not a 30-day ranking sprint.',
    ],
    faqs: [
      {
        category: 'seo',
        question:
          'Can a Goleta business rank in the downtown Santa Barbara Map Pack?',
        answer:
          'Sometimes on the edges, rarely as a default. Google Local uses proximity, prominence, and relevance. If your pin is in Old Town Goleta, searches from State Street often prefer businesses closer to that searcher. You can still win Goleta, the west side, and some citywide terms if relevance and reviews are strong. We will tell you which queries are realistic before you spend a year chasing downtown for a pin that cannot get there.',
      },
      {
        category: 'seo',
        question: 'How many Google reviews do I need for Local SEO to work?',
        answer:
          'There is no magic number, and anyone who sells one is guessing. Recency and specificity matter more than a pile of five-star one-liners from 2018. A business with 40 older reviews can lose to a business with 25 recent ones that mention the actual service. We build a request habit you can keep. We do not buy reviews or write them for you.',
      },
      {
        category: 'seo',
        question:
          'Should I hide my address and set the profile as a service-area business?',
        answer:
          'Only if you truly have no customer-facing location. Hiding a real shop to game a wider radius is a good way to confuse Google and your customers. If you have a counter, a yard, or a waiting room, show the address. If you work from a home office and serve the county, we will set service areas honestly and put the weight on the website and reviews instead of a fake storefront.',
      },
      {
        category: 'seo',
        question: 'How long before Local SEO produces more calls?',
        answer:
          'Plan on three to six months for most categories in this market, assuming the profile, site, and reviews are being worked consistently. Faster movement happens when the listing was simply neglected. Slower movement happens in crowded downtown categories. Ads can fill the gap while organic catches up. We will not sell a 30-day Map Pack guarantee.',
      },
      {
        category: 'seo',
        question:
          'Do I need a separate page for the Funk Zone, the Mesa, and Milpas?',
        answer:
          'Not if those pages would repeat the same paragraph with a different landmark. That is doorway spam, and it is how a lot of out-of-town operators still build. We mention neighborhoods as context inside city and service pages when they change the search or the offer. We build a URL when the market is actually different, which is why Santa Barbara, Goleta, Montecito, and Carpinteria are treated as real places rather than find-and-replace tokens.',
      },
      {
        category: 'seo',
        question: 'Is Local SEO enough if my website is slow on a phone?',
        answer:
          'It is not. A Map Pack click that lands on a page that takes six seconds to paint is a lost call, especially for visitors deciding in minutes. We will still improve the listing, and we will tell you when the site is the leak. Website work is a separate service. Pretending Local SEO can cover a broken mobile page is how owners get disappointed in month four.',
      },
    ],
    relatedServices: ['google-business-profile', 'seo', 'google-ads'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'local-seo-santa-barbara',
      'how-much-does-seo-cost-santa-barbara',
    ],
    relatedIndustries: ['home-services', 'restaurants-hospitality'],
    pricingNote:
      'Local SEO cost is driven by how competitive your category is in the 805, how many locations you operate, and how much cleanup the profile and site need before ranking work is even possible. A single-location plumber in Carpinteria is a different scope than a downtown restaurant fighting the Map Pack every weekend. After we look at your current Google Business Profile and website, we send a written monthly range for the work we would actually do. That range is a scope, not a ranking bid. If ads or a rebuild would do more in the first 90 days, we will say so instead of selling SEO as the default.',
  },
  {
    slug: 'seo',
    name: 'SEO Services',
    shortName: 'SEO',
    navGroup: 'found',
    icon: 'local-seo',
    iconBg: 'var(--sbmc-aqua)',
    cardBlurb:
      'Organic search beyond Maps: pages, technical health, and visibility in AI answers.',
    metaTitle: 'SEO Services for Santa Barbara Businesses',
    metaDescription:
      'Organic search for Santa Barbara businesses that need more than the Map Pack. Content, technical SEO, and honest AI-search work. Book a Free Call.',
    h1: 'SEO for Santa Barbara businesses that need more than the Map Pack',
    eyebrow: 'Organic Search',
    heroLede:
      'The Map Pack is three slots. Organic results underneath it, plus the way Google and other assistants summarize your pages, are how a lot of 805 businesses still get found for considered searches: a surgeon, a remodel, a lawyer, a school, a stay that is not tonight. SEO here means making your website the clearest, fastest, best-organized answer for those queries, then keeping it that way. That is content, internal linking, technical health, and a realistic view of AI search visibility. It is not a blog mill, and it is not a promise that ChatGPT will recommend you by Friday. We treat AI Overviews and similar surfaces as part of search, with the same honesty we use for rankings: we can improve the source material. We cannot control the model.',
    problemFraming:
      'A lot of Santa Barbara sites were built to look like a brochure and then left alone. The homepage names the city. The services sit in a dropdown. Nothing links to anything. Search Console, if it is connected at all, shows impressions for brand and almost nothing for the jobs you actually want. That is not a mystery algorithm. It is a site that does not explain itself. Someone comparing roofers along the 101, or a family researching a Montecito move, will not choose the pretty homepage that says “serving the tri-counties” and then stops.\n\nTechnical problems make it worse. Pages that take too long on a phone, duplicate titles, mixed HTTP leftovers, a gallery plugin that ships a megabyte of JavaScript for three photos: Google can crawl them and still refuse to rank them. Core Web Vitals are not a trophy. They are how a visitor on cellular at the waterfront decides whether to stay. This agency site is statically rendered and built for those constraints on purpose. Client sites should be held to the same standard, even when the design is different.\n\nThen there is the new layer. People ask Gemini, ChatGPT, and Google’s AI features who to hire. Those systems read the open web. Thin pages, copied city paragraphs, and schema stuffed with fake reviews do not become “AI visibility.” They become ignored source material. Useful SEO for this market is still the old work done well: one clear page per real offer, internal links that show how services relate, titles that match the query, and a site an assistant can quote without embarrassment. We will say when a page is not worth writing.',
    whatsIncluded: [
      {
        title: 'Technical baseline',
        body:
          'Indexation, titles, headings, canonicals, redirects, and the obvious speed problems that keep good pages from competing. We work in Search Console and the live site, not a 90-page audit PDF you will never read. If the theme is the bottleneck, we will say so and point to website work instead of patching forever.',
      },
      {
        title: 'Information architecture and internal linking',
        body:
          'A sitemap that matches how you sell, with links that pass people and crawlers to the pages that should rank. Service pages, location context, and resources connect on purpose. Orphan URLs get a home or they get removed. This is unglamorous and it is where a lot of organic growth actually lives.',
      },
      {
        title: 'Service and guide pages worth ranking',
        body:
          'We write pages when there is a real query and a real difference in the offer. A Goleta medical practice and a State Street retailer do not need the same outline. Length follows usefulness. We will not ship a 2,000-word page that repeats the homepage with synonyms.',
      },
      {
        title: 'On-page and snippet hygiene',
        body:
          'Titles, meta descriptions, and headers written for a click and for the query, unique per URL. We keep them under control so the brand suffix in search results does not crowd out the benefit. No keyword stuffing. No identical descriptions swapped by city name.',
      },
      {
        title: 'AI search treated as source quality',
        body:
          'We structure pages so a model can find the offer, the area, and the facts without wading through fluff. That means clear headings, direct answers, and schema that matches the page. It does not mean buying “GEO” packages or stuffing hidden Q&A. If we cannot see a path, we will not sell one.',
      },
      {
        title: 'Measurement in Search Console and analytics',
        body:
          'Queries, pages, and landing-page calls or forms, reviewed on a schedule. Rankings bounce. We care whether the pages we invested in are earning impressions and whether those visits do anything. If they are not, we change the page or we stop writing that topic.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'See what already earns (and what cannot)',
        body:
          'We pull Search Console, crawl the site, and look at the queries you already appear for. Brand terms get separated from non-brand. We look at competitors who rank for the jobs you want, including businesses on Coast Village Road and Linden Avenue that may outrank a stronger operator simply because their pages are clearer. The first deliverable is a short list of pages to fix, pages to write, and topics we will not touch because the intent is wrong or the site cannot support them yet.',
      },
      {
        step: 2,
        title: 'Fix the pipes',
        body:
          'Technical issues that block indexing or waste crawl budget get handled before a content calendar. Redirect chains, duplicate URLs, missing canonicals, and titles that all say the same thing are cheaper to fix than a new article. If Core Web Vitals are failing on templates people actually land on, that becomes a website conversation with a date, not a footnote. SEO that ignores the template is how you publish into a hole.',
      },
      {
        step: 3,
        title: 'Write and connect the pages that matter',
        body:
          'We ship a small set of pages that match real offers, then link them from the places users and crawlers already go. Internal links are part of the writing, not a plugin. If UCSB-adjacent searches, tourist queries, and resident queries need different proof, the copy says so. We would rather publish four strong URLs than twenty thin ones that exist to look busy in a report.',
      },
      {
        step: 4,
        title: 'Watch queries, then prune or expand',
        body:
          'Organic search in this county is slow compared with ads. Three to six months is a fair window for new pages, longer for competitive professional terms. Each cycle we look at which URLs gained impressions, which ones bounced, and whether AI features are citing you, a competitor, or nobody. Expansion happens when a page is working. Pruning happens when a page was a bad bet. That is the work. There is no secret content cadence that replaces judgment.',
      },
    ],
    outcomes: [
      'A site structure that matches how you sell, with internal links that support the pages you want found.',
      'Technical issues that were blocking indexation or wasting titles, handled in the live site rather than a unread audit.',
      'New or rebuilt service pages written for real 805 queries, not neighborhood clones.',
      'A practical stance on AI search: better source pages, no fake “ChatGPT ranking” claims.',
      'Reporting from Search Console and your analytics, tied to landing pages and leads when tracking exists.',
      'A timeline you can plan around: useful movement often takes three to six months, and some terms take longer.',
    ],
    faqs: [
      {
        category: 'seo',
        question: 'How is SEO different from Local SEO on this site?',
        answer:
          'Local SEO is the Map Pack, the Google Business Profile, proximity, and review velocity. SEO is the website in organic results and the way those pages get cited, including in AI features. Most 805 businesses need both. A contractor lives and dies in Maps. A specialist clinic or a multi-page professional firm often needs organic articles and service pages that Maps will never replace. We will not sell you the wrong one because it is the page you landed on.',
      },
      {
        category: 'seo',
        question: 'Do I need a blog to rank in Santa Barbara?',
        answer:
          'You need useful URLs, which is not the same thing. A monthly post about “top ten marketing tips” will not help a Goleta HVAC company. A clear page for a service people search, or a guide that answers a real pre-hire question, can. If we recommend publishing, it will be because the query exists and the page can earn a click. We will not put you on a content treadmill to justify a retainer.',
      },
      {
        category: 'seo',
        question: 'Can you get us mentioned in AI Overviews or ChatGPT?',
        answer:
          'We can make your pages easier to retrieve and quote: clear facts, clean structure, consistent name and city, no contradictory NAP. We cannot place you inside a model’s answer on demand. Anyone selling guaranteed AI citations is selling a story. We treat this as part of SEO, report what we can observe, and keep the claims smaller than the work.',
      },
      {
        category: 'seo',
        question: 'Will you write a page for every neighborhood in the 805?',
        answer:
          'No. Thin city pages with the name swapped are how this market got flooded with untrustworthy results. We write a page when the search behavior or the offer is different enough to deserve it. Four city overview pages on this site exist for that reason. Forty doorway URLs will not.',
      },
      {
        category: 'seo',
        question: 'How do you measure SEO if rankings change every week?',
        answer:
          'We look at Search Console queries and pages, then at the leads those landing pages produce when call and form tracking are in place. A keyword in position four on a Tuesday is a screenshot, not a business result. If we cannot connect a page to a call or a form, we will still report the search data and we will be honest that it is incomplete.',
      },
      {
        category: 'seo',
        question: 'Can SEO replace Google Ads for a local business?',
        answer:
          'Sometimes later, rarely on day one, and almost never for the highest-intent terms while you are invisible. Ads can produce calls this week. SEO compounds if the site and the market allow it. Many owners here run both, with ads covering the gap and brand defense, and SEO building the pages that should eventually earn the unpaid click. We will not tell you to turn ads off to prove an organic theory.',
      },
    ],
    relatedServices: ['local-seo', 'web-design', 'analytics'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'local-seo-santa-barbara',
      'ai-search-visibility-local-business',
    ],
    relatedIndustries: ['professional-services', 'medical-wellness'],
    pricingNote:
      'SEO scope follows the current site, not a package name. A five-page brochure that needs titles, internal links, and two service pages is a different job than a slow WordPress install with duplicate URLs and no Search Console history. Competitive professional terms in Santa Barbara take more writing and more time than a straightforward local service page. After we look at the live site and Search Console, we send a written range for a defined set of technical fixes and pages, plus how we would report. That range is not a ranking purchase. If the site itself needs a rebuild before SEO is worth doing, we will say that first.',
  },
  {
    slug: 'google-ads',
    name: 'Google Ads Management',
    shortName: 'Google Ads',
    navGroup: 'found',
    icon: 'google-ads',
    iconBg: 'var(--sbmc-peach)',
    cardBlurb:
      'Targeted, high-intent traffic that turns into real customers.',
    metaTitle: 'Google Ads Management in Santa Barbara',
    metaDescription:
      'Google Ads for Santa Barbara businesses tired of wasted clicks. Call tracking, brand versus non-brand, and seasonal budgets. Book a Free Call.',
    h1: 'Google Ads management for Santa Barbara businesses tired of wasted clicks',
    eyebrow: 'Paid Search',
    heroLede:
      'Paid search is the fastest way to stand in front of someone who is already typing that they need a plumber, a table, a dentist, or a contractor this week. It is also the fastest way to light money on fire if the account is built on broad match vanity terms, brand queries you would have gotten anyway, and a landing page that dies on a phone. We manage Google Ads for 805 businesses with an emphasis on the searches that mean hire-us-now, on call tracking you can audit, and on budgets that respect Fiesta, summer, and the quiet months. Media spend goes to Google. Our work is the structure, the tracking, and the weekly judgment about what to pause.',
    problemFraming:
      'The usual 805 Ads story looks like a win in the dashboard and a shrug on the shop floor. Brand campaigns absorb clicks from people who already searched your name on State Street. Broad match turns “Santa Barbara” into tourist research, job seekers, and someone looking for a free park. The phone rings from a number that is not tagged, so nobody knows which campaign paid for the call. Conversion actions count button clicks. Meanwhile a competitor with a worse truck and a tighter account takes the emergency jobs.\n\nAttribution is the boring problem that decides whether you keep spending. If we cannot tell a booked estimate from a pocket-dial, we should not scale. Call tracking, call recording where it is legal and disclosed, and forms that fire a conversion only on thank-you are not extras. They are the job. A Goleta clinic and a Funk Zone tasting room need different conversion definitions. We will not import a national e-commerce template onto a local service account and call it performance.\n\nSeasonality here is real. Summer and Fiesta inflate some categories and starve others. A restaurant that needs covers in February is not running the same bid strategy it runs in July. A home-service company that books out in October still needs the phone answered in April. We plan budgets around that calendar instead of averaging a year into a meaningless monthly number. When the account cannot learn because the budget is too small for the click price, we will say so instead of “optimizing” a sample size of twelve clicks.',
    whatsIncluded: [
      {
        title: 'Account rebuild around hire-intent search',
        body:
          'Campaigns split by intent: brand, high-intent services, and anything experimental kept in a box that cannot drain the budget. Match types and negatives get written from how people in this county actually search, including tourist queries we may exclude on purpose. Broad match is a tool, not a default.',
      },
      {
        title: 'Call tracking and conversion hygiene',
        body:
          'Phone calls and forms tied to campaigns and keywords, with a conversion action that means a real inquiry, not a tap on a click-to-call overlay that never connected. If you already have a call platform, we use it. If you do not, we specify what to install before we spend media like it is already proven.',
      },
      {
        title: 'Landing pages that load and ask for the call',
        body:
          'Ads should not dump into a slow homepage with a buried number. We send traffic to a page that states the offer, shows the city, and makes the next step obvious on a phone. If that page does not exist, we will say whether a simple landing page or a fuller website project is the right fix.',
      },
      {
        title: 'Brand versus non-brand, reported separately',
        body:
          'Brand spend is defense and convenience. Non-brand is the work. Mixing them in one ROAS number is how accounts look healthy while competitors take the jobs. You will see both. If brand is most of the “success,” we will say that in the first report, not month six.',
      },
      {
        title: 'Seasonal budget and schedule planning',
        body:
          'Fiesta, Solstice, summer visitors, UCSB calendars, and the slow weeks after Labor Day change click prices and intent. We set budgets and ad schedules around those swings, including pausing waste that only appears in tourist months. You approve the calendar. We do not surprise you with a July invoice story.',
      },
      {
        title: 'Weekly optimization while the account is learning',
        body:
          'Search terms, negatives, bid adjustments, and ad copy tests, with notes you can read. Once the account is stable, the cadence can slow. During a rebuild it should not. If nothing changed in a week, the note will say that too. Silence is not a strategy.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Audit the waste before we touch bids',
        body:
          'We open the account, the landing pages, and whatever tracking exists. Brand is separated from non-brand. Search terms get read like a receipt. We look at where calls go after hours, whether the site is usable on a phone, and whether Fiesta-season spikes were treated as genius or as a calendar. You get a written diagnosis: what to keep, what to pause, and what cannot be fixed inside Google Ads because the website or the phone process is the leak.',
      },
      {
        step: 2,
        title: 'Tracking first, then structure',
        body:
          'New conversion actions, call tracking, and Google Analytics alignment happen before we scale spend. If we cannot measure a qualified call, we will not pour budget into a pretty campaign map. Structure follows the offers you actually want: emergency versus booked, downtown versus Goleta if the economics differ, tourist terms included or excluded on purpose. Naming is boring and consistent so next quarter’s report still makes sense.',
      },
      {
        step: 3,
        title: 'Launch with a budget that can learn',
        body:
          'We set a media budget that can collect useful data without pretending a thin budget will teach a high-CPC category anything. You pay Google for clicks. You pay us to manage. Ads go live against the landing pages we agreed on. The first two weeks are for catching obvious waste, not for declaring victory. If impression share is tiny because competitors outbid a thin budget, we will say so rather than hide it in a quality-score lecture.',
      },
      {
        step: 4,
        title: 'Report in jobs, then iterate',
        body:
          'Weekly notes during the rebuild, then a monthly view that still separates brand from non-brand. We compare cost to calls and, when you share close rates, to booked work. Copy, keywords, and landing pages change when the search terms say they should. Seasonality gets a conversation before the weekend it hits. If the account is not producing work after a fair learning window, we recommend cutting or changing the offer instead of asking for more budget as the only idea.',
      },
    ],
    outcomes: [
      'An account structured around hire-intent searches, with brand campaigns isolated so they cannot fake the story.',
      'Call and form conversions you can audit, instead of click-counts dressed up as leads.',
      'Traffic sent to pages that load on a phone and ask for the next step.',
      'A budget calendar that respects summer, Fiesta, and the slow months, rather than a flat number that ignores the 805.',
      'Plain-language reports that show what produced calls and what got paused.',
      'Speed that ads can actually deliver: qualified inquiries can start in days once tracking is live, with judgment delayed until the sample is real.',
    ],
    faqs: [
      {
        category: 'ads',
        question: 'Do you mark up the media spend?',
        answer:
          'No. Clicks and impressions are billed by Google to your account. Our fee is for management, tracking, and creative. You will see both numbers. If a platform credit or partner benefit ever applies, it gets disclosed. Hidden markups are how trust dies in month two, and we are not interested in that model.',
      },
      {
        category: 'ads',
        question: 'Why did my last Google Ads account waste money?',
        answer:
          'The usual pattern in this county is broad match on vanity keywords, no call tracking, a slow homepage as the landing page, and brand terms mixed into the only ROAS number anyone looks at. Search term reports full of tourists, resumes, and “free” queries go un-negatived. We rebuild around the searches that mean someone wants to hire you this week, and we will not scale what we cannot measure.',
      },
      {
        category: 'ads',
        question:
          'How much media spend does a local business need for Ads to learn?',
        answer:
          'Enough to collect a statistically useful sample without lighting money on fire. Click prices in Santa Barbara vary hard by category. A budget that cannot buy enough clicks to learn will look “optimized” and still be noise. We will look at your close rate and what a qualified call is worth, then tell you whether paid search can work at the budget you have. We will not invent a number on this page to look decisive.',
      },
      {
        category: 'ads',
        question: 'Should I run ads on my own business name?',
        answer:
          'Often yes, as defense, especially if competitors bid on it. Brand campaigns should be cheap and separate. They should not be the story you use to keep the rest of the account. If 80 percent of your conversions are brand, you do not have a growth engine. You have a shield. We will show you that split every time we report.',
      },
      {
        category: 'ads',
        question: 'How do Fiesta and summer change Google Ads here?',
        answer:
          'Click prices and query mix move. Hospitality, retail, and some services see visitor intent that converts in minutes or not at all. Home services may get more “while we are in town” noise. We plan budgets and negatives around that calendar. Running January bids through July without a conversation is how accounts surprise you. You will see the plan before the spike, not after the invoice.',
      },
      {
        category: 'ads',
        question: 'Can you guarantee a cost per lead?',
        answer:
          'No. We can control structure, tracking, copy, and landing pages. We cannot control competitors, Google’s auction, or whether your office answers the phone. We will give you a planning range after we see the account and the offer, and we will tell you when the math does not work. Guaranteed CPL is a sales line, not a media fact.',
      },
    ],
    relatedServices: ['conversion-optimization', 'local-seo', 'analytics'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'google-ads-for-local-business',
      'web-design-cost-santa-barbara',
    ],
    relatedIndustries: ['home-services', 'medical-wellness'],
    pricingNote:
      'Google Ads has two costs: media, which you pay to Google, and management, which you pay to us. Media is driven by category click prices, how tightly we can target hire-intent terms, and whether landing pages and call tracking are already in place. A downtown restaurant in summer is a different auction than a Goleta B2B service in February. After we look at the current account (or confirm there is none) and the site those ads would hit, we send a written management range and a recommended media band for learning. We will not publish a starting price here, and we will not treat brand-click ROAS as proof the account is working.',
  },
  {
    slug: 'web-design',
    name: 'Website Design & Development',
    shortName: 'Websites',
    navGroup: 'convert',
    icon: 'websites',
    iconBg: 'var(--sbmc-sage)',
    cardBlurb:
      'Modern, fast, and built to convert visitors into customers.',
    metaTitle: 'Website Design & Development in Santa Barbara',
    metaDescription:
      'Fast, accessible websites for Santa Barbara businesses. Built for phones, Core Web Vitals, and a short tourist decision window. Book a Free Call.',
    h1: 'Websites built for phones, speed, and a short decision window',
    eyebrow: 'Convert & Grow',
    heroLede:
      'Most of the people who will hire you this month are on a phone, often on cellular, often impatient. A visitor searching from a hotel near Stearns Wharf does not have a desktop and a leisurely hour. A homeowner in Carpinteria comparing two plumbers will tap the first site that loads and shows a number they can hit with a thumb. We design and build marketing websites for that reality: static-rendered where it helps, measured against Core Web Vitals, and aimed at WCAG AA the same way this agency site is. Pretty mockups that fail on a 390-pixel screen are not done. A site that looks expensive and hides the call button is not done either.',
    problemFraming:
      'The 805 is full of sites that were bought as a package in another decade and then patched with plugins until they wheeze. A slider, a chat widget, a gallery, a font host, a tag manager dumped in the header: largest contentful paint becomes a rumor. You paid for a brand and shipped a waiting room. Meanwhile the competitor with a plainer page and a click-to-call in the first screen takes the Friday emergency. Tourists decide in minutes. Residents decide with less patience than they admit. Neither group will wait for your hero video.\n\nMobile speed is not a technical hobby. It is whether the page paints before the person walks into the next shop on State Street. We care about Largest Contentful Paint, layout shift, and how the page feels after the first paint. This site is built as a statically rendered Next.js app with reserved image dimensions and a real focus on those metrics. We will not quote a client LCP we have not measured. We will hold a new build to the same engineering habits you can inspect here: no mystery page builder, no forty plugins, accessible names and contrast as a default rather than a later retrofit.\n\nThere is also the conversion problem hiding inside “we need a new look.” A rebuild that only changes the palette still loses if the offer is vague, the photos are stock, and the form asks for a life story. Design here means information architecture, type you can read in sun on Coast Village Road, and a path to call, book, or write that does not require hunting. Original to your business. Not a cloned home-services theme with a palm overlay.',
    whatsIncluded: [
      {
        title: 'Sitemap and conversion path',
        body:
          'Before pixels, we agree on the pages you need and what each one is supposed to make someone do. Homepage, services, location context, and contact are not a template sandwich. A tasting room and a medical office do not share a sitemap. You will see the outline with dates, not a mood board that hides missing content.',
      },
      {
        title: 'Design for the phone first',
        body:
          'Layouts start at a narrow viewport: tap targets, readable type, and a persistent way to call. Desktop widens that same system. We use your photography when you have it. We will tell you when a photo is too weak to hero and when a new shoot would do more than another round of type tweaks.',
      },
      {
        title: 'Development on a modern stack',
        body:
          'We build with a modern framework the way this site is built: components, static rendering where it belongs, forms that post to a real endpoint. You will not get a page-builder theme with forty plugins. Shared components exist to keep speed and accessibility consistent, not to clone someone else’s plumber site.',
      },
      {
        title: 'Core Web Vitals as a ship checklist',
        body:
          'Images have real dimensions and modern formats. Fonts are loaded with a plan. Third-party scripts are treated as a cost. We measure Largest Contentful Paint and layout shift on the templates people land on. If a design choice would wreck LCP, we change the design. The metric wins the argument.',
      },
      {
        title: 'Accessibility to WCAG AA on the work we ship',
        body:
          'Labels on inputs, visible focus, heading order, contrast, and alt text that describes the photo. This agency site is built to that bar. Client sites get the same discipline. Perfect scores on a homepage widget while the form is unlabeled still fail. We test keyboard paths and contrast together.',
      },
      {
        title: 'Launch, redirects, and analytics handoff',
        body:
          'Old URLs redirect. Search Console and analytics get connected. You get a walkthrough of how to request a change without breaking the build. If GoHighLevel or booking needs to sit behind a form, we plan that in the sitemap rather than bolting a widget on at the end and watching INP collapse.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Content and constraints before chrome',
        body:
          'We collect the services you actually sell, the photos you own, who answers the phone, and which cities you serve. We look at the current site for URLs worth keeping. You get a sitemap and a conversion outline, including what we will not build. If copy or logins are missing, the calendar says so. Four to eight weeks is typical when content arrives on time. Custom booking, large photo libraries, or a rebuild of a messy URL history add time, and we will date that in writing.',
      },
      {
        step: 2,
        title: 'Design in the viewport that matters',
        body:
          'You review layouts on a phone-width frame as well as desktop. We settle type, color, and component patterns that can pass contrast and still feel like Santa Barbara rather than a generic coastal template. Feedback is gathered in rounds with a stop date. Endless exploration is how sites miss Fiesta. If a request would hurt LCP or accessibility, we will explain the trade instead of quietly shipping a pretty problem.',
      },
      {
        step: 3,
        title: 'Build, measure, then decorate',
        body:
          'Templates get built with reserved media space, real sizes attributes, and forms that work without the JavaScript circus. We check Core Web Vitals on staging, keyboard access, and the call path on a real device. Content drops into the structure rather than the structure waiting on a novel. If we are blocked on you, you will know. If you are blocked on us, you will know that too.',
      },
      {
        step: 4,
        title: 'Launch and the first 30 days of truth',
        body:
          'DNS, redirects, analytics, and a pass on the live LCP. After launch we watch the real landing pages, not the homepage vanity view. Small copy and conversion fixes in that window are part of making the site honest. A redesign is not conversion rate optimization; that is a separate service once there is traffic worth testing. If the site is live and the phone still does not ring, we look at SEO and ads next rather than blaming the palette.',
      },
    ],
    outcomes: [
      'A marketing site with a sitemap that matches how you sell, not a brochure with a contact page taped on.',
      'Phone-first layouts with a call or form path that does not require pinch-zooming.',
      'Engineering habits you can inspect on this agency site: static rendering where it helps, reserved image space, WCAG AA practices.',
      'Core Web Vitals treated as launch criteria on templates that receive traffic, with LCP as a design constraint rather than a later surprise.',
      'Redirects and analytics connected so SEO equity and measurement survive the migration.',
      'A dated build window, typically four to eight weeks when content arrives on time, with honesty when the calendar slips.',
    ],
    faqs: [
      {
        category: 'websites',
        question: 'How long does a new website take?',
        answer:
          'Four to eight weeks is typical for a marketing site with a clear sitemap, provided copy and photos arrive on time. Booking systems, membership, or a large archive of URLs add time. We give a dated outline. If you are waiting on us, you will know. If we are waiting on logins or words, we will say that too. “Soon” is not a date.',
      },
      {
        category: 'websites',
        question: 'Will the site work on a phone at the beach?',
        answer:
          'That is the point. Most visitors are on a phone, often on cellular. We build for Core Web Vitals, readable type, and a tap target that actually calls you. This agency site is built the same way we build client sites. If a design looks finished in a desktop mockup and fails on a 390-pixel screen, it is not finished.',
      },
      {
        category: 'websites',
        question: 'Do you use templates?',
        answer:
          'We use a modern stack and reusable components for speed and accessibility. Design is original to your business. You will not get a cloned “home services” theme with a logo swap and a stock sunset. Components exist so we do not reinvent a footer every time, not so every 805 plumber looks identical.',
      },
      {
        category: 'websites',
        question: 'Can you quote an LCP number for my future site?',
        answer:
          'Not before it exists. We can tell you how this agency site is built (statically rendered, image dimensions reserved, fonts planned) and that we treat Largest Contentful Paint as a ship constraint. Client metrics get measured on staging and production. Inventing a score in a proposal would violate the same honesty rule we use for testimonials.',
      },
      {
        category: 'websites',
        question: 'What if I already like how the site looks?',
        answer:
          'Then we should talk about conversion optimization or SEO instead of a vanity rebuild. A new site is the right job when the templates are slow, inaccessible, impossible to edit safely, or structurally unable to rank and convert. We will not sell a redesign because the homepage feels dated if the leak is actually ads or follow-up.',
      },
      {
        category: 'websites',
        question: 'Will you write the copy?',
        answer:
          'We can. Many 805 owners have photos and no words. We will draft service pages in the same voice as this site: specific, local, no filler. You still have to confirm facts, prices you want public, and what you actually sell. We will not invent awards, years in business, or review counts to fill a hero.',
      },
      {
        category: 'websites',
        question: 'Do you build online stores?',
        answer:
          'A simple catalog or booking flow can live in scope. A full merchandising platform with inventory, shipping, and tax across states is a different product. If that is what you need, we will say so rather than stretching a marketing site until it pretends to be Shopify. The sitemap conversation is where that gets decided.',
      },
    ],
    relatedServices: ['conversion-optimization', 'local-seo', 'seo'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'web-design-cost-santa-barbara',
      'google-ads-for-local-business',
    ],
    relatedIndustries: ['restaurants-hospitality', 'professional-services'],
    pricingNote:
      'Website cost follows scope: how many templates, how much original copy, whether booking or CRM forms are in the build, the state of the current URL list, and how ready photography is. A five-page marketing site for a Carpinteria shop is a different job than a multi-service professional firm with a decade of URLs to redirect. After we look at the current site and the sitemap you actually need, we send a written project range and a timeline. We will not invent a starting price on this page. Hosting and third-party tools (booking, email, call tracking) are separate, and we will list them rather than bury them.',
  },
  {
    slug: 'google-business-profile',
    name: 'Google Business Profile Optimization',
    shortName: 'Google Business Profile',
    navGroup: 'found',
    icon: 'local-seo',
    iconBg: 'var(--sbmc-aqua)',
    cardBlurb:
      'Make the listing people tap in Maps accurate, complete, and worth trusting.',
    metaTitle: 'Google Business Profile Optimization in Santa Barbara',
    metaDescription:
      'Fix the Google listing Santa Barbara customers actually tap. Categories, photos, reviews, hours, and service areas, done honestly. Book a Free Call.',
    h1: 'Google Business Profile work for the listing customers actually tap',
    eyebrow: 'Your Google Listing',
    heroLede:
      'For a lot of 805 searches, the website is the second click. The first is the Google Business Profile in Maps: hours, photos, the call button, the question someone asked last Tuesday. If that listing is wrong, thin, or frozen in 2021, Local SEO has nothing solid to stand on. This service is the listing itself, treated as an operating system rather than a one-time setup. Categories, services, photos, posts, Q&A, hours, and the storefront-versus-service-area choice all get made on purpose. It is narrower than a full Local SEO engagement and more concrete than “we will get you in Maps.” If the pin, the reviews, and the site still need a broader plan, we will say so.',
    problemFraming:
      'Open Maps on State Street and tap a few restaurants. The ones that get chosen look like businesses someone is still running: current photos, hours that match the door, a description that names what they serve, replies to reviews that sound like a person. Then tap a contractor who serves Goleta and Carpinteria from a van. Half of those listings are a default category, three blurry truck photos, and a description copied from the homepage in 2016. Google has to guess. Searchers guess too. They guess the listing that looks alive.\n\nThe quiet failures are worse than empty fields. A storefront marked as a service-area business so the address is hidden, even though there is a counter on Hollister. A Montecito-facing salon with Santa Barbara hours that ignore a Coast Village Road closure. A dual-listed old address on Milpas that still ranks in a ghost town of citations. Q&A filled by strangers with prices you do not honor. Posts that stopped the summer after someone hired a social intern.\n\nThis work is also where owners get sold miracles. Packaged “GBP SEO” that promises the Map Pack without touching proximity is Local SEO with the hard parts stripped out. We will optimize the listing thoroughly and still tell you when the pin cannot win downtown, when review velocity is the real gap, and when the website is losing the click after the tap. The profile is necessary. It is not the whole system.',
    whatsIncluded: [
      {
        title: 'Full listing audit against how you actually operate',
        body:
          'Name, primary and secondary categories, services, attributes, hours (including holiday and Fiesta exceptions), and the description, checked against the door and the website. We flag mismatches that make Google and customers distrust you, including old suite numbers and tracking numbers that never ring.',
      },
      {
        title: 'Storefront versus service-area, decided honestly',
        body:
          'If you have a place customers visit, we show it. If you work from a home office and cover the county, we set service areas that match the jobs you will take, not a fantasy radius from downtown to Ventura. Gaming this setting is how listings get suspended. We would rather you stay open.',
      },
      {
        title: 'Photo set that looks like the 805 you work in',
        body:
          'Interior, exterior, team, and job photos with a plan for what to add next. State Street storefronts, Linden Avenue shops, and job sites in the foothills should look like themselves. We will tell you when a shoot is worth it and when your phone photos, cropped well, are enough to start.',
      },
      {
        title: 'Review response and request setup',
        body:
          'A reply voice for existing reviews and a request method after completed work. We focus on recency. We do not write customer reviews, offer incentives that violate Google’s rules, or filter people to a hidden form. If the rating reflects a real service problem, we will say that out loud.',
      },
      {
        title: 'Q&A, products or services, and posts you can sustain',
        body:
          'Open questions get accurate answers. Services are filled in the language customers type. Posts exist on a cadence you can keep, tied to real hours changes, events, or seasonal offers, not a burst of filler that dies in week two. If you cannot sustain posts, we will not pretend a ghost calendar is a strategy.',
      },
      {
        title: 'Access, users, and ownership hygiene',
        body:
          'The right people can edit the listing and the wrong people cannot. Former vendors, old employees, and duplicate managers get cleaned up. You keep ownership. We work as a manager, not as a hostage-taker who disappears with the login.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Inventory the listing Google already has',
        body:
          'We pull the live profile, the duplicate listings if they exist, and the way the name and address appear on your site. You tell us the hours you actually keep, including the days you close for Fiesta or winter. We screenshot what customers see from a downtown search versus a Goleta search when that difference matters. The output is a punch list: what is wrong, what is empty, and what would be dishonest to fill.',
      },
      {
        step: 2,
        title: 'Correct the facts, then the marketing fields',
        body:
          'Hours, categories, and the pin come before clever copy. A beautiful description on the wrong category is wasted. We align services with the jobs you want. Tracking phone numbers, if you use them, have to ring. Website URLs have to land on a page that works on a phone. If the site is the problem, the punch list says so rather than stuffing more keywords into the profile bio.',
      },
      {
        step: 3,
        title: 'Photos, reviews, Q&A',
        body:
          'We upload a coherent photo set, answer unanswered questions, and install the review request process. Existing reviews get replies where they deserve them, including the unhappy ones. This is the part that looks small and is what searchers actually scroll. We will not fake a busy listing with stock party photos from another city.',
      },
      {
        step: 4,
        title: 'A cadence, then a decision on broader Local SEO',
        body:
          'You leave with a simple monthly rhythm: photo adds, hour checks, review replies, optional posts. After a cycle we look at calls and direction requests from the listing. If prominence and proximity still need website pages, citations, and a longer Local SEO plan, we recommend that as a separate scope. The profile can be finished and still not win a Map Pack it was never going to win. We would rather say that than keep polishing the listing as theater.',
      },
    ],
    outcomes: [
      'A Google Business Profile whose categories, hours, and services match the business customers will actually find at the door or on the job.',
      'An honest storefront or service-area configuration that is less likely to get the listing restricted.',
      'A photo and review process you can keep without hiring a full-time poster.',
      'Q&A and services filled so Google is not guessing from a blank template.',
      'Clean user access so a former vendor cannot lock you out.',
      'Clarity on when listing work is enough and when you still need Local SEO, ads, or a faster website.',
    ],
    faqs: [
      {
        category: 'seo',
        question:
          'Is Google Business Profile optimization the same as Local SEO?',
        answer:
          'No. This service is the listing: categories, photos, hours, reviews process, Q&A, and ownership. Local SEO also covers Map Pack geography, on-site pages, citations, and a longer measurement cycle. Many businesses need the listing cleaned up first. Some need the full Local SEO engagement. We will not relabel one as the other to make a package look bigger.',
      },
      {
        category: 'seo',
        question: 'Can you guarantee we show in the Map Pack after this?',
        answer:
          'No. A complete listing is required to compete. It does not override proximity. A Carpinteria pin will not own downtown Santa Barbara because we wrote a better description. We measure calls and direction requests from the profile. Rankings are context. Anyone who guarantees Map Pack placement from profile work alone is selling a story.',
      },
      {
        category: 'seo',
        question: 'What if I have two listings for the same shop?',
        answer:
          'Duplicates split reviews and confuse Google. We identify them and follow Google’s process to mark the wrong one. It can take time and it is not always instant. We will not create a third listing as a workaround. If a former owner or landlord still controls a profile, that is an access problem we solve before any “optimization.”',
      },
      {
        category: 'seo',
        question: 'Should I add every category Google offers?',
        answer:
          'No. Primary category should be the thing you most want to be found for. Extra categories that do not match the business dilute relevance and can look spammy. A restaurant is not also a hotel because they have a patio. We pick the set that matches the door and the search, then stop.',
      },
      {
        category: 'seo',
        question: 'Do Google posts actually matter?',
        answer:
          'They help a listing look maintained, and they can carry timely offers or hour changes around Fiesta or a storm closure. They will not rescue a wrong category or a dead review profile. If you cannot keep a cadence, we will skip posts rather than automate nonsense. A quiet, accurate listing beats a noisy, fake one.',
      },
      {
        category: 'seo',
        question: 'Will you manage the listing forever?',
        answer:
          'We can include ongoing management in a Local SEO engagement or a small monthly listing retainer if the punch list is done and you still want someone on photos and replies. A one-time optimization is available when the listing was simply neglected. We will recommend the smaller job when that is what you need.',
      },
    ],
    relatedServices: ['local-seo', 'seo', 'social-media'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'google-business-profile-optimization',
      'local-seo-santa-barbara',
    ],
    relatedIndustries: ['restaurants-hospitality', 'home-services'],
    pricingNote:
      'Profile work is scoped by how wrong the listing is, whether duplicates and access issues exist, how large a photo library we need to sort, and whether you want a one-time cleanup or an ongoing cadence of posts and replies. A single restaurant on Linden Avenue is a different afternoon than a multi-category contractor with three old addresses. After we look at the live listing and who currently has manager access, we send a written range for the cleanup and, if you want it, a monthly maintenance note. No Map Pack bonus is included in that number, because we cannot sell Google’s radius.',
  },
  {
    slug: 'conversion-optimization',
    name: 'Conversion Rate Optimization',
    shortName: 'Conversion Optimization',
    navGroup: 'convert',
    icon: 'websites',
    iconBg: 'var(--sbmc-sage)',
    cardBlurb:
      'Turn the traffic you already pay for into more calls, forms, and booked jobs.',
    metaTitle: 'Conversion Rate Optimization for Local Businesses',
    metaDescription:
      'Turn Santa Barbara site traffic into more calls and forms. Landing pages, mobile CTAs, and tests based on real behavior. Book a Free Call.',
    h1: 'Conversion optimization for local sites that get visits and miss the call',
    eyebrow: 'Convert & Grow',
    heroLede:
      'If Google Ads, Maps, and SEO are sending people to a page that hides the phone number, takes five seconds to paint, or asks a tourist for a mailing address before a reservation, you do not have a traffic problem. You have a conversion problem. Conversion rate optimization is the work of finding those leaks and fixing them with a mix of specialist judgment and tests, on the site you already have. It is not a redesign for its own sake. It is not a promise to double your rate. It is a disciplined look at what visitors do on phones along the 101 corridor, and a sequence of changes you can measure.',
    problemFraming:
      'Local businesses in Santa Barbara often spend months arguing about traffic while the landing page would lose a call even if Google handed them every click on State Street. The hero is a full-bleed slideshow. The number sits in a tiny header. The form wants a company name, a budget, a timeline, and a message. A visitor from a hotel has two minutes and a thumb. They leave. Analytics then reports a healthy session count and a bounce rate everyone ignores.\n\nHome-service and medical sites have a different leak: they rank or they pay for clicks, then they route mobile users through a hamburger menu to find “contact.” Click-to-call is below a fold of stock photography. Office hours are in a PDF. After hours, the form goes to an inbox nobody checks until morning, and the lead has already called the next Goleta listing. CRO here starts with the phone and the first screen, not with a multivariate test on button color.\n\nThere is also the honesty problem with testing. A Carpinteria shop that gets 80 visits a month cannot run a statistically pretty A/B test. We will still fix the obvious: speed, tap targets, form length, trust copy that does not invent reviews. When traffic is high enough (usually paid search or a busy restaurant), we test. When it is not, we ship the high-confidence changes and measure calls. Pretending every local site is an e-commerce experiment is how CRO gets a bad name.',
    whatsIncluded: [
      {
        title: 'Conversion audit on phone and desktop',
        body:
          'We walk the real landing pages from ads, Maps, and organic, on a narrow phone and on a laptop. We note where the call path disappears, where the form asks too much, and where layout shift makes people tap the wrong thing. You get a prioritized list, not a 40-page heatmap souvenir.',
      },
      {
        title: 'First-screen and call-path fixes',
        body:
          'The offer, the city, and the next step belong in the first viewport on mobile. Sticky call buttons, readable hours, and click-to-call that actually dials. For hospitality, that may be reserve or order. For contractors, it is call or request. We match the action to the business rather than installing the same widget everywhere.',
      },
      {
        title: 'Form and thank-you surgery',
        body:
          'Fields cut to what you will actually use. Spam traps that do not punish humans. Thank-you pages that fire conversions for ads. If GoHighLevel or another CRM is in play, the form has to land in a pipeline someone watches, or we have only decorated a leak.',
      },
      {
        title: 'Speed and stability on templates that get traffic',
        body:
          'CRO includes the milliseconds. We chase third-party scripts, oversized images, and layout shift on the URLs ads and Maps actually hit. A conversion rate cannot be interpreted on a page that never finished painting. If the theme cannot be saved, we will recommend website work instead of endless patches.',
      },
      {
        title: 'Copy that answers the hire question',
        body:
          'Headlines that name the service and the place. Proof that does not invent testimonials. FAQs that handle price anxiety, parking, or “do you come to Montecito” without a novel. We write in the same unhurried voice as this site. Hype on a landing page is a conversion tax.',
      },
      {
        title: 'Tests when the traffic can support them',
        body:
          'When paid or organic volume is high enough, we run simple A/B tests on one thing at a time: headline, form length, hero versus proof first. When volume is low, we ship sequential changes and watch calls. You will always know which mode we are in. We will not dress a guess up as significance.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Watch the real sessions, not the homepage',
        body:
          'We look at analytics for landing pages, devices, and the campaigns that feed them. If you have call recordings or a CRM, we listen to what people ask. We use heatmaps or recordings only when they add something the data does not already scream. The first workshop is a punch list ordered by likely calls saved, with the items that need a developer versus the items that are copy.',
      },
      {
        step: 2,
        title: 'Ship the high-confidence leaks',
        body:
          'Phone header, form length, hours, speed on the paid landing URL, broken click-to-call, English that names the 805. These do not wait for a test plan. We implement on the current templates when we can, or we spec the website change if the stack will not allow it. You approve copy that involves claims. We still will not invent stars or client names to fill a proof section.',
      },
      {
        step: 3,
        title: 'Instrument, then test or iterate',
        body:
          'Conversions in Google Ads and analytics have to mean a thank-you or a connected call. Then, if volume allows, we test. If it does not, we iterate in short cycles and watch the phone. Hospitality around Fiesta may need a seasonal page rather than a year-round homepage. We will recommend that as a conversion choice, not as a brand exercise.',
      },
      {
        step: 4,
        title: 'Report in calls and forms, retire the losers',
        body:
          'Each cycle you see what changed, what the pages did, and what we are doing next. Losing variants get turned off. If the site is converting and the problem is follow-up, we point to automation. If the site is converting and the problem is cheap traffic, we point to ads structure. CRO does not exist to keep a consultant employed after the leaks are closed.',
      },
    ],
    outcomes: [
      'A punch list of conversion leaks on the pages that actually receive Maps and ads traffic, ordered by likely impact.',
      'Mobile call and form paths that a visitor can use in a short decision window, including tourist traffic downtown.',
      'Forms and thank-you pages that match how you sell and how ads need to count conversions.',
      'Speed and layout-shift fixes on high-traffic templates, or a clear recommendation to rebuild if the stack cannot hold.',
      'Tests only when sample size allows, with sequential fixes when it does not.',
      'Reporting in calls and forms, with a reminder that conversion rate moves after changes, not on a guaranteed curve.',
    ],
    faqs: [
      {
        category: 'websites',
        question: 'Is conversion optimization a new website?',
        answer:
          'Usually not. We work on the templates you have: copy, forms, CTAs, speed, and landing-page structure. If the theme cannot support a usable mobile header or Core Web Vitals, we will recommend a rebuild and we will not pretend another heatmap will save it. The first audit is where that fork appears.',
      },
      {
        category: 'websites',
        question: 'Can you double my conversion rate?',
        answer:
          'We will not promise a multiplier. Some pages have obvious leaks and move quickly once the phone is visible and the form is short. Some pages are already decent and need traffic quality, not CRO. We set a baseline from your analytics and calls, then report what changed. Invented percentages belong in someone else’s deck.',
      },
      {
        category: 'websites',
        question: 'Do I have enough traffic to test?',
        answer:
          'Many 805 sites do not, especially organic-only service businesses. We still fix the obvious. Statistical A/B tests need volume that often comes from ads or a busy hospitality site. We will tell you which mode you are in before we sell a testing program that cannot conclude.',
      },
      {
        category: 'websites',
        question:
          'Should ads pause while you work on conversion?',
        answer:
          'Not by default. If the landing page is broken, we may pause a campaign for a few days rather than keep buying clicks into a dead end. If the page is usable, we often keep spend on while we fix, so we can see whether the change moved calls. That decision is specific to the account.',
      },
      {
        category: 'websites',
        question: 'Will you use popups and chat bots?',
        answer:
          'Only if they help more than they annoy. A chat widget that adds a second of delay and covers the call button is a conversion own-goal on a phone. A simple missed-call text-back is usually an automation conversation, not a popup. We start with the first screen and the form.',
      },
      {
        category: 'websites',
        question: 'How fast will we see a difference?',
        answer:
          'High-confidence fixes (click-to-call, form length, speed on the landing URL) can show up in the call log within days if traffic already exists. Tests take longer. Seasonal businesses need to compare like weeks, not February against Fiesta. We will pick the comparison window with you so nobody declares a miracle in a holiday week.',
      },
    ],
    relatedServices: ['web-design', 'google-ads', 'analytics'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'web-design-cost-santa-barbara',
      'google-ads-for-local-business',
    ],
    relatedIndustries: ['restaurants-hospitality', 'real-estate'],
    pricingNote:
      'CRO scope depends on how many templates receive traffic, whether we can edit the current stack, whether analytics and call tracking already exist, and whether volume is high enough to test or only high enough to fix. A single ads landing page for a Goleta contractor is a different job than a State Street restaurant with a menu, reservations, and gift cards. After we look at the live site, device split, and the campaigns feeding it, we send a written range for an audit plus a defined set of implementations. We will not invent a “per test” price here that ignores whether a test can even conclude.',
  },
  {
    slug: 'social-media',
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    navGroup: 'convert',
    icon: 'social-media',
    iconBg: 'var(--sbmc-peach-light)',
    cardBlurb:
      'Content and campaigns that build your brand and community.',
    metaTitle: 'Social Media Marketing in Santa Barbara',
    metaDescription:
      'Social media for Santa Barbara businesses that need community and content, not a posting treadmill. Instagram, campaigns, and honest scope. Book a Free Call.',
    h1: 'Social media marketing that matches how the 805 actually uses it',
    eyebrow: 'Convert & Grow',
    heroLede:
      'Social can be how a Funk Zone tasting room fills a Thursday, how a Montecito shop stays in the neighborhood conversation, or how a Goleta clinic looks human before someone books. It can also be a treadmill of posts that never touch the phone. We plan and produce social media for 805 businesses when the channel matches the customer: visual hospitality, local retail, real estate, wellness, and brands that live on Instagram and, when it is useful, Facebook or short video. We will also tell you when paid search and Google Business Profile will hire faster than another Reel. Community is the point. Volume for its own sake is not.',
    problemFraming:
      'Owners here get two bad offers. One is an overseas poster who fills the grid with stock sunsets and captions that could sit on any coast. The other is a promise that organic Instagram will replace SEO and ads. Neither matches the street. People still discover restaurants on Maps while walking State Street. They still hire plumbers from a search. They use Instagram to confirm a vibe, follow a chef, see a house, or remember a shop on Linden Avenue. If your business is not that kind of business, a content calendar is a hobby.\n\nThe businesses that do need social often run it like a guilt project. A photo dump after Fiesta, then silence until Solstice. No link in bio that works on a phone. Comments unanswered. Google listing photos that do not match the grid, so the brand feels like two companies. Boosted posts with no audience and no landing page. A Montecito clientele that hates feeling advertised to, served the same hard-sell creative that a national franchise would run.\n\nWe treat social as a channel with a job: awareness and trust for people who already live here or are about to visit, plus light conversion when a post should send someone to book or call. Paid social, if we run it, is separate from “posting.” Creative should look like this county. We will not invent a follower count, a viral hit, or a community we have not built. If you need leads this week, we will put Google Ads and the profile ahead of the grid.',
    whatsIncluded: [
      {
        title: 'Channel and job definition',
        body:
          'Which platforms you actually need, and what success looks like besides a like count. A Coast Village Road retailer and a UCSB-adjacent service do not share a stack. We write down the job: community, recruiting, reservation influence, or proof. If the job is “be famous,” we will decline it.',
      },
      {
        title: 'Content system you can keep',
        body:
          'A cadence tied to real work: plates, job sites, people, the room, the street. We plan around Fiesta, summer, and the quiet months. You will know what we need photographed each week. A calendar that requires a studio every day will fail by week three, so we will not write one.',
      },
      {
        title: 'On-brand captions and community replies',
        body:
          'Words in the same unhurried voice as this site, with local detail when it is true. Comments and DMs that ask a real question get a real answer, or a handoff to whoever books. Ghosting the comments while posting daily is how community dies. We set a reply rule you can staff.',
      },
      {
        title: 'Profile hygiene and the path off-platform',
        body:
          'Bio, highlights, location tags, and a link that lands on a page that loads. If the website cannot take a booking or a call, social has nowhere to send people. We will flag that. Matching Google Business Profile photos to the grid so Maps and Instagram do not contradict each other is part of the same hygiene.',
      },
      {
        title: 'Paid social only when the offer and audience exist',
        body:
          'Boosts are not a strategy. When we run paid, it has an audience, a creative test, and a destination. Hospitality and retail can use it. Many home-service businesses should put that budget into Google Ads. We will say which. Media spend, if any, goes to the platform, not through a markup we hide.',
      },
      {
        title: 'Reporting that is not vanity dressed up',
        body:
          'Reach and engagement as context. Clicks, saves, and actual inquiries when we can track them. We will not pretend a Reel that entertained people in another state is a Santa Barbara customer. If the grid looks better and the phone does not move, we will say the channel is doing brand work, not lead work.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Decide if social is the job',
        body:
          'We look at how your customers actually choose you: Maps, referral, hotel concierge, Instagram, walk-by on State Street. We look at what you can photograph without a film crew. If the honest answer is that Google Ads and the listing should go first, the deliverable is that recommendation plus a light social hygiene list. If social is core, we define platforms, cadence, and who will appear on camera. That conversation saves a year of posting into the void.',
      },
      {
        step: 2,
        title: 'Build the system and the first month',
        body:
          'Access, brand rules, a shot list, and captions for a real month that includes whatever is actually happening (Fiesta, a menu change, a closed Monday). We fix the profile and the link. We align with whoever runs the Google listing so photos do not diverge. You approve anything that names prices or claims. We still will not invent awards or crowds.',
      },
      {
        step: 3,
        title: 'Publish, reply, and collect assets',
        body:
          'The cadence starts. We reply within the rule we set. We tell you what to capture on the floor or the job site so the grid does not decay into stock. If a post should be ads, we separate it from the organic calendar. Community is slower than search. We will not panic after fourteen days of quiet and start giving things away in captions.',
      },
      {
        step: 4,
        title: 'Review the job, not the dopamine',
        body:
          'Monthly, we look at whether the channel did the job we wrote down. If it is brand for a Coast Village audience, we judge it that way. If it was supposed to book tables and did not, we change creative, timing, or recommend paid search instead. Retainers continue while the job is real. They should not continue as a content habit nobody can explain.',
      },
    ],
    outcomes: [
      'A written job for social media, including when we recommend skipping it in favor of search and the Google listing.',
      'A content cadence tied to real 805 seasons and real photography, not a stock-sunset calendar.',
      'Profile and link hygiene so Instagram and Maps do not tell two different stories.',
      'Reply rules that treat comments and DMs as customer service, not decoration.',
      'Paid social only with a destination and an audience, with media billed by the platform.',
      'Reports that separate brand work from inquiries, without invented virality or follower guarantees.',
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'Do all Santa Barbara businesses need Instagram?',
        answer:
          'No. If your customer hires from Google Maps in a hurry (plumbing, glass, many medical specialists), social is optional proof, not the engine. If your customer chooses on vibe (restaurants, shops, some wellness and real estate), it matters more. We would rather you spend the budget on the channel that produces work. A pretty grid is not a strategy if the phone is quiet.',
      },
      {
        category: 'working-together',
        question: 'Will you make us go viral?',
        answer:
          'No. Virality is not a plan, and it often brings the wrong crowd. We aim for local recognition: people who live here, visit here, or are about to. We will not sell a Reel formula. If something travels, we will say so after it happens. Promising it in a proposal would be fiction.',
      },
      {
        category: 'working-together',
        question: 'How often do you need to post?',
        answer:
          'Often enough that the account looks open, not so often that quality collapses. For many 805 businesses that is a few strong pieces a week plus Stories when there is something true to show, not three Reels a day. We set the cadence in the first month based on what you can photograph. Empty calendars stuffed with quotes are worse than a quieter grid.',
      },
      {
        category: 'working-together',
        question: 'Do you need to film our staff?',
        answer:
          'Not always. Many accounts can run on the work, the room, and the street. People on camera help hospitality and some wellness brands. If your culture or your Montecito clientele wants discretion, we plan around that. We will not force a personality-host format onto a business that should stay quiet.',
      },
      {
        category: 'working-together',
        question: 'Can social replace Google Ads?',
        answer:
          'Almost never for high-intent services. Social can warm people up and remind them you exist. Search captures the moment they are ready. Some restaurants and shops can lean harder on social plus walking traffic. We will not turn off hire-intent search to prove a content theory.',
      },
      {
        category: 'working-together',
        question: 'Who owns the account if we stop?',
        answer:
          'You do. We work from access you control. Creative we produce for you is yours to keep as agreed in the scope. We will not hold a login hostage. That is a working-together rule across this agency, not a social special.',
      },
    ],
    relatedServices: [
      'google-business-profile',
      'web-design',
      'marketing-automation',
    ],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'google-business-profile-optimization',
      'ai-search-visibility-local-business',
    ],
    relatedIndustries: ['restaurants-hospitality', 'real-estate'],
    pricingNote:
      'Social scope is driven by platforms, posting cadence, whether we are producing photo and video or editing what you shoot, whether community management (comments and DMs) is included, and whether paid campaigns are in the job. A Linden Avenue shop with phone photos is a different month than a restaurant that needs weekly video through summer. After we look at the current profiles, the website those bios send people to, and how customers actually hire you, we send a written monthly range. We will not invent a per-post price here that ignores strategy, and we will not include “viral” as a deliverable.',
  },
  {
    slug: 'marketing-automation',
    name: 'Marketing Automation',
    shortName: 'Automations',
    navGroup: 'systems',
    icon: 'automations',
    iconBg: 'var(--sbmc-aqua)',
    cardBlurb:
      'Save time, follow up faster, and never miss a lead again.',
    metaTitle: 'Marketing Automation & CRM for 805 Businesses',
    metaDescription:
      'CRM and follow-up for Santa Barbara businesses so leads get a reply before they hire someone else. Pipelines, reminders, reporting. Book a Free Call.',
    h1: 'Marketing automation so 805 leads get a reply before they hire someone else',
    eyebrow: 'Follow-up Systems',
    heroLede:
      'The form that arrives at 8:12 p.m. from a phone on Coast Village Road, the missed call at lunch on Hollister, the estimate request that sat in a shared inbox until Thursday: that is where local businesses lose work they already paid to attract. Marketing automation is the CRM, the pipelines, the reminders, and the messages that make follow-up a system instead of a personality trait. We implement this for Santa Barbara, Goleta, Montecito, and Carpinteria operators who are tired of hunting in email. It is not a mystery platform pitch. It is faster replies, fewer dropped leads, and a pipeline you can actually look at on Monday.',
    problemFraming:
      'Most 805 shops do not fail at getting interest. They fail at the hour after interest. Google Ads and Maps did their job. Someone asked for a table, a consult, a roof, a cleaning. The message landed in a general mailbox, a paper pad, or a text thread with three other jobs. By morning the lead has hired the Goleta company that texted back in four minutes. The report still shows a conversion. The job never existed.\n\nThe other failure is chaos dressed as software. A CRM was “set up” once, pipelines named after internal moods, every form creating a contact and none of them assigned. Reminders fire for the owner’s personal Gmail. Staff keep a shadow spreadsheet because they do not trust the board. Automation that nobody believes is worse than a paper calendar, because it creates the feeling of control while leads rot.\n\nWe build the unglamorous version. Contacts from the website, Google, and the phone land in one place. Stages match how you actually sell: new, reached, booked, won, lost. Tasks appear when a human should call. Simple sequences handle the after-hours text and the two-day check-in, written like a person on State Street, not a drip novel. AI can sit on top of this later (missed-call text-back, routing, review requests). This service is the pipes. Without them, AI is a gadget.',
    whatsIncluded: [
      {
        title: 'CRM and pipeline that match how you sell',
        body:
          'Stages named after real steps, not agency jargon. Owners, estimators, and front-desk roles see the same board. We would rather have five honest stages than fifteen that nobody updates. If you already live in GoHighLevel or another CRM, we work there instead of forcing a migration for sport.',
      },
      {
        title: 'Lead capture into one inbox of record',
        body:
          'Website forms, Google lead ads if you run them, and missed-call handling all create or update a contact. Duplicates get a rule. Source is stored so ads and SEO reports can mean something. A lead that exists only in someone’s iMessage thread is not a lead you can manage.',
      },
      {
        title: 'Follow-up sequences you would send yourself',
        body:
          'After-hours acknowledgment, next-morning call task, a short check-in if nobody connected. Copy in plain English with your hours and city. We will not enroll people in a twelve-email course. If a sequence would annoy a Montecito clientele, we keep it quieter and faster to a human.',
      },
      {
        title: 'Reminders, appointments, and no-show reduction',
        body:
          'Confirmations and reminders for the appointments you already book, with the channel customers actually read (often SMS). Calendar rules so two people do not double-book the truck. This is where restaurants, clinics, and home services get time back without a new hire.',
      },
      {
        title: 'Internal alerts that someone will honor',
        body:
          'A Slack message, SMS, or CRM task to the person who should move, not a group chat that trains everyone to ignore pings. Night and weekend rules included. If nobody will take the alert, we will not install it as theater.',
      },
      {
        title: 'Simple pipeline reporting',
        body:
          'New leads, speed-to-first-response when we can measure it, and where deals stall. You will not get a 14-tab dashboard. If close rates live in another system, we will say what we cannot see rather than invent a funnel percentage.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Map the lead’s actual path',
        body:
          'We sit with whoever answers the phone and watch what happens to a form, a missed call, and a walk-in. You tell us the jobs you want more of and the ones you want to decline. We inventory tools you already pay for. The output is a diagram of the current mess and a proposed pipeline that staff will recognize. If the website forms are broken, that gets fixed or flagged before we automate a dead field.',
      },
      {
        step: 2,
        title: 'Build the board and the capture',
        body:
          'CRM stages, fields, users, and the form and call connections. We test a fake lead from a phone on cellular, because that is how your customers arrive. Permissions so a former employee does not keep admin. You approve any message that goes to a customer. We still will not write scripts that pretend to be a five-year-old agency or invent social proof.',
      },
      {
        step: 3,
        title: 'Sequences, reminders, and the first live week',
        body:
          'Automations turn on in a narrow slice: after-hours first, then reminders, then a two-step follow-up. We watch for loops, duplicate texts, and staff who create contacts by hand and skip the board. Training is short and specific. If the team will not open the CRM, we change the workflow rather than adding another zap.',
      },
      {
        step: 4,
        title: 'Tighten from the stalls',
        body:
          'After a few weeks we look at where leads sit too long and which messages get replies. We cut steps. We add a task where a human still has to sell. If AI automation (routing, review asks, intake triage) would help next, we scope that as a separate, concrete layer. The CRM should still make sense if every fancy feature were turned off tomorrow.',
      },
    ],
    outcomes: [
      'A pipeline that matches how you sell, with leads from the site and the phone landing in one place.',
      'After-hours and next-day follow-up that does not depend on someone remembering to check email.',
      'Appointment reminders that reduce no-shows without a new receptionist.',
      'Alerts assigned to a person, with weekend rules you agreed to.',
      'Reporting on volume and stalls, with honesty about close rates we cannot see.',
      'A foundation AI tools can use later, rather than chatbots bolted onto a shared inbox.',
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'Is this the same as AI automation?',
        answer:
          'No. Marketing automation is the CRM, pipelines, forms, reminders, and sequences. AI automation is specific workflows on top of that: missed-call text-back, routing, review requests, intake triage. You can have a working CRM with no AI. AI without a CRM is a clever reply that still dies in someone’s texts. We will recommend pipes first when that is the gap.',
      },
      {
        category: 'working-together',
        question: 'Do I have to switch to GoHighLevel?',
        answer:
          'Not as a religion. This agency uses GHL for many 805 service businesses because it holds CRM, forms, and SMS in one place. If you already run something staff will actually open, we will automate there when it is capable. A migration only happens when the current tool cannot do the job. We will not move you to collect a setup fee.',
      },
      {
        category: 'working-together',
        question: 'Will customers get spammed?',
        answer:
          'Not if we do this right. Sequences are short, stop on reply, and sound like your shop. We honor opt-out. A Montecito service business may need a lighter touch than a high-volume Goleta contractor. You approve the copy. We would rather send one useful text than a week of “just checking in.”',
      },
      {
        category: 'working-together',
        question: 'How fast can this go live?',
        answer:
          'A simple capture-and-alert setup can be live in a couple of weeks if logins and phone routing are available. Full pipelines, reminders, and staff habits take longer because people are the bottleneck. We will not flip twelve automations on a Friday and leave town. The first live week is watched on purpose.',
      },
      {
        category: 'working-together',
        question: 'What do you need from us?',
        answer:
          'Who answers the phone, what a qualified lead is, hours, and access to the website form and the phone system. Sample messages you already send. If you do not know your close rate, we will still build the board and we will not invent a percentage to fill a dashboard.',
      },
      {
        category: 'working-together',
        question: 'Will this replace my front desk?',
        answer:
          'No. It makes the front desk faster and covers the hours nobody is there. Someone still has to quote, book, and do the work. Automation that pretends to replace judgment is how customers feel handled. We keep a human in the stages that sell.',
      },
    ],
    relatedServices: ['ai-automation', 'analytics', 'strategy'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'google-ads-for-local-business',
      'ai-search-visibility-local-business',
    ],
    relatedIndustries: ['professional-services', 'home-services'],
    pricingNote:
      'Automation cost follows the current tool stack, how many lead sources we must connect, how many pipelines and locations you run, and whether SMS, calendars, and call tracking are already in place. A single-location Carpinteria shop with one form is a different build than a Goleta firm with three calendars and a shared inbox. After we look at the website forms, the phone path, and whatever CRM you already pay for, we send a written range for implementation and a monthly note if we are staying on to maintain sequences. We will not invent a per-contact price, and platform SMS and phone fees are billed by those vendors.',
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    shortName: 'AI Automation',
    navGroup: 'systems',
    icon: 'automations',
    iconBg: 'var(--sbmc-aqua)',
    cardBlurb:
      'Missed-call text-back, routing, review asks, and intake that actually runs.',
    metaTitle: 'AI Automation for Local Businesses in Santa Barbara',
    metaDescription:
      'Practical AI for 805 businesses: missed-call text-back, lead routing, review requests, and intake triage. No science-fiction pitch. Book a Free Call.',
    h1: 'AI automation for missed calls, routing, reviews, and intake',
    eyebrow: 'Practical AI',
    heroLede:
      'AI in a local business should do a few jobs that currently fall on the floor: text someone back when a call is missed at 4:40 p.m. on the 101, put the right lead in front of the right person, ask for a Google review after a completed job, and collect intake so a human is not retyping a voicemail. That is this service. We implement those workflows for Santa Barbara County operators using the phones, CRM, and Google listing you already have (or we help you get). We will not sell a robot receptionist as a personality, and we will not claim a model will run your company. If the CRM pipes are missing, we start with marketing automation first.',
    problemFraming:
      'The missed call is the simplest example. A Carpinteria homeowner sees your Map Pack listing, taps call, and you are on a roof in Goleta. Voicemail plays. They hang up and tap the next pin. A same-minute text that says you are with a customer and asks whether they want a call-back or a photo of the problem recovers a share of those jobs. That is not science fiction. It is a trigger, a template, and a rule for when a human takes over. Most “AI” pitches skip the trigger and sell the vibe.\n\nLead routing is the second concrete job. A medical-wellness practice on the Mesa gets mixed intents: new patient, existing patient, vendor, and spam. A contractor gets emergency versus booked-out remodel. Without triage, everything lands on the owner. With it, keywords, form fields, and simple classification send emergencies to the on-call phone and send “thinking about next summer” to a slower pipeline. Models can help classify. Rules should still be visible so a bad classification is fixable on a Tuesday.\n\nReview requests and intake are the third and fourth. Asking every closed job for a Google review, once, at the right time, without nagging, is a workflow. Collecting insurance, address, or job photos before the appointment is a workflow. Dumping a chatbot on the website that cannot book, cannot quote, and cannot admit when it does not know is not a workflow. We would rather ship four boring automations that run than a talking widget that embarrasses you in front of a Coast Village customer.',
    whatsIncluded: [
      {
        title: 'Missed-call text-back',
        body:
          'When a call to the tracking or main number is not answered, a text goes out within a minute with a short, approved script and a way to reply. After-hours language is different from lunch-break language. You set quiet hours. The thread lands in the CRM so the morning person is not starting from zero.',
      },
      {
        title: 'Lead routing and assignment',
        body:
          'New contacts from forms, chat, and calls get a default owner based on service, city, or urgency. Goleta versus downtown, emergency versus estimate, new versus existing. Notifications go to a person, not a void. If two locations share a number, we will not pretend one inbox can sort it without rules.',
      },
      {
        title: 'Review request after completed work',
        body:
          'A single ask, timed after the job or appointment, pointing at your Google Business Profile. No filtering, no fake reviews, no “only if you had a great experience” gate. Staff can suppress a send when the job went badly. Velocity is the point. The model does not write the customer’s review.',
      },
      {
        title: 'Intake triage',
        body:
          'A short SMS or form path that gathers the facts a human needs: photos of the leak, preferred time, new patient versus existing, party size, address in Montecito versus a downtown hotel. The model can draft a summary for staff. It should not invent a diagnosis or a price you did not approve.',
      },
      {
        title: 'Handoff rules and kill switches',
        body:
          'Every workflow has a path to a person and a way to turn it off. Keywords like “stop,” angry replies, and anything the model is unsure about go to a human. We log what was sent. You will not find out from a review that the bot promised Saturday service you do not offer.',
      },
      {
        title: 'Measurement of the jobs, not the novelty',
        body:
          'Missed calls recovered, review invites sent, time-to-first-response, routing errors caught. We will not report “AI conversations” as a vanity total. If a workflow annoys people, we cut it. If it saves jobs, we keep it and say which one.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Pick the four jobs, not a platform tour',
        body:
          'We listen to missed-call volume, how reviews are asked today, who triages email, and where routing already fails. You choose which of the four concrete workflows matter in the first sprint. If the CRM cannot store a thread, we pause and do marketing automation first. If the phone system cannot fire a missed-call event, we specify that hardware or vendor change before anyone trains a model.',
      },
      {
        step: 2,
        title: 'Write the scripts and the boundaries',
        body:
          'Every outbound line is approved by you, including after-hours and Fiesta week exceptions. We list what the system must never say: prices you did not publish, wait times it cannot know, medical or legal advice. Classification labels get a cheat sheet staff can correct. This is slower than a demo video and it is why the thing does not humiliate you on Linden Avenue.',
      },
      {
        step: 3,
        title: 'Turn on one workflow in a tight window',
        body:
          'Missed-call text-back usually goes first because the failure is obvious. We watch live threads for a week. Then routing, then review asks, then intake, unless your volume says a different order. Staff get a fifteen-minute drill: how to take over a thread, how to suppress a review ask, how to mark a routing error. If something loops, it gets killed the same day.',
      },
      {
        step: 4,
        title: 'Tune from real threads, then stop adding toys',
        body:
          'We read a sample of conversations and missed-call outcomes, not a vendor dashboard of “AI engagement.” Scripts get shorter. Routing rules get a new exception when Goleta and Santa Barbara jobs keep landing wrong. When the four jobs are stable, we do not keep bolting on chat widgets to justify a retainer. Further work is a new, named workflow or it is maintenance.',
      },
    ],
    outcomes: [
      'Missed-call text-back on the numbers you care about, with threads stored where staff already work.',
      'Routing rules that send urgency and geography to a person, with a way to correct mistakes.',
      'A review request that runs after real completed work, without gating or writing reviews.',
      'Intake that collects facts before the appointment, with summaries for humans rather than invented answers for customers.',
      'Kill switches, opt-out, and approved scripts so the system cannot freelance your hours or prices.',
      'Reporting on recovered calls, invites sent, and errors, without a science-fiction success story.',
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'Will this replace my receptionist?',
        answer:
          'No. It covers the minutes nobody can answer and the sorting that currently lives in a pile of voicemails. A person still books, quotes, and handles anything sensitive. Practices on the Mesa and shops on State Street still need a human voice for the moments that matter. We will not sell you a replacement that pretends otherwise.',
      },
      {
        category: 'working-together',
        question: 'Do I need marketing automation first?',
        answer:
          'Often yes. If forms do not create contacts, if nobody owns a pipeline, and if SMS cannot be sent from a proper number, the AI layer has nowhere to sit. We will recommend the CRM work first when that is true. If you already have a working board and phone events, we can start with missed-call text-back.',
      },
      {
        category: 'working-together',
        question: 'What tools do you use?',
        answer:
          'Whatever can fire the event and store the thread: commonly the CRM we already implement, the phone or call-tracking vendor you have, and Google Business Profile for review links. We will not pick a trendy chatbot so we can put a logo on a slide. If a vendor cannot do missed-call webhooks, we will say so and pick another path.',
      },
      {
        category: 'working-together',
        question: 'Can the AI quote prices or give medical advice?',
        answer:
          'Not unless you give it a published, approved source, and even then we are conservative. For most 805 service and wellness businesses the safe pattern is collect facts, promise a human, never diagnose, never invent a number. If a model is unsure, it hands off. That rule is part of the build, not a footnote.',
      },
      {
        category: 'working-together',
        question: 'Is this legal for calls and texts?',
        answer:
          'We work within consent and opt-out for SMS, and we will not text people who did not contact you. Call recording, if you use it, needs your own compliance process. We are not your lawyer. We will structure workflows so “stop” works and so you are not scraping lists. If your category has extra rules, we slow down and ask.',
      },
      {
        category: 'working-together',
        question: 'How is this different from the website chat bubble?',
        answer:
          'A generic chat bubble tries to answer everything and usually answers nothing. These workflows start from a real event (missed call, closed job, new form) and do one job. If we add chat later, it will use the same handoff rules. We will not drop a widget on the site as a substitute for the four jobs on this page.',
      },
    ],
    relatedServices: ['marketing-automation', 'google-ads', 'analytics'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'ai-search-visibility-local-business',
      'google-ads-for-local-business',
    ],
    relatedIndustries: ['medical-wellness', 'home-services'],
    pricingNote:
      'AI automation is scoped by which of the four workflows we turn on, whether missed-call events already exist, whether a CRM can store SMS threads, and how many numbers and locations we must cover. A single tracking number for a Goleta contractor is a different build than a clinic with after-hours rules and two providers. After we look at the phone system, the CRM, and the Google listing the review ask will point to, we send a written range for implementation plus any monthly model or messaging fees billed by vendors. We will not invent a “per AI conversation” price, and we will not include a chatbot personality as a line item unless you asked for a named workflow.',
  },
  {
    slug: 'analytics',
    name: 'Marketing Analytics & Reporting',
    shortName: 'Analytics',
    navGroup: 'systems',
    icon: 'strategy',
    iconBg: 'var(--sbmc-sand)',
    cardBlurb:
      'Calls, forms, and campaigns in English, without a 14-tab vanity dashboard.',
    metaTitle: 'Marketing Analytics & Reporting in Santa Barbara',
    metaDescription:
      'Marketing analytics for Santa Barbara businesses: call tracking, GA4, and reports you can read. Know what produced the job. Book a Free Call.',
    h1: 'Marketing analytics you can read without a decoder',
    eyebrow: 'Measurement',
    heroLede:
      'If you cannot tell which campaign, page, or listing produced a call from State Street versus a pocket-dial, you are guessing with a budget. Marketing analytics for a local 805 business is call tracking, clean Google Analytics 4, Search Console, ads conversions that mean a thank-you, and a report that a shop owner can finish before the coffee cools. We connect those sources and write the story in English. We will not hide behind a 14-tab Looker studio full of sessions and bounce rate. If a number cannot change a decision, it does not belong on the first page.',
    problemFraming:
      'The default report in this county is a PDF from an agency in another time zone: users up, bounce rate “healthy,” a ranking screenshot from a Tuesday, and a recommendation to keep spending. Nobody can say how many of those users were UCSB students bouncing off a page, tourists who never called, or a Goleta homeowner who booked. The CRM is a separate planet. The phone system is a third. Google Ads counts clicks on the call button as conversions whether anyone spoke or not.\n\nGA4 did not help by being friendlier. Many local sites still have a half-migrated property, no key events, and enhanced measurement that treats scroll as success. Duplicate Google tags fire twice. The Google Business Profile insights sit in another login the owner forgets. When Fiesta week spikes traffic, the report celebrates, even if the kitchen was already full and the form was closed.\n\nWe build a small measurement system that matches how you sell. A contractor cares about qualified calls and booked estimates. A restaurant cares about reserve clicks and whether ads stole from brand. A clinic cares about new-patient forms and speed to a human. The stack is usually GA4, Search Console, Google Ads, call tracking, and the CRM when it exists. The output is a monthly (or weekly, during an ads rebuild) narrative: what we believe, what we do not know, and what we are changing. Founded in 2024, we would rather show a short honest report than a theater of historical dashboards we do not have.',
    whatsIncluded: [
      {
        title: 'Source inventory and tagging repair',
        body:
          'What is installed, what fires twice, and what never made it from Universal Analytics. We document the Google tags, the CRM scripts, and the chat widgets that wreck INP. You get a list of what stays and what gets removed before we trust a number.',
      },
      {
        title: 'GA4 configured for a local business',
        body:
          'Key events that match calls, forms, and clicks you care about. Filters for obvious internal traffic when we can. Channel groups that do not dump everything into “unassigned” without a fight. We will not pretend GA4 is a perfect truth. We will make it less of a rumor.',
      },
      {
        title: 'Call tracking tied to campaigns and the listing',
        body:
          'Numbers that swap on ads and, where appropriate, on the site, with recordings or disposition notes if you already use them. Pool size and privacy are discussed like adults. A call that never connected is not a lead. We will not count it as one.',
      },
      {
        title: 'Ads and Search Console in the same story',
        body:
          'Brand versus non-brand in ads. Queries and landing pages in Search Console. GBP call and direction insights when you give access. The point is one narrative, not three exports. If a source is missing, the report has a hole we label instead of a fabricated line.',
      },
      {
        title: 'CRM match when the pipeline exists',
        body:
          'If marketing automation is in place, we connect stage changes to the campaign when the data model allows it. Close rates stay yours to share. We will not invent a revenue number from a form fill. When the CRM is a spreadsheet, we say the report stops at inquiry.',
      },
      {
        title: 'A recurring report a human writes',
        body:
          'Monthly is typical. Ads rebuilds can be weekly. The document is short: what moved, what we changed, what we need from you (hours, close notes, a landing-page yes). Charts exist to support the sentences. They are not the deliverable.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'See every login and every lie',
        body:
          'We collect GA4, Ads, Search Console, GBP, call tracking, and CRM access. We click the live site with a tagged URL and watch what fires. You tell us which outcomes count as work: a booked table, a new patient, an estimate on-site. The first deliverable is a measurement map: green (trust), yellow (directional), red (ignore). Vanity metrics get named so they stop sneaking onto page one.',
      },
      {
        step: 2,
        title: 'Fix tracking before we interpret history',
        body:
          'Tags, key events, conversion actions, and call numbers get repaired. Historical GA4 that was broken stays labeled as broken. We will not “trend” a year of duplicate pageviews to make a chart look smooth. If the website must change to fire a thank-you event, that task is dated. Analytics that waits forever on a perfect site never ships.',
      },
      {
        step: 3,
        title: 'Baseline, then a cadence',
        body:
          'Once events are clean, we take a baseline month (or two weeks for ads). Then the recurring report starts. Fiesta and summer get footnotes so nobody compares them to February like they were the same market. You can invite a bookkeeper or a partner; the language will still be English.',
      },
      {
        step: 4,
        title: 'Decisions, not decoration',
        body:
          'Each cycle should produce a change or a conscious hold. Pause a campaign, fix a landing page, ask for review velocity, stop writing a page that does not earn queries. If the data is inconclusive, we say that and wait rather than invent a story. Strategy work, if you want a 90-day plan on top of this, is a separate service. Analytics is the instrument panel.',
      },
    ],
    outcomes: [
      'A written map of which numbers you can trust, which are directional, and which to ignore.',
      'GA4 key events and ads conversions that mean an inquiry, not a tap on a call button that never connected.',
      'Call tracking connected to campaigns and, where useful, to the site.',
      'Search Console and Google Business Profile insights in the same monthly story when access exists.',
      'A short recurring report written by a person, with seasonal footnotes for the 805 calendar.',
      'Clear holes labeled when CRM close data or phone dispositions are missing, instead of fake ROI.',
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'Can you show ROI to the dollar?',
        answer:
          'Only if you share close rates and job values, and even then it is a model, not a bank statement. Most 805 businesses can get to cost per qualified call and a directional view of booked work. We will not multiply form fills by an invented average ticket to make a slide. If you want that math, you bring the numbers from your books.',
      },
      {
        category: 'working-together',
        question: 'Is Google Analytics enough by itself?',
        answer:
          'No. Analytics does not hear the phone. Local service businesses live on calls. Without call tracking (and without CRM notes, if you have them), we are looking at page behavior and hoping. We will still clean GA4. We will also tell you it is incomplete.',
      },
      {
        category: 'working-together',
        question: 'Will you build a giant dashboard?',
        answer:
          'Not as a default. A live dashboard can help during an ads rebuild if you like to peek. The deliverable is still a written summary. Fourteen tabs of unassigned traffic is how owners stop opening the report. We keep the first view small on purpose.',
      },
      {
        category: 'working-together',
        question: 'What about privacy and call recording?',
        answer:
          'Call recording, if you use it, is your policy to disclose. We will not turn on recording as a surprise. Analytics should not collect more personal data than you need. We avoid stuffing forms with fields you will never read. If you have a HIPAA-adjacent practice, we slow down and keep protected data out of marketing tags.',
      },
      {
        category: 'working-together',
        question: 'How is this different from digital marketing strategy?',
        answer:
          'Analytics is the measurement system and the recurring interpretation. Strategy is the 90-day choices about which channels to run. You can buy analytics while someone else runs ads. You can buy strategy that assumes measurement we then have to build. We will say when you are missing the instrument panel.',
      },
      {
        category: 'working-together',
        question: 'Do you need months of history to start?',
        answer:
          'No. Broken history is common. We fix tracking, baseline from the clean date, and refuse to over-interpret the messy years. A new business on Linden Avenue and a twenty-year shop with a neglected GA4 property both start at “what can we trust next week.”',
      },
    ],
    relatedServices: ['strategy', 'google-ads', 'local-seo'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'google-ads-for-local-business',
      'how-much-does-seo-cost-santa-barbara',
    ],
    relatedIndustries: ['professional-services', 'real-estate'],
    pricingNote:
      'Analytics scope depends on how many platforms we must connect, whether call tracking is new or already in place, whether the website can fire thank-you events, and how often you want a written report. A single ads account plus GA4 is a different job than Ads, SEO, GBP, two phone numbers, and a CRM. After we look at the current tags and logins, we send a written range for setup and a monthly reporting cadence. Call-tracking minutes and some Google properties have vendor costs that are not our fee. We will not invent an ROI dashboard price that assumes job-value data you have not given us.',
  },
  {
    slug: 'strategy',
    name: 'Digital Marketing Strategy',
    shortName: 'Strategy',
    navGroup: 'systems',
    icon: 'strategy',
    iconBg: 'var(--sbmc-sand)',
    cardBlurb: 'A clear plan for long-term, sustainable growth.',
    metaTitle: 'Digital Marketing Strategy in Santa Barbara',
    metaDescription:
      'A 90-day digital marketing plan for Santa Barbara businesses: what to do first, what to wait on, and how we will measure. Book a Free Call.',
    h1: 'Digital marketing strategy for the next 90 days, not a binder',
    eyebrow: 'The Plan',
    heroLede:
      'Most 805 owners do not need more ideas. They need a sequence. Local SEO, a website, ads, social, automation: each can be right, and doing a little of all of them is how budgets disappear by October. Digital marketing strategy here is a written plan for Santa Barbara, Goleta, Montecito, and Carpinteria businesses that says what to run first, what to ignore, who has to answer the phone, and how we will know in 90 days whether it worked. A free call is a short version of this thinking. A strategy engagement is the deeper one, with access, competitors, and a calendar you can staff. It is not a 70-page deck that dies in a drawer.',
    problemFraming:
      'The pattern is familiar. A State Street retailer hired a social person, a Goleta contractor bought an SEO package from a national call center, the website was rebuilt in 2019, and Google Ads was “tried” for six weeks in summer. Nobody owns the story. Reports do not agree. Fiesta is treated as a surprise every year. The owner is asked to pick a channel like a personality test.\n\nMontecito-facing firms have a different version: high ticket, low search volume, a reputation that lives in referrals, and a fear of looking hungry online. Carpinteria businesses get treated as Santa Barbara with a cheaper rent, which they are not. Strategy that ignores those differences is just a generic funnel graphic. Proximity in Maps, tourist versus resident intent, UCSB calendars, and the 101 commute are not flavor. They are constraints.\n\nWe write plans that a small team can run. First 90 days usually mean one acquisition engine (often Local SEO plus the listing, or ads if the phone needs to ring while organic catches up), a site that does not leak, and follow-up that does not depend on heroics. Measurement is part of the plan, not an appendix. We will not promise a ranking, a lead volume, or a revenue figure we cannot see. Founded in 2024, we do not pretend to a decade of case studies. We pretend to a calendar and a point of view.',
    whatsIncluded: [
      {
        title: 'Market and competitor read for your category',
        body:
          'Who shows in Maps and organic for the jobs you want, in the cities you can serve. A short, opinionated read: who is winning downtown, who owns Goleta, where Montecito demand is real versus vanity. We note doorway spam and invented testimonials when we see them, because that is the competitive set you are in.',
      },
      {
        title: 'Channel sequence for 90 days',
        body:
          'What to run, what to pause, and what to wait on. Ads versus Local SEO versus the website versus automation, in an order that matches your phone capacity. If social is optional, it is listed as optional. If a rebuild must happen before ads, that is the first line, not a footnote.',
      },
      {
        title: 'Offer and geography decisions',
        body:
          'Which services you should advertise or rank for, and which to stop naming because you do not want those jobs. Service-area honesty for the pin. Tourist versus resident pages when both exist. This is strategy as editing, which is usually the valuable part.',
      },
      {
        title: 'Measurement and meeting rhythm',
        body:
          'Which numbers will decide whether we continue. Call tracking if ads are in the plan. Search Console if SEO is in the plan. A check-in cadence that a busy owner will keep. If we cannot measure a channel, it does not get to be the hero of the plan.',
      },
      {
        title: 'Resourcing: who does what',
        body:
          'What we would implement, what your staff must do (photos, reviews, answering), and what a specialist might own. A plan that assumes you have a marketing department you do not have is a bad plan. We write to the team you actually have.',
      },
      {
        title: 'A document you can keep if you never hire us',
        body:
          'The strategy is yours. You can take it to another vendor or to your nephew. We would rather you have a clear sequence than a hostage PDF. Implementation, if you want it, is a separate agreement with its own scope.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Intake that is short on purpose',
        body:
          'Website, Google Business Profile, ads account if it exists, who answers the phone, which jobs you want, which cities you will drive to. We do not send a 12-page brand questionnaire before we look at the Map Pack. You get a working session on a call, not a homework packet. If access is missing, the plan will say what we could not see instead of inventing a visibility score.',
      },
      {
        step: 2,
        title: 'Look at the market like an operator',
        body:
          'We search the way a resident and a visitor would, from more than one part of the county when proximity matters. We read the site on a phone. We look at follow-up if we can see it. Competitors are sampled in your category, including the ones with thin city pages and the ones that simply answer the phone. Notes stay specific: Linden Avenue versus State Street, Old Town Goleta versus downtown, Coast Village Road discretion versus volume plays.',
      },
      {
        step: 3,
        title: 'Write the 90-day sequence',
        body:
          'A prioritized list with reasons, a measurement section, and a “do not do this yet” list. Timelines are honest: ads in days, websites in weeks, Local SEO in months. We include a free call level of clarity even when this engagement goes deeper: a person writes it, you can read it without a decoder, and there is no ranking pledge in the footer.',
      },
      {
        step: 4,
        title: 'Walk through, then decide what to run',
        body:
          'A working call, not a theater presentation. We argue the sequence if you want to start with social and the data says Maps. If you implement with us, the strategy becomes the first 90 days of the other services. If you do not, you still have the document. Either outcome is a complete job. Strategy retainers that exist only to have another meeting are not something we will upsell.',
      },
    ],
    outcomes: [
      'A written 90-day sequence that names the first channel, the leaks to fix, and the work to postpone.',
      'Geography and offer choices that respect Map Pack proximity and how you actually operate in the 805.',
      'A measurement plan that matches the channels, with holes labeled when tracking does not exist yet.',
      'A resourcing picture for a small team, not a fictional marketing department.',
      'A walkthrough call with a person, and a document you keep either way.',
      'No ranking guarantees, no invented competitive scores, and no binder that outlives its usefulness.',
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'Is this the same as a free call?',
        answer:
          'A free call is a shorter, no-obligation version: visibility gaps, a competitor glance, and 90-day priorities, delivered within three business days, then a 20-minute call. A strategy engagement is deeper: more access, a tighter channel sequence, resourcing, and measurement design. You can request the free plan first. Many businesses should. We will not make you pay for a longer document if the short one already answers the question.',
      },
      {
        category: 'working-together',
        question: 'Do I have to implement with you afterward?',
        answer:
          'No. The plan is the deliverable. If we work together after that, we agree on a scope in writing. Month-to-month or defined project terms are the norm. The strategy is not a trap. If another vendor can run it, they can run it.',
      },
      {
        category: 'working-together',
        question: 'Can you write a 12-month master plan?',
        answer:
          'We can sketch the year, but the useful unit here is 90 days because Google, seasonality, and your capacity move. A 12-month binder becomes fiction by month four. We would rather update a short plan than pretend October is knowable in January, especially around summer and Fiesta.',
      },
      {
        category: 'working-together',
        question: 'What if I already have an agency?',
        answer:
          'Then this is a second set of eyes. We will not trash another vendor in the write-up. We will point at sequence gaps: ads without call tracking, SEO without a usable phone page, social without a job. You can take the document back to them. If they are already on that roadmap, you will know.',
      },
      {
        category: 'working-together',
        question: 'Will the plan include a price for all the work?',
        answer:
          'It will include what drives cost and which scopes we would quote next. It will not invent a bundled number for ads media, a website, and SEO as if they were one SKU. Each implementation gets its own range after we look at the live site or account. Strategy is paid as strategy. Media still goes to Google.',
      },
      {
        category: 'working-together',
        question: 'Who writes it?',
        answer:
          'A person who has looked at your market. It is not a template with the city name swapped. If we cannot see the Google Business Profile, the plan will say so. We will not fill the gap with a made-up visibility score so the PDF looks complete.',
      },
      {
        category: 'working-together',
        question: 'Is this only for businesses inside Santa Barbara?',
        answer:
          'The agency is built around Santa Barbara, Goleta, Montecito, and Carpinteria. If you are nearby and the market maps onto what we already do, we can talk. We will not open a thin strategy for a town we do not intend to serve well, and we will not write doorway city pages as part of the plan.',
      },
    ],
    relatedServices: ['local-seo', 'web-design', 'marketing-automation'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'how-much-does-seo-cost-santa-barbara',
      'web-design-cost-santa-barbara',
    ],
    relatedIndustries: ['professional-services', 'home-services'],
    pricingNote:
      'Strategy is scoped by how many channels and locations we must look at, whether ads and analytics access is available, and whether you want a single 90-day document or a short follow-up cycle. A one-location shop on Hollister is a different engagement than a multi-service firm serving Montecito and downtown with an existing agency in the mix. After we see the site, the listing, and the question you actually need answered, we send a written range for the strategy work. Implementation of SEO, ads, or a website is quoted separately. We will not invent a master-plan price that pretends media spend and development are included.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const featuredServiceSlugs = [
  'local-seo',
  'google-ads',
  'web-design',
  'social-media',
  'marketing-automation',
  'strategy',
] as const;
