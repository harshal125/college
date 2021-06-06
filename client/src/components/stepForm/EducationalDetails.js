import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function EducationalDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Educational Background
      </Typography>
      <Grid container spacing={3}>
        
      <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Highest Education"
            fullWidth
            autoComplete="shipping address-line"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Institute"
            fullWidth
            autoComplete="shipping address-line"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Branch"
            fullWidth
            autoComplete="shipping address-line"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="cvv"
            label="Year of Completion"
            // helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>

        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}