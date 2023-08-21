import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Modal from "react-modal";

export default function Consultant() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.seekpng.com/png/detail/131-1314988_icon-consulting-anonymous-proxy-icon.png"
            alt="IT consultant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              John John
            </Typography>
            <Typography variant="body4" color="text.secondary">
              IT consultant
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="success" onClick={openModal}>
            View
          </Button>
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
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.seekpng.com/png/detail/131-1314988_icon-consulting-anonymous-proxy-icon.png"
            alt="IT consultant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              John John
            </Typography>
            <Typography variant="body4" color="text.secondary">
              IT consultant
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="success">
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
