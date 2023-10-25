import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function Review(language) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {language.language === 'tamil' ? 'காப்பீட்டுத் தகவல்' : 'Insurance Info'}
      </Typography>
      <Grid container spacing={3} style={{marginTop:'-10px'}}>
      <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  autoComplete='off'
                  id="companyname"
                  label={language.language === "tamil" ? "நிறுவனத்தின் பெயர்" :"Company Name"}
                  name="companyname"
                  autoFocus
                  variant='standard'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  autoComplete='off'
                  id="policynumber"
                  label={language.language === "tamil" ? "பாலிசி எண்" :"Policy Number"}
                  name="policynumber"
                  autoFocus
                  variant='standard'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  autoComplete='off'
                  id="assuredsum"
                  label={language.language === "tamil" ? "உறுதியளிக்கப்பட்ட தொகை" :"Assured Sum"}
                  name="Assured Sum"
                  autoFocus
                  variant='standard'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  autoComplete='off'
                  id="yearlypremiumsum"
                  label={language.language === "tamil" ? "வருடாந்திர பிரீமியம் தொகை" :"Yearly Premium Sum"}
                  name="yearlypremiumsum"
                  autoFocus
                  variant='standard'
                />
              </Grid>

              

              <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
              {language.language === "tamil" ? "சமீபத்திய புகைப்படம்" :"Recent Photograph"}
              </Typography>
                <input
                  required
                  fullWidth
                  type='file'
                  id="photo"
                  name="photo"
                  autoFocus
                  variant='standard'
                />
              </Grid>
              </Grid>
    </React.Fragment>
  );
}
