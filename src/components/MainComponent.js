import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../data/staffs"
import Deapartments from "./DepartmentsComponent";
import SalaryStaff from "./SalaryComponent";
import StaffMenu from "./StaffComponents";
import StaffFooter from "./StaffFooterComponent";
import StaffHeader from "./StaffHeaderComponent";

class MainStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
            departments : DEPARTMENTS,
        };
    }
    render() {
        return (
            <div className="App">
               <StaffHeader />
                <Switch>
                    <Route exact path="/nhanvien" component={ () => <StaffMenu staffs={this.state.staffs}/>} />
                    <Route exact path="/phongban" component={ () => <Deapartments departments={this.state.departments}/>} />
                    <Route exact path="/bangluong" component={ () => <SalaryStaff staffs={this.state.staffs}/>} />
                    <Redirect to="/nhanvien"/>
                </Switch>
                <StaffFooter />
            </div>
        )
    }
}

export default MainStaff;