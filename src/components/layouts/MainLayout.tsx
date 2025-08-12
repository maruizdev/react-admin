import type { ReactNode } from "react"
import { NavbarUser } from "../navbars/NavbarUser"
interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <NavbarUser />
      <hr />
      <main>
        {children}
      </main>
    </>
  )
}
