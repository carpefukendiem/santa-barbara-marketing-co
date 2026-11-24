import type { Resource } from './resources';
import type { FaqItem } from './faqs';

export const batch2ResourcesCost: Array<Resource & { faqs: FaqItem[] }> = [
  {
    slug: 'google-ads-cost-santa-barbara',
    title: 'What Google Ads Cost in Santa Barbara (Planning Ranges, Not Quotes)',
    metaTitle: 'Google Ads Cost in Santa Barbara',
    metaDescription:
      'Planning ranges for Google Ads media and management in Santa Barbara County. Market patterns labeled as not SBMC fees, plus the drivers that change spend.',
    category: 'ads',
    excerpt:
      'Honest planning ranges for Google Ads in the 805: media versus management, CPC reality by trade, and what actually moves the monthly number. Market patterns, not our fee schedule.',
    readTime: '12 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['google-ads', 'web-design', 'conversion-optimization'],
    relatedLocations: [
      'santa-barbara-google-ads',
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'google-ads-for-local-business',
      'web-design-cost-santa-barbara',
      'how-much-does-seo-cost-santa-barbara',
    ],
    body: [
      {
        type: 'p',
        html: `Owners ask what Google Ads cost in Santa Barbara because they have seen $500 months and $8,000 months sold as the same product. Those are not the same job. One is a tiny test that never collects enough clicks to learn. The other is a competitive search account with enough media, clean tracking, and a page that can take the call. This article gives planning ranges based on common market patterns in 2026 for local service and retail advertisers in California coastal markets. The ranges are not Santa Barbara Marketing Co. fees. They are not a quote. Use them to sanity-check a proposal, including ours, before you compare two vendors on a single monthly number.`,
      },
      {
        type: 'p',
        html: `Two invoices always sit next to each other. Media spend is what Google charges for clicks or impressions. Management is what someone charges to build, watch, and improve the account. If a pitch blends them into one muddy "ads package," ask for the split. Media belongs to Google. Management belongs to the person doing the work. Our deeper map of where a local budget actually goes lives in <a href="/resources/google-ads-for-local-business">Google Ads for local business</a>. This page is the cost companion: what people commonly pay, and what moves the number.`,
      },
      {
        type: 'h2',
        text: 'Planning ranges (market patterns, not SBMC fees)',
      },
      {
        type: 'p',
        html: `The figures below reflect common patterns among freelancers, small agencies, and in-house programs for one-location local advertisers as of 2026. Your category, close rate, and geo can sit outside them. Treat every band as a planning range, not a Santa Barbara Marketing Co. price and not a promise of a midpoint.`,
      },
      {
        type: 'h3',
        text: 'Media spend to Google',
      },
      {
        type: 'ul',
        items: [
          'Light local test on lower-CPC categories: often $1,000-$2,500/month in media. Planning range, not a quote. Many competitive 805 trades learn slowly at the low end.',
          'Standard one-location service business on mid-to-high CPC terms: commonly $2,500-$6,000/month in media when the goal is enough clicks to read search terms and conversions.',
          'Competitive trades (emergency home services, legal, dental, some clinics) or multi-city coverage: commonly $6,000-$15,000+/month in media. Statewide or national search is a different product.',
          'Brand-only spend can look cheap. It usually protects name search. It is not a growth budget by itself.',
        ],
      },
      {
        type: 'h3',
        text: 'Management fees in the broader market',
      },
      {
        type: 'ul',
        items: [
          'Freelance or light management on a small account: often $500-$1,500/month. Planning range, not a quote.',
          'Standard local Search management (structure, negatives, landing alignment, reporting): commonly $1,000-$3,000/month, or a disclosed percentage of spend as media grows.',
          'Heavier accounts (LSAs plus Search, Performance Max layers, multi-location): commonly $3,000-$6,000+/month depending on complexity.',
          'Setup or rebuild projects billed once: often $750-$3,500 when tracking, structure, and conversion actions need a clean start.',
        ],
      },
      {
        type: 'p',
        html: `Percent-of-spend management can make sense as media scales. Flat fees often make more sense at small spend so nobody is rewarded for waste. Either way, demand the Google invoice and the management line as separate numbers. If a vendor will not show you the ad account, stop.`,
      },
      {
        type: 'blockquote',
        text: 'Compare scopes and media floors, not a single "ads cost" line. A $900 management fee on $400 of media is not the same product as a $1,500 fee on $4,000 of media.',
      },
      {
        type: 'h2',
        text: 'What actually drives Google Ads cost in the 805',
      },
      {
        type: 'h3',
        text: 'Cost per click in your category',
      },
      {
        type: 'p',
        html: `"Emergency plumber Santa Barbara" and "boutique gift shop State Street" do not share a CPC. Auction prices follow demand, competition, and Quality Score. If competitors with strong landing pages and high expected click-through are bidding on the same job queries, you pay more per click. That is not a Santa Barbara tax. It is how Search pricing works. Your close rate and average job value decide whether a $18 click or a $45 click is sane. Set the media floor from that math, not from a round number that felt comfortable in a meeting.`,
      },
      {
        type: 'h3',
        text: 'Geography and how you serve it',
      },
      {
        type: 'p',
        html: `Presence versus interest targeting changes who you pay for. A downtown restaurant may want visitors planning from out of town. A Goleta HVAC company usually wants people physically in the service area. <a href="/santa-barbara-google-ads">Santa Barbara Google Ads</a> work is not interchangeable with a radius that swallows Ventura or a "Santa Barbara interest" setting that bills tourists who will never book a water heater. User location reports tell the truth. Tight geo is often the cheapest optimization you can make.`,
      },
      {
        type: 'h3',
        text: 'Landing pages and tracking',
      },
      {
        type: 'p',
        html: `You pay per click. If the page is slow, vague, or missing a tappable phone number, you paid for a bounce. That waste never appears as a Google line item named "bad website." It appears as cost per conversion you cannot live with. Sending local ads to a homepage with a slider is the usual failure. Send them to a page that restates the query, shows the offer, and asks for the call. Call tracking, form conversion actions, and booked-job feedback cost money or time. They are still cheaper than scaling a campaign that looks good on clicks. This is why <a href="/services/google-ads">Google Ads</a> work and website work often land in the same conversation.`,
      },
      {
        type: 'h3',
        text: 'Query waste and match types',
      },
      {
        type: 'p',
        html: `Informational queries, DIY queries, job-seeker queries, and out-of-area queries will take money until you exclude them. Broad match without a negative habit is how accounts bleed. Search terms review is not glamorous. It is where a large share of "Google Ads is expensive" stories actually come from. Brand campaigns look efficient. Non-brand is where you pay to enter the consideration set. Keep brand. Do not use brand ROAS as proof the account grows the business.`,
      },
      {
        type: 'h2',
        text: 'How to read a Google Ads proposal',
      },
      {
        type: 'p',
        html: `Look for media and management as separate lines. Look for which campaigns exist on day one: brand, non-brand Search, and whether Local Services Ads or Performance Max are proposed before Search basics are clean. Look for conversion tracking ownership. Look for who writes ad copy and who owns negatives. Look for reporting that names calls and form fills, not only CPC and impression share. A proposal that promises a cost per lead without seeing your close rate is selling a number, not a plan.`,
      },
      {
        type: 'ul',
        items: [
          'Media to Google and management fee shown separately on every report.',
          'Geo settings that match how you actually roll trucks or seat guests.',
          'Landing pages named by URL, not "we will use the homepage."',
          'Call and form tracking that the owner can verify.',
          'A first-month plan that prioritizes clean data over daily bid thrash.',
        ],
      },
      {
        type: 'h2',
        text: 'Tiny budgets, competitive trades, and honest floors',
      },
      {
        type: 'p',
        html: `A planning observation, not a quote: many 805 service businesses cannot learn much at a few hundred dollars a month in media on competitive terms. You need enough clicks to read search terms and enough conversions for bidding systems to stop guessing. Cheap categories exist. Emergency trades and high-intent professional services often do not. If the honest media floor is higher than you want to spend this quarter, say so and put the dollar into the site, the listing, or follow-up instead of running a symbolic campaign that never gets a clean read.`,
      },
      {
        type: 'p',
        html: `In-house management is real if someone can own the account weekly without it falling behind every busy season. The cost then is salary and tools. Agencies and freelancers trade cash for that time. The failure mode on both sides is activity without a hypothesis: more ad variants while the landing page still hides the phone, or Smart Bidding on four leads a month. Price the program that will change those things.`,
      },
      {
        type: 'h2',
        text: 'Ads versus SEO while you wait',
      },
      {
        type: 'p',
        html: `SEO compounds on a longer horizon. Ads can produce calls while the Map Pack and service pages catch up. Mixing "SEO/SEM" into one muddy retainer makes it hard to see whether you paid for clicks or for pages. Keep the invoices readable. If a vendor guarantees rankings or a fixed cost per lead, you are not looking at a careful Search plan. You are looking at a sales script. For organic planning ranges, see <a href="/resources/how-much-does-seo-cost-santa-barbara">what SEO costs in Santa Barbara</a>. For the system that receives the lead after the click, the website cost article and a 20-minute call matter as much as the CPC.`,
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. prices Google Ads work by scope after we see the category, the geo, and the page that will take the click. We do not publish a fake county average to win an RFP. Media spend remains separate from any management fee. The Local Lead Plan is $297/mo, or $2,970/yr, and covers the website, local SEO, and follow-up system. Paid search management is an add-on when Search is the right next dollar. If you want a straight look at an existing account or a greenfield budget, <a href="/book-a-call">book a 20-minute call</a>. Email info@sbmc.io or call (805) 307-7600. Bring access if you have it. We will tell you whether the first dollar belongs in media, the page, or the phone path.`,
      },
      {
        type: 'takeaways',
        items: [
          'Planning ranges are market patterns, not SBMC fees and not a quote.',
          'Split media to Google from management on every invoice and report.',
          'CPC, geo, landing pages, tracking, and query waste drive the real monthly cost.',
          'Tiny media budgets often cannot learn on competitive 805 terms. Set floors from job value.',
          'Compare scopes and URLs, not a single blended "ads package" number.',
        ],
      },
    ],
    faqs: [
      {
        category: 'ads',
        question: 'How much do Google Ads cost for a small business in Santa Barbara?',
        answer:
          'In common 2026 market patterns, many one-location service businesses plan roughly $2,500-$6,000/month in media on mid-to-high CPC terms, plus a separate management fee often in the $1,000-$3,000/month band or a disclosed percent of spend. Lighter tests and competitive trades sit outside that. Those bands are planning ranges, not Santa Barbara Marketing Co. fees and not a quote.',
      },
      {
        category: 'ads',
        question: 'Is the management fee included in what Google charges?',
        answer:
          'No. Google charges media for clicks or impressions. Management is what a person or agency charges to build and improve the account. Ask for both numbers on every report. If a vendor will not show you the Google invoice, that is a red flag.',
      },
      {
        category: 'ads',
        question: 'Why do some categories cost so much more per click?',
        answer:
          'Auction prices follow demand and competition. Emergency trades, legal, and some medical queries attract more bidders and higher job values, so CPCs rise. Your close rate and average job value decide whether a high CPC is still profitable. Category reality matters more than a county-wide average.',
      },
      {
        category: 'ads',
        question: 'Can I run Google Ads on a few hundred dollars a month?',
        answer:
          'Sometimes, in lower-CPC niches. On competitive local terms, a very small media budget often cannot collect enough clicks or conversions to learn. An honest plan may say the dollar belongs in the website, the listing, or follow-up until you can fund a real media floor.',
      },
      {
        category: 'getting-started',
        question: 'Does the Local Lead Plan include Google Ads media?',
        answer:
          'No. The Local Lead Plan is $297/mo, or $2,970/yr, and covers the website, local SEO, and follow-up system. Google Ads management is scoped separately, and media spend is billed by Google. A 20-minute call is how we decide whether Search is the right next dollar. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'social-media-management-cost',
    title: 'What Social Media Management Costs (Planning Ranges for Local Business)',
    metaTitle: 'Social Media Management Cost',
    metaDescription:
      'Planning ranges for social media management for local businesses: posting, community, creative, and ads. Market patterns labeled as not SBMC fees.',
    category: 'strategy',
    excerpt:
      'What local businesses commonly pay for social media management in 2026, with clear scope bands for posting, creative, community, and paid social. Market ranges, not our fee schedule.',
    readTime: '11 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['social-media', 'meta-ads', 'strategy'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'facebook-ads-cost-local-business',
      'marketing-agency-cost-santa-barbara',
      'google-ads-for-local-business',
    ],
    body: [
      {
        type: 'p',
        html: `Owners ask what social media management costs because the phrase covers three different jobs. One is a content calendar and scheduled posts. One is community reply and reputation on the channels where customers already talk. One is paid social creative and budget. Calling all three "social media" is how invoices feel unfair. This article lays out planning ranges based on common market patterns for local businesses in 2026. The ranges are not Santa Barbara Marketing Co. fees. They are not a quote. Read the scope first. Use the numbers only to tell a light posting retainer from a full creative and ads program.`,
      },
      {
        type: 'p',
        html: `For most Santa Barbara County shops, social is not the first growth lever. Maps, the website, and speed-to-lead usually pay the bills sooner. Social still matters when your customers discover you on Instagram or Facebook, when reviews and DMs are part of the buying path, or when you need paid reach beyond organic. <a href="/services/social-media">Social media</a> work should say which of those jobs you bought. If the proposal is only "12 posts a month," that is a content retainer. It is not a full marketing system.`,
      },
      {
        type: 'h2',
        text: 'Planning ranges (market patterns, not SBMC fees)',
      },
      {
        type: 'p',
        html: `These bands reflect what local businesses in California commonly pay freelancers and small agencies for social management as of 2026. Your niche, posting volume, and whether ads are included can sit outside them. Treat them as planning ranges, not Santa Barbara Marketing Co. prices and not a promise of a midpoint.`,
      },
      {
        type: 'ul',
        items: [
          'Light posting retainer (8-12 posts/month, light captions, basic scheduling, minimal community): often $500-$1,200/month. Planning range, not a quote.',
          'Standard local management (content plan, 12-20 posts, stories or short video, community replies, light reporting): commonly $1,200-$3,000/month.',
          'Heavier creative programs (original photo or video shoots, multi-platform, UGC coordination, tighter brand systems): commonly $3,000-$6,000+/month.',
          'Paid social management layered on top: often $750-$2,500/month in management, with media spend billed separately to Meta or other platforms. See the Facebook ads cost article for media bands.',
          'One-time setup (profile cleanup, highlight structure, content templates, pixel or events check): often $500-$2,500 as a project.',
        ],
      },
      {
        type: 'p',
        html: `Photography, Reels production, influencer fees, boosting budgets, and print collateral are often extra in the lower bands. Ask what is included before you compare two monthly numbers. A $900 retainer that assumes you supply every photo is not $900 if you then hire a shooter every week.`,
      },
      {
        type: 'blockquote',
        text: 'Compare deliverables and who replies to DMs, not a vague "social package." Twelve template posts and a real creative plus community program are not competing products.',
      },
      {
        type: 'h2',
        text: 'What you are actually buying',
      },
      {
        type: 'h3',
        text: 'Content and publishing',
      },
      {
        type: 'p',
        html: `This is the calendar: posts, captions, hashtags when they still help, scheduling, and basic design. It is useful when you already have a clear offer and a stream of real photos from the shop, the job site, or the dining room. It is weak when the feed is stock sunsets and slogans. State Street restaurants, Funk Zone tasting rooms, and Hollister retail all need proof of the real place. Generic coastal stock teaches the wrong lesson about quality.`,
      },
      {
        type: 'h3',
        text: 'Community and reputation',
      },
      {
        type: 'p',
        html: `DMs, comments, review replies on social, and message routing into a phone or a full CRM are operations work. They take time during lunch rushes and after a bad review. If nobody owns replies, the prettiest grid still feels abandoned. Price the hours. A retainer that posts and never answers is only half the job for businesses that sell through conversation.`,
      },
      {
        type: 'h3',
        text: 'Creative production',
      },
      {
        type: 'p',
        html: `Original photos, short video, motion graphics, and shoot days change the invoice. A Montecito salon and a Santa Maria contractor do not need the same production value, but both need honest visuals. If the proposal includes one shoot per month, name the deliverables. If it assumes you will iPhone everything, say that out loud so the cost comparison is fair.`,
      },
      {
        type: 'h3',
        text: 'Paid social',
      },
      {
        type: 'p',
        html: `Boosting a post is not a media strategy. Structured Meta campaigns with clear audiences, creative tests, and conversion events are a different product. Management fees and media spend should stay separate, the same way they should for Google. When paid social is the goal, pair this page with <a href="/services/meta-ads">Meta ads</a> scope and the Facebook ads cost guide. Do not bury ad spend inside a "social media management" line unless the contract says so in plain English.`,
      },
      {
        type: 'h2',
        text: 'Drivers that move the monthly number',
      },
      {
        type: 'p',
        html: `Posting frequency is the obvious lever. Platform count is next: Instagram alone is cheaper than Instagram plus Facebook plus TikTok with native edits for each. Community volume matters for restaurants, clinics, and retail with heavy inbox traffic. Regulated categories (medical, legal, financial) need review workflows that add time. Multi-location brands need per-location creative and reply ownership. Seasonal businesses on the South Coast often need burst capacity for summer and December, not a flat calendar that ignores the calendar.`,
      },
      {
        type: 'p',
        html: `Who supplies assets is the quiet cost driver. If you have a photographer, a menu, and a manager who can approve captions in 24 hours, production is faster. If every caption waits a week in an owner inbox, the retainer buys idle time. Approval SLAs belong in the scope. So does a kill list of what you will not post: politics, unverifiable claims, before-and-after medical claims without compliance, and competitor pile-ons.`,
      },
      {
        type: 'h2',
        text: 'When social is worth the spend',
      },
      {
        type: 'p',
        html: `Social earns its keep when your buyers already hang out there, when visual proof sells the job, or when paid social can reach a local radius cheaper than Search for your offer. A contractor who wins from Map Pack and referrals may only need light posting and review prompts. A new retail shop on Coast Village Road may need creative and ads more than another blog post. Match the channel to the buying path. Do not buy a heavy social retainer to fix a website that hides the phone number.`,
      },
      {
        type: 'ul',
        items: [
          'Name whether you need posting, community, creative, paid, or a mix.',
          'Keep media spend and management separate when ads are included.',
          'Require real local photography plans, not endless stock.',
          'Name who replies to DMs and comments, and during which hours.',
          'Tie reporting to inquiries, bookings, or store visits when you can measure them, not vanity likes alone.',
        ],
      },
      {
        type: 'h2',
        text: 'How to compare social media proposals',
      },
      {
        type: 'p',
        html: `Ask for a monthly deliverable list with numbers. Ask who writes captions and who shoots. Ask how revisions work. Ask whether boosting or full ads management is included. Ask for examples in your category, not only lifestyle brands from another city. Ask how they will handle a negative public comment on a Friday night. If the portfolio is all the same carousel template with different logos, you are buying volume, not strategy.`,
      },
      {
        type: 'p',
        html: `In-house social is workable when a staff member has hours and taste. The cost is salary and tools. Freelance is workable when the owner can approve fast. Agency retainers trade cash for consistency. The shared failure mode is activity without an offer: pretty grids that never say what to buy, where you are, or how to book. Price the program that will change those things.`,
      },
      {
        type: 'h2',
        text: 'Santa Barbara County specifics that change scope',
      },
      {
        type: 'p',
        html: `Tourism and student calendars move content needs. A State Street restaurant that lives on summer evenings needs a different posting rhythm than a Goleta B2B contractor whose buyers are property managers. Montecito and Coast Village Road retail often need higher production value because the feed is part of the brand. Santa Maria and Carpinteria service businesses often need proof of trucks, licenses, and recent jobs more than lifestyle Reels. UCSB move-in weeks, Fiesta, and holiday retail on the South Coast are burst moments. A flat twelve-posts-every-month scope that ignores those moments will feel expensive in January and thin in July.`,
      },
      {
        type: 'p',
        html: `Bilingual captions are a real line item for some 805 shops and wasted spend for others. If a meaningful share of DMs arrive in Spanish, budget for a human who can reply in Spanish. Auto-translate in public replies is how you publish errors you then have to explain. Hours for community coverage should match when your buyers message: lunch, evenings, and weekends for hospitality; weekday business hours for many trades.`,
      },
      {
        type: 'h2',
        text: 'Where this sits next to the rest of marketing',
      },
      {
        type: 'p',
        html: `Social does not replace local SEO, Google Ads, or a site that converts. It supports them. A strong Google Business Profile still carries many 805 service decisions. Paid Search still catches high-intent queries. Social shines for demand you can shape with creative and for staying present between jobs. If you are pricing a whole agency relationship, read <a href="/resources/marketing-agency-cost-santa-barbara">marketing agency cost in Santa Barbara</a> for the wider retainer picture.`,
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. scopes social by deliverables after we know the channels that actually matter for your buyers. We will not invent a vanity "average social cost" as if every tasting room and every plumber buys the same feed. The Local Lead Plan is $297/mo, or $2,970/yr, and focuses on the website, local SEO, and follow-up. Social and Meta ads are scoped when they are the right next dollar, not bolted on by default. If you want a straight read on whether you need posting, community, or paid, <a href="/book-a-call">book a 20-minute call</a>. Email info@sbmc.io or call (805) 307-7600.`,
      },
      {
        type: 'takeaways',
        items: [
          'Planning ranges are market patterns, not SBMC fees and not a quote.',
          'Posting, community, creative, and paid social are different jobs. The invoice should say which.',
          'Asset supply, platform count, and reply ownership move the monthly number as much as post count.',
          'Keep Meta media spend separate from management when ads are in scope.',
          'Buy social when it matches how customers decide. Do not use it to paper over a weak site or listing.',
        ],
      },
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'How much does social media management cost for a local business?',
        answer:
          'In common 2026 market patterns, light posting retainers often land around $500-$1,200/month, standard local management around $1,200-$3,000/month, and heavier creative programs at $3,000+/month. Paid social management is often extra, with media billed separately. Those figures are planning ranges, not Santa Barbara Marketing Co. fees and not a quote.',
      },
      {
        category: 'working-together',
        question: 'Is paid advertising included in social media management?',
        answer:
          'Only if the contract says so. Many retainers cover organic posting and community only. Boosting budgets and full Meta campaign management are usually separate line items. Ask for media and management to be listed apart.',
      },
      {
        category: 'ads',
        question: 'Do I need social media if Google already sends my calls?',
        answer:
          'Not always as a heavy retainer. If Maps and Search already feed the calendar, light posting and reply coverage may be enough. Heavier social spend makes more sense when visual discovery, DMs, or paid social are part of how buyers find you.',
      },
      {
        category: 'working-together',
        question: 'What should a social media proposal include?',
        answer:
          'Named monthly deliverables, which platforms, who creates assets, who replies to comments and DMs, revision rules, reporting metrics, and whether any paid media is included. Vague "engagement growth" language without scope is hard to compare.',
      },
      {
        category: 'getting-started',
        question: 'Does the Local Lead Plan include social media management?',
        answer:
          'The Local Lead Plan is $297/mo, or $2,970/yr, and focuses on the website, local SEO, and follow-up. Social media and Meta ads are scoped separately when they fit. A 20-minute call is how we decide the order. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'facebook-ads-cost-local-business',
    title: 'What Facebook and Meta Ads Cost for Local Businesses',
    metaTitle: 'Facebook Ads Cost for Local Business',
    metaDescription:
      'Planning ranges for Facebook and Instagram ads for local businesses: media, management, and creative. Market patterns labeled as not SBMC fees.',
    category: 'ads',
    excerpt:
      'What local businesses commonly budget for Meta ads in 2026: media floors, management bands, and creative costs. Planning ranges, not our fee schedule.',
    readTime: '12 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['meta-ads', 'social-media', 'conversion-optimization'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'facebook-ads-vs-google-ads',
      'social-media-management-cost',
      'google-ads-cost-santa-barbara',
    ],
    body: [
      {
        type: 'p',
        html: `Owners ask what Facebook ads cost because Meta pricing feels opaque compared with Google Search. You are usually buying attention, not a typed intent phrase. That can be cheaper per click and more expensive per qualified lead if the audience and offer are loose. This article gives planning ranges based on common market patterns for local businesses running Facebook and Instagram ads in 2026. The ranges are not Santa Barbara Marketing Co. fees. They are not a quote. Use them to separate a $10/day boost from a real local acquisition program.`,
      },
      {
        type: 'p',
        html: `<a href="/services/meta-ads">Meta ads</a> can work for restaurants, retail, events, clinics with clear offers, home services with strong creative, and local brands that need reach beyond the Map Pack. They fail when the pixel is broken, the landing page is the homepage, or the campaign optimizes for cheap clicks from outside the service area. For channel fit versus Search, read <a href="/resources/facebook-ads-vs-google-ads">Facebook ads versus Google Ads</a>. This page is the cost layer: media, management, and creative.`,
      },
      {
        type: 'h2',
        text: 'Planning ranges (market patterns, not SBMC fees)',
      },
      {
        type: 'p',
        html: `These bands reflect common patterns among freelancers and small agencies managing local Meta accounts as of 2026. Your offer, creative quality, and conversion events can sit outside them. Treat every figure as a planning range, not a Santa Barbara Marketing Co. price and not a promise of a midpoint.`,
      },
      {
        type: 'h3',
        text: 'Media spend to Meta',
      },
      {
        type: 'ul',
        items: [
          'Light local tests (single offer, tight radius, one or two creatives): often $750-$2,000/month in media. Planning range, not a quote.',
          'Standard local acquisition for one location: commonly $2,000-$5,000/month in media when you need enough delivery to test audiences and creatives.',
          'Heavier retail, hospitality, or multi-offer accounts: commonly $5,000-$12,000+/month in media. Regional or always-on brand spend sits above that.',
          'Boosted posts at $5-$15/day are visibility experiments. They are not a substitute for a structured campaign with conversion events.',
        ],
      },
      {
        type: 'h3',
        text: 'Management and creative',
      },
      {
        type: 'ul',
        items: [
          'Light management on a small account: often $500-$1,200/month. Planning range, not a quote.',
          'Standard local Meta management (campaign structure, audiences, reporting, iterative creative): commonly $1,000-$2,500/month, or a disclosed percent of spend as media grows.',
          'Creative production (static sets, short video, ongoing variants): often $500-$3,000/month depending on shoot frequency, or billed per asset pack.',
          'One-time account rebuilds (pixel, events, catalog, audience architecture): often $750-$3,000 as a project.',
        ],
      },
      {
        type: 'p',
        html: `Media belongs to Meta. Management and creative belong to the people doing the work. If a pitch blends them into one "Facebook ads package," ask for the split. Percentage fees can make sense at higher spend. Flat fees often make more sense while you are still learning which offers convert in Santa Barbara County.`,
      },
      {
        type: 'blockquote',
        text: 'A cheap CPM on the wrong zip codes is not a bargain. Qualified conversations and booked work are the cost that matters.',
      },
      {
        type: 'h2',
        text: 'What drives Meta ads cost locally',
      },
      {
        type: 'h3',
        text: 'Auction, placement, and seasonality',
      },
      {
        type: 'p',
        html: `CPMs move with competition in your audience and with the calendar. Summer tourism, UCSB move-in, holidays on State Street, and storm weeks for home services all change who is advertising and what they will pay. Instagram placements and Facebook Feed do not price identically. Advantage+ and broad delivery can lower CPMs while mixing in weaker matches. Your job is not the cheapest thousand impressions. It is the cheapest path to a lead you would actually take.`,
      },
      {
        type: 'h3',
        text: 'Audience definition and geo',
      },
      {
        type: 'p',
        html: `Radius targeting around a pin, city stacks (Santa Barbara, Goleta, Carpinteria), and exclusion of places you will not serve change spend quality. Interest stacks that look clever in a pitch deck often overpay for curiosity. Customer lists and website visitors are stronger when you have volume and clean events. A tasting room that wants visitors planning a weekend may allow a wider interest net. A plumber who only rolls trucks from Old Town Goleta to the Mesa should keep geo tight.`,
      },
      {
        type: 'h3',
        text: 'Creative and offer',
      },
      {
        type: 'p',
        html: `Meta rewards creative that stops the thumb. Real photos of the shop, the crew, the plate, or the finished job beat generic stock. Offers need a clear next step: book, call, reserve, get a quote. Weak creative raises CPMs and tanks conversion rate, which raises cost per lead even when the media line looks fine. Budget for variants. One image running for three months is how accounts go stale.`,
      },
      {
        type: 'h3',
        text: 'Tracking and the page after the click',
      },
      {
        type: 'p',
        html: `If the pixel or Conversions API is wrong, optimization aims at noise. If the landing page is slow or vague, you paid for a bounce. Call-only or form-only paths need measurement the owner can verify. Sending Meta traffic to a homepage with a slider is the usual failure, same as Search. Fix the page. Then scale. Website and conversion work are part of the true cost of Facebook ads even when they are not a Meta line item.`,
      },
      {
        type: 'h2',
        text: 'How to read a Meta ads proposal',
      },
      {
        type: 'ul',
        items: [
          'Media and management shown separately, with creative called out if it is extra.',
          'Named optimization events (leads, calls, purchases), not only traffic or engagement.',
          'Geo and exclusions written in plain language.',
          'A creative test plan for the first month, not a single hero image forever.',
          'Reporting that ties to inquiries or revenue signals you can audit.',
        ],
      },
      {
        type: 'p',
        html: `Be wary of guaranteed cost-per-lead numbers offered before anyone sees your close rate, your creative library, or your service area. Be wary of "boost everything" retainers. Be wary of pixel installs with no event prioritization. Ask who owns the ad account. You should. If the vendor builds the account under a personal profile you cannot access, you are renting, not owning.`,
      },
      {
        type: 'h2',
        text: 'When Facebook ads are the wrong first dollar',
      },
      {
        type: 'p',
        html: `If people already search your service with clear intent and you have no Search presence, Google Ads may be the better first paid channel. If the phone goes to voicemail and forms sit unanswered, any paid channel buys waste. If the website cannot take a mobile booking or call, fix that before you buy impressions. Social management without ads may be enough when organic and Google already feed the calendar. Match the channel to the buying path.`,
      },
      {
        type: 'p',
        html: `Local Lead Plan economics are separate from Meta media. The Local Lead Plan is $297/mo, or $2,970/yr, for the website, local SEO, and follow-up system. Meta ads management and media are scoped when paid social is the right next dollar. That order matters more than shaving a few hundred off a management fee aimed at the wrong surface.`,
      },
      {
        type: 'h2',
        text: 'Local offer patterns that change budgets',
      },
      {
        type: 'p',
        html: `Restaurants and hospitality often spend on reach and traffic campaigns tied to a booking path or a reservation window. Retail on State Street or in Old Town Goleta often needs catalog or collection ads when inventory exists, or simple lead forms when the sale still closes in store. Home services usually need lead forms or call paths with tight geo and creative that shows the real truck and the real job. Clinics need compliant creative and clear offer language. Event promoters near the Funk Zone may accept a wider interest net. A plumber who only serves a defined radius should not.`,
      },
      {
        type: 'p',
        html: `Frequency caps, audience exclusions, and creative fatigue matter more on Meta than most owners expect. If the same fifty people in a small zip see the same ad daily, cost per result rises and brand goodwill falls. Budget for fresh creative on a schedule. Budget for exclusions of recent converters when repeat purchase is not the goal. Those habits are part of management quality, which is why two retainers with the same monthly fee can produce different cost per lead.`,
      },
      {
        type: 'h2',
        text: 'A practical first-month cost posture',
      },
      {
        type: 'p',
        html: `A rebuild month usually spends on tracking first, then structure, then enough media to learn. Install events the business cares about. Point ads at a page that restates the offer. Start with a tight geo. Launch a small creative set with clear differences. Let delivery run long enough to read results before you rebuild every day. Changing five levers daily because the dashboard is red is how you never get a clean read. After two to four weeks you should know which creatives spent, which geos were a mistake, and whether the offer earns the click.`,
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. will not invent a county-wide "average Facebook ads cost" with fake precision. We will not hide markups. We will not pretend a week of data is a strategy. If you want a straight look at whether Meta belongs in the stack next to Search, <a href="/book-a-call">book a 20-minute call</a>. Email info@sbmc.io or call (805) 307-7600. Bring account access if you have it. We will tell you whether the first dollar belongs in media, creative, or the page that receives the click.`,
      },
      {
        type: 'takeaways',
        items: [
          'Planning ranges are market patterns, not SBMC fees and not a quote.',
          'Split Meta media from management and creative on every proposal.',
          'Geo, creative, offer, and tracking drive cost per qualified lead more than vanity CPMs.',
          'Boosted posts are not a structured acquisition program.',
          'Fix the landing path and follow-up before you scale spend.',
        ],
      },
    ],
    faqs: [
      {
        category: 'ads',
        question: 'How much do Facebook ads cost for a small local business?',
        answer:
          'In common 2026 market patterns, many one-location businesses plan roughly $2,000-$5,000/month in Meta media for a real local acquisition test, plus management often in the $1,000-$2,500/month band and creative as needed. Lighter tests and heavier retail programs sit outside that. Those bands are planning ranges, not Santa Barbara Marketing Co. fees and not a quote.',
      },
      {
        category: 'ads',
        question: 'Are Instagram ads priced separately from Facebook ads?',
        answer:
          'They run through the same Meta Ads Manager. You choose placements or let Meta allocate. Costs differ by placement and auction conditions, but you usually manage one media budget with placement controls rather than two unrelated invoices.',
      },
      {
        category: 'ads',
        question: 'Is boosting a post the same as running Meta ads?',
        answer:
          'No. Boosting is a simplified visibility tool. Structured campaigns use clearer objectives, audiences, creative tests, and conversion events. Boosts can be fine for awareness experiments. They are a weak substitute for a lead-generation system.',
      },
      {
        category: 'ads',
        question: 'Why is my cost per lead high even when CPM looks low?',
        answer:
          'Cheap impressions can still be the wrong people, the wrong geo, weak creative, or a landing page that does not convert. Cost per qualified lead is the number to watch. Fix audience, offer, creative, and the page before you raise budget.',
      },
      {
        category: 'getting-started',
        question: 'Does the Local Lead Plan include Facebook ads spend?',
        answer:
          'No. The Local Lead Plan is $297/mo, or $2,970/yr, and covers the website, local SEO, and follow-up. Meta ads management and media are scoped separately when paid social fits. Book a 20-minute call to decide order of operations. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'shopify-website-cost',
    title: 'What a Shopify Website Costs in 2026 (Planning Ranges)',
    metaTitle: 'Shopify Website Cost',
    metaDescription:
      'Planning ranges for Shopify website cost: DIY, theme builds, custom development, apps, and ongoing fees. Market patterns labeled as not SBMC fees.',
    category: 'websites',
    excerpt:
      'What merchants commonly pay to launch and run a Shopify store in 2026, from theme builds to custom work, plus the app and maintenance costs people forget. Not our fee schedule.',
    readTime: '13 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['ecommerce-websites', 'web-design', 'conversion-optimization'],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'santa-barbara-web-design',
    ],
    relatedArticles: [
      'web-design-cost-santa-barbara',
      'how-much-does-seo-cost-santa-barbara',
      'why-your-website-isnt-getting-leads',
    ],
    body: [
      {
        type: 'p',
        html: `Owners ask what a Shopify website costs because the platform fee is only the start. Theme work, apps, migrations, photography, and the person who keeps the store from breaking all sit on top. A Funk Zone maker shop with twenty SKUs and a Santa Maria wholesaler with wholesale pricing rules are not the same project. This article lays out planning ranges based on common market patterns for Shopify builds in 2026. The ranges are not Santa Barbara Marketing Co. fees. They are not a quote. Use them to tell a DIY theme launch from a custom storefront before you compare two proposals on the total alone.`,
      },
      {
        type: 'p',
        html: `Shopify is a strong fit when you need carts, payments, inventory, and a storefront that can grow. It is the wrong fit when you only need a brochure site with a phone number. For general marketing site bands, see <a href="/resources/web-design-cost-santa-barbara">website cost in Santa Barbara</a>. For storefronts that sell online, <a href="/services/ecommerce-websites">ecommerce websites</a> is the service lane. This page is the Shopify-specific cost map.`,
      },
      {
        type: 'h2',
        text: 'Planning ranges (market patterns, not SBMC fees)',
      },
      {
        type: 'p',
        html: `These bands reflect what merchants commonly pay freelancers, small agencies, and specialists for Shopify work as of 2026, plus typical platform and app patterns. Your catalog size, integrations, and design ambition can sit outside them. Treat them as planning ranges, not Santa Barbara Marketing Co. prices and not a promise of a midpoint.`,
      },
      {
        type: 'ul',
        items: [
          'DIY on a paid Shopify plan with a free or low-cost theme, your own products and photos: often $500-$3,000 in year-one build effort plus plan fees. Your time is the real cost. Planning range, not a quote.',
          'Freelancer or small studio theme build (premium theme, branding polish, 10-50 products, basic apps): commonly $3,000-$10,000.',
          'Custom Shopify storefront for a serious local or regional brand (custom theme sections, UX, migration help, core apps configured): commonly $10,000-$30,000.',
          'Complex builds (wholesale, subscriptions, custom apps, ERP or inventory integrations, multi-currency, heavy migration): commonly $30,000-$80,000+. Specialty headless stacks sit above that.',
          'Ongoing theme updates, app babysitting, and small merchandising edits: often $100-$500/month, or a larger retainer when marketing and CRO are included.',
        ],
      },
      {
        type: 'p',
        html: `Shopify subscription plans, payment processing fees, premium themes, and paid apps are separate from design labor. A store that looks "cheap to launch" can carry $100-$400+/month in apps before the first ad dollar. Ask for an app budget in every proposal. Ask which fees are Shopify's and which are the builder's.`,
      },
      {
        type: 'blockquote',
        text: 'Compare catalog readiness, integrations, and who maintains the theme. A $4,000 theme install and a $18,000 custom storefront are not the same purchase.',
      },
      {
        type: 'h2',
        text: 'What actually drives Shopify project cost',
      },
      {
        type: 'h3',
        text: 'Catalog size and data quality',
      },
      {
        type: 'p',
        html: `Twenty clean products with good photos are a weekend for a careful builder. Two thousand SKUs with missing variants, duplicate titles, and inconsistent tags are a data project. Migrations from Magento, WooCommerce, or a spreadsheet inherit whatever mess you already have. Budget cleaning time. Do not assume a CSV import is free just because Shopify has an importer.`,
      },
      {
        type: 'h3',
        text: 'Theme versus custom sections',
      },
      {
        type: 'p',
        html: `Premium themes get you far if you accept their patterns. Custom sections, unique PDPs, and brand-heavy storytelling cost more and need a developer who understands Online Store 2.0, performance, and accessibility. Fancy animation that tanks mobile speed is not a flex. Most buyers on a phone in a parking lot on Coast Village Road will not wait for a hero video to load.`,
      },
      {
        type: 'h3',
        text: 'Apps and integrations',
      },
      {
        type: 'p',
        html: `Reviews, subscriptions, upsells, loyalty, wholesale portals, email, SMS, and inventory sync each add monthly cost and configuration time. App sprawl is how stores get slow and fragile. Name the must-haves. Delay the nice-to-haves. Every app is a vendor relationship and a failure point on Black Friday week.`,
      },
      {
        type: 'h3',
        text: 'Content, photography, and merchandising',
      },
      {
        type: 'p',
        html: `If you already have pack shots, lifestyle photos, and clear product copy, production is faster. If the builder is inventing descriptions and sourcing stock, that is extra. Original photos of your products beat generic marketplace imagery, especially for food, wine, apparel, and handmade goods sold from the 805. Accessibility (alt text, contrast, focus states) belongs in the build, not as a later surprise.`,
      },
      {
        type: 'h2',
        text: 'Ongoing costs people forget',
      },
      {
        type: 'p',
        html: `Shopify plan tiers scale with features. Payment processing takes a percentage of every order unless you use an external gateway with its own fees. Themes need updates. Apps raise prices. Email and SMS tools bill on contacts. Chargebacks and fraud filters take time. Staff training matters when more than one person edits products. A store that launches and then sits untouched still incurs platform and app fees. Maintenance is part of the real Shopify website cost.`,
      },
      {
        type: 'ul',
        items: [
          'Platform plan and payment processing, every month and every order.',
          'Paid apps you actually need, reviewed quarterly for bloat.',
          'Theme and checkout changes when Shopify ships platform updates.',
          'SEO basics: titles, collection architecture, redirects after migration.',
          'A human who can fix a broken app on a Friday before the weekend rush.',
        ],
      },
      {
        type: 'h2',
        text: 'Shopify versus a simple marketing site',
      },
      {
        type: 'p',
        html: `If you sell by phone, quote, or in person, and online checkout is rare, a fast marketing site may be the better spend. If you need carts, inventory, abandoned checkout, and product collections, Shopify earns its keep. Do not force ecommerce tooling onto a contractor site that only needs service pages and a call button. Do not force a brochure theme onto a catalog that needs filters, variants, and shipping logic. Pick the product that matches the transaction.`,
      },
      {
        type: 'p',
        html: `SEO for ecommerce is its own workload: collection pages, product detail pages, internal links, and crawl budget. Ads need product feeds and conversion events. Follow-up needs email and SMS tied to real purchase data. Pricing the storefront in isolation from how you acquire and retain buyers is how pretty launches still miss revenue targets.`,
      },
      {
        type: 'h2',
        text: 'Local merchant scenarios in the 805',
      },
      {
        type: 'p',
        html: `A maker selling from a Funk Zone studio with forty SKUs and local pickup may need a clean theme, accurate shipping rules, and strong photos more than a custom app. A wine club with subscriptions needs subscription tooling, compliance-aware copy, and a retention email path. A Santa Maria wholesaler selling to retailers needs pricing rules, customer accounts, and maybe a B2B flavor that a basic theme will not cover. A apparel brand shipping nationally needs performance, size guides, and returns policy clarity on mobile. Same platform. Different invoices.`,
      },
      {
        type: 'p',
        html: `Tourism-facing stores should plan for seasonal traffic spikes and abandoned checkout recovery before peak months, not during them. Staff who edit products during Fiesta week need training before Fiesta week. If your "Shopify website cost" conversation never mentions who updates inventory on a Saturday, you are only pricing the launch, not the operation. The same is true for photo updates when menus, vintages, or apparel drops change. A storefront that launches with six strong lifestyle images and then never refreshes will feel dated by the next busy season even if the theme code is still fine.`,
      },
      {
        type: 'h2',
        text: 'How to read a Shopify proposal',
      },
      {
        type: 'p',
        html: `Look for theme choice or custom scope. Look for product count assumptions. Look for migration and redirect plans. Look for which apps are included versus recommended. Look for performance and accessibility as requirements. Look for who owns the Shopify store after launch. Look for training time. If the portfolio is only theme demos with placeholder products, ask for live stores with real catalogs. If they cannot show a store that works on a phone, do not hire them to build yours.`,
      },
      {
        type: 'p',
        html: `Checkout and shipping rules deserve their own review in the proposal. Local pickup for a Carpinteria shop, flat rates for California, and carrier-calculated rates for national shippers are different configuration jobs. Tax settings, gift cards, discount codes, and returns portals add time. If those appear as "we'll figure it out later," they will appear again as change orders. Ask for them by name in the statement of work.`,
      },
      {
        type: 'p',
        html: `We are not claiming a Shopify Partner badge on this page. We price ecommerce work by scope after we see the catalog, the integrations, and the content you already have. Santa Barbara Marketing Co. was founded in 2026; the standard is the store on the screen, not a wall of plaques. The Local Lead Plan is $297/mo, or $2,970/yr, and is built for local lead systems (website, SEO, follow-up), not as a full custom Shopify build substitute. Storefront projects are scoped separately. If you want a range for your catalog, <a href="/book-a-call">book a 20-minute call</a>. Email info@sbmc.io or call (805) 307-7600. Bring a product export or a link to the current shop if you have one.`,
      },
      {
        type: 'takeaways',
        items: [
          'Planning ranges are market patterns, not SBMC fees and not a quote.',
          'Labor, apps, plan fees, and payment processing all belong in the true cost.',
          'Catalog quality, custom theme work, and integrations drive the build number.',
          'Maintenance and app sprawl are ongoing costs, not optional footnotes.',
          'Choose Shopify when you need real commerce. Choose a marketing site when you need calls and quotes.',
        ],
      },
    ],
    faqs: [
      {
        category: 'websites',
        question: 'How much does a Shopify website cost?',
        answer:
          'In common 2026 market patterns, DIY launches can land under a few thousand dollars in build effort, freelancer theme builds often run $3,000-$10,000, and custom storefronts commonly land $10,000-$30,000 before complex integrations. Platform plans, apps, and payment fees are extra. Those figures are planning ranges, not Santa Barbara Marketing Co. fees and not a quote.',
      },
      {
        category: 'websites',
        question: 'Is the Shopify monthly plan the full cost of the website?',
        answer:
          'No. The plan is only the platform subscription. Design or development labor, premium themes, paid apps, payment processing, and ongoing maintenance sit on top. Ask for each line when you compare options.',
      },
      {
        category: 'websites',
        question: 'Do I need Shopify if I only take phone orders?',
        answer:
          'Often no. A fast marketing site with clear services and a tappable phone number may be enough. Shopify fits when you need online checkout, inventory, and product collections. Match the platform to how customers actually pay.',
      },
      {
        category: 'websites',
        question: 'What makes a Shopify project get expensive?',
        answer:
          'Large or messy catalogs, custom theme work, migrations, wholesale or subscription logic, and integrations with inventory or ERP systems. App sprawl and poor product data also add cost after launch.',
      },
      {
        category: 'getting-started',
        question: 'Does the Local Lead Plan include a full Shopify build?',
        answer:
          'The Local Lead Plan is $297/mo, or $2,970/yr, and focuses on the local lead system: website, local SEO, and follow-up. Custom Shopify storefronts are scoped as ecommerce projects. A 20-minute call is how we see which lane fits. Email info@sbmc.io or call (805) 307-7600.',
      },
    ],
  },
  {
    slug: 'marketing-agency-cost-santa-barbara',
    title: 'What a Marketing Agency Costs in Santa Barbara',
    metaTitle: 'Marketing Agency Cost in Santa Barbara',
    metaDescription:
      'Planning ranges for marketing agency pricing in Santa Barbara County, plus how a focused $297/mo local lead system compares to bloated retainers.',
    category: 'strategy',
    excerpt:
      'What local businesses commonly pay agencies in 2026, how scopes differ, and where a clear $297/mo Local Lead Plan fits against vague retainers. Market ranges labeled honestly.',
    readTime: '12 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: ['strategy', 'local-seo', 'web-design'],
    relatedLocations: ['santa-barbara-digital-marketing'],
    relatedArticles: [
      'how-much-does-seo-cost-santa-barbara',
      'web-design-cost-santa-barbara',
      'google-ads-cost-santa-barbara',
    ],
    body: [
      {
        type: 'p',
        html: `Owners ask what a marketing agency costs in Santa Barbara because the same word covers a freelancer posting twice a week and a team running SEO, ads, creative, and a full CRM. Comparing those invoices as if they were the same product is how people get burned. This article lays out planning ranges based on common market patterns for local agency and freelancer retainers in 2026. Most of those ranges are not Santa Barbara Marketing Co. fees. They are labeled as market patterns on purpose. Then we show where our Local Lead Plan sits when you want a focused system instead of a vague "digital marketing" bundle.`,
      },
      {
        type: 'p',
        html: `The useful question is not "what do agencies charge?" It is "what am I buying, and how will we know it worked?" A retainer that funds Map Pack work, a site that takes the call, and follow-up when leads come in is one product. A retainer that funds meetings and a PDF of impressions is another. Read <a href="/pricing">pricing</a> for our published plan. Use this page to sanity-check the wider market before you sign anything.`,
      },
      {
        type: 'h2',
        text: 'Planning ranges for agency-style work (market patterns, not quotes)',
      },
      {
        type: 'p',
        html: `These bands reflect common patterns among freelancers, boutique agencies, and larger shops serving California local businesses as of 2026. Category competition and scope can sit outside them. Except where we name the Local Lead Plan, treat every band as a planning range, not a Santa Barbara Marketing Co. fee schedule and not a promise of a midpoint.`,
      },
      {
        type: 'ul',
        items: [
          'Freelance specialist (one channel: SEO, or ads, or social): often $750-$2,500/month. Planning range, not a quote.',
          'Boutique local retainer (site care plus SEO or plus light ads coordination): commonly $2,000-$5,000/month depending on deliverables.',
          'Full-service small business retainer (SEO, content, ads management, creative, reporting): commonly $5,000-$12,000+/month. Media spend is usually extra.',
          'Project work (website, brand, funnel build): often $5,000-$40,000+ depending on scope. See the website and Shopify cost articles for build bands.',
          'Enterprise or multi-location programs are a different product. A single-location 805 shop should not be priced like a regional brand by default.',
        ],
      },
      {
        type: 'p',
        html: `Cheap retainers are not always a scam. They are usually a smaller scope. Expensive retainers are not always serious. They are sometimes a recycled national playbook with your city name dropped in. Ask what happens in month one, who does the work, and which metrics are owned. For SEO-specific bands, see <a href="/resources/how-much-does-seo-cost-santa-barbara">what SEO costs in Santa Barbara</a>.`,
      },
      {
        type: 'blockquote',
        text: 'Compare the system you are buying. A vague "marketing retainer" and a named local lead system are not competing products.',
      },
      {
        type: 'h2',
        text: 'What drives agency pricing',
      },
      {
        type: 'h3',
        text: 'Channel count and specialization',
      },
      {
        type: 'p',
        html: `One specialist is cheaper than five channels under one roof. That does not make the specialist better for every business. A plumber who needs Maps and missed-call follow-up may not need a social team. A new retail brand on State Street may need creative and paid social more than another citation blast. Agencies price for the seats and hours they assign. You should price for the buying path you actually have.`,
      },
      {
        type: 'h3',
        text: 'Competition and stakes in your category',
      },
      {
        type: 'p',
        html: `Dental, legal, med spa, and emergency trades often cost more to compete in because ads CPCs and Map Pack strength are higher. Quiet niches with weak listings can move with less spend. An honest agency will say which world you are in after looking at the Pack and the auction, not after a generic "Santa Barbara is competitive" monologue.`,
      },
      {
        type: 'h3',
        text: 'Assets you already have',
      },
      {
        type: 'p',
        html: `A clean website, real photos, a verified Google Business Profile, and someone who answers the phone make every retainer more efficient. A broken site, duplicate listings, and voicemail-only operations make every retainer look expensive because the leak is downstream. Fix the surface that loses money first. Sometimes that is the site. Sometimes it is follow-up. Sometimes it is the offer.`,
      },
      {
        type: 'h3',
        text: 'Reporting theater versus operating metrics',
      },
      {
        type: 'p',
        html: `Dashboards that celebrate impressions without naming calls, forms, and booked jobs are a cost. They consume hours and create false comfort. Demand a short list of operating metrics. Rank tracking can support the story. It should not be the story for a local service business.`,
      },
      {
        type: 'h2',
        text: 'Where the Local Lead Plan fits',
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. publishes a focused offer on purpose. The Local Lead Plan is $297/mo, or $2,970/yr (2 months free on the annual path). It is built as a local lead system: marketing website, local SEO, on-site SEO, review requests, missed-call text back, and lead follow-up paths. It is not a promise that every channel is included. Google Ads media, heavy creative retainers, and custom Shopify builds are separate when you need them. Details live on <a href="/local-lead-plan">the Local Lead Plan</a> and on <a href="/pricing">pricing</a>.`,
      },
      {
        type: 'p',
        html: `Why publish $297/mo when market retainers often sit higher? Because many 805 businesses do not need a five-thousand-dollar umbrella on day one. They need a site that works on a phone, a listing that is trustworthy, and a path that texts back when a call is missed. That is the core leak we see. You can still buy ads and deeper creative later. Starting with a clear system beats starting with a bloated SOW you cannot audit.`,
      },
      {
        type: 'ul',
        items: [
          'Local Lead Plan: $297/mo or $2,970/yr for the named local lead system.',
          'Ads media and ads management: scoped separately when Search or Meta is the next dollar.',
          'Ecommerce and complex site builds: scoped as projects, not hidden inside the monthly plan.',
          'Cancel anytime with 30-day written notice when cancellation terms apply to your agreement.',
        ],
      },
      {
        type: 'h2',
        text: 'How to compare agency proposals in this county',
      },
      {
        type: 'p',
        html: `Ask for deliverables with nouns and numbers. Ask who does the work and where they are. Ask for examples in your category. Ask how they handle website access, ad accounts, and the full CRM if one is in play. You should own the accounts. Ask what is excluded. Ask how success is measured in the first 30 and 90 days. If the pitch leans on invented awards, guaranteed rankings, or a wall of logos you cannot verify, walk.`,
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. was founded in 2026 by Ruben Ruiz, who has marketed local businesses since 2007 (formerly Ranking SB). We will not invent a decade of plaques we do not have. We will not hide scope inside buzzwords. We will show you the gaps on a 20-minute call before we talk packages. That order is the point.`,
      },
      {
        type: 'h2',
        text: 'What a useful first ninety days look like',
      },
      {
        type: 'p',
        html: `Regardless of price band, a serious local engagement should produce visible operating changes early. Month one usually means access, baseline, and the highest-leak surface: listing cleanup, phone path, or a page that can take the call. Month two and three should show content or campaign work tied to that baseline, with reporting that names calls and booked jobs. If ninety days produce only meetings and a vanity dashboard, the retainer is funding process, not growth. Ask for that ninety-day picture in writing before you compare two agencies on the monthly fee alone.`,
      },
      {
        type: 'p',
        html: `Geography inside the county still matters in agency scopes. A shop that only serves Carpinteria does not need a five-city content factory. A service-area business covering Santa Barbara, Goleta, and the Santa Ynez Valley needs clearer NAP discipline and page strategy than a single storefront on Linden. Multi-location pricing should look like more than a line item. It is closer to a second engagement when profiles and reviews multiply.`,
      },
      {
        type: 'h2',
        text: 'Agency versus in-house versus specialist',
      },
      {
        type: 'p',
        html: `In-house marketing is real when you have a person with hours, taste, and authority to change the site and the listing. The cost is salary, tools, and management attention. Specialists are real when one channel is clearly the bottleneck. Agencies are real when you need coordinated surfaces and you do not want three vendors who never talk. The shared failure mode is activity without a hypothesis. Price the program that will change the phone, the calendar, or the revenue you can audit.`,
      },
      {
        type: 'p',
        html: `If you are staring at a $6,000 retainer and a $297/mo plan and wondering which is "real marketing," read the scopes side by side. One may include creative studios and multi-channel media buying. One may include the local system that stops easy leaks. They can both be honest. They are not substitutes. Pick the one that matches the problem you have this quarter. Then <a href="/book-a-call">book a 20-minute call</a> if you want a straight read on yours. Email info@sbmc.io or call (805) 307-7600.`,
      },
      {
        type: 'takeaways',
        items: [
          'Most published agency bands here are market patterns, not SBMC fees. The Local Lead Plan is the exception we name: $297/mo or $2,970/yr.',
          'Scope and channel count drive price more than the word "agency."',
          'Compare deliverables, account ownership, and operating metrics.',
          'A focused local lead system can beat a vague expensive retainer when the leak is the site, listing, or follow-up.',
          'Buy ads and deeper creative when the foundation can take the lead.',
        ],
      },
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'How much does a marketing agency cost in Santa Barbara?',
        answer:
          'In common 2026 market patterns, freelance specialists often land around $750-$2,500/month, boutique local retainers around $2,000-$5,000/month, and fuller small-business retainers at $5,000+/month with media usually extra. Those bands are planning ranges, not quotes. Santa Barbara Marketing Co. also publishes the Local Lead Plan at $297/mo or $2,970/yr for a named local lead system.',
      },
      {
        category: 'getting-started',
        question: 'What is included in the Local Lead Plan?',
        answer:
          'The Local Lead Plan is $297/mo, or $2,970/yr, and includes a marketing website, local SEO, on-site SEO, review requests, missed-call text back, and lead follow-up paths. Google Ads media and custom ecommerce builds are separate when needed. See /pricing and /local-lead-plan for the current details.',
      },
      {
        category: 'working-together',
        question: 'Why are some agency retainers several thousand dollars a month?',
        answer:
          'They often fund multiple channels, creative production, ads management time, and reporting seats. That can be appropriate for the right business. It is expensive and wasteful when the website, listing, or phone path is still broken. Match spend to the real bottleneck.',
      },
      {
        category: 'working-together',
        question: 'Should I hire an agency or a freelancer?',
        answer:
          'Hire a freelancer when one clear channel is the bottleneck and you can manage the rest. Hire an agency or a bundled system when you need coordinated website, local SEO, and follow-up without juggling three vendors. Compare scopes, not job titles.',
      },
      {
        category: 'free-call',
        question: 'How do I get a number for my business?',
        answer:
          'Book a 20-minute call. We look at your listing, site, and follow-up before talking packages. Email info@sbmc.io or call (805) 307-7600. Bring access if you have it.',
      },
    ],
  },
  {
    slug: 'cost-of-a-missed-call',
    title: 'The Cost of a Missed Call (Use Your Own Numbers)',
    metaTitle: 'Cost of a Missed Call for Small Business',
    metaDescription:
      'A practical worksheet for the cost of a missed call. Plug in your own job value, answer rate, and close rate. No invented industry percentages.',
    category: 'ai',
    excerpt:
      'Run the math on missed calls with your own figures: job value, contacts, close rate, and recovery. Ties directly to missed-call text back and AI receptionist options.',
    readTime: '11 min',
    datePublished: '2026-11-24',
    dateModified: '2026-11-24',
    status: 'published',
    relatedServices: [
      'missed-call-text-back',
      'ai-receptionist',
      'marketing-automation',
    ],
    relatedLocations: [
      'santa-barbara-digital-marketing',
      'goleta-digital-marketing',
    ],
    relatedArticles: [
      'speed-to-lead-follow-up-systems',
      'marketing-agency-cost-santa-barbara',
      'google-ads-for-local-business',
    ],
    body: [
      {
        type: 'p',
        html: `A missed call is not a soft branding problem. It is a revenue event you can estimate with a short worksheet. This page does not invent a county-wide "businesses miss X% of calls" statistic. Those figures get passed around without a source, and they rarely match your shop. You will use your own numbers: how many calls you get, how many you miss, what a job is worth, and how often a reached lead becomes a customer. The output is a planning estimate you can defend in a partner meeting. It is not a Santa Barbara Marketing Co. fee. It is not a promise that a tool recovers every dollar.`,
      },
      {
        type: 'p',
        html: `In Santa Barbara County the pattern shows up the same way whether you are a plumber on a Mesa emergency, a clinic near Bath Street, or a contractor who spends real money on Google Ads. Someone calls. Nobody answers. They dial the next listing. Paid clicks and Map Pack impressions become someone else's job. <a href="/services/missed-call-text-back">Missed-call text back</a> and an <a href="/services/ai-receptionist">AI receptionist</a> exist to shrink that leak. The worksheet tells you whether the leak is large enough to care this month.`,
      },
      {
        type: 'h2',
        text: 'The worksheet (your numbers only)',
      },
      {
        type: 'p',
        html: `Grab last month's phone data if you have call recordings, a call-tracking log, or even a honest tally from the front desk. If you do not have data, start counting this week before you buy anything. Guessing is allowed for a first pass. Mark guesses as guesses.`,
      },
      {
        type: 'ul',
        items: [
          'A. Inbound calls per month that are real sales opportunities (exclude spam and vendors).',
          'B. Share of those calls you do not answer live (as a decimal, e.g. 0.25 if you miss one in four). Use your log, not a national rumor.',
          'C. Average gross profit or contribution margin on a closed job (not revenue if costs are high).',
          'D. Close rate when you do speak with a qualified caller (as a decimal).',
          'E. Share of missed callers you currently recover later by voicemail callback or other means (as a decimal). If you rarely recover them, use a low number.',
        ],
      },
      {
        type: 'p',
        html: `Missed opportunities per month is roughly A times B. Missed opportunities you never recover is that figure times (1 minus E). Estimated gross profit at risk per month is missed opportunities never recovered times C times D. That is the planning number. If it is small next to your other leaks, fix those first. If it is large next to what you spend on ads, fix the phone path before you buy more clicks.`,
      },
      {
        type: 'blockquote',
        text: 'Do the math with your log. A borrowed percentage from a conference slide is not a budget justification.',
      },
      {
        type: 'h2',
        text: 'Worked examples with placeholder math (not your business)',
      },
      {
        type: 'p',
        html: `These examples are fictional illustrations so you can see the arithmetic. They are not Santa Barbara averages and not claims about your trade.`,
      },
      {
        type: 'h3',
        text: 'Example 1: home service',
      },
      {
        type: 'p',
        html: `Suppose a Goleta HVAC company logs 80 qualified inbound calls in a month, misses 0.30 of them live, averages $400 gross profit per closed job, closes 0.40 of live conversations, and recovers 0.10 of missed callers later. Missed opportunities: 80 x 0.30 = 24. Never recovered: 24 x 0.90 = 21.6. Gross profit at risk: 21.6 x $400 x 0.40 = about $3,456 that month. If that shop also spends $3,000 on ads, the missed-call leak is in the same order of magnitude as the media budget.`,
      },
      {
        type: 'h3',
        text: 'Example 2: clinic',
      },
      {
        type: 'p',
        html: `Suppose a downtown clinic logs 120 qualified calls, misses 0.20 live, averages $150 gross profit on a first visit path, closes 0.50 of reached callers, and recovers 0.25 of misses with same-day callbacks. Missed opportunities: 24. Never recovered: 18. Gross profit at risk: 18 x $150 x 0.50 = about $1,350 that month. Smaller than Example 1, still real, and still worth comparing to the cost of a text-back path or after-hours coverage.`,
      },
      {
        type: 'p',
        html: `Swap in your figures. If your average job is a $8,000 remodel with a lower close rate, the curve changes. If you already call every missed lead within five minutes, E is high and the remaining leak shrinks. The worksheet rewards honesty about recovery. Optimism here hides the problem.`,
      },
      {
        type: 'h2',
        text: 'What the number is trying to tell you',
      },
      {
        type: 'p',
        html: `A high at-risk figure usually means one of three operating issues. Coverage is thin during lunch, evenings, or weekends. The phone routes to a mailbox nobody monitors. Or marketing is buying more conversations than the desk can handle. Those are different fixes. Hiring another CSR is one answer. Staggering shifts is another. A text that fires when a call hits voicemail is another. An AI receptionist that can gather the job details and book or queue when staff is free is another. None of them are magic. All of them should be priced against your worksheet, not against fear.`,
      },
      {
        type: 'p',
        html: `Paid channels make the leak louder. If you run Google Ads or Local Services Ads, every missed call is a click you already bought. If you rank in the Map Pack, every missed call is a ranking win you donated to the next pin. Fixing answer rate and speed-to-lead often returns more than another creative test. Our broader follow-up map lives in <a href="/resources/speed-to-lead-follow-up-systems">speed-to-lead follow-up systems</a>.`,
      },
      {
        type: 'h2',
        text: 'Where local operators usually lose the thread',
      },
      {
        type: 'p',
        html: `Lunch coverage on State Street. Solo owners on a roof in Hope Ranch when the phone rings. Front desks that batch callbacks at 4:30. Shared phones that nobody owns. Marketing vendors who celebrate click volume while the inbox fills with "sorry I missed your call" that never gets returned. None of that needs an invented national miss-rate to matter. It needs a named owner for the next step after a ring goes unanswered.`,
      },
      {
        type: 'p',
        html: `Seasonality changes the worksheet. A landscaper's spring and a retailer's December are different call volumes. Re-run A through E each quarter. A tool that made sense in a quiet month may be underbuilt in peak season. A staffing plan that works in February may fail in July. Treat the estimate as a living number, not a one-time scare slide.`,
      },
      {
        type: 'h2',
        text: 'Ways to reduce the leak (without fake guarantees)',
      },
      {
        type: 'ul',
        items: [
          'Measure: call tracking or a simple tally of answered versus missed for two weeks.',
          'Route: a phone tree that reaches a human who can take a job, not a general mailbox.',
          'Text back: an automatic SMS when a call is missed, with a path to reply.',
          'After-hours path: voicemail that promises a next step you actually keep, or coverage that can book.',
          'AI receptionist options: gather intent, capture the number, book when rules allow, escalate to humans when needed.',
          'Desk habits: same-day callbacks on every missed qualified lead, owned by a named person.',
        ],
      },
      {
        type: 'p',
        html: `We will not promise that you will never miss a call. Phones fail. People are in crawlspaces. Cells drop on the back side of the Mesa. The goal is fewer lost conversations and a documented recovery path. Tools that claim perfection are selling a slogan. Tools that shrink response time are doing the job.`,
      },
      {
        type: 'h2',
        text: 'How this ties to SBMC pricing',
      },
      {
        type: 'p',
        html: `Missed-call text back sits inside the Local Lead Plan for businesses on that system. The Local Lead Plan is $297/mo, or $2,970/yr. An AI receptionist can be scoped as an add-on when you need conversational coverage beyond a text. Those product fees are quoted after we see call volume and routing. The worksheet's "gross profit at risk" number is not a fee. It is your estimate of the leak.`,
      },
      {
        type: 'p',
        html: `If your worksheet shows a small leak and a broken website, put the dollar in the site. If it shows a large leak and a healthy Map Pack, put the dollar in answer rate and text back before you raise ad spend. Order of operations matters more than buying every tool at once.`,
      },
      {
        type: 'h2',
        text: 'How to run the conversation with a partner or vendor',
      },
      {
        type: 'p',
        html: `Bring A through E on one page. Show the at-risk estimate. Ask any vendor what they will change in the first two weeks that moves B down or E up. If they pivot to vanity metrics without touching the phone path, they are not solving this problem. If they ask for call logs and routing details, they are in the right neighborhood. Own your phone numbers and your full CRM records. Do not lock recovery inside a black box you cannot leave.`,
      },
      {
        type: 'p',
        html: `Santa Barbara Marketing Co. will help you install missed-call text back, tighten routing, and decide whether an AI receptionist belongs in the stack. We will not invent a national miss-rate to scare you into a contract. Bring last month's call count to a 20-minute call and we will run the worksheet with you. <a href="/book-a-call">Book a call</a>, email info@sbmc.io, or phone (805) 307-7600.`,
      },
      {
        type: 'takeaways',
        items: [
          'Use your own call log, job value, close rate, and recovery rate. Skip unsourced industry miss percentages.',
          'At-risk gross profit is roughly missed unrecovered opportunities times job profit times close rate.',
          'Compare that figure to ad spend and to the cost of text-back or coverage tools.',
          'Fix answer rate and speed-to-lead before you buy more clicks into voicemail.',
          'Local Lead Plan is $297/mo or $2,970/yr and includes missed-call text back in that system. AI receptionist is scoped when you need it.',
        ],
      },
    ],
    faqs: [
      {
        category: 'getting-started',
        question: 'How do I calculate the cost of a missed call?',
        answer:
          'Estimate qualified inbound calls, the share you miss live, average gross profit per job, close rate on reached callers, and how often you recover misses later. Missed unrecovered opportunities times job profit times close rate is a planning estimate of monthly gross profit at risk. Use your numbers, not a borrowed industry percentage.',
      },
      {
        category: 'getting-started',
        question: 'Do you have a statistic for how many calls small businesses miss?',
        answer:
          'We do not quote an unsourced industry miss-rate on this page. Counts vary widely by trade, staffing, and hours. Measure your own answer rate for two weeks. That figure is the one that belongs in your budget conversation.',
      },
      {
        category: 'working-together',
        question: 'What reduces missed-call loss the fastest?',
        answer:
          'Usually a mix of better routing, same-day callbacks owned by a named person, and an automatic text when a call is missed. After-hours coverage or an AI receptionist can help when the leak is outside desk hours. Start with measurement so you know which lever moved.',
      },
      {
        category: 'getting-started',
        question: 'Is missed-call text back part of the Local Lead Plan?',
        answer:
          'Yes. The Local Lead Plan is $297/mo, or $2,970/yr, and includes missed-call text back with the website, local SEO, and follow-up system. An AI receptionist can be added when you need conversational coverage beyond a text. Email info@sbmc.io or call (805) 307-7600.',
      },
      {
        category: 'free-call',
        question: 'Can you run the worksheet with us?',
        answer:
          'Yes. Bring last month\'s call counts, a rough job value, and your close rate to a 20-minute call. We will estimate the leak and whether text back, routing changes, or an AI receptionist is the right next step. Book at /book-a-call.',
      },
    ],
  },
];
