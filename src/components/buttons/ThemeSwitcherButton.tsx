import { IconButton, Tooltip, type IconButtonProps } from "@mui/material"
import { IconCustom } from "../IconCustom"
import { useThemeContext } from "../../themes/ThemeRegistry"

interface ThemeSwitcherButtonProps extends IconButtonProps { }

export const ThemeSwitcherButton = ({ ...rest }: ThemeSwitcherButtonProps) => {

  const { themeMode, toggleTheme } = useThemeContext()

  return (
    <Tooltip
      title={
        themeMode === 'light' ? `Cambiar a modo oscuro` : `Cambiar a modo claro`
      }
    >
      <IconButton {...rest} onClick={toggleTheme}>
        {themeMode === 'light' ? (
          <IconCustom color={'action'}>light_mode</IconCustom>
        ) : (
          <IconCustom color={'action'}>dark_mode</IconCustom>
        )}
      </IconButton>
    </Tooltip>
  )
}
