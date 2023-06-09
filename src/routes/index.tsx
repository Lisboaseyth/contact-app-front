import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/loginPage"
import { RegisterPage } from "../pages/registerPage"
import { NotFoundPage } from "../pages/notFoundPage"
import { ProtectedRoutes } from "../protectedRoutes"
import { DashboardPage } from "../pages/dashboardPage"

export const RoutesPages = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route element={<ProtectedRoutes />} >
                <Route path="/dashboard" element={<DashboardPage />}/>
            </Route>
            {/* <Route path="/teste" element={<DashboardPage />}/> */}
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
}