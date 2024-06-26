docker network create mynetwork

# Budowanie obrazów
docker build -t mongo-test-image -f Dockerfile.mongo .
docker build -t backend-express-image -f Dockerfile.express .
docker build -t frontend-react-image -f Dockerfile.react .

# Uruchamianie kontenerów
docker run -p 27017:27017 --rm --name mongo-database --network mynetwork mongo-test-image
docker run -p 3001:3001 -d --rm --name express-app --network mynetwork backend-express-image
docker run -p 3000:3000 --rm --name react-app --network mynetwork frontend-react-image
