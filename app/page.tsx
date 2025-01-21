import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
      <div>
        <img src="/1.jpg" width={250}height={250} alt="sea" />
          <h1 className="text text-3xl">66162110550-6 Sorrawit Seesawat</h1>
          <ul>
          <Link href="/page1" className="text-blue-600 text-xl">Go To Page 1</Link>
          </ul>
          <ul>
          <Link href="/page2" className="text-blue-600 text-xl">Go To Page 2</Link>
          </ul>
          <ul>
          <Link href="/page3"className="text-blue-600 text-xl">Go To Page 3</Link>
          </ul>
    
      </div>
  );
}