import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { STAFFS } from "../data/staffs"
import StaffMenu from "./StaffComponents";
import StaffDetail from "./StaffDetailComponent";

class MainStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
            selectStaffs: null
        };
    }
    onStaffsSelect(staffID) {
        this.setState({ selectStaffs: staffID })
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="warning">
                    <div className="container">
                        <NavbarBrand href="/">StaffApp V1.2</NavbarBrand>
                    </div>
                </Navbar>
                <StaffMenu staffs = {this.state.staffs}
                    onClick = {(staffID)=>this.onStaffsSelect(staffID)} />
                <StaffDetail 
                    staff = {this.state.staffs.filter((staff) => staff.id === this.state.selectStaffs)[0]}/>
            </div>
        )
    }
}

export default MainStaff;