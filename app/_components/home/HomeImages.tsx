'use client'
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeImages() {
  const [images, setImages] = useState([])
    useEffect(() => {
        axios.get('/api/images').then((res) => {
          setImages(res.data)
        })
    }, [])
    return (
      <div>
        <h2 className="text-lg font-bold">Recent Images:</h2>
        <div>
          {images.map((item, i) => {
            return (
              <div key={i}>
                <span>{item.title}</span>
                <img src={`https://gasfried.com/mothafuckin-api/image/fuck/${item.hash}.jpg`} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }