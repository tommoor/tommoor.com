---
title: HTTPS in development
date: 2024-09-01T00:00:00Z
slug: https-in-development
---

Recently we switched to using HTTPs for our development environments, I also
registered the `outline.dev` domain to reserve it for this purpose. You might
wonder why you would bother, after all it's not as though you're going to
be man-in-the-middled by a malicious actor on your local machine.

Of course, the main reason is to ensure that your development environment
behaves as closely as possible to production. This is especially important
when you're using a service worker, as they will only work over HTTPS.

You'd be forgiven for thinking that it's complicated to set up SSL certificates
for your development environment. `mkcert` allows you to create a local
certificate authority and generate SSL certificates for your development
environment in a single line of code…

```
mkcert -cert-file ./public.cert -key-file ./private.key "*.outline.dev"
mkcert -install
```

See this in action in the [outline/outline codebase](https://github.com/outline/outline/blob/main/server/scripts/install-local-ssl.js).
