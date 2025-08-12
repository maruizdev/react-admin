import { Route } from "react-router-dom"
import { Home } from "../pages/dashboard/Home"

export const AdminRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </>
  )
}
