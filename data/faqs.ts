export type FaqItem = {
  question: string;
  answer: string;
  category:
    | 'getting-started'
    | 'seo'
    | 'ads'
    | 'websites'
    | 'working-together'
    | 'free-call'
    | 'homepage';
};

export const faqs: FaqItem[] = [
  {
    category: 'homepage',
    question: 'How long does it take to see results?',
    answer:
      'It depends on the work. A Google Ads campaign can start sending calls in days if tracking is set up correctly. A new website is usually live in four to eight weeks, depending on content and reviews. Local SEO is slower: most businesses see movement in three to six months, not because we are stalling, but because Google needs consistent signals. We will tell you which timeline applies before you start, and we will not sell a 30-day ranking promise.',
  },
  {
    category: 'homepage',
    question: 'Do you work with small businesses?',
    answer:
      'Yes. Most of the 805 is small and mid-size businesses, and that is who this agency is built for. If you are a one-location shop, a clinic, a restaurant, or a contractor with a truck and a Google Business Profile, you are the right size. We are not a good fit if you need a 20-person brand team or a national media buy. We are a good fit if you want a clear plan, a site that loads on a phone, and reporting you can read without a decoder.',
  },
  {
    category: 'homepage',
    question: 'What makes you different from other agencies?',
    answer:
      'We live in the 805, we publish what we can prove, and we treat getting found, getting chosen, and getting followed up with as one system. A lot of local sites invent testimonials and hide pricing. We will not invent reviews, star ratings, or client names. Where we do not have a case study yet, we say so and explain how we will measure the work. That is an intentional difference, not a gap we paper over.',
  },
  {
    category: 'homepage',
    question: 'How do we get started?',
    answer:
      'Book a free call. We ask about the business, look at your current visibility before we talk, and come to the call with a short list of what we would do first. If it makes sense to work together, we send a proposal. If not, you leave with the list. No contract, no pressure.',
  },
  {
    category: 'getting-started',
    question: 'What happens on a free call?',
    answer:
      'We look at your current visibility before we talk, then spend about thirty minutes on where you show up today, what nearby competitors are doing, and what we would fix first. If it makes sense to work together, we send a proposal. If not, you leave with the list.',
  },
  {
    category: 'getting-started',
    question: 'Do I have to sign a contract after the call?',
    answer:
      'No. The plan is the deliverable. If we work together after that, we agree on a scope in writing. We do not use long-term lock-ins as a default. Month-to-month or defined project terms are the norm, spelled out before any invoice.',
  },
  {
    category: 'getting-started',
    question: 'Who will I actually work with?',
    answer:
      'A small team. You will not be handed to a rotating account coordinator in another time zone. Strategy, the website, and campaign work are run by people who know this market. If a specialist is needed for a specific task, we will tell you who that is and why.',
  },
  {
    category: 'getting-started',
    question: 'What information do you need from us to start?',
    answer:
      'Access to Google Business Profile, Google Analytics, Search Console, and any ad accounts you already have. A short list of the services you actually want to sell. Photos you already own. Who answers the phone. That is enough to begin. We will not ask you to fill out a 12-page brand questionnaire before we look at your Map Pack.',
  },
  {
    category: 'seo',
    question: 'Can you guarantee first-page rankings?',
    answer:
      'No, and you should be wary of anyone who does. Rankings move. Competitors spend. Google changes how the Map Pack is assembled. We can control the quality of your pages, your profile, your reviews process, and your technical health. We cannot control Google. We measure calls, form fills, and booked work, not a screenshot of a keyword in position three on a Tuesday.',
  },
  {
    category: 'seo',
    question: 'Why does a Goleta business struggle to rank in downtown Santa Barbara?',
    answer:
      'Google Local uses proximity, prominence, and relevance. If your pin is in Old Town Goleta, downtown searches often prefer businesses closer to State Street, even when your service is better. You can still win Goleta and west-side queries, and you can compete for some citywide terms with strong relevance. Pretending a Goleta pin will dominate downtown Maps is how budgets get wasted. We will tell you which geography is realistic.',
  },
  {
    category: 'seo',
    question: 'How important are Google reviews?',
    answer:
      'Velocity and recency matter more than a frozen five-star average from 2019. A steady stream of recent, specific reviews helps prominence. We set up a request process that is honest and easy for customers. We do not write reviews, buy them, or gate them. If your rating is weak because of a real service issue, marketing will not cover that. Fix the work, then ask for the review.',
  },
  {
    category: 'seo',
    question: 'Do I need a separate page for every neighborhood?',
    answer:
      'Not if those pages would say the same thing with a different street name. That is doorway spam, and it is how a lot of out-of-town operators still build. We write a page when there is a real difference in the market, the search behavior, or the offer. Santa Barbara, Goleta, Montecito, and Carpinteria each get that treatment. Neighborhoods appear as context inside those pages, not as 40 thin clones.',
  },
  {
    category: 'ads',
    question: 'How much should a local business spend on Google Ads?',
    answer:
      'Enough to collect statistically useful data without lighting money on fire. For many 805 service businesses that is a few thousand dollars a month in media, not $400 and a hope. Search in this market is expensive on some terms and cheap on others. We will not pick a number to impress you. We will look at your close rate, your job value, and what a qualified call is worth, then set a budget that can actually learn.',
  },
  {
    category: 'ads',
    question: 'Why did my last Google Ads account waste money?',
    answer:
      'The usual pattern is broad match on vanity keywords, no call tracking, a slow landing page, and brand terms that look like a win while competitors take the high-intent jobs. We rebuild around the searches that mean someone wants to hire you this week, send that traffic to a page that loads and asks for the call, and show you which campaigns produced work. If we cannot measure it, we do not scale it.',
  },
  {
    category: 'ads',
    question: 'Do you mark up ad spend?',
    answer:
      'Media spend goes to Google. Our fee is for management, tracking, and creative. You will see both numbers. If a platform rebate or partner benefit exists, it is disclosed. Hidden markups are how trust dies in month two.',
  },
  {
    category: 'websites',
    question: 'How long does a new website take?',
    answer:
      'Four to eight weeks is typical for a marketing site with a clear sitemap, provided content arrives on time. Custom features, booking, or a large photo library add time. We will give you a dated outline, not a vague “soon.” If you are waiting on us, you will know. If we are waiting on copy or logins, we will say that too.',
  },
  {
    category: 'websites',
    question: 'Will my site work on a phone at the beach?',
    answer:
      'That is the point. Most of your visitors are on a phone, often on cellular, often impatient. We build for Core Web Vitals, readable type, and a tap target that actually calls you. This site is built the same way we build client sites. If a design looks pretty in a desktop mockup and fails on a 390-pixel screen, it is not done.',
  },
  {
    category: 'websites',
    question: 'Do you use templates?',
    answer:
      'We use a modern stack, not a page-builder theme with 40 plugins. Design is original to your business. Components are reused where they help speed and accessibility. You will not get a cloned “home services” template with your logo swapped in.',
  },
  {
    category: 'working-together',
    question: 'How do you price your work?',
    answer:
      'By scope. A website, a Local SEO engagement, and an ads account are different jobs. We send a written range after we understand the market, the current site, and the tracking you already have. If a starting range is published on a service page, that is a floor, not a surprise later. If a range is not listed, it is because it depends on the account, and we will not invent a number to look decisive.',
  },
  {
    category: 'working-together',
    question: 'Are there long-term contracts?',
    answer:
      'Not by default. SEO needs time, so we recommend a horizon of at least 90 days so the work has a chance to show. That is a recommendation, not a trap. Terms are in the proposal. If you want out because the work is not happening, that is a conversation we should have with the reporting in front of us, not a buried clause.',
  },
  {
    category: 'working-together',
    question: 'How do you report?',
    answer:
      'In English. Calls, forms, booked jobs when you can share them, and the campaigns or pages that produced them. You will not get a 14-tab dashboard of vanity metrics. If something is down, we say so and what we are changing. Monthly is typical. Ads can be weekly while an account is being rebuilt.',
  },
  {
    category: 'working-together',
    question: 'Do you work with businesses outside Santa Barbara County?',
    answer:
      'Sometimes, if the work is a fit. The agency is built around the 805. If you are in Ventura or Santa Ynez and the market maps onto what we already do, we can talk. We will not open a thin city page for a town we do not intend to serve well.',
  },
  {
    category: 'free-call',
    question: 'Is the call really free?',
    answer:
      'Yes. Thirty minutes, no credit card, no contract. If we work together afterward, that is a separate agreement.',
  },
  {
    category: 'free-call',
    question: 'What should I have ready?',
    answer:
      'Your website, the city you serve, and a primary goal are enough. If Google Business Profile access is missing, we will note what we could not see. We will not invent a visibility score to fill the gap.',
  },
  {
    category: 'free-call',
    question: 'What if I already have an agency?',
    answer:
      'You can still book the call. It is a second set of eyes on search, the site, and follow-up. We will not trash another vendor. We will point at gaps. If those gaps are already on their roadmap, you will know.',
  },
  {
    category: 'free-call',
    question: 'Will you spam me after I book?',
    answer:
      'No. You will get the calendar confirmation and the call. We will not add you to a drip sequence of “just checking in.” If you say you are not moving forward, that is the end of the sales conversation.',
  },
];

export function faqsByCategory(category: FaqItem['category']): FaqItem[] {
  return faqs.filter((item) => item.category === category);
}

export const homepageFaqs = faqs.filter((item) => item.category === 'homepage');
export const freeCallFaqs = faqs.filter((item) => item.category === 'free-call');
