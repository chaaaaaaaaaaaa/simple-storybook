import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export const ListBox = (props) => {


    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        }
      }));

      const classes = useStyles();


    const options = props.options.map(opt => {
        return (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
        )
    });

    const checked = props.isChekedKind;

    return (
        <FormControl className={classes.formControl} disabled={props.disabled}>
        <InputLabel id="demo-simple-select-label">{props.text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={props.onChange}
          defaultValue=""
        >
        {options}
        </Select>   
      </FormControl> 
   )
}