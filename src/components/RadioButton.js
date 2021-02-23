import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


export const RadioButton = (props) => {
    return (
        <div>
            <FormControl component="fieldset">
                <RadioGroup row defaultValue='button-color' value={props.kindOrColor} onChange={props.onChange}>
                <FormControlLabel value="button-color" control={<Radio />} label="color" />
                <FormControlLabel value="button-kind" control={<Radio />} label="outline" />
               </RadioGroup>
            </FormControl>
        </div>
    )
}