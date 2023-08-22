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
                width: "800px",
                height: "500px",
                margin: "auto",
              },
            }}
          >
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </Card>
      ))}
    </>
  );
}
