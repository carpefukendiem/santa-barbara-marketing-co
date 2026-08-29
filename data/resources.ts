export type ResourceStatus = 'published' | 'planned';
export type ResourceCategory = 'seo' | 'ads' | 'websites' | 'ai' | 'strategy';

export const resourceCategoryLabels: Record<ResourceCategory, string> = {
  seo: 'SEO',
  ads: 'Google Ads',
  websites: 'Websites',
  ai: 'AI Search',
  strategy: 'Strategy',
};

export const resourceCategories: ResourceCategory[] = [
  'seo',
  'ads',
  'websites',
  'ai',
  'strategy',
];

export type ResourceBlock =
  | { type: 'p'; html: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'takeaways'; items: string[] };

export type Resource = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: ResourceCategory;
  excerpt: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  status: ResourceStatus;
  relatedServices: string[];
  relatedLocations: string[];
  relatedArticles: string[];
  body: ResourceBlock[];
};

export const resources: Resource[] = [
  {
    slug: 'local-seo-santa-barbara',
    title: 'Local SEO in Santa Barbara: How Businesses Actually Get Found',
    metaTitle: 'Local SEO in Santa Barbara: How Businesses Get Found',
    metaDescription:
      'How Santa Barbara businesses get found in Maps and Search. Map Pack versus organic, Goleta versus downtown, and what Local SEO actually includes.',
    category: 'seo',
    excerpt:
      'A practical look at how local search works in Santa Barbara County: Map Pack versus organic results, why a Goleta pin loses downtown, and what actually moves visibility.',
    readTime: '10 min',
    datePublished: '2026-03-01',
    dateModified: '2026-03-01',
    status: 'published',
    relatedServices: ['local-seo', 'google-business-profile', 'seo'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'google-business-profile-optimization',
      'how-much-does-seo-cost-santa-barbara',
      'ai-search-visibility-local-business',
    ],
    body: [
      {
        type: 'p',
        html: `If you run a business in Santa Barbara County, local search is how a lot of your next customers decide who to call. They type a service and a place. Sometimes they skip typing and tap a pin in the Map Pack. Sometimes they are a visitor looking for dinner tonight. Sometimes they are a homeowner in San Roque who needs a plumber before the weekend. The businesses that show up in those moments are not always the best at the work. They are the ones whose Google Business Profile, website, and review stream match how Google ranks local results in this market.`,
      },
      {
        type: 'p',
        html: `This guide is the pillar for how we think about <a href="/services/local-seo">local SEO in Santa Barbara</a>. It is written for owners and operators, not for people who sell ranking packages. There is no 30-day first-page promise here. There is a clear picture of Map Pack versus organic results, the three signals Google actually uses, why a Goleta address behaves differently from a downtown pin, and how tourist queries differ from resident ones. If you want a plan for your own listing and site, start with the Free 805 Growth Plan. If you want to understand the market first, keep reading.`,
      },
      {
        type: 'h2',
        text: 'Two places you can show up',
      },
      {
        type: 'p',
        html: `When someone searches “dentist Santa Barbara” or “HVAC Goleta,” Google usually returns two different inventories. The Map Pack is the local unit with the map, three businesses, stars, hours, and the call button. Below that, or sometimes instead of it, is the organic list of websites. Winning one does not automatically win the other. A practice can own the organic blog results and still be invisible in Maps. A contractor can sit in the Pack and have a website that Google barely trusts. <a href="/santa-barbara-digital-marketing">Digital marketing in Santa Barbara</a> that only talks about “ranking” without naming which unit you mean is how budgets get pointed at the wrong work.`,
      },
      {
        type: 'p',
        html: `The Map Pack is assembled from Google Business Profiles. Categories, service areas, reviews, photos, proximity to the searcher, and how well the profile matches the query all feed it. Organic results are assembled from pages. Titles, content, links, technical health, and whether the page is actually about the service in that city feed those. If your “SEO vendor” only writes blog posts and never touches the profile, you are funding organic theory while your competitor answers the phone from the Pack. If they only post photos to Maps and ignore the site, you will stall the moment a customer taps through to a slow page with no clear offer.`,
      },
      {
        type: 'p',
        html: `Both units matter. The Pack is where high-intent “near me” and city-plus-service searches often convert on a phone. Organic is where comparison, research, and branded searches land, and it is what AI Overviews and other answer engines still cite when they need a page. Treat them as one system with two surfaces. That is the job of local SEO, not a keyword spreadsheet with no Maps work attached.`,
      },
      {
        type: 'h2',
        text: 'Proximity, prominence, and relevance',
      },
      {
        type: 'p',
        html: `Google has described local ranking as three groups of signals for a long time: proximity, prominence, and relevance. The labels are simple. The way they play out on the South Coast is not. If you ignore any one of them, you will misread why a competitor sits above you on a search you think you “should” win.`,
      },
      {
        type: 'h3',
        text: 'Proximity is geography',
      },
      {
        type: 'p',
        html: `Proximity is the distance between the searcher (or the place named in the query) and your business pin. If someone standing on State Street searches “coffee near me,” Google prefers pins close to that phone. If they search “coffee Santa Barbara,” the system still weights downtown and adjacent neighborhoods more heavily than a pin in Old Town Goleta. You cannot keyword-stuff your way out of a two-city gap. You can choose realistic geography, set service areas honestly, and build relevance for the cities you can actually serve well.`,
      },
      {
        type: 'p',
        html: `This is why a Goleta plumber can own “plumber Goleta” and still lose “plumber Santa Barbara” to shops whose pins sit closer to the Mesa, downtown, or the Eastside. It is also why hiding your address to “rank everywhere” usually backfires. Google wants a real location for most brick-and-mortar and many service-area businesses. Hide it and you often lose the Pack for the city you actually occupy.`,
      },
      {
        type: 'h3',
        text: 'Prominence is earned over time',
      },
      {
        type: 'p',
        html: `Prominence is how well-known Google thinks you are. Reviews, links from real local sites, brand searches, mentions in news and directories, and a history of consistent category use all feed it. You cannot buy prominence as a 90-day package. You can earn it with a review process that actually runs, a site other local organizations would link to, and a profile that looks like a business people use. A frozen 4.9 average from 2019 with three reviews a year is weaker prominence than a 4.6 with a steady stream of specific, recent reviews.`,
      },
      {
        type: 'h3',
        text: 'Relevance is the work most listings skip',
      },
      {
        type: 'p',
        html: `Relevance is whether Google believes you do the thing the searcher asked for, in the place they asked. Primary category, additional categories, services, description, on-site service pages, and the language in reviews all contribute. If you are a roofing company that also does gutters, and your profile and site only talk about roofs, you will lose gutter queries to shops that named the service. If every page on your site is a thin “serving Santa Barbara, Goleta, Montecito, Carpinteria, Summerland…” clone, you have not built relevance. You have built doorway spam, and Google has been good at discounting that for years.`,
      },
      {
        type: 'blockquote',
        text: 'A Goleta pin will not reliably win the Map Pack for downtown Santa Barbara, no matter how many blog posts you publish about State Street. Choose the geography you can actually win, then build relevance there.',
      },
      {
        type: 'h2',
        text: 'Why Goleta and downtown are different maps',
      },
      {
        type: 'p',
        html: `Owners often treat “Santa Barbara” as one market. Search does not. Downtown, the Funk Zone, the Mesa, San Roque, and the Riviera share a city name and a lot of tourist traffic. Goleta has UCSB-adjacent demand, Old Town, the airport corridor, Hollister, and Cathedral Oaks. The customer mix, the competitors, and the pins are different. <a href="/goleta-digital-marketing">Digital marketing in Goleta</a> that copies a downtown restaurant playbook will waste effort. A downtown clinic that insists on ranking for every Goleta neighborhood page will get the same result.`,
      },
      {
        type: 'p',
        html: `If your office is in Old Town Goleta and you serve the whole South Coast, say that on the site and in the profile with honest service areas. Do not pretend the pin is on State Street. Compete hard for Goleta, Isla Vista-adjacent services where it is legitimate, and west-side queries. Compete selectively for citywide terms where your prominence and relevance are strong enough to overcome the distance. We will tell you which bucket a keyword belongs in. Pretending a Goleta pin will dominate downtown Maps is how monthly retainers get spent on screenshots that never become calls.`,
      },
      {
        type: 'p',
        html: `Montecito and Carpinteria add two more maps. Montecito searches often carry higher intent and different competitors, with a smaller set of businesses and a customer who may already know the names they trust. Carpinteria has its own main-street inventory and a mix of locals and 101 traffic. Each city page we write for this agency exists because the search behavior and the offer actually differ. Neighborhood names belong as context inside those pages, not as forty thin URLs with the city swapped.`,
      },
      {
        type: 'h2',
        text: 'Tourist queries and resident queries',
      },
      {
        type: 'p',
        html: `Santa Barbara’s search demand splits. Visitors search for hotels, dinner, wine tasting, beaches, and “things to do this weekend.” Residents search for dentists, HVAC, schools, clinics, contractors, and the mechanic who will not disappear after the deposit. The same Google Business Profile can serve both, but the content, photos, hours, and landing pages should not pretend they are the same customer.`,
      },
      {
        type: 'p',
        html: `A restaurant that lives on tourist queries needs current hours, a menu Google can parse, photos that match the room, and a booking or call path that works on a phone at 6 p.m. on a Saturday. A roofer who lives on resident queries needs service pages that name the actual jobs (repair, reroof, inspection), a service area that matches where the trucks go, and reviews that mention neighborhoods and job types. Mixing those two briefs into one generic “we love the community” homepage helps neither audience.`,
      },
      {
        type: 'p',
        html: `Seasonality is real and it is not a strategy by itself. Summer and holidays change restaurant and hospitality volume. Storm years change roofing and restoration demand. School calendars change Goleta and Isla Vista patterns. Local SEO does not create that demand. It decides whether you are visible when it arrives. If your profile is incomplete in October, you do not get a mulligan in July.`,
      },
      {
        type: 'h2',
        text: 'Reviews, photos, and velocity',
      },
      {
        type: 'p',
        html: `Review velocity and recency matter more than a frozen five-star average. Google and customers both read the dates. A shop with 40 thoughtful reviews in the last year will usually outrun a shop with 400 reviews that stopped in 2021. Specificity helps relevance: “replaced the condenser on our Mesa house in two days” is worth more than “great service!!!” Photos that look like your actual storefront, crew, and jobs help prominence and reduce the bounce when someone opens the profile. Stock photos of a generic beach do not.`,
      },
      {
        type: 'p',
        html: `The practical system is simple and most businesses do not run it. Ask at the moment the job is done, make the link easy, and never write, buy, or gate reviews. Respond to the public ones, including the bad ones, like an adult. If the rating is weak because the work is weak, marketing will not cover it. Fix the job, then ask. We cover the profile mechanics in our <a href="/services/google-business-profile">Google Business Profile</a> service, because a Local SEO engagement that ignores the listing is a blog retainer with extra invoices.`,
      },
      {
        type: 'ul',
        items: [
          'Primary category that matches the job you actually want to win, not the broadest category Google offers.',
          'Services listed in the profile and supported by real pages on the site.',
          'A review request process that runs every week, not once after a vendor “sets up GBP.”',
          'Photos from the last 90 days: exterior, interior or crew, and completed work.',
          'Hours, phone, and appointment URL that match the door and the site.',
          'Service areas that reflect where you actually go, especially if you hide the address as a SAB.',
        ],
      },
      {
        type: 'h2',
        text: 'What a useful Local SEO program contains',
      },
      {
        type: 'p',
        html: `Strip the jargon and the work is finite. You clean and complete the profile. You align categories and services with the jobs that pay. You fix the technical problems that keep Google from trusting the site (speed, indexation, duplicate pages, broken NAP). You write service and city pages only where the market is real. You build a review and photo cadence. You earn links from places that would mention you anyway: associations, sponsorships, local news, partners. You measure calls, messages, and booked jobs, not a rank-tracking screenshot from one zip code on a Tuesday.`,
      },
      {
        type: 'p',
        html: `Timelines are slow on purpose. Most businesses see meaningful Map Pack movement in three to six months if the baseline is honest and the competitors are not already dominant. Ads can fill the gap while SEO compounds. A website rebuild can remove the conversion leak that makes rankings feel “useless.” None of that is a substitute for the listing and the pages. It is the rest of the system sitting next to them.`,
      },
      {
        type: 'p',
        html: `We will not guarantee a Map Pack slot. We will not publish forty neighborhood pages that say the same thing. We will not invent reviews or client results to make a case study. Santa Barbara Marketing Co. was founded in 2024; we do not have a decade of awards to lean on, and we do not need them to explain how this market ranks. If you want the work scoped to your pin, your category, and your city, that is what the Growth Plan is for.`,
      },
      {
        type: 'takeaways',
        items: [
          'Map Pack and organic results are different inventories. Fund both, or admit which one you are ignoring.',
          'Proximity, prominence, and relevance explain most “why are they above us?” fights in the 805.',
          'A Goleta pin and a downtown pin are not interchangeable. Rank the geography you can actually win.',
          'Review velocity, current photos, and honest categories beat a frozen five-star average.',
          'Local SEO is a system with the profile, the pages, and the follow-up. Blog volume alone is not the system.',
        ],
      },
    ],
  },
  {
    slug: 'google-business-profile-optimization',
    title:
      'Google Business Profile Optimization: A Practical Checklist for 805 Businesses',
    metaTitle: 'Google Business Profile Checklist for 805 Businesses',
    metaDescription:
      'A practical Google Business Profile checklist for Santa Barbara County: categories, services, photos, reviews, hours, and the mistakes that waste a listing.',
    category: 'seo',
    excerpt:
      'The Map Pack is won or lost on the listing. This checklist covers categories, services, photos, reviews, hours, and the SAB versus storefront choice for 805 businesses.',
    readTime: '8 min',
    datePublished: '2026-04-01',
    dateModified: '2026-04-01',
    status: 'published',
    relatedServices: ['google-business-profile', 'local-seo', 'google-ads'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'local-seo-santa-barbara',
      'how-much-does-seo-cost-santa-barbara',
      'google-ads-for-local-business',
    ],
    body: [
      {
        type: 'p',
        html: `Your Google Business Profile is the page most customers see before your website. It is the name, category, stars, hours, photos, and call button in Maps and in the local pack. If that listing is incomplete, mismatched, or abandoned, <a href="/services/local-seo">local SEO</a> work on the website has a ceiling. If it is accurate, specific, and active, you give Google and the searcher the same story: who you are, what you do, where you do it, and how to reach you this afternoon.`,
      },
      {
        type: 'p',
        html: `This is a working checklist for Santa Barbara County businesses, not a feature tour of every Google dashboard toggle. Walk it in order. Fix what is wrong before you worry about weekly posts. A complete listing with honest categories will outperform a pretty listing that still has last year’s holiday hours and a primary category that describes a different trade.`,
      },
      {
        type: 'h2',
        text: 'Confirm ownership and the right listing',
      },
      {
        type: 'p',
        html: `Search your exact business name plus city and your phone number. You may find duplicates, old DBAs, a listing a former manager created, or a Maps pin dropped on the wrong parcel. Duplicate listings split reviews and confuse the Pack. Reclaim what is yours, request removal or merge for the ghosts, and do not create a second profile to “start fresh.” Google is slow to merge. It is slower if you keep publishing from two pins.`,
      },
      {
        type: 'p',
        html: `Ownership should live on a company Google account, not a personal Gmail that walks out with an employee. Add owners and managers with the least privilege they need. Document who has access. When we take on <a href="/services/google-business-profile">Google Business Profile</a> work, the first hour is often this: find the real listing, kill the duplicates, and put login in a place the business still controls next year.`,
      },
      {
        type: 'h2',
        text: 'Storefront versus service-area business',
      },
      {
        type: 'p',
        html: `Google wants to know whether customers visit you. If they do, show the address. If they never do, and you go to them, you may qualify as a service-area business (SAB) and hide the address. Mixing those models is how listings get suspended. A contractor working from a home in Goleta who never receives customers there should not display that house as a showroom. A clinic on Bath Street should not hide the address to rank in Carpinteria.`,
      },
      {
        type: 'p',
        html: `Service areas should match the trucks. Drawing a 50-mile blob “just in case” dilutes relevance and can look like spam. If you serve Santa Barbara, Goleta, Montecito, and Carpinteria, name those. If you will not drive to Santa Ynez this year, do not list it. Proximity still applies. Hiding the address does not teleport you into downtown.`,
      },
      {
        type: 'h2',
        text: 'Categories and services',
      },
      {
        type: 'h3',
        text: 'Pick the primary category for the job you want',
      },
      {
        type: 'p',
        html: `The primary category is the strongest relevance signal on the listing. Choose the one that matches the search you most need to win, even if a broader category feels safer. “Roofing contractor” beats “General contractor” if roofs are the business. Additional categories can cover real secondary lines. They should not be a wish list. Google has reduced how much extra categories help when they contradict the primary.`,
      },
      {
        type: 'h3',
        text: 'List services the way customers search',
      },
      {
        type: 'p',
        html: `Services on the profile should match services on the website. If the listing says “veneers” and the site never mentions them, you have a relevance gap. Write service names in the language people type: “water heater replacement,” not an internal SKU. Do not stuff the city into every service label. The city belongs in the profile location and on the pages, not as “Santa Barbara water heater replacement Santa Barbara.”`,
      },
      {
        type: 'h2',
        text: 'Name, phone, hours, and the website field',
      },
      {
        type: 'p',
        html: `The business name should be the name on the door and the license, not “Santa Barbara’s Best Plumber | 24/7 Emergency.” Keyword names get listings suspended. The phone should be the number you actually answer. If you use a call-tracking number, keep the citation NAP consistent and make sure the tracking number is set up as a tracking number in the profile, not as a second identity. Hours must match the door, including holidays. Nothing burns trust like a “Open now” that is locked.`,
      },
      {
        type: 'p',
        html: `The website field should go to a page that loads on a phone and repeats the same name, city, and offer. Sending Maps traffic to a homepage that auto-plays a video and hides the click-to-call is how you pay for visibility you cannot use. If you run ads, you can add UTM parameters so you can see profile traffic in Analytics. That is measurement, not a ranking trick.`,
      },
      {
        type: 'h2',
        text: 'Description, products, and posts',
      },
      {
        type: 'p',
        html: `The description is a short, plain account of what you do and who you serve. Lead with the work. Mention the cities you actually cover. Skip slogans. Products and services modules help when you have menu items, SKUs, or named packages Google can show. Posts expire and they are a weak ranking lever. Use them for real hours changes, events, or offers, not as a substitute for on-site pages. A year of “Happy Monday from the team!” posts will not outrank a competitor with better categories and reviews.`,
      },
      {
        type: 'h2',
        text: 'Photos and video that look like you',
      },
      {
        type: 'p',
        html: `Upload from the business, not from a stock CD of palm trees. Google and users both prefer recent, original photos: exterior with the sign, interior or vehicles, staff if they consent, and completed jobs. A restaurant in the Funk Zone should show the room they will sit in. A Goleta HVAC company should show equipment and crews, not a stock sunset. Cover, logo, and interior photos all have slots. Fill them. Remove photos that show an old location or a different DBA.`,
      },
      {
        type: 'p',
        html: `Ask customers to add photos when they review. Those owner-plus-customer images are part of how the listing looks in the Pack. You do not need a drone. You need a phone and a habit. Monthly is better than a one-time “photoshoot” that never repeats.`,
      },
      {
        type: 'h2',
        text: 'Reviews without the gray area',
      },
      {
        type: 'p',
        html: `Ask. Make it easy. Do it when the job is fresh. Do not write reviews, buy them, filter only five-star customers through a pre-screen, or offer a discount for a star rating. Google’s policies are explicit, and fake velocity is a suspension risk. Respond to every review you can, including the angry ones, with facts and a path to fix the issue offline. Argument-in-public is not prominence.`,
      },
      {
        type: 'p',
        html: `Velocity beats a museum of old praise. A <a href="/goleta-digital-marketing">Goleta</a> clinic that collects two specific reviews a week will usually look more alive than a downtown competitor sitting on 300 reviews from a previous owner. If you want the rest of the local system around the listing, that lives in <a href="/santa-barbara-digital-marketing">Santa Barbara digital marketing</a> as a whole: pages, ads, and follow-up, not the listing in a vacuum.`,
      },
      {
        type: 'ul',
        items: [
          'One owned listing, no duplicates, company-controlled login.',
          'Correct storefront vs SAB choice and honest service areas.',
          'Primary category matched to the money search, services matched to the site.',
          'Legal name, answerable phone, accurate hours, website that converts on mobile.',
          'Recent original photos and a review ask that runs every week.',
          'Q&A seeded with real answers you would give on the phone, then monitored for spam.',
        ],
      },
      {
        type: 'h2',
        text: 'Q&A, messaging, and booking',
      },
      {
        type: 'p',
        html: `People (and competitors) can post questions on your listing. Answer them. Seed a few that you hear on the phone: parking, insurance, emergency fees, whether you serve a city. Turn on messaging only if someone will reply during stated hours. A dead chat is worse than no chat. Booking buttons should go to a real scheduler, not a buried contact form. If you cannot staff it, do not enable it.`,
      },
      {
        type: 'h2',
        text: 'Citations, NAP, and suspensions',
      },
      {
        type: 'p',
        html: `Your name, address, and phone should match the site, the license, and the major directories you already belong on. That consistency is a prominence and trust signal. Buying 400 random citations from a mill is not. If you moved from Milpas to the Mesa, update the listing, the site, and the directories that still rank for your old address. Leftover pins are how customers arrive at an empty lot.`,
      },
      {
        type: 'p',
        html: `Suspensions happen after keyword-stuffed names, fake addresses, bought reviews, or a sudden flood of edits that look automated. If the listing disappears, stop posting, gather documents (license, utility bill, storefront photo), and appeal with facts. Do not create a replacement profile while the original is in review. Two pins fighting each other is how you stay invisible for months.`,
      },
      {
        type: 'h2',
        text: 'What this checklist will not do',
      },
      {
        type: 'blockquote',
        text: 'A complete Google Business Profile is necessary. It is not a ranking guarantee, and it will not cover a website that fails on a phone or a review stream you never asked for.',
      },
      {
        type: 'p',
        html: `Optimization is maintenance. Hours change. Staff change. Google ships new modules. Recheck this list quarterly, and after any move, rebrand, or suspension. If you want help running it as part of a Local SEO engagement, we will say what we can see on the listing and what we cannot promise. We will not invent a Maps rank as a deliverable.`,
      },
      {
        type: 'takeaways',
        items: [
          'Find and own the real listing before you optimize a ghost or a duplicate.',
          'Primary category, services, and NAP have to match the door and the website.',
          'Storefront versus SAB is a policy choice, not a ranking hack.',
          'Photos and review velocity are the maintenance most 805 listings skip.',
          'Posts, Q&A, and chat only help if a human is actually behind them.',
        ],
      },
    ],
  },
  {
    slug: 'how-much-does-seo-cost-santa-barbara',
    title: 'What SEO Actually Costs in Santa Barbara (and What Drives the Price)',
    metaTitle: 'What SEO Costs in Santa Barbara (Planning Ranges)',
    metaDescription:
      'Planning ranges for SEO in Santa Barbara County, labeled as market patterns, not quotes. What drives price: competition, site, locations, and content.',
    category: 'seo',
    excerpt:
      'Honest planning ranges for local SEO in the 805, based on common market patterns, plus the drivers that actually change the number: competition, site, locations, and content.',
    readTime: '8 min',
    datePublished: '2026-05-01',
    dateModified: '2026-05-01',
    status: 'published',
    relatedServices: ['seo', 'local-seo', 'web-design'],
    relatedLocations: ['santa-barbara-digital-marketing'],
    relatedArticles: [
      'local-seo-santa-barbara',
      'web-design-cost-santa-barbara',
      'google-business-profile-optimization',
    ],
    body: [
      {
        type: 'p',
        html: `Owners ask “what does SEO cost in Santa Barbara?” because they have seen $300/month packages and $8,000/month retainers and both were called SEO. Those are different jobs. One is a citation blast and a monthly PDF. The other is competitive local and organic work with content, technical repair, and a Map Pack program. This article gives planning ranges based on common market patterns in 2026, then the drivers that move you up or down the range. It is not a Santa Barbara Marketing Co. fee schedule. It is not a quote. If you need a number for your category and your site, that comes after we look at both.`,
      },
      {
        type: 'p',
        html: `We also will not invent a “typical Santa Barbara price” with fake precision ($1,847/month) to look like we ran a survey. Ranges exist because plumbers, dentists, restaurants, and law firms do not buy the same work. Read the drivers first. Use the ranges only to sanity-check a proposal, including ours.`,
      },
      {
        type: 'h2',
        text: 'What you are actually buying',
      },
      {
        type: 'p',
        html: `<a href="/services/seo">SEO</a> for a local business is usually a mix of three things. Local SEO is the profile, the Map Pack, reviews, and city-level relevance. Organic SEO is the pages, the technical health, and the links that help you show up under the Pack and for research queries. Content is the writing and updating those pages need. A vendor who only sells “blog posts” is selling content. A vendor who only submits directories is selling citations. Neither is the full job, and the invoice should say which one you bought.`,
      },
      {
        type: 'p',
        html: `<a href="/services/local-seo">Local SEO in Santa Barbara</a> is the product most 805 service businesses need first. City-plus-service searches and “near me” queries pay the bills. Broader organic work matters when you have a real content reason to compete (procedures, educational queries, multi-location brands). If a proposal is 80% blog calendar and 20% Google Business Profile, ask why. In this market the listing and the service pages usually deserve the reverse.`,
      },
      {
        type: 'h2',
        text: 'Planning ranges (not quotes, not our published fees)',
      },
      {
        type: 'p',
        html: `The figures below are planning ranges based on common market patterns among agencies, freelancers, and in-house programs in California local markets as of 2026. They are not Santa Barbara Marketing Co. prices. They are not a promise that your project will land in the middle. Use them to tell a $199 package from a serious engagement. Get a written scope before you compare two vendors on the monthly number alone.`,
      },
      {
        type: 'h3',
        text: 'One-time projects',
      },
      {
        type: 'ul',
        items: [
          'Technical and on-page audit with a prioritized fix list: often $1,500–$5,000 depending on site size and how deep the crawl goes. Planning range, not a quote.',
          'Google Business Profile cleanup plus citation consistency for one location: often $750–$2,500 as a project. More if duplicates and legal-name issues are messy.',
          'A small set of real service or city pages (written, not spun): often $2,000–$8,000 depending on research, design, and how many pages are actually different.',
          'A full site rebuild sold as “SEO” is really a website project. See our article on website costs. Do not compare it to a monthly SEO retainer.',
        ],
      },
      {
        type: 'h3',
        text: 'Monthly retainers',
      },
      {
        type: 'ul',
        items: [
          'Light local maintenance (posts, a few citations, a report): commonly $500–$1,500/month. In competitive 805 categories this is often too thin to change the Pack. Planning range, not a quote.',
          'Standard one-location local SEO (profile, on-page, reviews process, modest content, reporting): commonly $1,500–$3,500/month in many California local markets.',
          'Competitive categories (legal, dental, med spa, some home services) or two-plus locations: commonly $3,500–$7,000+/month. Multi-location and statewide work sits above that.',
          'Enterprise or national organic programs are a different product. If you are a single-location 805 shop, you should not be priced like one.',
        ],
      },
      {
        type: 'p',
        html: `Cheap retainers are not always a scam. They are usually a smaller scope. The failure mode is buying the cheap scope and expecting the competitive outcome. Expensive retainers are not always serious. They are sometimes a recycled national playbook with your city name dropped in. Ask what happens in month one, who does the work, and how they will measure calls, not rankings in isolation.`,
      },
      {
        type: 'h2',
        text: 'The four drivers that actually change the number',
      },
      {
        type: 'h3',
        text: 'Competition in your category',
      },
      {
        type: 'p',
        html: `“Plumber Santa Barbara” and “boutique hotel Santa Barbara” do not cost the same to compete for. Look at the Pack: how many strong profiles, how many review counts in the hundreds, how many sites with real pages. Look at ads: if the same query is expensive in Google Ads, organic demand is usually valuable and contested. A quiet niche with three weak listings is a different job from downtown restaurants or personal injury. We will not pretend every 805 category is “highly competitive” to inflate a proposal.`,
      },
      {
        type: 'h3',
        text: 'The site you already have',
      },
      {
        type: 'p',
        html: `A fast, crawlable site with clear service pages is cheaper to improve than a five-year-old page builder with duplicate URLs, mixed HTTP, and a blog of spun location pages. Sometimes the honest SEO recommendation is to fix or replace the site first. That is a website cost, and it should be named that way. Ranking work on a site that fails Core Web Vitals on a phone is how you buy traffic that never calls. <a href="/services/web-design">Web design</a> and SEO are often sequential, not a bundled mystery.`,
      },
      {
        type: 'h3',
        text: 'Number of locations and service areas',
      },
      {
        type: 'p',
        html: `One pin in <a href="/santa-barbara-digital-marketing">Santa Barbara</a> is one profile, one NAP, one set of pages. Two locations (say downtown and Goleta) is two profiles, two review streams, and a site architecture that does not cannibalize itself. Service-area businesses add the SAB rules and the temptation to draw a map that covers half the state. Each extra location is closer to a second engagement than to a line item. Statewide or “we serve all of California” SEO is not local SEO with a bigger radius.`,
      },
      {
        type: 'h3',
        text: 'Content and who writes it',
      },
      {
        type: 'p',
        html: `If you have photos, service lists, and someone who can answer questions on a call, content is faster and cheaper. If every page needs interviews, medical or legal review, and original photography, the writing budget grows. AI-drafted pages that you never edit are not a discount. They are a risk: thin, duplicative, and easy for Google to ignore. Budget for a human who knows the trade to finish the page.`,
      },
      {
        type: 'h2',
        text: 'What a useful monthly engagement includes',
      },
      {
        type: 'p',
        html: `In a serious local program you should see work on the listing, the pages, the technical backlog, the review process, and reporting that names calls and form fills. You should know whether the month was spent on a site migration, a category change, or new service pages. You should not need a decoder for the PDF. If the report is 14 tabs of keyword colors and no mention of the phone, you bought a rank tracker, not marketing.`,
      },
      {
        type: 'p',
        html: `In-house SEO is a real option if you have someone who can own the listing, the pages, and the reporting without it falling behind every busy season. The cost then is salary and tools, which often exceeds a small retainer once you count the hours. Agencies and freelancers trade cash for that time. The failure mode on both sides is the same: activity without a hypothesis. “We posted to GBP” is not a strategy if the primary category is still wrong. “We published four blogs” is not a strategy if none of them are the service page that matches the query. Price the program that will change those things.`,
      },
      {
        type: 'blockquote',
        text: 'Compare scopes, not monthly numbers. A $900 plan that only files citations and a $3,000 plan that rebuilds service pages and the profile are not competing products.',
      },
      {
        type: 'h2',
        text: 'SEO versus ads while you wait',
      },
      {
        type: 'p',
        html: `SEO compounds slowly. Three to six months is a normal horizon for Map Pack movement if the baseline is fair. Google Ads can produce calls while that happens, with a media budget that is separate from the SEO fee. Mixing “SEO/SEM” into one muddy number makes it hard to see whether you paid for clicks or for pages. Keep the invoices readable. If a vendor guarantees rankings in 30 days, you are not looking at SEO. You are looking at a sales script.`,
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. prices by scope after we see the market and the site. We do not publish a fake average to win the RFP. The Growth Plan is how we show you the gaps first. Then you can decide whether SEO, the site, ads, or follow-up is the first dollar. That order is worth more than shaving $200 off a retainer that was aimed at the wrong surface.`,
      },
      {
        type: 'takeaways',
        items: [
          'Planning ranges are market patterns, not SBMC fees and not a quote. Treat them as a sanity check.',
          'You are buying local SEO, organic SEO, content, or some mix. The invoice should say which.',
          'Competition, current site quality, locations, and content effort are the real price drivers.',
          'A cheap retainer is usually a small scope. Do not buy it expecting a competitive Pack outcome.',
          'Measure calls and booked work. Rank-tracking theater is not a cost justification.',
        ],
      },
    ],
  },
  {
    slug: 'web-design-cost-santa-barbara',
    title: 'What a Business Website Costs in Santa Barbara in 2026',
    metaTitle: 'What a Business Website Costs in Santa Barbara in 2026',
    metaDescription:
      'What a Santa Barbara business website costs in 2026. Planning ranges from market patterns, not quotes, plus the drivers that change the price.',
    category: 'websites',
    excerpt:
      'What local business websites actually cost in 2026, with planning ranges (not quotes) and the drivers: scope, features, content, photography, and who maintains it.',
    readTime: '8 min',
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
    status: 'published',
    relatedServices: ['web-design', 'conversion-optimization', 'seo'],
    relatedLocations: ['santa-barbara-digital-marketing'],
    relatedArticles: [
      'how-much-does-seo-cost-santa-barbara',
      'local-seo-santa-barbara',
      'google-ads-for-local-business',
    ],
    body: [
      {
        type: 'p',
        html: `A business website in Santa Barbara in 2026 can mean a Squarespace template you launched on a Sunday or a custom marketing site with booking, bilingual content, and a CRM. Calling both “a website” is how people get angry at invoices. This article lays out planning ranges based on common market patterns, then the drivers that move the number. The ranges are not Santa Barbara Marketing Co. published fees. They are not a quote. They exist so you can tell a $1,200 template job from a $25,000 build before you compare two proposals on the total alone.`,
      },
      {
        type: 'p',
        html: `Most 805 businesses do not need an app. They need a site that loads on a phone, states the offer, shows the work, and makes it easy to call or book. That is <a href="/services/web-design">web design and development</a> as we practice it. Fancy illustration and a 40-plugin theme are optional. The phone number in a tappable header is not.`,
      },
      {
        type: 'h2',
        text: 'Planning ranges for 2026 (market patterns, not our quote)',
      },
      {
        type: 'p',
        html: `These bands reflect what local businesses in California commonly pay in 2026 for marketing sites, based on typical freelancer, small-agency, and platform pricing patterns. Your project can sit outside them. Treat them as planning ranges, not as SBMC rates and not as a promise of a midpoint.`,
      },
      {
        type: 'ul',
        items: [
          'DIY on Squarespace, Wix, or WordPress.com: often $200–$3,000 in year one including the theme, the platform fee, and a domain. Your time is the real cost. Planning range, not a quote.',
          'Freelancer or small studio on a template, lightly customized, 5–8 pages, your copy and photos: often $2,500–$8,000.',
          'Custom marketing site for a local business (original design, 8–20 pages, mobile-first, basic CMS, forms, analytics): often $8,000–$20,000. This is the usual professional band for a serious 805 site.',
          'Larger custom work: booking or patient workflows, ecommerce, multi-location, membership, heavy integration: often $20,000–$50,000+. Specialty healthcare, legal portals, and custom apps sit above that.',
          'Ongoing hosting, updates, and small edits: often $50–$400/month depending on stack and SLA, or included in a retainer. Separate from any ads or SEO fee.',
        ],
      },
      {
        type: 'p',
        html: `Photography, copywriting, and stock licensing are often extra in the lower bands and included or partially included in the higher ones. Ask. A $6,000 site that assumes you will write 12 pages this month is not $6,000 if you then hire a writer. A $16,000 site that includes interviews, draft copy, and a photo plan may be cheaper in total even though the line item is higher.`,
      },
      {
        type: 'h2',
        text: 'What actually drives the price',
      },
      {
        type: 'h3',
        text: 'How many unique pages, not how many URLs',
      },
      {
        type: 'p',
        html: `Ten thin location clones are not ten pages of value. They are a spam risk. Five real service pages, a clear home, about, contact, and one city page that reflects how you actually work is a coherent site. If you want pages for Santa Barbara, Goleta, Montecito, and Carpinteria, each one needs a reason: different offer, different proof, different search intent. Doorway pages should not be in the budget. Unique pages should.`,
      },
      {
        type: 'h3',
        text: 'Features and integrations',
      },
      {
        type: 'p',
        html: `A contact form into email is cheap. A form into a CRM, with routing, SMS, and booking, is a systems project. Ecommerce, member logins, insurance forms, and inventory are their own products. If a proposal hides those as “just a website,” the change orders will show up later. Name the integrations: Google Analytics, Search Console, call tracking, scheduling, GoHighLevel or another CRM. Each one is time.`,
      },
      {
        type: 'h3',
        text: 'Content, photos, and who supplies them',
      },
      {
        type: 'p',
        html: `If you have a service list, prices you are willing to show, and photos from the last year, production is faster. If we are inventing the offer on the page, that is strategy work. Original photos of your crew, office, and jobs beat generic coastal stock. Budget a half-day shoot if the current camera roll is all receipts. Accessibility (contrast, headings, alt text, keyboard paths) belongs in the build, not as a later lawsuit surprise.`,
      },
      {
        type: 'h3',
        text: 'The stack and who can maintain it',
      },
      {
        type: 'p',
        html: `Page builders are quick to launch and easy to bloat. A modern custom stack is faster in the browser and harder for a random intern to break, which is a feature. WordPress can be either, depending on the plugin pile. Hosting on a $4 shared plan that dies when Googlebot visits is not savings. Ask who updates Core, who owns the repo, and what happens when a form stops posting. <a href="/santa-barbara-web-design">Santa Barbara web design</a> that you cannot edit or that only one freelancer understands is a liability, not an asset.`,
      },
      {
        type: 'h2',
        text: 'Conversion is part of the cost',
      },
      {
        type: 'p',
        html: `A beautiful site that hides the phone number is an expensive brochure. Click-to-call, a short form, clear services, and proof you are allowed to show (real photos, real policies, no invented testimonials) are the conversion layer. <a href="/services/conversion-optimization">Conversion optimization</a> after launch is cheaper when the first build already has those bones. It is more expensive when the first build was a template with a slider and no offer.`,
      },
      {
        type: 'p',
        html: `Speed is conversion. Most of your visitors are on a phone, often on cellular, often parked or standing in a doorway. Core Web Vitals are not a hobby. If a design looks good in a desktop mockup and fails on a 390-pixel screen, it is not done. That standard is why some quotes look higher than a theme shop. You are paying for the phone experience, not a PDF of the homepage.`,
      },
      {
        type: 'blockquote',
        text: 'Compare what launches, what you own, and who maintains it. A $4,000 site you cannot change and a $14,000 site with a CMS and analytics are not the same purchase.',
      },
      {
        type: 'h2',
        text: 'Timeline and what slows it down',
      },
      {
        type: 'p',
        html: `Four to eight weeks is typical for a marketing site with a clear sitemap, if content arrives on time. Custom features, large photo libraries, and legal review add time. The usual delay is not code. It is waiting on copy, logins, and approvals. A dated outline (when drafts are due, when you review, when it launches) is part of a professional quote. “Soon” is not.`,
      },
      {
        type: 'p',
        html: `Rebuilds of sites that already rank need extra care: redirects, Search Console, and keeping the Google Business Profile website field pointed at a URL that still works during launch. That is SEO-adjacent work and should appear in the plan. It is one reason a “simple redesign” is not always simple.`,
      },
      {
        type: 'h2',
        text: 'What most 805 businesses actually need',
      },
      {
        type: 'p',
        html: `A contractor in Goleta, a clinic on Bath Street, and a restaurant off State Street share a short list. The site has to name the services people search, show the geography you actually cover, load on a phone, and put a tap-to-call button where a thumb can hit it. Hours, parking notes, insurance or license numbers when they matter, and photos of the real place do more than a parallax hero. Tourist-facing businesses need current menus or booking paths. Resident-facing trades need service pages that match the trucks. You do not need a blog unless you have something true to publish.`,
      },
      {
        type: 'p',
        html: `Bilingual content is a real requirement for some 805 shops and a wasted line item for others. If a meaningful share of callers speak Spanish, the pages and the form should too, with a human review of the translation. Auto-translate widgets are how you publish errors you will then have to explain on the phone. Accessibility is not optional in 2026: contrast, headings, labels, and keyboard paths belong in the build. If a proposal never mentions them, you will pay later, in a redesign or in a complaint.`,
      },
      {
        type: 'p',
        html: `After launch, someone has to own hosting, form spam, SSL, CMS updates, and small copy changes. If that someone is you, budget the hours. If it is a retainer, get the response time in writing. A site that quietly breaks a form on a Friday in July is more expensive than a slightly higher monthly. This is also where <a href="/santa-barbara-digital-marketing">Santa Barbara digital marketing</a> as a system shows up: the website is the conversion surface for SEO and ads. Pricing the site in isolation from how leads get followed up is how good-looking launches still miss calls.`,
      },
      {
        type: 'h2',
        text: 'How to read a website proposal',
      },
      {
        type: 'p',
        html: `Look for page count with names, not “up to 15 pages.” Look for what is excluded (copy, photos, ecommerce). Look for hosting and update terms. Look for accessibility and performance as requirements, not buzzwords. Look for who writes in English. If the portfolio is all the same theme in different colors, you are buying a template with a local invoice. If they cannot show a site that works on a phone, do not hire them to build yours.`,
      },
      {
        type: 'p',
        html: `We price websites by scope after we know the pages, the integrations, and the content you already have. We will not invent a “Santa Barbara average website cost” as if every restaurant and every clinic buys the same thing. We will not pad a quote with fake awards. Santa Barbara Marketing Co. was founded in 2024; the standard is the work on the screen, not a wall of plaques. If you want a range for your project, that is a conversation with the sitemap in front of us, which is what the Growth Plan starts.`,
      },
      {
        type: 'takeaways',
        items: [
          '2026 planning ranges are market patterns, not SBMC fees. Use them to separate DIY, template, custom, and complex builds.',
          'Unique pages, integrations, content, photos, and maintainability drive the number more than “number of pages” in a sales deck.',
          'Mobile speed and a visible call path are part of the build cost, not a later nice-to-have.',
          'Copy and photography often sit outside the low-end quote. Add them before you compare totals.',
          'A dated timeline and a list of exclusions tell you more than a single lump-sum number.',
        ],
      },
    ],
  },
  {
    slug: 'google-ads-for-local-business',
    title: 'Google Ads for Local Businesses: Where the Budget Actually Goes',
    metaTitle: 'Google Ads for Local Businesses: Where Budget Goes',
    metaDescription:
      'Where a local Google Ads budget actually goes: media versus management, wasted queries, landing pages, tracking, and geo. Planning context for 805 businesses.',
    category: 'ads',
    excerpt:
      'A clear split of media spend, wasted clicks, landing pages, and tracking for local Google Ads. Why $400/month rarely learns, and what to inspect before you scale.',
    readTime: '8 min',
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    status: 'published',
    relatedServices: ['google-ads', 'web-design', 'conversion-optimization'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'web-design-cost-santa-barbara',
      'google-business-profile-optimization',
      'how-much-does-seo-cost-santa-barbara',
    ],
    body: [
      {
        type: 'p',
        html: `Google Ads can send a Santa Barbara business the phone calls SEO will not produce this month. It can also burn a month of margin on the wrong queries, the wrong city, and a landing page that takes eight seconds to load. The difference is rarely “the algorithm.” It is where the money went. This article splits a local ads budget into the pieces owners actually pay for: media to Google, wasted spend, the page that receives the click, tracking, and management. It is not a promise that ads will be cheaper than SEO. It is a map of the invoice.`,
      },
      {
        type: 'p',
        html: `<a href="/services/google-ads">Google Ads</a> for a local service business is a high-intent channel when the search means “I need this job done.” It is a vanity channel when the account is built on broad match, competitor names you cannot win, and brand terms that look like a 400% ROAS while the non-brand jobs go to someone else. We rebuild around the first kind of search. We report the second kind so you can see it.`,
      },
      {
        type: 'h2',
        text: 'Media spend is not the management fee',
      },
      {
        type: 'p',
        html: `Two numbers should always be visible. Media spend is what Google charges for clicks or impressions. The management fee is what someone charges to build, watch, and improve the account. Media should go to Google. If a vendor pools spend, marks it up without disclosure, or will not show you the Google invoice, stop. In the broader market, management is often a monthly flat fee or a percentage of spend. Percentages make more sense as spend grows. Flat fees make more sense at small spend so the vendor is not rewarded for waste. We are not publishing our fee here. You should still demand both numbers on every report.`,
      },
      {
        type: 'p',
        html: `A planning observation, not a quote: many 805 service businesses cannot learn anything useful at $400/month in media on competitive terms. A few thousand dollars a month in media is a more common band when CPCs are high and you need enough clicks to see which queries convert. Cheap categories exist. “Emergency plumber” and “personal injury” are not among them. Your close rate and job value decide whether a $25 click is sane. The budget should be set from that math, not from a round number that felt comfortable in a meeting.`,
      },
      {
        type: 'h2',
        text: 'Where the clicks actually go',
      },
      {
        type: 'h3',
        text: 'Queries that mean a job, and queries that do not',
      },
      {
        type: 'p',
        html: `Search terms reports tell the truth. “Emergency plumber near me” and “plumber salary Santa Barbara” can sit in the same account if match types and negatives are lazy. Informational queries, DIY queries, job-seeker queries, and out-of-area queries will take money until you exclude them. That exclusion work is part of where the budget “goes.” It is not glamorous. It is the difference between a lead and a bounce.`,
      },
      {
        type: 'h3',
        text: 'Brand versus non-brand',
      },
      {
        type: 'p',
        html: `Brand campaigns protect your name when competitors bid on it, and they catch people who already decided. They look efficient. They do not usually grow the pool of new customers. Non-brand is where you pay to be in the consideration set. If 80% of conversions are brand, you may be paying Google for traffic you would have earned from the Map Pack and the site. Keep brand. Do not use it as proof the account is healthy.`,
      },
      {
        type: 'h3',
        text: 'Geography',
      },
      {
        type: 'p',
        html: `Presence, interest, or “people in your targeted locations” settings change who you pay for. A downtown restaurant that targets “Santa Barbara” with interest-based reach will pay for tourists planning from Ohio. Sometimes that is the point. A Goleta HVAC company usually wants people physically in the service area. <a href="/goleta-digital-marketing">Goleta</a> and <a href="/santa-barbara-digital-marketing">Santa Barbara</a> are not interchangeable geos. Radius targeting around a pin can still include the 101 commuter who will never book you. Look at the user location report. Then tighten.`,
      },
      {
        type: 'h2',
        text: 'The landing page is part of the budget',
      },
      {
        type: 'p',
        html: `You pay per click. If the page is slow, confusing, or missing the phone number, you paid for a bounce. That waste does not show up as a Google line item named “bad website.” It shows up as cost per conversion you cannot live with. Sending local ads to a homepage with a slider is the usual failure. Send them to a page that restates the query, shows the offer, and asks for the call. If that page does not exist, the ads budget is subsidizing a website problem. Fix the page. Then scale the campaign.`,
      },
      {
        type: 'p',
        html: `This is why ads and <a href="/services/web-design">web design</a> show up in the same conversations. Quality Score and conversion rate both care about the landing experience. You do not need a 40-page site to run ads. You need a relevant, fast page. <a href="/services/conversion-optimization">Conversion optimization</a> on that page (headline, proof, form length, click-to-call) often returns more than another $1,000 in media on a broken URL.`,
      },
      {
        type: 'h2',
        text: 'Tracking is where honest accounts spend time',
      },
      {
        type: 'p',
        html: `If you cannot tell which campaign produced a call, you are guessing. Call tracking, form conversion actions, and (when you can share it) booked-job feedback are the measurement layer. They cost money or time. They are still cheaper than scaling a campaign that looks good on clicks. Missed call recordings, duplicate conversion tags, and “thank you page” goals that fire on every visit are how accounts look profitable until the owner notices the calendar is empty.`,
      },
      {
        type: 'p',
        html: `Google’s automated bidding needs conversion volume to learn. If you get four leads a month, Smart Bidding is guessing. That is another reason tiny budgets stall. Feed the system clean conversions or use simpler bidding until volume exists. Do not congratulate a bid strategy that optimized for a tag you installed twice.`,
      },
      {
        type: 'blockquote',
        text: 'If we cannot measure it, we do not scale it. A cheaper CPC on the wrong query is not a win.',
      },
      {
        type: 'ul',
        items: [
          'Media to Google versus management fee, shown separately.',
          'Search terms and negatives, reviewed on a schedule, not once at launch.',
          'Geo settings that match how you actually roll trucks or seat guests.',
          'Landing pages that load and ask for the call, aligned to the query.',
          'Call and form tracking that matches what the owner hears on the phone.',
        ],
      },
      {
        type: 'h2',
        text: 'The first 30 days of a rebuilt account',
      },
      {
        type: 'p',
        html: `A rebuild is usually conversion tracking first, then structure, then spend. Install call tracking that the owner can hear. Point campaigns at the pages that match the queries. Split brand from non-brand. Set geo to how the business actually serves Santa Barbara County. Add negatives for jobs you refuse. Then let it run long enough to collect search terms. Changing five settings a day because the dashboard is red is how you never get a clean read.`,
      },
      {
        type: 'p',
        html: `Impression share will tell you whether the budget can even be in the auction for the terms you chose. If you are eligible 20% of the time on your money queries, more media may matter more than another ad variant. Quality Score is a hint about expected click-through, landing page, and relevance. It is not a grade on your business. Fix the page and the query match before you obsess over the number. Ad copy should name the city and the job: “Emergency HVAC in Goleta,” not a slogan. Extensions (call, location, sitelinks to real service pages) are free inventory. Use them.`,
      },
      {
        type: 'p',
        html: `After two to four weeks you should be able to say which queries spent, which produced conversations, and which geos were a mistake. That is the point of the first month. It is not a victory lap. If the landing page is still the homepage, stop and fix the site before you raise budget. If nobody answers the phone, ads are buying voicemail. Follow-up is part of where the budget “goes,” even when Google never sees that line.`,
      },
      {
        type: 'h2',
        text: 'Local Services Ads and other Google products',
      },
      {
        type: 'p',
        html: `Google also sells Local Services Ads (the “Google Guaranteed” style units in some trades) and Performance Max. Those are not the same as a Search campaign. LSAs bill per lead, require verification, and live next to the Pack. Performance Max will spend across YouTube, Display, Maps, and Search with less control. They can work. They can also hide waste. Add them only when Search basics are clean, or when the trade and the lead type clearly fit. Do not let a vendor rename a Display dump as “full funnel” and call it local advertising.`,
      },
      {
        type: 'h2',
        text: 'What we will not do with an ads budget',
      },
      {
        type: 'p',
        html: `We will not guarantee a cost per lead. We will not hide markups. We will not pretend a week of data is a strategy. We will not invent ROAS from a client we do not have. Santa Barbara Marketing Co. was founded in 2024; there is no decade of award badges on this page, and there should not be. The test of an account is whether qualified calls went up and whether you can see why. If you already have an account, the Growth Plan can include a look at where the spend went. If you do not, we will still start from the job value and the geo, not from a national template.`,
      },
      {
        type: 'takeaways',
        items: [
          'Split media and management on every report. Media belongs to Google.',
          'Most waste is queries, geo, and landing pages, not a mysterious auction tax.',
          'Brand efficiency is not growth. Watch non-brand and the search terms report.',
          'Tracking and a fast, relevant page are part of the budget even when they are not Google line items.',
          'Tiny media budgets often cannot learn. Set spend from job value and CPC reality, not from comfort.',
        ],
      },
    ],
  },
  {
    slug: 'ai-search-visibility-local-business',
    title: 'Showing Up in AI Search: What Local Businesses Should Actually Do',
    metaTitle: 'AI Search Visibility for Local Businesses in the 805',
    metaDescription:
      'What local businesses should actually do about AI search: treat it as SEO, publish substance, and ignore spam. Honest guidance for Santa Barbara County.',
    category: 'ai',
    excerpt:
      'AI Overviews, ChatGPT, and Perplexity do not need a separate spam playbook. Local businesses show up by being the clear, cited source. Substance over generated doorway pages.',
    readTime: '8 min',
    datePublished: '2026-08-01',
    dateModified: '2026-08-01',
    status: 'published',
    relatedServices: ['seo', 'local-seo', 'strategy'],
    relatedLocations: ['santa-barbara-digital-marketing'],
    relatedArticles: [
      'local-seo-santa-barbara',
      'google-business-profile-optimization',
      'how-much-does-seo-cost-santa-barbara',
    ],
    body: [
      {
        type: 'p',
        html: `Owners are being told they need “AI SEO” as if it were a new channel with a new vendor. For a local business in Santa Barbara County, most of that pitch is a relabel. Google’s AI Overviews, ChatGPT, Perplexity, and similar tools still need sources. They prefer clear entities, current facts, and pages that answer a question without a thousand words of filler. That is <a href="/services/seo">SEO</a>. It is not a separate product you buy as a bolt-on paragraph of generated FAQs.`,
      },
      {
        type: 'p',
        html: `We are not going to claim we rank clients in ChatGPT, because we will not invent results. We are not going to sell an “AI visibility package” that is actually a spin of your homepage. This article is what we think 805 businesses should actually do: make the business unmistakable, publish pages worth citing, keep the Google Business Profile honest, and ignore the programmatic sites from out of town that are already flooding local SERPs with AI sludge.`,
      },
      {
        type: 'h2',
        text: 'What “AI search” means for a local shop',
      },
      {
        type: 'p',
        html: `Three things get mixed together. First, Google showing an AI Overview above the usual results for some queries. Second, people asking ChatGPT or Gemini who to hire in Santa Barbara. Third, marketers generating location pages at scale and calling it innovation. Only the first two are customer behavior. The third is a content tactic that Google has been trying to discount, and that answer engines have little reason to trust.`,
      },
      {
        type: 'p',
        html: `For many local queries, especially “near me” and Map Pack queries, Google still shows the map. An Overview does not replace the pack for “emergency plumber Goleta” the way it might summarize “how to winterize a pipe.” Your job is still to win the listing and the service page. When an Overview does appear, it often cites a handful of pages and local results. Being one of those citations looks a lot like being a page that already deserved to rank: specific, current, and written by someone who has done the work.`,
      },
      {
        type: 'h2',
        text: 'Substance beats generated local pages',
      },
      {
        type: 'p',
        html: `The 805 already has a pile of out-of-town sites that “cover” Santa Barbara with the same outline: a city paragraph, a stock photo, and a list of neighborhoods they have never parked in. Those pages are easy to generate now. They are also easy to ignore. Answer engines that want a restaurant recommendation or a contractor have more reason to cite Google Maps, a known local publication, or a business site that names real services, hours, and locations than to cite a doorway mill.`,
      },
      {
        type: 'p',
        html: `If you are a real business here, you should not compete by becoming a doorway mill. You should compete by being the primary source for your own name, services, and cities. That is the opposite of spam. It is also the only durable way to show up when a model is asked “who does heat pump installs in Goleta?” The model will look for an entity that matches: a profile, a site, reviews, and consistent NAP. <a href="/services/local-seo">Local SEO</a> already is that work.`,
      },
      {
        type: 'blockquote',
        text: 'The only operators loudly selling “AI search dominance” for Santa Barbara right now are mostly programmatic sites from somewhere else. A real 805 business does not need their playbook.',
      },
      {
        type: 'h2',
        text: 'What to actually do',
      },
      {
        type: 'h3',
        text: 'Make the entity obvious',
      },
      {
        type: 'p',
        html: `Same name, address, and phone on the site, the Google Business Profile, and the citations you already deserve (license boards, associations, chambers if you are a member). Schema that matches the visible page, not a dump of every LocalBusiness subtype. A real about page with the legal name and the cities you serve. This is boring. It is how machines and people confirm you exist. If the profile says Goleta and the site footer says only Santa Barbara, you have given two systems two stories.`,
      },
      {
        type: 'h3',
        text: 'Write pages that answer the question',
      },
      {
        type: 'p',
        html: `Service pages should say what you do, where you do it, how the job works, and what happens next. They should not open with a weather report. If people ask whether you offer weekend service, financing, or a specific procedure, put the answer in writing. FAQs belong when they are real questions, not when they are a keyword list. Unique pages for <a href="/santa-barbara-digital-marketing">Santa Barbara</a> versus Goleta belong when the market differs, which is the same rule we already use for local SEO. Thin city clones will not become “AI optimized” because you added a sentence about language models.`,
      },
      {
        type: 'h3',
        text: 'Keep the listing and the reviews alive',
      },
      {
        type: 'p',
        html: `Maps data feeds a lot of local answers. Hours, categories, services, photos, and recent reviews are facts models can use. A dead listing is a dead source. The <a href="/services/google-business-profile">Google Business Profile</a> checklist in our library is more useful for AI visibility than a tool that “submits your brand to 40 AI directories.” Most of those directories do not get cited. Your profile does.`,
      },
      {
        type: 'h3',
        text: 'Earn mentions you would want anyway',
      },
      {
        type: 'p',
        html: `Local news, sponsorships, professional associations, and partner pages are the mentions that help prominence in classic SEO and give answer engines a second source. Buying a packet of AI-generated backlinks is the same bad idea it was in 2012, with a new label. If a publication would never mention you, a press release mill will not fix that.`,
      },
      {
        type: 'h2',
        text: 'What not to do',
      },
      {
        type: 'ul',
        items: [
          'Do not generate 40 neighborhood pages that repeat the same paragraph with a different street name.',
          'Do not stuff “ChatGPT” or “AI Overview” into title tags as if that were a ranking factor.',
          'Do not hire a vendor whose only local proof is a map of spun city URLs.',
          'Do not confuse AI automation of your follow-up (SMS, routing, after-hours) with AI search ranking. They are different jobs.',
          'Do not expect a case-study screenshot from us for “mentioned in Perplexity.” We will not invent one.',
        ],
      },
      {
        type: 'h2',
        text: 'How you will know if any of this is working',
      },
      {
        type: 'p',
        html: `You will not get a reliable “AI rank tracker” that means what a Map Pack position means. Tools that sell an “AI visibility score” are guessing from a handful of prompts they wrote themselves. What you can do is search the way your customers search, in Google and in a chat tool, and see whether your name, your services, and your city show up as a citation or a recommendation. Do that quarterly, write down the prompts, and compare. That is a notebook, not a dashboard product.`,
      },
      {
        type: 'p',
        html: `The leading indicators are still the old ones. Are the service pages indexed? Does the Google Business Profile match the site? Are reviews arriving? Are calls from organic and Maps holding or rising? If those are healthy, you are feeding the same facts the answer engines use. If those are weak, paying someone to “optimize for ChatGPT” is decorating a listing Google already distrusts. <a href="/santa-barbara-seo">Santa Barbara SEO</a> work that fixes the pages and the profile is the practical path. The AI layer is a byproduct when the source is clean.`,
      },
      {
        type: 'p',
        html: `When an Overview cites you, screenshot it and keep the date. When it cites a competitor, read the page they cited and see whether they simply answered the question more clearly. That is an editorial gap, which you can close, not a secret format code. When the Overview cites no local business and only a national blog, the query may not be commercial yet. Spend your time on the queries that already include a city and a job.`,
      },
      {
        type: 'h2',
        text: 'AI automation is a different conversation',
      },
      {
        type: 'p',
        html: `Speed-to-lead, after-hours routing, and CRM follow-up can use automation. That can be valuable. It does not make you show up in an Overview. Mixing “we will get you into ChatGPT” with “we will text your leads in two minutes” is how a scope gets muddy. If you want systems that follow up, that is operations and <a href="/services/strategy">digital marketing strategy</a>, plus the automation stack. If you want to be findable, that is the site, the listing, and the pages. You can do both. You should still name them separately on the invoice.`,
      },
      {
        type: 'h2',
        text: 'How we will talk about this as the products change',
      },
      {
        type: 'p',
        html: `Google will keep changing how Overviews look. Other chat tools will keep changing what they cite. The durable work stays the same: a business that is easy to identify, pages that tell the truth, a listing that is maintained, and reviews that sound like customers. Santa Barbara Marketing Co. was founded in 2024. We do not have a museum of AI awards. We will update our advice when the products change in a way that alters the work. We will not update it every time a national blog invents a new acronym.`,
      },
      {
        type: 'p',
        html: `If you want this applied to your listing and your pages, ask for the Growth Plan. You will get what we can see in Search and Maps, not a made-up “AI visibility score.” If the honest gap is the website or the profile, we will say that. If the honest gap is that a competitor has ten times the review velocity, we will say that too.`,
      },
      {
        type: 'takeaways',
        items: [
          'AI search for local businesses is mostly SEO and a current Google Business Profile, not a new spam channel.',
          'Be the primary source for your name, services, and cities. Do not compete with doorway mills on their terms.',
          'Overviews still cite specific, current pages. Write those pages for people who need the job done.',
          'Keep NAP, categories, hours, and reviews accurate. Maps data already feeds local answers.',
          'Treat follow-up automation and search visibility as separate scopes. Both can matter. They are not the same purchase.',
        ],
      },
    ],
  },
  {
    slug: 'santa-barbara-seo-guide',
    title: 'Santa Barbara SEO Guide for Local Businesses',
    metaTitle: 'Santa Barbara SEO Guide for Local Businesses',
    metaDescription:
      'A planned full-length SEO guide for Santa Barbara businesses covering Maps, organic pages, content, technical work, and the first fixes to make.',
    category: 'seo',
    excerpt:
      'A longer, step-by-step SEO guide for Santa Barbara businesses. Planned. The Local SEO pillar and cost articles are live in the meantime.',
    readTime: '',
    datePublished: '',
    dateModified: '',
    status: 'planned',
    relatedServices: [],
    relatedLocations: [],
    relatedArticles: [],
    body: [],
  },
  {
    slug: 'local-search-ranking-factors',
    title: 'Local Search Ranking Factors That Matter in the 805',
    metaTitle: 'Local Search Ranking Factors That Matter in the 805',
    metaDescription:
      'A planned deep look at local ranking factors for Santa Barbara County: proximity, prominence, relevance, and what is overhyped. Not published yet.',
    category: 'seo',
    excerpt:
      'A planned article on which local ranking factors actually move Map Pack and organic results on the South Coast.',
    readTime: '',
    datePublished: '',
    dateModified: '',
    status: 'planned',
    relatedServices: [],
    relatedLocations: [],
    relatedArticles: [],
    body: [],
  },
  {
    slug: 'how-to-get-more-google-reviews',
    title: 'How to Get More Google Reviews Without Breaking the Rules',
    metaTitle: 'How to Get More Google Reviews Without Breaking the Rules',
    metaDescription:
      'A planned practical guide to asking for Google reviews in the 805: timing, links, staff habits, and what Google does not allow. Not published yet.',
    category: 'seo',
    excerpt:
      'A planned playbook for review velocity that stays inside Google’s rules. No bought stars, no gated five-star filters.',
    readTime: '',
    datePublished: '',
    dateModified: '',
    status: 'planned',
    relatedServices: [],
    relatedLocations: [],
    relatedArticles: [],
    body: [],
  },
  {
    slug: 'why-your-website-isnt-getting-leads',
    title: 'Why Your Website Is Not Getting Leads',
    metaTitle: 'Why Your Website Is Not Getting Leads',
    metaDescription:
      'A planned look at why local websites get visits and no calls: page speed, unclear offers, hidden phone numbers, thin proof, and traffic quality.',
    category: 'websites',
    excerpt:
      'A planned diagnosis of websites that get visits and no calls. Traffic quality, mobile friction, and follow-up will be in scope.',
    readTime: '',
    datePublished: '',
    dateModified: '',
    status: 'planned',
    relatedServices: [],
    relatedLocations: [],
    relatedArticles: [],
    body: [],
  },
  {
    slug: 'goleta-local-seo-guide',
    title: 'Local SEO in Goleta for West-Side Businesses',
    metaTitle: 'Local SEO in Goleta for West-Side Businesses',
    metaDescription:
      'A planned local SEO guide for Goleta businesses covering Old Town, UCSB-adjacent demand, and why a Goleta pin rarely wins downtown Santa Barbara.',
    category: 'seo',
    excerpt:
      'A planned local SEO guide written for Goleta businesses, not a downtown Santa Barbara article with the city name swapped.',
    readTime: '',
    datePublished: '',
    dateModified: '',
    status: 'planned',
    relatedServices: [],
    relatedLocations: [],
    relatedArticles: [],
    body: [],
  },
  {
    slug: 'marketing-a-restaurant-in-santa-barbara',
    title: 'Marketing a Restaurant in Santa Barbara',
    metaTitle: 'Marketing a Restaurant in Santa Barbara',
    metaDescription:
      'A planned guide to restaurant marketing in Santa Barbara: Maps, menus, seasonality, ads, and tourist versus local demand. Not published yet.',
    category: 'strategy',
    excerpt:
      'A planned playbook for restaurants and hospitality on the South Coast, including Maps, menus, and seasonal demand.',
    readTime: '',
    datePublished: '',
    dateModified: '',
    status: 'planned',
    relatedServices: [],
    relatedLocations: [],
    relatedArticles: [],
    body: [],
  },
  {
    slug: 'home-services-marketing-805',
    title: 'Home Services Marketing in the 805',
    metaTitle: 'Home Services Marketing in the 805',
    metaDescription:
      'A planned marketing guide for 805 contractors and home services covering Map Pack, Google Ads, review velocity, and speed-to-lead follow-up.',
    category: 'strategy',
    excerpt:
      'A planned marketing guide for plumbers, HVAC, roofing, and similar trades in the 805. Maps first, then ads and follow-up.',
    readTime: '',
    datePublished: '',
    dateModified: '',
    status: 'planned',
    relatedServices: [],
    relatedLocations: [],
    relatedArticles: [],
    body: [],
  },
  {
    slug: 'speed-to-lead-follow-up-systems',
    title: 'Speed-to-Lead Follow-Up Systems for Local Businesses',
    metaTitle: 'Speed-to-Lead Follow-Up Systems for Local Businesses',
    metaDescription:
      'A planned article on answering 805 leads fast: call routing, SMS texts, after-hours coverage, CRM follow-up, and the metrics that actually matter.',
    category: 'ai',
    excerpt:
      'A planned look at the systems that call and text leads before a competitor does. Separate from ranking. Often the cheaper win.',
    readTime: '',
    datePublished: '',
    dateModified: '',
    status: 'planned',
    relatedServices: [],
    relatedLocations: [],
    relatedArticles: [],
    body: [],
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export const publishedResources = resources.filter(
  (resource) => resource.status === 'published',
);
