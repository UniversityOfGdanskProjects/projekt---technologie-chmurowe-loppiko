#!/bin/sh

sleep 10

for file in /docker-entrypoint-initdb.d/*.json; do
    echo "$file"
    collection=$(basename "$file" .json)
    mongoimport --db mydatabase --collection "$collection" --file "$file"
done
