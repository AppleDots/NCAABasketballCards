
import Home from './Home'
import ErrorPage from './Error';
import Favorites from './Favorites';
import AddCards from './AddCards';
import Team from './Team';

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
        path: "/team",
        element: <Team />,

    },
    {
        path: "/addCards",
        element: <AddCards />,

    }
];


export default routes;