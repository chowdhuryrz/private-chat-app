export { proxy as middleware } from "./lib/proxy";

export const config = {
  matcher: ["/room/:path*"],
};
