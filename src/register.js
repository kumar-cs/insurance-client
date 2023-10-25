import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from '../src/address'
import PaymentForm from '../src/payment'
import Review from '../src/review'
import { useEffect , useState} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { MenuItem } from '@mui/material';
import '../src/register.css'

const steps = ['Contact Info', 'Personal Info', 'Insurance Info'];
const tamilStep = ['தொடர்பு தகவல்', 'தனிப்பட்ட தகவல்', 'காப்பீட்டுத் தகவல்'];



function getStepContent(step,language) {
  console.log('lan',language)
  switch (step) {
    case 0:
      return <AddressForm language={language}/>;
    case 1:
      return <PaymentForm language={language}/>;
    case 2:
      return <Review language={language}/>;
    default:
      throw new Error('Unknown step');
  }
}



export default function Register(props) {
  let language = props.language
  
    const [size,setSize]  = React.useState(window.innerWidth)

    useEffect(()=>{
        const handleSizing = ()=>{
            setSize(window.innerWidth)
        }

        window.addEventListener('resize',handleSizing);
        return () =>{
            window.removeEventListener('resize',handleSizing);
        }
    },[])

    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} style={{position:'relative'}}>
          <Typography component="h1" variant="h4" align="center">
          {language === "tamil" ? "பதிவு படிவம்" : 'Registration Form'}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}  orientation={size <= 345 ? 'vertical' : 'horizontal'}>
           { language === 'english' ? (steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))) : (tamilStep.map((label) => (
              <Step key={label} >
                <StepLabel className='forFontSize'>{label}</StepLabel>
              </Step> )))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                SuccessFully Registered
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep , language)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end',alignItems:'flex-end' ,marginTop:'20px'}}>
                
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    {language == 'tamil' ? 'பின் செல்' : "Back"}
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? (language == 'tamil' ? "சமர்ப்பிக்கவும்" : "Submit") : (language == 'tamil' ? "அடுத்து செல்" : "Next") }
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}