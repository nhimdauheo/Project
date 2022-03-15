import React, { Component } from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from './StaffLoadingComponent'

class Deapartments extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const department = this.props.departments.map((department) => {
            return (
                <div key={department.id} className="col-12 col-md-6 col-lg-4 p-2">
                    <Card body style={{ padding: 5, borderRadius: 10 }}>
                        <CardText style={{ fontSize: "25px", fontWeight: "bold" }}>{department.name}</CardText>
                        <CardTitle>Số lượng nhân viên: {department.numberOfStaff}</CardTitle>
                    </Card>
                </div>
            )
        });
        if (this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/nhamvien">Nhân viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3><i class="fa fa-building" aria-hidden="true"></i> Phòng Ban</h3>
                            <hr />
                        </div>
                    </div>
                    {/* Hiển thị renderStaff */}
                    <div className="row">
                        {department}
                    </div>
                </div>
            )
    }
}
export default Deapartments;