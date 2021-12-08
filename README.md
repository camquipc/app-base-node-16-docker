# app-base-node-16-docker
App base de NODEJS v16 en Docker Container

# Building Docker Image

```
docker build . -t <nombre_imagen>

#example

docker build . -t node-api2

```

# Show Images Docker

```
docker images

```

# Run the image 

```
docker run -p 5000:5000 -d node-api2

```

# Test app container

```
curl -i localhost:5000

```

![creditos...](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
 