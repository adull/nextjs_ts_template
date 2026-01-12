'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const isHomepage = usePathname() === "/";

  const title = <span>HEADER</span>;

  return (
    <div className="header text-center py-3 text-4xl border-b-2">
      {isHomepage ? title : <Link href="/">{title}</Link>} 
    </div>
  );
};