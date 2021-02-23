import React , { useState }from 'react';
import { Title } from './Title'
import { Text } from './Text';
import { ListBox} from './ListBox';
import { Toggle } from './Toggle.js';
import '../index.css'

export const Input = () => {

    const [type, setType] = useState('standard');
    const [isDisabled, setDisable] = useState(false);
    const [isShowHelperText, setShowHelperText] = useState(false);
    const [color, setColor] = useState('standard');
    const [size, setSize] = useState('medium');
    const [isMaxWidth, setIsMaxWidth] = useState(false);
    const [isError, setISError] = useState(false);
    const [icon, setIcon] = useState('none');
    const [isMultiline, setIsMultiline] = useState(false);


    const handlelOnCangeType = (e) => {
        setType(e.target.value);
    }

    const handleOnclickDisable = () => {
        setDisable(!isDisabled);
    }

    const handleOnclickMaxWidth = () => {
        setIsMaxWidth(!isMaxWidth);
    }
    
    const handleOnclickColor = (e) => {
        setColor(e.target.value);
    }

    const handleOnclickShow = () => {
        setShowHelperText(!isShowHelperText);
    }

    const handlelOnCangeSize = (e) => {
        setSize(e.target.value);
    }

    const handlenOclickError = () => {
        setISError(!isError);
    }

    const handlelOnCangeMultiline = () => {
        setIsMultiline(!isMultiline);
    }

    const handleOnChangeIcon = (e) => {
        setIcon(e.target.value);
    }
    

    return (
        <div className="contents">
            <Title text={'inputs'} />
            <Text 
                type={type}
                color={color}
                disabled={isDisabled}
                isShowHelperText={isShowHelperText}
                size={size}
                isMaxWidth={isMaxWidth}
                isError={isError}
                icon={icon}
                isMultiline={isMultiline}/>
            <Toggle onClick={handleOnclickDisable} checked={isDisabled} text={'disabled'}/>
            <Toggle onClick={handleOnclickShow} checked={isShowHelperText} text={'showHelperText'}/>
            <Toggle onClick={handlenOclickError} checked={isError} text={'error'}/>
            <Toggle onClick={handleOnclickMaxWidth} checked={isMaxWidth} text={'maxWidth'}/>
            <Toggle onClick={handlelOnCangeMultiline} checked={isMultiline} text={'multiline'}/>
            <ListBox 
                onChange={(e) => handlelOnCangeSize(e)}
                value={size}
                options={['small', 'medium']}
                text={'size'}/>
            <ListBox 
                onChange={(e) => handleOnclickColor(e)}
                value={color}
                options={['standard', 'secondary']}
                text={'color'}/>         
            <ListBox 
                onChange={(e) => handlelOnCangeType(e)}
                value={type}
                options={['standard', 'filled', 'outlined']}
                text={'type'}/>
            <ListBox 
                onChange={(e) => handleOnChangeIcon(e)}
                value={icon} 
                options={['none', 'left', 'right']}
                text={'icon'}/>
        </div>
    )
} 