import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const CareersPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>4T Knox Secure</h1>
    <p><strong>At Positive Force Security we invest in our staff
        and view them as our most important assets. &nbsp;We
        believe this offers a better outcome for our
        clients. &nbsp;</strong></p>
    <p>To be successful as as a CPO (Close Protection Officer),
        you will need to meet a certain criteria to ensure that
        you are suitable for the role and will not add any undue
        risk to the company or hinder your assignment in any
        way. &nbsp;Good Protection Operatives possess the
        following characteristics in abundance:</p>
    <ul>
      <li>High level of fitness</li>
      <li>Calm under pressure</li>
      <li>Fast and effective decision maker</li>
      <li>Good time keeper</li>
      <li>Team player</li>
      <li>Ability to operate on own initiative</li>
      <li>Trustworthy</li>
      <li>Good communication skills</li>
      <li>Adaptable</li>
    </ul>
    <p>If you fit these attributes, we would like to hear from
        you. &nbsp;Please email <a href="mailto:staff@postiveforcesecurity.co.uk">staff@postiveforcesecurity.co.uk</a>.
    </p>
    <p class="p4"><span class="s1"><strong>Security Industry
      Authority (SIA) Licence</strong></span></p>
    <p class="p3"><span class="s1">To work in the private
      security sector in the UK, or to work for a British
      company abroad, operatives are required by law to be
      licensed by the SIA and it is your responsibility to
      obtain the required licence and ensure you stay in
      date. The SIA is the organisation responsible for
      regulating the private security industry; it is a
      criminal offence to undertake the licensable
      activities of a security operative without an SIA
      licence.</span></p>
    <p class="p3"><span class="s1">To obtain an SIA licence you
      must meet certain criteria to determine whether you
      are a suitable candidate. Licensing is in place to
      ensure that you adhere to industry standards and
      uphold them.</span></p>
    <p class="p3"><span class="s1">Find out more about
      the&nbsp;<a href="http://www.sia.homeoffice.gov.uk/Pages/home.aspx">SIA
      licensing criteria</a>.</span></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/contact-us/">Contact Us</Link>
  </Layout>
)

export default CareersPage
