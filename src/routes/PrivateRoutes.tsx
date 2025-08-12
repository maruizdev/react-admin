import { Route } from "react-router-dom"
import { User } from "../pages/User/User"

export const PrivateRoutes = () => {
  return (
    <>
      <Route path="/users" element={<User />} />
    </>
  )
}
