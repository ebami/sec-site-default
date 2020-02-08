import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const FestivalPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <h2 style="text-align: left" class="vc_custom_heading">Large Scale
                                                        Events &amp; Festivals</h2>
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
                                <p><strong>Our Management team have many years experience
                                                                    managing large-scale events.</strong></p>
                                <p>We can supply an entire solution… Door Supervisors, Close
                                    Protection Operatives, Stewards and Medical coverage.
                                                            </p>
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

export default FestivalPage
