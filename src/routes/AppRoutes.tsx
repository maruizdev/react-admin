import { Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { AdminRoutes } from "./AdminRoutes"

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {AdminRoutes()}
        {PublicRoutes()}
        {PrivateRoutes()}
      </Routes>
    </>
  )
}
