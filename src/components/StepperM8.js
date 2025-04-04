/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 24/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import DoneIcon from '@mui/icons-material/Done';


const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#f0c659 0%,#f3c039 50%,#f1b821 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#f0c659 0%,#f3c039 50%,#f1b821 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    width: '83px',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : 'none',
  zIndex: 1,
  color: '#C5C5C5',
  border: '1px solid #C5C5C5',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 95deg,#f0c659 0%,#f3c039 50%,#f1b821 100%)',
    color: 'white',
    border: 'none',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 95deg,#f0c659 0%,#f3c039 50%,#f1b821 100%)',
    color: 'white',
    border: 'none',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const icons = {
    1: "1",
    2: "2",
    3: <DoneIcon />,
  };
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function StepperM8(props) {
  return (<>
  <style>
    {
      `
      .stepper-m8 .MuiStepLabel-label.Mui-active,.stepper-m8 .MuiStepLabel-label.Mui-completed{
        color: #F1B821;
        font-weight: 400;

      }
      .stepper-m8 .MuiSvgIcon-root.Mui-completed{
        color: #F1B821;
      }
        .stepper-m8 .MuiSvgIcon-root{
          width: auto;
          height: 30px;
        }
        .stepper-m8 .MuiSvgIcon-root.Mui-active{
          color: #F1B821;
        }
        .stepper-m8 .MuiStepConnector-root{
          top: 30%;
          left: -30%;
          right: 70%;

        }
        .stepper-m8 .MuiStepConnector-line::before{
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          display: block;
          border-right: 3px solid #eaeaf0;
          border-bottom: 3px solid #eaeaf0;
          width: 10px;
          height: 10px;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        .stepper-m8 .Mui-active .MuiStepConnector-line::before,.stepper-m8 .Mui-completed .MuiStepConnector-line::before{
          border-right: 3px solid #f2bc2d;
          border-bottom: 3px solid #f2bc2d;
        }
        .stepper-m8 .MuiStep-root {
          padding: 0;
        }
        
      `
    }
  </style>
    <Stack sx={{ width: '100%' }} spacing={4} className="stepper-m8">
      
      <Stepper alternativeLabel activeStep={props.activeStep} connector={<ColorlibConnector />}>
        {props.steps.map((item) => (
          <Step  key={item.key}>
            <StepLabel  StepIconComponent={ColorlibStepIcon}>{item.text}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
    </>
  );
}
