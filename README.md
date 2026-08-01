## Development

To run a development server:

```
yarn install
yarn dev
```

## Deployment

Merging to `main` builds the site and deploys it to GitHub Pages via the
[Deploy workflow](.github/workflows/deploy.yml). The workflow can also be run
manually from the Actions tab.

To produce the static site locally:

```
yarn build
yarn next export
```
