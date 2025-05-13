docker build -t fe-build-and-test .
docker run -d -p 3000:3000 fe-build-and-test