import { useContext } from "react"
import { ClientContext } from "../contexts"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {

    const { clientToken } = useContext(ClientContext)

  return (
    <>
        {
            clientToken ? (
                <Outlet />
            ) : (
                <Navigate to="/" />
            )
        }
    </>
  )
}
