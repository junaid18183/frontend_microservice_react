FROM node:17.0.1-slim as builder

WORKDIR /build
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .

RUN chown -Rh $user:$user /build
USER $user

RUN npm ci
COPY --chown=node:node . .
RUN npm run build

FROM nginx:1.21.4
COPY --from=builder /build/build/ /etc/nginx/html/
# This doc folder is copied from backend to frontend in ci before docker build.