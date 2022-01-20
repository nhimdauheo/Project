import React, { Component } from "react";
import { Input, Form, Label } from "reactstrap"
import dateFormat from "dateformat"

class StaffMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectStaffs: null
        }
    }
    onStaffsSelect(staff) {
        this.setState({ selectStaffs: staff })
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

    // Xử lý để hiện thị data trong file staffs.jsx
    render() {
        const staff = this.props.staffs.map((staff) => {
            return (
                    <div key={staff.id} className="col-md-6 col-lg-4 p-2">
                        <Form >
                            <Input style={{ cursor: "pointer", border: "1px solid #ced4da" }} onClick={() => this.onStaffsSelect(staff)} value={staff.name} />
                        </Form>
                    </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {staff}
                </div><br />

                {/* Điều kiện ẩn hiện h5 */}
                <h5 style={{display: this.state.selectStaffs != null ?"none":"block"}}>Bấm vào nhân viên để xem thêm thông tin</h5>


                <div className="row">
                    {this.renderStaff(this.state.selectStaffs)}
                </div>
            </div>
        )
    }
}
export default StaffMenu;