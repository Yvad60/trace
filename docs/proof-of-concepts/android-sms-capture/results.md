# POC — Android SMS Capture: Results

**Code reference**: https://github.com/Yvad60/gymnasium/tree/sms-reader

**Verdict: confirmed.**

The app can read historical SMS messages (sender, message text, timestamp) from the
phone's inbox, and can also detect and capture new messages as they arrive — even while
the app is closed. Both were verified end-to-end on a physical Android device.

## What was tested

- **Reading past messages** — pulling sender, body, and date for messages already on the
  phone, filterable by date range. Confirmed working.
- **Capturing new messages live** — reacting the moment a message arrives, including
  when the app isn't open. Confirmed working, including with the app fully closed.
- **Sender identification** — correctly identifies both phone numbers and
  alphanumeric senders (e.g. bank/mobile money names).
- **Permissions** — only requires standard SMS read/receive permissions. The app does
  not need to be set as the default SMS app, and no root access is required.
- **Reliability while closed** — tested on a device from a manufacturer known for
  aggressively killing background apps; captured messages while fully closed were
  still recovered on next launch.

## Still to check

Live capture while the app is open in the foreground, and messages split across
multiple SMS parts, use the same approach but haven't been explicitly tested yet.

## Conclusion

Both core questions — can we read existing SMS, and can we react to new ones as they
arrive, even with the app closed — are answered with a confirmed **yes**, verified on a
real device.
