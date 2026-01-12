import type { Information } from "lib/schemas/information";

export default function Body() {
    const oka = {
      id: 1,
      title: 'Random number: ',
      hash: 'abc123'
    }

    const test = (info: Information) : Information => {
      return {...info, title: info.title + Math.random() * 10}
    }

    const one = test(oka)
    const two = test(oka)
    const three = test(oka)
    const arr = [one,two,three]

    return (
      <div className="body">
        {arr.map((item, i) => {
          return (<div key={i}>{item.title}</div>)
        })}
      </div>
    );
  }