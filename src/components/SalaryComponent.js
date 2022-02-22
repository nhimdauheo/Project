import React, { Component } from "react";
import { Card, CardHeader, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom'

class SalaryStaff extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const salary = this.props.staffs.map((salary) => {
            return (
                <div key={salary.id} className="col-12 col-md-6 col-lg-4 p-2">
                    <Card body>
                        <CardTitle style={{ fontSize: "25px", fontWeight: "bold" }}>{salary.name}</CardTitle>
                        <CardTitle>Mã nhân viên: {salary.id}</CardTitle>
                        <CardTitle>Hệ số lương: {salary.salaryScale}</CardTitle>
                        <CardTitle>Số giờ làm thêm: {salary.overTime}</CardTitle>
                        <CardHeader style={{ backgroundColor: '#1E90FF', borderColor: '#333', color:"white" }}>Lương: {(salary.salaryScale*3000000 + salary.overTime*200000).toFixed(0)}</CardHeader>
                    </Card>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhamvien">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Bảng Lương</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {salary}
                </div>
            </div>
        )
    }
   
}
export default SalaryStaff;