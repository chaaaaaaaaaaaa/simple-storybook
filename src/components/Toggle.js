import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export const Toggle = (props) => {

    return (
        <div>
           <FormControlLabel
              control={<Switch checked={props.checked} onChange={props.onClick} name="checked" />}
              label={props.text}
           />
        </div>
    )
}