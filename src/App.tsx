import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"
import { SideBarProvider } from "./context/SideBarProvider"

export const App = () => {

  return (
    <>
      <SideBarProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </SideBarProvider>
    </>
  )
}

