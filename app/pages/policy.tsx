import { BlitzPage } from "blitz"
import { observer } from "mobx-react-lite"
import Layout from "app/layouts/Layout"
import "antd/dist/antd.css"
import { css } from "app/utils/stitches.config"
import { Header } from "app/components/Header"
import Footer from "app/components/Footer"
import { useStore } from "../stores"
import { globalStyles } from "app/utils/styles"
import HighLight from "../components/HighLight"

const Policy: BlitzPage = observer(() => {

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    }
  }

  return (
    <Layout title="Policy">
      <Header/>
      <div className={`${globalStyles.container} ${styles.index}`}>
        <div className={` ${styles.mainContainer}`}>
          <a className="anchor" onClick={() => {scrollToAnchor("term-of-use-block")}}>Term of Use – <span className="italic">August 2020</span></a>
          <a className="anchor" onClick={() => {scrollToAnchor("privacy-policy-block")}}>Privacy Policy – <span className="italic">August 2020</span></a>
          <div className="divider"></div>
          <h1 id="term-of-use-block">TERM OF USE</h1>
          <h3>General</h3>
          <p>
            <HighLight
              className="article"
              sourceStr="By accessing and using the iotex.io website (our or this “Website”), you agree to the following terms of use as they may be modified, changed, supplemented or updated from time to time (collectively, these “terms”), as well as all applicable laws and regulations. Please read the following terms and conditions carefully. If you do not agree to all of these terms, please do not use this Website or any information, links or content contained on this Website. Your access to and use of this Website constitutes your acceptance of and agreement to abide by each of the terms set forth below including our Privacy Policy which is hereby incorporated in these terms by reference. If you are using our Website on behalf of your organization, that organization accepts these terms."
              keyArr={[
                {
                  word: "iotex.io",
                  link: "/",
                }
              ]}
              markActiveStyle={{ color: "#43C9BA" }}
            />
          </p>
          <p>
            <HighLight
              className="article"
              sourceStr="These terms may be modified, changed, supplemented or updated by IoTeX (“IoTeX”, “we”, “us” or “our”) in its sole discretion at any time without advance notice. We suggest that you visit this page regularly to keep up to date with any changes. Your continued use of this Website will confirm your acceptance of these terms as modified, changed, supplemented or updated by us. If you do not agree to such revised terms you must stop using this Website and any information, links or content contained on this Website."
              keyArr={[
                {
                  word: "IoTeX"
                }
              ]}
              markActiveStyle={{ fontWeight: 600 }}
            />
          </p>
          <h3>Use of Website</h3>
          <p>The purpose of our Website is to provide you with you some general information about the software being developed by IoTeX. You must not breach any of the following terms or our Acceptable Use Policy set out below.</p>
          <h3>Open Source Software</h3>
          <p>We may make (but are not obligated to make) the source code for the software we develop available for download as open source software. You agree to be bound by, and comply with, any license agreement that applies to this open source software. You will not indicate that you are associated with us in connection with your use, modifications or distributions of this open source software.</p>
          <p>When we host any software and enable you to access and use such software through our websites including this Website, then these terms will apply to such access and use, as well as any license agreements that we may enter into with you.</p>
          <h3>Third Party Content</h3>
          <p>We may display third-party content, advertisements, links, promotions, logos and other materials on our Website (collectively, the “Third-Party Content”) for your convenience only. We do not approve of, control, endorse or sponsor any third parties or Third-Party Content, and we make no representations or warranties of any kind regarding such Third-Party Content, including, without limitation, the accuracy, validity, legality, copyright compliance, or decency of such content. Your use of or interactions with any Third-Party Content, and any third party that provides Third-Party Content, are solely between you and such third parties and we are not responsible or liable in any manner for such use or interactions. We are not responsible for any of the content on third party sites linked to our Website nor can it be assumed that we have reviewed or approved of such sites or their content, nor do we warrant that the links to these sites work or are up to date.</p>
          <h3>User Content</h3>
          <p>If you post, upload, input, provide or submit your personal data to us, including without limitation, your name, email address, Telegram username, IP address, cryptocurrency address, text, code or other information and materials, sign up to our mailing list or create an account on our Website (collectively, your “User Content”), you must ensure that the User Content provided by you at that or at any other time is true, accurate, up to date and complete and that any User Content you post, upload, input, provide or submit to us or via our Website do not breach or infringe the intellectual property rights of any third party. We do not own, control or endorse any User Content that is transmitted, stored or processed via our Website or sent to us and we are not responsible or liable for any User Content. You are solely responsible and liable for all of your User Content and for your use of any interactive features, links or information or content on our Website, and you represent and warrant that (i) you own all intellectual property rights (or have obtained all necessary permissions) to provide your User Content and to grant the licenses in these terms; (ii) your User Content will not violate any agreements or confidentiality obligations; and (iii) your User Content will not violate, infringe or misappropriate any intellectual property right or other proprietary right, including the right of publicity or privacy, of any person or entity.</p>
          <p>You are entirely responsible for maintaining the confidentiality of your User Content and any of your non-public information. Furthermore, you are entirely responsible for any and all activities that occur under your account (if any). You agree to notify us immediately of any unauthorized use of your User Content, account or any other breach of security. We will not be liable for any loss or damages that you may incur as a result of someone else using your User Content or account, either with or without your knowledge. However, you could be held liable for losses incurred by the IoTeX (as defined below) or another party due to someone else using your User Content or account. You may not use anyone else’s User Content or account at any time without the permission of such person or entity.</p>
          <p>By posting, uploading, inputting, providing or submitting your User Content to us, you grant IoTeX, its affiliates and any necessary sub-licensees a non-exclusive, worldwide, perpetual, right and permission to use, reproduce, copy, edit, modify, translate, reformat, create derivative works from, distribute, transmit, publicly perform and publicly display your User Content and sub-license such rights to others.</p>
          <p>You must immediately update and inform us of any changes to your User Content by updating your personal data by contacting us at support@iotex.io, so that we can communicate with you effectively and provide accurate and up to date information to you.</p>
          <p>Although we have no obligation to screen, edit or monitor User Content, we reserve the right, and have absolute discretion, to remove, screen or edit User Content. Furthermore, if we have reason to believe that there is likely to be a breach of security, breach or misuse of our Website or if you breach any of your obligations under these terms or the Privacy Policy, we may suspend your use of this Website at any time and for any reason.</p>
          <p>Any User Content submitted by you on this Website may be accessed by us globally.</p>
          <h3>Feedback</h3>
          <p>If you decide to submit questions, comments, suggestions, ideas, original or creative materials or other information to us (collectively, “Feedback”), you do so on your own accord and not based on any request or solicitation from us. Feedback does not include User Content. We reserve the right to use Feedback for any purpose at no charge and without compensation to you. Do not send us Feedback if you expect to be paid or want to continue to own or claim rights to your Feedback. The purpose of these terms is to avoid potential misunderstandings or disputes if IoTeX’s products, services, business ideas or business strategies might seem similar to ideas submitted to us as Feedback. If you decide to send us Feedback, you acknowledge and understand that the IoTeX make no assurances that your Feedback will be treated as confidential or proprietary.</p>
          <h3>Aggregate Information</h3>
          <p>
            <HighLight
              className="article"
              sourceStr="We may gather information and statistics collectively about all visitors to this Website which may include the information supplied by you. This information helps us to design and arrange our Web pages in a user-friendly manner and to continually improve our Website to better meet the needs of our Website users. We may share this kind of aggregate data with selected third parties to assist with these purposes. Personal data is processed by us in accordance with our Privacy Policy."
              keyArr={[
                {
                  word: "Privacy Policy"
                }
              ]}
              markActiveStyle={{ fontWeight: 600 }}
            />
          </p>
          <h3>Intellectual Property</h3>
          <p>IoTeX and its licensors retain all right, title and interest in and to this Website and its products and services, including all copyrights, patents, trade secrets, trademarks, other intellectual property rights, trade names, logos, slogans, custom graphics, button icons, scripts, videos, text, images, software, code, files, content, information and other material available on our Website and nothing on this Website may be copied, imitated or used, in whole or in part, without our or the applicable licensor’s prior written permission. IoTeX reserves all rights not expressly granted.</p>
          <p>Any unauthorised reproduction is prohibited.</p>
          <p>You may only access, use and print the information and material on this Website for non-commercial or personal use provided that you are authorized to access such information or material and keep intact all copyright and proprietary notices.</p>
          <p>You must not otherwise reproduce, adapt, store, transmit, distribute, print, display, commercialise, publish or create derivative works from any part of the content, format or design of this Website.</p>
          <p>If you seek to reproduce or otherwise use the content on this Website in any way it is your responsibility to obtain approval from us for such use. Nothing in these terms will be construed as conferring any right or license to any patent, trademark, copyright or other proprietary rights of IoTeX or any third party, whether by estoppel, implication or otherwise.</p>
          <h3>Acceptable Use Policy</h3>
          <p>You must only use the content or services provided through this Website for their stated purpose. You must not use this Website to:</p>
          <p>(a) publish, post, send, upload, submit, display or disseminate any information or material and/or otherwise make available or engage in any conduct that is unlawful, discriminatory, harassing, libellous, defamatory, abusive, threatening, harmful, offensive, obscene, tortious or otherwise objectionable;</p>
          <p>(b) display, upload or transmit material that encourages conduct that may constitute a criminal offence, result in civil liability or otherwise violate or breach any applicable laws, regulations or code of practice;</p>
          <p>(c) interfere or violate the legal rights (such as rights of privacy and publicity) of others or violate others use or enjoyment of this Website;</p>
          <p>(d) violate any applicable laws or regulations;</p>
          <p>(e) use this Website or links on this Website in any manner that could interfere with, disrupt, negatively affect or inhibit other users from using this Website or links on this Website or that could damage, disable, overburden or impair the functioning of this Website or our servers or any networks connected to any of our servers in any manner;</p>
          <p>(f) create a false identity for the purpose of misleading others or fraudulently or otherwise misrepresent yourself to be another person or a representative of another entity including, but not limited to, an authorized user of this Website or an IoTeX representative, or fraudulently or otherwise misrepresent that you have an affiliation with a person, entity or group;</p>
          <p>(g) mislead or deceive us, our representatives and any third parties who may rely on the information provided by you, by providing inaccurate or false information, which includes omissions of information;</p>
          <p>(h) disguise the origin of any material transmitted through the services provided by this Website (whether by forging message/packet headers or otherwise manipulating normal identification information);</p>
          <p>(i) violate, infringe or misappropriate any intellectual or industrial property right of any person (such as copyright, trademarks, patents, or trade secrets, or other proprietary rights of any party) or commit a tort;</p>
          <p>(j) upload files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted files, or any other similar software or programs that may damage the operation of another’s computer or property;</p>
          <p>(k) send, upload, display or disseminate or otherwise make available material containing or associated with spam, junk mail, advertising for pyramid schemes, chain letters, virus warnings (without first confirming the authenticity of the warning), or any other form of unauthorised advertising or promotional material;</p>
          <p>(l) access any content, area or functionality of this Website that you are prohibited or restricted from accessing or attempt to bypass or circumvent measures employed to prevent or limit your access to any content, area or functionality of this Website;</p>
          <p>(m) obtain unauthorised access to or interfere with the performance of the servers which host this Website or provide the services on this Website or any servers on any associated networks or otherwise fail to comply with any policies or procedures relating to the use of those servers;</p>
          <p>(n) attempt to gain unauthorized access to any services or products, other accounts, computer systems, or networks connected to any of our servers through hacking, password mining, or any other means;</p>
          <p>(o) obtain or attempt to obtain any materials or information through any means not intentionally made available through this Website or its services;</p>
          <p>(p) harvest or otherwise collect, whether aggregated or otherwise, data about others including e-mail addresses and/or distribute or sell such data in any manner;</p>
          <p>(q) use any part of this Website other than for its intended purpose; or</p>
          <p>(r) use this Website to engage in or promote any activity that violates these terms.</p>
          <h3>Indemnification</h3>
          <p>To the fullest extent permitted by applicable law, you will indemnify, defend and hold harmless us and our respective past, present and future employees, officers, directors, contractors, consultants, equity</p>
          <p>holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors and assigns (collectively, the “IoTeX Parties”) from and against all claims, damages, liabilities, losses, costs and expenses (including attorneys’ fees) that arise from or relate to: (i) your access to or use of our Website, products or services; (ii) your User Content; (iii) any Feedback you provide; or (iv) your violation of these Terms.</p>
          <p>We reserve the right to exercise sole control over the defence, at your expense, of any claim subject to indemnification pursuant to these terms. This indemnity is in addition to, and not in lieu of, any other indemnities set forth in a written agreement between you and block.one.</p>
          <h3>Disclaimer</h3>
          <p>THIS WEBSITE AND ALL INFORMATION, PRODUCTS AND SERVICES PROVIDED THROUGH THIS WEBSITE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS WITHOUT ANY REPRESENTATIONS, WARRANTIES, PROMISES OR GUARANTEES WHATSOEVER OF ANY KIND INCLUDING, WITHOUT LIMITATION, ANY REPRESENTATIONS, WARRANTIES, PROMISES OR GUARANTEES REGARDING THE ACCURACY, CURRENCY, COMPLETENESS, ADEQUACY, AVAILABILITY, SUITABILITY OR OPERATION OF THIS WEBSITE, ANY PRODUCTS OR SERVICES WE MAY PROVIDE THROUGH IT OR THE INFORMATION OR MATERIAL IT CONTAINS.</p>
          <p>EACH OF THE IOTEX PARTIES DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, WITH REGARD TO THE FOREGOING, INCLUDING, WITHOUT LIMITATION: (A) ANY WARRANTY WITH RESPECT TO THE CONTENT, INFORMATION, DATA, SERVICES, AVAILABILITY, UNINTERRUPTED ACCESS, OR SERVICES OR PRODUCTS PROVIDED THROUGH OR IN CONNECTION WITH THIS WEBSITE; (B) ANY WARRANTIES THAT THIS WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES, WORMS, TROJAN HORSES OR OTHER HARMFUL COMPONENTS; (C) ANY WARRANTIES THAT THIS WEBSITE, ITS CONTENT AND ANY SERVICES OR PRODUCTS PROVIDED THROUGH IT ARE ERROR-FREE OR THAT DEFECTS IN THIS WEBSITE, ITS CONTENT OR SUCH SERVICES OR PRODUCTS WILL BE CORRECTED; (D) ANY WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE; (E) ANY WARRANTIES THAT THIS WEBSITE WILL BE COMPATIBLE WITH YOUR COMPUTER OR OTHER ELECTRONIC EQUIPMENT; AND (F) ANY WARRANTIES OF NON-INFRINGEMENT. THE MATERIALS AND RELATED GRAPHICS PUBLISHED ON THIS WEBSITE COULD INCLUDE TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION CONTAINED ON THIS WEBSITE. THE BLOCK.ONE PARTIES MAY MAKE IMPROVEMENTS AND/OR CHANGES TO THE WEBSITE, ITS PRODUCTS, SERVICES AND/OR THE MATERIALS DESCRIBED ON THIS WEBSITE AT ANY TIME.</p>
          <p>In addition, to the maximum extent permitted by law, none of the IoTeX Parties shall be responsible or liable for:</p>
          <p>(a) any loss, liability, cost, expense or damage suffered or incurred arising out of or in connection with any access to or use of this Website or any of its content;</p>
          <p>(b) any reliance on, or decision made on the basis of, information or material shown on or omitted from this Website;</p>
          <p>(c) any representation or otherwise in respect of the existence or availability of any job, vacancy, assignment or other engagement or appointment advertised on this Website (if any) and any representation or otherwise that we have or will ask for a candidate’s information, will or have asked to interview or hire a candidate, or that any candidates will meet our needs;</p>
          <p>(d) any matter affecting this Website or any of its content caused by circumstances beyond our reasonable control;</p>
          <p>(e) the performance of this Website and any fault, delays, interruptions or lack of availability of this Website and any of the services or products provided through this Website, which may occur due to increased usage of this Website, intermittent failures of this Website or the need for repairs, maintenance or the introduction of new facilities, products or services; and</p>
          <p>(f) any information or material on any website operated by a third party which may be accessed from this Website.</p>
          <p>IN NO EVENT WILL THE IOTEX PARTIES BE RESPONSIBLE OR LIABLE FOR ANY CLAIMS, DAMAGES, LIABILITIES, LOSSES, COSTS OR EXPENSES OF ANY KIND, WHETHER DIRECT OR INDIRECT, CONSEQUENTIAL, COMPENSATORY, INCIDENTAL, ACTUAL, EXEMPLARY, PUNITIVE OR SPECIAL (INCLUDING DAMAGES FOR LOSS OF BUSINESS, REVENUES, PROFITS, DATA, USE, GOODWILL OR OTHER INTANGIBLE LOSSES) REGARDLESS OF WHETHER THE IOTEX PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, LIABILITIES, LOSSES, COSTS OR EXPENSES, ARISING OUT OF OR IN CONNECTION WITH: (A) THE USE OR PERFORMANCE OF THIS WEBSITE; (B) ANY PROVISION OF OR FAILURE TO PROVIDE THIS WEBSITE OR ITS SERVICES (INCLUDING WITHOUT LIMITATION ANY LINKS ON OUR WEBSITE); (C) ANY INFORMATION AVAILABLE FROM THIS WEBSITE; (D) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY; (E) UNAUTHORIZED ACCESS, USE OR ALTERATION OF THE TRANSMISSION OF DATA OR CONTENT TO OR FROM US; OR (F) THE FAILURE TO RECEIVE IN ANY WAY THE TRANSMISSION OF ANY DATA, CONTENT, FUNDS OR PROPERTY FROM YOU. IN NO CIRCUMSTANCES WILL THE AGGREGATE LIABILITY OF THE IOTEX PARTIES ARISING UNDER THESE TERMS EXCEED $5.00 USD.</p>
          <h3>General</h3>
          <p>These terms are governed by the laws of Singapore. All claims arising out of or relating to these terms will be litigated exclusively in the courts of this country and we and you consent to personal jurisdiction in those courts.</p>
          <p>These terms control the relationship between us and you. They do not create any third-party beneficiary rights.</p>
          <p>If you do not comply with these terms, and we don’t take action right away, this doesn’t mean that we are giving up any rights that we may have (such as taking action in the future).</p>
          <p>If it turns out that a particular term is not enforceable, the term will be modified such that it is enforceable and this will not affect any other terms contained herein.</p>
          <p>If you have any questions regarding these terms, please contact us at support@iotex.io. Copyright © 2020 IoTeX. All rights reserved. Dated: August 1, 2020</p>
          <div className="divider"></div>
          <h1 id="privacy-policy-block">PRIVACY POLICY</h1>
          <p>This Policy (together with our terms of use) explains and sets out the basis for why and when we collect personal information about the people who visit our website(s), how we use it, the conditions under which we may disclose it to others and the measures we take to keep it secure.</p>
          <p>By visiting this website you are accepting and consenting to the practices described in this policy. Please note that this includes consenting to the collection and processing of any personal information you provide, as described below.</p>
          <p>We may amend this Policy from time to time so please check it occasionally to ensure that you agree with any changes. Your continued use of our website(s) will constitute your acceptance of, and agreement to, any changes.</p>
          <p>Any questions regarding this policy and our privacy practices should be sent by email to support@iotex.io</p>
          <h3>How we collect information about you</h3>
          <p>We obtain information about you when you use our website, when you contact us via email or a web form or if you register to receive one of our regular newsletters.</p>
          <h3>We may collect and process the following types of information about you:</h3>
          <h3>Information you provide us</h3>
          <p>You may provide us with personal information by creating an account on our website(s) or by corresponding with us by e-mail.</p>
          <p>The personal information you provide may include your name, email, address, phone number, IP address, Telegram username, language preference and information regarding the pages you access.</p>
          <p>By providing us with this information, you expressly consent to our use of your personal information in accordance with this privacy policy.</p>
          <h3>Information we collect about you</h3>
          <p>When you visit our website(s) we may collect information about your IP address, information about your visit, your browsing activity, and how you use our website. This information may be combined with other information you provide.</p>
          <h3>Information we receive from other sources</h3>
          <p>We may receive information about you if you use any other websites we, or our partners, operate. We also work with third parties (including, contractors, project partners, service providers, analytics providers) and may receive information about you from them. This may be combined with other information you provide to us.</p>
          <h3>How your information is used</h3>
          <p>We may use personal information about you for the following purposes:</p>
          <h3>Marketing:</h3>
          <p className="p-left">(a) to provide you with relevant information and news.</p>
          <p className="p-left">(b) to send you personalised communications which you have requested and that may be of interest to you, which may be based on your activity on our website(s) or the website of our partners. These may include information about campaigns, activities and events.</p>
          <p className="p-left">(c) to understand and measure the effectiveness of how we serve you and others.</p>
          <p className="p-left">(d) to make suggestions and recommendations to you about services that may interest you, which may be based on your activity on our website(s) or the website of our partners.</p>
          <p className="p-left">(e) for analytics and profiling to create aggregate trend reports, find out how visitors arrive at our website; which sites and pages are viewed, the responses to marketing campaigns and to determine the most effective marketing channels and messages.</p>
          <p className="p-left">(f) seek your views or comments on the service we provide.</p>
          <p className="p-left">(g) notify you of changes to our service, policies and terms of use.</p>
          <p>We review our retention periods for personal information on a regular basis. We will hold your personal information on our systems for as long as is necessary for the relevant activity.</p>
          <h3>Who has access to your information</h3>
          <p>We will not sell or rent your information to third parties.</p>
          <p>We will not share your information with third parties for marketing purposes.</p>
          <p>We may pass your information to third party service providers, agents, subcontractors and other associated organisations for the purposes of completing tasks and providing services to you on our behalf (for example to process and store information and to send you mails). However, if we use third party service providers, we disclose only the personal information that is necessary to deliver the service and we have a contract in place that requires them to keep your information secure and not to use it for their own direct marketing purposes.</p>
          <p>We will take the necessary steps to ensure that your privacy rights continue to be protected.</p>
          <h3>Your choices and your rights</h3>
          <p>You have the right to inform us not to process your personal information for marketing purposes. You can exercise your right and prevent us from processing such information by checking or unchecking certain boxes on the forms we use to collect your data. You can also exercise the right at any time by contacting us by email at support@iotex.io</p>
          <p>We will not contact you for marketing purposes unless you have given your prior consent. You can change your marketing preferences at any time by contacting us by email at support@iotex.io</p>
          <p>Security measures to protect your information</p>
          <p>When you give us personal information, we take steps to ensure that it’s treated securely.</p>
          <p>Non-sensitive details such as your email address may be transmitted unencrypted over the Internet, and so may not be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot guarantee the security of any information you transmit to us, and you do so at your own risk. When we receive your information, we make our best effort to ensure its security on our systems.</p>
          <h3>Profiling</h3>
          <p>We may analyse your personal information to create a profile of your preferences and interests so that we can contact you with information relevant to you. We may make use of additional information about you when it is available from external sources to help us do this effectively.</p>
          <h3>Newsletter</h3>
          <p>The provisions of this data privacy statement also apply to the request for and sending of our newsletter.</p>
          <p>The newsletter will only be sent after prior request by the user in the so-called “double opt-in procedure” (request on our website and confirmation of a corresponding request e-mail).</p>
          <p>Users of the newsletter are also assigned a UserID, which allows IoTeX to determine when the relevant newsletter was opened and which links or functions from the relevant newsletter were activated. This tracking is done for internal optimization of the newsletter. This data will not be passed on to third parties. The legal basis for processing is Art. 6 para. 1 f GDPR, where by IoTeX’s authorization arises from the fact that, on the one hand, IoTeX has an interest in evaluating such data for purposes of newsletter optimisation and, on the other hand, a concerned person can reasonably foresee at the time when the personal data is collected and in view of the circumstances under which it is carried out (in particular the above-mentioned measures) that it will possibly be processed for this purpose.</p>
          <p>The user has the right to withdraw his or her consent at any time. If the user of the newsletter does not wish to receive this tracking, he/she can unsubscribe from the newsletter. To do so, simply unsubscribe via the link in the newsletter.</p>
          <h3>Use of Cookies</h3>
          <p>Cookies are files or pieces of information that may be stored on your computer (or other internet enabled devices, such as a smartphone or tablet) when you visit a website. They are sent by a server to your computer and stored on your hard drive to allow a website to recognise you when you visit. A cookie will usually contain the name of the website from which the cookie has come from, the “lifetime” of the cookie (i.e. how long it will remain on your device), and a value, which is usually a randomly generated unique number.</p>
          <p>Our website uses cookies. They collect statistical data about your browsing actions and behaviour and do not identify you as an individual. Cookies may for example be used to store your country or language preference. This helps to improve our website and deliver a better service.</p>
          <p>You may adjust the settings on your browser to refuse cookies but some of the services on our website(s) may not work if you do so.</p>
          <h3>Links to other websites</h3>
          <p>Our website may contain links to other websites run by other organisations. This privacy policy applies only to our website‚ so we encourage you to read the privacy statements on the other websites you visit. We cannot be responsible for the privacy policies and practices of other sites even if you access them using links from our website.</p>
          <p>If you linked to our website from a third party site, we cannot be responsible for the privacy policies and practices of the owners and operators of that third party site and recommend that you check the policy of that site.v</p>
          <h3>16 or Under</h3>
          <p>We are concerned to protect the privacy of children aged 16 or under. If you are aged 16 or under‚ please get your parent/guardian’s permission beforehand whenever you provide us with personal information.</p>
          <h3>Review of this Policy</h3>
          <p>We keep this Policy under regular review. This Policy was last updated in August 2020.</p>
        </div>
      </div>
    </Layout>
  )

})

export default Policy

const styles = {

  index: css({
    py: "3.75rem"
  }),

  mainContainer: css({
    width: "80%",
    maxWidth: "$mainW",
    margin: "0 auto",
    py: "1.875rem",
    color: "$gray800",

    ".anchor": {
      display: "block",
      fontIbm: 500,
      fontSize: "1rem",
      color: "$green600",
      margin: 0,
      pb: "1rem"
    },

    ".italic": {
      fontStyle: "italic",
      fontWeight: 300
    },

    ".divider": {
      height: 1,
      background: "rgba(0,0,0,.1)",
      my: "1.875rem"
    },

    h1: {
      fontSize: 22,
      fontIbm: 600,
      pb: 10,
      margin: 0
    },

    h3: {
      fontSize: 14,
      fontIbm: 600,
      pb: 10,
      pt: 23,
      margin: 0,
    },

    p: {
      fontSize: 14,
      fontIbm: 500,
      pb: 14,
      margin: 0
    },

    ".p-left": {
      pl: 30
    }


  })

}
