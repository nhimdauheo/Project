import React, { Component } from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

class Deapartments extends Component {
    constructor(props){
        super(props)
    }
    render(){
            const department = this.props.departments.map((department) => {
                return(
                    <div key={department.id} className="col-12 col-md-6 col-lg-4 p-2">
                        <Card style={{padding: 5}}>
                            <CardText style={{fontSize:"25px", fontWeight:"bold"}}>{department.name}</CardText>
                            <CardTitle>Số lượng nhân viên: {department.numberOfStaff}</CardTitle>
                        </Card>
                    </div>
                )
            });
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhamvien">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
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