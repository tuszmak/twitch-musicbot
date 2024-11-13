'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [songs, setSongs] = useState<string[]>([]);

  useEffect(() => {
    const getData = async()=> {
      setInterval(async()=>{
        const response = await fetch('/api/chatbot')
      setSongs(await response.json())
      },1000)
    }
    getData()
  },[]
);

return (
    <div>
      Links: 
      {songs.map(song=> 
        <div key={song}>{song}</div>
      )}
    </div>
  );
}

