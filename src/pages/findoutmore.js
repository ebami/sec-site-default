import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const FindOutPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>4T Knox Secure</h1>
        <p><strong>Positive Force Security is a company providing
            positive, professional security services to
            businesses of all types and sizes, focusing on South
            East England.</strong></p>
        <p>The Positive Forse management team has decades of both
            local and international experience in crime prevention,
            close protection and operational security. &nbsp;This
            allows us to offer expert advice to our clients and
            build the best team to fulfill all our customers’
            specific needs.</p>
        <p>When it comes to our security personnel, each and every
            one is vetted and trained to BS7858 and BS7499 standard,
            giving you all-important peace of mind.</p>
        <p>As well as being given a length induction programme
            before being deployed to any security operation, all
            Positive Force Security Operatives are given periodic
            site-specific resilience testing.</p>
        <p>All training is delivered at our in-house centre at our
            head office, which is certified by Highfield, AOFA Q,
            Pearson Edexcel. &nbsp;We also use a network of
            qualified and experienced mentors to work with new
            recruits.</p>
        <p>At Positive Force, everything we do has a focus on
            quality assurance. &nbsp;We have rigourous company
            policies in place to ensure all our staff know what we
            expect from them. &nbsp;<strong>We take our staff
            wellbeing seriously.</strong></p>
        <p>Regular welfare, health and safety checks are monitored
            by our Mobile Supervision and Monitoring station and all
            Positive Force Security Operatives have access to a 24/7
            helpline, should they require any assitance.</p>
        <p>Our cutting edge technology for our high compliance
            standards play a vital role in all of this, from
            resource management to compliance. &nbsp;We have
            everything digitally accessible.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <br />
        <Link to="/contact-us/">Contact Us</Link>
    </Layout>
)

export default FindOutPage
