---
title: Why you need bundle size monitoring
date: 2021-06-12T00:00:00Z
slug: monitoring-bundle-size
---

Recently translations for Brazilian Portuguese reached the point where we could enable them inside the [Outline](https://www.getoutline.com?ref=tommoor) interface (as a rule I wait until there is at least 90% translation coverage before enabling the option in language settings).

This seemingly small task ended up being a fantastic example of how working on the web with it’s black hole of dependencies can often spiral in ways that are mostly unpredictable.

To enable a new language, it’s also important to enable the locale in the [date-fns](https://date-fns.org/) library to ensure that dates and times through the UI are formatted correctly. Unfortunately date-fns was out of date enough that `pt_BR` didn’t exist and an updated version was needed. Maybe you can see where this is going?

![Bundle Size](/images/bundle-size.png)

Oh crap – upon upgrading we were struck with a [12% increase in overall application size](https://github.com/outline/outline/pull/2164#issuecomment-853502150) (big thanks to [RelativeCI](https://relative-ci.com/) for so usefully exposing this info directly within pull requests). And so began a week of experiments, changing of import styles, auditing of async chunks, and more.

We were able to finally get this down to a _reduction_ in the original bundle size through a combination of:

- Restore the webpack config for `mainFields` to the default value so that it properly considered dependencies exporting es6 modules
- Ensuring the components imported as an async chunk in one place are also imported async elsewhere
- Changing the import syntax from `import format from "date-fns/format"` to `import { format } from "date-fns"`

I think this really speaks to the importance of having bundle size exposed in the PR process!