import type { ListItem } from "lib/schemas/ListItem"
import { useState } from "react"

interface Props {
    item: ListItem,
    height: number, 
    top: number
}

export const ListItemComponent = ({item, height, top}:Props) => {
    const [someList, setSomeList] = useState<ListItem[]>([])
    return (
        <div>
            <div>{item.title}</div>
            <div>{height}</div>
            <div>{top}</div>
        </div>
    )
}
