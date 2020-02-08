import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ConciergePage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>4T Knox Secure</h1>
        <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <h2 style="text-align: left" class="vc_custom_heading">Concierge /
                            Reception Duties / Security Operatives</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <div class="vc_empty_space" style="height: 32px"><span
                            class="vc_empty_space_inner"></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-6">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                                <p><strong>Positive Force Security knows that the smallest
                                        things can make a huge difference when it comes to
                                        Concierge, Reception Duty and Security
                                        Operatives.</strong></p>
                                <p>From providing staff for positive, customer focused
                                    concierge and reception duties to offering on-site
                                    security operatives. &nbsp;Positive Force Security
                                    ensures its trained team of staff offers a professional,
                                    friendly and attentive service as soon as any visitors
                                    enter your site.</p>
                                <p>We have a wealth of knowledge and strong operational
                                    experience within this sector, solving unique and
                                    complex problems such as noise management procedures.</p>
                                <p>It is our proven, reliable, efficient and reassuring
                                    approach that ensures your customer satisfaction.
                                    &nbsp;No matter the size of your business or your
                                    sector, our professional staff will seamlessly uphold
                                    your company values at all times, integrating with your
                                    organisation. &nbsp;This gives you valuable peace of
                                    mind.</p>
                                <p>All our Concierge, Reception and Security Staff receive
                                    thorough site specific training. They are capable of
                                    dealing with every eventuality in an efficient and
                                    courteous manner, whether that be fire marshalling,
                                    conflict management or administering first aid on site.</p>
                                <p>e design this to the specific needs of each client and
                                    the size and location of each individual operation, so
                                    rest assured we aim to exceed your expectations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <br />
        <Link to="/contact-us/">Contact Us</Link>
    </Layout>
)

export default ConciergePage
