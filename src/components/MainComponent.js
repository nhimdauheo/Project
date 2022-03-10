import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Deapartments from "./DepartmentsComponent";
import SalaryStaff from "./SalaryComponent";
import StaffMenu from "./StaffComponents";
import StaffFooter from "./StaffFooterComponent";
import StaffHeader from "./StaffHeaderComponent";
import StaffDetail from "./StaffDetailComponent"
import HomeStaff from "./StaffHomeComponent";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments
    }
}
class MainStaff extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        const HomePage = () => {
            return(
              <HomeStaff/>
            );
          }
        const StaffWidthId = ({ match }) => {
            return (
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
                
            )
        };

        return (
            <div className="App">
                <StaffHeader />
                <Switch>
                    <Route exact path="/home" component={() => <HomePage />} />
                    <Route exact path="/nhanvien" component={() => <StaffMenu staffs={this.props.staffs} />} />
                    <Route path="/nhanvien/:staffId" component={StaffWidthId} />
                    <Route exact path="/phongban" component={() => <Deapartments departments={this.props.departments} />} />
                    <Route exact path="/bangluong" component={() => <SalaryStaff staffs={this.props.staffs} />} />
                    <Redirect to="/home" />
                </Switch>
                <StaffFooter />
            </div>
        )
    }
}

export default  withRouter(connect(mapStateToProps)(MainStaff));