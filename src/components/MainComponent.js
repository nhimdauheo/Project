import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../data/staffs"
import Deapartments from "./DepartmentsComponent";
import SalaryStaff from "./SalaryComponent";
import StaffMenu from "./StaffComponents";
import StaffFooter from "./StaffFooterComponent";
import StaffHeader from "./StaffHeaderComponent";
import StaffDetail from "./StaffDetailComponent"

class MainStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,
        };
    };

    render() {
        const StaffWidthId = ({ match }) => {
            return (
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
                
            )
        };

        return (
            <div className="App">
                <StaffHeader />
                <Switch>
                    <Route exact path="/nhanvien" component={() => <StaffMenu staffs={this.state.staffs} />} />
                    <Route path="/nhanvien/:staffId" component={StaffWidthId} />
                    <Route exact path="/phongban" component={() => <Deapartments departments={this.state.departments} />} />
                    <Route exact path="/bangluong" component={() => <SalaryStaff staffs={this.state.staffs} />} />
                    <Redirect to="/nhanvien" />
                </Switch>
                <StaffFooter />
            </div>
        )
    }
}

export default MainStaff;