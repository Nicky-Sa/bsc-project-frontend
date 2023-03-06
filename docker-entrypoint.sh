#!/bin/sh

echo "Waiting for the Backend to start..."
chmod +x wait-for
./wait-for bsc-project-backend:5005

echo "Building and Starting the Frontend..."
yarn run up:production