import React from 'react'
import {Container,Row,Col} from "reactstrap"
import testimonialImg from "../../assets/images/review1.png"
import Slider from "react-slick"
import './testimonial.css'
const Testimonial = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        
      };
  return (
    <section>
        <Container>
            <Row >
                <Col lg="8" sm='12' md='12' className="m-auto">
                    <div className="slider_wrapper d-flex align-items-center gap-5">
                        <div className="slider_content w-50">
                        <h2 className="mb-4">What are our customer saying? </h2>
                    <Slider  {...settings}>
                        <div>
                            <div className="single_testimonial">
                                <p className="review_content">
                                    
                                       "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Possimus molestiae placeat quaerat distinctio excepturi quia eligendi eos maiores?
                                         Facere illo autem maiores molestias ut itaque debitis voluptatibus
                                          ullam non amet."
                                    <h6>Andarg Worku</h6>
                                    <p>Web Developer</p>

                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="single_testimonial">
                                <p className="review_content">
                                    
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Possimus molestiae placeat quaerat distinctio excepturi quia eligendi eos maiores?
                                         Facere illo autem maiores molestias ut itaque debitis voluptatibus ullam non amet.
                                    <h6>Andarg Worku</h6>
                                    <p>Web Developer</p>

                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="single_testimonial">
                                <p className="review_content">
                                    
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Possimus molestiae placeat quaerat distinctio excepturi quia eligendi eos maiores?
                                         Facere illo autem maiores molestias ut itaque debitis voluptatibus ullam non amet.
                                    <h6>Andarg Worku</h6>
                                    <p>Web Developer</p>

                                </p>

                            </div>
                        </div>
                        <div>
                            <div className="single_testimonial">
                                <p className="review_content">
                                    
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Possimus molestiae placeat quaerat distinctio excepturi quia eligendi eos maiores?
                                         Facere illo autem maiores molestias ut itaque debitis voluptatibus ullam non amet.
                                    <h6>Andarg Worku</h6>
                                    <p>Web Developer</p>

                                </p>

                            </div>
                        </div>

                    </Slider>

                        </div>
                        <div className="slider_img w-50">
                        <img src={testimonialImg} alt="testimonial img" className="w-100"/>

                        </div>
                    </div>
                    
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}

export default Testimonial
