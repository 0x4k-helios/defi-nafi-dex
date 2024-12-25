import { Calendar, ArrowLeftRight, Inbox, Search, Settings, Blend, ChartPie, Box, Boxes, Droplet, LayoutGrid, Vote } from "lucide-react"
import Image from 'next/image';
import Styles from './app-sidebar.module.css'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Swap",
    url: "#",
    icon: ArrowLeftRight,
  },
  {
    title: "Portfolio",
    url: "#",
    icon: ChartPie,
  },
  {
    title: "Assets",
    url: "#",
    icon: Blend,
  },
  {
    title: "Stake",
    url: "#",
    icon: Boxes,
  },
  {
    title: "Pools",
    url: "#",
    icon: Droplet,
  },
  {
    title: "Apps",
    url: "#",
    icon: LayoutGrid,
  },
  {
    title: "Vote",
    url: "#",
    icon: Vote,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-zinc-500">
      <SidebarHeader className={Styles.logo}>
        <Image src="/images/.png" width={300} height={120} alt="aaa" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
