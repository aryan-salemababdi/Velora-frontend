"use client";
import Link from "next/link";
import Image from "next/image";
import { SidebarItem } from "@/components/molecule/SidebarItem/SidebarItem";
import logo from "../../../../public/logo/logo3.png";

const navItems = [
  { label: "Introduction", href: "/documentation/introduction" },
  { label: "Getting Started", href: "/documentation/getting-started" },
  { label: "Modules", href: "/documentation/modules" },
  { label: "Services", href: "/documentation/services" },
  { label: "Controllers", href: "/documentation/controllers" },
  { label: "Middleware", href: "/documentation/middleware" },
  { label: "Decorators", href: "/documentation/decorators" },
  { label: "CLI", href: "/documentation/cli" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#0d1b2a] text-white border-r border-gray-800 p-4 space-y-4">
      <Link href="/" className="flex items-center justify-center mb-6">
        <Image src={logo} alt="Velora Logo" width={120} height={40} />
      </Link>
      <div className="space-y-2">
        {navItems.map((item) => (
          <SidebarItem key={item.href} href={item.href} label={item.label} />
        ))}
      </div>
    </aside>
  );
};