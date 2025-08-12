import { AppBar, Avatar, Box, Button, Divider, Grid, IconButton, Menu, MenuItem, ToggleButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useSidebar } from "../../context/SideBarProvider"
import { IconCustom } from "../IconCustom"
import { useNavigate } from "react-router-dom"
import { IconTooltip } from "../buttons/IconTooltip"
import { useState } from "react"
import { AlertDialog } from "../modals/AlertDialog"

export const NavbarUser = () => {

  const { sideMenuOpen, closeSideMenu, openSideMenu } = useSidebar()
  const [mostrarAlertaCerrarSesion, setMostrarAlertaCerrarSesion] = useState(false)

  const theme = useTheme()
  // const sm = useMediaQuery(theme.breakpoints.only('sm'))

  const [anchorEl, setAnchorEl] = useState < null | HTMLElement > (null)
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  const navigate = useNavigate(); // Hook de navegación en React Router
  const handleClick = () => {
    navigate('/home'); // Navegar a la ruta '/admin/home'
  };

  const cerrarMenu = () => {
    setAnchorEl(null)
  }

  const showMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const accionCerrarSesion = () => {
    cerrarMenu()
    setMostrarAlertaCerrarSesion(true)
  }

  const cerrarMenuSesion = () => {
    console.log("cerrando menu")
  }
  return (
    <>
      <AlertDialog
        isOpen={mostrarAlertaCerrarSesion}
        titulo="Alerta"
        texto={`¿Esta seguro de cerrar sesión?`}
      >
        <Button
          variant={'outlined'}
          onClick={() => {
            setMostrarAlertaCerrarSesion(false)
          }}
        >
          Cancelar
        </Button>
        <Button
          variant={'contained'}
          onClick={async () => {
            setMostrarAlertaCerrarSesion(false)
            await cerrarMenuSesion()
          }}
        >
          Aceptar
        </Button>

      </AlertDialog>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            id={'menu-sidebar'}
            size="large"
            aria-label="Menu lateral"
            name={sideMenuOpen ? 'Cerrar Menu' : 'Abrir menu lateral'}
            edge="start"
            color={'inherit'}
            onClick={() => {
              if (sideMenuOpen) {
                closeSideMenu()
              }
              else {
                openSideMenu()
              }
            }}
            sx={{ mr: 0 }}
          >
            {sideMenuOpen ? (<IconCustom color={'action'}>menu_open</IconCustom>) : (<IconCustom color="action">menu</IconCustom>)}
          </IconButton>
          <Grid
            container
            alignItems={'center'}
            flexDirection={'row'}
            sx={{ flexGrow: 1 }}
          >
            <Box display={'inline-flex'}>
              <Grid
                container
                alignItems={'center'}
                flexDirection={'row'}
                justifyContent={'flex-end'}
                onClick={() => {
                  handleClick()
                }}
                sx={{ cursor: 'pointer' }}
              >
                <img
                  src='/icono.png'  // Ahora usas la importación como la fuente
                  alt="Icono del sitio"
                  width="30"
                  height="30"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
                <Box sx={{ px: 0.5 }} />
                <Typography
                  color={'text.primary'}
                  component={'div'}
                  sx={{ fontWeight: '600' }}
                >
                  REACT ADMIN
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <IconTooltip
            id={'helUser'}
            name={'Ayuda'}
            titulo={'Ayuda'}
            accion={() => {
              console.log("Abrir ayuda")
            }}
            color={'action'}
            icono={'help_outline'}
          >
          </IconTooltip>

          <ToggleButton
            sx={{ px: 1.2 }}
            size="small"
            onClick={showMenu}
            color="primary"
            value={''}
            selected={!!anchorEl}
          >
            <Avatar
              sx={{ fontSize: '0.82rem', width: 35, height: 35, bgcolor: 'secondary.main' }}
            >
              <IconCustom color="action">person_outline</IconCustom>
            </Avatar>
          </ToggleButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorEl)}
            onClose={cerrarMenu}
            autoFocus={false}
          >
            <MenuItem
              sx={{ mb: 1, mt: 0.5 }}

            >
              <IconCustom color={'inherit'} fontSize={'small'}>
                person
              </IconCustom>
              <Box width={'15px'} />
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'start'}
              >

                <Typography
                  variant={'body2'}
                  color="text.primary"
                  fontWeight={'500'}
                >
                  Marcelo Ruiz Zuleta
                </Typography>
                <Typography variant={'caption'} color="text.secondary">
                  Tecnico en plataforma
                </Typography>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem
              sx={{ mb: 1, mt: 0.5 }}

            >
              <IconCustom color={'inherit'} fontSize={'small'}>
                settings
              </IconCustom>
              <Box width={'15px'} />
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'start'}
              >
                Configuración
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem
              sx={{ px: 2.5, py: 1.5, mt: 1 }}
              onClick={accionCerrarSesion}
            >
              <IconCustom color={'error'} fontSize={'small'}>
                logout
              </IconCustom>
              <Box width={'15px'} />
              <Typography variant={'body2'} fontWeight={'600'} color={'error'}>
                Cerrar sesión
              </Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  )
}
