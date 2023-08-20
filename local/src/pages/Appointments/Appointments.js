const appointmentsLst = [
  {
    id: 1,
    consultantName: "Alex Thompson",
    dateTime: "August 25, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 2,
    consultantName: "Maya Rodriguez",
    dateTime: "October 15, 2023 - 2:30 PM",
    jobType: "Graphic Designer",
    status: true,
  },
  {
    id: 3,
    consultantName: "Liam Patel",
    dateTime: "November 8, 2023 - 11:45 AM",
    jobType: "Software Engineer",
    status: false,
  },
  {
    id: 4,
    consultantName: "Sophia Lee",
    dateTime: "December 20, 2023 - 3:15 PM",
    jobType: "Content Writer",
    status: false,
  },
  {
    id: 5,
    consultantName: "Ethan Wilson",
    dateTime: "September 5, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 6,
    consultantName: "Alex Thompson",
    dateTime: "August 25, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 7,
    consultantName: "Maya Rodriguez",
    dateTime: "October 15, 2023 - 2:30 PM",
    jobType: "Content Writer",
    status: true,
  },
  {
    id: 8,
    consultantName: "Liam Patel",
    dateTime: "November 8, 2023 - 11:45 AM",
    jobType: "Software Engineer",
    status: false,
  },
  {
    id: 9,
    consultantName: "Sophia Lee",
    dateTime: "December 20, 2023 - 3:15 PM",
    jobType: "Content Writer",
    status: false,
  },
  {
    id: 10,
    consultantName: "Ethan Wilson",
    dateTime: "September 5, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 11,
    consultantName: "Alex Thompson",
    dateTime: "August 25, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 12,
    consultantName: "Maya Rodriguez",
    dateTime: "October 15, 2023 - 2:30 PM",
    jobType: "Content Writer",
    status: true,
  },
  {
    id: 13,
    consultantName: "Liam Patel",
    dateTime: "November 8, 2023 - 11:45 AM",
    jobType: "Data Scientist",
    status: false,
  },
  {
    id: 14,
    consultantName: "Sophia Lee",
    dateTime: "December 20, 2023 - 3:15 PM",
    jobType: "Project Manager",
    status: false,
  },
  {
    id: 15,
    consultantName: "Ethan Wilson",
    dateTime: "September 5, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
];

const Appointments = () => {
  // const [appointmentsList, setAppointmentsList] = useState([]);

  // setAppointmentsList(appointmentsLst);
  return (
    <div style={{ marginRight: "50px" }}>
      <h1 style={{ color: "#198754", fontWeight: "900" }}>Appointments</h1>
      <br />
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Appointment No</th>
            <th scope="col">Consultant</th>
            <th scope="col">Job Type</th>
            <th scope="col">Date & Time</th>
            <th scope="col" style={{ textAlign: "center" }}>
              Status
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {appointmentsLst.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.consultantName}</td>
              <td>{item.jobType}</td>
              <td>{item.dateTime}</td>
              <td style={{ textAlign: "center" }}>
                <div
                  className={
                    item.status
                      ? "btn btn-success btn-lg disabled"
                      : "btn btn-primary btn-lg disabled"
                  }
                  style={{
                    borderRadius: "50px",
                    fontSize: "16px",
                    width: "120px",
                  }}
                >
                  {item.status ? "Completed" : "Pending"}
                </div>
              </td>
              <td style={{ textAlign: "center" }}>
                <div className="flex">
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
