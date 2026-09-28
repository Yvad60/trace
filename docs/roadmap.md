# Trace — Roadmap

## Phase 1 — Foundation

- Create monorepo structure.
- Set up NestJS backend.
- Set up PostgreSQL database.
- Set up Next.js web app.
- Set up React Native Android app.
- Define shared transaction/domain types.

## Phase 2 — SMS Capture

- Implement Android SMS receiver.
- Detect mobile money and bank transaction SMS.
- Store raw SMS locally.
- Implement reliable synchronization queue.
- Send SMS to backend.
- Handle retries and duplicate messages.

## Phase 3 — Transaction Processing

- Store raw source data.
- Implement mobile money parser.
- Implement bank parser.
- Normalize transactions into a common model.
- Preserve provider-specific data.
- Add transaction status/state management.

## Phase 4 — Statement Import

- Import mobile money statements.
- Import bank account statements.
- Parse statement transactions.
- Store statement source data.
- Detect duplicates.

## Phase 5 — Reconciliation

- Match SMS transactions with statements.
- Detect missing transactions.
- Detect duplicates.
- Detect conflicting data.
- Use balances as consistency checks.
- Mark uncertain cases for manual review.
- Recover transactions found only in statements.

## Phase 6 — Transaction Intelligence

- Implement categorization.
- Implement category rules.
- Handle fees.
- Detect transfers between MTN and BK.
- Handle internal transfers.
- Group transactions.

## Phase 7 — Web Review

- Build the transaction list.
- Add filters and search.
- Build the reconciliation dashboard.
- Add statement upload.
- Add the review queue.
- Show transaction details and source evidence.
- Support manual correction and approval.

## Phase 8 — Money Manager Integration

- Implement Money Manager adapter.
- Connect to PC Manager.
- Map accounts and categories.
- Create transactions.
- Create transfers.
- Prevent duplicate exports.
- Track export status.

## Phase 9 — Reliability

- Implement error handling.
- Add audit history.
- Add synchronization monitoring.
- Define a backup strategy.
- Add data validation.
- Recover from interrupted synchronization.

## Phase 10 — Refinement

- Improve matching accuracy.
- Improve categorization rules.
- Improve web workflow.
- Add useful reports.
- Reduce manual reconciliation work.

## Target Flow

```text
SMS
 ↓
Capture
 ↓
Backend
 ↓
Parse
 ↓
Statement Reconciliation
 ↓
Review Exceptions
 ↓
Verify
 ↓
Money Manager
```
