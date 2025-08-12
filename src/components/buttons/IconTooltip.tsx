import { IconButton, Tooltip } from "@mui/material"
import { useState, type FC, type MouseEventHandler, type ReactNode } from "react"
import { IconCustom } from "../IconCustom"

interface Props {
  color?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  titulo: string
  icono: ReactNode
  accion: MouseEventHandler<any> | undefined
  desactivado?: boolean
  name: string
  id: string
}

export const IconTooltip: FC<Props> = ({
  color = 'primary',
  icono,
  titulo,
  accion,
  desactivado = false,
  name,
  id,
}) => {
  const [openTooltip, setOpenTooltip] = useState(false)

  const handleTooltipClose = () => {
    setOpenTooltip(false)
  }

  const handleTooltipOpen = () => {
    setOpenTooltip(true)
  }

  return (
    <Tooltip
      title={titulo}
      onClose={handleTooltipClose}
      open={openTooltip}
      onMouseOver={handleTooltipOpen}
    >
      <span>
        <IconButton
          id={id}
          name={name}
          disabled={desactivado}
          classes={{
            root: 'icon-button-root',
            disabled: 'icon-button-disabled',
          }}
          aria-label={titulo}
          onClick={(event) => {
            handleTooltipClose()
            if (accion) {
              accion(event)
            }
          }}
        >
          <IconCustom color={desactivado ? 'disabled' : color}> {icono}</IconCustom>
        </IconButton>
      </span>
    </Tooltip>
  )
}
