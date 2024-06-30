import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Personal Details', 'Background', 'IT Skills', 'Preferences'];

const CreateProfile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    phone: '',
    nationality: '',
    address: '',
    socialNetworks: [],
  });
  const [background, setBackground] = useState({
    educations: [],
    employments: [],
  });
  const [itSkills, setITSkills] = useState({
    projects: [],
  });
  const [preferences, setPreferences] = useState({
    expectedSalary: 0,
    interestedField: [],
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePersonalDetailsChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails((prevPersonalDetails) => ({ ...prevPersonalDetails, [name]: value }));
  };

  const handleBackgroundChange = (event) => {
    const { name, value } = event.target;
    setBackground((prevBackground) => ({ ...prevBackground, [name]: value }));
  };

  const handleITSkillsChange = (event) => {
    const { name, value } = event.target;
    setITSkills((prevITSkills) => ({ ...prevITSkills, [name]: value }));
  };

  const handlePreferencesChange = (event) => {
    const { name, value } = event.target;
    setPreferences((prevPreferences) => ({ ...prevPreferences, [name]: value }));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && (
        <PersonalDetailsForm
          personalDetails={personalDetails}
          onChange={handlePersonalDetailsChange}
        />
      )}
      {activeStep === 1 && (
        <BackgroundForm
          background={background}
          onChange={handleBackgroundChange}
        />
      )}
      {activeStep === 2 && (
        <ITSkillsForm
          itSkills={itSkills}
          onChange={handleITSkillsChange}
        />
      )}
      {activeStep === 3 && (
        <PreferencesForm
          preferences={preferences}
          onChange={handlePreferencesChange}
        />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

const PersonalDetailsForm = ({ personalDetails, onChange }) => {
  return (
    <form>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={personalDetails.firstName}
        onChange={onChange}
      />
      <br />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={personalDetails.lastName}
        onChange={onChange}
      />
      {/* Add more fields for personal details */}
      <button type="submit">Next</button>
    </form>
  );
};

const BackgroundForm = ({ background, onChange }) => {
  return (
    <form>
      {/* Add fields for background */}
      <button type="submit">Next</button>
    </form>
  );
};

const ITSkillsForm = ({ itSkills, onChange }) => {
  return (
    <form>
      {/* Add fields for IT skills */}
      <button type="submit">Next</button>
    </form>
  );
};

const PreferencesForm = ({ preferences, onChange }) => {
  return (
    <form>
      {/* Add fields for preferences */}
      <button type="submit">Finish</button>
    </form>
  );
}

export default CreateProfile;