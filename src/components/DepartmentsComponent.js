import React, { Component } from "react";
import { Card, CardText, CardTitle } from "reactstrap";

class Deapartments extends Component {
    constructor(props){
        super(props)
    }
    render(){
            const department = this.props.departments.map((department) => {
                return(
                    <div key={department.id} className="col-6 col-lg-4 p-2">
                        <Card>
                            <CardText style={{fontSize:"25px", fontWeight:"bold"}}>{department.name}</CardText>
                            <CardTitle>Số lượng nhân viên: {department.numberOfStaff}</CardTitle>
                        </Card>
                    </div>
                )
            });
            return(
                <div className="container">
                {/* Hiển thị renderStaff */}
                <div className="row">
                    {department}
                </div>
            </div>
            )
    }
}
export default Deapartments;