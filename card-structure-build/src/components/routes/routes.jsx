
import Home from './Home'
import ErrorPage from './Error';
import Favorites from './Favorites';
import AddCards from './AddCards';

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
        path: "/addCards",
        element: <AddCards />,

    },
];


export default routes;