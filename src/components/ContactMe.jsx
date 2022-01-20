import React from "react";
import "./ContactMe.css";
import  Card  from '@mui/material/Card';
import  CardContent  from '@mui/material/CardContent';
import  Grid  from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function ContactMe() {
  return (
    <div className="Contact Me">
  <Card>
      <CardContent>
          <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                  <TextField label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} sm={6} item>
                  <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                  <TextField type="email" label="Email" placeholder="Enter Email" variant="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                  <TextField type="number" label="Phone Number" placeholder="Enter Phone Number" variant="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                  <TextField multiline rows={5} label="Message" placeholder="Type Your Message" variant="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                  <Button type="submit" variant="contained" fullWidth >Submit</Button>
              </Grid>
          </Grid>
      </CardContent>
  </Card>
    </div>
  );
}

export default ContactMe;