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
│ Self Hosted │
│ MoneyMatter |
│   Backend   │
└──────┬──────┘
       │
       ▼
Self Hosted MoneyMatter Web App

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
- Transaction verification
- Transaction Track
- MTN/BK parsing
- Statement processing
- Reconciliation
- Categorization
- Transfer detection
- Synchronization
- Money Manager integration

## Web App

MoneyMatter will be used as the web app, and it will be self hosted.
