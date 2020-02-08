import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const StrategyPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <h2 style="text-align: left" class="vc_custom_heading">People
                                                        Strategy</h2>
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
                                <p><strong>Positive Force Security endorse a People Strategy
                                        which sets out the key objectives that will ensure
                                        that we remain a favored&nbsp;employer.</strong></p>
                                <p>In return our Clients will receive a positive service
                                    with the the Clients need at the forefront of every
                                    operatives priority/duties.</p>
                                <p>Our People Management practices support the vision and
                                    values of the business and we always strive to appoint
                                    the most talented, high trained and engaged staff.</p>
                                <p>We focus on excellent customer service and our employees
                                    must feel they are genuinely valued, empowered and can
                                    make a difference.</p>
                                <p>Our People Strategy is owned and delivered throughout the
                                    organisation, leaders and managers play a key role in
                                    its delivery – guided by our strategic planning process.
                                    &nbsp;An implementation plan will be developed with
                                    specific objectives, activity and success measures.</p>
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

export default StrategyPage
