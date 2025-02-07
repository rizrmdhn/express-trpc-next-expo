import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";

import { appRouter, createTRPCContext } from "@rizrmdhn/api";
import { env } from "../env.js";

function main() {
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
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext: (opts) =>
        createTRPCContext({
          headers: new Headers(
            Object.entries(opts.req.headers)
              .filter(([_, v]) => v !== undefined)
              .map(([k, v]) => [k, Array.isArray(v) ? v.join(", ") : v]) as [
              string,
              string,
            ][]
          ),
        }),
    })
  );

  app.listen(env.SERVER_PORT);

  console.log(`Server is running on http://localhost:${env.SERVER_PORT}`);
}

main();
