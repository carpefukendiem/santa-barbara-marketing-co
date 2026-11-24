import type { Service } from './services';

const relatedLocationSlugs: Service['relatedLocations'] = [
  'santa-barbara-digital-marketing',
  'goleta-digital-marketing',
  'montecito-digital-marketing',
  'carpinteria-digital-marketing',
  'santa-maria-digital-marketing',
  'lompoc-digital-marketing',
  'santa-ynez-valley-digital-marketing',
];

export const batch2Services: Array<Service & { dateModified: string }> = [
  {
    slug: 'ecommerce-websites',
    name: 'Ecommerce Website Design',
    shortName: 'Ecommerce Sites',
    navGroup: 'convert',
    icon: 'websites',
    iconBg: 'var(--sbmc-sage)',
    dateModified: '2026-11-24',
    cardBlurb:
      'Online stores built for phones, checkout, and Santa Barbara County buyers.',
    metaTitle: 'Ecommerce Websites in Santa Barbara County',
    metaDescription:
      'Shopify and online store builds for Santa Barbara County. Phone-first checkout, product pages that sell, and honest scope. Book a 20-Minute Call.',
    h1: 'Ecommerce websites for Santa Barbara County brands that need sales, not a pretty catalog',
    eyebrow: 'Convert & Grow',
    heroLede:
      'An online store for a Santa Barbara County shop has to do more than show products on a desktop mockup. A visitor on State Street cellular, a hotel guest near Cabrillo, or a North County buyer comparing shipping and pickup needs a fast catalog, clear prices, and a checkout that does not stall. We design and build ecommerce websites around that reality: product pages that answer the real questions, cart and payment flows that work on a phone, and a storefront that ties into the ads and email you already plan to run. Shopify is a common platform for this work. We will not claim a partner badge we do not hold. If a marketing site with a simple booking link would hire faster than a full store, we will say so before you buy inventory software you will not use.',
    problemFraming:
      'The common failure on the South Coast is a brochure site with a Shop button that opens a third-party cart nobody maintains. Products sit with stock photos, missing sizes, and a shipping policy written for a warehouse in another state. Fiesta and summer weekends spike traffic for food, wine, and gift brands, then the cart throws a tax or shipping error and the sale dies. The owner blames ads. The leak was checkout.\n\nLocal ecommerce also fights a different buyer mix than a national DTC brand. Some people want ship-to-door across California. Others want pickup on Linden Avenue, Coast Village Road, or Old Town Goleta after they browse on the phone. A tasting-room-adjacent label may need age gates and allocation rules. A retail shop near the Funk Zone may need gift cards and local delivery windows that change in summer. If the store cannot say which products ship, which are pickup only, and which are sold out, paid traffic becomes an expensive bounce report.\n\nWe also see owners sold a theme, a dozen apps, and a homepage video that wrecks load time on cellular. The store looks busy and sells nothing. Ecommerce here means a product information architecture you can keep updating, Core Web Vitals that survive a photo-heavy catalog, and a path from Meta ads or email into a product page that already answers shipping, materials, and returns. The Local Lead Plan is built for lead-gen marketing sites. A real store is a scoped project with its own inventory, payments, and fulfillment decisions. We will write that scope before we pick colors.',
    whatsIncluded: [
      {
        title: 'Store sitemap and product architecture',
        body:
          'Collections, filters, and product templates planned around how Santa Barbara County buyers actually shop, including pickup versus ship, gift versus replenishment, and seasonal SKUs you can retire after summer without orphan URLs. You approve the outline before theme work starts so the catalog matches inventory, not a demo store fantasy.',
      },
      {
        title: 'Phone-first product pages and cart',
        body:
          'Images that load without wrecking Largest Contentful Paint, variant pickers thumbs can hit, and a cart that states shipping, tax, and pickup rules before payment. We build for cellular on State Street and the 101 corridor, not a studio desktop. If a design choice slows checkout, the metric wins the argument.',
      },
      {
        title: 'Shopify or comparable store setup',
        body:
          'Theme configuration, navigation, payment and shipping basics, and product import patterns you can repeat. Shopify is often the right tool. When a lighter catalog or a different platform fits better, we say so. We do not stretch a marketing brochure into a fake store with a PayPal button taped on.',
      },
      {
        title: 'Checkout, taxes, and local fulfillment rules',
        body:
          'Clear policies for ship-from, local pickup, and any South Coast delivery windows you actually honor. Age-gated or allocation products get a real path, not a popup that breaks on iOS. You approve every customer-facing fee and timeline. We will not invent same-day promises operations cannot keep.',
      },
      {
        title: 'Analytics and ads-ready events',
        body:
          'Purchase, add-to-cart, and begin-checkout events you can audit, plus Search Console and analytics connected at launch. If Meta ads or Google Ads will drive traffic, the pixel and conversion paths are part of the build conversation, not a week-three scramble after media spend starts.',
      },
      {
        title: 'Content and photo guidance that sticks',
        body:
          'What each product page must say, which photos to shoot in your shop or on location, and what to skip. Stock filler reads fake next to a Funk Zone storefront. We would rather launch fewer honest SKUs than a wall of placeholders that train buyers to leave.',
      },
      {
        title: 'Launch redirects and handoff training',
        body:
          'Old product or category URLs redirect when you are migrating. Staff get a short walkthrough of how to add a product, update inventory, and request a theme change without breaking checkout. If email and SMS flows should welcome first buyers, we point you to that service instead of bolting half a campaign into the theme.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Offer, inventory, and platform fit',
        body:
          'We start with what you sell, how you fulfill, and whether pickup on the South Coast matters as much as shipping. You share current tools, photos you own, and any ads or email lists that already exist. The output is a written store outline: collections, must-have policies, and whether Shopify, a lighter catalog, or a plain marketing site with booking is the honest job. If the Local Lead Plan covers your real need, we will say that instead of selling a cart.',
      },
      {
        step: 2,
        title: 'Templates and conversion path',
        body:
          'You review product, collection, and cart layouts on a phone-width frame. We settle type, image rules, and the information each SKU must show. Feedback happens in dated rounds. Endless theme shopping is how stores miss the holiday window. Claims about shipping speed, ingredients, or licensing stay in your voice and your facts only.',
      },
      {
        step: 3,
        title: 'Build, import, and measure',
        body:
          'Theme and apps stay lean. Products load from a pattern you can reuse. We test checkout on a real phone, including pickup and shipping paths you plan to offer. Analytics events get verified with a test purchase. If content or photography is late, the calendar says so. Live storefronts need logins, product copy, and images the same way a marketing site needs them before a 30-day clock is honest.',
      },
      {
        step: 4,
        title: 'Launch and the first selling weeks',
        body:
          'DNS, redirects, payments, and a pass on the pages that will take ad traffic. After launch we watch real product and cart funnels, not only homepage vanity views. Small copy and policy fixes in that window are part of making the store honest. Meta ads and email or SMS belong in their own scopes once the cart works. A store that cannot take money should not take media spend.',
      },
    ],
    outcomes: [
      'A storefront architecture that matches how you fulfill: ship, pickup, or both, without orphan collections.',
      'Phone-first product and cart templates measured against real checkout paths, not desktop mockups alone.',
      'A lean Shopify or comparable setup staff can update without a developer for every size change.',
      'Purchase and cart events you can trust when Meta ads or email campaigns start driving traffic.',
      'Policies and fulfillment language that match Santa Barbara County operations, not a generic warehouse script.',
      'A dated build plan with honesty when inventory, photography, or payments are the bottleneck.',
    ],
    faqs: [
      {
        category: 'websites',
        question: 'Do you only build on Shopify?',
        answer:
          'Shopify is a frequent fit for Santa Barbara County retailers and makers who need payments, inventory, and a theme they can maintain. It is not a religion. If a small catalog, booking-led sales, or a different platform fits better, we will say so. We will not force a full store when a marketing site would hire faster.',
      },
      {
        category: 'websites',
        question: 'Do you claim an official Shopify partnership badge?',
        answer:
          'No. We build and configure Shopify storefronts when that is the right tool. We do not lean on a partner badge as a sales claim. Judge the work by the store outline, checkout quality, and whether events and policies are ready for real buyers on the South Coast.',
      },
      {
        category: 'websites',
        question: 'Is ecommerce included in the Local Lead Plan?',
        answer:
          'The Local Lead Plan at $297/mo or $2,970/yr is built around a lead-gen marketing site, Local SEO, review requests, and follow-up. A real online store with inventory, shipping, and checkout is a separate scoped project. After we see your catalog and fulfillment model, we send a written range.',
      },
      {
        category: 'websites',
        question: 'Can you migrate my old store without killing SEO?',
        answer:
          'We inventory URLs worth keeping and set redirects for products and collections that still earn traffic. Thin or duplicate URLs get a cut list. We cannot promise rankings. We can keep equity from moving to a soft 404 when the new theme launches.',
      },
      {
        category: 'websites',
        question: 'Will the store work with Meta ads and email?',
        answer:
          'That is part of the plan when those channels matter. Purchase and cart events, landing paths into product pages, and welcome flows after a first order sit in the scope conversation. Meta ads and email or SMS marketing are separate services. The store has to be able to take the traffic first.',
      },
      {
        category: 'websites',
        question: 'How long does an ecommerce build take?',
        answer:
          'A focused catalog with clear policies can follow a dated outline once we have logins, product copy, and photos. Large inventories, custom apps, wholesale portals, or messy URL history add time. We will not quote a fake sprint. You get dates tied to the inputs you still owe.',
      },
      {
        category: 'getting-started',
        question: 'What do you need from us to start?',
        answer:
          'Product list with prices and variants, photos you own, shipping and pickup rules you will honor, payment account access, and any current domain or store login. If photography or policy decisions are missing, the build waits. Call (805) 307-7600 or email info@sbmc.io to book a 20-Minute Call.',
      },
    ],
    relatedServices: ['web-design', 'meta-ads', 'email-sms-marketing'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'shopify-website-cost',
      'web-design-cost-santa-barbara',
    ],
    relatedIndustries: ['ecommerce', 'retail-shops', 'restaurants-hospitality'],
    pricingNote:
      'Ecommerce cost follows catalog size, how many templates and apps you truly need, migration redirects, photography readiness, and whether pickup, wholesale, or subscriptions sit in scope. A twenty-SKU gift shop near State Street is a different job than a multi-collection brand with allocation rules and Meta purchase events. After we review your current site or store and the fulfillment model, we send a written project range. Platform fees, payment processing, and app subscriptions are billed by those vendors. The Local Lead Plan remains $297/mo or $2,970/yr for its lead-gen bundle and is not a substitute for a full store build. Cancel anytime with 30-day written notice on retainers we manage.',
  },
  {
    slug: 'ai-receptionist',
    name: 'AI Receptionist',
    shortName: 'AI Receptionist',
    navGroup: 'systems',
    icon: 'automations',
    iconBg: 'var(--sbmc-aqua)',
    dateModified: '2026-11-24',
    cardBlurb:
      'Voice AI that answers when you cannot, then hands off to a human.',
    metaTitle: 'AI Receptionist in Santa Barbara County',
    metaDescription:
      'Voice AI receptionist for Santa Barbara County trades and clinics. $99/mo add-on, clear handoff rules, no fake guarantees. Book a 20-Minute Call.',
    h1: 'AI receptionist for Santa Barbara County businesses that miss calls while doing the work',
    eyebrow: 'Practical AI',
    heroLede:
      'When a homeowner in Carpinteria taps your Map Pack listing while you are on a roof in Goleta, the call either gets a human, a voicemail, or silence. An AI receptionist is Voice AI that can answer, gather the basics, and create a follow-up path when you cannot pick up. At Santa Barbara Marketing Co this is a published add-on: Voice AI at $99/mo on top of the systems that already hold your contacts. We will not promise you will catch every call. We will set honest hours, scripts, and handoff rules so a model does not fake being your front desk while a real emergency waits.',
    problemFraming:
      'South Coast trades and clinics lose work in the gap between the ring and a person. Google Ads and Local SEO did their job. The searcher called. You were driving the 101, finishing a job near Hollister, or with a patient. Voicemail feels like rejection. The next pin gets the job. Owners then buy a chatbot widget for the website and wonder why the phone still leaks. The phone was the channel. The website was not.\n\nAnswering services solve some of that with humans, and they also introduce scripts that do not know your service area, your after-hours rates, or which ZIP codes you refuse. Voice AI is useful when the job is intake: name, address, urgency, and a callback window, then a task in the full CRM for a human. It fails when someone sells it as a personality that replaces judgment. A Montecito clientele will notice a model that cannot admit uncertainty. A Goleta emergency caller will notice a model that keeps chatting instead of escalating.\n\nWe treat AI receptionist as a layer on marketing automation and missed-call text-back, not a standalone miracle. If contacts still live in a shared inbox, fix the pipes first. If you only need a text when a call is missed, that cheaper workflow may be enough. Voice AI at $99/mo is for owners who want the phone answered with structured intake when staff cannot. Founded in 2026, we still market local businesses the way Ruben Ruiz has since 2007: prove the workflow, then turn it on. Call (805) 307-7600 or email info@sbmc.io when you want the add-on scoped against your real call volume.\n\nSeason and geography change the call mix. Storm weeks and heat waves spike HVAC. UCSB move-in weekends spike plumbing. Summer visitors create one-off requests a resident-focused crew may not want. The receptionist script has to ask the right qualifying questions so your on-call phone is not filled with tire-kickers from outside the drive radius you actually serve from Santa Barbara through Santa Maria. That is operations and marketing sharing one phone tree, not a gadget demo. Competitors will sell a personality. We sell intake, handoff, and a pause button you control.',
    whatsIncluded: [
      {
        title: 'Voice AI add-on scoped to real hours',
        body:
          'Voice AI at $99/mo configured for the windows you cannot cover, with greetings that name your business and Santa Barbara County service area. You approve every sentence a caller might hear. We set quiet hours and escalation so the model is not improvising medical, legal, or price advice you never authorized.',
      },
      {
        title: 'Intake questions that match how you qualify',
        body:
          'Name, callback number, address or neighborhood, urgency, and the job type you actually sell. HVAC, plumbing, and clinic intake differ on purpose. We keep the list short enough that a caller on Coast Village Road does not hang up. Junk fields that staff ignore do not ship.',
      },
      {
        title: 'Handoff into the full CRM',
        body:
          'Completed intakes create or update a contact and a task a human will see. Source and notes stay attached so ads and SEO reports still mean something. If the CRM pipes are missing, we flag marketing automation before we pretend Voice AI can run on a voicemail box alone.',
      },
      {
        title: 'Rules for emergencies versus booked work',
        body:
          'Keywords and simple branches that push true emergencies toward on-call staff and send remodel curiosity to a slower follow-up. Rules stay visible so a bad branch is fixable on a Tuesday. We will not hide routing inside a black box nobody on your team can edit.',
      },
      {
        title: 'Missed-call text-back coordination',
        body:
          'When Voice AI is not the right first move, or when a caller hangs up early, text-back can still recover the lead. We align both so a person does not get a talking model and three duplicate texts. Overlap is how customers feel handled. Coordination is the product.',
      },
      {
        title: 'Staff training and kill switches',
        body:
          'Who monitors transcripts, how to pause the add-on, and what to say when a customer asks for a human immediately. Weekend coverage rules are written down. Theater alerts that nobody honors do not get installed. You stay able to turn Voice AI off without calling a mystery vendor.',
      },
      {
        title: 'Transcript review and script edits',
        body:
          'A recurring look at real calls: where callers abandon, which questions confuse people in Goleta versus Montecito, and which answers need a tighter human handoff. Edits stay dated and approved. We will not silently change claims about pricing, licensing, or arrival windows.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Call path audit',
        body:
          'We listen to how a ring is handled today: cell forwards, office hours, voicemail, and any answering service already in place. You tell us which jobs are emergencies and which can wait until morning. We inventory the full CRM or current inbox. The output is a written recommendation: Voice AI, missed-call text-back, both, or pipes first. If Google Ads spend is high and nobody answers, that diagnosis is part of the deliverable.',
      },
      {
        step: 2,
        title: 'Script and qualification design',
        body:
          'You approve greetings, intake questions, and escalation language. We keep claims limited to facts you own: cities you serve, hours, and how callbacks work. No invented licenses, wait times, or guarantees. Sensitive categories get stricter human handoff. The script is boring on purpose.',
      },
      {
        step: 3,
        title: 'Connect, test, then go live narrowly',
        body:
          'Voice AI at $99/mo connects to the numbers and CRM stages you agree on. We test with real phones on cellular, including a hang-up and an emergency branch. The first live window is narrow so staff can watch transcripts. We will not flip the entire county phone tree on a Friday and leave town.',
      },
      {
        step: 4,
        title: 'Review transcripts and tighten',
        body:
          'Weekly at first, then a calmer cadence: where callers abandon, which questions confuse people, and which tasks humans still ignore. We cut fluff. We escalate faster where the model stalls. If text-back or a human answering service is the better spend, we say so instead of defending the add-on for its own sake.',
      },
    ],
    outcomes: [
      'Voice AI coverage in the hours you choose, billed at the published $99/mo add-on rate.',
      'Intake that lands in the full CRM as a contact and task, not a voicemail nobody returns.',
      'Visible emergency versus booked-work branches your staff can understand and edit.',
      'Coordination with missed-call text-back so customers are not hit with duplicate automations.',
      'Transcript review habits and a clear way to pause the system.',
      'An honest scope note when a human answering service or better phone process beats Voice AI.',
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'How much is the AI receptionist?',
        answer:
          'Voice AI is $99/mo as a published add-on. It sits on top of the CRM and phone setup the workflow needs. The Local Lead Plan is $297/mo or $2,970/yr for its own bundle. We will show both numbers clearly. Platform phone fees, if any, are billed by those vendors.',
      },
      {
        category: 'working-together',
        question: 'Will this guarantee every call gets answered?',
        answer:
          'No, and we will not sell that line. Voice AI can answer when configured to, gather intake, and create follow-up. Networks fail. Callers hang up. Branches mis-route. Humans still close the job. We design for recovery and handoff, not a promise that every ring becomes revenue.',
      },
      {
        category: 'working-together',
        question: 'Is this the same as missed-call text-back?',
        answer:
          'No. Text-back sends a message after a missed ring. Voice AI can pick up and talk through intake. Many Santa Barbara County trades start with text-back because it is simpler. Some add Voice AI when they want the phone answered during jobs. We will recommend one, both, or neither based on call volume and staff habits.',
      },
      {
        category: 'working-together',
        question: 'Can it quote prices or book on the calendar?',
        answer:
          'Only where you have approved clear rules and a calendar integration that staff trust. Open-ended quoting is how models invent numbers. We would rather collect the job details and create a human task than let a model guess a Montecito remodel price on the fly.',
      },
      {
        category: 'getting-started',
        question: 'What do you need before setup?',
        answer:
          'The numbers to forward or ring, hours, service area, what counts as an emergency, and access to the full CRM or the tool that should receive tasks. Sample phrases your front desk already uses help. If logins are missing, the calendar waits.',
      },
      {
        category: 'free-call',
        question: 'How do I get a recommendation for my shop?',
        answer:
          'Book a 20-Minute Call, email info@sbmc.io, or call (805) 307-7600. Bring a rough sense of missed-call volume and who answers today. We will say whether Voice AI at $99/mo, text-back, or marketing automation should come first.',
      },
    ],
    relatedServices: [
      'missed-call-text-back',
      'ai-automation',
      'marketing-automation',
    ],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'cost-of-a-missed-call',
      'google-ads-for-local-business',
      'ai-search-visibility-local-business',
    ],
    relatedIndustries: ['home-services', 'hvac', 'plumbing'],
    pricingNote:
      'Voice AI is $99/mo. It assumes contacts and tasks have a place to land. If the full CRM and phone routing are not ready, implementation time goes into pipes first, often alongside the Local Lead Plan at $297/mo or $2,970/yr when that bundle is the right home for hosting, Local SEO, and follow-up. Chat AI at $29/mo is a separate add-on when website chat is the gap instead of the phone. After we hear your call path and hours, we confirm whether Voice AI, missed-call text-back, or a human process is the better spend. Cancel anytime with 30-day written notice on retainers we manage.',
  },
  {
    slug: 'missed-call-text-back',
    name: 'Missed Call Text-Back',
    shortName: 'Missed-Call Texts',
    navGroup: 'systems',
    icon: 'automations',
    iconBg: 'var(--sbmc-aqua)',
    dateModified: '2026-11-24',
    cardBlurb:
      'Automatic text when a call is missed so the lead is not gone in two rings.',
    metaTitle: 'Missed Call Text-Back in Santa Barbara County',
    metaDescription:
      'Missed call text-back for Santa Barbara County trades. Same-minute recovery texts into your CRM. Honest setup, no fake stats. Book a 20-Minute Call.',
    h1: 'Missed call text-back for Santa Barbara County businesses that lose jobs to the next pin',
    eyebrow: 'Follow-up Systems',
    heroLede:
      'A missed call on a Tuesday afternoon is often a paid lead hanging up. Someone found you on Maps near State Street, in Old Town Goleta, or from a Santa Maria search, tapped call, and hit voicemail while your crew was on a job. Missed call text-back sends a short SMS within moments asking how you can help and whether they want a callback. It is one of the simplest automations in the Local Lead Plan stack, and it only works when the message sounds like your shop, stops on reply, and creates a task a human will honor. We install that workflow for Santa Barbara County operators who are tired of paying for rings that die in voicemail.',
    problemFraming:
      'Home services along the 101 corridor live on speed. The searcher has a leak, a dead HVAC unit, or a breaker that will not reset. They do not leave thoughtful voicemails. They dial the next Google result. Your ads report may still show a call conversion. The job went to the company that texted back while still on a ladder. That gap is not a branding problem. It is a response-time problem.\n\nOwners try sticky-note habits and shared cell phones. Those work until Fiesta week, a storm, or a UCSB move-out cluster hits and volume spikes. Then the texts are late, duplicated, or written like a marketing blast. Customers on Coast Village Road and in Carpinteria neighborhoods notice the difference between a human-sounding recovery text and a spammy drip. Consent and opt-out still matter even when the person called you first. The workflow has to be tight.\n\nMissed call text-back sits beside AI receptionist and marketing automation on purpose. Text-back recovers the hang-up. Voice AI can answer when you want the phone picked up. The full CRM holds the contact so the lead is not trapped in one technician\'s personal messages. If you only install a Zap that texts and never creates a task, you have moved the leak from voicemail into SMS chaos. We build the boring version: trigger, template, stop-on-reply, owner alert, and a Monday report of how many missed rings produced a conversation.\n\nPaid search makes the miss more expensive. A Google Ads or Local Services Ads lead that dies in voicemail still shows as a conversion in some dashboards. Owners raise budgets to fix a phone problem. Text-back is cheaper than another month of wasted media when the real leak is response time. It is not a substitute for enough staff on Friday afternoons when the 101 corridor is jammed and three trucks are already booked. If your close rate on recovered texts is low because nobody calls back the SMS thread, we will say the ops habit has to change before we add more triggers.',
    whatsIncluded: [
      {
        title: 'Trigger tied to real missed rings',
        body:
          'Rules for what counts as missed versus a call answered for two seconds, including after-hours and lunch windows you actually work. Forwarding and tracking numbers get mapped so Google Ads and Maps calls still attribute correctly. A false trigger that texts people who reached you is worse than no automation.',
      },
      {
        title: 'Short SMS copy in your voice',
        body:
          'One or two sentences naming your business, apologizing for the miss, and offering a callback or a photo of the problem. Written for Santa Barbara County callers, not a national franchise script. You approve the words. We will not pack the text with coupons, reviews asks, or links that look like phishing.',
      },
      {
        title: 'Stop-on-reply and opt-out handling',
        body:
          'The sequence ends when the customer texts back. Opt-out language stays plain. Staff see the thread in the full CRM so two people do not double-text. This is how you avoid annoying a Montecito clientele while still moving fast for Goleta emergencies.',
      },
      {
        title: 'Task and alert for a human',
        body:
          'Every missed-call text creates or updates a contact and assigns a follow-up task to the person who should call. Night and weekend alert rules are written down. If nobody will honor the ping, we change the workflow instead of installing theater.',
      },
      {
        title: 'Coordination with Voice AI and review flows',
        body:
          'When AI receptionist or review requests also run, we prevent duplicate messages in the same hour. Recovery texts are for missed rings. Review asks wait until a job is done. Mixing those moments is how automations feel spammy on the South Coast.',
      },
      {
        title: 'Simple recovery reporting',
        body:
          'Counts of missed calls, texts sent, replies, and tasks completed, in English. We will not invent an industry-wide missed-call percentage. You can run your own math with the cost-of-a-missed-call worksheet using your close rate and average job value.',
      },
      {
        title: 'Number and tracking hygiene',
        body:
          'Office lines, mobiles, and Google forwarding numbers get mapped so a miss on an ads line still attributes correctly. We avoid double texts when a call forwards through two devices. Clean routing is unglamorous and it is why the automation feels intentional instead of random.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Map numbers and who should respond',
        body:
          'We list office lines, mobiles, tracking numbers, and after-hours forwards. You name who owns emergencies versus booked estimates. We check whether the full CRM already captures calls. The output is a diagram of the current miss path and a recommendation for text-back alone or text-back plus Voice AI.',
      },
      {
        step: 2,
        title: 'Write and approve the recovery text',
        body:
          'Copy stays short and local. You approve tone, hours mentioned, and any bilingual needs. We set stop-on-reply and the task assignee. Claims about arrival times or pricing stay out unless you supply facts you will honor on a busy Friday.',
      },
      {
        step: 3,
        title: 'Connect, test, watch the first week',
        body:
          'We fire test misses from a real phone, including hang-ups and voicemail. Staff practice answering the SMS thread like a conversation. Duplicate contacts and wrong-number edge cases get fixed early. Launch is a narrow window on purpose.',
      },
      {
        step: 4,
        title: 'Tighten from reply patterns',
        body:
          'After a few weeks we look at which texts get replies and which tasks sit untouched. We shorten copy, change alerts, or adjust hours. If paid search is feeding misses you cannot staff, that becomes an ads and hiring conversation, not another automation layer. Seasonal spikes around storms, Fiesta, and UCSB move weeks get a quick check so the same lunch-hour miss rule still fits the volume you are actually seeing.',
      },
    ],
    outcomes: [
      'An automatic SMS after a true missed ring, with copy you approved.',
      'Contacts and tasks in the full CRM instead of a personal text silo.',
      'Stop-on-reply behavior that respects people who already called you.',
      'Alert rules a named human will actually follow on nights and weekends.',
      'Reporting on misses, replies, and completed callbacks without invented benchmarks.',
      'A clear next step when Voice AI or better staffing is the real fix.',
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'Is missed call text-back included in the Local Lead Plan?',
        answer:
          'It is part of the follow-up systems the Local Lead Plan is built to support, at $297/mo or $2,970/yr for the plan bundle. Exact triggers still need your numbers and CRM access. On a 20-Minute Call we confirm what is already on versus what still needs setup.',
      },
      {
        category: 'working-together',
        question: 'Will customers think it is spam?',
        answer:
          'Not if the text is short, names your business, and stops when they reply. People who just called you expect a fast response. A long marketing blast with three links is what feels like spam. You approve the copy before it goes live.',
      },
      {
        category: 'working-together',
        question: 'How is this different from an AI receptionist?',
        answer:
          'Text-back reacts after a miss. Voice AI can answer the call. Many trades start with text-back because it is simpler and cheaper to operate. Add Voice AI at $99/mo when you want the phone picked up during jobs. We will not sell both if one solves the leak.',
      },
      {
        category: 'working-together',
        question: 'Do I need new phone hardware?',
        answer:
          'Usually no. We work with the forwards and tracking numbers you already use, as long as we can detect a miss and send SMS through the full CRM or connected messaging. If the phone tree is a maze of personal cells, we simplify before automating.',
      },
      {
        category: 'getting-started',
        question: 'What do you need from us?',
        answer:
          'The numbers that ring for Google and the website, who should get after-hours alerts, and login access to the CRM or messaging tool. A sample of how you already text customers helps. Email info@sbmc.io or call (805) 307-7600 to start.',
      },
      {
        category: 'free-call',
        question: 'Can you estimate what missed calls cost us?',
        answer:
          'We will not quote a national statistic as your number. Use your average job value, close rate, and a week of call logs with the cost-of-a-missed-call resource, then we interpret the result on a call. Your math beats a vendor\'s scare chart. Bring whatever call logs or ad reports you already have so the worksheet is grounded in Santa Barbara County reality, not a national average.',
      },
    ],
    relatedServices: [
      'ai-receptionist',
      'marketing-automation',
      'ai-automation',
    ],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'cost-of-a-missed-call',
      'speed-to-lead-follow-up-systems',
    ],
    relatedIndustries: ['home-services', 'hvac', 'plumbing', 'contractors'],
    pricingNote:
      'Missed call text-back is typically implemented as part of the Local Lead Plan follow-up stack at $297/mo or $2,970/yr, or scoped onto an existing full CRM when you are already a client. SMS carrier and platform messaging fees are billed by those vendors. Voice AI at $99/mo can sit beside text-back when you also want the phone answered during jobs, but we will not force both. After we map your numbers and who responds, we confirm what is included versus what needs extra setup, including any bilingual copy you want approved before launch. Cancel anytime with 30-day written notice on retainers we manage.',
  },
  {
    slug: 'email-sms-marketing',
    name: 'Email & SMS Marketing',
    shortName: 'Email & SMS',
    navGroup: 'systems',
    icon: 'social-media',
    iconBg: 'var(--sbmc-peach-light)',
    dateModified: '2026-11-24',
    cardBlurb:
      'Email and text campaigns with consent, brand registration, and offers locals open.',
    metaTitle: 'Email & SMS Marketing in Santa Barbara County',
    metaDescription:
      'Email and SMS marketing for Santa Barbara County. Consent-first texts, A2P brand registration, campaigns that sell. Book a 20-Minute Call.',
    h1: 'Email and SMS marketing for Santa Barbara County businesses that want opted-in customers, not spam complaints',
    eyebrow: 'Follow-up Systems',
    heroLede:
      'Email and SMS can bring a State Street regular back on a Tuesday, fill a slow February table, or remind a Goleta client that maintenance is due. They can also get your domain blocked and your texting number shut down if you blast people who never opted in. We build email and SMS marketing inside the full CRM for Santa Barbara County shops: lists with real consent, campaigns tied to offers you can keep, and SMS that follows TCPA rules and A2P 10DLC brand registration in plain language. Customers must opt in before you text marketing messages. Your brand must be registered for business SMS. We will not grow a list by buying numbers or scraping Google reviews.',
    problemFraming:
      'The Moose and other coastal agencies sell email because it still works when the list is clean. The failure mode we see locally is a Mailchimp export from 2019, a text blast from a personal phone during Fiesta, and no record of who said yes. Deliverability dies. Customers who booked once feel hunted. Carriers block the traffic. Owners then blame the channel instead of the consent mess.\n\nSMS is stricter than email on purpose. Under TCPA-style consent rules, marketing texts need prior express consent. A2P 10DLC is the carrier registration path for application-to-person traffic in the United States: you register the brand and the campaign so carriers know who is sending and why. Skipping that and firing messages from a random handset is how restaurants and salons get filtered overnight. We explain this in plain words before any campaign calendar exists. Opt-in language on forms, keywords like START, and clear opt-out are part of the build, not a legal footnote someone reads later.\n\nSeasonality on the South Coast makes the channel valuable when it is honest. Summer visitors may opt in for a single event and should not get a year of pitches. Residents on the Mesa, in Old Town Goleta, and in Santa Maria want useful cadence: new menu, booking reminder, maintenance window, not a daily digest. Email carries the longer story. SMS carries the time-sensitive nudge. Both should stop when someone replies stop or unsubscribes. The full CRM already holds these tools for many Local Lead Plan clients. This page is the campaign discipline on top of those pipes.\n\nRestaurants near State Street, salons in Goleta, and wineries up the valleys each need different cadences. A tasting allocation text is not a two-for-one lunch blast. A salon reminder is not a retail drop. We refuse one-size calendars that ignore how Santa Barbara County customers actually book. The Moose and other shops will sell volume. We sell consent, deliverability, and offers you can keep when the dining room or the calendar is already full on a Saturday in July.',
    whatsIncluded: [
      {
        title: 'Consent-first list and SMS registration path',
        body:
          'Audit of how people joined, cleanup of obvious bad records, and a plan for TCPA-compliant SMS opt-ins. We help you complete A2P 10DLC brand and campaign registration so carriers can approve business texts. No purchased lists. No quiet imports from old spreadsheets without a consent story.',
      },
      {
        title: 'Email campaigns with a local offer spine',
        body:
          'Campaigns built around what you actually sell this month: tasting seats, service specials, seasonal hours, or product drops. Templates that look like your brand on a phone. We write plain English. We will not invent discounts or inventory you do not have on Coast Village Road.',
      },
      {
        title: 'SMS for time-sensitive nudges only',
        body:
          'Short texts for reminders, ready-order alerts, or same-week offers to people who opted in. Frequency caps you approve. Marketing SMS stays separate from missed-call recovery texts so transactional and promotional intents do not collide in one abusive thread.',
      },
      {
        title: 'Automations that welcome and recover',
        body:
          'Welcome series after signup, abandoned inquiry follow-ups where appropriate, and post-visit thank-yous that can hand off to a review request without nagging. Sequences stay short and stop on reply. A twelve-email course is not a local service business strategy.',
      },
      {
        title: 'Segmentation that respects visitor versus resident',
        body:
          'Tags for tourists, locals, VIPs, and service reminders so Fiesta traffic does not get your February resident nurture. Santa Barbara County seasonality is a real filter. Blasting everyone the same note is how unsubscribes spike after Labor Day.',
      },
      {
        title: 'Reporting on opens, clicks, replies, and unsubscribes',
        body:
          'Plain-language reports that include the health metrics, not only vanity open rates. We watch complaint and opt-out signals. If a creative angle burns trust, we kill it. We will not promise a revenue-per-send number before your list and offer are real.',
      },
      {
        title: 'Offer calendar tied to the county year',
        body:
          'A simple plan for Fiesta, summer visitors, UCSB calendars, and the quiet weeks after Labor Day so you are not improvising subject lines the morning of a send. You approve the calendar. We would rather skip a week than train your list to ignore you.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consent, tools, and offer inventory',
        body:
          'We review forms, checkout opt-ins, paper signups, and any SMS history. You list offers you can honor for the next quarter. We check the full CRM or current email tool. The output is a go or no-go on SMS until A2P 10DLC registration and opt-in language are ready, plus an email plan that does not depend on a dirty list.',
      },
      {
        step: 2,
        title: 'Register, clean, and template',
        body:
          'Brand registration for SMS moves forward when you want texting. Email templates and SMS snippets get written in your voice. Legal-required elements stay plain: who you are, why they get the message, how to stop. You approve every customer-facing line before a send.',
      },
      {
        step: 3,
        title: 'Launch a narrow cadence',
        body:
          'We start with one welcome flow and one campaign, not a twelve-week novel. Deliverability and reply quality get watched. Staff learn where conversations land in the CRM. If SMS carriers delay approval, email still ships. We will not blast through a registration gap.',
      },
      {
        step: 4,
        title: 'Iterate from unsubscribes and revenue signals',
        body:
          'Monthly, we look at what people opened, what they booked, and what made them leave. Segments tighten. Frequency drops when the list is tired. When Meta ads or the website should feed better opt-ins, we say so instead of squeezing a stale list harder.',
      },
    ],
    outcomes: [
      'A consent story you can defend for email and SMS, including A2P 10DLC brand registration when texting.',
      'Campaign templates and automations inside the full CRM, written for Santa Barbara County offers.',
      'SMS reserved for opted-in, time-sensitive messages with clear stop instructions.',
      'Segments that separate visitors from residents and VIPs from one-time buyers.',
      'Reporting that includes unsubscribes and complaints, not only opens.',
      'A cadence staff can keep through summer peaks and quiet winters.',
    ],
    faqs: [
      {
        category: 'working-together',
        question: 'What is A2P 10DLC in plain words?',
        answer:
          'It is the carrier registration system for business texting in the United States. You register your brand and the kind of messages you send so networks can tell legitimate SMS from spam. Without it, marketing texts get filtered or blocked. We help you complete registration before campaigns scale.',
      },
      {
        category: 'working-together',
        question: 'Can I text anyone who called or emailed us?',
        answer:
          'Not for marketing. Customers must opt in to marketing SMS. A missed-call recovery text after they dialed you is a different workflow with its own rules. Promotional blasts need prior consent and opt-out. We keep those paths separate on purpose.',
      },
      {
        category: 'working-together',
        question: 'Is this part of marketing automation?',
        answer:
          'Email and SMS campaigns sit on the same full CRM pipes as marketing automation. Automation is the board, triggers, and reminders. This service is the campaign strategy, consent, creative, and cadence. Many Local Lead Plan clients use both. We will not duplicate tools for sport.',
      },
      {
        category: 'working-together',
        question: 'Do you buy email lists?',
        answer:
          'No. Purchased lists damage deliverability and trust on the South Coast. We grow from your forms, checkout, in-person opt-ins, and ads that collect consent the right way. Slow clean growth beats a big dirty blast.',
      },
      {
        category: 'websites',
        question: 'Can you add opt-in to our website?',
        answer:
          'Yes. Forms and checkout checkboxes need clear language about email and SMS. We coordinate with web design or ecommerce builds so consent is recorded in the CRM. A hidden pre-checked box is not consent we will ship.',
      },
      {
        category: 'getting-started',
        question: 'What does setup cost relative to the Local Lead Plan?',
        answer:
          'Campaign work is often scoped for clients already on the Local Lead Plan at $297/mo or $2,970/yr, or quoted as a project when the CRM and lists need a rebuild. Carrier and email-platform fees are separate. After we see your list health and goals, we send a written range. Cancel anytime with 30-day written notice on retainers we manage.',
      },
      {
        category: 'free-call',
        question: 'How do we start?',
        answer:
          'Book a 20-Minute Call, email info@sbmc.io, or call (805) 307-7600. Bring how you currently collect emails or texts and one offer you can honor this month. We will tell you whether consent cleanup or creative is the first job.',
      },
    ],
    relatedServices: [
      'marketing-automation',
      'meta-ads',
      'ecommerce-websites',
    ],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'speed-to-lead-follow-up-systems',
      'cost-of-a-missed-call',
    ],
    relatedIndustries: [
      'restaurants-hospitality',
      'salons',
      'retail-shops',
      'wineries',
    ],
    pricingNote:
      'Email and SMS cost follows list hygiene work, whether A2P 10DLC registration is still ahead, how many automations you need, and whether creative is monthly or campaign-by-campaign. Platform email, SMS, and carrier fees are billed by those vendors. After we audit consent and the full CRM, we send a written range that separates cleanup, registration help, and ongoing campaign management. The Local Lead Plan at $297/mo or $2,970/yr may already include CRM foundations this work sits on. Ecommerce welcome flows after a first order can share the same pipes when a store is in scope. Cancel anytime with 30-day written notice on retainers we manage.',
  },
  {
    slug: 'local-service-ads',
    name: 'Local Services Ads',
    shortName: 'Local Services Ads',
    navGroup: 'found',
    icon: 'google-ads',
    iconBg: 'var(--sbmc-peach)',
    dateModified: '2026-11-24',
    cardBlurb:
      'Google Local Services Ads for trades that need hire-intent leads above the Map Pack.',
    metaTitle: 'Local Services Ads in Santa Barbara County',
    metaDescription:
      'Google Local Services Ads management for Santa Barbara County trades. Google Guaranteed setup, lead review, clear budgets. Book a 20-Minute Call.',
    h1: 'Local Services Ads for Santa Barbara County home services that want hire-intent leads',
    eyebrow: 'Paid Search',
    heroLede:
      'Local Services Ads sit at the top of many Google results for plumbers, HVAC techs, electricians, and other home services in Santa Barbara County. They are not the same product as Google Ads search campaigns. You pay per lead, pass Google\'s screening for the Google Guaranteed or Google Screened badge where you qualify, and live or die on how fast you dispute junk and book real jobs. We manage Local Services Ads for South Coast and North County trades with the same honesty we use on Google Ads: media is separate from management, tracking is plain, and if your reviews or phone process cannot support the badge, we will say so before you buy leads you cannot close.',
    problemFraming:
      'A Goleta homeowner searching emergency HVAC or a Carpinteria search for plumber near me often sees Local Services Ads before the Map Pack and before standard text ads. That placement is why competitors push LSA hard. It is also why a messy profile fails publicly. Google shows ratings, job types, and a book or call path. If your review velocity is frozen, your service area is fantasy-wide, or nobody answers within minutes, you pay for leads that bounce to the next Guaranteed badge.\n\nOwners confuse LSA with Google Ads all the time. Search ads bill on clicks and need keyword structure, landing pages, and conversion tracking. Local Services Ads bill on leads Google considers valid inside their product. Dispute windows matter. Weekend response matters. Job types you enable matter. Turning on every category from Santa Barbara through San Luis Obispo to chase volume is how you buy tire-kickers outside your drive time on the 101. We set geography and services around trucks you can actually roll.\n\nLSA also depends on reputation work you may already need. Google Guaranteed screening looks at licensing, insurance, and background checks for eligible categories. Weak or unanswered reviews make the unit less competitive even when leads are cheap. We pair this service with review management and Google Ads when the account needs both products. We will not pretend LSA replaces Local SEO. Organic Maps still matters when ad budgets pause. Founded in 2026, we still tell trades when their phone process, not the auction, is the bottleneck. Email info@sbmc.io or call (805) 307-7600 if you want that diagnosis before spend starts.\n\nDispute culture is part of the job. Not every lead Google bills is a real opportunity. Wrong numbers, spam, and out-of-area requests show up. Waiting two weeks to review the queue is how you donate budget. We build a daily or near-daily habit for whoever owns the phone: book, decline, or dispute. That habit matters as much as the badge on the ad unit. If your team will not open the LSA inbox, we will recommend pausing spend before we pretend management can invent closes.',
    whatsIncluded: [
      {
        title: 'Account setup and Google Guaranteed path',
        body:
          'Help creating or repairing the Local Services Ads profile, selecting job types you actually want, and walking licensing and insurance steps for Google Guaranteed or Google Screened where your trade qualifies. We will not invent credentials. If a category is not eligible, we say so and point you to Google Ads instead.',
      },
      {
        title: 'Service area and schedule that match the trucks',
        body:
          'Radius and city choices tied to Santa Barbara, Goleta, Carpinteria, Montecito, Santa Maria, Lompoc, and the valleys you can reach on a weekday. Budgets and hours follow when someone can answer. Overnight leads with nobody on call are how dispute rates climb.',
      },
      {
        title: 'Lead triage and dispute discipline',
        body:
          'A process for reviewing each lead quickly, booking the good ones, and disputing junk inside Google\'s windows. Staff get a simple rubric. We will not promise Google will side with every dispute. We will keep the paperwork honest and on time.',
      },
      {
        title: 'Phone and CRM handoff',
        body:
          'Leads route into the full CRM or your call process with source tagged. Missed-call text-back can cover hang-ups after an LSA connect. If response time is the leak, we fix that before raising weekly caps. Speed is part of the product Google is selling under your name.',
      },
      {
        title: 'Review and profile alignment',
        body:
          'Listing categories, photos, and review request habits checked so the LSA unit does not contradict your Google Business Profile. When review management should run in parallel, we scope it rather than hoping the badge alone carries trust on the South Coast.',
      },
      {
        title: 'Reporting that separates lead cost from close rate',
        body:
          'Weekly or monthly views of leads, dispute outcomes, and spend, with honesty about jobs won when you share close data. We will not invent a countywide cost-per-lead benchmark. Your job types and seasons set the math.',
      },
      {
        title: 'Budget caps tied to staffing',
        body:
          'Weekly lead caps that match how many estimates your crew can run from Carpinteria through North County without drowning the phone. Raising caps when nobody can answer is how LSA turns into expensive noise. You approve changes before they go live.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Fit check: LSA, Google Ads, or both',
        body:
          'We read your trade, license status, review profile, and current Google Ads account if one exists. Some categories win with LSA first. Others need keyword ads because LSA inventory is thin or eligibility fails. You get a written recommendation before media money moves. Local Services Ads versus Google Ads is a real choice, not a upsell ladder.',
      },
      {
        step: 2,
        title: 'Build the unit and the response path',
        body:
          'Profile, job types, geography, budget caps, and the phone or CRM path go live together. You approve every public claim. Screening paperwork is on you with our checklist. We test a lead flow before raising spend. If nobody can answer within minutes, the launch waits.',
      },
      {
        step: 3,
        title: 'Operate disputes and quality',
        body:
          'Early weeks focus on response time, job-type pruning, and dispute hygiene. We cut services that only produce tire-kickers. We expand only where close rates and drive times make sense from Carpinteria through North County.',
      },
      {
        step: 4,
        title: 'Quarterly reset against seasonality',
        body:
          'HVAC seasons, storm weeks, and slow winters change lead prices and intent. We revisit caps, hours, and creative on the Business Profile. When standard Google Ads should take more budget, we say so with numbers from your account, not a generic blog chart.',
      },
    ],
    outcomes: [
      'An LSA profile aligned to job types and cities your crews can serve in Santa Barbara County.',
      'A clear path through Google Guaranteed or Google Screened screening when your trade qualifies.',
      'Lead response and dispute habits that protect budget from junk.',
      'CRM or phone tagging so LSA leads are visible next to organic and Google Ads inquiries.',
      'Reporting on spend, leads, and disputes without invented benchmarks.',
      'A documented recommendation when Google Ads or Local SEO should carry more of the hire-intent load.',
    ],
    faqs: [
      {
        category: 'ads',
        question: 'Are Local Services Ads the same as Google Ads?',
        answer:
          'No. Local Services Ads are a separate Google product that usually bills per lead and uses the Guaranteed or Screened badge. Google Ads search campaigns bill per click and need keywords and landing pages. Many trades run both. We will tell you which should get the first dollar.',
      },
      {
        category: 'ads',
        question: 'Do you mark up LSA lead spend?',
        answer:
          'No. Lead charges bill through Google. Our fee is management: setup, optimization, dispute coaching, and reporting. You will see both numbers. Mixing media into a vague retainer is how owners lose the plot.',
      },
      {
        category: 'ads',
        question: 'Can you guarantee a cost per lead?',
        answer:
          'No. Google sets lead prices by category and market. We control job types, geography, hours, and how fast you respond. We will share planning ranges after we see your trade and history, and we will say when the math does not work.',
      },
      {
        category: 'ads',
        question: 'What if we are not eligible for Google Guaranteed?',
        answer:
          'Some categories use Google Screened instead, and some should skip LSA for standard Google Ads. Eligibility depends on Google\'s rules and your paperwork. We will not fake a badge path. We will route you to the product that can legally run.',
      },
      {
        category: 'seo',
        question: 'Do we still need reviews and Local SEO?',
        answer:
          'Yes. LSA units show ratings and compete on reputation. Organic Maps still matters when ads pause. Review management and Local SEO stay relevant. Ads do not replace a neglected profile on Hollister or State Street searches.',
      },
      {
        category: 'getting-started',
        question: 'How does this relate to the Local Lead Plan?',
        answer:
          'The Local Lead Plan at $297/mo or $2,970/yr covers website, Local SEO, review requests, and follow-up foundations. LSA media and LSA management sit outside that bundle unless we write them in. After a fit check, we send a management range and a suggested weekly lead budget.',
      },
      {
        category: 'free-call',
        question: 'Ready to see if LSA fits?',
        answer:
          'Book a 20-Minute Call, email info@sbmc.io, or call (805) 307-7600. Bring your license type, service cities, and whether anyone answers leads after 5 p.m. We will be direct if the phone process has to improve before spend.',
      },
    ],
    relatedServices: ['google-ads', 'review-management', 'local-seo'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'local-services-ads-vs-google-ads',
      'google-ads-for-local-business',
      'cost-of-a-missed-call',
    ],
    relatedIndustries: ['home-services', 'hvac', 'plumbing', 'electricians'],
    pricingNote:
      'Local Services Ads has two costs: lead charges billed by Google, and management paid to us. Lead prices move with category, season, and how tight your job types are. After we check eligibility, reviews, and response time, we send a written management range and a suggested weekly cap. The Local Lead Plan remains $297/mo or $2,970/yr for its website, Local SEO, review requests, and follow-up bundle and does not include LSA media unless we write that in. Google Ads management, if you run both products, is scoped separately so you can see which channel booked the job. Cancel anytime with 30-day written notice on retainers we manage.',
  },
  {
    slug: 'website-maintenance',
    name: 'Website Maintenance',
    shortName: 'Site Care',
    navGroup: 'convert',
    icon: 'websites',
    iconBg: 'var(--sbmc-sage)',
    dateModified: '2026-11-24',
    cardBlurb:
      'Hosting, updates, and care framed as the Local Lead Plan, not a mystery retainer.',
    metaTitle: 'Website Maintenance in Santa Barbara County',
    metaDescription:
      'Website care for Santa Barbara County. Hosting, updates, and Local Lead Plan support at $297/mo or $2,970/yr. Book a 20-Minute Call.',
    h1: 'Website maintenance for Santa Barbara County businesses that want a care plan, not a plugin graveyard',
    eyebrow: 'Convert & Grow',
    heroLede:
      'A marketing site only stays useful if someone updates content, watches uptime, keeps forms posting, and fixes the small breaks that appear after a phone OS update or a third-party script change. Website maintenance at Santa Barbara Marketing Co is not a junk drawer of WordPress plugins. For most clients the care plan is the Local Lead Plan: $297/mo or $2,970/yr, which includes hosting with the marketing site plus Local SEO, review requests, and follow-up systems. If you only need a light update retainer on a site we did not build, we will say what we can support and what should be a redesign instead.',
    problemFraming:
      'South Coast businesses often buy a site, celebrate launch, then ignore it until a form fails during Fiesta weekend or SSL warns Chrome users on Coast Village Road. Another vendor sells a cheap hosting plan with no content help. Updates stack up. The homepage still promotes a summer menu from two years ago. Competitors with quieter sites and working click-to-call take the job.\n\nPlugin-heavy builders make this worse. Each add-on is another thing that can break on mobile. Owners pay monthly for "maintenance" that is really a backup checkbox nobody tests. When something fails, the ticket sits while a plumber in Goleta keeps paying for ads that hit a dead form. Care should mean a human watches the conversion path, not only a green server light.\n\nOur framing is deliberate. The Local Lead Plan is the care plan for the websites we build and the SEO and follow-up layered on them. Hosting lives there. Content edits and SEO tasks live there. Missed-call and CRM foundations live there. A standalone maintenance upsell that duplicates those fees is how agencies double-bill. If your site is a crumbling page builder we cannot responsibly host, we will recommend website redesign before a care contract. Founded in 2026, we would rather refuse a fragile stack than bill you monthly to babysit a failure waiting to happen. Call (805) 307-7600 or email info@sbmc.io for a straight read on which bucket you are in.\n\nOwners also confuse hosting with strategy. A $10 host with no one watching forms is not cheaper once a weekend of ads hits a dead endpoint. The Local Lead Plan exists so hosting, Local SEO, review requests, and follow-up sit in one monthly relationship at $297/mo or $2,970/yr. That is the care plan we want you to evaluate, not a side retainer that quietly doubles fees. If you only need DNS and SSL on a static brochure you edit yourself, say so on the call and we will tell you when that is enough.',
    whatsIncluded: [
      {
        title: 'Hosting inside the Local Lead Plan',
        body:
          'For sites on the plan, hosting is part of the $297/mo or $2,970/yr bundle rather than a mystery line item. DNS and SSL stay watched. We will list any third-party tools that still bill you directly, including email, booking, and call tracking, so the invoice story stays honest.',
      },
      {
        title: 'Content and small edit cadence',
        body:
          'Hours, services, photos, and offer updates that keep the site true to how you operate on State Street or Hollister. We prioritize edits that affect calls and bookings. A full creative redesign is a different project. Care is accuracy, not endless art direction on a page that already converts.'
      },
      {
        title: 'Form, phone, and conversion checks',
        body:
          'Periodic tests that forms still post to the full CRM, click-to-call still works on iOS, and thank-you pages still fire. When a third-party script breaks INP or privacy banners hide the number, we catch it before your ads budget notices first. Tourist weekends on the waterfront are when broken paths hurt most, so those checks are not optional theater.',
      },
      {
        title: 'Dependency and security hygiene',
        body:
          'Updates to the modern stack we ship, dependency patches, and removal of abandoned scripts. We do not run a forty-plugin WordPress carnival. If your current site requires that model, redesign is the honest path before maintenance. Security updates without a conversion check still leave you with a secure site nobody can call.',
      },
      {
        title: 'Local SEO and review care overlap',
        body:
          'Plan clients get Local SEO and review request support in the same monthly relationship, so the site and the Google Business Profile do not drift apart. Maintenance is not isolated from whether the phone rings. That is the point of the bundle.',
      },
      {
        title: 'Uptime awareness and incident response',
        body:
          'When the site errors, someone on our side gets a path to respond during agreed hours. We will not claim an enterprise SLA we do not sell. We will tell you how to reach us and what "down" means for a marketing site versus a full store.',
      },
      {
        title: 'Monthly note in plain English',
        body:
          'What changed, what broke, what we are watching, and what should become a redesign or ads conversation. Silence is not care. A vanity uptime screenshot without conversion notes is not care either for a Santa Barbara County lead-gen site.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Stack and goal fit',
        body:
          'We inspect the current site, hosting, forms, and who edits content today. If the Local Lead Plan is the right care wrapper, we map what the $297/mo or $2,970/yr bundle already covers. If the site is unsafe to maintain, you get a redesign recommendation instead of a retainer quote.',
      },
      {
        step: 2,
        title: 'Stabilize hosting and conversion paths',
        body:
          'DNS, SSL, analytics, and CRM forms get verified. Broken phone links and outdated hours get fixed first. You approve any public copy changes. We still will not invent awards or results to fill empty sections.',
      },
      {
        step: 3,
        title: 'Set the edit and SEO rhythm',
        body:
          'A simple request process for content changes, plus the Local SEO and review habits included in the plan. Staff know how to ask for an update without emailing a vague "website stuff" thread. Priority goes to anything blocking leads.',
      },
      {
        step: 4,
        title: 'Review quarterly for redesign or expansion',
        body:
          'If the templates cannot support new services, ecommerce, or speed goals, we scope website redesign. If traffic is fine but follow-up fails, we point to automations. Care plans should not hide a site that needs replacement. Quarterly reviews also catch abandoned scripts, expired offers left on the homepage, and Google Business Profile details that drifted from the site copy after a move or hour change on Hollister or State Street.',
      },
    ],
    outcomes: [
      'A clear care home: usually the Local Lead Plan at $297/mo or $2,970/yr with hosting included for sites we support.',
      'Working forms, phone links, and SSL watched as conversion infrastructure.',
      'A content edit path that keeps hours and offers current for Santa Barbara County visitors.',
      'Dependency hygiene on a modern stack instead of plugin sprawl.',
      'Monthly communication about what changed and what still risks leads.',
      'An honest trigger to redesign when maintenance would only delay a rebuild.',
    ],
    faqs: [
      {
        category: 'websites',
        question: 'Is website maintenance a separate fee from the Local Lead Plan?',
        answer:
          'For most clients, no. The Local Lead Plan at $297/mo or $2,970/yr is the care plan: hosting with the marketing site, Local SEO, review requests, and follow-up foundations. We will not double-charge a vague maintenance line that duplicates the plan. Out-of-scope rebuilds are quoted separately.',
      },
      {
        category: 'websites',
        question: 'Do you maintain WordPress sites you did not build?',
        answer:
          'Sometimes for light edits if the stack is healthy. Often we will recommend a redesign onto the same modern approach as this agency site because plugin-heavy builds are expensive to babysit. We would rather say no than bill monthly for a fragile system.',
      },
      {
        category: 'websites',
        question: 'What is not included in care?',
        answer:
          'Full redesigns, new ecommerce stores, net-new landing page programs, and ad media. Those get their own scopes. Care keeps the current marketing site accurate, hosted, and connected to forms and SEO work already in the plan.',
      },
      {
        category: 'websites',
        question: 'How fast do content edits happen?',
        answer:
          'Small updates like hours, photos, and service blurbs turn around on a dated queue you will see in writing. Large copy rewrites or new templates may need a mini project date. "Soon" is not a date on our side either.',
      },
      {
        category: 'working-together',
        question: 'Can we cancel the plan?',
        answer:
          'Yes. Cancel anytime with 30-day written notice on retainers we manage. We will outline hosting handoff so your domain does not go dark because someone forgot DNS.',
      },
      {
        category: 'getting-started',
        question: 'How do we switch care to SBMC?',
        answer:
          'Book a 20-Minute Call, email info@sbmc.io, or call (805) 307-7600. Bring domain login, current host, and who edits the site today. We will tell you whether the Local Lead Plan fits or whether redesign must come first. If you already pay another vendor for a plugin maintenance package, bring that invoice so we can show what overlaps with $297/mo or $2,970/yr instead of stacking fees.',
      },
    ],
    relatedServices: ['web-design', 'website-redesign', 'local-seo'],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'website-maintenance-cost',
      'web-design-cost-santa-barbara',
      'why-your-website-isnt-getting-leads',
    ],
    relatedIndustries: [
      'professional-services',
      'home-services',
      'restaurants-hospitality',
    ],
    pricingNote:
      'For sites we host and support, website care is framed as the Local Lead Plan at $297/mo or $2,970/yr (2 months free on the annual option), which already includes hosting with the marketing site plus Local SEO, review requests, and follow-up foundations. Third-party tools still bill separately. If your site needs a rebuild before it is safe to maintain, we quote website redesign first and only then move you onto the care plan. Project-only hosting without SEO is rarely what local lead-gen businesses need, and we will say when a lighter arrangement is honest. Cancel anytime with 30-day written notice on retainers we manage.',
  },
  {
    slug: 'website-redesign',
    name: 'Website Redesign',
    shortName: 'Redesign',
    navGroup: 'convert',
    icon: 'websites',
    iconBg: 'var(--sbmc-sage)',
    dateModified: '2026-11-24',
    cardBlurb:
      'Rebuild an aging site without throwing away the SEO equity worth keeping.',
    metaTitle: 'Website Redesign in Santa Barbara County',
    metaDescription:
      'Website redesign for Santa Barbara County. Preserve useful URLs, fix speed and conversion, ship phone-first. Book a 20-Minute Call.',
    h1: 'Website redesign for Santa Barbara County businesses that outgrew a slow, dated site',
    eyebrow: 'Convert & Grow',
    heroLede:
      'Most owners who contact us already have a website. It loads slowly on cellular near Stearns Wharf, hides the phone number, or still runs on a page builder that fights every edit. Website redesign is the project of replacing that system with a fast, accessible, phone-first marketing site while keeping the URLs and content that still earn search traffic. We do not rebuild for a mood board alone. We rebuild when templates, speed, or conversion paths cannot be fixed inside the current stack. If conversion optimization or Local SEO would hire faster than a full redesign, we will say so before you pay for pixels.',
    problemFraming:
      'Artizen and other Central Coast shops sell redesign because the demand is real. Santa Barbara County is full of sites launched for a ribbon cutting and then patched until forms break. The owner knows the brand looks tired. The deeper problem is often technical: layout shift on every hero, a chat widget blocking the call button, or a blog of thin posts that never should have been URLs. A redesign that only changes fonts leaves those leaks intact.\n\nSEO fear stops good projects. Owners worry Google will forget them if the theme changes. The real risk is launching without a redirect map, deleting service pages that rank, or moving to a JavaScript-heavy setup that never renders content for users on the 101 corridor. We inventory what earns impressions today, keep what deserves to live, and cut doorway pages that only swap city names. Redesign without losing SEO is a process, not a slogan. We still will not promise rankings after launch.\n\nThere is also the "new look, same offer" trap. A Montecito professional firm with vague services and stock photography will not convert just because the site is prettier. A Goleta contractor with strong reviews and a buried contact path might. We pair information architecture with Core Web Vitals and WCAG AA habits you can inspect on this agency site. After launch, the Local Lead Plan at $297/mo or $2,970/yr is how hosting, Local SEO, and follow-up continue. Redesign is the replacement event. Care is the ongoing plan.\n\nDemos and prospects in this county often arrive with a site that looks fine in a screenshot and fails on a phone in the Funk Zone. Page weight, font loading, and third-party tags are the quiet killers. Redesign is the chance to remove what you do not need. We keep photography that is real, cut stock, and rebuild the contact path so a thumb can call from the first screen. If the business has changed services since the last launch, the sitemap changes with it. A new skin on an obsolete offer list is still a bad site.',
    whatsIncluded: [
      {
        title: 'SEO and URL inventory before design',
        body:
          'Search Console and analytics review of pages that earn impressions or conversions. Keep, merge, or kill decisions get written down. Redirects are planned before the new templates go live so equity does not fall into soft 404s across Santa Barbara County queries.',
      },
      {
        title: 'Sitemap and conversion rewrite',
        body:
          'Homepage, services, location context, and contact rebuilt around how you sell now, not how the 2016 brochure was ordered. Each page has a job: call, book, or write. We remove sections that only exist because the old theme had a slot for them.',
      },
      {
        title: 'Phone-first design and modern build',
        body:
          'Layouts proven on a narrow viewport first, then widened. Development on a modern stack with static rendering where it helps, reserved image space, and accessible forms. You will not get another plugin theme with a palm overlay and a new logo.',
      },
      {
        title: 'Core Web Vitals and accessibility as ship gates',
        body:
          'Largest Contentful Paint, layout shift, keyboard access, contrast, and labeled inputs checked on staging. If a design flourish wrecks LCP on cellular, we change the design. Metrics beat mood boards at launch time.',
      },
      {
        title: 'Content migration with an honesty pass',
        body:
          'Useful copy moves forward. Fluff, fake awards, and outdated offers get cut. We can rewrite service pages in the same specific voice as this site. You still confirm facts. We will not invent years in business or review counts to fill a hero.',
      },
      {
        title: 'Launch redirects, analytics, and CRM forms',
        body:
          'Old URLs map to new ones. Analytics and Search Console reconnect. Forms post to the full CRM when you use it. A post-launch window catches broken links and mobile surprises before you increase ads spend into the new templates.',
      },
      {
        title: 'Hand-off into Local Lead Plan care',
        body:
          'After redesign, hosting and ongoing SEO or follow-up typically move into the Local Lead Plan at $297/mo or $2,970/yr. Maintenance is framed there on purpose so you are not sold a rebuild and an orphan care fee that overlaps.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Diagnose rebuild versus repair',
        body:
          'We look at speed, accessibility, CMS pain, URL value, and conversion path. Sometimes conversion optimization or a landing page is enough. When the stack cannot support the business, redesign is the recommendation. You get that call in writing with what we would keep from the old site.',
      },
      {
        step: 2,
        title: 'IA, redirects, and content plan',
        body:
          'Sitemap, redirect sheet, and copy responsibilities get dated. Photography gaps are flagged early. Claims you want on the new site need sources. If logins, photos, and content are late, the 30-day live clock does not start. Live in 30 days once we have your logins, photos and content still applies to focused marketing redesigns.',
      },
      {
        step: 3,
        title: 'Design and build against phone metrics',
        body:
          'You review phone-width layouts, then we build templates with real content. Staging tests cover Core Web Vitals, keyboard flows, and click-to-call. Feedback rounds have a stop date so the project does not drift past a season you care about.',
      },
      {
        step: 4,
        title: 'Launch, watch, then care',
        body:
          'Redirects go live with DNS. We monitor Search Console for spike errors and fix them quickly. Ads and SEO strategy adjust to the new URLs. Ongoing edits and Local SEO move into the Local Lead Plan care relationship unless you only wanted a project handoff. The first thirty days after launch are for catching mobile surprises and soft 404s, not for opening a new mood-board round.',
      },
    ],
    outcomes: [
      'A written keep-merge-kill URL plan and redirects that protect equity worth saving.',
      'Phone-first templates on a modern stack with Core Web Vitals treated as launch criteria.',
      'Service and contact paths rebuilt for how Santa Barbara County customers actually hire.',
      'Content cleaned of outdated offers and unsupported claims.',
      'Analytics, Search Console, and CRM forms connected on day one of the new site.',
      'A clear bridge into Local Lead Plan care at $297/mo or $2,970/yr when ongoing hosting and SEO are needed.',
    ],
    faqs: [
      {
        category: 'websites',
        question: 'Will a redesign hurt our SEO?',
        answer:
          'It can if you launch without redirects, delete useful pages, or ship a site that fails to render. It can help if you keep strong URLs, improve speed, and clarify services. We plan the migration on purpose. We still will not guarantee rankings after launch.',
      },
      {
        category: 'websites',
        question: 'How is redesign different from web design?',
        answer:
          'Web design covers new sites and builds in general. Redesign assumes an existing URL set, brand residue, and SEO history to respect. The engineering bar is the same. The migration work is heavier. If you have no site, start on the web design service.',
      },
      {
        category: 'websites',
        question: 'How long does a redesign take?',
        answer:
          'Focused marketing redesigns can be live in 30 days once we have your logins, photos and content. Large archives, membership, or messy multi-domain history add time. You get a dated outline. Waiting on copy still pauses the calendar.',
      },
      {
        category: 'websites',
        question: 'Should we redesign or just run conversion optimization?',
        answer:
          'If templates are fast enough and the CMS is usable, test conversion paths first. If the stack is slow, inaccessible, or impossible to edit safely, redesign is the cheaper long-term move. We will not sell a full rebuild to avoid a simpler fix.',
      },
      {
        category: 'seo',
        question: 'Do you keep our blog?',
        answer:
          'Only the posts that earn traffic or support real services. Thin city doorway posts usually get redirected or removed. A redesign is a chance to stop paying crawl budget for filler.',
      },
      {
        category: 'getting-started',
        question: 'What happens after launch for hosting?',
        answer:
          'Most clients move into the Local Lead Plan at $297/mo or $2,970/yr for hosting, Local SEO, and follow-up care. Project-only handoffs are possible when you have another host. We will write that choice down before build day.',
      },
      {
        category: 'free-call',
        question: 'How do we get a redesign recommendation?',
        answer:
          'Book a 20-Minute Call, email info@sbmc.io, or call (805) 307-7600. Share the current URL and what feels broken: speed, leads, or editing pain. We will say redesign, repair, or a different channel first. If Search Console access is available, bring it so the URL keep list starts from real impressions across Santa Barbara County queries instead of guesses.',
      },
    ],
    relatedServices: [
      'web-design',
      'website-maintenance',
      'conversion-optimization',
    ],
    relatedLocations: relatedLocationSlugs,
    relatedResources: [
      'website-redesign-without-losing-seo',
      'why-your-website-isnt-getting-leads',
      'web-design-cost-santa-barbara',
    ],
    relatedIndustries: [
      'professional-services',
      'restaurants-hospitality',
      'home-services',
    ],
    pricingNote:
      'Redesign cost follows how many templates you need, how large the URL migration is, how much original copy and photography is ready, and whether CRM or booking forms are in scope. A five-page contractor rebuild is a different job than a multi-service professional firm with a decade of URLs. After we audit the current site, we send a written project range and timeline tied to when logins, photos, and content arrive. Ongoing care usually sits in the Local Lead Plan at $297/mo or $2,970/yr after launch so hosting and Local SEO do not become an afterthought. Ecommerce or membership rebuilds are scoped as their own products when the marketing redesign would be the wrong container. Cancel anytime with 30-day written notice on retainers we manage.',
  },
];
