# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo 'amethyst.codes' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lad475/amethyst-codes.git master:gh-pages

cd -