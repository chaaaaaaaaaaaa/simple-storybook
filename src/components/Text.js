import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));
  
export const Text = (props) => {
    
    const classes = useStyles();

    const helperText = props.isShowHelperText ? 'Some important text' : '';
   
    const icon = props.icon === 'left' ? {startAdornment: <CallIcon/>} : props.icon === 'right' ? {endAdornment: <CallIcon/>} : {};

    const rows = props.isMultiline ? 4 : 1;

    const text = props.color === 'standard' ?   
    <TextField 
      id={props.type}
      label={props.type}
      variant={props.type}
      disabled={props.disabled}
      helperText={helperText}
      size={props.size}
      fullWidth={props.isMaxWidth}
      error={props.isError}
      InputProps={icon}
      multiline={props.isMultiline}
      rows={rows}
    />
    :
    <TextField
      id={props.type}
      label={props.type}
      variant={props.type}
      color={props.color}
      disabled={props.disabled}
      helperText={helperText}
      size={props.size}
      fullWidth={props.isMaxWidth}
      error={props.isError}
      InputProps={icon}
      multiline={props.isMultiline}
      rows={rows}
    />
    
    return (
      <form className={classes.root} noValidate autoComplete="off">
        {text}
      </form>
    );
  }