import type { ReactNode } from "react"
import { NavbarUser } from "../navbars/NavbarUser"
import { Box, Grid, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import { useSidebar } from "../../context/SideBarProvider"
import { Sidebar } from "../sidebar/Sidebar"
interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {

  const { sideMenuOpen } = useSidebar()

  const theme = useTheme()

  const sm = useMediaQuery(theme.breakpoints.only('sm'))
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  const md = useMediaQuery(theme.breakpoints.only('md'))

  return (
    <>
      <Sidebar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent={'center'}
        justifyItems={'center'}
      >
        <Box sx={{ display: 'flex' }}>
          <NavbarUser />
        </Box>
        <Box component={'main'}
          sx={{
            width: sm || xs || md ? '100%' : sideMenuOpen ? '80%' : '100%',
            // backgroundColor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            ml: sm || xs || md ? '0%' : sideMenuOpen ? '200px' : '0%',
            transition: 'all 0.2s ease-out !important',
          }}
        >
          <Toolbar />
          <Grid
            container
            spacing={0}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'initial'}
            justifyItems={'center'}
            style={{ minHeight: '80vh' }}
          >
            <div style={{
              height: '75vh',
              width: xs || sm ? '90%' : '95%'
            }}
            >
              {children}
            </div>

          </Grid>
        </Box>
      </Grid>
    </>
  )
}
