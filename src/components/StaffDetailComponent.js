import React, { Component } from 'react';
import { CardImg, Card, Breadcrumb, BreadcrumbItem, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat"
import { Link } from 'react-router-dom';
import { baseUrl } from '../data/staffBaseUrl'

class StaffDetail extends Component {
    constructor(props) {
        super(props);
    }

    // Xử lý khi click vào nhân viên sẽ lấy thêm thông tin
    renderStaff = () => {
        const {staff} = this.props;
        console.log(staff);
        if (staff != null) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='row'>
                                <div className='col-12 col- col-md-4 col-lg-3 p-2'>
                                    <div style={{borderRadius:"50%", background:"#9fd8e9", width:"100%", height:"100%", display:"flex", alignItems:"center", border:"1px solid rgba(0,0,0,.125)"}}>
                                         <CardImg width="100%" src={baseUrl + staff.image} alt={staff.name}></CardImg>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-9 p-2">
                                    <Card style={{fontSize:18, borderRadius: 10}}>
                                        <CardBody style={{background:"#9fd8e9", color:"white"}}>
                                            <CardTitle>Họ và tên: {staff.name}</CardTitle>
                                            <CardTitle>Ngày sinh: {dateFormat(new Date(staff.doB), "dd/mm/yyyy")}</CardTitle>
                                            <CardTitle>Ngày vào công ty: {dateFormat(new Date(staff.startDate), "dd/mm/yyyy")}</CardTitle>
                                            <CardTitle>Phòng ban: {staff.department.name}</CardTitle>
                                            <CardTitle>Số ngày nghỉ còn lại: {staff.annualLeave}</CardTitle>
                                            <CardTitle>Số ngày đi làm thêm: {staff.overTime}</CardTitle>
                                        </CardBody>
                                    </Card>
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
                            <h3><i class="fa fa-street-view" aria-hidden="true"></i>  {this.props.staff.name}</h3>
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