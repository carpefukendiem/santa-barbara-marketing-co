import type { Resource } from './resources';
import type { FaqItem } from './faqs';

export const batch2ResourcesHowto: Array<Resource & { faqs: FaqItem[] }> = [
  {
    slug: 'how-to-respond-to-negative-reviews',
    title: 'How to Respond to Negative Reviews Without Making It Worse',
    metaTitle: 'How to Respond to Negative Reviews (Google)',
    metaDescription:
      'A practical reply playbook for negative Google reviews in Santa Barbara County: calm public responses, offline fixes, when to flag, and what never to say.',
    category: 'seo',
    excerpt:
      'Calm, factual replies for bad Google reviews in the 805. What to say in public, what to move offline, when to flag, and how to stop the same complaint from repeating.',
    readTime: '10 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['review-management', 'google-business-profile', 'local-seo'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'how-to-get-more-google-reviews',
      'google-business-profile-optimization',
      'local-seo-santa-barbara',
    ],
    body: [
      {
        type: 'p',
        html: `A negative Google review hits differently when your name sits next to it on State Street searches, Hollister Avenue map pins, or a Santa Maria homeowner scrolling the Map Pack at 9 p.m. Other customers read the complaint before they read your website. How you answer is part of the listing. A defensive essay makes you look brittle. Silence for a month makes you look abandoned. A calm, specific reply that offers a real path to fix the issue is what most Santa Barbara County searchers expect from a business they would still hire.`,
      },
      {
        type: 'p',
        html: `This guide is for owners and managers who need a reply habit, not a viral clapback. It covers how to triage a bad review, what to say in public, what to move to the phone, when to use Google's flag tools, and how to stop the same complaint from showing up again. We pair this work with <a href="/services/review-management">review management</a> and with an accurate <a href="/services/google-business-profile">Google Business Profile</a>. If you also need more honest five-star velocity, use our guide on <a href="/resources/how-to-get-more-google-reviews">how to get more Google reviews</a>. None of this is a ranking guarantee. It is reputation operations.`,
      },
      {
        type: 'h2',
        text: 'Triage before you type',
      },
      {
        type: 'p',
        html: `Not every one-star post is the same job. Read the review twice before you draft. Separate facts you can verify (wrong address, missed appointment, invoice dispute, product returned) from tone (rude, sarcastic, all-caps). Separate your business from a lookalike listing. Separate a one-time miss from a pattern you already know is true. The reply for a wrong-business review is not the reply for a legitimate complaint about a late HVAC tech in Goleta.`,
      },
      {
        type: 'ul',
        items: [
          'Wrong business or competitor sabotage: document, flag, reply briefly if needed.',
          'Legitimate miss on a real job: acknowledge, invite offline, fix the process.',
          'Vague rage with no details: stay short, offer a direct contact, do not invent a story.',
          'Policy or content that breaks Google rules: flag first, then decide on a public note.',
          'Repeated theme (parking, wait time, invoice clarity): fix operations, then reply.',
        ],
      },
      {
        type: 'p',
        html: `Assign a named owner for replies. If "whoever sees it" owns the inbox, angry drafts go live at midnight and thoughtful replies never leave Notes. Put the duty on a manager who can offer a refund, a rebook, or a callback without waiting three days for the owner to land at SBA.`,
      },
      {
        type: 'h2',
        text: 'What a good public reply sounds like',
      },
      {
        type: 'p',
        html: `Public replies are for every future reader, not only the person who posted. Thank them for the feedback by name when Google shows a name. Restate the issue in plain words so it is clear you read it. Take ownership for what is yours without a courtroom defense. Offer a specific next step: a phone number, an email, or a named person. Then stop. Do not litigate star ratings in the comments. Do not accuse them of lying. Do not paste a legal threat. Do not offer a gift card in the reply as payment for an update. That reads as an incentive and it rarely ends cleanly.`,
      },
      {
        type: 'blockquote',
        text: 'The reply is proof you are still in business and still reachable. The fix happens offline.',
      },
      {
        type: 'h3',
        text: 'A simple structure that travels well',
      },
      {
        type: 'p',
        html: `Most honest replies fit four beats: acknowledge, own, invite, close. Example shape for a restaurant near the Funk Zone: "Hi Maya, thank you for telling us about the long wait on Saturday. That is on us. Please email info@yourshop.com or call us so we can make this right. We want another chance to host you." Example shape for a contractor: "Hi Jordan, we are sorry the crew missed the afternoon window on your Carpinteria job. Please call (805) XXX-XXXX and ask for Maria so we can reschedule and review the invoice with you." Swap in your facts. Keep the voice like your shop, not like a corporate survey.`,
      },
      {
        type: 'p',
        html: `If the review names a staff member, protect the person in public. Do not pile on an employee in the reply. Coach privately. In public, speak for the business. If the review is glowing except for one fixable detail, thank the praise and address the detail without rewriting their whole story.`,
      },
      {
        type: 'h2',
        text: 'What never belongs in the reply',
      },
      {
        type: 'ul',
        items: [
          'Arguments about who is "right," line by line.',
          'Personal data about the customer (address, medical details, invoice balances).',
          'Coupons, discounts, or free work offered as payment for editing the review.',
          'Copy-paste templates that ignore what they wrote.',
          'Threats, insults, or sarcasm aimed at the reviewer.',
          'Admitting liability in language your insurer or counsel would reject. Keep it operational, not legal.',
        ],
      },
      {
        type: 'p',
        html: `Santa Barbara is a small county in practice. A sharp public fight on a Montecito client review or a UCSB-area rental complaint travels through friend groups and Facebook threads fast. You can be firm about facts without being cruel. If you are too angry to write well, draft offline, wait until morning, and have a second person read it.`,
      },
      {
        type: 'h2',
        text: 'Move the detailed dispute offline',
      },
      {
        type: 'p',
        html: `Public replies should open a door, not finish a deposition. Phone and email are where you compare appointment logs, photos of the job, and invoices. Ask for the best number and a good window to call. When you reach them, listen first. Restate what you heard. Offer a concrete remedy when one is fair: redo, partial credit, clearer scheduling, a different tech. If you cannot agree, say so calmly and document what you offered. Do not promise a review update as a condition of the remedy. If they choose to edit the review after a real fix, that is their choice.`,
      },
      {
        type: 'p',
        html: `Some customers will never reply. Leave your public note anyway. Future readers still see that you answered. Update the reply only if the facts change in a material way. Do not spam edits every time you feel anxious about the star average.`,
      },
      {
        type: 'h2',
        text: 'When to flag a review',
      },
      {
        type: 'p',
        html: `Google's tools exist for spam, fake engagement, off-topic content, conflicts of interest, and reviews about the wrong business. Use them when the post is not a real customer experience with you. Do not flag every one-star review you dislike. That wastes time and can look like you are trying to erase honest feedback. Screenshot the review, note the date, and keep a short internal log of what you flagged and why.`,
      },
      {
        type: 'p',
        html: `Competitor games happen in tourist corridors and trade categories. If you see a pattern of one-star posts with no visit details, or reviews that clearly describe another shop on Linden Avenue while naming you, flag and document. If Google removes it, good. If not, your calm reply still matters more than a second fight in the comments.`,
      },
      {
        type: 'h2',
        text: 'Fix the operation the review is pointing at',
      },
      {
        type: 'p',
        html: `Replies cannot paper over a process that keeps failing. If three reviews in a quarter mention wait times at a State Street register, change staffing or expectations. If Goleta patients keep saying the front desk never calls back, fix the phone tree before you hire another photographer for the lobby. If North County homeowners say estimates never arrive, put a same-day estimate SLA on the calendar and track it. Review management without operations change is theater.`,
      },
      {
        type: 'p',
        html: `Pair reply work with an honest ask for reviews after good jobs, using the same Google link for everyone. No gating. No incentives. The <a href="/resources/how-to-get-more-google-reviews">review playbook</a> covers that habit. A healthy listing is recent praise plus adult replies to criticism, sitting on a profile with correct hours and current photos.`,
      },
      {
        type: 'h2',
        text: 'Staff scripts and access',
      },
      {
        type: 'p',
        html: `Write two or three reply frames your team can adapt: praise, soft criticism, hard criticism. Keep them short. Store them where the person with Google access can reach them. Make sure the company Google account that owns the profile is the account that replies, so access does not leave with a former employee. Train people not to improvise when they are upset. A five-minute huddle after a rough review beats a public meltdown.`,
      },
      {
        type: 'p',
        html: `Speed matters. Aim to reply within a few days, faster when the review is unhappy and factual. Put unanswered reviews on a weekly owner check next to new review count. That is enough instrumentation for most 805 shops.`,
      },
      {
        type: 'h2',
        text: 'How we help, and what we will not do',
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. will help you install a reply voice, train who owns the inbox, and keep the habit next to review requests and profile cleanup. That work lives in <a href="/services/review-management">review management</a>. The Local Lead Plan is $297/mo, or $2,970/yr, when the bundled local system is the right fit. We will not write fake rebuttals, buy removals, or promise that a star average will rise because of clever wording. We will not tell you to gate unhappy customers away from Google.`,
      },
      {
        type: 'p',
        html: `If you want a straight read on your last thirty reviews and whether replies are helping or hurting, book a 20-minute call. Email info@sbmc.io or call (805) 307-7600. Bring Google Business Profile access if you have it. We will tell you what to fix in the habit before we talk about packages. You can also start from <a href="/book-a-call">book a call</a>.`,
      },

      {
        type: 'h2',
        text: 'Industry-specific reply notes for the 805',
      },
      {
        type: 'p',
        html: `Restaurants and hospitality near State Street, the Funk Zone, and Coast Village Road often get reviews about wait times, parking, noise, and tourist-season crowding. Acknowledge the friction without blaming "summer" as if the guest imagined it. Offer a concrete recovery when you can: a rebook note, a manager follow-up, a clearer wait estimate process for the next rush. Do not argue that other guests loved it that night. That reads as dismissal.`,
      },
      {
        type: 'p',
        html: `Home services and contractors hear complaints about arrival windows, mess left behind, invoice surprises, and incomplete punch lists from Carpinteria to Santa Maria. Your reply should confirm the job address only in general terms, never paste private property details. Invite a site revisit. If the complaint is about a subcontractor, you still own the customer relationship in public. Fix the subcontractor conversation privately.`,
      },
      {
        type: 'p',
        html: `Clinics and professional offices around Goleta, UCSB-adjacent areas, and downtown get reviews about wait times, billing clarity, and bedside manner. Stay HIPAA-aware and privacy-aware: never confirm sensitive details in a public reply. Acknowledge the experience at a high level and move scheduling or billing questions to a phone call. If a review invents clinical facts, keep the public note short and factual without debating a chart in public.`,
      },
      {
        type: 'h2',
        text: 'Templates you can adapt without sounding canned',
      },
      {
        type: 'p',
        html: `Keep a short internal library, not a public Mad Libs sheet. Soft criticism: thank them, restate the issue, invite a call. Hard criticism with a real miss: apologize for the specific miss, name the next step, give a direct line. Wrong business: politely note they may have reviewed another location and offer help finding the right one, then flag. Praise with a small nitpick: thank the praise, address the nitpick, invite them back. Rotate wording so every five-star reply does not clone the same three sentences.`,
      },
      {
        type: 'p',
        html: `Train new managers with three live examples from your own listing, scrubbed of private data. Practice out loud. The goal is a reply that sounds like your shop on a good day, written even when the day was bad. If English and Spanish both matter for your customers, decide who can reply in which language and keep the same standards in both.`,
      },

      {
        type: 'takeaways',
        items: [
          'Triage first: wrong business, real miss, vague rage, or policy violation.',
          'Public replies acknowledge, own what is yours, and invite an offline fix.',
          'Never argue star-by-star, leak private data, or pay for an edited review in public.',
          'Flag spam and wrong-business posts. Do not flag every honest one-star.',
          'Repeated complaints are an operations problem, not a copywriting problem.',
          'Name an owner, reply within days, and keep the company Google login in-house.',
        ],
      },
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Should I delete or ignore a negative Google review?',
        answer:
          'You generally cannot delete a legitimate Google review yourself. Ignoring it for weeks looks abandoned. Reply calmly, invite an offline conversation, and fix the underlying issue when it is real. Flag only posts that break Google\'s policies or are about the wrong business.',
      },
      {
        category: 'seo',
        question: 'Can I offer a discount if they update their review?',
        answer:
          'Do not tie discounts, gifts, or free work to posting or editing a Google review. That reads as an incentive and can violate Google\'s rules. Fix the problem because it is the right operational move. Whether they edit the review is their choice.',
      },
      {
        category: 'seo',
        question: 'What if the review is about a different business?',
        answer:
          'Document it, flag it in Google Business Profile tools, and keep a short internal log. A brief public note that they may have reviewed the wrong listing can help future readers. Do not start a comment war with the reviewer.',
      },
      {
        category: 'seo',
        question: 'Who should write the reply?',
        answer:
          'Someone who can offer a real next step: a manager or owner, not a random staff account improvising at midnight. Use the company Google login that owns the profile so access does not walk out with an employee.',
      },
      {
        category: 'getting-started',
        question: 'Can SBMC handle review replies for us?',
        answer:
          'We help install reply voice, ownership, and habits through review management, often next to Google Business Profile cleanup. The Local Lead Plan is $297/mo, or $2,970/yr, when that bundle fits. We do not fabricate reviews or guarantee a star average. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'how-to-rank-in-google-maps',
    title: 'How to Rank in Google Maps in Santa Barbara County',
    metaTitle: 'How to Rank in Google Maps (Local Pack)',
    metaDescription:
      'How Google Maps and the local pack rank in Santa Barbara County: proximity, prominence, relevance, profile hygiene, reviews, and what is overhyped.',
    category: 'seo',
    excerpt:
      'A practical map of Map Pack ranking for the 805: proximity, prominence, relevance, listing hygiene, reviews, and the myths that waste budget.',
    readTime: '12 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['local-seo', 'google-business-profile', 'seo'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
      'santa-maria-digital-marketing',
    ],
    relatedArticles: [
      'google-business-profile-optimization',
      'local-seo-santa-barbara',
      'how-to-get-more-google-reviews',
    ],
    body: [
      {
        type: 'p',
        html: `Google Maps and the local pack are where a lot of Santa Barbara County demand decides who gets the call. A visitor near the Funk Zone wants dinner. A homeowner in San Roque wants a plumber. A clinic patient in Old Town Goleta wants the closest trustworthy option. The three-pack is not a popularity contest you can buy with a blog post. It is a ranking system that weighs where you are, how prominent you look, and how relevant your listing and pages are to the query.`,
      },
      {
        type: 'p',
        html: `This article merges the practical "how do I rank higher on Google Maps" question with the local search ranking factors owners actually need. It is written for 805 businesses, not a national SaaS checklist. We do this work in <a href="/services/local-seo">Local SEO</a> and in <a href="/services/google-business-profile">Google Business Profile</a> optimization. For the wider county picture, read <a href="/resources/local-seo-santa-barbara">local SEO in Santa Barbara</a>. We will not promise a Map Pack slot. We will explain what usually moves, what is overhyped, and how geography on this coast changes the fight.`,
      },
      {
        type: 'h2',
        text: 'Proximity, prominence, and relevance',
      },
      {
        type: 'p',
        html: `Google has described local results as driven by relevance, distance, and prominence. In practice on the South Coast, that means three questions. Does your listing and site match what the searcher typed? How far is your pin (or service area) from where they are searching? How well known and trustworthy does the business look through reviews, links, mentions, and listing history? Owners who only chase one of the three usually stall.`,
      },
      {
        type: 'h3',
        text: 'Proximity is not optional math',
      },
      {
        type: 'p',
        html: `A Goleta pin rarely wins a downtown Santa Barbara pack for a query searched on State Street. A Santa Maria HVAC company will not consistently beat a closer Santa Barbara truck for a Mesa emergency just because the website has nicer photos. Distance still matters. If your category is storefront-driven, the address on the profile is the gravity well. If you are a service-area business, Google still models where you work from and where you serve. Pretending your pin is somewhere you are not is how listings get suspended. Rank the geography you can actually win.`,
      },
      {
        type: 'h3',
        text: 'Prominence is trust that accumulates',
      },
      {
        type: 'p',
        html: `Prominence is why a long-running restaurant on Coast Village Road with steady reviews can outrank a newer spot with a louder ad budget in Maps. Reviews, photos, brand searches, links from real local entities, and consistent citations all feed the story that you are a real, known business. You cannot fake that overnight with five spammy directory submissions. You can earn it with accurate listings, honest reviews, and mentions from places that would talk about you anyway: associations, sponsors, partners, local news.`,
      },
      {
        type: 'h3',
        text: 'Relevance is categories, services, and pages',
      },
      {
        type: 'p',
        html: `Primary category, secondary categories, services on the profile, and matching service pages on the site tell Google what you do. A plumber listed as a general contractor first will fight themselves. A dental office with no services filled out leaves ranking to chance. Thin city pages that repeat the same paragraph for every ZIP code do not create relevance. Clear pages for the jobs you actually sell in the cities you actually serve do.`,
      },
      {
        type: 'blockquote',
        text: 'If your pin, your categories, and your pages tell three different stories, Maps will not invent a fourth story that favors you.',
      },
      {
        type: 'h2',
        text: 'Listing hygiene that still wins fights',
      },
      {
        type: 'p',
        html: `Before you obsess over obscure ranking folklore, finish the basics on the profile. Correct name, address, and phone that match the site. Accurate hours, including holiday hours after Fiesta and winter closures. The right primary category. Services filled with real descriptions. Fresh photos of the space, the crew, and the work. A website field that loads on a phone. Messaging turned on only if someone answers. Product or menu features used when they apply. Our <a href="/resources/google-business-profile-optimization">Google Business Profile checklist</a> walks the full pass.`,
      },
      {
        type: 'ul',
        items: [
          'One primary category that matches the money job, not a vanity label.',
          'NAP consistency across the site, profile, and major citations.',
          'Photos that look current, not a 2019 lobby shot forever.',
          'Services and description language that match how customers search.',
          'No keyword stuffing in the business name.',
          'No fake addresses for service-area businesses.',
        ],
      },
      {
        type: 'p',
        html: `Duplicate listings and old owner profiles still haunt the 805. If searchers land on a closed pin or a former DBA, your reviews and calls split. Clean duplicates carefully. Do not create a second listing to "start fresh" unless you truly have a second location.`,
      },
      {
        type: 'h2',
        text: 'Reviews and photos as ranking and conversion',
      },
      {
        type: 'p',
        html: `Review velocity and specificity help prominence and help humans choose you. A steady stream of recent, detailed reviews beats a museum of five-star one-liners from three owners ago. Ask after real jobs. Same link for everyone. No incentives. No gating. Reply to praise and criticism. Details on that habit live in <a href="/resources/how-to-get-more-google-reviews">how to get more Google reviews</a> and in <a href="/resources/how-to-respond-to-negative-reviews">how to respond to negative reviews</a>.`,
      },
      {
        type: 'p',
        html: `Photos signal that the business is alive. Update them. Show the truck, the suite entrance on Hollister, the table settings, the job site when customers allow it. Customer photos in reviews help too. You cannot require them.`,
      },
      {
        type: 'h2',
        text: 'Website and on-page support for Maps',
      },
      {
        type: 'p',
        html: `The profile is not alone. Google still looks at your site. Fast pages, clear service pages, honest city coverage, and structured data that matches the real NAP help. Organic local results and the Map Pack are different inventories, but they share trust signals. If the site is a thin brochure with a contact form buried under stock video, even a clean listing underperforms because converters bounce. Local SEO without a usable site is half a system.`,
      },
      {
        type: 'p',
        html: `Links still matter as prominence, not as a shopping list of paid guest posts. Earn mentions from chambers, sponsorships, suppliers, and community partners. A single relevant local link often beats twenty irrelevant directory dumps. We will not sell you a package of fake links with invented metrics.`,
      },
      {
        type: 'h2',
        text: 'Myths that waste 805 budgets',
      },
      {
        type: 'ul',
        items: [
          'Buying reviews or gating five-stars into Maps.',
          'Keyword-stuffing the business name.',
          'Creating fake storefront pins for service-area work.',
          'Forty near-duplicate neighborhood pages with the same paragraph.',
          'Guaranteed first-place Map Pack contracts.',
          'Ignoring proximity and blaming "the algorithm" for a far pin.',
        ],
      },
      {
        type: 'p',
        html: `Paid ads can sit above or beside organic packs. They are not the same as Maps ranking. Local Services Ads and Google Ads can fill the phone while SEO compounds. They do not replace listing hygiene. If you are spending on ads into a broken profile, you are paying to advertise a weak pin.`,
      },
      {
        type: 'h2',
        text: 'How to measure without kidding yourself',
      },
      {
        type: 'p',
        html: `Track discovery searches versus direct brand searches in the profile insights. Track calls, messages, and direction requests. Track whether those calls become booked jobs. A rank tracker screenshot from one ZIP on a Tuesday is a weak north star. Your close rate and job value matter more. Pair Maps work with honest call tracking when you need attribution. See <a href="/resources/track-calls-and-leads-from-google">track calls and leads from Google</a> when you are ready for that layer.`,
      },
      {
        type: 'h2',
        text: 'What we will and will not promise',
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. will clean and strengthen the profile, align categories and pages, build review habits, and measure calls instead of vanity charts. The Local Lead Plan is $297/mo, or $2,970/yr, when that bundle is the right home for the site, Local SEO, and follow-up. We will not guarantee a Map Pack position. We will not stuff the business name. We will not invent reviews or client results. Founded in 2026 by Ruben Ruiz, who has marketed local businesses since 2007, we would rather show you the system than sell a miracle date.`,
      },
      {
        type: 'p',
        html: `If you want a straight look at your pin, your categories, and whether your geography is even winnable for the queries you care about, book a 20-minute call. Email info@sbmc.io or call (805) 307-7600. Bring profile access. Start at <a href="/book-a-call">book a call</a> or compare scope on <a href="/pricing">pricing</a>.`,
      },

      {
        type: 'h2',
        text: 'How geography on this coast changes the fight',
      },
      {
        type: 'p',
        html: `Santa Barbara County is not one market. Downtown and the waterfront behave like dense storefront competition. Old Town Goleta and Hollister corridors mix campus-adjacent demand with local residents. Montecito and Coast Village Road lean on reputation and proximity for high-touch services. Carpinteria and Summerland sit between tourist pass-through and resident need. Santa Maria and North County often have different competitor sets and different drive-time expectations. A strategy copied from a national "local SEO checklist" that ignores those differences wastes months.`,
      },
      {
        type: 'p',
        html: `Searchers also move. A visitor standing near Stearns Wharf is not the same intent as a homeowner in San Roque planning a remodel. "Near me" inherits the phone's location. Branded searches inherit your prominence. Service-plus-city searches inherit your pages and citations. Build for the mix you actually want. If you only want residential jobs inside a drive radius, say that on the site and in the profile service areas instead of pretending you are everywhere.`,
      },
      {
        type: 'h2',
        text: 'Categories, services, and the money job',
      },
      {
        type: 'p',
        html: `Pick the primary category for the work that pays the bills, not the category that sounds broadest. Secondary categories should be true. Services fields should use the words customers type: "tankless water heater install," "emergency plumbing," "family dentistry," not internal jargon. When Google offers service form fields, fill them with plain descriptions and optional price ranges only when you are willing to honor them.`,
      },
      {
        type: 'p',
        html: `Posts on the profile are not a ranking silver bullet, but they are a useful hygiene and photo channel when someone actually maintains them. A dead posts tab with one announcement from last Fiesta looks abandoned. A short weekly post with a real photo from a job or a seasonal hour change looks alive. Do not stuff posts with keyword nonsense.`,
      },
      {
        type: 'h2',
        text: 'Citations and mentions without the directory farm',
      },
      {
        type: 'p',
        html: `Keep the big platforms consistent: Apple, Bing, major data aggregators, industry directories that customers actually use. Fix duplicates instead of submitting fifty more spam listings. Earn mentions from chambers, sponsorships, suppliers, and community partners when the relationship is real. A single relevant feature from a local publication beats a page of unrelated profile badges.`,
      },
      {
        type: 'p',
        html: `If you changed names from Ranking-era branding or a DBA, clean the trail. Old citations that point to dead phone numbers split prominence. Redirect the website. Update the profile. Claim or close old profiles carefully. Half-finished rebrands are a quiet ranking tax.`,
      },

      {
        type: 'takeaways',
        items: [
          'Maps ranking leans on proximity, prominence, and relevance together.',
          'A Goleta pin and a downtown pin are not interchangeable.',
          'Finish listing hygiene before chasing folklore tactics.',
          'Review velocity, photos, and honest categories beat stuffed names.',
          'Site pages and real local mentions support the profile. Fake links do not.',
          'Measure calls and booked jobs, not a single ZIP rank screenshot.',
        ],
      },
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Can I rank in Google Maps without a physical address?',
        answer:
          'Service-area businesses can show in local results without displaying an address, but you still need a legitimate business setup and honest service areas. Do not invent a storefront pin. Misrepresenting location is a suspension risk.',
      },
      {
        category: 'seo',
        question: 'Do more Google reviews guarantee Map Pack ranking?',
        answer:
          'No. Reviews help prominence and help people choose you, but proximity and relevance still matter. A huge pile of old, generic reviews will not beat a closer, better-matched competitor every time.',
      },
      {
        category: 'seo',
        question: 'Should I put keywords in my Google Business name?',
        answer:
          'No. Use your real business name. Keyword stuffing the name violates Google\'s guidelines and can trigger suspensions. Put service language in categories, services, and your website pages instead.',
      },
      {
        category: 'seo',
        question: 'Are Map Pack and organic local results the same?',
        answer:
          'No. They are different inventories that share some trust signals. You can show in one and not the other. Fund the profile and the pages, or admit which channel you are ignoring.',
      },
      {
        category: 'getting-started',
        question: 'What does SBMC charge for Local SEO help?',
        answer:
          'The Local Lead Plan is $297/mo, or $2,970/yr, when the bundled website, Local SEO, and follow-up fit. Heavier listing rebuilds may be scoped separately after a 20-minute call. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'how-long-does-seo-take',
    title: 'How Long Does SEO Take? What Changes, and in What Order',
    metaTitle: 'How Long Does SEO Take for Local Business',
    metaDescription:
      'What local SEO work changes first for Santa Barbara County businesses: listing hygiene, pages, reviews, then compounding visibility. No promised ranking dates.',
    category: 'seo',
    excerpt:
      'An honest order of operations for local SEO in the 805. What you can fix now, what compounds later, and why calendar promises are marketing theater.',
    readTime: '11 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['seo', 'local-seo', 'google-business-profile'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'how-much-does-seo-cost-santa-barbara',
      'local-seo-santa-barbara',
      'how-to-rank-in-google-maps',
    ],
    body: [
      {
        type: 'p',
        html: `Owners ask "how long does SEO take" when they are about to hire someone, pause ads, or decide whether to keep a site that never rings. The honest answer in Santa Barbara County is not a single calendar promise. It is an order of operations. Some problems clear as soon as you fix them. Some signals only matter after Google recrawls and competitors keep moving. Anyone selling a fixed date for first place in the Map Pack is selling comfort, not a process.`,
      },
      {
        type: 'p',
        html: `This guide explains what usually changes first, what compounds later, and which dependencies slow the work down on the South Coast. It pairs with <a href="/services/seo">SEO</a>, <a href="/services/local-seo">Local SEO</a>, and our cost guide on <a href="/resources/how-much-does-seo-cost-santa-barbara">how much SEO costs in Santa Barbara</a>. We will not invent a universal timeline. We will show the sequence so you can judge whether a proposal is real work or theater.`,
      },
      {
        type: 'h2',
        text: 'Why promised SEO timelines fail locally',
      },
      {
        type: 'p',
        html: `Two plumbers in the same ZIP do not start from the same baseline. One has a clean Google Business Profile, ten years of reviews, and a fast site. The other has a duplicate listing, a keyword-stuffed name, and a homepage that takes eight seconds on cellular near the 101. Their "SEO timelines" are not the same project. Geography matters too. Winning "dentist near me" while standing on State Street is a different fight than winning a specialized service searched from Santa Maria with fewer competitors.`,
      },
      {
        type: 'p',
        html: `Google also changes how results look. Ads, Local Services Ads, Map Pack, and organic listings share the screen in different mixes by query. Your organic climb can look invisible if paid units expand. That is not failure of the page. It is inventory. Measure calls and jobs, not only a rank screenshot.`,
      },
      {
        type: 'blockquote',
        text: 'Ask what changes in which order. If the answer is only a month count and a guaranteed position, keep interviewing.',
      },
      {
        type: 'h2',
        text: 'Stage 1: Fix what you fully control',
      },
      {
        type: 'p',
        html: `The first stage is hygiene and clarity. Correct NAP on the site and profile. Remove or mark closed duplicate listings carefully. Set the right primary category. Fill services. Update hours. Replace broken phone links. Make the click-to-call button work on a phone. Publish accurate service pages for the jobs you sell. Redirect dead URLs from an old redesign. These changes do not require Google to invent new trust. They remove confusion you introduced.`,
      },
      {
        type: 'ul',
        items: [
          'Profile and site NAP match, including suite and phone.',
          'Primary category matches the money service.',
          'Service pages exist for real offers, not thin stubs.',
          'Mobile speed and tap-to-call stop leaking converters.',
          'Indexation issues, noindex accidents, and orphan pages get fixed.',
          'Review link and reply ownership are assigned to a real person.',
        ],
      },
      {
        type: 'p',
        html: `You should feel operational progress here even before rankings move: fewer wrong-number calls, fewer customers showing up during closed hours, clearer form leads. If a vendor skips this stage and jumps to "content rockets," they are decorating a broken listing.`,
      },
      {
        type: 'h2',
        text: 'Stage 2: Earn signals that have to accumulate',
      },
      {
        type: 'p',
        html: `Reviews, photos, links, brand searches, and consistent citations accumulate. You can start the habits immediately. The ranking effect is not a light switch. A Goleta clinic that begins asking for honest Google reviews after every visit builds prominence over a series of real jobs. A Carpinteria contractor that earns a chamber mention and a supplier feature builds prominence differently than a directory blast.`,
      },
      {
        type: 'p',
        html: `This is also where competitor movement shows up. If three HVAC companies on the South Coast improve profiles in the same season, your relative position can stall even while your listing gets healthier. That is competition, not proof the work failed. Keep shipping the system: reviews, photos, pages, and follow-up.`,
      },
      {
        type: 'h3',
        text: 'What "movement" looks like before first place',
      },
      {
        type: 'p',
        html: `Useful early signs are boring. Discovery searches on the profile rise. Direction requests rise for storefronts. Calls from the listing rise. Query impressions for service pages rise in Search Console. You may appear in the pack for longer-tail or off-peak queries before head terms. You may win more often when the searcher is closer to your pin. None of that is a promise of a date. It is how compounding usually appears when the baseline was weak.`,
      },
      {
        type: 'h2',
        text: 'Stage 3: Conversion and follow-up decide whether SEO "worked"',
      },
      {
        type: 'p',
        html: `Ranking without answering the phone feels like SEO failed. In the 805, crews and clinics lose jobs while a tech is on Hollister or a desk is at lunch. Missed-call text-back, clear routing, and a full CRM matter as much as the page that earned the tap. If leads sit overnight, you will blame SEO for an operations leak. Fix speed-to-lead in parallel. See <a href="/resources/speed-to-lead-follow-up-systems">speed-to-lead follow-up systems</a>.`,
      },
      {
        type: 'p',
        html: `Website friction belongs here too. A slow page, a buried phone number, or a form that errors on Safari will turn Map Pack traffic into bounce reports. Sometimes the highest leverage "SEO" task is conversion repair. That is why redesign and SEO should talk to each other instead of fighting over budget.`,
      },
      {
        type: 'h2',
        text: 'Dependencies that stretch the calendar',
      },
      {
        type: 'ul',
        items: [
          'Waiting on logins, photos, and service copy from the owner.',
          'Legal or brand reviews that stall page launches.',
          'A suspended or unverified Google Business Profile.',
          'A site migration with redirect debt.',
          'Seasonality: tourist summers and quiet winters change query mix.',
          'Categories with strong incumbents and dense review histories.',
        ],
      },
      {
        type: 'p',
        html: `Be honest about scope. A brand-new practice on the Mesa with two reviews is not in the same queue as a ten-year restaurant near Coast Village Road. A service-area business recovering from a suspension is not in the same queue as a clean storefront pin. If your profile is suspended, stop asking about ranking dates and start with reinstatement. Read <a href="/resources/google-business-profile-suspended">Google Business Profile suspended</a>.`,
      },
      {
        type: 'h2',
        text: 'Where ads fit while SEO compounds',
      },
      {
        type: 'p',
        html: `Google Ads and Local Services Ads can cover the phone while organic and Maps signals accumulate. That is a budget choice, not a moral failure. The mistake is pausing all paid demand, waiting for a miracle organic date, and then declaring SEO dead when the calendar was fiction. The other mistake is pouring ads into a broken landing page and a silent phone. Paid and organic share the need for conversion hygiene.`,
      },
      {
        type: 'h2',
        text: 'How to evaluate an SEO proposal without a fantasy date',
      },
      {
        type: 'p',
        html: `Ask what happens in month one versus what has to compound. Ask which queries are realistic for your pin and category. Ask how they measure calls and booked jobs. Ask what they will not do: fake reviews, stuffed names, doorway city pages. Ask who writes the pages and who needs your input. Compare that to <a href="/resources/how-to-rank-in-google-maps">how to rank in Google Maps</a> and to <a href="/resources/local-seo-santa-barbara">local SEO in Santa Barbara</a>. If the deck only shows a steep line chart and a trophy, keep walking.`,
      },
      {
        type: 'h2',
        text: 'What we tell clients at SBMC',
      },
      {
        type: 'p',
        html: `We start with listing and site hygiene, then review velocity, then page depth where the market is real, then links you can earn honestly. We report calls, messages, and jobs when tracking is in place. The Local Lead Plan is $297/mo, or $2,970/yr, when the bundled site, Local SEO, and follow-up fit. We will not guarantee rankings or publish a fake "you will be first by date X" clause. Founded in 2026 by Ruben Ruiz (local marketing since 2007), we would rather lose a sale than invent a clock.`,
      },
      {
        type: 'p',
        html: `If you want an order-of-operations read on your listing and site, book a 20-minute call. Email info@sbmc.io or call (805) 307-7600. Bring Search Console and Google Business Profile access if you have them. Start at <a href="/book-a-call">book a call</a>.`,
      },

      {
        type: 'h2',
        text: 'A concrete order of operations you can audit',
      },
      {
        type: 'p',
        html: `Week-by-week calendars sold as guarantees are theater. An audit sequence is not. First, confirm Google Business Profile access, Search Console, analytics, and call logging. Second, repair NAP, categories, duplicates, and obvious site index issues. Third, publish or repair the service pages that match money queries. Fourth, install review ask and reply habits. Fifth, pursue a short list of real local mentions. Sixth, tighten conversion and follow-up so new visibility becomes jobs. You can ask any vendor where you are in that sequence today.`,
      },
      {
        type: 'p',
        html: `Owners can slow every stage by delaying photos, service copy, or login sharing. Agencies can slow every stage by reporting activity without shipping pages. Put dates on deliverables you control: "photos uploaded," "service copy approved," "tracking verified." Leave ranking dates off the contract.`,
      },
      {
        type: 'h2',
        text: 'How competitive categories change expectations',
      },
      {
        type: 'p',
        html: `Dentists, personal injury, HVAC, roofing, and restaurants near dense tourist corridors usually face heavier prominence fights than a niche B2B service with five county competitors. That does not mean niche work is "easy SEO." It means the bottleneck might be clarity and conversion rather than review volume. In heavy categories, even excellent hygiene may leave you trading blows for pack visibility while ads cover the phone. Budget conversations should admit that mix.`,
      },
      {
        type: 'p',
        html: `New brands need a different honesty check. If you opened last month on Hollister with two reviews, the order of operations still starts with hygiene, but prominence is thin. Your near-term wins may be long-tail queries, brand searches, and paid support while reviews and mentions accumulate. Anyone promising to leapfrog ten-year incumbents on head terms because of a proprietary tool is selling a story.`,
      },
      {
        type: 'h2',
        text: 'What to review in monthly SEO meetings',
      },
      {
        type: 'ul',
        items: [
          'What shipped: pages, profile edits, review asks, fixes.',
          'What the profile did: calls, messages, direction requests, discovery vs direct.',
          'What the site did: impressions, clicks, top landing pages, conversions.',
          'What operations did: response times, booked jobs, lost leads.',
          'What competitors changed that you can observe without obsessing.',
          'What is blocked on owner input.',
        ],
      },
      {
        type: 'p',
        html: `If meetings only show keyword rainbow charts, ask for the call and job layer. If meetings only show calls with no shipping list, ask what work landed. SEO takes the time that unfinished foundations and unanswered phones add to it.`,
      },

      {
        type: 'takeaways',
        items: [
          'There is no honest universal SEO deadline for every 805 business.',
          'Fix NAP, categories, pages, and phone friction before chasing folklore.',
          'Reviews, links, and trust accumulate. Habits start now. Effects compound.',
          'Early wins often look like more calls and impressions, not instant first place.',
          'Follow-up and conversion decide whether ranking traffic becomes revenue.',
          'Judge proposals by sequence and measurement, not by a guaranteed date.',
        ],
      },
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Can anyone guarantee first-page SEO by a set date?',
        answer:
          'No honest operator can guarantee rankings on a calendar for every competitive query. Baselines, geography, and competitors differ. Ask for an order of operations and how calls will be measured instead of a promised position.',
      },
      {
        category: 'seo',
        question: 'What should improve first after SEO work starts?',
        answer:
          'Operational clarity: correct hours, working click-to-call, accurate categories, indexable service pages, and cleaner listings. Ranking movement for competitive head terms usually follows after those foundations and accumulating trust signals.',
      },
      {
        category: 'seo',
        question: 'Should I pause Google Ads while waiting on SEO?',
        answer:
          'Not automatically. Ads can cover demand while organic and Maps signals compound, as long as landing pages and phone follow-up work. Pausing paid without a real organic plan often creates a quiet month you blame on SEO.',
      },
      {
        category: 'seo',
        question: 'Why do some competitors seem to rank overnight?',
        answer:
          'You may be seeing a business with years of reviews, a better pin location for that query, a cleaner category match, or paid units mixed into the screen. Screenshot comparisons without context are a weak diagnosis.',
      },
      {
        category: 'getting-started',
        question: 'How does SBMC scope SEO timing?',
        answer:
          'We outline what we will fix first, what has to accumulate, and how we will report calls and jobs. The Local Lead Plan is $297/mo, or $2,970/yr, when that bundle fits. We do not sell guaranteed ranking dates. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'google-business-profile-suspended',
    title: 'Google Business Profile Suspended: What To Do Next',
    metaTitle: 'Google Business Profile Suspended: Fix Guide',
    metaDescription:
      'What to do when your Google Business Profile is suspended in Santa Barbara County: common causes, reinstatement steps, evidence to gather, and what not to try.',
    category: 'seo',
    excerpt:
      'A calm reinstatement playbook for suspended Google Business Profiles in the 805. Causes, evidence, appeals, and the shortcuts that make things worse.',
    readTime: '11 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['google-business-profile', 'local-seo', 'review-management'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'google-business-profile-optimization',
      'service-area-business-google-maps',
      'how-to-rank-in-google-maps',
    ],
    body: [
      {
        type: 'p',
        html: `A suspended Google Business Profile feels like the floor dropped out. Your pin disappears from Maps. The calls that used to come from State Street searches and "near me" queries stop. Staff still answer the phone for existing customers, but the discovery channel goes quiet overnight. This is urgent. It is also fixable more often than panicked Facebook threads suggest, if you stop making it worse.`,
      },
      {
        type: 'p',
        html: `This guide is for Santa Barbara County owners who just saw a suspension, disabled, or verification failure notice. It covers common causes, what evidence to gather, how to appeal without drama, and which "hacks" create second suspensions. We handle this inside <a href="/services/google-business-profile">Google Business Profile</a> work. For everyday optimization after you are reinstated, use the <a href="/resources/google-business-profile-optimization">profile checklist</a>. For service-area rules, see <a href="/resources/service-area-business-google-maps">service-area business Google Maps</a>.`,
      },
      {
        type: 'h2',
        text: 'What suspension usually means',
      },
      {
        type: 'p',
        html: `Google disables listings that appear to break guidelines: fake addresses, keyword-stuffed names, spammy categories, fake engagement, or policy issues around eligibility. Sometimes the trigger is a user report. Sometimes it is an automated review. Sometimes an old duplicate listing or a previous owner's edits come back to haunt a clean shop on Hollister. The public symptom is the same: customers cannot find the live profile the way they used to.`,
      },
      {
        type: 'p',
        html: `Read the notice carefully. Screenshot everything. Note the date. Do not create a brand-new listing as your first move. A second profile for the same business often becomes a second problem.`,
      },
      {
        type: 'h2',
        text: 'Common causes we see on the South Coast',
      },
      {
        type: 'ul',
        items: [
          'Virtual offices or fake storefront pins for service-area businesses.',
          'Business names stuffed with cities and services.',
          'Categories that do not match what you actually sell.',
          'Bought or gated reviews that look like fake engagement.',
          'Duplicate listings after a rebrand, sale, or move from Goleta to Santa Barbara.',
          'Document problems during video or postcard verification.',
        ],
      },
      {
        type: 'p',
        html: `Tourist-facing businesses near the Funk Zone and Coast Village Road sometimes inherit messy history from prior operators. Trades working Santa Maria through Carpinteria sometimes list a friend's address because they lack a public storefront. Both patterns create eligibility fights. Honesty about how the business operates beats a clever pin.`,
      },
      {
        type: 'h2',
        text: 'Stabilize before you appeal',
      },
      {
        type: 'p',
        html: `Fix the profile fields that are clearly wrong before you hit submit on an appeal, when editing is still possible. Remove keyword stuffing from the name. Set categories to match reality. Align the address with where customers can visit, or switch to a proper service-area setup if you have no public storefront. Remove spammy services lists. Make sure the website field points to a live page that matches the business.`,
      },
      {
        type: 'p',
        html: `Gather proof. Business licenses, utility bills, lease agreements, professional licenses, invoices with the business name, dated photos of the storefront or vehicle signage, and a walk-through video that shows where you operate. For a suite on State Street, show the entrance and signage. For a home-based or service-area business, follow Google's current guidance for that model and do not invent a lobby.`,
      },
      {
        type: 'blockquote',
        text: 'Appeals fail when the listing still shows the same guideline problem you are asking Google to ignore.',
      },
      {
        type: 'h2',
        text: 'How to appeal without making noise',
      },
      {
        type: 'p',
        html: `Use Google's official reinstatement or support paths for Business Profiles. Keep the written explanation short and factual: who you are, what the business does, where it operates, what you fixed, and what evidence you attached. Do not rant about competitors. Do not paste a novel. Do not submit five appeals in one afternoon with different stories.`,
      },
      {
        type: 'p',
        html: `If verification is the blocker, complete the method Google offers. Video verification should be steady, well lit, and clearly show the business name and premises as required. Have the person who knows the layout do the walk-through. Blurry phone video shot at dusk behind a dumpster near Cabrillo does not help.`,
      },
      {
        type: 'h3',
        text: 'While you wait',
      },
      {
        type: 'p',
        html: `Keep the website phone number working. Make sure NAP on the site matches the profile you are defending. Tell staff that Maps discovery may be down so they are not surprised by a quiet week. Consider temporary paid search if cash flow depends on inbound calls, but only if landing pages and answer rates are solid. Do not buy reviews "to look active" while suspended. That is gasoline.`,
      },
      {
        type: 'h2',
        text: 'What not to do',
      },
      {
        type: 'ul',
        items: [
          'Creating a second Google Business Profile for the same business as a shortcut.',
          'Keyword-stuffing the name again after a rejection.',
          'Using a friend\'s retail address you do not operate from.',
          'Paying a stranger who promises "guaranteed reinstatement" with no evidence plan.',
          'Arguing policy in public review replies while the listing is down.',
          'Deleting the profile in anger without documenting the state first.',
        ],
      },
      {
        type: 'p',
        html: `Some suspensions are hard because the business model conflicts with guidelines. If you cannot show a real customer-facing presence or legitimate service-area eligibility, marketing copy will not save the pin. We will say that on a call rather than take a fee to pretend otherwise.`,
      },
      {
        type: 'h2',
        text: 'After reinstatement: harden the listing',
      },
      {
        type: 'p',
        html: `When the profile returns, do not celebrate by stuffing the name again. Lock down owner access. Remove ex-employees. Finish the optimization checklist. Restart an honest review ask. Keep photos current. Monitor for duplicate reappearances. Read <a href="/resources/how-to-rank-in-google-maps">how to rank in Google Maps</a> for the ranking system you are re-entering. Suspension recovery is not the same as ranking strategy, but a clean profile is the door back in.`,
      },
      {
        type: 'h2',
        text: 'How SBMC helps',
      },
      {
        type: 'p',
        html: `We help diagnose likely causes, assemble evidence, clean fields, and prepare a clear appeal. We will not promise reinstatement on a date. Google decides. We will not create fake pins or fake reviews to force eligibility. The Local Lead Plan is $297/mo, or $2,970/yr, when ongoing Local SEO and site work fit after the listing is healthy. Suspension rescue itself is often scoped as focused Google Business Profile work after a 20-minute call.`,
      },
      {
        type: 'p',
        html: `If your listing just went down, email info@sbmc.io or call (805) 307-7600 with screenshots of the notice and owner access details. Book through <a href="/book-a-call">book a call</a>. Bring whatever license, lease, or utility proof you already have. Speed matters. Clean facts matter more.`,
      },

      {
        type: 'h2',
        text: 'Verification problems versus suspensions',
      },
      {
        type: 'p',
        html: `Not every blocked listing is a suspension. Sometimes you cannot finish postcard, email, phone, or video verification. Sometimes access was lost when a former manager left a Montecito shop and took the only login. Sometimes Google asks for more documents after a move from a home office to a suite. Treat verification failures as identity and access problems. Treat suspensions as guideline or eligibility problems. The evidence overlaps. The buttons in the dashboard differ.`,
      },
      {
        type: 'p',
        html: `If you never completed verification, prioritize that path before you invent a second profile. If you are suspended after being live, prioritize cleanup and appeal. If you were edited by a former SEO who stuffed the name with "Santa Barbara plumber HVAC roofing," undo that damage before you write a passionate appeal paragraph.`,
      },
      {
        type: 'h2',
        text: 'Evidence packs that tend to help',
      },
      {
        type: 'p',
        html: `Build a single folder. Include business license, professional license when relevant, lease or utility proof matching the address model you claim, site screenshots showing NAP, dated storefront or vehicle photos, and a simple cover note listing files. For service-area businesses, include proof you operate where you say you operate without inventing a lobby. For storefronts on State Street or Linden Avenue, show the door, the sign, and the interior if Google asks for video.`,
      },
      {
        type: 'p',
        html: `Name files clearly. Use the same legal business name across documents. If your public brand differs from the legal entity, explain the DBA in one sentence and show supporting proof. Inconsistent names across license, site, and profile are a common quiet failure.`,
      },
      {
        type: 'h2',
        text: 'Communications while the pin is down',
      },
      {
        type: 'p',
        html: `Tell repeat customers you are reachable by direct link, email, and phone even if Maps discovery is broken. Update social profiles with the correct phone. Make sure your website NAP is perfect so branded searches still convert. If you run Google Ads, confirm landing pages and call tracking still work. Do not ask friends to leave a burst of five-star reviews as a "signal." That is how a suspension becomes a harder spam case.`,
      },
      {
        type: 'p',
        html: `Document every support case number and submission date. If a partner helps, keep owner access in your Google account. You should not need a vendor to hold your listing hostage to finish reinstatement later.`,
      },


      {
        type: 'h2',
        text: 'When reinstatement still fails',
      },
      {
        type: 'p',
        html: `Some listings stay down because the business model conflicts with guidelines, because documents cannot prove the claimed address, or because prior spam history is severe. At that point, stop submitting conflicting appeals every day. Re-read the guidelines for your category. Consider whether a true storefront, a corrected service-area setup, or a different public contact model is required. A marketing agency cannot override Google policy with clever wording.`,
      },
      {
        type: 'p',
        html: `If you operate legitimately and still lose repeated appeals, gather fresher proof and keep the website and phone strong for branded demand. Paid search can bridge discovery temporarily. Fake pins cannot. We will say no to tactics that risk a harder ban even when an owner is desperate for the map icon to return.`,
      },

      {
        type: 'takeaways',
        items: [
          'Screenshot the notice and avoid creating a second listing as panic insurance.',
          'Fix name, address, category, and eligibility issues before appealing.',
          'Gather real proof: licenses, lease, utilities, signage, clear video.',
          'Keep appeals short, consistent, and tied to evidence.',
          'Skip fake pins, stuffed names, and guaranteed-reinstatement vendors.',
          'After return, lock access and harden the profile so you do not repeat the cycle.',
        ],
      },
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Should I create a new Google Business Profile after suspension?',
        answer:
          'Usually no. A second listing for the same business often creates duplicate and spam issues. Fix and appeal the original when possible. Document everything before you make irreversible changes.',
      },
      {
        category: 'seo',
        question: 'How long does reinstatement take?',
        answer:
          'Google decides, and the wait varies by case. We will not invent a promised calendar. Focus on cleaning guideline problems and submitting clear evidence rather than filing repeated conflicting appeals.',
      },
      {
        category: 'seo',
        question: 'Can a service-area business get reinstated without a storefront?',
        answer:
          'Many can, when they follow Google\'s service-area rules and do not fake a public address. Honesty about how you operate beats a borrowed lobby photo. See our service-area Maps guidance for the model differences.',
      },
      {
        category: 'seo',
        question: 'Does buying reviews help a suspended listing?',
        answer:
          'No. Fake or incentivized reviews can deepen policy problems. Do not try to look "active" with purchased stars while you are suspended or appealing.',
      },
      {
        category: 'getting-started',
        question: 'Can SBMC handle a suspension appeal?',
        answer:
          'We help with diagnosis, cleanup, evidence packing, and appeal drafting as Google Business Profile work. Outcomes are Google\'s. Ongoing Local SEO may fit the Local Lead Plan at $297/mo or $2,970/yr after the listing is healthy. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'why-your-website-isnt-getting-leads',
    title: 'Why Your Website Is Not Getting Leads',
    metaTitle: 'Why Your Website Is Not Getting Leads',
    metaDescription:
      'Why Santa Barbara County websites get visits and no calls: traffic quality, mobile friction, unclear offers, weak proof, and slow follow-up. A practical diagnosis.',
    category: 'websites',
    excerpt:
      'A diagnosis for 805 sites that get traffic and silence. Traffic quality, phone friction, offer clarity, proof, and follow-up before you blame the homepage font.',
    readTime: '11 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: [
      'conversion-optimization',
      'website-redesign',
      'web-design',
    ],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'web-design-cost-santa-barbara',
      'speed-to-lead-follow-up-systems',
      'how-to-rank-in-google-maps',
    ],
    body: [
      {
        type: 'p',
        html: `A quiet website is one of the most expensive feelings in Santa Barbara County business. Analytics shows sessions. The phone does not ring. Forms sit empty. Owners redesign the logo, add a parallax hero, and wonder why a visitor from Coast Village Road still will not tap Call. Most of the time the site is not "ugly." It is unclear, slow, hard to dial on a phone, aimed at the wrong traffic, or connected to a follow-up habit that loses the lead after the click.`,
      },
      {
        type: 'p',
        html: `This guide is a diagnosis order for local service and storefront sites. It backs <a href="/services/conversion-optimization">conversion optimization</a>, <a href="/services/website-redesign">website redesign</a>, and <a href="/services/web-design">web design</a>. If traffic itself is the hole, pair this with Maps and SEO reading. If traffic is fine and nobody answers, pair it with <a href="/resources/speed-to-lead-follow-up-systems">speed-to-lead follow-up</a>. We will not invent a conversion rate benchmark for your category. We will show where leads usually die.`,
      },
      {
        type: 'h2',
        text: 'Separate traffic problems from conversion problems',
      },
      {
        type: 'p',
        html: `Open analytics with two questions. Are qualified people arriving? When they arrive, can they take a clear next step? A site that ranks for a broad tourist query may get sessions that will never buy a $12,000 HVAC job in San Roque. A site that ranks for the right job but hides the phone under a hamburger menu is a conversion failure. Mixing those diagnoses burns redesign budgets.`,
      },
      {
        type: 'ul',
        items: [
          'Check top landing pages and queries, not only total sessions.',
          'Segment mobile versus desktop. Most 805 service research happens on phones.',
          'Look at scroll depth and click maps if you have them.',
          'Count calls and forms separately from "engagement" vanity metrics.',
          'Compare weekday versus weekend if your trade depends on emergency timing.',
        ],
      },
      {
        type: 'p',
        html: `If almost nobody reaches the site, fix discovery first: Google Business Profile, Local SEO, or ads. Decorating a page nobody visits will not create leads. If people arrive and leave in seconds, stay on this page.`,
      },
      {
        type: 'h2',
        text: 'The phone number has to be obvious on a phone',
      },
      {
        type: 'p',
        html: `Local service businesses still live on calls. If the number is a tiny footer link, a image of a business card, or a form-only philosophy copied from a SaaS template, you will lose Goleta and Santa Maria callers who intended to dial in thirty seconds. Put a tap-to-call number in the header. Repeat it near the offer. Make sure tracking numbers still dial through. Test on iOS and Android on cellular, not only on office Wi-Fi.`,
      },
      {
        type: 'p',
        html: `Forms should ask for the minimum you need: name, phone or email, what they need, and urgency. Long applications feel like homework. If you need more detail, ask after the first response. Error states should be readable. Autofill should work. If your form breaks on Safari, you are quietly deleting leads.`,
      },
      {
        type: 'h2',
        text: 'Offer clarity beats clever headlines',
      },
      {
        type: 'p',
        html: `The first screen should say who you help, what you do, and what to do next. "Elevating experiences since forever" helps no one looking for a root canal near State Street or a water heater on the Mesa. Name the service. Name the area when it matters. Show the next step: call, book, or request an estimate. One primary CTA. Secondary links can exist. Five equal buttons is a committee decision, not a layout.`,
      },
      {
        type: 'blockquote',
        text: 'If a stranger cannot tell what you sell in five seconds on a phone, the brand story can wait.',
      },
      {
        type: 'p',
        html: `Service pages need the same clarity. A homepage alone rarely converts specialized jobs. Create pages for the work that pays. Write like a human who has done the job in Santa Barbara County weather and permitting reality, not like a synonym generator.`,
      },
      {
        type: 'h2',
        text: 'Proof and friction',
      },
      {
        type: 'p',
        html: `Visitors decide with thin trust. Show recent Google review excerpts you have permission to surface, real job photos, licenses, service area, and who answers the phone. Stock photos of handshakes do less than a crew photo outside a recognizable local streetscape. Do not invent awards or review counts. If you are new, say what is true: who leads the work, what you specialize in, how scheduling works.`,
      },
      {
        type: 'p',
        html: `Friction kills intent. Auto-play video on cellular near the Funk Zone burns patience. Pop-ups that cover the phone number on load are self-sabotage. Chat widgets that open with a delay while hiding tap-to-call can help or hurt depending on whether a human is behind them. Interstitial "are you a homeowner?" quizzes before any content belong in a rare, tested minority, not as a default.`,
      },
      {
        type: 'h2',
        text: 'Speed and technical leaks',
      },
      {
        type: 'p',
        html: `Core Web Vitals are not a trophy. They are whether the page becomes usable before the visitor leaves. Compress images. Kill unused scripts. Host on something that responds. A beautiful redesign that scores poorly on a midrange Android phone will lose the same leads the old site lost. Test real devices. Ask someone outside the company to complete a call and a form without coaching.`,
      },
      {
        type: 'p',
        html: `Also check tracking. If call tracking numbers fail, if Google Analytics is double-counting, or if form webhooks die into a spam folder, you will think the site generates nothing when leads are simply invisible. Attribution problems masquerade as conversion problems.`,
      },
      {
        type: 'h2',
        text: 'Follow-up is part of the website',
      },
      {
        type: 'p',
        html: `A lead that waits until morning often books the competitor who texted back from a job near Hollister. The site did its job. The system after the form did not. Missed-call text-back, routing, and a full CRM turn website intent into conversations. If your "website leads" report is empty because nobody logged the calls that came from the listing, fix measurement and speed-to-lead before you rebuild the hero again.`,
      },
      {
        type: 'h2',
        text: 'When redesign is the right tool',
      },
      {
        type: 'p',
        html: `Redesign when information architecture is wrong, templates cannot support service pages, mobile layout is broken beyond patching, or the brand genuinely confuses buyers. Optimization is enough when the structure is sound and the leaks are CTA placement, copy, speed, and proof. We would rather patch a working skeleton than sell a full rebuild you do not need. Cost context lives in <a href="/resources/web-design-cost-santa-barbara">web design cost in Santa Barbara</a>.`,
      },
      {
        type: 'h2',
        text: 'What we do at SBMC',
      },
      {
        type: 'p',
        html: `We diagnose traffic versus conversion, fix phone and form paths, clarify offers, and rebuild when the template is the blocker. The Local Lead Plan is $297/mo, or $2,970/yr, when the bundled marketing site, Local SEO, and follow-up fit. Heavier redesigns are scoped separately. We will not promise a lead volume. We will show you where the leaks are on a 20-minute call.`,
      },
      {
        type: 'p',
        html: `Email info@sbmc.io or call (805) 307-7600. Bring analytics access and a screen recording of your own mobile visit if you can. Start at <a href="/book-a-call">book a call</a> or skim <a href="/pricing">pricing</a>.`,
      },

      {
        type: 'h2',
        text: 'Traffic quality checks specific to local sites',
      },
      {
        type: 'p',
        html: `Look at landing pages that attract job seekers, wholesale vendors, or tourists researching something you do not sell. A wine-country lodging query landing on a contractor page helps nobody. A UCSB student searching for a quick lunch is not a buyer for a $40,000 remodel. If blog experiments pulled irrelevant organic traffic, prune or retarget those pages. If ads point to the homepage instead of a matching service page, fix the destination before you blame the design system.`,
      },
      {
        type: 'p',
        html: `Brand traffic should convert better than cold discovery traffic. If brand visitors still do not call, the trust or contact path is broken. If only brand visitors convert and discovery visitors bounce, the offer or proof is weak for strangers. Those two diagnoses lead to different tasks.`,
      },
      {
        type: 'h2',
        text: 'Page-level patterns that hide the next step',
      },
      {
        type: 'p',
        html: `Long storytelling heroes with no phone button lose urgent intent. Carousel banners that rotate the CTA confuse people mid-tap. "Request a consultation" language when customers want "Call now for emergency service" mismatches tone. Maps embeds that scroll-hijack on mobile make users fight the page. Cookie banners that cover the click-to-call bar are an own goal. Fix the obvious before debating brand fonts.`,
      },
      {
        type: 'p',
        html: `Service area pages should set expectations. If you do not travel past a certain drive time from Santa Barbara toward North County, say so. Visitors outside the area who submit forms and never hear back leave angry reviews. Qualification is part of conversion, not a failure of marketing.`,
      },
      {
        type: 'h2',
        text: 'A one-hour owner audit you can run today',
      },
      {
        type: 'ul',
        items: [
          'Open the site on your phone on cellular and time to first usable paint.',
          'Tap every phone number and submit a test form.',
          'Ask a friend to find pricing expectations, service area, and how to book in one minute.',
          'Compare the homepage promise to the top three Google queries you care about.',
          'Call your own main number after hours and note what happens.',
          'Check whether yesterday\'s form leads received a reply the same day.',
        ],
      },
      {
        type: 'p',
        html: `Write down the first three failures. Those are the sprint. A six-month redesign proposal can wait until the phone path works.`,
      },

      {
        type: 'takeaways',
        items: [
          'Split traffic problems from conversion problems before you redesign.',
          'Tap-to-call and short forms beat clever, phone-free layouts for local services.',
          'Say what you do, who you help, and what to do next above the fold on mobile.',
          'Real proof and fast pages reduce bounce better than stock atmosphere.',
          'Follow-up and tracking are part of whether the website "works."',
          'Choose optimization versus redesign based on structure, not boredom with the colors.',
        ],
      },
    ],
    faqs: [
      {
        category: 'websites',
        question: 'We get traffic but no calls. Is the site the problem?',
        answer:
          'Maybe. First confirm the traffic is qualified and that mobile visitors can tap a working phone number or complete a short form. Also confirm calls are being logged. Many "no leads" reports are tracking gaps or slow follow-up.',
      },
      {
        category: 'websites',
        question: 'Do I need a full website redesign to get more leads?',
        answer:
          'Not always. If the structure supports clear service pages and the leaks are copy, CTA placement, speed, or proof, optimization can be enough. Redesign when templates and information architecture cannot support the sales path.',
      },
      {
        category: 'websites',
        question: 'Should every page push a contact form?',
        answer:
          'Local service sites usually need a visible phone number and a simple path to contact. Forms help when callers prefer typing. Forcing a long form as the only option often reduces leads.',
      },
      {
        category: 'websites',
        question: 'Can chat replace a phone number?',
        answer:
          'Chat can help when a human or a well-scoped assistant responds quickly. It should not hide tap-to-call for urgent local jobs. Test both. Measure which path books work.',
      },
      {
        category: 'getting-started',
        question: 'How does SBMC price website lead fixes?',
        answer:
          'The Local Lead Plan is $297/mo, or $2,970/yr, when a bundled marketing site and follow-up fit. Conversion work and redesigns may be scoped after a 20-minute diagnosis. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'speed-to-lead-follow-up-systems',
    title: 'Speed-to-Lead Follow-Up Systems for Local Business',
    metaTitle: 'Speed-to-Lead Follow-Up for Local Business',
    metaDescription:
      'How Santa Barbara County businesses answer leads faster: call routing, missed-call text-back, after-hours coverage, and a full CRM that keeps tasks from dying.',
    category: 'ai',
    excerpt:
      'Practical speed-to-lead systems for the 805: routing, missed-call texts, after-hours coverage, and a full CRM so leads do not die in a personal inbox.',
    readTime: '11 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: [
      'marketing-automation',
      'missed-call-text-back',
      'ai-receptionist',
    ],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'cost-of-a-missed-call',
      'why-your-website-isnt-getting-leads',
      'google-ads-for-local-business',
    ],
    body: [
      {
        type: 'p',
        html: `Most local marketing arguments are about ranking and creative. A lot of lost revenue in Santa Barbara County is simpler: the lead reached out, and nobody got back fast enough. The HVAC searcher on a hot afternoon in Goleta dials the next pin. The dental referral from a State Street neighbor texts once and books elsewhere. Your ads and Maps work can look fine while the phone tree quietly deletes jobs.`,
      },
      {
        type: 'p',
        html: `This article is about the system after the click or the ring: routing, missed-call text-back, after-hours coverage, and a full CRM that turns contacts into tasks. It backs <a href="/services/marketing-automation">marketing automation</a> and <a href="/services/missed-call-text-back">missed-call text-back</a>. For the dollar worksheet using your own numbers, see <a href="/resources/cost-of-a-missed-call">cost of a missed call</a>. We will not quote national response-time studies here. Your call logs and close rate are the evidence that matters.`,
      },
      {
        type: 'h2',
        text: 'What speed-to-lead means in practice',
      },
      {
        type: 'p',
        html: `Speed-to-lead is the time from first inbound signal to a human-quality response the customer can use. Signals include phone calls, website forms, Google messages, Facebook leads, and chat. A "response" is a connected conversation, a useful text that opens a thread, or a booked next step. An auto-email that says "we got it" and then silence for a day is not a system. It is a receipt.`,
      },
      {
        type: 'p',
        html: `Trades, clinics, and home services feel this first because intent decays quickly. Hospitality and retail feel it when reservation or event inquiries sit overnight. Professional services feel it when proposal requests wander through shared inboxes. The tooling changes. The principle does not: decide who owns the lead, respond while intent is warm, and record what happened.`,
      },
      {
        type: 'h2',
        text: 'Map the miss path before you buy software',
      },
      {
        type: 'ul',
        items: [
          'Which numbers ring: office, mobile, tracking, after-hours forward?',
          'What happens on no-answer: voicemail, second ring group, nothing?',
          'Where do form leads land: personal email, shared inbox, CRM?',
          'Who is allowed to quote, book, or triage emergencies?',
          'What happens after 6 p.m. and on weekends in tourist season?',
        ],
      },
      {
        type: 'p',
        html: `Draw it on one page. Most 805 shops discover the real workflow is "whoever notices the notification." That fails during Fiesta week, storm weeks, UCSB move-in, and any afternoon when every truck is on the 101. Software cannot fix an unnamed owner.`,
      },
      {
        type: 'h2',
        text: 'Missed-call text-back as the first recovery layer',
      },
      {
        type: 'p',
        html: `When a call hits voicemail, a short text that acknowledges the miss and invites a reply recovers conversations you would otherwise lose. Keep it human. Name the business. Ask for the address or the issue. Stop the sequence when they reply so two techs do not double-text. Put the thread in the full CRM, not only on one person's phone. Details and scope live on our <a href="/services/missed-call-text-back">missed-call text-back</a> service page.`,
      },
      {
        type: 'p',
        html: `Consent and opt-out still matter. Someone who called you is asking for contact about that job, but marketing blasts to that number later need proper opt-in. Keep recovery texts operational. Keep promotional SMS in a separate, compliant lane.`,
      },
      {
        type: 'h2',
        text: 'Routing, after-hours, and Voice AI',
      },
      {
        type: 'p',
        html: `Routing should match urgency. Emergencies go to on-call. Estimate requests can go to a sales queue. Wrong ZIP codes can get a polite decline. After-hours coverage can be a human forward, a structured Voice AI intake, or a text-back that sets expectations until morning. Voice AI helps when the job is capturing name, address, urgency, and a callback window, then creating a task. It fails when someone sells it as a personality that replaces judgment for every Montecito clientele call. See <a href="/services/ai-receptionist">AI receptionist</a> when phone answering is the gap.`,
      },
      {
        type: 'blockquote',
        text: 'The goal is a next step in the full CRM, not a longer voicemail greeting.',
      },
      {
        type: 'h2',
        text: 'Forms and messages need the same ownership',
      },
      {
        type: 'p',
        html: `Website forms, Google Business messages, and ad leads should create contacts and tasks automatically. Someone gets notified. Someone marks done. If leads only email a founder who is on a job site in Carpinteria, you have a hero workflow, not a system. Nightly digests are too slow for emergency trades. Instant notify plus a visible queue is the baseline.`,
      },
      {
        type: 'p',
        html: `Also close the loop with the website. If the site hides the phone or breaks the form, speed-to-lead never gets a chance. Pair this article with <a href="/resources/why-your-website-isnt-getting-leads">why your website is not getting leads</a>.`,
      },
      {
        type: 'h2',
        text: 'Metrics that matter without borrowed studies',
      },
      {
        type: 'p',
        html: `Track how many inbound calls were missed, how many received a text, how many text threads became conversations, and how many booked. Track form response time from submit to first human reply. Track which sources produce jobs, not only leads. Use your average job value and close rate with the <a href="/resources/cost-of-a-missed-call">missed-call worksheet</a> instead of a vendor scare chart. If paid search conversions include unanswered calls, your cost per job is lying to you.`,
      },
      {
        type: 'h2',
        text: 'Install habits, then automation',
      },
      {
        type: 'p',
        html: `Automation amplifies the process you already run. If nobody owns evenings, a text-back still needs a human to finish booking. If two managers reply without seeing each other, you will double-quote. Write a simple playbook: who responds, what they say, when to escalate, when to stop. Train it in a short huddle. Then turn on the triggers.`,
      },
      {
        type: 'ul',
        items: [
          'Named owner for phone recovery and form queue each day.',
          'Templates that sound like your shop, not a blast.',
          'Stop-on-reply rules and opt-out language where required.',
          'Weekly review of misses, response times, and booked jobs.',
          'Seasonal staffing notes for summer visitors and storm weeks.',
        ],
      },
      {
        type: 'h2',
        text: 'How SBMC builds this',
      },
      {
        type: 'p',
        html: `We map the miss path, connect numbers and forms into the full CRM, install missed-call text-back, and add Voice AI when intake on the ring is worth it. The Local Lead Plan is $297/mo, or $2,970/yr, when the bundled site, Local SEO, and follow-up stack fit. Voice AI is $99/mo when that add-on is the right layer. We will not promise you will never lose a call. We will reduce the silent failures you can measure.`,
      },
      {
        type: 'p',
        html: `Email info@sbmc.io or call (805) 307-7600 with a week of call logs if you have them. Book at <a href="/book-a-call">book a call</a>. Bring who currently answers after hours. That person is part of the design.`,
      },

      {
        type: 'h2',
        text: 'Source-by-source response standards',
      },
      {
        type: 'p',
        html: `Phone calls from Google need the fastest path: answer, or text-back on miss, or intake on the ring. Website forms can tolerate a slightly longer window if a human reply still lands while the person is at a desk, but same-day silence is how estimate requests die. Google Business messages feel like texts to the customer. Leaving them unread for two days is a public signal on some surfaces and a lost job in all cases. Paid leads are the most expensive to ignore because you already paid for the click.`,
      },
      {
        type: 'p',
        html: `Write standards per source in one column: target first response, owner role, backup role, after-hours rule. Put that sheet in the full CRM or a shared doc the night tech can open on a phone. When someone is out sick during a storm week, the backup should not invent a new process.`,
      },
      {
        type: 'h2',
        text: 'Scripts that respect Santa Barbara County buyers',
      },
      {
        type: 'p',
        html: `Recovery texts should sound local and specific: thank them for calling, apologize for missing the ring, ask for the address or the issue, promise a call when a tech is free. Avoid slangy marketing blasts. Avoid guilt. Avoid four follow-ups in an hour. For higher-touch clientele in Montecito or Coast Village Road contexts, err on quieter cadence and faster human callbacks. For emergency trades in Goleta and Santa Maria, err on immediate operational questions.`,
      },
      {
        type: 'p',
        html: `If bilingual households are a real share of your callers, prepare Spanish templates with the same stop-on-reply rules. Do not run machine-translated legalese. Have a native speaker approve the lines.`,
      },
      {
        type: 'h2',
        text: 'Connecting marketing spend to response ops',
      },
      {
        type: 'p',
        html: `When Google Ads or Local Services Ads volume rises, missed-call rates often rise with them unless staffing and automation scale too. Before you raise budgets, look at answer rate and text recovery rate. Paying more for rings into a full mailbox raises cost per job even when CPA dashboards look "fine." Share weekly miss reports with whoever controls ad spend. Marketing and operations are one system here.`,
      },
      {
        type: 'p',
        html: `The same is true after a Maps ranking improvement. More discovery calls without a follow-up plan creates angry voicemails and "they never called back" reviews. Build speed-to-lead before you celebrate a pack appearance.`,
      },


      {
        type: 'h2',
        text: 'Staffing reality versus automation fantasy',
      },
      {
        type: 'p',
        html: `Automation cannot create techs who do not exist on a Friday afternoon when the 101 is jammed and three trucks are already booked. Speed-to-lead systems should capture and prioritize, then tell customers the truth about timing. A fast text that books a Monday window beats a slow promise of "someone will be right there" that you cannot keep. Overpromising in recovery messages creates the next negative review.`,
      },
      {
        type: 'p',
        html: `Use the queue to protect focus. Urgent leaks jump the line. Routine tune-ups wait. Estimate-only tire-kickers outside the service area get a polite decline. The full CRM makes those rules visible so a new hire on Saturday does not invent policy under pressure.`,
      },

      {
        type: 'takeaways',
        items: [
          'Speed-to-lead is ownership plus a fast, useful response, not a receipt email.',
          'Map the miss path before buying another tool.',
          'Missed-call text-back recovers hang-ups when threads land in the full CRM.',
          'After-hours needs a defined path: forward, Voice AI intake, or clear text expectations.',
          'Measure misses, replies, conversations, and booked jobs with your own economics.',
          'Automation works after habits and named owners exist.',
        ],
      },
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'Is missed-call text-back enough by itself?',
        answer:
          'It recovers many hang-ups, but someone still has to continue the conversation and book the job. If texts go only to a personal phone with no task, you have moved the leak. Pair text-back with clear ownership in the full CRM.',
      },
      {
        category: 'working-together',
        question: 'Do I need Voice AI if I already text back missed calls?',
        answer:
          'Not always. Text-back recovers misses. Voice AI answers when you want intake on the ring. Some shops need one, some need both, some need better human routing first. We scope that after hearing your call path.',
      },
      {
        category: 'working-together',
        question: 'What should we measure each week?',
        answer:
          'Missed calls, texts sent, conversations started, form response times, and jobs booked by source. Use your job value and close rate for dollar impact instead of a generic industry percentage.',
      },
      {
        category: 'working-together',
        question: 'Will this replace our receptionist?',
        answer:
          'It is not framed as a full replacement for human judgment. The system covers gaps when staff cannot answer, then hands work to people. Clinics and higher-touch clientele still need clear escalation rules.',
      },
      {
        category: 'getting-started',
        question: 'What does SBMC charge for follow-up systems?',
        answer:
          'Follow-up often sits inside the Local Lead Plan at $297/mo or $2,970/yr. Voice AI is $99/mo when added. Exact scope depends on numbers, tools, and after-hours rules. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'how-to-choose-a-marketing-agency',
    title: 'How to Choose a Marketing Agency in Santa Barbara County',
    metaTitle: 'How to Choose a Marketing Agency (805)',
    metaDescription:
      'Questions to ask a marketing agency in Santa Barbara County: proof, scope, reporting, red flags, pricing clarity, and when a freelancer or in-house hire fits better.',
    category: 'strategy',
    excerpt:
      'A buyer\'s checklist for hiring marketing help in the 805. What to ask, which red flags matter, and how to compare proof over promises.',
    readTime: '11 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['strategy', 'local-seo', 'web-design'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
      'santa-maria-digital-marketing',
    ],
    relatedArticles: [
      'agency-vs-freelancer-vs-in-house',
      'how-much-does-seo-cost-santa-barbara',
      'how-long-does-seo-take',
    ],
    body: [
      {
        type: 'p',
        html: `Hiring a marketing agency in Santa Barbara County is a trust decision disguised as a vendor search. You are about to hand someone your Google login, your ad spend, and the story your customers see on State Street searches. A polished deck is easy to buy. A partner who will tell you what will not work for a Goleta pin or a seasonal Carpinteria shop is harder to find. This guide is the filter we wish every owner used before signing.`,
      },
      {
        type: 'p',
        html: `It is written for commercial investigation: you are comparing options, not looking for a motivational poster. Compare this with <a href="/resources/agency-vs-freelancer-vs-in-house">agency vs freelancer vs in-house</a>, our <a href="/about">about</a> page, and <a href="/pricing">pricing</a>. Santa Barbara Marketing Co. was founded in 2026 by Ruben Ruiz, who has marketed local businesses since 2007 (formerly Ranking SB). We are not the only good option in the 805. We are the option that would rather lose a sale than invent proof.`,
      },
      {
        type: 'h2',
        text: 'Start with the job, not the channel fashion',
      },
      {
        type: 'p',
        html: `Write one paragraph that names the outcome you need: more booked jobs from Maps, a website that converts mobile callers, cleaner Google Ads waste, faster follow-up, or a rebuild that does not erase SEO. If you cannot name the job, agencies will sell you the package they prefer to deliver. A restaurant near the Funk Zone and a plumbing company in Santa Maria do not need the same stack.`,
      },
      {
        type: 'ul',
        items: [
          'Primary outcome in one sentence.',
          'Geography you can actually serve.',
          'Budget range for fees versus media spend.',
          'Who inside your company will answer questions and approve pages.',
          'What you already tried and what broke.',
        ],
      },
      {
        type: 'p',
        html: `Bring that paragraph to every sales call. Watch whether the agency asks clarifying questions or jumps to a retainer chart.`,
      },
      {
        type: 'h2',
        text: 'Questions that separate operators from theater',
      },
      {
        type: 'h3',
        text: 'How will you measure success?',
      },
      {
        type: 'p',
        html: `Good answers name calls, forms, booked jobs, cost per job, and qualifying rules. Weak answers name impressions, vanity rank screenshots, and "brand awareness" with no plan to connect them to revenue. Ask how call tracking will work and who owns the numbers when the contract ends.`,
      },
      {
        type: 'h3',
        text: 'What will you not do?',
      },
      {
        type: 'p',
        html: `You want to hear hard nos: no fake reviews, no keyword-stuffed business names, no guaranteed Map Pack slots, no doorway pages for every ZIP, no buying links with invented metrics. An agency that will not name boundaries will discover ethics after your listing is at risk.`,
      },
      {
        type: 'h3',
        text: 'Who does the work?',
      },
      {
        type: 'p',
        html: `Ask for the roles on your account. A senior salesperson and a rotating junior farm is a common pattern. You do not need celebrities. You need named people for strategy, content, ads, and reporting, plus a path to reach them. Ask how local knowledge shows up: do they understand that a downtown pin and a Goleta pin are different fights?`,
      },
      {
        type: 'h3',
        text: 'What does the first 30 to 60 days include?',
      },
      {
        type: 'p',
        html: `Look for access gathering, baseline measurement, listing hygiene, tracking installs, and a written plan. Be wary of "we start creating immediately" with no audit. Also be wary of endless audits with no shipping. For SEO specifically, read <a href="/resources/how-long-does-seo-take">how long SEO takes</a> so calendar promises do not hypnotize you.`,
      },
      {
        type: 'blockquote',
        text: 'Proof over promises: ask for process and boundaries, not a trophy screenshot from another industry in another state.',
      },
      {
        type: 'h2',
        text: 'Red flags worth walking away from',
      },
      {
        type: 'ul',
        items: [
          'Guaranteed rankings or guaranteed lead counts without access to your operations.',
          'Contracts you cannot exit with reasonable notice, explained in English.',
          'Refusal to share logins with you as the owner of your assets.',
          'Review gating, bought stars, or "we\'ll handle the reviews" with a wink.',
          'Reports that never mention calls, jobs, or spend efficiency.',
          'One-size packages that ignore whether you are storefront or service-area.',
        ],
      },
      {
        type: 'p',
        html: `Pricing opacity is another flag. Media spend should be separate from fees. If a number is not an SBMC fee, it should be labeled as a market range or a third-party cost. Our Local Lead Plan is $297/mo, or $2,970/yr. Other scopes are quoted after we hear the job. Compare that clarity to anyone who will not say what is included.`,
      },
      {
        type: 'h2',
        text: 'Agency, freelancer, or in-house',
      },
      {
        type: 'p',
        html: `Agencies fit when you need a stack: site, Local SEO, ads, and follow-up under one plan. Freelancers fit when you need a strong specialist and you can project-manage the rest. In-house fits when volume justifies salary and you still may need specialists for spikes. The comparison article on <a href="/resources/agency-vs-freelancer-vs-in-house">agency vs freelancer vs in-house</a> goes deeper. Do not hire an agency to avoid making decisions. They still need your photos, approvals, and service truths.`,
      },
      {
        type: 'h2',
        text: 'How to run the sales process like an adult',
      },
      {
        type: 'p',
        html: `Talk to two or three options. Give them the same brief. Ask for a sample 90-day outline, not a free full audit that becomes hostage leverage. Check references when offered, and ask those references about reporting honesty during a bad month, not only during a win. Look at their own local presence with the same skepticism you would apply to yours.`,
      },
      {
        type: 'p',
        html: `On legal and medical categories, ask how they handle claims and disclaimers. Marketing partners should not invent legal advice. They should link to primary sources and stay in their lane.`,
      },
      {
        type: 'h2',
        text: 'What good reporting looks like',
      },
      {
        type: 'p',
        html: `Monthly reporting should show what shipped, what moved in calls and leads, what failed, and what changes next. Screenshots without narrative are not management. If spend went up and jobs did not, the report should say so. If SEO hygiene improved but head terms did not move yet, the report should explain the order of operations instead of hiding behind a vanity chart.`,
      },
      {
        type: 'h2',
        text: 'How to evaluate SBMC with the same filter',
      },
      {
        type: 'p',
        html: `Hold us to this document. We sell proof over promises. We will tell you if your pin cannot win a downtown pack from Goleta. We will not guarantee rankings. Cancel anytime with 30-day written notice on retainers we manage. Email info@sbmc.io or call (805) 307-7600. Read <a href="/about">about</a>, compare <a href="/pricing">pricing</a>, then <a href="/book-a-call">book a call</a> with the job paragraph in hand.`,
      },

      {
        type: 'h2',
        text: 'Local knowledge without the hometown theater',
      },
      {
        type: 'p',
        html: `You want an agency that understands proximity fights between downtown and Goleta, tourist seasonality, and service-area rules. You do not need a poem about the waterfront in every proposal. Ask how they would treat your pin and category. Ask what they would refuse to build. Ask how they handle bilingual needs, seasonal hour changes, and Fiesta or graduation spikes if those affect you. Vague "we love the 805" language is not a strategy.`,
      },
      {
        type: 'p',
        html: `Look at their own materials the way a customer would. Is the phone obvious? Are claims specific? Do they invent awards or client results? Apply your red-flag list to the agency website itself. Hypocrisy is useful information.`,
      },
      {
        type: 'h2',
        text: 'Budget architecture: fees, media, tools, and your time',
      },
      {
        type: 'p',
        html: `A cheap monthly fee that requires twenty hours of your time is not cheap. An expensive fee that still dumps writing on you without saying so will stall. Ask how many hours of owner input the plan needs in the first month. Ask which tools you will pay for directly. Ask whether photography, print, or ad spend sit outside the retainer. SBMC states Local Lead Plan pricing as $297/mo or $2,970/yr. Anything else should be scoped in writing after discovery.`,
      },
      {
        type: 'p',
        html: `Be careful with "performance" pricing that sounds aligned but pushes spammy tactics. If incentives reward lead volume without qualification, you may buy junk calls. If incentives reward rankings, you may buy risk. Prefer clear fees and clear reporting.`,
      },
      {
        type: 'h2',
        text: 'A scorecard you can reuse across vendors',
      },
      {
        type: 'ul',
        items: [
          'Clarity on outcomes and out-of-scope items (1 to 5).',
          'Measurement plan quality (1 to 5).',
          'Ethical boundaries named out loud (1 to 5).',
          'Named team and response path (1 to 5).',
          'Local fit for your geography and category (1 to 5).',
          'Contract fairness and asset ownership (1 to 5).',
        ],
      },
      {
        type: 'p',
        html: `Score each vendor the same day you talk so memory does not favor the slickest deck. Share the scorecard with a partner or manager. Hiring marketing help is easier when two people heard the same answers.`,
      },


      {
        type: 'h2',
        text: 'References and sample work that actually help',
      },
      {
        type: 'p',
        html: `When you check references, ask what happened during a slow month. Ask whether reporting stayed honest when spend did not convert. Ask who answered Slack or email when something broke on a Friday. Ask whether the agency pushed back on a bad idea. Glowing praise without friction stories is weaker than a reference who describes a repaired mistake.`,
      },
      {
        type: 'p',
        html: `Sample work should match your problem type. A national ecommerce case study does little for a Santa Maria HVAC company. A local service site with clear phone paths and service pages is more relevant than a flashy brochure for an unrelated brand. If case studies invent metrics without context, treat that as a preview of your future reports.`,
      },

      {
        type: 'takeaways',
        items: [
          'Define the job and geography before you compare packages.',
          'Ask how success is measured in calls and booked jobs.',
          'Demand clear nos: no fake reviews, no ranking guarantees, no login hostage games.',
          'Separate media spend from fees and know what is included.',
          'Choose agency, freelancer, or in-house based on the stack you need to manage.',
          'Judge reporting by honesty in bad months, not only by highlight reels.',
        ],
      },
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'What should I bring to a first agency call?',
        answer:
          'A one-paragraph outcome, your service area, rough budget for fees versus ads, access notes for analytics and Google Business Profile, and what you already tried. Clear inputs get clearer proposals.',
      },
      {
        category: 'working-together',
        question: 'Are long contracts a red flag?',
        answer:
          'Long terms with no exit path are a warning. Reasonable notice periods can be fair. At SBMC, cancel anytime with 30-day written notice on retainers we manage. Ask every vendor to explain exits in plain English.',
      },
      {
        category: 'seo',
        question: 'Should I hire an agency that guarantees Map Pack rankings?',
        answer:
          'Treat ranking guarantees as a red flag. Local results depend on proximity, prominence, relevance, and competitors. Ask for an order of operations and measurement plan instead.',
      },
      {
        category: 'working-together',
        question: 'Who should own the Google and ad accounts?',
        answer:
          'You should. Agencies can receive access. Your business should remain the owner of domains, analytics, ad accounts, and the Google Business Profile so you are not trapped if you switch partners.',
      },
      {
        category: 'getting-started',
        question: 'What does SBMC charge?',
        answer:
          'The Local Lead Plan is $297/mo, or $2,970/yr. Other work is scoped after a 20-minute call. Email info@sbmc.io or call (805) 307-7600, or see pricing on the site.',
      },
    ],
  },
  {
    slug: 'track-calls-and-leads-from-google',
    title: 'How to Track Calls and Leads from Google',
    metaTitle: 'Track Calls and Leads from Google',
    metaDescription:
      'How Santa Barbara County businesses track calls and leads from Google: Business Profile insights, call tracking, forms, ads, and reports that tie to booked jobs.',
    category: 'seo',
    excerpt:
      'A practical tracking setup for 805 businesses: profile insights, call tracking, forms, Google Ads, and reports that connect Google demand to booked jobs.',
    readTime: '11 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['analytics', 'google-ads', 'local-seo'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'google-ads-for-local-business',
      'how-to-rank-in-google-maps',
      'speed-to-lead-follow-up-systems',
    ],
    body: [
      {
        type: 'p',
        html: `If you cannot see which Google clicks become conversations, you are managing marketing with vibes. Santa Barbara County owners often feel this as a fight between the agency report and the front desk: rankings look fine, ads look busy, and nobody can say how many booked jobs came from Maps versus Search versus brand. Tracking calls and leads from Google is how you end that argument with evidence.`,
      },
      {
        type: 'p',
        html: `This guide covers Google Business Profile insights, website call tracking, forms, Google Ads conversion setup, and a reporting habit that ends in booked jobs. It backs <a href="/services/analytics">analytics</a> and pairs with <a href="/services/google-ads">Google Ads</a>. It is not a software catalog. It is the minimum honest system for local businesses from downtown Santa Barbara through Santa Maria.`,
      },
      {
        type: 'h2',
        text: 'Decide what counts as a lead',
      },
      {
        type: 'p',
        html: `Before tools, define the event. For most trades and clinics, a lead is a phone conversation with a qualified prospect, a completed estimate request, or a booked appointment. A direction request on Maps is a warm signal, not always a lead. A bounce after one second is not a lead. A wrong-number call is not a win. Write your definition down so reports stop mixing vanity with revenue.`,
      },
      {
        type: 'ul',
        items: [
          'Qualified phone call (minimum duration you choose).',
          'Form submit with valid contact info.',
          'Google message that receives a real reply thread.',
          'Booked job or appointment attributed to a source.',
          'Explicitly excluded: job seekers, vendors, spam.',
        ],
      },
      {
        type: 'h2',
        text: 'Google Business Profile insights are the first layer',
      },
      {
        type: 'p',
        html: `Inside the profile, review how customers find you (direct versus discovery), which queries appear, and which actions they take: calls, messages, direction requests, website clicks. This is directional, not perfect attribution. It still tells you whether the listing is working for Hollister Avenue searches or mostly brand lookups. Screenshot monthly. Compare to seasonality: summer tourism spikes and quiet February weeks should not surprise you twice.`,
      },
      {
        type: 'p',
        html: `If calls from the profile matter, make sure the phone number on the listing is the number you can track or at least log. If staff answer multiple lines without notes, insights will show calls while your CRM shows mystery.`,
      },
      {
        type: 'h2',
        text: 'Website call tracking without breaking NAP',
      },
      {
        type: 'p',
        html: `Dynamic number insertion can show a tracking number to website visitors while swapping based on source. Used carefully, it tells you whether organic, paid, or direct sessions called. Used carelessly, it creates NAP inconsistency that hurts local SEO. Keep the Google Business Profile number stable when possible. Use tracking numbers on the site and in ads with a plan. Make sure the tracking number still forwards to humans who answer.`,
      },
      {
        type: 'p',
        html: `Set a minimum call length before counting a conversion if your tool allows it. Five-second hang-ups are not jobs. Record call source in the full CRM when the call becomes a contact. The goal is not a prettier chart. The goal is knowing which channel deserves budget.`,
      },
      {
        type: 'h2',
        text: 'Forms, messages, and offline wins',
      },
      {
        type: 'p',
        html: `Form submits should fire a conversion event and create a CRM contact. Include hidden fields for source and landing page when you can. Google messages should be treated like leads with response-time ownership. When a job books offline after a call, mark it offline in ads and in your CRM so Smart Bidding and your brain both see reality. Unobserved wins make Google Ads look worse than it is and SEO look weaker than it is.`,
      },
      {
        type: 'blockquote',
        text: 'If booked jobs never get attributed, every channel report becomes a blame tool.',
      },
      {
        type: 'h2',
        text: 'Google Ads conversion hygiene',
      },
      {
        type: 'p',
        html: `Import or configure conversions for calls from ads, calls from the website, and form submits. Pass enhanced conversions when appropriate. Exclude junk conversion actions from bidding. If you optimize to page views, you will buy page views. Read <a href="/resources/google-ads-for-local-business">Google Ads for local business</a> for campaign strategy. Tracking is the foundation under that strategy.`,
      },
      {
        type: 'p',
        html: `Local Services Ads have their own lead and call reporting. Do not mix LSA lead counts with standard Search conversions in one lazy total without labeling. Different products, different pipes.`,
      },
      {
        type: 'h2',
        text: 'Analytics that local owners will actually use',
      },
      {
        type: 'p',
        html: `Install Google Analytics with clear events for tap-to-call clicks, form starts, and form success. Connect Search Console so you can see queries and landing pages. Look at mobile separately. A desktop report will lie to a plumbing company whose customers search from a driveway in Carpinteria. Keep dashboards small: sessions by channel, leads by channel, jobs by channel, spend, and notes on what changed this month.`,
      },
      {
        type: 'h2',
        text: 'Common failure modes in the 805',
      },
      {
        type: 'ul',
        items: [
          'Three tools counting the same lead three times.',
          'Tracking numbers that forward to a full mailbox.',
          'Agencies keeping ad account ownership so you cannot verify.',
          'No UTM discipline on campaigns and partner links.',
          'SEO reports that never mention calls from the profile or site.',
          'Speed-to-lead so slow that tracked leads never become jobs.',
        ],
      },
      {
        type: 'p',
        html: `Tracking without follow-up is unfinished. Pair this system with <a href="/resources/speed-to-lead-follow-up-systems">speed-to-lead follow-up systems</a>. A perfectly attributed missed call is still a missed call.`,
      },
      {
        type: 'h2',
        text: 'A simple monthly ritual',
      },
      {
        type: 'p',
        html: `Once a month, export profile actions, website leads, ad conversions, and booked jobs. Reconcile duplicates. Write five lines: what we shipped, what volume did, what it cost, what broke, what we change next. Share it with whoever answers the phone so the report matches reality. This is the "honest reporting" promise in practice.`,
      },
      {
        type: 'h2',
        text: 'How SBMC helps',
      },
      {
        type: 'p',
        html: `We install tracking that matches your lead definition, connect it to the full CRM where possible, and report calls and jobs instead of vanity alone. The Local Lead Plan is $297/mo, or $2,970/yr, when the bundled site, Local SEO, and follow-up fit. Analytics projects can also sit beside Google Ads management. We will not invent attributed revenue. We will show you what the pipes can see.`,
      },
      {
        type: 'p',
        html: `Email info@sbmc.io or call (805) 307-7600 with access to Analytics, Ads, and the Google Business Profile if you have them. Book at <a href="/book-a-call">book a call</a>. Bring last month\'s booked job list. That list is the scoreboard.`,
      },

      {
        type: 'h2',
        text: 'UTMs, landing pages, and source discipline',
      },
      {
        type: 'p',
        html: `Tag campaigns with consistent UTM source, medium, and campaign names. Keep a simple naming doc so "google / cpc / brand-sb" does not multiply into twelve spellings. Send ad traffic to matching service pages, not only the homepage. When partners or sponsorships promote you, give them tagged links. Untagged traffic becomes "direct" mystery and starts arguments in monthly meetings.`,
      },
      {
        type: 'p',
        html: `For Google Business Profile website clicks, remember that many users still call from the profile without hitting the site. Profile call tracking and website tracking answer different questions. Report both. Do not pretend website analytics alone explain Maps demand.`,
      },
      {
        type: 'h2',
        text: 'CRM stages that make attribution useful',
      },
      {
        type: 'p',
        html: `In the full CRM, use stages that match reality: new lead, contacted, qualified, estimate set, won, lost. Require a source field. When a front-desk person books a job from a missed-call text, they should still see the original source when it is known. Won jobs without sources create SEO and ads debates that nobody can settle.`,
      },
      {
        type: 'p',
        html: `Lost reasons matter too. "Took too long to reply" is a speed-to-lead problem. "Out of area" is a targeting problem. "Price" is a sales problem. Tracking that only says "lost" teaches nothing.`,
      },
      {
        type: 'h2',
        text: 'Privacy, recordings, and staff trust',
      },
      {
        type: 'p',
        html: `If you record calls, follow applicable notice rules and tell staff how recordings are used. Tracking should improve coaching and budget decisions, not create a gotcha culture. Share dashboards that help the people answering phones see which campaigns create difficult callers versus ideal jobs. When staff trust the system, they log outcomes. When they fear it, they bypass it with personal cells and your attribution collapses.`,
      },
      {
        type: 'p',
        html: `Keep customer data access limited to people who need it. Former employees should lose CRM and Google access on their last day. Tracking stacks often accumulate orphaned users. Clean them in the same monthly ritual as the numbers.`,
      },


      {
        type: 'h2',
        text: 'Building a scoreboard the front desk trusts',
      },
      {
        type: 'p',
        html: `Once a week, compare the CRM new-leads count to Analytics conversions and to Google Ads conversion totals. Expect small gaps. Investigate large ones. If ads show forty conversions and the desk saw twelve conversations, either junk calls are being counted or logging is failing. Fix the definition before you change budgets.`,
      },
      {
        type: 'p',
        html: `Share a one-page scoreboard: calls from profile, calls from site, forms, ads spend, booked jobs, and notes. Hang it where managers see it. When marketing and operations look at the same numbers, speed-to-lead and SEO debates get shorter. When each team keeps a private spreadsheet, the county's quiet lead leaks continue.`,
      },
      {
        type: 'p',
        html: `For multi-location or multi-number shops, label each tracking number and each profile. A Carpinteria line mixed into a Santa Barbara report will send budget to the wrong story. Clean naming is part of analytics, not a nice-to-have.`,
      },

      {
        type: 'takeaways',
        items: [
          'Define a qualified lead before you configure tools.',
          'Use Business Profile insights as directional evidence, then add call and form tracking.',
          'Keep NAP careful when using website tracking numbers.',
          'Feed booked jobs back into ads and CRM so reports match reality.',
          'Optimize Google Ads to real conversions, not page views.',
          'Reconcile channels monthly in a short ritual the front desk recognizes.',
        ],
      },
    ],
    faqs: [
      {
        category: 'seo',
        question: 'Does Google Business Profile show exact search keywords for all calls?',
        answer:
          'Insights give directional query and action data, not perfect per-call keyword attribution for every interaction. Combine profile insights with site call tracking and CRM notes for a fuller picture.',
      },
      {
        category: 'ads',
        question: 'Should every phone call count as a Google Ads conversion?',
        answer:
          'Usually no. Use a minimum call duration and exclude known junk when you can. Bidding on raw rings encourages cheap, low-quality calls.',
      },
      {
        category: 'seo',
        question: 'Will call tracking hurt local SEO?',
        answer:
          'It can if you scramble NAP everywhere or put unstable tracking numbers on the Google Business Profile without a plan. Keep profile NAP consistent and implement site tracking carefully.',
      },
      {
        category: 'working-together',
        question: 'Who should own the analytics and ad accounts?',
        answer:
          'You should own them. Partners get access. Owner-level control protects you if you change vendors and keeps reporting verifiable.',
      },
      {
        category: 'getting-started',
        question: 'Can SBMC set up call and lead tracking?',
        answer:
          'Yes. We set tracking to match your lead definition and report through analytics work and the Local Lead Plan when that bundle fits at $297/mo or $2,970/yr. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
];
