import React, { Component } from "react";
import { CardImg, Card, Breadcrumb, BreadcrumbItem, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class DepartmentsStaffDetail extends Component {
    constructor(props) {
        super(props)
    }
    renderDepartmentStaff = () => {
        return this.props.staffDeparments.map((staffDeparment) => {
            return (
                <div key={staffDeparment.id} className="col-6 col-sm-6 col-md-4 col-lg-2 p-2">
                <Card inverse color="info">
                    <Link to={`/phongban/${staffDeparment.id}/`}>
                        <CardImg width="100%" src={staffDeparment.image} alt={staffDeparment.name} />
                        <CardTitle style={{ textAlign: "center", color: "white" }}>{staffDeparment.name}</CardTitle>
                    </Link>
                </Card>
            </div> 
            )
        })
        
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/phongban">Phòng ban</Link></BreadcrumbItem>
                            {/* <BreadcrumbItem active>{this.props.staffDeparments.name}</BreadcrumbItem> */}
                        </Breadcrumb>
                        <div className="col-12">
                            {/* <h3><i class="fa fa-street-view" aria-hidden="true"></i> {this.props.department.name}</h3> */}
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {this.renderDepartmentStaff()}
                    </div>
                </div>
            </>
        )
    }
}
export default DepartmentsStaffDetail