#!/bin/sh

# Wait for MongoDB to be ready
echo "Waiting for MongoDB to be ready..."
until mongosh --eval "print(\"waited for connection\")"; do
    echo "MongoDB not ready, sleeping..."
    sleep 2
done

echo "MongoDB is ready, starting import..."

# Import JSON files
for file in /docker-entrypoint-initdb.d/*.json; do
    collection=$(basename "$file" .json)
    mongoimport --host localhost --db mydatabase --collection "$collection" --file "$file"
done

echo "Import finished."