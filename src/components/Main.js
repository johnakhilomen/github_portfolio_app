import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function Main(props) {
  return (
  <>
  <Container fluid style={{width: '80%', marginTop: '10%', marginLeft: '20%'}}>
  <Row md={10} >
    <Col xs={4}><Image roundedCircle={true} src={props.userData.avatar_url}></Image></Col>
    <Col xs={4} style={{display: 'flex', alignSelf: 'center'}}> 
    <h4>
      Hi Everyone,
      <br /><br />{props.userData.bio}</h4>
    </Col>
  </Row>
</Container>
  
 
  </>
  )
}
