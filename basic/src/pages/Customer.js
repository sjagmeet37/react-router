import { Link } from "react-router-dom";

const Customer = () => {

    return (
    <>
    <h1>This is Customer Page</h1>
<ul>
    <li><Link to="/customers/p1" >Product 1</Link></li>
    <li><Link to="/customers/p2" >Product 2</Link></li>
    <li><Link to="/customers/p3" >Product 3</Link></li>
</ul>

    </>)
}

export default Customer;