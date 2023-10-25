import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function AddressForm(language) {
  console.log('lannn',language)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {language.language === 'tamil' ? 'தொடர்பு தகவல்' : 'Contact Info'}
      </Typography>
      <Grid container spacing={3} style={{marginTop:'-10px'}}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label={language.language === 'tamil' ? 'முதல் பெயர்' : 'First Name'}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label={language.language === 'tamil' ? 'இறுதி பெயர்' : 'Last Name'}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="email"
                label={language.language === 'tamil' ? 'மின்னஞ்சல் முகவரி' : 'Email Address'}
                name="email"
                autoComplete="email"
                variant="standard"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                name="mobilenumber"
                label={language.language === 'tamil' ? 'கைபேசி எண்' : 'Mobile Number'}
                type="number"
                id="mobilenumber"
                autoComplete="tel"
                variant="standard"
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label={language.language === 'tamil' ? 'முகவரி கோடு 1' : 'Address line 1'}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label={language.language === 'tamil' ? 'முகவரி கோடு 2' : 'Address line 2'}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label={language.language === 'tamil' ? 'நகரம்' : 'City'}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label={language.language === 'tamil' ? 'மாநிலம்' : 'State'}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label={language.language === 'tamil' ? 'அஞ்சல் குறியீடு' : 'Postal Code'}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label={language.language === 'tamil' ? 'தேசம்' : 'Country'}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
