import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const NightPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <h2 style="text-align: left" class="vc_custom_heading">Night Time Economy</h2>
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
                                <p><strong>Night Time Economy has a consistent growth rate
                                        with many different needs and cultures. &nbsp;With
                                        the industry being in infinite evolution, we have a
                                        rigorous service delivery quality management system
                                        which facilitates the ever-changing
                                        environment.</strong></p>
                                <p>Positive Force create a positive and approachable
                                    environment to suit every customers’ specific needs.
                                    &nbsp;We adopt a unique approach to eradicate the old
                                    bouncer mentality, enabling us to focus on the specific
                                    security needs of the venues patrons.</p>
                                <p>All of our operatives undertake a Continues Professional
                                    Development, monitoring progress of each operative, all
                                    in accordance with our quality management system,
                                    adhering to the Security Industry Authorities standards.</p>
                                <p>In light of recent events, security needs are higher than
                                    ever within this sector, with our strong proactive
                                    operational approach, we implement a robust and
                                    resilient operation.</p>
                                <p>We work very closely with local authorities and support
                                    organisations, attending PubWatch, training days and
                                    steering group meetings, keeping a close eye on the
                                    areas crime statistics, adapting the security needs as
                                    required.</p>
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

export default NightPage