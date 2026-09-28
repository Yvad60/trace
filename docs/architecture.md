# Trace — Architecture

## Overview

Trace is split into three main components:

```text
┌─────────────┐
│   Android   │
│ SMS Capture │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Backend   │
│  + Database │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Web App UI  │
└──────┬──────┘
       │
       ▼
 Money Manager
```

## Android

Responsible only for:

- Receiving SMS
- Storing messages locally
- Synchronizing with the backend
- Retrying failed synchronization

Recommended stack:

- React Native
- Small Kotlin layer for Android SMS functionality
- Local SQLite storage

## Backend

The central source of truth.

Responsible for:

- Transaction storage
- MTN/BK parsing
- Statement processing
- Reconciliation
- Categorization
- Transfer detection
- Synchronization
- Money Manager integration

Recommended stack:

- NestJS
- TypeScript
- PostgreSQL/SQLite

## Web App

The primary user interface, optimized for laptop use.

Responsible for:

- Transaction browsing
- Statement uploads
- Reconciliation
- Manual review
- Categorization
- Rules
- Reports and synchronization status

Recommended stack:

- Next.js
- TypeScript

## Money Manager

**Trace is not a Money Manager.** A dedicated Money Manager remains the final accounting application.

Trace communicates with it through a dedicated adapter, so the rest of the system remains independent of the Money Manager implementation.

## Core Principle

```text
Phone = Capture
Backend = Source of Truth
Web = Review
Money Manager = Accounting Destination
```
