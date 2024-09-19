import Link from "next/link";


let linkStyles = "underline text-cyan-600 hover:text-cyan-300"

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="./week-2" className={linkStyles} >Week 2 - Assignment</Link></li>
        <li><Link href="./week-3/objects" className={linkStyles} >Week 3 - Shopping List</Link></li>
      </ul>
    </main>
  );
}
