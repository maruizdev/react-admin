import { AppBar, IconButton, Toolbar } from "@mui/material"
import { useSidebar } from "../../context/SideBarProvider"

export const NavbarUser = () => {

  const { sideMenuOpen, closeSideMenu, openSideMenu } = useSidebar()
  
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            id={'menu-sidebar'}
            size="large"
            aria-label="Menu lateral"
            name={sideMenuOpen ? 'Cerrar Menu': 'Abrir menu lateral'}
            edge="start"
            color={'inherit'}
            onClick={ () => {
              if(sideMenuOpen){
                closeSideMenu()
              }
              else{
                openSideMenu()
              }
            }}
          >

          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
