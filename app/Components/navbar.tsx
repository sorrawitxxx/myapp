import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-white py-2 px-4 z-25">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link href="/" className="text-white hover:text-blue-400 transition duration-300">My Website</Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className="text-lg text-white hover:text-blue-400 transition duration-300">Home</Link>
          <Link href="/about" className="text-lg text-white hover:text-blue-400 transition duration-300">About Us</Link>
          <Link href="/page1" className="text-lg text-white hover:text-blue-400 transition duration-300">Page1</Link>
          <Link href="/page2" className="text-lg text-white hover:text-blue-400 transition duration-300">Page2</Link>
          <Link href="/page3" className="text-lg text-white hover:text-blue-400 transition duration-300">Page3</Link>
          <Link href="/counter" className="text-lg text-white hover:text-blue-400 transition duration-300">Counter</Link>
          <Link href="/fruit" className="text-lg text-white hover:text-blue-400 transition duration-300">Fruit</Link>
        </div>
      </div>
    </div>
  );
}
