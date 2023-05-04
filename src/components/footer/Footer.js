

import React from 'react'
import './footer.css'
import {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap"





const footerQiuckLinks=[
   
    {
        display:'terms& condition',
        url:'#'
    },
    {
        display:'privacy& policy',
        url:'#'
    },
    {
        display:'return & refund',
        url:'#'
    },
    {
        display:'payment method',
        url:'#'
    }
]
const footerLinks=[
   
    {
        display:'About us',
        url:'/about'
    },
    {
        display:'menu',
        url:'#'
    },
    {
        display:'Recipes',
        url:'#'
    },
    {
        display:'Contact',
        url:'/contact'
    }
]
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_top">
            <Container>
                <Row>
                    <Col lg='4' md='4' sm='6'>
                    <div className="logo">
                    <h2 className="d-flex align-items-center gap-1">
                        <span> <i class="ri-restaurant-2-fill"></i>Chef food</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem reiciendis 
                        aliquam natus rerum tempore.</p>
                </div>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer_link-title">
                            Info links

                        </h5>
                        <ListGroup>
                            {
                            footerQiuckLinks.map((item,index)=><ListGroupItem   key={index} className="link_item">
                                <a href={item.url}>{item.display}</a>
                            </ListGroupItem>
                            )
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='2' md='4' sm='6'>
                        <h5 className="footer_link-title">
                            Quick titles
                        </h5>
                        <ListGroup>
                            {
                            footerLinks.map((item,index)=><ListGroupItem   key={index} className="link_item">
                                <a href={item.url}>{item.display}</a>
                            </ListGroupItem>
                            )
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                    <h5 className="footer_link-title">
                            Contact
                        </h5>
                        <ListGroup>
                            <ListGroupItem className="link_item d-flex align-items-center gap-3" >
                                <i class='ri-map-pin-line'></i> Addis Ababa, ETHIOPIA
                            </ListGroupItem>
                            <ListGroupItem className="link_item d-flex align-items-center gap-3" >
                                <i class='ri-mail-line'></i> andargworku8240@gmail.com
                            </ListGroupItem>
                            <ListGroupItem className="link_item d-flex align-items-center gap-3" >
                                <i class='ri-phone-line'></i> +25118883711
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </div>
        <div className="footer_bottom">
            <Container>
                <Row>
                    <Col lg="12">
                        <p>Copyright 2023,All right reserved by Andarg Worku</p>
                    </Col>
                </Row>
            </Container>

        </div>
      
    </footer>
  )
}

export default Footer
