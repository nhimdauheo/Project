import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { STAFFS } from "../data/staffs"
import StaffMenu from "./StaffComponents";
import StaffDetail from "./StaffDetailComponent";
import StaffHeader from "./StaffHeaderComponent";

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
               <StaffHeader />
                <StaffMenu staffs = {this.state.staffs}
                    onClick = {(staffID)=>this.onStaffsSelect(staffID)} />
                <StaffDetail 
                    staff = {this.state.staffs.filter((staff) => staff.id === this.state.selectStaffs)[0]}/>
            </div>
        )
    }
}

export default MainStaff;