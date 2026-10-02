import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_ORIGIN = "https://aoc.edu.np";

const LEGACY_PATHS: Record<string, string> = {
    "/ca-Intermediate": "/ca-intermediate",
};

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const host = request.headers.get("host")?.toLowerCase() ?? "";
    const legacyTarget = LEGACY_PATHS[url.pathname];
    if (legacyTarget) url.pathname = legacyTarget;

    if (host.startsWith("www.")) {
        return NextResponse.redirect(`${CANONICAL_ORIGIN}${url.pathname}${url.search}`, 301);
    }

    if (legacyTarget) return NextResponse.redirect(url, 301);

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
