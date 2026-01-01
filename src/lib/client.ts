import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const client = treaty<App>(API_URL, {
  fetch: {
    credentials: "include",
  },
}).api;
