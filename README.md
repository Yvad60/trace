# Trace

Emphasize transaction traceability

## Overview

Trace is a personal transaction tracking and reconciliation system.

It captures transaction SMS from **mobile money** and **banks**, reconciles them with account statements, and synchronizes verified transactions into a dedicated **Money Manager**.

## Core Workflow

```text
SMS
 ↓
Phone
 ↓
Trace Backend
 ↓
Reconciliation
 ↓
Web Review
 ↓
Verified Transactions
 ↓
Money Manager
```

## Main Components

### Phone

- Captures relevant SMS.
- Stores messages locally until synchronized.
- Sends them to the backend.

### Backend

- Stores transactions and source data.
- Parses mobile money and bank transactions.
- Reconciles SMS with statements.
- Detects missing, duplicate, and conflicting transactions.
- Handles categorization and transfers.

### Web App

The primary interface for laptop use.

- Reviews transactions.
- Imports statements.
- Resolves reconciliation issues.
- Manages categories and rules.
- Monitors synchronization.

### Money Manager

The final destination for verified transactions.
