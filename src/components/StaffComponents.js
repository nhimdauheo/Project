import React, { Component } from "react";
import { CardImg, Card, CardTitle } from "reactstrap"
import { Link } from 'react-router-dom'

class StaffMenu extends Component {
    constructor(props) {
        super(props);
    }

    // Xử lý để hiện thị data trong file staffs.jsx
    render() {

        // Sử dụng ArrayFunction để duyệt object
        const staff = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-6 col-sm-6 col-md-3 col-lg-2 p-2">
                    <Card >
                        <Link to={`/nhanvien/${staff.id}/`}>
                            <CardImg width="100%" src={staff.image} alt={staff.name} />
                            <CardTitle style={{ textAlign: "center" }}>{staff.name}</CardTitle>
                        </Link>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Nhân viên</h3>
                        <hr />
                    </div>
                </div>
                {/* Hiển thị renderStaff */}
                <div className="row">
                    {staff}
                </div>
            </div>
        )
    }
}
export default StaffMenu;