import Link from "next/link";

type SidebarItemProps = {
  href: string;
  label: string;
  active?: boolean;
};

export const SidebarItem = ({ href, label, active }: SidebarItemProps) => (
  <Link
    href={href}
    className={`block px-4 py-2 rounded-md text-sm font-medium transition ${
      active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
    }`}
  >
    {label}
  </Link>
);