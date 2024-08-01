import Link from "next/link";

export default function HeadphonesLayout({ children }) {
  return (
    <div>
      <Link href='/'>Main page</Link>
      {children}
    </div>
  );
}
