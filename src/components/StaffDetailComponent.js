import React, { Component } from 'react';
import { Form ,Label } from 'reactstrap';
import dateFormat from "dateformat"

class StaffDetail extends Component {
    constructor(props) {
        super(props);
    }
    // Xử lý khi click vào nhân viên sẽ lấy thêm thông tin
    renderStaff(staff) {
        if (staff != null) {
            return (
                <Form style={{ border: "1px solid #ced4da", padding: 15, borderRadius: 10 }} className="col-md-6 col-lg-4">
                    <h5><strong>Họ và tên: {staff.name}</strong></h5>
                    <Label>Ngày sinh: {dateFormat(new Date(staff.doB), "dd/mm/yyyy")}</Label><br />
                    <Label>Ngày vào công ty: {dateFormat(new Date(staff.startDate), "dd/mm/yyyy")}</Label><br />
                    <Label>Phòng ban: {staff.department.name} </Label><br />
                    <Label>Chức danh: {staff.role} </Label><br />
                    <Label>Số ngày nghỉ còn lại: {staff.annualLeave}</Label><br />
                    <Label>Số ngày đi làm thêm: {staff.overTime}</Label>
                </Form>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    render() {
        return this.renderStaff(this.props.staff); 
    }

}
export default StaffDetail;