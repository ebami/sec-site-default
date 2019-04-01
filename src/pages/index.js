import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>4T Knox Secure</h1>
    <p>
      4T KNOX SECURE IS A LEADING UK SECURITY COMPANY AND THE SUPPLIER OF CHOICE
      FOR ALL YOUR SECURITY NEEDS
    </p>
    <p>
      Safety and security is critically important for event organisers. If
      you’re organising an event, it’s imperative that you find a security
      supplier that you can trust. 4T Knox Secure has experience of show and
      event security, and can provide comprehensive security for any occasion.
      When you hire event security officers with 4T Knox Secure in London, you
      can be sure that we will deploy only the most highly-trained SIA licensed
      security guards. Working with you, we will develop a strategy to ensure
      that your event or show is properly protected. By offering duel
      capabilities – including health and safety and fire safety trained guards
      – we are able to help you keep costs down without compromising on vital
      services.
    </p>
    <p>
      Event Security is one of 4T Knox Secure's specialist areas, the following
      outlines the aspects we cover
    </p>
    <ul>
      <li>Perimeter Security</li>
      <li>Backstage Security</li>
      <li>Control of VIP Areas</li>
      <li>Logistics Guarding</li>
      <li>Crowd Management</li>
      <li>Stewarding</li>
      <li>Health and Safety issues</li>
    </ul>
    <p>Test Line</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/contact-us/">Contact Us</Link>
  </Layout>
)

export default IndexPage
