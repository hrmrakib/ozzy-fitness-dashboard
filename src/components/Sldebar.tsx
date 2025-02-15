"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  DollarSign,
  Dumbbell,
  Apple,
  CalendarDays,
  Calendar,
  Users,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    img: "/sidebar/x.svg",
  },
  {
    name: "Earnings",
    href: "/earnings",
    icon: DollarSign,
    img: "/sidebar/x.svg",
  },
  {
    name: "Exercise",
    href: "/exercise",
    icon: DollarSign,
    img: "/sidebar/x.svg",
  },
  {
    name: "Workout Plan",
    href: "/workout",
    icon: Dumbbell,
    img: "/sidebar/x.svg",
  },
  {
    name: "Nutrition Plan",
    href: "/nutrition",
    icon: Apple,
    img: "/sidebar/x.svg",
  },
  {
    name: "Appointment Plan",
    href: "/appointment-plan",
    icon: CalendarDays,
    img: "/sidebar/x.svg",
  },
  {
    name: "Appointment",
    href: "/appointment",
    icon: Calendar,
    img: "/sidebar/x.svg",
  },
  { name: "Users", href: "/users", icon: Users, img: "/sidebar/x.svg" },
  {
    name: "Subscription",
    href: "/subscription",
    icon: CreditCard,
    img: "/sidebar/x.svg",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    img: "/sidebar/x.svg",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  if (pathname == "/login" || pathname == "/register") return null;

  return (
    <div className='flex h-full min-h-screen w-64 fixed top-0 left-0 flex-col bg-[#002B5B] text-white'>
      <div className='p-4'>
        <Image
          src='/dashboard/logo.png'
          alt='OEG Stretching Strength'
          width={220}
          height={56}
          className='h-auto w-auto'
        />
      </div>

      <nav className='flex-1 space-y-2 px-2 py-4'>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`group flex items-center rounded-lg px-3 py-2 text-lg text-[#FFFFFF] font-medium ${
              item.href == pathname
                ? "bg-[#FFFFFF] hover:bg-[#FFFFFF] text-black hover:text-black"
                : ""
            } hover:bg-blue-900 hover:text-white`}
          >
            <item.icon className='mr-3 h-5 w-5' />
            {/* <Image src={item.icon.src} alt={item.name} width={24} height={24} /> */}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className='p-4'>
        <button className='w-full flex items-center justify-center gap-3 rounded-lg bg-[#BF0C0A] px-4 py-4 text-sm font-medium hover:bg-red-700'>
          <LogOut /> Logout
        </button>
      </div>
    </div>
  );
}
