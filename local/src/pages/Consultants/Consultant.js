import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Modal from "react-modal";
import './Consultant.css';

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
              height: "700px",
              margin: "auto",
            },
          }}
        >
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button color="success" class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Profile</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Available time</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <><div class='cotainer-xl px-4 mt-4' />
                <hr class="mt-0 mb-4" />
                <div class="row">
                  <div class="col-xl-4">
                    <div class="card mb-4 mb-xl-0">
                      <div class="card-header">Profile Picture</div>
                      <div class="card-body text-center">
                        <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="card mb-4">
                      <div class="card-header">Account Details</div>
                      <div class="card-body">
                        <form>
                          <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                              <label class="small mb-1" for="inputFirstName">Name</label>
                              <input class="form-control" id="inputFirstName" type="text" />
                            </div>
                          </div>
                          <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                              <label class="small mb-1" for="inputFirstName">Email</label>
                              <input class="form-control" id="inputFirstName" type="text" />
                            </div>
                          </div>
                          <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                              <label class="small mb-1" for="mobile">Phone number</label>
                              <input class="form-control" id="mobile" />
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="small mb-1" for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                8/21/2023 09:00 Am to 03:00 PM
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault2">
                8/21/2023 09:00 Am to 03:00 PM
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault2">
                8/22/2023 08:00 Am to 01:00 PM
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label class="form-check-label" for="flexRadioDefault2">
                8/25/2023 12:00 Am to 03:00 PM
              </label>
            </div>
          </div>
          <button type="button" onClick={closeModal} class="btn btn-success">Close</button>
          {/* <button onClick={closeModal}>Close</button> */}
        </Modal >
      </Card >
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
