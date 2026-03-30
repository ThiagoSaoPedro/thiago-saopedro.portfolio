#!/bin/bash

# Build and run the portfolio with Docker

DOCKER_IMAGE="portfolio:latest"
CONTAINER_NAME="portfolio-app"

echo "Building Docker image..."
docker build -t $DOCKER_IMAGE .

if [ $? -ne 0 ]; then
  echo "Failed to build Docker image"
  exit 1
fi

echo "Stopping existing container (if any)..."
docker stop $CONTAINER_NAME 2>/dev/null
docker rm $CONTAINER_NAME 2>/dev/null

echo "Running container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 3000:3000 \
  $DOCKER_IMAGE

echo "Portfolio is running at http://localhost:3000"
