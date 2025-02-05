import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";

import { appRouter } from "@rizrmdhn/api";
import { env } from "../env.js";

async function main() {
  const app = express();

  app.use(
    cors({
      origin: "*", // Allow all origins (for production, you should specify the allowed origins)
    })
  );

  // For checking if the server is running
  app.get("/", (_, res) => {
    res.json({ ok: true, message: "Hello from server!" });
  });

  app.use(
    "/trpc",
    createExpressMiddleware({
      router: appRouter,
    })
  );

  app.listen(env.SERVER_PORT);

  console.log(`Server is running on http://localhost:${env.SERVER_PORT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
