import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Link href='/headphones'>headphones</Link>
      {children}
    </div>
  );
}
