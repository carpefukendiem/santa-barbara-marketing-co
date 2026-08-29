import type { FaqItem } from './faqs';
import { photos } from './images';
import type { SiteImage } from './images';

export type LocationPageType = 'overview' | 'seo' | 'web-design' | 'google-ads';

export type Location = {
  slug: string;
  city: string;
  pageType: LocationPageType;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroLede: string;
  heroImage: SiteImage;
  intro: string;
  marketProfile: string;
  neighborhoods: Array<{ name: string; context: string }>;
  searchBehavior: string;
  dominantIndustries: string[];
  serviceRelevance: Array<{ service: string; why: string }>;
  localChallenges: Array<{ title: string; body: string }>;
  faqs: FaqItem[];
  nearbyLinks: Array<{ label: string; href: string }>;
  relatedResources: string[];
};

export const locations: Location[] = [
  {
    slug: 'santa-barbara-digital-marketing',
    city: 'Santa Barbara',
    pageType: 'overview',
    metaTitle: 'Digital Marketing in Santa Barbara, CA',
    metaDescription:
      'How Santa Barbara businesses get found by residents and by visitors. Local SEO, websites, and ads for State Street, the Funk Zone, and the Mesa.',
    h1: 'Digital Marketing in Santa Barbara',
    heroLede:
      'Santa Barbara is two search markets sharing one map. Residents look for people they can hire again. Visitors decide in a few minutes from a hotel room or a parking garage.',
    heroImage: photos.communitySantaBarbara,
    intro:
      'Santa Barbara looks simple from the freeway. Red tile, a walkable downtown, the water on one side and the mountains on the other. Search does not treat it as one marketplace. A restaurant on State Street, a tasting room in the Funk Zone, and a plumber on the Mesa are asking Google for different people, at different hours, with different amounts of time to decide.\n\nWe work with businesses that sell inside this city. The job is to get you found by residents who will hire you again, and by visitors who will hire you before they walk into the next doorway, then to make the page they open able to take that call. Santa Barbara Marketing Co. writes for this geography because a statewide template cannot tell those two jobs apart.',
    marketProfile:
      'Downtown and State Street still hold the densest mix of retail, restaurants, and storefronts that live on foot traffic. Someone walking the promenade is often choosing in the moment. The Funk Zone sits a few blocks off that spine. Tasting rooms, galleries, and evening visitors gather there with a different pace and a different set of searches. The waterfront and Stearns Wharf pull hotel guests, pier walkers, and families who looked up what to do after the beach. Those three corridors share tourists. They do not share hours, query language, or the reason a listing gets tapped.\n\nMilpas, the Eastside, and the Westside are where a lot of the city\'s everyday trade actually happens. Clinics, auto shops, family restaurants, and trades get searched from a home address, often with "near me" after the person has already decided they need the work today. The Mesa is residential and self-contained enough that many of its customers never intended to drive downtown. Upper State holds professional offices, medical practices, and service businesses that serve the Riviera and Hope Ranch without paying State Street rent. Hope Ranch and the Riviera are low-density and high-value. A contractor who works those streets may still pin the business in a cheaper part of town, which is a Maps problem we will name in the first conversation.\n\nFiesta, Summer Solstice, and the summer visitor peak change downtown demand in ways a quiet Tuesday in February does not. A patio restaurant and a roofing company live on opposite calendars. Google does not infer which one you are. Your hours, photos, pages, and offers have to say it.\n\nCompetition on downtown terms is heavy. Hotels, restaurants, directories, and every "things to do" article want the same Map Pack slots. Proximity also works against businesses on the edge of the city. If your office sits on the far Mesa or up toward San Roque, a search typed on State Street often prefers a pin closer to the person. That is how Local search is assembled. We plan around the geography you can actually win.',
    neighborhoods: [
      {
        name: 'Downtown / State Street',
        context:
          'Retail, restaurants, and same-day discovery along the city\'s main commercial spine.',
      },
      {
        name: 'Funk Zone',
        context:
          'Tasting rooms, galleries, and evening visitor traffic a few blocks off State.',
      },
      {
        name: 'Waterfront and Stearns Wharf',
        context:
          'Hotel guests and walk-up visitors deciding from a phone on the pier or Cabrillo.',
      },
      {
        name: 'Milpas',
        context:
          'Eastside commercial strip that serves residents first and visitors second.',
      },
      {
        name: 'The Mesa',
        context:
          'Cliffside neighborhood that shops locally and rarely needs downtown for everyday services.',
      },
      {
        name: 'Eastside',
        context:
          'Residential and small-business fabric east of downtown, searched from home more than from a hotel.',
      },
      {
        name: 'Westside',
        context:
          'Working streets west of downtown with strong "near me" intent for trades and clinics.',
      },
      {
        name: 'Upper State',
        context:
          'Professional offices and service businesses serving the Riviera without a downtown storefront.',
      },
      {
        name: 'The Riviera',
        context:
          'Hillside residential above the city, high-value home services and quiet professional trade.',
      },
      {
        name: 'Hope Ranch',
        context:
          'Estate residential west of the Mesa. Pins here are sparse and Maps treats them that way.',
      },
    ],
    searchBehavior:
      'Two intents sit on top of each other. Resident searches come from a home or a workplace. They often include a service plus "near me" or a neighborhood name. Repeat local services (dentist, HVAC, veterinarian, accountant) live in this bucket. The person already knows the city. They are choosing among options they might use again.\n\nVisitor searches are shorter and more urgent. Hotel, dinner, bike rental, "open now," something to do with kids after the beach. The decision window is minutes. The Map Pack does most of the work. A listing that looks modest in a desktop keyword tool can still produce the call if you are the business they see while standing on State Street.\n\nSeasonal events thicken both. Fiesta week fills downtown queries. Summer weekends fill waterfront and Funk Zone queries. January looks like a different city. Campaigns and pages that ignore that calendar waste the months that actually pay.',
    dominantIndustries: [
      'restaurants-hospitality',
      'professional-services',
      'home-services',
      'medical-wellness',
      'real-estate',
    ],
    serviceRelevance: [
      {
        service: 'local-seo',
        why: 'Winning the Map Pack for the neighborhood you can actually serve, instead of fighting downtown for a pin that sits on the Mesa.',
      },
      {
        service: 'seo',
        why: 'City and service pages written for how Santa Barbara residents and visitors actually search, without cloning the same paragraph across four towns.',
      },
      {
        service: 'google-ads',
        why: 'Paid search for the high-intent windows (visitor evenings, emergency trades, seasonal peaks) when organic cannot cover the demand.',
      },
      {
        service: 'web-design',
        why: 'A site that loads on cellular at the waterfront and makes the call button obvious before the visitor walks into the next doorway.',
      },
      {
        service: 'google-business-profile',
        why: 'Categories, photos, hours, and posts that match the corridor you actually sit on, which downtown listings often get wrong.',
      },
      {
        service: 'conversion-optimization',
        why: 'Forms, click-to-call, and booking paths that work for a two-minute visitor decision and for a resident comparing three plumbers.',
      },
    ],
    localChallenges: [
      {
        title: 'Downtown queries are crowded',
        body: 'State Street terms attract hotels, restaurants, directories, and publishers who will never take a local service call. Ranking in that mix takes a tighter offer, recent reviews, and pages that match the search, plus a willingness to drop vanity phrases that never convert.',
      },
      {
        title: 'A pin on the outskirts loses downtown Maps',
        body: 'Google Local weights distance from the searcher. A Mesa, Hope Ranch, or upper Riviera address is the wrong tool for winning "near State Street." We will tell you which geography is realistic before you spend a year chasing a pack you cannot sit in.',
      },
      {
        title: 'Residents and visitors need different pages',
        body: 'One homepage that tries to welcome tourists and sell annual HVAC contracts usually does neither well. The photos, the first sentence, and the call to action have to match the person who just arrived. Santa Barbara businesses often have both people. The site has to know which one it is talking to on which URL.',
      },
      {
        title: 'The calendar swings harder downtown',
        body: 'Fiesta, Summer Solstice, and the summer visitor peak fill the waterfront and leave February looking empty for anyone who lives on walk-by traffic. Home-service companies often see the reverse. Content, ads, hours, and staffing plans have to follow the season you are in.',
      },
    ],
    faqs: [
      {
        question: 'Do Santa Barbara businesses need separate marketing for tourists and locals?',
        answer:
          'Often yes, at the page and campaign level. A visitor searching for dinner on a Saturday is a different job from a homeowner searching for a roof inspection. You can share a brand and a phone number. You should not share the same first paragraph, photos, and ad group. We split the work where the intent actually splits.',
        category: 'getting-started',
      },
      {
        question: 'Why does my Mesa or Westside business lose downtown Map Pack listings?',
        answer:
          'Proximity. When someone searches from State Street, Google prefers businesses closer to that point, all else equal. Prominence and relevance can close some of the gap. They rarely erase a long drive. We will map which queries you can win from your pin and which ones you should stop paying to chase.',
        category: 'seo',
      },
      {
        question: 'Is downtown Santa Barbara too competitive for a small shop?',
        answer:
          'It is competitive for broad downtown phrases. It is more open for a specific service, a neighborhood modifier, or a visitor job that the hotel websites ignore. The useful question is which searches a shop of your size can win, and what a won click is worth. We will answer that from your category and your pin, not from a citywide slogan.',
        category: 'seo',
      },
      {
        question: 'How should we handle Fiesta and summer traffic in marketing?',
        answer:
          'Treat them as real seasons. Update hours, photos, and offers before the week hits. If you run ads, raise bids only on the queries that mean someone is here and ready, and pause the rest. If you are a resident-serving business that gets drowned out by visitor noise, we tighten targeting so you are not paying for parade-week browsers.',
        category: 'getting-started',
      },
      {
        question: 'Can a Santa Barbara business rank for the whole South Coast from one office?',
        answer:
          'You can earn organic rankings and service-area visibility across nearby cities if the work is real. The Map Pack is stricter. People standing in Goleta or Carpinteria usually see businesses whose pins are in those towns. We will say which surface you are buying before you start.',
        category: 'seo',
      },
    ],
    nearbyLinks: [
      { label: 'Goleta digital marketing', href: '/goleta-digital-marketing' },
      { label: 'Montecito digital marketing', href: '/montecito-digital-marketing' },
      { label: 'Carpinteria digital marketing', href: '/carpinteria-digital-marketing' },
      { label: 'Santa Barbara SEO', href: '/santa-barbara-seo' },
      { label: 'Santa Barbara web design', href: '/santa-barbara-web-design' },
      { label: 'Santa Barbara Google Ads', href: '/santa-barbara-google-ads' },
    ],
    relatedResources: ['local-seo-santa-barbara'],
  },
  {
    slug: 'santa-barbara-seo',
    city: 'Santa Barbara',
    pageType: 'seo',
    metaTitle: 'Santa Barbara SEO Services',
    metaDescription:
      'Santa Barbara SEO for the Map Pack and the results under it. We work proximity, reviews, and pages for the parts of town your pin can actually win.',
    h1: 'Santa Barbara SEO',
    heroLede:
      'Santa Barbara SEO is mostly a Maps problem with an organic problem underneath it. The pack is shallow, downtown phrases are crowded, and your pin\'s location decides more than a clever title tag.',
    heroImage: photos.communitySantaBarbara,
    intro:
      'If you sell in Santa Barbara, the listing that appears in the three-pack is often the whole game. Someone standing on State Street, sitting in a hotel on Cabrillo, or searching from a kitchen on the Mesa is looking at Maps first. The blue links under that pack still matter for research-heavy work (legal, medical, complex home projects). They are the second screen for a dinner reservation or a same-day plumber.\n\nThis page stays on ranking mechanics. Categories, reviews, proximity, and on-site relevance, in that kind of order, with the city\'s actual competition in view. Two businesses on the same street can sit in very different packs. We change the listing, the pages, and the geography story until yours is the one that appears.',
    marketProfile:
      'Google Local is built from relevance, distance, and prominence. In Santa Barbara those three forces collide in a small downtown. Relevance means your categories and pages match the query. Distance means the pin is close to the searcher or to the place the searcher named. Prominence means the web and the review graph already treat you as a known business. Downtown hospitality collects visitor reviews after every stay and every meal. A contractor on Upper State may do better work and still look quieter to Maps because the review cadence is slower and the pin is farther from the tourist centroid.\n\nThe pack for a downtown restaurant term is crowded. Independent rooms, hotel restaurants, national directories, and a long tail of "best of" pages all occupy the same real estate. For home services the pack is often a mix of genuine local operators and companies that list Santa Barbara as a service area from a yard in another city. Google has gotten stricter about that, and it is still messy. We treat service-area listings as a different product from a storefront. If you do not have a place customers can visit, the pack will not treat you like a shop on State.\n\nOrganic SEO under the pack is where longer jobs get decided. A family comparing roofers, a patient reading about a procedure, a property owner checking who handles estates in this county. Those searches want pages that name the work, the city, and the constraints, with enough original writing that Google has a reason to keep the URL. Doorway pages that swap a city name dilute the site. We would rather write one honest Santa Barbara page that a person would finish than ten thin clones.\n\nReview velocity is a prominence lever owners underestimate until a competitor passes them with more recent, specific write-ups. Recency matters more than a frozen five-star average from years ago. We set up a request process that is honest and easy. We do not write reviews, buy them, or hide the unhappy ones. If the work itself is the problem, SEO will not paper over it.',
    neighborhoods: [
      {
        name: 'Downtown / State Street',
        context:
          'The tightest Map Pack in the city. Distance is short and visitor-review prominence is high.',
      },
      {
        name: 'Funk Zone',
        context:
          'Evening and tasting-room queries cluster here. Categories and hours have to match nightlife, or Maps will skip you.',
      },
      {
        name: 'Waterfront and Stearns Wharf',
        context:
          'Searches typed on Cabrillo or the pier. A pin a mile inland often loses even with stronger reviews.',
      },
      {
        name: 'Milpas',
        context:
          'Resident-weighted packs. Less visitor review volume, more "near me" from Eastside addresses.',
      },
      {
        name: 'The Mesa',
        context:
          'A self-contained pack. Winning downtown from a Mesa pin is usually the wrong fight.',
      },
      {
        name: 'Eastside',
        context:
          'Home-address searches. Neighborhood modifiers and Spanish-language queries show up more than on State Street.',
      },
      {
        name: 'Westside',
        context:
          'Trades and clinics compete in a smaller pack with less directory noise than downtown hospitality.',
      },
      {
        name: 'Upper State',
        context:
          'Professional-service packs where organic articles and a clean GBP often beat a downtown walk-in pin.',
      },
      {
        name: 'The Riviera',
        context:
          'Sparse pins. Service-area businesses try to cover it from below. Storefronts up the hill are rare in Maps.',
      },
      {
        name: 'Hope Ranch',
        context:
          'Almost no commercial density. Ranking "in Hope Ranch" usually means organic plus a legitimate service-area signal.',
      },
    ],
    searchBehavior:
      'Map Pack queries here are short. "Plumber near me," "best tacos Santa Barbara," "emergency dentist." The searcher is often moving. They will tap the first listing that looks open, close, and reviewed this year. Click-through from position four (the first blue link) is a different person, one who is comparing and will read.\n\nBranded searches are common for restaurants and hotels that already have a reputation from a stay or a magazine mention. Unbranded category searches are where a less famous business still has a path, if the profile and the pages are built for the actual job. We watch both. Ranking for your own name is table stakes. Ranking for the category in the right neighborhood is the work.\n\nVoice search and in-car queries add another layer for trades and medical. Those still resolve through Maps. Wrong hours or a leftover primary category make you invisible in the moment someone needed you.',
    dominantIndustries: [
      'home-services',
      'professional-services',
      'medical-wellness',
      'restaurants-hospitality',
    ],
    serviceRelevance: [
      {
        service: 'local-seo',
        why: 'The core of Santa Barbara SEO. Pack eligibility, categories, and geo-pages that match where your pin actually sits.',
      },
      {
        service: 'seo',
        why: 'Organic coverage for research queries (legal, medical, complex home work) that the three-pack does not finish.',
      },
      {
        service: 'google-business-profile',
        why: 'The listing is the ranking unit. Photos, Q&A, products, and a review cadence that Maps can see this quarter.',
      },
      {
        service: 'conversion-optimization',
        why: 'A pack win that lands on a slow or confusing page still loses the call. The listing and the site have to finish the same job.',
      },
      {
        service: 'analytics',
        why: 'Calls and direction requests from the profile, plus search queries from Search Console, so we are not optimizing a vanity keyword.',
      },
      {
        service: 'strategy',
        why: 'A written call on which packs you can enter from this pin, and which cities you should treat as organic-only.',
      },
    ],
    localChallenges: [
      {
        title: 'The downtown pack is a prominence contest',
        body: 'Visitor reviews accumulate faster for hotels and restaurants than for a CPA or a roofer. If your category lives downtown, you are competing with businesses that get reviewed after every meal. The response is a steady, honest review process and pages that add relevance the pack still respects.',
      },
      {
        title: 'Service-area listings get treated like second-class Maps results',
        body: 'If customers cannot visit you, Google is less willing to place you in a pack as if you had a shop. Hide-the-address tactics burn trust and often fail. We will either build a real storefront signal or we will put the weight on organic, ads, and a profile that stays inside the rules.',
      },
      {
        title: 'Thin city pages make the whole domain look weaker',
        body: 'Santa Barbara is a magnet for out-of-town SEO shops that stamp fifty city URLs. Google has seen that pattern. Unique local writing, real photos, and a NAP that matches the world are slower to produce and harder to fake. That is the point.',
      },
      {
        title: 'Wrong categories bury a good business',
        body: 'A primary category left over from a previous tenant, or a stack of secondary categories that chase every possible query, confuses the pack. We pick the category that matches the money work, then support it with services and pages, rather than asking Maps to guess.',
      },
    ],
    faqs: [
      {
        question: 'How long does Santa Barbara SEO take before rankings move?',
        answer:
          'Most neglected local profiles show Map Pack movement in a few months, assuming the category is not already a wall of national brands. Research queries take longer. We will not sell a thirty-day first-page promise. We will tell you which surface we expect to move first and how we will measure it.',
        category: 'seo',
      },
      {
        question: 'Can you get my Santa Barbara business into the Map Pack for downtown if my office is on the Mesa?',
        answer:
          'Sometimes for a tight category with few closer competitors. Usually no, for busy downtown hospitality and general home-service terms. Distance is a primary input. We would rather win the Mesa pack and a set of organic city pages than spend a year failing at State Street Maps.',
        category: 'seo',
      },
      {
        question: 'Do I need a blog to rank in Santa Barbara?',
        answer:
          'You need useful URLs. If a post explains a service or a seasonal offer, write it. Weekly articles for the sake of publishing are skippable. We would rather you have five pages a person would bookmark.',
        category: 'seo',
      },
      {
        question: 'Should I build citations on every local directory?',
        answer:
          'Start with consistency on the profile, the website, and the major maps and data providers. A long tail of spam directories does little here and can create NAP drift. We clean the records that already exist, then add the ones that actually get used in this county.',
        category: 'getting-started',
      },
      {
        question: 'Is Santa Barbara SEO different from SEO in a larger city?',
        answer:
          'The algorithm is the same. The pack is smaller and the tourist overlay is heavier. A well-kept profile can still be found, because the market is not infinite.',
        category: 'seo',
      },
    ],
    nearbyLinks: [
      { label: 'Digital marketing in Santa Barbara', href: '/santa-barbara-digital-marketing' },
      { label: 'Goleta digital marketing', href: '/goleta-digital-marketing' },
      { label: 'Montecito digital marketing', href: '/montecito-digital-marketing' },
      { label: 'Carpinteria digital marketing', href: '/carpinteria-digital-marketing' },
    ],
    relatedResources: ['google-business-profile-optimization'],
  },
  {
    slug: 'santa-barbara-web-design',
    city: 'Santa Barbara',
    pageType: 'web-design',
    metaTitle: 'Santa Barbara Web Design & Development',
    metaDescription:
      'Websites for Santa Barbara businesses opened on a phone at the waterfront. Fast pages, a clear call button, and a visitor decision that lasts a few minutes.',
    h1: 'Santa Barbara Web Design',
    heroLede:
      'Most Santa Barbara visits to your site happen on a phone, often on cellular, often while the person is already deciding whether to walk in. The page has a short window to load, make sense, and offer a tap.',
    heroImage: photos.communitySantaBarbara,
    intro:
      'A visitor standing on Stearns Wharf or in the Funk Zone is not browsing the way a designer browses on a fast office connection. They have a hotel check-in, a hungry group, and a signal that drops when they turn away from the buildings. If your hero image is a six-megabyte sunset and the phone number is in a footer they will never reach, they will open the next listing.\n\nWe design and build marketing sites for businesses that live with that window. The work is information architecture, photography that is compressed on purpose, type you can read outdoors, and a call or booking action that does not require a desktop. Pretty is allowed. Pretty that fails on a 390-pixel screen is not finished.',
    marketProfile:
      'Tourist decision time in this city is compressed. Someone who searched "lunch near me" on Cabrillo may be inside a restaurant a few minutes later. The site they tapped from Maps has to confirm they are in the right place (hours, address, a current photo of the room or the crew), then let them call or get directions without a scavenger hunt. Menu PDFs that are actually old scans, booking widgets that fail on iOS, and popups that cover the number are how those minutes go to a competitor.\n\nResident traffic behaves differently and still happens on a phone. A homeowner comparing two roofers at the kitchen table will scroll. They will look for license talk, service area, and a way to request a visit. They will not wait for a video background to buffer. They will leave if the contact form asks for a budget, a timeline, and a life story before they can say "call me." Santa Barbara sites often try to impress both audiences with the same cinematic homepage. The tourist bounces. The resident never finds the service list.\n\nPhotography is a local trap. This is a photogenic city. Owners want the harbor, the courthouse, the mountains. Stock-looking wide shots do not tell a visitor whether your patio is open or your exam room is real. We prefer original photos of the actual premises, compressed, with a focal point, and we keep decorative full-bleeds off the first paint. Brand can live in type, color, and a few well-chosen frames. It should not live in an unoptimized gallery that tanks Core Web Vitals.\n\nTechnical health is part of design here because Google uses page experience as a ranking input and because slow pages lose Maps traffic you already paid to earn. We build on a modern stack, not a page-builder theme with a plugin for every wish. Hosting, image pipeline, and form handling are specified up front. If a third-party chat or review widget is going to add two seconds, we will say so before it ships.',
    neighborhoods: [
      {
        name: 'Downtown / State Street',
        context:
          'Walk-in traffic. The site has to confirm hours and the tap-to-call target in the first screen.',
      },
      {
        name: 'Funk Zone',
        context:
          'Evening light and group decisions. Pages need current hours, a real interior photo, and a reservation path that works on a phone.',
      },
      {
        name: 'Waterfront and Stearns Wharf',
        context:
          'Weak cellular and glare. Large images and autoplay video are how you lose the tap from Maps.',
      },
      {
        name: 'Milpas',
        context:
          'Bilingual households and quick local errands. Clear service lists beat a poetic homepage.',
      },
      {
        name: 'The Mesa',
        context:
          'Residents on home Wi-Fi who still start on a phone. They will compare two sites. Yours has to be readable and specific.',
      },
      {
        name: 'Eastside',
        context:
          'Practical queries. Show what you do, where you are, and how to reach you without a brand film first.',
      },
      {
        name: 'Westside',
        context:
          'Trades and clinics. License, insurance talk, and a form that a person can complete one-handed.',
      },
      {
        name: 'Upper State',
        context:
          'Professional services. A calm layout, a real staff photo, and a booking or call path that does not feel like a consumer app.',
      },
      {
        name: 'The Riviera',
        context:
          'Discretion. Sites that scream "luxury template" feel off. Quiet, specific, and fast reads as more expensive than gold gradients.',
      },
      {
        name: 'Hope Ranch',
        context:
          'Estate work found by referral and by search. The site has to look like it belongs in that conversation without inventing a pedigree.',
      },
    ],
    searchBehavior:
      'A large share of Santa Barbara sessions begin in Maps or in a hotel email and land on a deep page, not on the homepage. The URL they open has to stand alone. If the tasting-room page still assumes they read the About story, you will lose them.\n\nQuery-to-page match is a design problem as much as an SEO problem. "Kids friendly restaurant Santa Barbara" should not land on a generic food-and-wine manifesto. "Emergency plumber Mesa" should not land on a cinematic homepage with a slow slider. We map the high-intent URLs first, then design the chrome around them.\n\nAfter the tap, behavior is impatient. Scroll depth is shallow on visitor pages and deeper on professional-service pages. We design for the shallow case on hospitality and same-day trades, and we allow more room to read on legal, medical, and complex home work. One layout language, two densities.',
    dominantIndustries: [
      'restaurants-hospitality',
      'professional-services',
      'real-estate',
      'medical-wellness',
    ],
    serviceRelevance: [
      {
        service: 'web-design',
        why: 'Original layouts for this market, built to load on a phone at the waterfront and to make the next action obvious.',
      },
      {
        service: 'conversion-optimization',
        why: 'Call buttons, booking, and forms tested against the actual visitor window, not against a desktop mockup.',
      },
      {
        service: 'local-seo',
        why: 'Each location and service URL has to stand alone when Maps drops someone in the middle of the site.',
      },
      {
        service: 'seo',
        why: 'Information architecture and internal links that help research queries without turning the site into a doorway farm.',
      },
      {
        service: 'google-business-profile',
        why: 'The website URL on the profile should open a page that matches the listing, including hours and the same phone number.',
      },
      {
        service: 'analytics',
        why: 'We measure calls, form starts, and landing-page speed on mobile, because desktop bounce rates lie in this city.',
      },
    ],
    localChallenges: [
      {
        title: 'Cinematic homepages fail on Cabrillo',
        body: 'Harbor videos and uncompressed galleries look fine in a studio review and stall on cellular. We treat first-load weight as a design constraint, the same way we treat type size. If it cannot open quickly outdoors, it is not the homepage.',
      },
      {
        title: 'One story cannot serve a tourist and a retainer client',
        body: 'Hospitality and professional services in Santa Barbara often share a brand and should not share a first screen. We split templates and page types so the visitor sees hours and a tap, and the resident sees proof and a way to request work.',
      },
      {
        title: 'Third-party widgets eat the decision window',
        body: 'Chat, review carousels, booking iframes, and social feeds each add time. Some are worth it. Many are vanity. We add them only when they complete a job the owner can name, and we keep a fallback when the script fails.',
      },
    ],
    faqs: [
      {
        question: 'How long does a Santa Barbara business website take to build?',
        answer:
          'Four to eight weeks is typical for a marketing site with a clear sitemap, if photos and copy arrive on time. Booking, multilingual content, or a large original photo library add time. We give a dated outline. If we are waiting on you, we say so. If you are waiting on us, you will know that too.',
        category: 'getting-started',
      },
      {
        question: 'Will the site work on a phone at the beach?',
        answer:
          'That is the design target. Readable type, compressed images, a tap target that actually calls you, and no popover covering the number. We check the layouts on small screens before we look at the laptop view. If a page only works on a laptop, it is unfinished.',
        category: 'getting-started',
      },
      {
        question: 'Do you use a template with our logo swapped in?',
        answer:
          'No. We use a modern stack and original design for your business. Components get reused where they help speed and accessibility. You will not get a cloned "coastal restaurant" theme with the colors shifted. Santa Barbara already has too many of those.',
        category: 'getting-started',
      },
      {
        question: 'Should our Santa Barbara site be bilingual?',
        answer:
          'If a meaningful share of your customers prefer Spanish, yes, and it should be real pages, not a machine-toggle that breaks the layout. Eastside and a lot of service businesses already live in both languages in person. The site should not pretend otherwise. We will scope translation as a distinct piece of work, not as a plugin afterthought.',
        category: 'getting-started',
      },
      {
        question: 'Does a faster site help us rank in Santa Barbara?',
        answer:
          'It helps you keep the traffic Maps already sends, and page experience is one of many ranking inputs. It will not replace relevance, reviews, or a pin in the right place. We still treat speed as non-negotiable because a slow page wastes SEO you already have.',
        category: 'seo',
      },
    ],
    nearbyLinks: [
      { label: 'Digital marketing in Santa Barbara', href: '/santa-barbara-digital-marketing' },
      { label: 'Goleta digital marketing', href: '/goleta-digital-marketing' },
      { label: 'Montecito digital marketing', href: '/montecito-digital-marketing' },
      { label: 'Carpinteria digital marketing', href: '/carpinteria-digital-marketing' },
    ],
    relatedResources: ['web-design-cost-santa-barbara'],
  },
  {
    slug: 'santa-barbara-google-ads',
    city: 'Santa Barbara',
    pageType: 'google-ads',
    metaTitle: 'Santa Barbara Google Ads Management',
    metaDescription:
      'Google Ads for Santa Barbara, shaped around seasonal demand, costly clicks, and the searches that mean someone is ready to call you this week.',
    h1: 'Santa Barbara Google Ads',
    heroLede:
      'Clicks in Santa Barbara are easy to buy and easy to waste. Visitor curiosity, seasonal spikes, and broad match on pretty keywords will spend a budget before a single qualified call lands.',
    heroImage: photos.communitySantaBarbara,
    intro:
      'Paid search in this city looks busy in the dashboard and quiet on the phone when the account is aimed at the wrong people. Someone in another county planning a vacation next fall will click a restaurant ad. Someone on State Street tonight will too. Only one of those clicks should have been eligible. Home-service ads collect the same kind of waste when "Santa Barbara" is treated as a vanity geo and the campaign also shows in cities you will never drive to.\n\nWe build and manage Google Ads for businesses that need a call or a booking this week, with tracking that can tell the difference. Media spend goes to Google. Our fee is for structure, creative, negative keywords, and the honesty to pause what is not producing work.',
    marketProfile:
      'Cost per click in Santa Barbara follows intent, not scenery. Emergency trades, legal, medical, and some home services bid in a more expensive auction because the job value is high and the searcher is ready. Hospitality terms look cheaper until you notice they are soaked with researchers, bargain hunters, and people who will never leave the hotel website. We do not quote a citywide average CPC here because that number would be a fiction. We look at your category, your close rate, and what a qualified call is worth, then we set a budget that can actually learn.\n\nSeasonality is a bid problem as much as a staffing problem. Fiesta, Summer Solstice, graduation weekends, and the summer visitor peak inflate auctions for anything a tourist might want. A restaurant that leaves "open now" bids flat during those weeks goes invisible. A plumber who bids on "Santa Barbara vacation" is buying noise. We write the calendar into the campaigns. Dayparting, bid adjustments, and paused ad groups keep you from paying for January traffic with an August brain, and the reverse.\n\nGeo targeting is where local accounts usually leak. A radius around downtown will still show to people passing through on the 101 who are not your customer. A "presence or interest" setting will show to people in other states who have Santa Barbara on a mood board. For most service businesses we target people who are in the area (or a tight set of zips), and we exclude the queries that mean trip planning. For hotels and true visitor offers we widen on purpose, with landing pages that match a future stay, and we still keep a separate campaign for same-day local demand.\n\nBrand campaigns defend your name when competitors bid on it, which they will. Non-brand campaigns do the expensive work. Mixing them in one ad group is how you congratulate yourself for ranking on your own name while category terms go to a cleaner account. We split them. Paid traffic goes to a page that loads and asks for the call, never to a homepage that still thinks it is a brochure.',
    neighborhoods: [
      {
        name: 'Downtown / State Street',
        context:
          'Same-day visitor auctions. Tight radius, trip-planning negatives, hours in the ad.',
      },
      {
        name: 'Funk Zone',
        context:
          'Evening and tasting-room terms. Daypart so you are not paying for 9 a.m. clicks when you open at 3.',
      },
      {
        name: 'Waterfront and Stearns Wharf',
        context:
          'High "near me" density. Location extensions and call ads matter more than a clever headline.',
      },
      {
        name: 'Milpas',
        context:
          'Resident intent. Zip targeting and service keywords beat downtown hospitality phrases.',
      },
      {
        name: 'The Mesa',
        context:
          'Small geo. A radius that includes downtown will import visitor waste into a neighborhood business.',
      },
      {
        name: 'Eastside',
        context:
          'Practical, often bilingual queries. Ad copy should name the service and the side of town, not a slogan.',
      },
      {
        name: 'Westside',
        context:
          'Trades compete on emergency and scheduled work. Call tracking is how you know which one you bought.',
      },
      {
        name: 'Upper State',
        context:
          'Professional services. Longer research, higher CPC, and a landing page that looks like an office, not a coupon.',
      },
      {
        name: 'The Riviera',
        context:
          'Low volume, high job value. Small budgets still make sense if the conversion is an estate or a retainer.',
      },
      {
        name: 'Hope Ranch',
        context:
          'Do not waste spend on "Hope Ranch" as a vanity keyword if you cannot serve it this week. Treat it as a geo overlay on real service terms.',
      },
    ],
    searchBehavior:
      'Paid queries split the same way organic does, with a sharper invoice attached. Visitor terms cluster around meals, lodging, activities, and "open now." They convert fast or not at all. Resident terms cluster around services, medical, legal, and home. They convert after a call and a quote. An account that scores both with the same CPA target will starve one of them.\n\nSearch partners and display expansions are how budgets disappear in a pretty city. Someone scrolling a news site is not the same as someone typing "AC repair Santa Barbara." We start on Search, with exact and phrase where the intent is clear, and we add broader match only after negatives are in place and conversion tracking is real.\n\nCall-only and call-asset campaigns earn their keep for trades and medical. We track calls with unique numbers where we can, and we still listen to a sample so "qualified" is not just a 90-second threshold in software.',
    dominantIndustries: [
      'home-services',
      'restaurants-hospitality',
      'medical-wellness',
      'professional-services',
    ],
    serviceRelevance: [
      {
        service: 'google-ads',
        why: 'Account structure, geo, seasonality, and negatives so Santa Barbara clicks correspond to work you can take.',
      },
      {
        service: 'conversion-optimization',
        why: 'Landing pages that load on a phone and ask for the call, because a good auction still dies on a slow brochure.',
      },
      {
        service: 'analytics',
        why: 'Call tracking, offline conversion imports when you have them, and reports that separate visitor noise from resident jobs.',
      },
      {
        service: 'local-seo',
        why: 'Organic and the profile should catch the branded and Maps demand so ads are not paying for your own name forever.',
      },
      {
        service: 'web-design',
        why: 'Paid traffic needs a page built for the query, never a homepage hero that ignores the keyword you paid for.',
      },
      {
        service: 'strategy',
        why: 'A written split between brand defense, same-day visitor demand, and resident services, with a budget that can learn.',
      },
    ],
    localChallenges: [
      {
        title: 'Trip-planning clicks look like local demand',
        body: 'People in other regions search Santa Barbara restaurants and activities months ahead. Presence-or-interest targeting invites them in. For a same-day business those clicks are expensive research. We exclude the planning language and the far-away geos unless you are actually selling a future stay.',
      },
      {
        title: 'Seasonal auctions punish set-and-forget bids',
        body: 'Fiesta week and summer weekends change what a click costs and what it is worth. Leaving last winter\'s bids in place either overpays or disappears. We put the calendar into the account before the week arrives, then we pull back when the town empties.',
      },
      {
        title: 'Broad match on pretty keywords burns the budget',
        body: 'Harbor, sunset, vacation, and "best" collect curiosity. The searches that hire you are usually plainer. We write the account around those phrases, then add negatives every week until the waste stops repeating.',
      },
      {
        title: 'No call tracking means you are optimizing screenshots',
        body: 'Platform conversions that count a page view or a 30-second session will tell you the ads are working while the phone stays quiet. We install call tracking and form events before we scale spend. If we cannot connect a click to a conversation, we do not increase the budget.',
      },
    ],
    faqs: [
      {
        question: 'How much should a Santa Barbara business spend on Google Ads?',
        answer:
          'Enough to collect useful data without lighting money on fire. For many local service businesses that is a few thousand dollars a month in media, not a few hundred and a hope. The right number depends on your close rate and what a qualified call is worth. We will not invent a figure to look decisive. We will set a starting range after we see the auction and your tracking.',
        category: 'getting-started',
      },
      {
        question: 'Why did our last Santa Barbara ads account waste money?',
        answer:
          'The usual pattern is broad match on vanity keywords, no call tracking, a slow landing page, and brand terms that look like a win while competitors take the high-intent jobs. We rebuild around the searches that mean someone wants to hire you this week, in the area you actually serve.',
        category: 'getting-started',
      },
      {
        question: 'Should we advertise during Fiesta and the summer peak?',
        answer:
          'If you sell to visitors, yes, with bids and copy that match same-day intent, and with hours that are actually true. If you sell to residents and get drowned by tourist queries, we tighten geo and keywords so you are not funding parade-week browsers. Whether Fiesta is a good buy depends on who you sell to.',
        category: 'getting-started',
      },
      {
        question: 'Do you mark up our Google Ads spend?',
        answer:
          'Media spend goes to Google. Our fee is for management, tracking, and creative. You will see both numbers. If a platform rebate or partner benefit exists, it is disclosed.',
        category: 'getting-started',
      },
      {
        question: 'Can ads replace SEO for a Santa Barbara business?',
        answer:
          'Ads can fill the phone while organic is still catching up, and they can cover seasonal peaks organic cannot absorb. They stop when you stop paying. SEO and the profile keep working after the campaign pauses. We usually run them as one system, with ads taking the demand SEO has not won yet.',
        category: 'seo',
      },
    ],
    nearbyLinks: [
      { label: 'Digital marketing in Santa Barbara', href: '/santa-barbara-digital-marketing' },
      { label: 'Goleta digital marketing', href: '/goleta-digital-marketing' },
      { label: 'Montecito digital marketing', href: '/montecito-digital-marketing' },
      { label: 'Carpinteria digital marketing', href: '/carpinteria-digital-marketing' },
    ],
    relatedResources: ['google-ads-for-local-business'],
  },
  {
    slug: 'goleta-digital-marketing',
    city: 'Goleta',
    pageType: 'overview',
    metaTitle: 'Goleta Digital Marketing & SEO',
    metaDescription:
      'Digital marketing for Goleta businesses found as Goleta. Old Town, Camino Real, the student market, and the tech corridor each search differently.',
    h1: 'Digital Marketing in Goleta',
    heroLede:
      'Goleta is not a neighborhood of Santa Barbara in search. Residents type Goleta. Students type Isla Vista or UCSB. Engineers type the vendor\'s name. Treating all three as "Santa Barbara SEO" is how Goleta businesses stay invisible.',
    heroImage: photos.communityGoleta,
    intro:
      'Goleta has its own main street, its own shopping center, its own campus economy, and its own industrial park by the airport. People who live here notice when a website talks about them as if they were a suburb waiting to drive downtown. Google notices too. Prominence often leans toward Santa Barbara businesses that have more reviews, more links, and a more famous city name. A Goleta company that copies a Santa Barbara page and swaps the title is volunteering to lose.\n\nWe write and run marketing for businesses that actually trade in Goleta. The work starts with naming the city the way your customers name it, then building relevance that Maps cannot confuse with a State Street pin.',
    marketProfile:
      'Old Town Goleta along Hollister is the traditional commercial spine. Independent restaurants, services, and offices sit there in a pattern that looks like a small city because it is one. Camino Real Marketplace is a different animal. National retailers, grocery, and destination errands pull from across the west side of the county. A local shop next to that gravity either rides it (clear categories, strong profile, pages that mention Goleta on purpose) or disappears under it. Storke and Hollister toward the university and the older industrial edges hold a tech and light-industrial corridor. Longer sales cycles, fewer impulse clicks, more branded search, more LinkedIn and referral than a tasting room will ever need.\n\nUCSB and Isla Vista are a third economy that only looks informal from outside. Move-in and move-out, rentals, cheap eats, bikes, urgent care, and late-night food run on an academic calendar. Parents search from somewhere else. Students search from a phone on Pardall or El Colegio. A business that serves that market and still writes copy for a Hope Ranch homeowner will miss both. Isla Vista is unincorporated. UCSB has its own geography. Goleta still catches a lot of the commercial spillover. The pages have to be precise about which of those you are in, or Google will file you under a Santa Barbara hospitality template and move on.\n\nThe airport and the industrial parks near it are B2B and logistics as much as they are "local business." A machine shop, a contractor with a yard, a professional firm in an office park. Those companies lose when their Google Business Profile looks like a storefront they do not have, or when they hide the address and hope to rank in downtown Santa Barbara anyway. They win when the profile tells the truth, the site names Goleta, and the service area is the 101 corridor they actually drive.\n\nThe structural problem is prominence. Santa Barbara businesses collect visitor reviews and press by default. Goleta businesses often do the quieter work. Maps uses that imbalance. Relevance is the lever you still control. Categories that say Goleta, photos of the actual Hollister frontage, landing pages that mention Old Town or the Marketplace without turning into spam, and reviews that say where the work happened. Residents already search "Goleta dentist" and "Goleta plumber." If your titles only say Santa Barbara, you have asked to be compared with downtown, where you are farther from the searcher and less famous.',
    neighborhoods: [
      {
        name: 'Old Town Goleta',
        context:
          'Hollister storefronts and local services. This is where "Goleta" as a search modifier still means a walkable center.',
      },
      {
        name: 'Camino Real Marketplace',
        context:
          'Regional errands and national chains. Independents next door need sharper categories or they vanish in the pack.',
      },
      {
        name: 'Storke / Hollister corridor',
        context:
          'Tech, offices, and the student-adjacent commercial strip. B2B search lives here more than visitor search.',
      },
      {
        name: 'UCSB and Isla Vista',
        context:
          'Academic calendar, rentals, and late-night food. Parents and students search with different words for the same vendors.',
      },
      {
        name: 'Airport and industrial parks',
        context:
          'Yards, hangars, and office parks. Service-area rules and a truthful address matter more than a pretty homepage.',
      },
      {
        name: 'Ellwood and west Goleta',
        context:
          'Residential trade and family services. People search Goleta, not downtown, for the dentist and the HVAC company.',
      },
    ],
    searchBehavior:
      'Goleta residents usually include the city name. They are trying to avoid a downtown result. "Near me" still appears, and the phone is often sitting in a house west of the airport, which is a different centroid than State Street. If your profile city is wrong, or your site only mentions Santa Barbara, you have already lost the filter they were applying.\n\nStudent and parent queries are seasonal and practical. Housing, furniture, urgent care, moving, food. They tolerate less brand poetry. They want hours, price cues, and a map pin they can walk to from IV or campus. B2B queries are branded or category-plus-city ("IT support Goleta," "machine shop Santa Barbara County"). Those people will read a capabilities page. They will not tap the first taco shop in the pack.\n\nYou are also competing with Santa Barbara listings that Google already trusts. Goleta businesses close that gap by becoming the most complete local result for searches that happen here. Ads can fill the weeks while the organic pack is still a row of Santa Barbara pins.',
    dominantIndustries: [
      'professional-services',
      'home-services',
      'restaurants-hospitality',
      'medical-wellness',
    ],
    serviceRelevance: [
      {
        service: 'local-seo',
        why: 'Goleta-specific categories, photos, and pages so Maps has a reason to prefer you over a more famous Santa Barbara pin.',
      },
      {
        service: 'seo',
        why: 'Organic coverage for "Goleta" modifiers that residents actually type, plus B2B pages for the tech and industrial park.',
      },
      {
        service: 'google-ads',
        why: 'A way to show up while prominence still leans downtown, with geo aimed at Goleta and IV, not a vanity SB radius.',
      },
      {
        service: 'web-design',
        why: 'A site that says Goleta in the first screen and can handle student-speed decisions and slower B2B reading on the same domain.',
      },
      {
        service: 'marketing-automation',
        why: 'Follow-up for longer Goleta B2B cycles and for rental or campus inquiries that arrive at 11 p.m. and go cold by morning.',
      },
      {
        service: 'ai-automation',
        why: 'Routing and drafting help for firms that get a mix of student noise and serious vendor RFPs without hiring a night desk.',
      },
    ],
    localChallenges: [
      {
        title: 'Google already likes Santa Barbara more than Goleta',
        body: 'Prominence accrues to the city tourists review. A Goleta pin starts behind on that score. A borrowed downtown address is a policy risk and a trust problem. Categories, photos, pages, and reviews that name Goleta give Maps a reason to prefer the closer listing.',
      },
      {
        title: 'Three economies on one domain',
        body: 'A tech firm, a student pizza shop, and a family dentist should not share a homepage paragraph. Goleta businesses sometimes serve two of those markets. The IA has to split them or the messaging cancels itself out.',
      },
      {
        title: 'Residents refuse the Santa Barbara label',
        body: 'People here search Goleta on purpose. Titles, GBP city, and body copy that only say Santa Barbara feel inaccurate and rank for the wrong centroid. We name the city they typed.',
      },
      {
        title: 'Isla Vista and UCSB are easy to misfile',
        body: 'If you serve campus and IV, say so on dedicated URLs with real hours and a pin that matches where students actually walk. If you do not, stop bidding on those terms. Mixing them into a Goleta family-business page confuses both audiences.',
      },
    ],
    faqs: [
      {
        question: 'Should a Goleta business still target Santa Barbara keywords?',
        answer:
          'Some, when you truly serve that city and the query is a category people type with the county name. The Map Pack for downtown will still prefer downtown pins. Organic pages can compete for broader terms. We will mark which is which. Leading with Santa Barbara when your customers live in Goleta is usually the wrong first move.',
        category: 'seo',
      },
      {
        question: 'Why do Santa Barbara competitors outrank us in Goleta Maps?',
        answer:
          'Prominence and sometimes a messy service-area listing. If they are physically downtown, they should lose a Goleta "near me" search on distance, unless your profile is incomplete or your categories are wrong. We audit the pack, then we fix the listing and the pages before we assume you need ads to paper over it.',
        category: 'seo',
      },
      {
        question: 'Do we need a separate strategy for UCSB and Isla Vista?',
        answer:
          'If that is real revenue, yes. The calendar, the keywords, and the photos are different from Old Town family trade. If it is occasional overflow, a single service page may be enough. We will not build a campus voice for a business that closes at 5 and does not want that traffic.',
        category: 'getting-started',
      },
      {
        question: 'Is Goleta cheaper to rank in than Santa Barbara?',
        answer:
          'Often the packs are less crowded with visitor brands, which can mean faster movement for a well-kept profile. A category with a few aggressive local competitors is still a fight. We look at your pack, never at a county-wide rule.',
        category: 'seo',
      },
      {
        question: 'Should our Google Business Profile city be Goleta or Santa Barbara?',
        answer:
          'It should be the city of the premises, which for a Goleta address is Goleta. Listing Santa Barbara because it "sounds better" is how you confuse the algorithm and your neighbors. If you have a Santa Barbara mailing habit, keep it off the profile.',
        category: 'getting-started',
      },
    ],
    nearbyLinks: [
      { label: 'Santa Barbara digital marketing', href: '/santa-barbara-digital-marketing' },
      { label: 'Montecito digital marketing', href: '/montecito-digital-marketing' },
      { label: 'Carpinteria digital marketing', href: '/carpinteria-digital-marketing' },
    ],
    relatedResources: ['how-much-does-seo-cost-santa-barbara'],
  },
  {
    slug: 'montecito-digital-marketing',
    city: 'Montecito',
    pageType: 'overview',
    metaTitle: 'Montecito Digital Marketing & SEO',
    metaDescription:
      'Montecito digital marketing for Coast Village Road and the Upper Village. Low search volume, high-value work, and a Map Pack rule we will state plainly.',
    h1: 'Digital Marketing in Montecito',
    heroLede:
      'Montecito does not produce a lot of searches. The searches it does produce are attached to expensive jobs, private households, and businesses that would rather be referred than advertised. Volume is the wrong scoreboard.',
    heroImage: photos.communityMontecito,
    intro:
      'Coast Village Road, the Upper Village at San Ysidro, Butterfly Beach, and the residential streets behind the hedges are a small commercial map with a large average ticket. A landscaper, an architect, a discreet medical practice, a restaurant on CVR, a real estate team. Ten genuine inquiries a month can matter more than a thousand tire-kickers somewhere else. Marketing that chases traffic for its own sake feels off here, and it usually attracts the wrong people.\n\nSanta Barbara Marketing Co. treats Montecito as its own market. We will also say the geographic limit out loud, because a lot of firms that "serve Montecito" are physically in Santa Barbara, and Maps cares about that more than a tagline does.',
    marketProfile:
      'Coast Village Road is the visible commercial street. Restaurants, shops, and services that still have a front door. Upper Village at San Ysidro is quieter and more local, with a mix of everyday needs and specialist offices. Butterfly Beach and Channel Drive bring a thin visitor overlay, people who want parking, a lunch, or a place to stay, and who still behave like tourists even when the zip code sounds private. Behind those nodes the trade is residential and estate. Gates, long driveways, household staff who search from a phone, owners who heard a name at dinner.\n\nQuery volume is low. That is structural. Fewer residents, fewer walk-ins, more work that never goes through Google at all. Ranking for a phrase that is searched a handful of times a month can still be the whole channel if the job is a remodel, a listing, or a medical procedure. We do not pad this page with invented search counts. We plan as if each click might be worth a conversation you would have taken anyway, which means the site, the profile, and the ads (if any) have to look like they belong in that conversation.\n\nReputation and discretion are the real ranking factors people use after Google. A loud "we own this village" posture is a good way to be dismissed. Referral networks, Nextdoor threads, and a name passed by a property manager still move work. Digital marketing here is often the confirmation layer. Someone heard of you. They search. The profile, the site, and the way you ask for reviews either complete the trust or break it. We build for that second look.\n\nMany businesses that serve Montecito keep their office, their yard, or their kitchen in Santa Barbara. That is rational on rent. It is a Maps problem. You generally cannot rank in the Montecito Map Pack without a genuine presence there. A Santa Barbara office that lists Montecito as a service area still sits in Santa Barbara on the map. People standing on Coast Village Road usually see the businesses with a door they can walk through. Organic pages, honest service-area copy, referral, and sometimes ads geo-aimed at Montecito are the path for firms based in the city. A virtual office invented for Maps is how listings get suspended. We will say that in the first meeting so nobody spends a year trying to break a rule that is not going to break.',
    neighborhoods: [
      {
        name: 'Coast Village Road',
        context:
          'The public commercial street. Pack competition is real, volume is still modest, and the visitor overlay is strongest here.',
      },
      {
        name: 'Upper Village (San Ysidro)',
        context:
          'Local errands and specialist offices. Searches are quieter and more resident-weighted than CVR.',
      },
      {
        name: 'Butterfly Beach and Channel Drive',
        context:
          'Thin tourist intent. Parking, lunch, and lodging queries from people who may never come inland.',
      },
      {
        name: 'East Valley and residential lanes',
        context:
          'Estate work found by name and by a handful of high-intent searches. The website is often a reference check.',
      },
      {
        name: 'Montecito Hills and Hot Springs',
        context:
          'Low density. Service businesses win with organic and relationships. A downtown Santa Barbara pin rarely sits in this pack.',
      },
    ],
    searchBehavior:
      'People type fewer, more careful queries. A household manager searches a category plus Montecito. An owner searches a name they were given. A visitor on Butterfly Beach searches like a visitor anywhere, short and urgent. Those three should not share an ad group or a homepage paragraph.\n\nBecause volume is low, branded search and referral-plus-confirm matter more than they do on State Street. Unbranded category terms are still worth owning when you have a real Montecito presence. When you do not, chasing "Montecito" as a keyword from a Santa Barbara shop is mostly a way to lose the pack and annoy the people who live here.\n\nPrivacy shows up in analytics too. Some of the best customers will call from a number that never hits a thank-you page. Reporting that only celebrates form fills will undercount the work. We still measure. We also leave room for the phone.',
    dominantIndustries: [
      'real-estate',
      'professional-services',
      'home-services',
      'medical-wellness',
      'restaurants-hospitality',
    ],
    serviceRelevance: [
      {
        service: 'seo',
        why: 'Organic pages that can rank for low-volume Montecito terms when you do not have a pack-eligible pin in the village.',
      },
      {
        service: 'google-business-profile',
        why: 'A truthful listing. If you are in Montecito, we keep it complete and quiet. If your office is in Santa Barbara, the address stays in Santa Barbara.',
      },
      {
        service: 'web-design',
        why: 'A site that reads as competent and discreet. No luxury-template theatrics, no invented pedigree.',
      },
      {
        service: 'conversion-optimization',
        why: 'A request path a household manager can use, and a phone number that is easy to find without a chat bot in the way.',
      },
      {
        service: 'social-media',
        why: 'Only when it matches the business. Some CVR restaurants need it. Many estate trades do not. We will say which you are.',
      },
      {
        service: 'strategy',
        why: 'A written decision on Map Pack eligibility, service-area limits, and whether paid search is even appropriate.',
      },
    ],
    localChallenges: [
      {
        title: 'You cannot occupy the Montecito Map Pack from Santa Barbara',
        body: 'If customers cannot visit you in Montecito, Google will generally keep you out of that pack. Service-area coverage and organic rankings are the honest path. Creating a virtual office to game Maps is how you get suspended. We will not do that.',
      },
      {
        title: 'Low volume makes vanity metrics useless',
        body: 'Traffic graphs that look flat can still include the only three inquiries that filled the month. We report calls, qualified conversations, and booked work when you can share them. We will not sell you on sessions.',
      },
      {
        title: 'Loud marketing reads as a mismatch',
        body: 'Template superlatives, stock marble photography, and "exclusive" language will bounce the people you want. Specific work, real photos of your crew or your room, and a clear service area read as more expensive than a gold gradient.',
      },
      {
        title: 'Referral still closes the job',
        body: 'Digital is often the confirmation after a name is passed. If the profile hours are wrong, the site looks abandoned, or the last review is from another era, the referral dies at the search bar. Maintenance is the strategy.',
      },
    ],
    faqs: [
      {
        question: 'Can my Santa Barbara company rank in the Montecito Map Pack?',
        answer:
          'Generally no, not without a genuine presence in Montecito that customers can visit. That is a Google Local rule, not a preference we made up. You can still appear for organic searches, run ads to people in Montecito, and win work by referral. We will not sell you a pack ranking we cannot place.',
        category: 'seo',
      },
      {
        question: 'Is it worth doing SEO if almost nobody searches these terms?',
        answer:
          'If the searches that do exist are attached to jobs you want, yes. The content can be short and specific. The goal is to be the page that appears when a property manager types your category and the village name, and to look trustworthy when someone checks you after a referral.',
        category: 'seo',
      },
      {
        question: 'Should a Montecito business run Google Ads?',
        answer:
          'Sometimes. A restaurant on Coast Village Road may need them on weekends. An estate contractor may waste money on broad terms that attract the wrong towns. We look at query volume, job value, and whether you can even appear in Maps organically, then we decide.',
        category: 'getting-started',
      },
      {
        question: 'How do we ask for reviews without feeling pushy?',
        answer:
          'After the work is done, with a simple link, without gating, and without writing the review for them. Household staff and owners will often leave a specific note if you ask once, plainly. A drip campaign of review requests is a good way to be remembered badly.',
        category: 'getting-started',
      },
      {
        question: 'Do we need a Montecito address on the website if we only serve the area?',
        answer:
          'You need an honest service-area statement. Putting a Montecito address you do not occupy is a trust problem for humans and a policy problem for Google. Name the communities you drive to, from the city where you actually work.',
        category: 'seo',
      },
    ],
    nearbyLinks: [
      { label: 'Santa Barbara digital marketing', href: '/santa-barbara-digital-marketing' },
      { label: 'Goleta digital marketing', href: '/goleta-digital-marketing' },
      { label: 'Carpinteria digital marketing', href: '/carpinteria-digital-marketing' },
    ],
    relatedResources: ['ai-search-visibility-local-business'],
  },
  {
    slug: 'carpinteria-digital-marketing',
    city: 'Carpinteria',
    pageType: 'overview',
    metaTitle: 'Carpinteria Digital Marketing & SEO',
    metaDescription:
      'Digital marketing for Carpinteria on Linden, the beach, and the greenhouse belt. A tighter market, lighter local competition, and pages written for this town.',
    h1: 'Digital Marketing in Carpinteria',
    heroLede:
      'Carpinteria is a small, complete market that most agencies skip. Linden Avenue, the state beach, the bluffs, and the greenhouse belt each produce different searches, and almost nobody has written a real page about any of them.',
    heroImage: photos.communityCarpinteria,
    intro:
      'Carpinteria still has a main street you can walk. Linden Avenue holds the restaurants, shops, and services that residents actually use. A few blocks away the state beach and the campgrounds fill with visitors who decided to stop between Ventura and Santa Barbara, or who booked a site for a week. Inland, Casitas Pass Road climbs toward Ojai. Along the flats, nurseries and greenhouses still employ people and still need vendors. That is a whole economy, small enough that a business which shows up clearly in Maps can be found by much of the town this month.\n\nOut-of-town marketing shops tend to fold Carpinteria into a Santa Barbara County paragraph and move on. Local competitors rarely publish a page that is actually about this town. This one is. The work is still listings, pages, ads, and follow-up. The pack is not a wall of national brands, which is why the same work often lands faster here.',
    marketProfile:
      'Linden Avenue is the commercial heart. Independents, a few regional names, coffee, food, surf-related retail, professional offices upstairs and around the corner. Search here is resident first on weekdays and mixed on summer weekends. A shop that photographs the actual block, keeps hours honest, and asks for reviews after real tickets will often outpace a prettier brand that only lists "serving the 805." The state beach, the campgrounds, and the shoreline parks are a second economy with a hard season. Tent and RV visitors search from the sand for ice, dinner, bike rentals, urgent care, and "things to do with kids." They use Maps the way Santa Barbara visitors do, with less directory noise in the way. Rankings that would take a long grind on State Street can still move here because fewer serious operators are even trying.\n\nThe bluffs and the seal rookery bring a third visitor, the person who came for the animals and the walk. They still eat, still need parking information, and still tap a listing. Ignore that traffic and you leave it on the table. Speak only to that traffic and you look like a tourist trap to the side streets. Distinct URLs can hold both.\n\nAgriculture and the greenhouse belt are easy for coastal marketers to skip because they do not photograph like a wine tasting. They are a real customer base for equipment, labor services, logistics, food, and professional firms. Those searches are practical and often branded. A page that names Carpinteria agriculture without turning into a "farm to table" brochure will be one of the only pages that does. Light industrial and a growing creative base (studios, small manufacturing, people who left pricier cities and kept a shop) sit along the 101 and the older industrial streets. They need B2B pages and a profile that tells the truth about a yard or a studio.\n\nCommuter flow on the 101 between Ventura and Santa Barbara is part of daily life. People live in Carpinteria and work in Santa Barbara. People stop for gas, food, and a beach hour. A service business can pick up work from that flow if geo and hours are set with it in mind, or waste ads on drivers who were never going to exit. We treat the freeway as a targeting problem.\n\nCompetition is genuinely lighter than in Santa Barbara or even Goleta for a lot of local categories. A complete Google Business Profile, a fast site, and a handful of pages written about Linden, the beach, and the zip you actually serve can still be a durable advantage. Results often come faster and cheaper than the same work on State Street, because you are not buying a place in a pack that hotels and magazines already occupy. We will still tell you when a category here is tighter than it looks.',
    neighborhoods: [
      {
        name: 'Linden Avenue',
        context:
          'Walkable downtown. Resident weekdays, mixed weekends, listings visitors open after they park.',
      },
      {
        name: 'Carpinteria State Beach and campgrounds',
        context:
          'Seasonal, high-urgency visitor search. Ice, dinner, rentals, and medical from a phone in a tent or an RV.',
      },
      {
        name: 'The bluffs and seal rookery',
        context:
          'Walkers and day-trippers. Hours, parking notes, and a simple offer beat a brand story.',
      },
      {
        name: 'Casitas Pass Road',
        context:
          'The inland climb toward Ojai. Service businesses and a different drive-time story than Linden.',
      },
      {
        name: 'Greenhouse and agricultural belt',
        context:
          'Practical B2B and labor-adjacent search. Name the work. Skip the coastal poetry.',
      },
      {
        name: '101 corridor and light industrial',
        context:
          'Shops, yards, and studios that serve Carpinteria and the commute. Profiles should tell the truth about the address.',
      },
    ],
    searchBehavior:
      'Residents search Carpinteria by name. They are trying to stay in town or to find someone who will actually drive here from Ventura or Santa Barbara. "Near me" still happens, and the phone is often at a house a few blocks off Linden, which is a centroid Google can work with if your pin is real.\n\nSummer visitors search like visitors everywhere, only denser around the campground and the beach. Those queries vanish in the off-season. A business that lives on them needs a winter plan (residents, 101 commuters, agriculture) or it will stare at an empty dashboard from October to May and call marketing a failure.\n\nCounty-wide searches ("plumber Santa Barbara County") still leak work toward the more famous city. A Carpinteria firm that ranks for its own city name keeps the local jobs. One that only bids on Santa Barbara donates the hometown pack to whoever wrote "Carpinteria" on a title tag.',
    dominantIndustries: [
      'home-services',
      'restaurants-hospitality',
      'professional-services',
      'real-estate',
    ],
    serviceRelevance: [
      {
        service: 'local-seo',
        why: 'A complete Carpinteria profile and pages. In a smaller pack, that work still moves listings in a timeframe owners can feel.',
      },
      {
        service: 'seo',
        why: 'Organic URLs that name Linden, the beach, and agricultural trade so county searches do not send every click downtown.',
      },
      {
        service: 'google-ads',
        why: 'Seasonal visitor campaigns you can turn up with the campground, and resident campaigns you can keep on when the tents leave.',
      },
      {
        service: 'web-design',
        why: 'A fast site that looks like this town. Linden photos, honest hours, and a call button a camper can use.',
      },
      {
        service: 'google-business-profile',
        why: 'Categories and photos of the actual block or yard. This is still the main discovery surface for a town this size.',
      },
      {
        service: 'social-media',
        why: 'Useful for Linden restaurants and beach-adjacent shops. Optional for a greenhouse vendor. We will not put you on a posting treadmill for theater.',
      },
    ],
    localChallenges: [
      {
        title: 'Agencies treat Carpinteria as a footnote',
        body: 'County pages that mention the town once do not rank for it and do not help a Linden business. Unique copy, local photos, and a profile city that says Carpinteria are still uncommon. That gap is the opening.',
      },
      {
        title: 'Summer hides a thin winter if you only market to visitors',
        body: 'Campground demand is real and short. If that is your only story, the off-season will feel like a collapse. We build a resident and commuter layer so the phone still rings when the tents are gone.',
      },
      {
        title: '101 traffic is not the same as local intent',
        body: 'Drivers between Ventura and Santa Barbara will click ads they never exit for. Radius targeting around the interchange has to be paired with keywords that mean "I am in Carpinteria" or "I live here."',
      },
      {
        title: 'Agriculture does not fit a coastal template',
        body: 'Greenhouse and nursery work needs pages that talk about the job, the location, and how to reach you. A surf-town homepage pointed at that buyer wastes the visit. We split the story when the buyer is different.',
      },
    ],
    faqs: [
      {
        question: 'Is it easier to rank a Carpinteria business than a Santa Barbara one?',
        answer:
          'Often yes, for local categories, because fewer operators keep a serious profile and a unique city page. A neglected listing will still lose to a Ventura company that filled in the fields. We look at your pack before we talk about speed or cost.',
        category: 'seo',
      },
      {
        question: 'Should we target Santa Barbara if we are in Carpinteria?',
        answer:
          'If you truly drive there and want that work, we can build organic and ads for it. The Carpinteria Map Pack should still be the first win. Leading with Santa Barbara from a Linden pin usually means you lose at home and stay invisible downtown on distance.',
        category: 'seo',
      },
      {
        question: 'How do we market to campground visitors without ignoring locals?',
        answer:
          'Separate pages and separate campaigns. Visitors need hours, a map, and what you have today. Residents need to recognize themselves in the photos and the offer in October.',
        category: 'getting-started',
      },
      {
        question: 'Does a Carpinteria business need a big content program?',
        answer:
          'Usually no. A clear site, a kept-up profile, and a few pages that name this town will outperform a blog nobody asked for. We add articles when there is a real question. We do not publish for the sake of a calendar.',
        category: 'getting-started',
      },
      {
        question: 'Why have we never seen a marketing page about Carpinteria?',
        answer:
          'Because most shops write one South Coast page and stop. The town is small, so it gets skipped. Searchers still type Carpinteria. Someone should have written the page they land on. We did.',
        category: 'getting-started',
      },
    ],
    nearbyLinks: [
      { label: 'Santa Barbara digital marketing', href: '/santa-barbara-digital-marketing' },
      { label: 'Goleta digital marketing', href: '/goleta-digital-marketing' },
      { label: 'Montecito digital marketing', href: '/montecito-digital-marketing' },
    ],
    relatedResources: ['local-seo-santa-barbara'],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export const overviewLocations: Location[] = locations.filter(
  (location) => location.pageType === 'overview',
);
