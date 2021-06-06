import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
}));

export default function PersonalDetails() {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [date, setDate] = useState("");
  console.log(date)
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setACity] = useState("");
  const [zip, setZip] = useState("");


  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={firstName}
            fullWidth
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
            value={lastName}
            fullWidth
            autoComplete="family-name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
                  {/* <form className={classes.container} noValidate> */}

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
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
           value={date}
           fullWidth   
           defaultValue="yyyy-mm-dd"
           onChange={(e) => setDate(e.target.value)}
           className={classes.textField}
           InputLabelProps={{
              shrink: true,
           }}
         />
        </Grid>
        
                    {/* </form> */}

        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
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
            label="Zip / Postal code"
            value={zip}
            fullWidth
            autoComplete="Zip / Postal code"
            onChange={(e) => setZip(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}