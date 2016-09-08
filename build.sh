#!/bin/bash
# This file is meant to run during the docker build, not manually.
echo 'Building latest...'
git checkout master
mkdocs build
mv site /usr/share/nginx/html/latest

echo 'Building tags...'
printf '{ "versions": [\"latest\", ' >> /usr/share/nginx/html/versions.json
for tag in $(git tag); do
    git checkout $tag
    rm -rf site
    mkdocs build
    mv site /usr/share/nginx/html/$tag
    printf "\"$tag\", " >> /usr/share/nginx/html/versions.json
done
sed -i -E "s@(,\s+)\$@@" /usr/share/nginx/html/versions.json
printf ']}' >> /usr/share/nginx/html/versions.json