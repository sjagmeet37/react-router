import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";

const routes = createBrowserRouter([
  {path : '/', element : <Home />},
  {path : '/customers', element : <Customer />}
]);

function App() {
  return <RouterProvider router={routes}/>;
}

export default App;
