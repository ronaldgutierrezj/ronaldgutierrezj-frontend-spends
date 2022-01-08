import Report from "../components/report";

const AllReports = (props) => {
    return props.reports.map((report) => {
        return <Report report={report} key={report.id} />});
};

export default AllReports;