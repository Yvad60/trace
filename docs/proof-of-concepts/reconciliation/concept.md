# POC 3 — Reconciliation

**Goal:** Verify that SMS transactions can be matched against statement transactions.

## Context

We cannot rely on SMS alone: a message is sometimes never sent, the phone might be off, and so on. We will use mobile money and bank account statements as a second source of truth.

## Expected behavior

```text
SMS Transaction
      ↕
Statement Transaction
```

Any information missing from SMS can be recovered from the statement documents.

## Needed validations

- Exact matches
- Date/amount matches
- Missing SMS transactions
- Missing statement transactions
- Duplicate transactions
- Conflicting information
- Confidence levels
- Available statement document formats
- Automation possibilities
- Manual review cases
