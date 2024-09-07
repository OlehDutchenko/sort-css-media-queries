# This file is used to build the local development image

FROM node:12-alpine

RUN apk --no-cache add git libc6-compat

WORKDIR /app
