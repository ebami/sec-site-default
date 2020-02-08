import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const CorporatePage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <h2 style="text-align: left" class="vc_custom_heading">Positive
                            Force Security works in close partnership with businesses
                                                        providing high quality services they can rely on.</h2>
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
                                <p><strong>By outsourcing security, companies will save
                                        money and free up their own staff to focus on key
                                        tasks and facilitate further growth.</strong></p>
                                <p>In a corporate environment, first impressions count.
                                    &nbsp;Secure premises help send the right message to
                                    customers, partners, staff and potential investors.</p>
                                <p>Customer services is at the forefront of our business,
                                    our staff will add a positive experience to your
                                    organisation.</p>
                                <p>Positive Force Security can provide your business with a
                                    complete package of services from smart <em>Reception
                                    Staff</em> to greet your visitors to covert<em>
                                    Close Protection Officers</em> ensuring Executives
                                    safety.</p>
                                <p>With a proven track record of working with corporate
                                    clients, we always put the clients needs first,
                                    facilitating a seamless, positive and professional
                                    approach towards security.</p>
                                <p>At Positive Force Security, we know that it is essential
                                    that your employees, clients and visitors feel happy and
                                    secure when they are in your offices and headquarters.</p>
                                <p>Our highly trained uniformed staff can deal with any
                                    security breaches swiftly and diligently.</p>
                                <p>We can also install and operate CCTV, alarm and access
                                    key systems to increase your current security measures.</p>
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

export default CorporatePage
