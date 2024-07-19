import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import MovieDetails from "./pages/MovieDetails";
import ErrorPage from "./pages/ErrorPage";
import LangChange from "./components/LangChange";
import "./App.css";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "about-us",
                    element: <AboutUs />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "movie/:id",
                    element: <MovieDetails />,
                },
                {
                    path: "pelicula/:id",
                    element: <LangChange />,
                },
            ],
        },
        {
            path: "search",
            element: <Search />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
