import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { ProviderContext } from "../../components/Provider/Provider";

export default function Consultant() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
  useEffect(() => {
    getConsultants();
  }, []);

  const [userType] = useState(sessionStorage.getItem("userType"));

  return (
    <>
      <h1 style={{ color: "#198754", fontWeight: "900", fontSize: "40px" }}>
        Consultants
      </h1>
      <br />
      <br />
      {consultantsLst.map((consultant) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
            <Button size="small" color="success" onClick={openModal}>
              View
            </Button>
            {userType === "admin" && (
              <Button size="small" style={{ color: "red" }}>
                Delete
              </Button>
            )}
          </CardActions>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                width: "700px",
                height: "500px",
                margin: "auto",
              },
            }}
          >
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Profile</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Add time</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">dfhdfh</div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">dfhdhdfhd</div>
            </div>
            {/* <button type="button" onClick={closeModal} class="btn btn-success">
              Close
            </button> */}
          </Modal>
        </Card>
      ))}
    </>
  );
}
