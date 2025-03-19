FROM node:alpine as base

FROM base AS deps

RUN apk update && apk add --no-cache libc6-compat && apk add git
WORKDIR /app
COPY . .
RUN npm update --legacy-peer-deps
RUN npm run build


FROM base AS production

WORKDIR /app
COPY --from=deps /app ./
ENV NODE_OPTIONS=--max-old-space-size=1024
EXPOSE 3000
CMD ["npm", "start"]