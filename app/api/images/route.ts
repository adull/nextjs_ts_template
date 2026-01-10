import { NextResponse } from "next/server";
import { latest, list } from "lib/images/queries";
import { parseTake, parseCursor } from "lib/images/parse"

type Mode = "latest" | "list"

const parseMode = (mode: string | null) : Mode => {
    return mode === "latest" ? "latest" : "list";
}

export async function GET(req: Request) {
    const url = new URL(req.url);

    const mode = parseMode(url.searchParams.get("mode"))
    
    if(mode === "latest") {
        const result = await latest({ take: 5 })
        return NextResponse.json(result);

    }
    const take = parseTake(url.searchParams.get("take"), 10)
    const cursor = parseCursor(url.searchParams.get("cursor"), 0)

    const result = await list({ take, cursor })
    console.log()
    return NextResponse.json(result);
}