# POC 1 — Android SMS Capture

**Goal:** Verify that our app, running on an Android phone, can reliably capture mobile money and bank transaction SMS.

## Expected behavior

```text
Android SMS
    ↓
Kotlin BroadcastReceiver
    ↓
React Native
    ↓
Display captured SMS
```

## Needed validations

- SMS reception
- Sender detection
- Message body extraction
- Timestamp extraction
- Permission requirements
- Can we capture in the background?
- Can we extract past messages?

## Notes

No backend or database is required for this POC.
