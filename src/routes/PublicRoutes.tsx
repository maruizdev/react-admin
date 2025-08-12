import { Route } from "react-router-dom"
import { Home } from "../pages/dashboard/Home"

export const PublicRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Home />} />
    </>
  )
}
