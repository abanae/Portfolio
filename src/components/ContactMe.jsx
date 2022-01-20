import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import "./ContactMe.css";

function ContactMe() {
  return (
      <Card style= {{maxWidth:650, padding:"4vw 1.5vw" }}>
          <CardContent>
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
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
    </CardContent>
    </Card>
  );
}
 export default ContactMe;