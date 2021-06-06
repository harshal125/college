import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";

import axios from 'axios'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";


import './Checkout.css';


// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },

}));

export default function PersonalDetails({history}) {

  // let history = useHistory();

  const [firstName, setFirstName] = useState("");
  console.log(firstName)
  const [lastName, setLastName] = useState("");
  // console.log(lastName)
  const [mobileNumber, setMobileNumber] = useState("");
  // console.log(mobileNumber)
  const [date, setDate] = useState("");
  // console.log(date)
  const [address, setAddress] = useState("");
  // console.log(address)
  const [country, setCountry] = useState("");
  // console.log(country)
  const [state, setState] = useState("");
  // console.log(state)
  const [city, setACity] = useState("");
  // console.log(city)
  const [zip, setZip] = useState("");
  // console.log(zip)

  const [education, setEducation] = useState("");
  // console.log(education)
  const [institute, setInstitute] = useState("");
  // console.log(institute)
  const [branch, setBranch] = useState("");
  // console.log(branch)
  const [cvv, setCvv] = useState("");
  // console.log(cvv)

  const [error, setError] = useState("");

  const [isFirstOpen, setIsFirstOpen] = useState(false)
  const [isSecondOpen, setIsSecondOpen] = useState(false)
  const [isBack, setIsBack] = useState(false)


  function nextHandle() {
    setIsFirstOpen(!isFirstOpen)
  }
  function handlePreview() {
    setIsSecondOpen(!isSecondOpen)
  }
  function handleBack() {
    setIsBack(!isBack)
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/profile/",
        {
          firstName,
          lastName,
          mobileNumber,
          date,
          address,
          country,
          state,
          city,
          zip,
          education,
          institute,
          branch,
          cvv,
        },
      );
      // localStorage.setItem("authToken", data.token);
      history.push("/login")
      
    } catch (error) {
      console.log("error")
    }
  }

  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Paper className={classes.paper} elevation={2}>
        <div >
          <form onSubmit={registerHandler} className={classes.form} noValidate>
            {!isFirstOpen ? <div>
              <Typography component="h5" variant="h5" align="center" style={{ marginBottom: '40px' }}>
                Personal Details
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    variant="outlined"
                    value={firstName}
                    fullWidth
                    autoFocus
                    autoComplete="given-name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    variant="outlined"
                    value={lastName}
                    fullWidth
                    autoComplete="family-name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobileNumber"
                    name="mobileNumber"
                    label="Mobile Number"
                    variant="outlined"
                    value={mobileNumber}
                    fullWidth
                    autoComplete="Mobile Number"
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    variant="outlined"
                    value={date}
                    fullWidth
                    defaultValue="YYYY-MM-DD"
                    onChange={(e) => setDate(e.target.value)}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    variant="outlined"
                    value={address}
                    fullWidth
                    autoComplete="shipping address-line"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    variant="outlined"
                    value={country}
                    fullWidth
                    autoComplete="Country"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    variant="outlined"
                    value={state}
                    label="State/Province/Region"
                    onChange={(e) => setState(e.target.value)}
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    variant="outlined"
                    value={city}
                    fullWidth
                    autoComplete="City"
                    onChange={(e) => setACity(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    variant="outlined"
                    label="Zip / Postal code"
                    value={zip}
                    fullWidth
                    autoComplete="Zip / Postal code"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={nextHandle}
              >
                Next
              </Button>
            </div> :
              <div>
                {!isSecondOpen ? <div>

                  <Typography
                    component="h4"
                    variant="h5"
                    align="center"
                    style={{ marginBottom: '40px' }}
                  >
                    Educational Details
                  </Typography>

                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="education"
                        name="education"
                        label="Highest Education"
                        variant="outlined"
                        value={education}
                        fullWidth
                        autoFocus
                        autoComplete="shipping address-line"
                        onChange={(e) => setEducation(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="institute"
                        name="institute"
                        label="Institute"
                        variant="outlined"
                        value={institute}
                        fullWidth
                        autoComplete="shipping address-line"
                        onChange={(e) => setInstitute(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="branch"
                        name="branch"
                        label="Branch"
                        variant="outlined"
                        value={branch}
                        fullWidth
                        autoComplete="shipping address-line"
                        onChange={(e) => setBranch(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="cvv"
                        name="cvv"
                        label="Year of Completion"
                        variant="outlined"
                        // helperText="Last three digits on signature strip"
                        fullWidth
                        value={cvv}
                        autoComplete="cc-csc"
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handlePreview}
                  >
                    Perview
              </Button>
                </div> :

                  // preview code 
                  <div>
                    <Typography
                      component="h6"
                      variant="h6"
                      align="center"
                      style={{ marginBottom: '40px' }}
                    >
                      Review Your Information
                  </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>First Name:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{firstName}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Last Name:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{lastName}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Mobile Number:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{mobileNumber}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Date:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{date}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Address:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{address}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Country:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{country}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>State:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{state}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>City:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{city}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Zip:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{zip}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Highest Education:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{education}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Institute:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{institute}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Branch:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{branch}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Year of Completion:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{cvv}</Typography>
                      </Grid>
                    </Grid>

                    <div>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      // onChange={Checkout}
                      >
                        Submit
                      </Button>
                    </div>

                  </div>}
              </div>}
          </form>
        </div>
      </Paper>
    </div>
  );
}