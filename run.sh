docker build -t mongo-test-image -f Dockerfile.mongo .
docker run -p 27017:27017 --rm --name mongodb mongo-test-image
