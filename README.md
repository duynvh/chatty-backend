# To run app. You must install redis, mongodb

## Run with docker

### Redis:
- `docker run --name chatty-backend-redis -p 6379:6379 -d redis`

### MongoDB:
- `docker run --name chatty-backend-mongo -p 27017:27017 -v /home/duynvh/Documents/code/nodejs/chatty-backend/.docker/mongodb:/data/db -d mongo`
