# Use the official Ubuntu 20.04 as base
FROM ubuntu:20.04

# Install nginx and curl
RUN apt-get update && apt-get upgrade -y && apt-get install -y nginx curl && rm -rf /var/lib/apt/lists/*

# Expose the port of the service
EXPOSE 80

# Run a command after the creation of the container
CMD ["nginx", "-g", "daemon off;"]