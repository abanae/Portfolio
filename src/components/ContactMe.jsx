import * as React from "react";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import "./ContactMe.css";

function ContactMe() {
  return (
      <div class="formField">
      <Card style= {{maxWidth:650, padding:"4vw 1.5vw", backgroundColor:"#e2e8ec" }}>
          <CardContent style= {{ backgroundColor:"white" }}>
              <Typography style= {{color:"#e74c3c" }} gutterBottom variant="h2">Contact Me</Typography>
              <Typography variant= "body2" componnent="p" color="textSecondary">If you have any requests or questions don't hesitate to reach out.</Typography>
    <Box component="form">
      <div>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField
              label="First Name"
              placeholder="Enter First Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              label="Last Name"
              placeholder="Enter Last Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              type="email"
              label="Email"
              placeholder="Enter Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              type="number"
              label="Phone Number"
              placeholder="Enter Phone Number"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              multiline
              rows={5}
              label="Message"
              placeholder="Type Your Message"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} item>
             
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
    </CardContent>
     {/* <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map> */}
    </Card>
    </div>
  );
}
 export default ContactMe;
 //  export default GoogleApiWrapper({
//     apiKey: ("ENTER KEY")
//   })(ContactMe)