import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { ProviderContext } from "../../components/Provider/Provider";

const Jobseekerlist = () => {
  const { axiosJWT } = useContext(ProviderContext);

  const [JobseekerLst, setJobseekerLSt] = useState(null);
  const getJobseekerLst = async () => {
    try {
      const res = await axiosJWT.get("http://localhost:4000/job-seekers", {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
      setJobseekerLSt(res.data.reverse());
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Server Error.",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };
  useEffect(() => {
    getJobseekerLst();
  }, []);

  const deleteUser = async (id, jsName) => {
    try {
      const result = await Swal.fire({
        title: `Are you sure you want to delete ${jsName}?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#198754",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axiosJWT.delete(`http://localhost:4000/job-seekers/${id}`, {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        });
        window.location.reload(); // Reloading the page might not be the best practice; consider alternatives
        Swal.fire({
          position: "center",
          icon: "success",
          text: `${jsName} has been deleted.`,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Server Error.",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  const [userType] = useState(sessionStorage.getItem("userType"));

  console.log(JobseekerLst);
  if (userType === "admin") {
    return (
      <div style={{ marginRight: "50px" }}>
        <h1
          style={{
            color: "#198754",
            fontWeight: "900",
            fontSize: 45,
            marginBottom: 3,
          }}
        >
          Job Seekers
        </h1>
        <hr class="mt-0 mb-4" />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">JOb seeker ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {JobseekerLst !== null &&
              JobseekerLst.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="flex">
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ borderRadius: "50px" }}
                        onClick={() => deleteUser(item.id, item.name)}
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

export default Jobseekerlist;
