#!/bin/sh

echo "Waiting for the Backend to start..."
chmod +x wait-for
./wait-for bsc-project-backend:5000

echo "Building and Starting the Frontend..."
yarn run production