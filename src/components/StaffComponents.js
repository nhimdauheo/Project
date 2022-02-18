import React, { Component } from "react";
import {CardImg, Card, CardTitle } from "reactstrap"


class StaffMenu extends Component {
    constructor(props) {
        super(props);
    }
    
    // Xử lý để hiện thị data trong file staffs.jsx
    render() {

        // Sử dụng ArrayFunction để duyệt object
        const staff = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-lg-2 p-2">
                    <Card onClick={() => this.props.onClick(staff.id)}>
                            <CardImg width="100%" src={staff.image} alt={staff.name}/>
                            <CardTitle style={{textAlign:"center"}}>{staff.name}</CardTitle>           
                    </Card>
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
                <h5 style={{ display: this.props.selectStaffs != null ? "none" : "block" }}>Bấm vào nhân viên để xem thêm thông tin</h5>
            </div>
        )
    }
}
export default StaffMenu;