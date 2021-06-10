set -e
rm -rf node_modules/.cache
next build
next export
touch out/.nojekyll
echo www.tommoor.com >> out/CNAME
git add out/
git commit -m "Deploy to gh-pages"
git push origin `git subtree split --prefix out main`:gh-pages --force