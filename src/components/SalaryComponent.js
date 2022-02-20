import React, { Component } from "react";
import { Card, CardHeader, CardTitle } from "reactstrap";

class SalaryStaff extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const salary = this.props.staffs.map((salary) => {
            return (
                <div key={salary.id} className="col-6 col-lg-4 p-3">
                    <Card>
                        <CardTitle style={{ fontSize: "25px", fontWeight: "bold" }}>{salary.name}</CardTitle>
                        <CardTitle>Mã nhân viên: {salary.id}</CardTitle>
                        <CardTitle>Hệ số lương: {salary.salaryScale}</CardTitle>
                        <CardTitle>Số giờ làm thêm: {salary.overTime}</CardTitle>
                        <CardHeader>Lương: {salary.salaryScale}*3000000 </CardHeader>
                    </Card>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {salary}
                </div>
            </div>
        )
    }
}
export default SalaryStaff;