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

// import view roles index
const RolesIndex = lazy(() => import('../views/Roles/Index.jsx'));

// import view role create
const RoleCreate = lazy(() => import('../views/Roles/Create.jsx'));

// import view role edit
const RoleEdit = lazy(() => import('../views/Roles/Edit.jsx'));

// import view users index
const UsersIndex = lazy(() => import('../views/Users/Index.jsx'));

// import view user create
const UserCreate = lazy(() => import('../views/Users/Create.jsx'));

// import view user edit
const UserEdit = lazy(() => import('../views/Users/Edit.jsx'));

// import view categories index
const CategoriesIndex = lazy(() => import('../views/Categories/Index.jsx'));

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

            {/* private route "/roles" */}
            <Route
                path="/roles"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <RolesIndex/>
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            {/* private route "/roles/create" */}
            <Route
                path="/roles/create"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <RoleCreate/>
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            {/* private route "/roles/edit/:id" */}
            <Route
                path="/roles/edit/:id"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <RoleEdit />
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            {/* private route "/users" */}
            <Route
                path="/users"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <UsersIndex />
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            {/* private route "/users/create" */}
            <Route
                path="/users/create"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <UserCreate />
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            {/* private route "/users/edit/:id" */}
            <Route
                path="/users/edit/:id"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <UserEdit />
                        </PrivateRoutes>
                    </Suspense>
                }
            />

            {/* private route "/categories" */}
            <Route
                path="/categories"
                element={
                    <Suspense>
                        <PrivateRoutes>
                            <CategoriesIndex />
                        </PrivateRoutes>
                    </Suspense>
                }
            />
        </Routes>
    )
}