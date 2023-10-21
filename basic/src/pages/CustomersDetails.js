import { useParams } from "react-router-dom";

const CustomersDetails = () => {

    const param = useParams();

    return(<h1>details page {param.customerId}</h1>)
}

export default CustomersDetails;
