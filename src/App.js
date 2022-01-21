import React, {Component} from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import StaffMenu from './components/StaffComponents'
import { STAFFS, DEPARTMENTS } from './data/staffs'

class App extends Component {

  constructor(props){
    super(props)
   
    //Lấy dữ liệu từ file staffs
    this.state = {
      staffs : STAFFS
    }
  }
  
  render(){
    return (
    <div className="App">
      <Navbar dark color="warning">
        <div className='container'>
          <NavbarBrand href='/'>Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
        </div>
      </Navbar>

      {/* Hiển thị các render trong StaffMenu */}
      <StaffMenu staffs = {this.state.staffs}/>
    </div>
  );
  }
}
export default App;
