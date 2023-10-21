import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Root from "./component/Root";
import ErrorPage from "./component/Error";



const routes = createBrowserRouter([
  {path : '/',
   element: <Root />,
   children: [
    {path : '/', element : <Home />},
    {path : '/customers', element : <Customer />}
   ],
   errorElement: <ErrorPage />
  }

]);

function App() {
  return <RouterProvider router={routes}/>;
}

export default App;
