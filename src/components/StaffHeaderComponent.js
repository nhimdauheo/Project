import React, { Component } from "react";
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap'

class StaffHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className='container'>
                        <NavbarBrand href='/'>StaffApp V1.2</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>StaffApp V1.2</h1>
                                <p>Welcome to the employee management app</p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }

}
export default StaffHeader;