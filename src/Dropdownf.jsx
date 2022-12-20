import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const Dropdownf = () => {
  const [value,setValue]=useState('Select Account');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <div className="App container"  style={{display:"flex"}}>
      <DropdownButton
      alignRight
      title=""
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
       >
              <Dropdown.Item eventKey="8271634242342342">8271634242342342</Dropdown.Item>
              <Dropdown.Item eventKey="231242342341231">231242342341231</Dropdown.Item>
              <Dropdown.Item eventKey="212342342342344">212342342342344</Dropdown.Item>
      </DropdownButton>
      <h4 style={{margin:"0 15px"}}>{value}</h4>
    </div>
  )
}

export default Dropdownf