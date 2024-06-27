import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "../helpers/routes";

const router = createBrowserRouter(ROUTES);

const App = () => {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
