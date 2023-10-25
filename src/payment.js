import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { MenuItem } from '@mui/material';


export default function PaymentForm(language) {

    const [martialStatus,setMartialStatus] = useState ('') 

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {language.language === 'tamil' ? "தனிப்பட்ட தகவல்" :  "Personal Info"}
      </Typography>
      <Grid container spacing={3} style={{marginTop:'-10px'}}>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="age"
                label={language.language === 'tamil' ? "வயது" :"Age"}
                name="age"
                type='number'
                autoComplete="tel"
                variant='standard'
            />
        </Grid>
        <Grid item xs={12} sm={6} style={{display:'flex',alignItems:'flex-end'}}>
        <TextField
            required
            fullWidth
            id="dob"
            name="dob"
            type='date'
            autoComplete="bday"
            variant='standard'
        />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                name="aadharnumber"
                label= {language.language === "tamil" ? "ஆதார் எண்" : "Aadhar Number"}
                type="number"
                id="aadharnumber"
                autoComplete="tel"
                variant='standard'
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="Father Name"
                label= {language.language === 'tamil' ? "தந்தையின் பெயர்" : "Father Name"}
                name="fatherName"
                autoComplete="given-name"
                variant='standard'
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                name="martialStatus"
                label={language.language === "tamil" ? "திருமண நிலை" : "Martial Status"}
                id="martialStatus"
                autoComplete="off"
                autoFocus
                select
                value={martialStatus}
                onChange={(e)=>setMartialStatus(e.target.value)}
                variant='standard'
            >
                <MenuItem value=''>{language.language==="tamil" ? "தேர்ந்தெடுக்கவும்" :"Select"}</MenuItem>
                <MenuItem value='Yes'>{language.language==="tamil" ? "ஆம்" :"Yes"}</MenuItem>
                <MenuItem value='No'>{language.language==="tamil" ? "இல்லை" :"No"}</MenuItem>
            </TextField>
        </Grid>
        {martialStatus === 'Yes' && (
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                name="spousename"
                label={language.language === "tamil" ? "கணவன் அல்லது மனைவியின் பெயர்" :"Spouse Name"}
                id="spousename"
                autoComplete="off"
                autoFocus
                type='text'
                variant='standard'
            />
        </Grid>
        )}
        {martialStatus === 'Yes' && (
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                name="malechildren"
                label={language.language === "tamil" ? "ஆண் குழந்தை எண்ணிக்கை" : "No.of Male Child"}
                id="malechildren"
                autoComplete="off"
                autoFocus
                type='number'
                variant='standard'
            />
        </Grid>
        )}
        {martialStatus === 'Yes' && (
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                name="femalechildren"
                label={ language.language === "tamil" ? "பெண் குழந்தை எண்ணிக்கை" : "No.of Female Child"}
                id="femalechildren"
                autoComplete="off"
                autoFocus
                type='number'
                variant='standard'
            />
        </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}
