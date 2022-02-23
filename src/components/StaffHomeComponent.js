import React from "react";
import { Card, Button, CardImg, CardDeck, CardBody } from "reactstrap"

function HomeStaff (props){
    return(
        <CardDeck>
        <Card>
          <CardImg top width="100%" src="/assets/images/1.jpg" alt="Card image cap" />
          <br/>
          <CardBody style={{textAlign:"center"}}>
          <Button color="info">Xem thêm</Button>
        </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="/assets/images/3.jpg" alt="Card image cap" />
          <br/>
          <CardBody style={{textAlign:"center"}}>
          <Button color="info">Xem thêm</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="/assets/images/2.png" alt="Card image cap" />
          <br/>
          <CardBody style={{textAlign:"center"}}>
          <Button color="info">Xem thêm</Button>
          </CardBody>
        </Card>
      </CardDeck>
  );
}
export default HomeStaff;