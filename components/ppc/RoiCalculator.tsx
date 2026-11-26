'use client';

import { useId, useState } from 'react';
import { ppcManagement } from '@/data/ppc-management';
import { formatUsd } from '@/lib/utils';

function parsePositiveNumber(raw: string): number | null {
  const trimmed = raw.trim();
  if (trimmed === '') return null;
  const value = Number(trimmed.replace(/,/g, ''));
  if (!Number.isFinite(value) || value < 0) return null;
  return value;
}

export function RoiCalculator() {
  const baseId = useId();
  const jobValueId = `${baseId}-job-value`;
  const extraJobsId = `${baseId}-extra-jobs`;
  const adBudgetId = `${baseId}-ad-budget`;
  const resultId = `${baseId}-result`;

  const [jobValueRaw, setJobValueRaw] = useState('');
  const [extraJobsRaw, setExtraJobsRaw] = useState('');
  const [adBudgetRaw, setAdBudgetRaw] = useState('');

  const jobValue = parsePositiveNumber(jobValueRaw);
  const extraJobs = parsePositiveNumber(extraJobsRaw);
  const adBudget = parsePositiveNumber(adBudgetRaw);

  const allFilled = jobValue !== null && extraJobs !== null && adBudget !== null;
  const budgetTooLow =
    adBudget !== null && adBudget < ppcManagement.minAdBudgetMonthly;

  let result: number | null = null;
  let resultMessage: string | null = null;

  if (allFilled && !budgetTooLow) {
    result =
      jobValue * extraJobs -
      ppcManagement.monthlyAmount -
      adBudget;
    resultMessage =
      result >= 0
        ? `Estimated monthly net: ${formatUsd(result)}`
        : `Estimated monthly net: -${formatUsd(Math.abs(result))}`;
  }

  return (
    <div className="rounded-2xl border border-rule bg-cream/40 p-6 sm:p-8">
      <h3 className="font-display text-2xl text-ink sm:text-3xl">
        Simple ROI estimate
      </h3>
      <p className="mt-3 max-w-2xl text-stone">
        Enter your own numbers. The estimate is job value times extra jobs, minus
        the ${ppcManagement.monthlyAmount} management fee, minus your monthly ad
        budget. This is an estimate based on the numbers you enter, not a
        prediction of results.
      </p>

      <form
        className="mt-8 grid gap-6 sm:grid-cols-3"
        onSubmit={(event) => event.preventDefault()}
        noValidate
      >
        <div>
          <label htmlFor={jobValueId} className="block text-sm font-medium text-ink">
            Average job value (USD)
          </label>
          <input
            id={jobValueId}
            name="averageJobValue"
            type="number"
            inputMode="decimal"
            min={0}
            step="1"
            value={jobValueRaw}
            onChange={(event) => setJobValueRaw(event.target.value)}
            className="mt-2 w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-ink focus:border-tile focus:outline-none focus:ring-2 focus:ring-tile/40"
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor={extraJobsId} className="block text-sm font-medium text-ink">
            Extra jobs per month
          </label>
          <input
            id={extraJobsId}
            name="extraJobsPerMonth"
            type="number"
            inputMode="decimal"
            min={0}
            step="1"
            value={extraJobsRaw}
            onChange={(event) => setExtraJobsRaw(event.target.value)}
            className="mt-2 w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-ink focus:border-tile focus:outline-none focus:ring-2 focus:ring-tile/40"
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor={adBudgetId} className="block text-sm font-medium text-ink">
            Monthly ad budget (USD)
          </label>
          <input
            id={adBudgetId}
            name="monthlyAdBudget"
            type="number"
            inputMode="decimal"
            min={ppcManagement.minAdBudgetMonthly}
            step="1"
            value={adBudgetRaw}
            onChange={(event) => setAdBudgetRaw(event.target.value)}
            aria-describedby={`${adBudgetId}-hint`}
            className="mt-2 w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-ink focus:border-tile focus:outline-none focus:ring-2 focus:ring-tile/40"
            autoComplete="off"
          />
          <p id={`${adBudgetId}-hint`} className="mt-2 text-xs text-stone">
            Minimum ${ppcManagement.minAdBudgetMonthly}/mo paid directly to Google.
          </p>
        </div>
      </form>

      <div
        id={resultId}
        className="mt-6 min-h-[3rem]"
        role="status"
        aria-live="polite"
      >
        {!allFilled ? (
          <p className="text-sm text-stone">
            Fill in all three fields to see an estimate.
          </p>
        ) : budgetTooLow ? (
          <p className="text-sm text-ink">
            Ad budget must be at least ${ppcManagement.minAdBudgetMonthly}/mo.
          </p>
        ) : resultMessage ? (
          <p className="font-display text-2xl text-ink">{resultMessage}</p>
        ) : null}
      </div>
    </div>
  );
}
