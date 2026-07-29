import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret");
    if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const slug = request.nextUrl.searchParams.get("slug");
    const tag = slug ? `seo-${slug}` : "seo";
    revalidateTag(tag);

    return NextResponse.json({ revalidated: true, tag });
}
