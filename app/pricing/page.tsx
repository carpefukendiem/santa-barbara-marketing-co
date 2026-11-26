import type { Metadata } from 'next';
import { AnswerFirst } from '@/components/seo/AnswerFirst';
import { JsonLd } from '@/components/seo/JsonLd';
import { PricingPage } from '@/components/pricing/PricingPage';
import { pricingPlan } from '@/data/pricing';
import { ppcManagement } from '@/data/ppc-management';
import { ADDONS } from '@/lib/addons';
import {
  breadcrumbSchema,
  faqPageSchema,
  localLeadPlanSchema,
  webPageSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing: Local Lead Plan $297/mo',
  description:
    'The Local Lead Plan is $297/mo, or $2,970/yr with 2 months free. Website, full CRM, follow-up, reporting, and training. Voice AI, Chat AI, and PPC Management are optional and not included.',
  path: '/pricing',
});

/** Must match the visible FAQ copy on PricingPage. */
const pricingFaqs = [
  {
    question: 'Is there a long-term contract?',
    answer:
      'No. The Local Lead Plan is billed monthly or annually. Cancel anytime with 30-day written notice.',
  },
  {
    question: 'How does the annual option work?',
    answer: `Pay $${pricingPlan.annualAmount} once a year instead of $${pricingPlan.monthlyAmount} a month. That is 2 months free.`,
  },
  {
    question: `Is Voice AI or Chat AI in the $${pricingPlan.monthlyAmount}?`,
    answer: `No. They are optional add-ons: Voice AI is $${ADDONS.voice_ai.monthlyAmount}/mo and Chat AI is $${ADDONS.chat_ai.monthlyAmount}/mo. Add either, both, or neither. Website chat is already included in the plan.`,
  },
  {
    question: `Is Google Ads included in the $${pricingPlan.monthlyAmount}?`,
    answer: `No. PPC management is an optional add-on at $${ppcManagement.monthlyAmount}/mo. You pay Google for ad spend on your own card (minimum $${ppcManagement.minAdBudgetMonthly}/mo). Same price as a standalone service.`,
  },
  {
    question: 'Can I talk to someone before I start?',
    answer:
      'Yes. Book a call and talk it through first. When you start, a local team comes to meet you and learn the business.',
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: '/pricing',
            name: 'Pricing: Local Lead Plan $297/mo',
            description:
              'The Local Lead Plan pricing for Santa Barbara County businesses.',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
          localLeadPlanSchema(),
          faqPageSchema(pricingFaqs),
        ]}
      />
      <PricingPage
        afterHero={
          <AnswerFirst
            answer={`The Local Lead Plan is $${pricingPlan.monthlyAmount}/mo or $${pricingPlan.annualAmount}/yr and includes a website (typically live in 30 days), local SEO, Google Business Profile work, and a full CRM with follow-up. Voice AI is $${ADDONS.voice_ai.monthlyAmount}/mo, Chat AI is $${ADDONS.chat_ai.monthlyAmount}/mo, and PPC Management is $${ppcManagement.monthlyAmount}/mo as optional add-ons.`}
            facts={[
              { label: 'Monthly', value: `$${pricingPlan.monthlyAmount}/mo` },
              { label: 'Yearly', value: `$${pricingPlan.annualAmount}/yr` },
              {
                label: 'Voice AI',
                value: `$${ADDONS.voice_ai.monthlyAmount}/mo optional`,
              },
              {
                label: 'Chat AI',
                value: `$${ADDONS.chat_ai.monthlyAmount}/mo optional`,
              },
              {
                label: 'PPC Management',
                value: `$${ppcManagement.monthlyAmount}/mo optional`,
              },
            ]}
          />
        }
      />
    </>
  );
}
