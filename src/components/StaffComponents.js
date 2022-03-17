import React, { Component } from "react";
import { CardImg, Card, CardTitle, Input, Button, Form, FormGroup, Col, Modal, ModalBody, Label, ModalHeader } from "reactstrap"
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Loading } from './StaffLoadingComponent'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class StaffMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            isModelOpen: false,
            staffs: this.props.staffs

        }

        this.toggleModel = this.toggleModel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    toggleModel() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        })
    }
    handleSubmit(values) {
        this.toggleModel()
        this.props.addStaff(values.name, values.doB, values.startDate, values.department, values.salaryScale, values.annualLeave, values.overTime)
    }

    onChangeSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }
    handleSearch = (staffs) => {
        return staffs.filter(f => f.name.toLowerCase().includes(this.state.searchTerm.trim().toLowerCase()));
    }
    // Xử lý để hiện thị data trong file staffs.jsx
    render() {
        const staffFiltered = this.handleSearch(this.props.staffs.staffs);
        // Sử dụng ArrayFunction để duyệt object
        const staff = staffFiltered.map((staff) => {
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
        if (this.props.staffs.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.staffs.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.staffs.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 m-1">
                            <div className="row">
                                <div className="col-3">
                                    <h3><i class="fa fa-user-circle" aria-hidden="true"></i> Nhân viên</h3>
                                </div>
                                <div className="col-3">
                                    <Button onClick={this.toggleModel} className="fa fa-plus fa-lg" color="primary" ></Button>
                                    <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
                                        <ModalHeader toggle={this.toggleModel}>Thêm nhân viên</ModalHeader>
                                        <ModalBody>
                                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                                <FormGroup>
                                                    <Label HtmlFor="name" >Tên:</Label>
                                                    <Col>
                                                        <Control.text model=".name" id="name" name="name"
                                                            className="form-control"
                                                            validators={{
                                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                                            }}
                                                        />
                                                        <Errors className="text-danger" model=".name" show="touched"
                                                            messages={{
                                                                required: 'Yêu cầu nhập ',
                                                                minLength: '.Phải nhiểu hơn 2 kí tự',
                                                                maxLength: '.Phải ít hơn 15 kí tự',
                                                            }} />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label HtmlFor="doB" >Ngày sinh:</Label>
                                                    <Col>
                                                        <Control.input type="date" model=".doB" id="doB" name="doB"
                                                            className="form-control"
                                                            validators={{
                                                                required
                                                            }}
                                                        />
                                                        <Errors className="text-danger" model=".doB" show="touched"
                                                            messages={{
                                                                required: 'Yêu cầu nhập',

                                                            }} />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup >
                                                    <Label HtmlFor="startDate" >Ngày vào công ty:</Label>
                                                    <Col>
                                                        <Control.input type="date" model=".startDate" id="startDate" name="startDate"
                                                            className="form-control"
                                                            validators={{
                                                                required
                                                            }}
                                                        />
                                                        <Errors className="text-danger" model=".startDate" show="touched"
                                                            messages={{
                                                                required: 'Yêu cầu nhập',

                                                            }} />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup >
                                                    <Label HtmlFor="department" >Phòng ban:</Label>
                                                    <Col>
                                                        <Control.select model=".department" name="department"
                                                            className="form-control" >
                                                            <option>Sale</option>
                                                            <option>HR</option>
                                                            <option>Marketing</option>
                                                            <option>IT</option>
                                                            <option>Finance</option>
                                                        </Control.select>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label HtmlFor="salaryScale" >Hệ số lương:</Label>
                                                    <Col>
                                                        <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                                            className="form-control"
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label HtmlFor="annualLeave" >Số ngày nghỉ còn lại:</Label>
                                                    <Col>
                                                        <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                                            className="form-control"
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label HtmlFor="overTime" >Số ngày đã làm thêm:</Label>
                                                    <Col>
                                                        <Control.text model=".overTime" id="overTime" name="overTime"
                                                            className="form-control"
                                                        />
                                                    </Col>
                                                </FormGroup>
                                                <Button type="submit" value="submit" className="bg-primary">Thêm</Button>
                                            </LocalForm>
                                        </ModalBody>
                                    </Modal>
                                </div>
                                <div className="col-6">
                                    <Form onSubmit={(searchTerm) => this.handleSearch(searchTerm)}>
                                        <FormGroup row>
                                            <Col sm={8}>
                                                <Input type="text" name="valueSearch" id="valueSearch"
                                                    value={this.state.searchTerm} onChange={this.onChangeSearchTerm}
                                                    placeholder='Hãy nhập tên nhân viên muốn tìm'
                                                />
                                            </Col>

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