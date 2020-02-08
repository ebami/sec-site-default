import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const RetailPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <h2 style="text-align: left" class="vc_custom_heading">Positive
                            Force Security has extensive experience working in the retail
                            sector and has thorough understanding of the demands and
                            pressures of delivery services within this industry.</h2>
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
                                <p><strong>Our Retail Security Services are of a high
                                        standard and we can help reduce incidents of
                                        shoplifting, robbery and anti-social behavious and
                                        minimise any stock losses. &nbsp;</strong></p>
                                <p>We develop a unique approach for each of our Retail
                                    Customers, taking all evenutalities into consideration.</p>
                                <p>By choosing Positive Force Security to provide security,
                                    ensures peace of mind that you’re in safe hands.</p>
                                <p>Our Security Operatives are all thoroughly vetted and go
                                    through a series of comprehensive background checks
                                    before working with any of our Customers. &nbsp;All
                                    Security Operatives are vetted to a BS 7858 standard.</p>
                                <p>As well as providing efficient, sustainable and highly
                                    effective services, Positive Force Security gives
                                    Retailers the freedom to focus on their main priorities
                                    – keeping customers happy and maximising sales!</p>
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

export default RetailPage
