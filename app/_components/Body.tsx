"use client"
import { useEffect, useState } from 'react'
import type { ListItem } from "lib/schemas/ListItem";
import List from "@/components/List";

export default function Body() {
  const [list, setList] = useState<ListItem[]>([])
  useEffect(() => {
    const randomWords = ['alpha', 'blue', 'cat', 'dog', 'elephant'];
    const getRandomWord = () => randomWords[Math.floor(Math.random() * randomWords.length)];
    const getRandomVal = (num: number) => Math.floor(Math.random() * num);

    const getRandomWords = (num: number) : string => {
      let str = '';
      for(let i = 0; i < num; i ++) {
        str += `${getRandomWord()} `;
      }
      return str.slice(0, -1);
    }
  
    const listItems: ListItem[] = [];
    for(let i = 0; i < 1000; i ++) {
      const newListItem = {
        id: i,
        title: getRandomWords(getRandomVal(3) + 1),
        description: getRandomWords(getRandomVal(20) + 5)
      } as ListItem;
      listItems.push(newListItem);
    }
    setList(listItems)

  }, [])

    return (
      <div className="body">
          <List list={list}/>
      </div>
    );
  }