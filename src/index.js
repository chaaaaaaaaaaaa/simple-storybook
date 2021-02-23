import React , { useState }from 'react';
import ReactDOM from 'react-dom';
import { Btn } from './components/Button';
import { Input } from "./components/Input";
import { Nav} from "./components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/button.css'


const Main = () => {
  const [nav, setNav] = useState('buttons');
  
  const handleOnSelect = (onSelectedKey) => {
    setNav(onSelectedKey);
  }

  const contents = nav === 'buttons' ? <Btn /> : <Input />

  return (
    <div>
      <Nav nav={nav} onSelect={handleOnSelect}/>
      {contents}
    </div>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
