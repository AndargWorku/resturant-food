

import React from 'react'
import appImg from "../../assets/images/app.png"
import {Container,Row,Col} from "reactstrap"
import './Download.css'
const download = () => {
  return (
    <section>
        <Container className="app_container">
            <Row>
                <Col lg="6" md="6">
                    <div className="app_img">
                        <img src={appImg} alt=""/>

                    </div>

                </Col>
                <Col lg="6" md="6">
                    <div className="app_content">
                        <h5>Download our app</h5>
                        <h2 className="mb-4">Never Feel hungry Download our mobile App order deices food</h2>
                        <p></p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum neque nihil omnis eos iste fuga! Odit soluta quasi aliquid quia expedita qui assumenda! Quisquam iste suscipit commodi esse,
                         facere nam.

                         <div className="app_btns d-flex align-items-center gap-5 mt-4">
                            <button className="btn_apple d-flex align-items-center gap-3 ">
                            <i class="ri-apple-line"></i> <a href="#">App store</a>
                            </button>
                            <button className="btn_google d-flex align-items-center gap-3">
                            <i class="ri-google-play-line"></i> <a href="#">google play</a>
                            </button>

                         </div>
                    </div>
                </Col>
            </Row>

        </Container>
      
    </section>
  )
}

export default download
