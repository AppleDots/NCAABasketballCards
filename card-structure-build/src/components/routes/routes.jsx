
import Home from './Home'
import ErrorPage from './Error';
import Favorites from './Favorites';
import AddCards from './AddCards';
import Search from './Search';

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,

    },
    {
        path: "/favorites",
        element: <Favorites />,
    },
    {
        path: "/search",
        element: <Search />,

    },
    {
        path: "/addCards",
        element: <AddCards />,

    }
];


export default routes;