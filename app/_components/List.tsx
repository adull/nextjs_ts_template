import { memo, useEffect, useRef, useState } from 'react'
import type { ListItem } from "lib/schemas/ListItem";
import { Item } from "@/components/Item"

interface Props {
    list: ListItem[]
}


export default function List({ list }: Props) {
    const listRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState<ListItem[]>(list.slice(0,10))

    const ELEM_HEIGHT = 73

    useEffect(() => {
        setVisibleItems(list.slice(0,20))
    }, [list])


    // on scroll, find the index of the items that are going to be visible
    const scrollFn = (e: any) => {
        const { scrollTop } = e.target
        let first = Math.floor(scrollTop/ ELEM_HEIGHT) - 5
        if(first < 0) first = 0

        const elemHeight = listRef.current.clientHeight;
        const last = first + Math.ceil(elemHeight / ELEM_HEIGHT) + 5
        console.log({ first, last })
        const itemsToShow = list.slice(first, last)
        console.log({itemsToShow})
        setVisibleItems(itemsToShow)
    }



    return (
      <div 
        className="relative overflow-y-scroll h-200 bg-amber-400 w-full" 
        ref={listRef} onScroll={scrollFn}>
            <div style={{height: ELEM_HEIGHT * list.length}}>
                {visibleItems.map((item, i) => {
                    return <div className="absolute w-full" style={{top: item.id * (ELEM_HEIGHT)}} key={i}><Item item={item} height={ELEM_HEIGHT} /></div>
                })}
            </div>
      </div>
    );
  }