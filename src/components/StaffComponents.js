import React, { Component } from "react";
import { CardImg, Card, CardTitle, Input, Button, Form, FormGroup, Col, Modal, ModalBody, Label, ModalHeader } from "reactstrap"
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form'

class StaffMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            isModelOpen: false
        }

        this.toggleModel = this.toggleModel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this)
    }

    toggleModel() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        })
    }
    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    onChangeSearchTerm(e){
        this.setState({
            searchTerm: e.target.value
        });
    }
    handleSearch = (staffs) => {
        return staffs.filter(f => f.name.toLowerCase().includes(this.state.searchTerm.trim().toLowerCase()));
    }
    // Xử lý để hiện thị data trong file staffs.jsx
    render() {
        const staffFiltered = this.handleSearch(this.props.staffs);
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
                                    <ModalHeader toggle={this.toggleModel}>Submit Contents</ModalHeader>
                                    <ModalBody>
                                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                            <FormGroup>
                                                <Label HtmlFor="yourname" >Tên:</Label>
                                                <Col>
                                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label HtmlFor="birth" >Ngày sinh:</Label>
                                                <Col>
                                                    <Control.date model=".birth" id="birth" name="birth"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup >
                                                <Label HtmlFor="birthin" >Ngày vào công ty:</Label>
                                                <Col>
                                                    <Control.date model=".birthin" id="birthin" name="birthin"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup >
                                                <Label HtmlFor="deparment" >Phòng ban:</Label>
                                                <Col>
                                                    <Control.select model=".deparment" name="deparment"
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
                                                <Label HtmlFor="salary" >Hệ số lương:</Label>
                                                <Col>
                                                    <Control.text model=".salary" id="salary" name="salary"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label HtmlFor="offf" >Số ngày nghỉ còn lại:</Label>
                                                <Col>
                                                    <Control.text model=".offf" id="offf" name="offf"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label HtmlFor="inn" >Số ngày đã làm thêm:</Label>
                                                <Col>
                                                    <Control.text model=".inn" id="inn" name="inn"
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
                                            />
                                        </Col>
                                        <Button type="submit" color="primary" >Tìm</Button>
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