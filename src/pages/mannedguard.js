import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const MannedPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>4T Knox Secure</h1>
    <p><strong>Positive Force Security’s experience encompasses
        a broad range of contrasting environments.</strong>
    </p>
    <p>Positive Force Security can positively manage
        relationships and day-to-day needs, providing a safe and
        secure working environment for a buildings tenants,
        visitors and staff.</p>
    <p>We can arrange an entire solution specific to each
        clients needs.</p>
    <p>Positive Force Security is one of the country’s leading
        security specialists to art galleries and functions.
        &nbsp;Our employees receive specialist training to
        ensure that in addition to their security duties, they
        deliver exceptional customer service when dealing with
        members of the public.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/contact-us/">Contact Us</Link>
  </Layout>
)

export default MannedPage
