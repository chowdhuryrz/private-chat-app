import { app } from "@/app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";
// .api to enter /api prefix
export const client =
  typeof window === "undefined"
    ? treaty(app).api
    : treaty<typeof app>("http://localhost:3000").api;
