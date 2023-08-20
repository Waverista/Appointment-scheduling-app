import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import logo from "../../assets/logo/1.png";


export default function Consultant() {
  return (
    <><Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.seekpng.com/png/detail/131-1314988_icon-consulting-anonymous-proxy-icon.png"
          alt="IT consultant" />
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
          Book
        </Button>
      </CardActions>
    </Card><Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.seekpng.com/png/detail/131-1314988_icon-consulting-anonymous-proxy-icon.png"
            alt="IT consultant" />
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
            Book
          </Button>
        </CardActions>
      </Card></>
  );
}