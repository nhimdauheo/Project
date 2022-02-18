import React, { Component } from "react";
import {Navbar, NavbarBrand, Jumbotron, NavbarToggler, NavLink, Collapse, Nav, NavItem} from 'reactstrap'

class StaffHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href='/'>
                            <img src="assets/images/human.jpg" height="40" width="60" alt="AppStaff" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/nhanvien">
                                        <span className="fa fa-users fa-md"></span> Nhân viên
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/phongban">
                                        <span className="fa fa-home fa-lg"></span> Phòng ban
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/bangluong">
                                        <span className="fa fa-money fa-lg"></span> Bảng lương
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>StaffApp V1.2</h1>
                                <p>Welcome to the employee management app</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }

}
export default StaffHeader;