# ==================================================
# STAGE 1: INSTALL DEPENDENCIES
# ==================================================
FROM node:20-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


# ==================================================
# STAGE 2: BUILD NEXT.JS APPLICATION
# ==================================================
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build


# ==================================================
# STAGE 3: PRODUCTION IMAGE (yang jadi image final)
# ==================================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV HOSTNAME="0.0.0.0"

# Command yang dijalankan saat container START
# server.js = file server Next.js yang di-generate oleh standalone build
CMD ["node", "server.js"]
