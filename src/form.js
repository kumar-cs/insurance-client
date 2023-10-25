import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import createUser from "./createUser"


const defaultTheme = createTheme();

export default function SignUp() {

  const [martialStatus,setMartialStatus] = useState ('') 
  const [language,setLanguage] = useState('english')

  async function submitHandler(){
    let keys = Object.keys(data)
    let flag = true

    keys.forEach(element => {
        if(data[element]==""){
            flag = false
        } 
    });
        if(flag){
            let response = await createUser(data);
            if(response.status == 201){
                {language === "tamil" ? alert('பதிவுசெய்யப்பட்டது') : alert('Signed Up Successfully')}
            }else{
                { language === "tamil" ? alert("பதிவு செய்ய முடியவில்லை, சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும") :   alert('Sign up failed, Please try again after sometime')}
            }
        }else{
            
            {language === "tamil"  ?   alert("**** தேவையான அனைத்து தகவல்களையும் நிரப்பவும் *****") : alert("**** Please fill the all required fields *****")}
        }
    }
    const [data, setdata] = useState({name: "",father_name: "",age: "",address: "",mobile_number: "",martial_status: "",spouse_name: "",children_male: "",children_female: "",email_id:"",aadhar_number: "",dob: "",insurance_company_name: "",insurance_policy_number: "",insurance_assured_sum: "",insurance_yearly_premium_sum: ""})

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{display:'flex',justifyContent:'center'}}>
        <CssBaseline />
        <Box
          sx={{
            width:'70%',
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {language === "tamil" ? "பதிவு படிவம்" : 'Registration Form'}
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }} > 
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="language"
                  label="Language"
                  id="language"
                  autoComplete="off"
                  autoFocus
                  select
                  value={language}
                  onChange={(e)=>setLanguage(e.target.value)}
                >
                    <MenuItem value=''>Select</MenuItem>
                    <MenuItem value='english'>English</MenuItem>
                    <MenuItem value='tamil'>தமிழ்</MenuItem>
                </TextField>
            </Grid >
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label={language === 'tamil' ? "பெயர்" : 'Name'}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Father Name"
                  label={language === 'tamil' ? "தந்தையின் பெயர்" : "Father Name"}
                  name="fatherName"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label={language === 'tamil' ? "வயது" :"Age"}
                  name="age"
                  type='number'
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  name="dob"
                  type='date'
                  autoComplete="bday"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  autoComplete='address-line1'
                  id="address"
                  label={language === 'tamil' ? "முகவரி" : "Address"}
                  name="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={language === "tamil" ? "மின்னஞ்சல் முகவரி" : "Email Address"}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="mobilenumber"
                  label={language === "tamil" ? "தொலைபேசி எண்" : "Mobile Number"}
                  type="number"
                  id="mobilenumber"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="aadharnumber"
                  label={language === "tamil" ? "ஆதார் எண்" : "Aadhar Number"}
                  type="number"
                  id="aadharnumber"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="martialStatus"
                  label={language === "tamil" ? "திருமண நிலை" : "Martial Status"}
                  id="martialStatus"
                  autoComplete="off"
                  autoFocus
                  select
                  value={martialStatus}
                  onChange={(e)=>setMartialStatus(e.target.value)}
                >
                    <MenuItem value=''>{language==="tamil" ? "தேர்ந்தெடுக்கவும்" :"Select"}</MenuItem>
                    <MenuItem value='Yes'>{language==="tamil" ? "ஆம்" :"Yes"}</MenuItem>
                    <MenuItem value='No'>{language==="tamil" ? "இல்லை" :"No"}</MenuItem>
                </TextField>
              </Grid>
              {martialStatus === 'Yes' && (
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="spousename"
                  label={language === "tamil" ? "கணவன் அல்லது மனைவியின் பெயர்" :"Spouse Name"}
                  id="spousename"
                  autoComplete="off"
                  autoFocus
                  type='text'
                />
                </Grid>
              )}
              {martialStatus === 'Yes' && (
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="malechildren"
                  label={language === "tamil" ? "ஆண் குழந்தை எண்ணிக்கை" : "No.of Male Child"}
                  id="malechildren"
                  autoComplete="off"
                  autoFocus
                  type='number'
                />
                </Grid>
              )}
              {martialStatus === 'Yes' && (
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="femalechildren"
                  label={ language === "tamil" ? "பெண் குழந்தை எண்ணிக்கை" : "No.of Female Child"}
                  id="femalechildren"
                  autoComplete="off"
                  autoFocus
                  type='number'
                />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='text'
                  autoComplete='off'
                  id="companyname"
                  label={language === "tamil" ? "நிறுவனத்தின் பெயர்" :"Company Name"}
                  name="companyname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  autoComplete='off'
                  id="policynumber"
                  label={language === "tamil" ? "பாலிசி எண்" :"Policy Number"}
                  name="policynumber"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  autoComplete='off'
                  id="assuredsum"
                  label={language === "tamil" ? "உறுதியளிக்கப்பட்ட தொகை" :"Assured Sum"}
                  name="Assured Sum"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  autoComplete='off'
                  id="yearlypremiumsum"
                  label={language === "tamil" ? "வருடாந்திர பிரீமியம் தொகை" :"Yearly Premium Sum"}
                  name="yearlypremiumsum"
                  autoFocus
                />
              </Grid> 
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitHandler}
            >
              {language === "tamil" ? "பதிவு செய்" : "Register"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  {language === "tamil" ? "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழையவும்" :  "Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}