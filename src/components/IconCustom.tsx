import { Icon, type IconPropsColorOverrides, type IconPropsSizeOverrides, type SxProps, type Theme } from "@mui/material"
import { type OverridableStringUnion } from "@mui/types"
import type { CSSProperties, FC, PropsWithChildren } from "react"

import 'material-icons/iconfont/outlined.css'

interface Props {
  color?: OverridableStringUnion<
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    IconPropsColorOverrides
  >
  fontSize?: OverridableStringUnion<
    'inherit' | 'large' | 'medium' | 'small',
    IconPropsSizeOverrides
  >
  sx?: SxProps<Theme>
  style?: CSSProperties
}

export const IconCustom: FC<PropsWithChildren<Props>> = ({
  color = 'secondary',
  fontSize = 'medium',
  children,
  sx,
  style,
}) => {
  return (
    <Icon
      sx={{ ...sx }}
      style={{ ...style }}
      fontSize={fontSize}
      color={color}
      className={'material-icons-outlined'}
    >
      {children}
    </Icon>
  )
}
