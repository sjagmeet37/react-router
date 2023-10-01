import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>This is Home Companent</p>
      <Link to="/customers">Click here to go to customers page</Link>
    </>
  );
};

export default Home;
