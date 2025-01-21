"use client"

import { useEffect, useState } from "react";
import Card from "../Components/Card";
export default function Page() {
    const [fruit, setFruit] = useState('apple');
    const changeApple = () => {
        setFruit('banana');
    }
    const changePapaya = () => {
        setFruit('apple');
    }
    const changeBabana = () => {
        setFruit('orange');
    }
    const changeOrange = () => {
        setFruit('papaya');
    }
   
    return (
        <div>
            <h1 className="text-3xl text-center items-center"> {fruit} </h1>
            <button onClick={changeApple} className="text-xl">Apple</button>
            <br />
            <button onClick={changePapaya} className="text-xl">Papaya</button>
            <br />
            <button onClick={changeBabana} className="text-xl">Banana</button>
            <br />
            <button onClick={changeOrange} className="text-xl">Orange</button>
            <Card src="/1.jpg" title="sky"></Card>
        </div>
    )
}