import React, { Component } from "react";
import { CardImg, Card, Breadcrumb, BreadcrumbItem, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class DepartmentsStaffDetail extends Component {
    constructor(props) {
        super(props)
    }
    renderDepartmentStaff = () => {
        
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/phongban">Phòng ban</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.departments.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3><i class="fa fa-street-view" aria-hidden="true"></i> {this.props.departments.name}</h3>
                            <hr />
                        </div>
                    </div>
                    {this.renderDepartmentStaff()}
                </div>
            </>
        )
    }
}
export default DepartmentsStaffDetail