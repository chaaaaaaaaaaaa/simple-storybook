import React from 'react';
import Navs from 'react-bootstrap/Nav'
import './css/nav.css'

export const Nav = (props) => {

   return (
    <Navs defaultActiveKey="/home" className="flex-column"
      onSelect={props.onSelect}
    >
      <Navs.Link eventKey="buttons">buttons</Navs.Link>
      <Navs.Link eventKey="input">input</Navs.Link>
    </Navs>
   )
}