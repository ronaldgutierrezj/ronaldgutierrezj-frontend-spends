import { Link } from "react-router-dom";

const SingleReport = ({reports,match,edit, deleteSpend}) => {

  const id = parseInt(match.params.id)

  const report = reports.find((report) => report.id === id);

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{report?.concept}</h1>
      <h2>{report?.amount}</h2>
      <h2>{report?.details}</h2>
      <h2>{report?.date}</h2>
      <button onClick={(event) => edit(report)}>Edit</button>
      <button onClick={(event) => deleteSpend(report)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleReport;
