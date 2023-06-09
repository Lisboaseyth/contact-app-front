import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {

    const token = localStorage.getItem("@ContactApp:token")

  return (
    <>
        {
            token ? (
                <Outlet />
            ) : (
                <Navigate to="/" />
            )
        }
    </>
  )
}
