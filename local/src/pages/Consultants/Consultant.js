import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { ProviderContext } from "../../components/Provider/Provider";
import "./Consultant.css";

export default function Consultant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableTime, setAvailableTime] = useState(null);
  const [selectedConsultant, setSelectedConsultant] = useState(null);

  const openModal = (consultant) => {
    setSelectedConsultant(consultant);
    setIsModalOpen(true);
    getAvailableTime(consultant.id);
  };

  const closeModal = () => {
    setSelectedConsultant(null);
    setIsModalOpen(false);
    setAvailableTime(null);
  };

  const { axiosJWT, consultantsLst, setConsultantsLst } =
    useContext(ProviderContext);

  const getConsultants = async () => {
    try {
      const res = await axiosJWT.get("http://localhost:4000/consultants", {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
      setConsultantsLst(res.data);
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

  const getAvailableTime = async (id) => {
    try {
      const res = await axiosJWT.get(
        `http://localhost:4000/available-times/list/${id}`,
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      );

      if (res.data.length !== 0) setAvailableTime(res.data);
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

  const submitAppointment = async (id) => {
    try {
      const res = await axiosJWT.post(
        `http://localhost:4000/appointments/create`,
        {
          available_time_id: id,
        },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      );
      closeModal();
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Appointment Submit.",
        showConfirmButton: false,
        timer: 5000,
      });
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

  const deleteUser = async (id) => {
    try {
      const res = await axiosJWT.delete(
        `http://localhost:4000/consultants/${id}`,
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("accessToken"),
          },
        }
      );
      window.location.reload();
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Appointment Submit.",
        showConfirmButton: false,
        timer: 5000,
      });
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
    getConsultants();
  }, []);

  const [userType] = useState(sessionStorage.getItem("userType"));

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
        Consultants
      </h1>
      <hr class="mt-0 mb-4" />
      <br />
      <br />
      <Grid container spacing={2}>
        {consultantsLst !== null &&
          consultantsLst.map((consultant) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={consultant.email}>
              <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "30px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://www.seekpng.com/png/detail/131-1314988_icon-consulting-anonymous-proxy-icon.png"
                    alt="IT consultant"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        color: "#198700",
                        textTransform: "capitalize",
                        fontWeight: "500",
                      }}
                    >
                      {consultant.name}
                    </Typography>
                    <Typography variant="body4" color="text.secondary">
                      Email: {consultant.email}
                    </Typography>
                    <br />
                    <Typography variant="body4" color="text.secondary">
                      Country: {consultant.country}
                    </Typography>
                    <br />
                    <Typography variant="body4" color="text.secondary">
                      Job Type: {consultant.job_type}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="success"
                    onClick={() => openModal(consultant)}
                  >
                    View
                  </Button>
                  {userType === "admin" && (
                    <Button
                      size="small"
                      style={{ color: "red" }}
                      onClick={() => deleteUser(consultant.id)}
                    >
                      Delete
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      {selectedConsultant && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: "800px",
              height: "700px",
              margin: "auto",
            },
          }}
        >
          {console.log("selectedConsultant ", selectedConsultant)}
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                color="success"
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Available time
              </button>
            </li>
          </ul>
          <hr className="mt-0 mb-4" />
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <>
                <div className="cotainer-xl px-4 mt-4" />
                <div className="row">
                  <div className="col-xl-4">
                    <div className="card mb-4 mb-xl-0">
                      <div className="card-header">Profile Picture</div>
                      <div className="card-body text-center">
                        <img
                          className="img-account-profile rounded-circle mb-2"
                          src="http://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="card mb-4">
                      <div className="card-header">Account Details</div>
                      <div className="card-body">
                        <form>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label
                                className="small mb-1"
                                for="inputFirstName"
                              >
                                Name
                              </label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                value={selectedConsultant.name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label
                                className="small mb-1"
                                for="inputFirstName"
                              >
                                Email
                              </label>
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                value={selectedConsultant.email}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                              <label className="small mb-1" for="mobile">
                                Phone number
                              </label>
                              <input
                                className="form-control"
                                id="mobile"
                                value="mobile"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              className="small mb-1"
                              for="exampleFormControlTextarea1"
                            >
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              value="Description"
                              disabled
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {availableTime !== null ? (
              availableTime.map((time) => (
                <div key={time.id} className="form-check">
                  <button
                    type="button"
                    onClick={() => submitAppointment(time.id)}
                    className="btn btn-success"
                  >
                    Submit
                  </button>
                  <label className="form-check-label" for="flexRadioDefault1">
                    {time.dateTime}
                  </label>
                </div>
              ))
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "2px",
                  backgroundColor: "transparent",
                }}
              >
                There are no available times.
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "5px",
              right: "10px",
              padding: "2px",
              backgroundColor: "transparent",
            }}
          >
            <AiOutlineCloseCircle size={25} color="red" />
          </button>
        </Modal>
      )}
    </div>
  );
}
