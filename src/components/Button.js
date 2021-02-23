import React , { useState }from 'react';
import Button from 'react-bootstrap/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Title } from './Title';
import { Toggle } from "./Toggle";
import { ListBox } from "./ListBox";
import { RadioButton } from "./RadioButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/button.css'

export const Btn = () => {
  const [isDisabled, setDisable] = useState(false);
  const [size, setSize] = useState('md');
  const [color, setColor] = useState('default');
  const [kind, setKind] = useState('outline-primary');
  const [kindOrColor, setKindOrColor] = useState('button-color')
  const [icon, setIcon] = useState('none');

  const handleOnclickDisable = () => {
    setDisable(!isDisabled);
  }

  const handlelOnCangeSize = (e) => {
    setSize(e.target.value);
  }

  const handleOnChangeColor = (e) => {
    setColor(e.target.value);
  }

  const handleOnChangeKind = (e) => {
    setKind(e.target.value);
  }

  const handlelOnCangeColorOrKind = (e) => {
    setKindOrColor(e.target.value);
  }

  const handleOnChangeIcon = (e) => {
    setIcon(e.target.value);
  }

  const button = () => {
    const val = kindOrColor === 'button-color' ?  color: kind;
    const leftIcon = icon === 'right' ? <AddShoppingCartIcon/> : '';
    const rightIcon = icon === 'left' ? <AddShoppingCartIcon/> : '';

    return val === 'default' ? <Button className='default' size={size} variant="" disabled={isDisabled}>{leftIcon}{val}{rightIcon}</Button>
                             : <Button variant={val} size={size} disabled={isDisabled}>{leftIcon}{val}{rightIcon}</Button>
  }

  return (
    <div>
      <Title text={'Buttons'}/>
      {button()}
      <Toggle 
        onClick={handleOnclickDisable}
        checked={isDisabled} 
        text={'disabled'}/>
      <RadioButton
        onChange={(e) => handlelOnCangeColorOrKind(e)} 
        value={kindOrColor} />
      <ListBox 
        onChange={(e) => handlelOnCangeSize(e)}
        value={size}
        options={['sm', 'md', 'lg']}
        text={'botton-size'}/>
      <ListBox 
        onChange={(e) => handleOnChangeColor(e)}
        value={color}
        options={['default', 'primary', 'secondary', 'danger']}
        text={'button-color'}
        disabled={kindOrColor !== 'button-color'}/>
      <ListBox 
        onChange={(e) => handleOnChangeKind(e)}
        value={kind}
        options={['outline-primary', 'outline-secondary', 'outline-danger', 'text']}
        text={'Outline'}
        disabled={kindOrColor !== 'button-kind'}/>
      <ListBox 
        onChange={(e) => handleOnChangeIcon(e)} 
        value={icon} 
        options={['none', 'left', 'right']} 
        text={'icon'}/>
    </div>

  )
}