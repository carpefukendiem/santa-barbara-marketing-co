import type { FaqItem } from './faqs';

export type Industry = {
  slug: string;
  name: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string; // 140–158 unique chars
  h1: string;
  heroLede: string;
  searchBehavior: string; // how customers in this vertical search locally
  problems: Array<{ title: string; body: string }>; // 3
  servicesThatMatter: Array<{ service: string; why: string }>; // 3–4 service slugs
  locations: string[]; // 2 location slugs
  faqs: FaqItem[]; // 3–4 vertical-specific
  relatedResources: string[];
};

export const industries: Industry[] = [
  {
    slug: 'home-services',
    name: 'Home Services',
    navLabel: 'Home Services',
    metaTitle: 'Home Services Marketing in Santa Barbara County',
    metaDescription:
      'Map Pack, Google Ads, and after-hours follow-up for HVAC, plumbing, electrical, roofing, and cleaning companies in Santa Barbara County, CA.',
    h1: 'Home services marketing for HVAC, plumbing, electrical, and trades in the 805',
    heroLede:
      'A burst pipe in San Roque, a dead AC unit in Goleta in August, a roof tarped after wind in Carpinteria: those jobs start on a phone, usually with a search that includes emergency or near me. Homeowners and property managers in Santa Barbara, Goleta, Montecito, and Carpinteria do not browse. They compare three Map Pack listings, glance at hours and recent reviews, and call. If you miss that call, the next listing gets the job. Santa Barbara Marketing Co. works with HVAC, plumbing, electrical, roofing, and cleaning companies that need to show up in those moments and actually pick up. We were founded in 2024. We will not invent contractor clients, star ratings, or a first-page promise. The work is a Google Business Profile that matches how you operate, pages that match the jobs you want, ads when organic is too slow, and a follow-up path for after-hours voicemail.',
    searchBehavior:
      'Emergency intent is the default for many home-service searches in this county. Someone types plumber near me, AC repair Goleta, emergency electrician Santa Barbara, roof leak Carpinteria, or house cleaning Montecito and expects a map, a phone number, and a signal that you are open. Google puts a Map Pack above most organic results. The pack is built from proximity, category relevance, and prominence, which is why a Goleta pin and a downtown Santa Barbara pin do not compete on equal terms for the same street. After-hours searches are common. A water heater does not wait for 8 a.m. If your profile shows closed, the hours are wrong, or the phone dumps to a full mailbox, the searcher moves on. Seasonal spikes are real: cooling in late spring and summer, heating when nights drop, roofing after storms, cleaning around UCSB move-out. Paid search sits next to the pack on competitive terms. If you do not appear in either place, the next company takes the call.',
    problems: [
      {
        title: 'Missed calls on the jobs that cannot wait',
        body: 'After-hours and lunch-hour calls are where home-service companies leak revenue. The searcher has a wet floor. They will not leave a detailed voicemail and wait. If dispatch is in the truck, if the office phone dies on a job in Hope Ranch, or if two lines ring into the same unanswered queue, Google traffic does not turn into work. Missed-call text-back, an after-hours recording that still captures the address, and a rule for who owns the callback are operations problems with a marketing cost. If you cannot staff nights, say so on the profile and route the lead.',
      },
      {
        title: 'A Google Business Profile that does not look staffed',
        body: 'A thin profile is a quiet no. Wrong categories, hours that still say closed on Saturday, a service area that lists all of California, photos from 2018, and a review stream that stopped last winter tell Google and the homeowner the listing is not maintained. Montecito and downtown queries are picky about proximity. The profile is the storefront for people who will never visit your shop. Categories, services, photos of actual jobs in this county, and recent reviews do more for the Map Pack than a slogan on the van.',
      },
      {
        title: 'Follow-up that waits until Tuesday',
        body: 'A form fill at 9 p.m. for a quote, a chat that says someone will reach out, an email that sits until Thursday: that is how a booked water heater becomes a competitor invoice. Speed-to-lead matters more in emergency categories than in almost any other local vertical. Even non-emergency cleaning estimates decay if nobody replies the same day. If marketing spends money to generate the inquiry and operations treats it as a maybe, you are paying for a competitor to take the work. We will not pretend a new landing page fixes a two-day callback habit.',
      },
    ],
    servicesThatMatter: [
      {
        service: 'google-business-profile',
        why: 'The Map Pack is the channel for emergency and near me work. Categories, services, hours (including after-hours and holiday closures), photo cadence, Q&A, and an honest review request process all sit here. We will not buy reviews. We will make the profile accurate for the Santa Barbara, Goleta, Montecito, and Carpinteria areas you actually cover, and we will say when a pin cannot win a city it does not sit in.',
      },
      {
        service: 'google-ads',
        why: 'Emergency terms are expensive and still often cheaper than a dark week with no calls. Campaigns should match job types you want, geography you can reach in traffic, and a landing page that calls, not a homepage carousel. Call tracking is not optional. If we cannot tell which search produced the job, we will not scale the spend.',
      },
      {
        service: 'local-seo',
        why: 'Service pages should describe real work in this county, not a national template with the city name swapped. Proximity is a constraint. Citations that match, on-site name-address-phone consistency, and copy that answers the actual job (tankless, heat pump, panel upgrade, flat roof, move-out clean) beat a blog of generic tips. Neighborhoods appear as context, not as forty thin clones.',
      },
      {
        service: 'marketing-automation',
        why: 'Missed-call text, after-hours routing, estimate follow-up, and a reminder when a quote goes quiet. This is not a forty-step funnel. It is the difference between a lead at 10 p.m. and a lead you never heard. Automation has to respect how dispatch actually works: one owner, one office manager, or a rotating on-call, not a chatbot that cannot book a water heater.',
      },
    ],
    locations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Can a Goleta HVAC company rank for downtown Santa Barbara emergency searches?',
        answer:
          'Sometimes for citywide terms, often not for downtown near me pack results. Google Local weights proximity. If your pin is in Old Town Goleta, a State Street searcher will often see businesses closer to that pin first. You can still win Goleta, Isla Vista, and west-side work. Pretending one pin covers every neighborhood equally is how budgets get wasted. We will map which geography is realistic before we write pages.',
      },
      {
        category: 'ads',
        question: 'Should we run Google Ads only when the phone is quiet?',
        answer:
          'That is how accounts get turned on in a panic and turned off before they learn. Emergency categories have expensive clicks. A small always-on campaign on the jobs you actually want, with call tracking and a page that matches the query, beats a burst of broad match every slow week. If cash is tight, we cut waste first: junk geos, display add-ons, and keywords that mean research, not a truck.',
      },
      {
        category: 'working-together',
        question: 'Do you handle after-hours call routing for contractors?',
        answer:
          'We can set up missed-call text-back, after-hours recordings, and simple routing into the tools you already use. We do not staff a 24-hour answering service from this office. If you need live operators overnight, that is a separate vendor, and we will say so. What we will not do is send paid traffic to a number that dies at 5 p.m. and call that a marketing problem alone.',
      },
    ],
    relatedResources: [
      'google-business-profile-optimization',
      'google-ads-for-local-business',
      'local-seo-santa-barbara',
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    navLabel: 'Professional Services',
    metaTitle: 'Marketing for Law, Accounting & Advisory Firms in Santa Barbara',
    metaDescription:
      'Search, websites, and reputation work for law, accounting, advisory, and design firms in Santa Barbara and Montecito. Discreet, research-ready pages.',
    h1: 'Marketing for law, accounting, advisory, and design firms in Santa Barbara and Montecito',
    heroLede:
      'A family looking for a trust attorney, a founder who needs a CPA before a sale, or a homeowner interviewing architects for a Coast Village project does not tap the first Map Pack listing and hire on the spot. They read. They compare bios, practice areas, fee posture, and whether the firm sounds like it has worked with people like them. They ask a neighbor in Montecito, then they search the name they heard. Santa Barbara Marketing Co. helps professional service firms in Santa Barbara, Goleta, Montecito, and Carpinteria get found during that research and look like a firm worth calling. We were founded in 2024. We will not invent client names, verdicts, AUM figures, or awards. Discretion matters on the east side of town and in any practice that touches wealth, family, or litigation. The work is slower than emergency trades: clear pages, honest credentials, reviews you actually earned, and ads only where intent is real.',
    searchBehavior:
      'Professional service search in this market is research-heavy. Queries look like estate planning attorney Santa Barbara, forensic accountant, business valuation, interior designer Montecito, or family law downtown. People open several tabs. They read About pages. They look for State Bar numbers, CPA licensure, and whether the office is on Anacapa, Figueroa, Coast Village Road, or a Goleta park rather than a virtual mailbox. Reputation search is as important as category search: the firm name plus reviews, plus a partner name they heard at a dinner in Montecito. Map Pack still matters when someone wants a nearby notary, a same-week CPA, or a designer they can meet. It is not the whole game. Organic practice-area pages often carry the long queries. Coast Village and downtown Santa Barbara searches are not interchangeable. A Montecito household may want a firm that understands privacy and property complexity without advertising that lifestyle in neon. Downtown firms may want visibility with businesses on State Street and with people who work in the city and live in Goleta. Paid search on legal and financial terms is expensive. It only pays if the landing page matches the matter type and if intake actually calls back. The click is a conversation, not a dispatch.',
    problems: [
      {
        title: 'A site that could belong to any firm in any city',
        body: 'Stock photos of gavel-and-columns, a slogan about excellence, and three practice areas copied from a national template do not help a Santa Barbara searcher choose. They also fail when someone from Montecito is deciding whether you understand this market. Bios that hide who actually does the work, missing licensure, and no explanation of who you will not take as a client all create doubt. If the site cannot answer what you do, who it is for, and how to start a confidential conversation, paid traffic will bounce and organic rankings will not save the inquiry.',
      },
      {
        title: 'Reputation you cannot point to, or reputation you overclaim',
        body: 'Reviews on Google and industry directories matter because strangers use them to confirm a referral. A freeze-dried five-star average from 2019 does less than a steady stream of specific, recent comments you are allowed to display. We will not write reviews, gate them, or invent testimonials. Superlatives you cannot document (best, top-ranked, largest) are a risk in regulated categories. If you have a real distinction, we will say it plainly. If you do not, we will build the pages around process, fit, and geography instead of trophies.',
      },
      {
        title: 'Intake that treats a researched lead like a cold call',
        body: 'Someone who spent time on your estate page and then submitted a form is not a tire kicker. If that form goes to a general inbox, if the coordinator asks them to repeat everything they already typed, or if nobody replies until the consultation slot they wanted is gone, they hire the firm that answered. Discretion in Montecito means you do not blast a household name across a newsletter they never joined. The thank-you page and the follow-up email should not look like a retail coupon. We connect the page, the form, and the person who actually books the call.',
      },
    ],
    servicesThatMatter: [
      {
        service: 'seo',
        why: 'Long queries and practice-area research live in organic search. We write pages when there is a real matter type, a real audience, and a geographic difference worth stating. Downtown Santa Barbara and Coast Village are not duplicate templates. We will not publish forty neighborhood clones or guarantee rankings. We measure inquiries you can attribute, not a screenshot of a keyword on a Tuesday.',
      },
      {
        service: 'web-design',
        why: 'The site has to feel like a firm a Montecito principal or a State Street business owner would forward. Readable type, fast load on a phone, an obvious next step, and bios that name the people. Design firms need project context without turning the site into an unfiltered archive. Law and accounting need clarity over ornament. We do not drop a cloned professional template with your logo swapped in.',
      },
      {
        service: 'google-ads',
        why: 'High-intent terms (specific practice areas, city plus matter type) can fill gaps while organic is building. They are wasted on vague keywords and on landing pages that bury the phone. Geo should match where you will take clients, not the whole Central Coast by default. We keep brand campaigns separate so you can see what you already would have gotten from people who searched your name.',
      },
      {
        service: 'strategy',
        why: 'Professional firms often need a written priority list more than a stack of tactics: which matters you want, which cities are realistic, what you will not advertise, and how intake will handle a confidential inquiry. We will not sell a channel because it is fashionable. We will tell you if the first job is the site, the profile, or the follow-up.',
      },
    ],
    locations: [
      'santa-barbara-digital-marketing',
      'montecito-digital-marketing',
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Do professional firms still need a Google Business Profile?',
        answer:
          'Yes, even if most of your work starts from referrals. People verify the name they heard. Hours, the pin, the category, and recent reviews affect whether you look current. A neglected profile with the wrong suite number on Anacapa or an old headshot does not match the care you take with client files. We treat the profile as a confirmation layer, not as the only channel.',
      },
      {
        category: 'websites',
        question: 'How do you handle discretion for Montecito and high-privacy clients?',
        answer:
          'We do not publish client names, addresses, or identifiable project details without written permission. Case-style language stays generic when the work is confidential. Photos are ones you own and have rights to use. The site can still be specific about practice areas and process without turning a household into marketing inventory.',
      },
      {
        category: 'working-together',
        question: 'Can you market a regulated practice without making claims we cannot stand behind?',
        answer:
          'That is the default. We avoid guaranteed outcomes, invented rankings, and copy that sounds like a result you did not earn. You review sensitive pages. If your bar, board, or insurer has advertising rules, you tell us and we write inside them. We would rather a quieter page than a sentence that creates a complaint.',
      },
    ],
    relatedResources: [
      'local-seo-santa-barbara',
      'how-much-does-seo-cost-santa-barbara',
      'web-design-cost-santa-barbara',
    ],
  },
  {
    slug: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    navLabel: 'Restaurants',
    metaTitle: 'Restaurant & Hospitality Marketing in Santa Barbara',
    metaDescription:
      'Google Maps, hours, photos, and booking paths for restaurants and hospitality on State Street, the Funk Zone, and Linden Avenue in the 805 area.',
    h1: 'Restaurant and hospitality marketing for Santa Barbara, the Funk Zone, and Carpinteria',
    heroLede:
      'A couple walking the Funk Zone on a Saturday, a family on State Street during Fiesta, a visitor checking Linden Avenue in Carpinteria for dinner after the beach: they are all on Maps. They look at hours, a photo of the room, whether you take reservations, and whether the last review mentioned a wait or a closed kitchen. Santa Barbara Marketing Co. helps restaurants, tasting rooms, hotels, and hospitality operators in Santa Barbara, Goleta, Montecito, and Carpinteria show up correctly in those moments and convert the tap into a table, a room, or a second visit. We were founded in 2024. We will not invent packed-house metrics, critic quotes, or a tourist-board award. Seasonality here is not a footnote. Summer and December do not look like January. Locals and visitors search differently. The work starts with the listing Google already has, then the site, then the ads and follow-up that make sense for a full book versus an empty Tuesday.',
    searchBehavior:
      'Hospitality search in this county is Maps-first. Queries include restaurants near me, brunch Santa Barbara, Funk Zone wine, State Street dinner, tacos Carpinteria, Montecito lunch, and the hotel name they saw from the freeway. Hours that are wrong are a conversion failure: a kitchen that closed at 9 listed as open until 11, a seasonal closure still showing as open. Photos do as much work as copy. A visitor deciding between two Funk Zone spots will pick the listing with current food and room photos over a dark storefront from 2017. Reviews mention wait times, parking, and whether the reservation was honored. Tourists search category plus Santa Barbara and then filter by distance from the waterfront, the Funk Zone, or their hotel. Locals search cuisine, neighborhood, and whether you still take walk-ins. Reservation intent and walk-in intent are different. Goleta and UCSB-area searches skew student and weekday lunch. Montecito searches often include a specific property or a quieter room. When we use ads, they match a real offer, a real booking path, and a geo that can actually arrive tonight.',
    problems: [
      {
        title: 'Maps hours, attributes, and photos that do not match the door',
        body: 'Google is how most diners confirm you exist. If the hours are stale, if the cuisine categories are wrong, if the menu link 404s, or if the photos show a chef who left, you lose the tap. Attributes (outdoor seating, reservations, vegetarian, live music) get used as filters. Leaving them blank or wrong hides you from people who would have walked in. We treat the Google Business Profile as the front door, updated when the kitchen schedule changes, not once a year when someone remembers the login.',
      },
      {
        title: 'A site that cannot answer tonight versus a month from now',
        body: 'Hospitality websites often bury the two questions that matter: are you open, and how do I sit down. A slow homepage with autoplay video, no tap-to-call, and a reservation widget that fails on mobile will send people back to Maps. Hotels and inns have a parallel problem: dates, parking, and whether breakfast is included should not live in a PDF. Walk-in restaurants still need a menu, hours, and a map pin that matches. Reservation-led rooms need the booker above the fold. Mixing both without saying which you are confuses tourists who have one night in town.',
      },
      {
        title: 'Seasonality treated like a surprise every year',
        body: 'Fiesta, summer weekends, holiday parties, and the January lull are the calendar of this coast. A plan that spends like August in February burns money. A plan that goes dark in shoulder season loses locals you still need when tourists leave. Staffing, hours, and menus change. The listing and the site have to change with them. We will not promise a year-round crowd we cannot influence. We will help you show accurate hours, aim spend at the weeks you can seat, and keep locals in the loop without spamming them like a national chain.',
      },
    ],
    servicesThatMatter: [
      {
        service: 'google-business-profile',
        why: 'Hours, photos, posts, menu links, reservation links, and review replies are the hospitality channel. Funk Zone, State Street, and Linden Avenue diners decide on the listing. We keep categories and attributes honest. We do not buy reviews. We do not leave a seasonal closure listed as open. For hotels and inns, the same listing is often the first confirmation after an OTA thumbnail.',
      },
      {
        service: 'local-seo',
        why: 'Neighborhood and cuisine queries still have organic results under the pack. A page that explains what you are (and what you are not) in this city beats a blog about food trends. We will write for the places people actually search: downtown, the Funk Zone, waterfront, Montecito, Carpinteria, Goleta. Duplicate city pages with the same paragraph swapped are doorway spam. We will not do that.',
      },
      {
        service: 'conversion-optimization',
        why: 'The job is a reservation, a walk-in decision, or a booking. That means the button works on a phone, the hours are visible without pinch-zoom, and the widget does not drop the party size. We look at where people abandon: menu PDFs, maps embeds that hijack scroll, popups on cellular. We do not decorate the problem. We fix the path from Maps to a table.',
      },
      {
        service: 'social-media',
        why: 'Hospitality still lives on photos of what is on the plate this week, not a quarterly brand campaign. Posting will not replace a broken Maps listing. It can keep locals aware of hours changes, events, and seasonal menus. If you do not have time to photograph specials, we will not sell a 30-post calendar you cannot feed.',
      },
    ],
    locations: [
      'santa-barbara-digital-marketing',
      'carpinteria-digital-marketing',
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Does a Funk Zone restaurant need different search work than a Linden Avenue spot?',
        answer:
          'Yes, because the searcher and the nearby competition are different. Funk Zone queries mix visitors, wine traffic, and downtown overflow. Linden Avenue in Carpinteria mixes beach day, locals, and people who will not drive to State Street for dinner. The Google pin, the photos, and the copy should match the actual room and the actual trade. Cloning the same page with a different city name does not fool Google and does not help a diner.',
      },
      {
        category: 'ads',
        question: 'Should restaurants run Google Ads year-round in Santa Barbara?',
        answer:
          'Not by default. Media should follow when you can seat the room and when visitors are actually in town. A small always-on brand campaign can protect your name. Category campaigns in the dead weeks often teach the algorithm the wrong lessons. We would rather pause than pretend January clicks are as valuable as July.',
      },
      {
        category: 'websites',
        question: 'Do we need reservations on the website if we are walk-in only?',
        answer:
          'No. Say that clearly. Put hours, the menu, parking notes, and a map that matches the door. A fake Book Now button that dumps into an empty reservation page or a phone tree is worse than stating walk-ins. If you take reservations at dinner and walk-ins at lunch, put both on the same screen. Tourists will not hunt through three taps to find out.',
      },
    ],
    relatedResources: [
      'google-business-profile-optimization',
      'google-ads-for-local-business',
      'ai-search-visibility-local-business',
    ],
  },
  {
    slug: 'medical-wellness',
    name: 'Medical & Wellness',
    navLabel: 'Medical & Wellness',
    metaTitle: 'Medical & Wellness Marketing in Santa Barbara County',
    metaDescription:
      'Trust-first local search, reviews, and websites for clinics, dental, physical therapy, and spas in Santa Barbara, Goleta, and nearby 805 cities.',
    h1: 'Marketing for clinics, dental, physical therapy, and spas in Santa Barbara County',
    heroLede:
      'Choosing a dentist, a physical therapist, a clinic, or a spa in Santa Barbara County is a trust decision. People search symptoms and insurance, then they search names. They read reviews for bedside manner, wait times, and whether the front desk explained cost. They want to know if you are near Cottage, on Upper State, in Goleta, or worth the drive from Carpinteria. They do not want a marketing page that sounds like a miracle. Santa Barbara Marketing Co. helps medical and wellness practices in Santa Barbara, Goleta, Montecito, and Carpinteria get found for the searches they can ethically win, with language that does not overpromise. We were founded in 2024. We will not invent patient stories, clinical outcomes, or board certifications you do not have. We are not a HIPAA certification body. Marketing can avoid collecting extra health details and keep forms appropriate. That is not a legal attestation that your whole practice is certified. Our job is visibility, a site people can use, and follow-up that respects how intake actually works.',
    searchBehavior:
      'Medical and wellness search splits along insurance versus cash-pay. Someone typing dentist who takes Delta Santa Barbara or PT near me that accepts my plan is not the same person typing hydrafacial Montecito or cash-pay primary care. Insurance-driven searchers compare directories, then they still Google the office to confirm the pin, hours, and reviews. Directory listings and Google often disagree. That mismatch costs appointments. Cash-pay and elective wellness search is more visual and more review-heavy: spas, cosmetic dentistry, and cash clinics compete on photos, pricing transparency, and whether booking works on a phone. Clinical searches (pediatric dentist, pelvic floor PT, travel clinic) are research-heavy. People look for a named provider and a tone that does not diagnose them through a headline. HIPAA-aware marketing means we do not put protected health information in ads, we do not use patient photos without authorization, and we do not ask a website form for a full medical history when a reason-for-visit and a callback number would do. We will not claim HIPAA compliance as a badge we issued. Locals search city plus specialty. UCSB students search Goleta and Isla Vista. Paid search on medical terms is restricted in some categories. We stay inside platform health-care policies. We do not write ads that guarantee a clinical result.',
    problems: [
      {
        title: 'Trust signals that are thin, stale, or invented',
        body: 'Reviews, named providers, and a real office photo do more than a stock image of a smiling actor in a white coat. A Google Business Profile with the wrong suite, an old provider who left, or a review section that went quiet makes a new patient hesitate. We will not buy reviews, write them, or display testimonials you cannot permission. If your rating is weak because of a real front-desk or clinical issue, marketing will not paper over it. Fix the experience, then ask for the review in a way that does not pressure people in the chair.',
      },
      {
        title: 'Insurance and cash-pay mixed into one confusing message',
        body: 'If you are in-network for major plans, say which ones you can confirm and how to verify. If you are cash-pay or membership, say that before someone books expecting a copay they will not get. Spas and elective clinics that hide price until the consult lose people who searched with a budget. Clinics that bury insurance in a PDF lose people who searched with a plan name. The search query told you the intent. The page should match it.',
      },
      {
        title: 'Forms and follow-up that collect too much or call too late',
        body: 'A new-patient form that asks for a life history before a first call creates drop-off and a data problem you may not want on a marketing site. A form that asks only for name and a preferred time, then a coordinator who calls the next day, loses the person to the office that texted in twenty minutes. After-hours dental pain and PT scheduling both decay. We keep marketing forms narrow on purpose. Your EHR and intake packet can live where they belong.',
      },
    ],
    servicesThatMatter: [
      {
        service: 'local-seo',
        why: 'Specialty plus city queries and Maps visibility are how new patients find an office they were not referred to. We write provider and service pages that match what you actually offer in Santa Barbara, Goleta, Montecito, and Carpinteria. We will not publish symptom pages that diagnose, and we will not clone a page for every neighborhood.',
      },
      {
        service: 'google-business-profile',
        why: 'Category, hours, insurance attributes where they exist, photos of the real office, and a review process that is allowed under your policies. Dental, medical, and spa categories are not interchangeable. Wrong category is a quiet ranking problem. We keep the listing aligned with the site. We do not treat the profile as a place to paste clinical claims.',
      },
      {
        service: 'web-design',
        why: 'The site has to load on a phone, name the providers, explain insurance versus cash-pay, and offer a form that does not harvest extra health details. Accessibility matters in this vertical more than in most. Booking widgets should be ones you actually staff.',
      },
      {
        service: 'conversion-optimization',
        why: 'Appointment requests fail in predictable places: a buried phone number, a form with twenty fields, a portal link that errors, a spa menu that is a huge PDF. We shorten the path. We do not test claims about clinical results. We test whether a person can request a visit without giving up.',
      },
    ],
    locations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    faqs: [
      {
        category: 'websites',
        question: 'Are you HIPAA certified, and will our marketing site be HIPAA compliant?',
        answer:
          'We are not a HIPAA certification body, and we will not sell marketing as a certification. A public marketing site should avoid collecting unnecessary protected health information. Forms can be limited to contact details and a high-level reason for visit. Patient portals, charting, and intake packets belong in systems your compliance team has reviewed. We write HIPAA-aware copy and form scope. Your counsel still owns compliance.',
      },
      {
        category: 'seo',
        question: 'Can we rank for insurance plan names in Santa Barbara?',
        answer:
          'Sometimes, if you truly participate and the page says how to verify. Plan-name search is messy because directories and Google both rank. We will not list networks you cannot confirm. We will not promise a ranking for Delta, Aetna, or any other plan. We can make it easy for a searcher who already wants you to see that you take their plan, and we can stop ads from implying coverage you do not have.',
      },
      {
        category: 'working-together',
        question: 'How do you handle patient reviews for a medical or dental office?',
        answer:
          'We set up a request process that is optional, not a tablet shoved at someone in pain. We do not write the review. We do not filter by star rating. If a platform or your board has rules about solicitation, you tell us and we stay inside them. Public replies should never include clinical details. If a review is about a real issue, the fix is operational.',
      },
    ],
    relatedResources: [
      'local-seo-santa-barbara',
      'google-business-profile-optimization',
      'web-design-cost-santa-barbara',
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    navLabel: 'Real Estate',
    metaTitle: 'Real Estate Marketing in Santa Barbara & Montecito',
    metaDescription:
      'Neighborhood search, sites, and ads for Santa Barbara and Montecito agents, brokerages, and property managers. Useful pages, not doorway spam.',
    h1: 'Marketing for real estate agents, brokerages, and property managers in the 805',
    heroLede:
      'A buyer comparing the Mesa to the Riviera, a seller in Montecito who wants a quiet process, a landlord in Goleta trying to fill a unit before UCSB fall: they all search, and they all judge the agent or the manager by the pages they land on. Real estate marketing in Santa Barbara County fails in two opposite ways. One is a thin site that could be anywhere. The other is a forest of neighborhood URLs that repeat the same paragraph with a different street name. That second pattern is doorway spam. Santa Barbara Marketing Co. works with agents, teams, brokerages, and property managers in Santa Barbara, Goleta, Montecito, and Carpinteria who want search pages that are actually useful: different housing stock, different price bands, different buyer questions. We were founded in 2024. We will not invent sales volume, rankings, or a roster of celebrity clients. Montecito is low volume and high consideration. You do not need an IDX feed on every page for us to talk about how people search.',
    searchBehavior:
      'Real estate search here is neighborhood-aware and often long. Queries look like homes for sale Montecito, Mesa Santa Barbara real estate, Goleta property management, Carpinteria townhomes, luxury agent Hope Ranch, or rentals near UCSB. Buyers and sellers still start on the big portals. They come to an agent site to verify a person and whether that person actually works this pocket. If your neighborhood pages are doorway clones, they bounce back. If you have no local pages at all, you only rank for your name. Montecito search is low volume and high value. The copy has to respect privacy and the inventory pattern: fewer sales, longer timelines, more off-market conversation. Goleta and Isla Vista skew rentals, student turnover, and property management. Santa Barbara city searches mix owner-occupied, second homes, and downtown condos. Carpinteria and Summerland have their own beach-adjacent stock. Map Pack matters for property managers and for agents people search by name plus city. IDX is optional in this conversation. Portals already index listings. Your site still needs a reason to exist: the agent, the area you truly cover, and management services if that is the business. Paid search on city plus homes for sale is often captured by portals. Agent ads work better on brand, on a farm you can defend, and on property management terms portals do not fully own.',
    problems: [
      {
        title: 'Neighborhood pages that are doorway spam',
        body: 'A unique URL for every subdivision with the same three sentences and a different H1 is not local SEO. It is a pattern Google demotes, and it is a poor experience for a buyer trying to understand the Mesa versus San Roque versus Montecito. We write a page when the housing, the searcher, or the offer is actually different. That might mean a Montecito page, a Goleta rentals page, and a downtown Santa Barbara page, not forty clones.',
      },
      {
        title: 'Proof that is invented, stale, or borrowed',
        body: 'Sales volume, ranking lists, and implied celebrity clients show up on too many agent sites without documentation. We will not add them. Photos of listings you did not sell, sold banners on expired photos, and testimonial quotes with no last name all train a serious Montecito seller to leave. Property managers have a parallel problem: unit counts and occupancy claims that cannot be shown. We will use what you can permission: your listings, your actual service area, your process. If you do not have public reviews yet, we will not fabricate a carousel.',
      },
      {
        title: 'A site that duplicates the portals and ignores the phone',
        body: 'If the homepage is only a search widget, you are competing with companies that have more listings and more engineering. The searcher already has that widget. What they need from you is whether you answer, whether you know the pocket, and how a listing or a rental application actually starts. Slow load, IDX errors, and a contact form that goes to a team inbox in another time zone lose listing appointments. For property management, the after-hours maintenance path and the application link matter more than a lifestyle reel.',
      },
    ],
    servicesThatMatter: [
      {
        service: 'seo',
        why: 'Useful area pages, agent bios, and service pages for buying, selling, and management when those are real lines of business. Montecito, Santa Barbara, Goleta, and Carpinteria get different copy because the markets are different. We will not guarantee rankings against the portals. We will not build doorway farms.',
      },
      {
        service: 'web-design',
        why: 'Fast on a phone, clear who you are, listings if you have a feed worth showing, and a contact path that a seller will use. IDX is not required for a good site. If you have it, it has to work. If you do not, we will not pretend a fake search box helps. Photography should be yours or properly licensed. Luxury presentation for Montecito is restraint, not gold gradients.',
      },
      {
        service: 'google-ads',
        why: 'Brand defense, property management terms, and tightly geo-fenced campaigns for a farm you actually work. Broad homes for sale plus city often feeds the portals and tire kickers from outside your drive time. We track calls and form fills. We will not scale a campaign that cannot show which keyword produced a conversation.',
      },
      {
        service: 'google-business-profile',
        why: 'Name search and Maps still confirm an agent and a management office. Categories, the pin, hours, and reviews should match the brokerage office or the team location you actually use. A pin in a coworking space you visit twice a year confuses Google and clients. We keep the listing aligned with the site and with advertising rules you are bound by.',
      },
    ],
    locations: [
      'montecito-digital-marketing',
      'santa-barbara-digital-marketing',
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Do I need a page for every Santa Barbara neighborhood?',
        answer:
          'No. You need a page when the neighborhood is searched, the housing is distinct, and you can write something that is not a find-and-replace of another page. Montecito, the Mesa, downtown, Goleta, and Carpinteria often clear that bar. Micro-pockets with no search volume and no inventory story do not. Thin neighborhood sprawl is doorway spam. We would rather rank for fewer honest pages than hide a hundred clones in a sitemap.',
      },
      {
        category: 'websites',
        question: 'Do we have to have IDX on the site for SEO to work?',
        answer:
          'No. IDX can help buyers who already trust you and want to browse. It is not a requirement for ranking as an agent or a manager, and a broken feed is worse than none. Portals already own most listing queries. Your SEO job is the person, the areas you work, and the services (especially property management) that are not a duplicate of the MLS search.',
      },
      {
        category: 'growth-plan',
        question: 'Montecito has so few sales. Is search even worth it?',
        answer:
          'Volume is low. Consideration is high. Search still happens: the seller who heard your name, the advisor who is checking you, the buyer who typed Montecito and then looked for an agent who actually works there. The budget should match that reality. We will not sell you a content factory for a market that does not publish like a suburb.',
      },
    ],
    relatedResources: [
      'local-seo-santa-barbara',
      'how-much-does-seo-cost-santa-barbara',
      'ai-search-visibility-local-business',
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
