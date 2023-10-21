import { Link, useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const navigateToCustomer = () => {
    navigate('/customers');
  }

  return (
    <>
      <p>This is Home Companent</p>
      <Link to="/customers">Click here to go to customers page</Link>
      <button onClick={navigateToCustomer}>Home</button>
    </>
  );
};

export default Home;
