import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdIncompleteCircle } from "react-icons/md";

const appointmentsLst = [
  {
    id: 1,
    consultantName: "Alex Thompson",
    jobSeekerName: "Emily Williams",
    dateTime: "August 25, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 2,
    consultantName: "Maya Rodriguez",
    jobSeekerName: "Benjamin Johnson",
    dateTime: "October 15, 2023 - 2:30 PM",
    jobType: "Graphic Designer",
    status: true,
  },
  {
    id: 3,
    consultantName: "Liam Patel",
    jobSeekerName: "Ethan Davis",
    dateTime: "November 8, 2023 - 11:45 AM",
    jobType: "Software Engineer",
    status: false,
  },
  {
    id: 4,
    consultantName: "Sophia Lee",
    jobSeekerName: "Sophia Anderson",
    dateTime: "December 20, 2023 - 3:15 PM",
    jobType: "Content Writer",
    status: false,
  },
  {
    id: 5,
    consultantName: "Ethan Wilson",
    jobSeekerName: "Ava Wilson",
    dateTime: "September 5, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 6,
    consultantName: "Alex Thompson",
    jobSeekerName: "Mia Brown",
    dateTime: "August 25, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 7,
    consultantName: "Maya Rodriguez",
    jobSeekerName: "Isabella Taylor",
    dateTime: "October 15, 2023 - 2:30 PM",
    jobType: "Content Writer",
    status: true,
  },
  {
    id: 8,
    consultantName: "Liam Patel",
    jobSeekerName: "Harper Miller",
    dateTime: "November 8, 2023 - 11:45 AM",
    jobType: "Software Engineer",
    status: false,
  },
  {
    id: 9,
    consultantName: "Sophia Lee",
    jobSeekerName: "Daniel Wilson",
    dateTime: "December 20, 2023 - 3:15 PM",
    jobType: "Content Writer",
    status: false,
  },
  {
    id: 10,
    consultantName: "Ethan Wilson",
    jobSeekerName: "Evelyn Lopez",
    dateTime: "September 5, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 11,
    consultantName: "Alex Thompson",
    jobSeekerName: "Jacob Anderson",
    dateTime: "August 25, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
  {
    id: 12,
    consultantName: "Maya Rodriguez",
    jobSeekerName: "Michael Johnson",
    dateTime: "October 15, 2023 - 2:30 PM",
    jobType: "Content Writer",
    status: true,
  },
  {
    id: 13,
    consultantName: "Liam Patel",
    jobSeekerName: "Amelia Davis",
    dateTime: "November 8, 2023 - 11:45 AM",
    jobType: "Data Scientist",
    status: false,
  },
  {
    id: 14,
    consultantName: "Sophia Lee",
    jobSeekerName: "Sophia Anderson",
    dateTime: "December 20, 2023 - 3:15 PM",
    jobType: "Project Manager",
    status: false,
  },
  {
    id: 15,
    consultantName: "Ethan Wilson",
    jobSeekerName: "Ethan Davis",
    dateTime: "September 5, 2023 - 10:00 AM",
    jobType: "Software Engineer",
    status: true,
  },
];

const Appointments = () => {
  // const { user } = useContext(ProviderContext);
  const [userType, setUserType] = useState(sessionStorage.getItem("userType"));

  if (userType === "job-seeker") {
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
                        ? "btn btn-secondary btn-lg disabled"
                        : "btn btn-primary btn-lg disabled"
                    }
                    style={{
                      borderRadius: "50px",
                      width: "120px",
                      fontSize: "12px",
                    }}
                  >
                    {item.status ? "Completed" : "Pending"}
                  </div>
                </td>
                <td style={{ textAlign: "center" }}>
                  <div className="flex">
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ borderRadius: "50px" }}
                    >
                      <AiFillDelete
                        style={{ marginBottom: "4px", marginRight: "4px" }}
                      />
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
  }
  if (userType === "consultant") {
    return (
      <div style={{ marginRight: "50px" }}>
        <h1 style={{ color: "#198754", fontWeight: "900" }}>Appointments</h1>
        <br />
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Appointment No</th>
              <th scope="col">Job Seeker</th>
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
                <td>{item.jobSeekerName}</td>
                <td>{item.jobType}</td>
                <td>{item.dateTime}</td>
                <td style={{ textAlign: "center" }}>
                  <div
                    className={
                      item.status
                        ? "btn btn-secondary btn-lg disabled"
                        : "btn btn-primary btn-lg disabled"
                    }
                    style={{
                      borderRadius: "50px",
                      width: "120px",
                      fontSize: "12px",
                    }}
                  >
                    {item.status ? "Completed" : "Pending"}
                  </div>
                </td>
                <td style={{ textAlign: "center" }}>
                  <div className="flex">
                    <button
                      type="button"
                      className={`btn btn-success ${item.status && "disabled"}`}
                      style={{ borderRadius: "50px" }}
                    >
                      <MdIncompleteCircle
                        style={{ marginBottom: "4px", marginRight: "4px" }}
                      />
                      Complete
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ borderRadius: "50px" }}
                    >
                      <AiFillDelete
                        style={{ marginBottom: "4px", marginRight: "4px" }}
                      />
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
  }
  if (userType === "admin") {
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
              <th scope="col">Job Seeker</th>
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
                <td>{item.jobSeekerName}</td>
                <td>{item.jobType}</td>
                <td>{item.dateTime}</td>
                <td style={{ textAlign: "center" }}>
                  <div
                    className={
                      item.status
                        ? "btn btn-secondary btn-lg disabled"
                        : "btn btn-primary btn-lg disabled"
                    }
                    style={{
                      borderRadius: "50px",
                      width: "120px",
                      fontSize: "12px",
                    }}
                  >
                    {item.status ? "Completed" : "Pending"}
                  </div>
                </td>
                <td style={{ textAlign: "center" }}>
                  <div className="flex">
                    <button
                      type="button"
                      className={`btn btn-success ${item.status && "disabled"}`}
                      style={{ borderRadius: "50px" }}
                    >
                      <MdIncompleteCircle
                        style={{ marginBottom: "4px", marginRight: "4px" }}
                      />
                      Complete
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ borderRadius: "50px" }}
                    >
                      <AiFillDelete
                        style={{ marginBottom: "4px", marginRight: "4px" }}
                      />
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
  }
};

export default Appointments;
