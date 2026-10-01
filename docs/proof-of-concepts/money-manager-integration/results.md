# POC 1 — Android SMS Capture: Results

**Verdict: confirmed.**
Introducing [MoneyMatter](https://github.com/letehaha/moneymatter) An open source personal finance manager for the web.

The app will act as both our Money manager and the web interface, therefore we don't need to build a separate web interface.

Since MoneyMatter is open source, we will self host it on our own server, and we will be able to customize it to our needs.

We will create an API endpoint to receive the transactions from Trace, and then we will create a script to import the transactions into MoneyMatter.

**Note**
The original proposed architecture will need to be changed, since we will not be using a separate web interface, but rather MoneyMatter as our web interface.
