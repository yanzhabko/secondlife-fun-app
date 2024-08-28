export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/profile", "/buyers/:path*", "/jobs", "/dealership/:path*"],
};
