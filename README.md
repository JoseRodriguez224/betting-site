# CupBet — FIFA World Cup 2026 Prediction Markets

Polymarket-style World Cup prediction markets with live scores and MetaMask USDT funding.

**Live site:** https://joserodriguez224.github.io/cupbet/

## Custom domain (recommended for a professional URL)

To use a natural URL like `https://cupbet.com`:

1. Buy a domain (e.g. Namecheap, Google Domains, Cloudflare Registrar).
2. In GitHub: **cupbet repo → Settings → Pages → Custom domain** → enter `cupbet.com`.
3. At your domain registrar, add DNS records GitHub shows (usually `A` records + `CNAME` for `www`).
4. Wait up to 24 hours for DNS to propagate.

Your site will then load at `https://cupbet.com` instead of the GitHub URL.

## Local development

```bash
npm install
npm run dev
```

## Deploy

Push to `main` — GitHub Actions builds and publishes automatically.

```bash
git push origin main
```

## Repository

Separate from the portfolio site at [joserodriguez224.github.io](https://joserodriguez224.github.io).
