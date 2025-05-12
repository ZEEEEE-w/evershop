import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login/Login";
import Women from "../pages/Women/Women";
import Men from "../pages/Men/Men";
import Kids from "../pages/Kids/Kids";
import Cart from "../pages/Cart/Cart";
import About from "../pages/About/About"
import ProductSelect from "../components/ProductSelect/ProductSelect";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Search from "../pages/Search/Search";

const router = [

    {
        path: '/',
        element: <Home />,
        // requireAuth: true,
    },
    {
        path: '/women',
        element: <Women />
    },
    {
        path: '/men',
        element: <Men />
    },
    {
        path: '/kids',
        element: <Kids />
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/cart',
        element: <Cart />,
        requireAuth: true,
    },
    {
        path: '/ProductSelect',
        element: <ProductSelect />,
    },
    {
        path: '/ProductDetail/:id',
        element: <ProductDetail />,
    },
    {
        path: '/Search',
        element: <Search />,
    },
    {
        path: '*',
        element: <NotFound />
    },
]

const RouteList = () => {
    return (
        <Routes>
            {router.map((route, index) => {
                if (route.children) {
                    return (
                        <Route key={index} path={route.path} element={<ProtectedRoute element={route.element} requireAuth={route.requireAuth} />}>
                            {route.children.map((routeChildren, indexChildren) => (
                                <Route key={indexChildren} path={routeChildren.path} element={<ProtectedRoute element={routeChildren.element} requireAuth={routeChildren.requireAuth} />}>
                                </Route>
                            ))}
                        </Route>
                    )
                }
                else return (
                    <Route key={index} path={route.path} element={<ProtectedRoute element={route.element} requireAuth={route.requireAuth} />}> </Route>
                )
            })}
        </Routes>
    )
}

// export default router;
export default RouteList;