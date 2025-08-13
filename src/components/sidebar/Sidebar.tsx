import { useMediaQuery, useTheme } from "@mui/material"
import { CustomDrawer, type SidebarModuloType } from "./CustomDrawer"
import { useSidebar } from "../../context/SideBarProvider"
import { useEffect, useState } from "react"

const drawerWidth = 220
export const Sidebar = () => {

  const { sideMenuOpen, closeSideMenu, openSideMenu, checkContentBadge } = useSidebar()
  const theme = useTheme()

  const [modulos, setModulos] = useState<SidebarModuloType[]>([])

  const sm = useMediaQuery(theme.breakpoints.only('sm'))
  const md = useMediaQuery(theme.breakpoints.only('md'))
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  const pathname = 'user'

  const navigateTo = (url: string) => {
    if (sm || xs || md) {
      closeSideMenu()
    }
    // router.push(url)
  }
  
  useEffect(() => {
    if (sm || xs || md) {
      closeSideMenu()
    } else {
      openSideMenu()
    }
  }, [sm, xs, md])

  

  return (
    <>
      <CustomDrawer
        variant={sm || xs || md ? 'temporary' : 'persistent'}
        open={sideMenuOpen}
        onClose={closeSideMenu}
        sx={{
          width: sideMenuOpen ? drawerWidth : `0`,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            // borderWidth: 0.0,
            boxSizing: 'border-box',
          },
          transition: 'all 0.2s ease-out',
        }}
        rutaActual={pathname}
        modulos={modulos}
        setModulos={setModulos}
        navigateTo={navigateTo}
        badgeVariant="primary"
        checkContentBadge={checkContentBadge}
      />

    </>
  )
}
