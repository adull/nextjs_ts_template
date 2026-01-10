import { db } from "lib/prisma";

interface RecentProps {
    take: number
}

interface ListProps { 
    take: number,
    cursor: number
}

export const latest = async ({ take } : RecentProps) => {
    const imgs = await db.image.findMany({
        orderBy: { id: "desc" },
        take
    });
    return imgs;
}

export const list = async ({ take, cursor } : ListProps) => {
    const imgs = await db.image.findMany({
        orderBy: { id: "desc" },
        take,
        ...cursor ? { cursor: { id: cursor }, skip: 1 } : {}
    })
    return imgs;
}