"use client"
import { useState } from "react";
export default function Page() {
const [count, setCount] = useState(0);
const increment = () => { setCount(count + 1); }
return (
<div>
<h1 className="text-3xl text-center items-center"> {count} </h1>
<button onClick={increment } >UP</button>
<br />
<button onClick={increment }>Down</button>
</div>
)
}