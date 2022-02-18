import React, { Component } from "react";
import { STAFFS } from "../data/staffs"
import StaffMenu from "./StaffComponents";
import StaffDetail from "./StaffDetailComponent";
import StaffFooter from "./StaffFooterComponent";
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
                <StaffFooter />
            </div>
        )
    }
}

export default MainStaff;