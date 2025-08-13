import type { Theme } from "@emotion/react"
import { Box, Divider, Drawer, Toolbar, Typography, type SxProps } from "@mui/material"
import type { ReactNode } from "react"
import type { ModuloType } from "../../pages/login/types/loginTypes"


export type SidebarModuloType = ModuloType & {
  showed?: boolean
  open?: boolean
}

export const CustomDrawer = ({
  variant,
  open,
  onClose,
  sx,
  modulos,
  setModulos,
  navigateTo,
  rutaActual,
  badgeVariant,
  checkContentBadge,
}: {
  variant?: 'permanent' | 'persistent' | 'temporary'
  open?: boolean | undefined
  onClose?: () => void
  sx?: SxProps<Theme>
  modulos: Array<SidebarModuloType>
  setModulos: (modulos: Array<SidebarModuloType>) => void
  navigateTo: (url: string) => void
  rutaActual: string
  badgeVariant: string
  checkContentBadge: (id: string) => ReactNode
}) => {
  return (
    <>
      <Drawer
        variant={variant}
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={sx}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          demo
          <Divider />
          demo 2
        </Box>
        <Box sx={{ pb: 2 }} display="flex" flex="1" justifyContent="space-around">
          <Box sx={{ alignSelf: 'flex-end' }}>
            <Typography color="text.secondary" variant={'body2'}>
              {`v01`}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
