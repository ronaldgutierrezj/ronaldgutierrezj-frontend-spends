function Available ({reports}) {
    const h1 = {
        textAlign: "center",
        marginTop: "100px",
        marginBottom: "50px",
        backgroundColor: "lightblue",
        color: "red",
        width: "500px",
      };

    var total = reports.reduce((total, report) => total + report.amount, 0).toFixed(2);

    return (<div>
        <h1 style={h1}> Available : {total} </h1>
        </div>
    )}

export default Available