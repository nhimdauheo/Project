import React, { Component } from "react";
import { CardImg, Card, CardTitle, Input, Button, Form, FormGroup, Label, Col } from "reactstrap"
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
                <div key={staff.id} className="col-6 col-sm-6 col-md-4 col-lg-2 p-2">
                    <Card inverse color="info">
                        <Link to={`/nhanvien/${staff.id}/`}>
                            <CardImg width="100%" src={staff.image} alt={staff.name} />
                            <CardTitle style={{ textAlign: "center", color: "white" }}>{staff.name}</CardTitle>
                        </Link>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 m-1">
                        <div className="row">
                            <div className="col-6">
                                <h3><i class="fa fa-user-circle" aria-hidden="true"></i> Nhân viên</h3>
                            </div>
                            <div className="col-6">
                                <Form>
                                    <FormGroup row>
                                        <Col sm={8}>
                                            <Input type="text" name="search" id="search"/>
                                        </Col>
                                      <Button color="primary">Tìm</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
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