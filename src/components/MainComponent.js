import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Deapartments from "./DepartmentsComponent";
import SalaryStaff from "./SalaryComponent";
import StaffMenu from "./StaffComponents";
import StaffFooter from "./StaffFooterComponent";
import StaffHeader from "./StaffHeaderComponent";
import StaffDetail from "./StaffDetailComponent"
import DepartmentsStaffDetail from "./DepartmentsDetailComponent";
import HomeStaff from "./StaffHomeComponent";
import { connect } from "react-redux";
import { postStaff, fetchStaffs, fetchDepartments, fetchSalarys } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments,
        salarys: state.salarys
    }
}
const mapDispatchToProps = (dispatch) => ({
    postStaff: (name, doB, startDate, department, salaryScale, annualLeave, overTime) => dispatch(postStaff(name, doB, startDate, department, salaryScale, annualLeave, overTime)),
    fetchStaffs: () => { dispatch(fetchStaffs()) },
    fetchDepartments: () => { dispatch(fetchDepartments()) },
    fetchSalarys: () => { dispatch(fetchSalarys()) }
})
class MainStaff extends Component {
    constructor(props) {
        super(props)
    };
    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchSalarys();
    }

    render() {
        const HomePage = () => {
            return (
                <HomeStaff />
            );
        }
        const StaffWidthId = ({ match }) => {
            return (
                <StaffDetail staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
                />
            )
        };

        const DepartmentStaffWidthId = ({ match }) => {
            console.log(this.props.staffs.staffs)
            return (
                <DepartmentsStaffDetail staffDeparments={this.props.staffs.staffs.filter((staff) => staff.departmentId === String(match.params.departmentId))} />
            )
        };

        return (
            <div className="App">
                <StaffHeader />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={3000}>
                        <Switch location={this.props.location}>
                            <Route exact path="/home" component={() => <HomePage />} />
                            <Route exact path="/nhanvien" component={() => <StaffMenu staffs={this.props.staffs}
                                postStaff={this.props.postStaff}
                                isLoading={this.props.staffs.isLoading}
                                errMess={this.props.staffs.errMess} />} />
                            <Route path="/nhanvien/:staffId" component={StaffWidthId} />
                            <Route path="/phongban/:departmentId" component={DepartmentStaffWidthId} />
                            <Route exact path="/phongban" component={() => <Deapartments departments={this.props.departments}
                                addDepartments={this.props.addDepartments}
                                isLoading={this.props.departments.isLoading}
                                errMess={this.props.departments.errMess} />} />
                            <Route exact path="/bangluong" component={() => <SalaryStaff salarys={this.props.salarys}
                                isLoading={this.props.salarys.isLoading}
                                errMess={this.props.salarys.errMess} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>

                <StaffFooter />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainStaff));