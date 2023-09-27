// import react
import React, { lazy, Suspense } from "react";

// import react router dom
import { Routes, Route } from "react-router-dom";

// import loader component
const Loader = lazy(() => import('../components/Loader.jsx'));

// import view Login
const Login = lazy(() => import('../views/Auth/Login.jsx'));

// import private routes
import PrivateRoutes from "./PrivateRoutes.jsx";

// import view dashboard
const Dashboard = lazy(() => import('../views/Dashboard/Index.jsx'));

// import view permissions index
const PermissionsIndex = lazy(() => import('../views/Permissions/Index.jsx'));

export default function RoutesIndex() {
    return(
        <Routes>
            {/* route */}
            <Route 
                path="/"
                element={
                    <Suspense fallback={<Loader/>}>
                        <Login/>
                    </Suspense>
                }
            />

            {/* private route "/dashboard" */}
            <Route 
                path="/dashboard"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <Dashboard/>
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            {/* private route "/permissions" */}
            <Route 
                path="/permissions"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <PermissionsIndex/>
                        </PrivateRoutes>
                    </Suspense>
                }
            />
        </Routes>
    )
}