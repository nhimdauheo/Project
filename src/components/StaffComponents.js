import React, { Component } from "react";
import { Input, Form} from "reactstrap"
import StaffDetail from "./StaffDetailComponent";

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
    

    // Xử lý để hiện thị data trong file staffs.jsx
    render() {

        // Sử dụng ArrayFunction để duyệt object
        const staff = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-md-6 col-lg-4 p-2">
                    <Form >

                        {/* Đổi thuộc tính trỏ chuột cursor: "pointer"  */}
                        <Input style={{ cursor: "pointer", border: "1px solid #ced4da" }} onClick={() => this.onStaffsSelect(staff)} value={staff.name} />
                    </Form>
                </div>
            )
        });
        return (
            <div className="container">
                {/* Hiển thị renderStaff */}
                <div className="row">
                    {staff}
                </div><br />

                {/* Điều kiện ẩn hiện h5 */}
                <h5 style={{ display: this.state.selectStaffs != null ? "none" : "block" }}>Bấm vào nhân viên để xem thêm thông tin</h5>

                {/* Hiển thị renderStaffSelected */}
                <div className="row">
                    <StaffDetail staff = {this.state.selectStaffs}/>
                </div>
             
            </div>
        )
    }
}
export default StaffMenu;