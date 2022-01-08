import { Link } from "react-router-dom";
const Report = ({report}) => {

    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };

  return (
    <div style={div}>
      <Link to={`/report/${report.id}`}>
        <h1>{report.concept}</h1>
      </Link>
      <h2>{report.amount}</h2>
    </div>
  );
};

export default Report;