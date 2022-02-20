import React, { Component } from 'react';
import { CardImg, Form, Label, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from "dateformat"
import { Link } from 'react-router-dom';

class StaffDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    // Xử lý khi click vào nhân viên sẽ lấy thêm thông tin
    renderStaff = () => {
        const staff = this.props;
        if (staff != null) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-5 m-1'>
                            <div className='row'>
                                <div className='col-5 col-5 m-1'>
                                    <CardImg width="100%" src={staff.image} alt={staff.name}></CardImg>
                                </div>
                                <div className="col-5 col-5 m-1">
                                    <Form style={{ border: "1px solid #ced4da", padding: 15, borderRadius: 10 }} className="col-md-6 col-lg-4">
                                        <h5><strong>Họ và tên: {staff.name}</strong></h5>
                                        <Label>Ngày sinh: {dateFormat(new Date(staff.doB), "dd/mm/yyyy")}</Label><br />
                                        <Label>Ngày vào công ty: {dateFormat(new Date(staff.startDate), "dd/mm/yyyy")}</Label><br />
                                        <Label>Phòng ban: {staff.department.name} </Label><br />
                                        <Label>Chức danh: {staff.role} </Label><br />
                                        <Label>Số ngày nghỉ còn lại: {staff.annualLeave}</Label><br />
                                        <Label>Số ngày đi làm thêm: {staff.overTime}</Label>
                                    </Form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    };
    render() {
        console.log(this.props)
        return (
            <>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/nhanvien">Nhân viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.staff.name}</h3>
                            <hr />
                        </div>
                    </div>
                    {this.renderStaff()}
                </div>
            </>
        );
    }
}
export default StaffDetail;