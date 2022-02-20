import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { STAFFS } from "../data/staffs"
import StaffMenu from "./StaffComponents";
import StaffFooter from "./StaffFooterComponent";
import StaffHeader from "./StaffHeaderComponent";

class MainStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
        };
    }
    render() {
        return (
            <div className="App">
               <StaffHeader />
                <Switch>
                    <Route exact path="/nhanvien" component={ () => <StaffMenu staffs={this.state.staffs}/>} />
                    <Redirect to="/nhanvien"/>
                </Switch>
                <StaffFooter />
            </div>
        )
    }
}

export default MainStaff;