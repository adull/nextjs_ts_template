import { ListItem } from "lib/schemas/ListItem"

interface Props {
    item: ListItem;
    height: number;
}

export const Item = ({ item }: Props) => {
    const ELEM_HEIGHT = 73
    return (
        <div className="border b-1 my-2 p-3" style={{height: ELEM_HEIGHT}}>
                <b>{item.title}</b>
                <div>{item.description}</div> 
            </div>
    )
}

