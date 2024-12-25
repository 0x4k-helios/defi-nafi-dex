import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import Navbar from "@/components/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SidebarProvider>
          <AppSidebar />
      </SidebarProvider>
      <div className="flex-grow flex flex-col">
        <main className="bg-sidebar min-h-screen">
          <Navbar />
          {children}
        </main>
      </div>
    </div>
  )
}
