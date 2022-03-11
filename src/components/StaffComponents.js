import React, { Component } from "react";
import { CardImg, Card, CardTitle, Input, Button, Form, FormGroup, Col, Modal, ModalBody, Label, ModalHeader } from "reactstrap"
import { Link } from 'react-router-dom'
import { Control, LocalForm } from 'react-redux-form'

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
        const  newStaff = {
            name: values.name,
            doB: values.doB,
            salaryScale: values.salaryScale,
            startDate: values.startDate,
            department: values.department,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            salary: values.salary,
            image: '/assets/images/alberto.png',
        }
       const addStaffs = this.state.staffs
       addStaffs.push(newStaff)
        this.setState({
            staffs: addStaffs
        })
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
        const staffFiltered = this.handleSearch(this.state.staffs);
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
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label HtmlFor="doB" >Ngày sinh:</Label>
                                                <Col>
                                                    <Input type="date" model=".doB" id="doB" name="doB"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup >
                                                <Label HtmlFor="startDate" >Ngày vào công ty:</Label>
                                                <Col>
                                                    <Input type="date" model=".startDate" id="startDate" name="startDate"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup >
                                                <Label HtmlFor="department" >Phòng ban:</Label>
                                                <Col>
                                                    <Input type="select" model=".department" name="department"
                                                        className="form-control" >
                                                        <option>Sale</option>
                                                        <option>HR</option>
                                                        <option>Marketing</option>
                                                        <option>IT</option>
                                                        <option>Finance</option>
                                                    </Input>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label HtmlFor="salaryScale" >Hệ số lương:</Label>
                                                <Col>
                                                    <Input model=".salaryScale" id="salaryScale" name="salaryScale"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label HtmlFor="annualLeave" >Số ngày nghỉ còn lại:</Label>
                                                <Col>
                                                    <Input model=".annualLeave" id="annualLeave" name="annualLeave"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label HtmlFor="overTime" >Số ngày đã làm thêm:</Label>
                                                <Col>
                                                    <Input model=".overTime" id="overTime" name="overTime"
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