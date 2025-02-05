# Monorepo Starter with Express and tRPC

This is a monorepo starter template using Express and tRPC with Turborepo.

## Apps

- `mobile`: Expo app
- `web`: Next.js app
- `server`: Express server with tRPC

## Packages

- `@rizrmdhn/api`: tRPC API implementation
- `@rizrmdhn/db`: Drizzle database client
- `@rizrmdhn/auth`: Authentication utilities
- `@rizrmdhn/types`: Shared TypeScript types
- `@rizrmdhn/validators`: Zod validators

## Tooling

- `@rizrmdhn/eslint-config`: ESLint configurations
- `@rizrmdhn/prettier-config`: Prettier configurations
- `@rizrmdhn/tailwind`: Tailwind CSS configs
- `@rizrmdhn/tsconfig`: TypeScript configurations

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build
pnpm build
```

## Key Features

- Full-stack type safety with tRPC
- Robust Express.js server
- Authentication system
- Code sharing between apps
- Configured tooling:
  - TypeScript
  - ESLint
  - Prettier
  - Tailwind CSS
  - Turborepo for monorepo management

## Scripts

Common commands available in all apps and packages:

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Lint code
- `pnpm format` - Format code
- `pnpm typecheck` - Type check

## Database Commands

- `pnpm db:generate` - Generate database migrations
- `pnpm db:migrate` - Run database migrations
- `pnpm db:push` - Push schema changes to database
- `pnpm db:studio` - Open Prisma Studio
