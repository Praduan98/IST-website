import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmailLink } from "@/components/email-link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy policy | InsightsTap",
  description: "Privacy policy for InsightsTap Solutions PVT. LTD.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-white px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
          <div className="dot-grid absolute inset-0" />
          <div className="glow-orb absolute left-1/2 top-[20%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-[800px]">
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              Legal
            </span>
            <h1 className="mb-8 text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Privacy policy
            </h1>
            <p className="mb-4 text-sm text-[#94A3B8]">Insightstap Solutions PVT. LTD.</p>

            <div className="prose-policy space-y-6 text-sm leading-relaxed text-[#64748B]">

              {/* Introduction */}
              <p>
                This Privacy Policy (the "Policy") governs the manner in which the Platform collects, uses, maintains and discloses information of its users. The Policy also describes the practices that We apply to such user information, user's privacy rights and choices regarding their information. To clarify, this Policy applies to all users of the Platform (referred to as "Learners", "You", "Your").
              </p>
              <p>
                By accessing and using the Platform, providing Your Personal Information, or by otherwise signalling Your agreement when the option is presented to You, You consent to the collection, use, and disclosure of information described in this Policy and Terms of Use and we disclaim all the liabilities arising therefrom. If You do not agree with any provisions of this Policy and/or the Terms of Use, You should not access or use the Platform or engage in communications with us and are required to leave the Platform immediately. If any information You have provided or uploaded on the Platform violates the terms of this Policy or Terms of Use, we may be required to delete such information upon informing You of the same and revoke Your access if required without incurring any liability to You.
              </p>
              <p>
                Capitalized terms used but not defined in this Privacy Policy can be found in our Terms of Use. Please read this Policy carefully prior to accessing our Platform and using any of the services or products offered therein. If you have any questions, please contact us at the contact information provided below.
              </p>

              {/* Section 1 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">1. Personal Information</h2>
              <p>
                "Personal Information" shall mean the information which identifies a Learner i.e., first and last name, identification number, email address, age, gender, location, photograph and/or phone number provided at the time of registration or any time thereafter on the Platform.
              </p>
              <p>
                "Sensitive Personal Information" shall include (i) passwords and financial data (except the truncated last four digits of credit/debit card), (ii) health data, (iii) official identifier (such as biometric data, aadhar number, social security number, driver's license, passport, etc.), (iv) information about sexual life, sexual identifier, race, ethnicity, political or religious belief or affiliation, (v) account details and passwords, or (vi) other data/information categorized as 'sensitive personal data' or 'special categories of data' under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, General Data Protection Regulation (GDPR) and/or the California Consumer Privacy Act (CCPA) ("Data Protection Laws") and in context of this Policy or other equivalent/similar legislations.
              </p>
              <p>
                Usage of the term 'Personal Information' shall include 'Sensitive Personal Information' as may be applicable to the context of its usage.
              </p>

              {/* Section 2 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">2. Information We Collect</h2>
              <p>
                We may collect both personal and non-personal identifiable information from You in a variety of ways, including, but not limited to, when You visit our Platform, register on the Platform, and in connection with other activities, services, features or resources we make available on our Platform. However, please note that:
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li>We do not ask You for Personal Information unless we truly need it; like when You are registering for any Content on the Platform.</li>
                <li>We do not share Your Personal Information with anyone except to comply with the applicable laws, develop our products and services, or protect our rights.</li>
                <li>We do not store Personal Information on our servers unless required for the on-going operation of our Platform.</li>
              </ol>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Personal Identifiable Information</h3>
              <p>
                We may collect personal-identifiable information such as Your name and email address to enable Your access to the Platform and services/products offered therein. We will collect personal-identifiable information from You only if such information is voluntarily submitted by You to us. You can always refuse to provide such personal identification information; however, it may prevent You from accessing services or products provided on the Platform or from engaging in certain activities on the Platform.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Non-Personal Identifiable Information</h3>
              <p>
                When You interact with our Platform, we may collect non-personal-identifiable information such as the browser name, language preference, referring site, and the date and time of each user request, operating system and the Internet service providers utilized and other similar information.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Cookies</h3>
              <p>
                To enhance User experience, our Platform may use "cookies". A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns for record-keeping purposes. You may choose to set Your web browser to refuse cookies, or to notify You when cookies are being sent; however, please note that in doing so, some parts of the Platform may not function properly.
              </p>

              {/* Section 3 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">3. How We Use and Share the Information Collected</h2>
              <p>We may collect and use Your Personal Information for the following purposes:</p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">1. To provide access to our Platform and/or the services/products offered therein</h3>
              <p>
                We use Your information as collected by us to allow you to access the Platform and the services/products offered therein, including without limitation to provide customer service, fulfil purchases through the Platform, verify User information and to resolve any glitches with our Platform. The legal basis for this processing is consent or, where applicable, our legitimate interests in the proper administration of our Platform, and/or the performance of a contract between You and us.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">2. To improve our Platform and maintain safety</h3>
              <p>
                We use Your information to improve and customize the Platform and services/products offered by us. Further, we also use Your information to prevent, detect, investigate, and take measures against criminal activity, fraud, misuse of or damage to our Platform or network, and other threats and violations to a third party's or our rights and property, or the safety of our Users, or others. The legal basis for this processing is consent or, where applicable, our legitimate interests in the proper administration of our Platform, and/or the performance of a contract between You and us.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">3. To communicate with You or market our services/products</h3>
              <p>
                We may use the email address submitted by You to communicate with You about Your orders on our Platform, our offers, new products, services or even receive Your feedback on the Platform or any services/products offered therein. It may also be used to respond to Your inquiries, questions, and/or other requests. If at any time You would like to unsubscribe from receiving future emails, please write to us at the contact information provided below. The legal basis for this processing is consent or, where applicable, our legitimate interests in the proper administration of our Platform, and/or the performance of a contract between You and us.
              </p>

              <p>
                We do not use Personal Information for making any automated decisions affecting or creating profiles other than what is described in this Policy.
              </p>
              <p>
                We do not sell, trade, or otherwise exploit Your personal-identifiable information to others. Limited to the purposes stated hereinabove, we may share generic aggregated demographic information not linked to any personal-identifiable information regarding visitors and Users with our business partners and trusted affiliates.
              </p>

              {/* Section 4 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">4. Your Choices</h2>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">1. Limit the information You provide</h3>
              <p>
                You always have an option to choose the information You provide to us, including the option to update or delete Your information. However, please note that lack of certain information may not allow You access to the Platform or any of its features, in part or in full. For example: information required for Your registration on the Platform.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">2. Limit the communications You receive from us</h3>
              <p>
                Further, You will also have the option to choose what kind of communication You would like to receive from us. However, there may be certain communications that are required for legal or security purposes, including changes to various legal agreements, that you may not be able to limit.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">3. Reject Cookies and other similar technologies</h3>
              <p>
                You may reject or remove cookies from Your web browser; You will always have the option to change the default settings on Your web browser if the same is set to "accept cookies". However, please note that some of the services/products offered on the Platform may not function or be available to You, when the cookies are rejected, removed or disabled.
              </p>

              {/* Section 5 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">5. Your Rights</h2>
              <p>
                In general, all Learners have the rights specified herein this section. However, depending on where you are situated, you may have certain specific rights in respect of your Personal Information accorded by the laws of the country you are situated in. To understand Your rights, please refer to the Country Specific Additional Rights below.
              </p>
              <p>
                If you are a Learner, you may exercise any of these rights by using the options provided to you within the Platform upon your login. If however, you are facing any issues or require any clarifications, you can always write to us at the address noted in the "Grievances" section below, and we will address your concerns to the extent required by the applicable law.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Right to Confirmation and Access</h3>
              <p>
                You have the right to get confirmation and access to your Personal Information that is with us along with other supporting information.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Right to Correction</h3>
              <p>
                You have the right to ask us to rectify your Personal Information that is with us that you think is inaccurate. You also have the right to ask us to update your Personal Information that you think is incomplete or out-of-date.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Right to be Forgotten</h3>
              <p>
                You have the right to restrict or prevent the continuing disclosure of your Personal Information under certain circumstances.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Right to Erasure</h3>
              <p>
                If you wish to withdraw/remove your Personal Information from our Platform, you have the right to request erasure of your Personal Information from our Platform. However, please note that such erasure will remove all your Personal Information from our Platform (except as specifically stated in this Policy) and may result in deletion of your account on the Platform permanently, and the same will not be retrievable.
              </p>

              <p>
                Remember, you are entitled to exercise your rights as stated above only with respect to your information, including Personal Information, and not that of other Learners. Further, when we receive any requests or queries over email to the address specified in the "Grievances" section below, then, as per the applicable Data Protection Laws, we may need to ask you a few additional information to verify your identity in association with the Platform and the request received.
              </p>

              {/* Section 6 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">6. Protection of Your Information</h2>
              <p>
                We take all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of Personal Information or such other data on the Platform. Our disclosure of any such information is limited to:
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Our employees, contractors and affiliated organizations (if any) that (i) need to know that information in order to process it on our behalf or to provide services available on our Platform, and (ii) that have agreed not to disclose it to others.</li>
                <li>A response to a court order, or other governmental request. Without limitation to the foregoing, we reserve the right to disclose such information where we believe in good faith that such disclosure is necessary to:
                  <ol className="ml-6 mt-2 list-decimal space-y-1">
                    <li>comply with applicable laws, regulations, court orders, government and law enforcement agencies' requests;</li>
                    <li>protect and defend a third party's or our rights and property, or the safety of our users, our employees, or others; or</li>
                    <li>prevent, detect, investigate and take measures against criminal activity, fraud and misuse or unauthorized use of our Platform and/or to enforce our Terms of Use or other agreements or policies.</li>
                  </ol>
                </li>
                <li>To the extent permitted by law, we will attempt to give You prior notice before disclosing Your information in response to such a request.</li>
              </ol>

              {/* Section 7 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">7. Third Party Websites</h2>
              <p>
                You may find links to the websites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. The content or links that appear on these sites are not controlled by us in any manner and we are not responsible for the practices employed by such websites. Further, these websites/links thereto, including their content, may be constantly changing and may have their own terms of use and privacy policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that terms and policies published on such websites.
              </p>

              {/* Section 8 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">8. Cross-Border Data Transfer</h2>
              <p>
                Your information including any Personal Information is stored, processed, and transferred in and to the Amazon Web Service (AWS) servers and databases located in India. We may also store, process, and transfer information in and to servers in other countries depending on the location of our affiliates and service providers.
              </p>
              <p>
                Please note that these countries may have differing (and potentially less stringent) privacy laws and that Personal Information can become subject to the laws and disclosure requirements of such countries, including disclosure to governmental bodies, regulatory agencies, and private persons, as a result of applicable governmental or regulatory inquiry, court order or other similar process.
              </p>
              <p>
                If you use our Platform from outside India, including in the USA, EU, EEA, and UK, your information may be transferred to, stored, and processed in India. By accessing our Platform or otherwise giving us information, you consent to the transfer of information to India and other countries outside your country of residence.
              </p>

              {/* Section 9 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">9. Duration for Which Your Information Is Stored</h2>
              <p>
                We will retain Your information for as long as it is required for us to retain for the purposes stated hereinabove, including for the purpose of complying with legal obligation or business compliances.
              </p>
              <p>
                Further, please note that we may not be able to delete all communications or photos, files, or other documents publicly made available by you on the Platform (for example: comments, feedback, etc.), however, we shall anonymize your Personal Information in such a way that you can no longer be identified as an individual in association with such information made available by you on the Platform. We will never disclose aggregated or de-identified information in a manner that could identify you as an individual.
              </p>
              <p>
                Note: If you wish to exercise any of your rights (as specified in "Your Rights" section below) to access, modify and delete any or all information stored about you, then you may do so by using the options provided within the Platform. You can always write to us at the email address specified in the "Grievances" section below.
              </p>

              {/* Section 10 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">10. Modification to Privacy Policy</h2>
              <p>
                We may modify, revise or change our Policy from time to time; when we do, we will revise the "updated date" at the beginning of this page. We encourage You to check our Platform frequently to see the recent changes. Unless stated otherwise, our current Policy applies to all information that we have about You.
              </p>

              {/* Section 11 */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">11. Grievances</h2>
              <p>
                If you have any questions about this Policy, wish to exercise your rights, concerns about privacy or grievances, please write to us with a thorough description via email to{" "}
                <EmailLink className="text-[#0dcfcf] underline hover:text-[#0bb5b5]">
                  info@insightstap.com
                </EmailLink>
              </p>

              {/* Country Specific Additional Rights */}
              <h2 className="mb-3 mt-8 text-lg font-semibold text-[#0F172A]">Country Specific Additional Rights</h2>

              {/* India */}
              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Terms Applicable if You Are an Indian Resident</h3>
              <p>
                If you are located in India, you may have the following rights under the Personal Data Protection Bill (PDPB) when it becomes a legislation. All requests can be made by using the option provided to you within the Platform upon your login. You may also write to us as stated in the "Grievances" section above, and we will address your concerns to the extent required by law.
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li><strong>Right to Confirmation and Access:</strong> You have the right to get confirmation and access to your Personal Information that is with us along with other supporting information.</li>
                <li><strong>Right to Correction:</strong> You have the right to ask us to rectify your Personal Information that is with us that you think is inaccurate. You also have the right to ask us to update your Personal Information that you think is incomplete or out-of-date.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to ask that we transfer the Personal Information you gave us to another organisation, or to you, under certain circumstances.</li>
                <li><strong>Right to be Forgotten:</strong> You have the right to restrict or prevent the continuing disclosure of your Personal Information under certain circumstances.</li>
                <li><strong>Right to Erasure:</strong> If you wish to withdraw/remove your Personal Information from our Platform, you have the right to request erasure of your Personal Information from our Platform. However, please note that such erasure will remove all your Personal Information from our Platform (except as specifically stated in this Policy) and may result in deletion of your account on the Platform permanently, and the same will not be retrievable.</li>
              </ol>

              {/* EU/UK GDPR */}
              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Terms Applicable if You Are a Resident of United Kingdom (UK), a European Union (EU) Country or European Economic Area (EEA)</h3>
              <p>
                If you are located in the United Kingdom (UK) or European Union (EU) or European Economic Area (EEA), you have the following rights under the UK and EU General Data Protection Regulation (GDPR) respectively. All requests should be sent to the address noted in the "Grievances" section above, and we will fulfil requests to the extent required by applicable law.
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li><strong>Right to access Your Personal Information:</strong> You have the right to receive confirmation as to whether or not Personal Information concerning you is being processed and, where that is the case, access to the Personal Information can be sought.</li>
                <li><strong>Right to Rectification:</strong> Our goal is to keep your Personal Information accurate, current and complete. Please contact us if you believe your information is inaccurate or incomplete.</li>
                <li><strong>Right to Erasure:</strong> In some cases, you have a legal right to request that we erase your Personal Information.</li>
                <li><strong>Right to object to Processing:</strong> You have the right to object to our processing of your Personal Information under certain conditions.</li>
                <li><strong>Right to restrict Processing:</strong> You have the right to request that we restrict the processing of your Personal Information, under certain conditions.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                <li><strong>Right to make a complaint to a government supervisory authority:</strong> If you believe we have not processed your Personal Information in accordance with applicable provisions of the GDPR, we encourage you to contact us at the email address provided in the "Grievances" section above. You also have the right to make a GDPR complaint to the relevant Supervisory Authority or seek a remedy through the courts. If you need further assistance regarding your rights, please contact us using the contact information provided below, and we will consider your request in accordance with applicable law.</li>
                <li><strong>Right to not be subject to automated decision-making, including profiling:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal or similarly significant effects concerning you.</li>
              </ol>
              <p>
                We collect and process Personal Information about you only where we have a legal rationale to do so. Specific legal rationale applied for the same will depend on the type of Personal Information collected and the context in which the same is being processed, including the Services involved.
              </p>

              {/* California CCPA */}
              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Terms Applicable if You Are a California State Resident</h3>
              <p>
                If you are a California state resident, then you have the following rights to the extent, and in the manner, set out in the CCPA:
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li>The right to access the Personal Information that we hold on you;</li>
                <li>The right to know what Personal Information we intend on collecting from them before the point of collection;</li>
                <li>The right to opt in or out of marketing, analytics, and other similar activities;</li>
                <li>The right to equal services without discrimination; and</li>
                <li>The right to request deletion of Personal Information.</li>
              </ol>
              <p>
                The above rights, the manner in which you can exercise the same and the category of and the manner in which we collect your information, are detailed below.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">CCPA Notice at Collection</h3>
              <p>
                For purposes of the CCPA, in collecting the information described above, we collect the categories of Personal Information listed below from you:
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li><strong>Identifiers:</strong> We may collect your name, email address, mobile number, username, unique personal identifier, and Internet Protocol (IP) address. We use Identifiers as set forth in the "How We Use and Share the Information Collected" section of this Policy, like your name, contact information, and device and online identifiers.</li>
                <li><strong>Characteristics of Personal Information described in the California Customer Records statute:</strong> We may collect your name, email address, username, unique personal identifier, and gender. We use Categories of Personal Information described in the California Consumer Records statute as set forth in the "How We Use and Share the Information Collected" section of this Policy.</li>
                <li><strong>Internet or other electronic network activity information:</strong> We collect cookies as described above, we will automatically receive information from your browser and your device, which includes the date and time of your visit to the Platform as well as your location, Internet Protocol (IP) address, domain server, browser type, access time, and data about which pages you visit on the Platform. We use Internet or other electronic network activity information as set forth in the "How We Use and Share the Information Collected" section of this Policy.</li>
                <li><strong>Geolocation data:</strong> We may collect your IP address. We may use Geolocation Data as set forth in the "How We Use and Share the Information Collected" section of this Policy.</li>
                <li><strong>Audio, electronic, visual or similar information:</strong> We may collect your profile picture or other audio or visual information uploaded as content to the Platform. We use audio, electronic, visual or similar information as set forth in the "How We Use and Share the Information Collected" section of this Policy.</li>
                <li><strong>Inferences:</strong> We may make inferences based upon the Personal Information collected (such as likelihood of retention or attrition). We use Inference information as set forth in the "How We Use and Share the Information Collected" section of this Policy.</li>
              </ol>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">CCPA Data Practices During the Last 12 Months</h3>
              <ol className="ml-6 list-decimal space-y-2">
                <li>
                  <strong>Personal Information collected:</strong> As described in this Policy, we have collected the categories of Personal Information listed below during the preceding 12 months:
                  <ol className="ml-6 mt-2 list-decimal space-y-1">
                    <li>Identifiers</li>
                    <li>Characteristics of Personal Information described in the California Customer Records statute</li>
                    <li>Internet or other electronic network activity information</li>
                    <li>Geolocation data</li>
                    <li>Commercial information</li>
                    <li>Audio, electronic, visual, thermal, olfactory, or similar information Inferences</li>
                  </ol>
                </li>
                <li><strong>Categories of sources:</strong> We have collected the Personal Information identified in this Policy from you and our payment processors.</li>
                <li>
                  <strong>Business and commercial purposes for collecting:</strong> We have collected the categories of Personal Information listed above for the following purposes:
                  <ol className="ml-6 mt-2 list-decimal space-y-1">
                    <li>Operate the Platform;</li>
                    <li>Provide our Services to you;</li>
                    <li>Honor our Terms and Conditions and contracts;</li>
                    <li>Ensure the privacy and security of our Platform and Services;</li>
                    <li>Manage our relationships with you;</li>
                    <li>Communicate with you;</li>
                    <li>Analyze use of the Platform and our Services;</li>
                    <li>Enhance your experience;</li>
                    <li>Track visits to the Platform;</li>
                    <li>Provide you with a more personal and interactive experience on the Platform; and</li>
                    <li>Usage analytics purposes.</li>
                  </ol>
                </li>
                <li><strong>Personal Information sold:</strong> We have not sold categories of Personal Information during the preceding 12 months.</li>
                <li>
                  <strong>Personal Information disclosed for a business purpose:</strong> We have disclosed for a business purpose the categories of Personal Information listed below during the preceding 12 months:
                  <ol className="ml-6 mt-2 list-decimal space-y-1">
                    <li>Identifiers</li>
                    <li>Characteristics of Personal Information described in the California Customer Records statute</li>
                    <li>Internet or other electronic network activity information</li>
                    <li>Geolocation data</li>
                    <li>Commercial information</li>
                    <li>Audio, electronic, visual, thermal, olfactory, or similar information Inferences</li>
                  </ol>
                </li>
              </ol>
              <p>
                We have disclosed each category of Personal Information to the following categories of third parties: (1) corporate parents, subsidiaries, and affiliates; (2) advisors (accountants, attorneys); (3) service providers (data analytics, data storage, mailing, marketing, website and platform administration, technical support); and (4) operating systems and platforms.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">Consumer Rights and Requests Under the CCPA</h3>
              <p>
                The CCPA gives consumers the right to request that we (1) disclose what Personal Information we collect, use, disclose, and sell, and (2) delete certain Personal Information that we have collected or maintained. You may submit these requests to us as described below, and we honor these rights where they apply.
              </p>
              <p>
                If a request is submitted in a manner that is not one of the designated methods for submission, or if the request is deficient in some manner unrelated to our verification process, we will either (i) treat the request as if it had been submitted in accordance with the designated manner, or (ii) provide you with specific directions on how to submit the request or remedy any deficiencies with the request, as applicable.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">1. Request to Know</h3>
              <p>
                As a California resident, you have the right to request: (1) the specific pieces of Personal Information we have collected about you; (2) the categories of Personal Information we have collected about you; (3) the categories of sources from which the Personal Information is collected; (4) the categories of Personal Information about you that we have sold and the categories of third parties to whom the Personal Information was sold; (5) the categories of Personal Information about you that we disclosed for a business purpose and the categories of third parties to whom the Personal Information was disclosed for a business purpose; (6) the business or commercial purpose for collecting, disclosing, or selling Personal Information; and (7) the categories of third parties with whom we share Personal Information. Our response will cover the 12-month period preceding our receipt of a verifiable request.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">2. Request to Delete</h3>
              <p>
                As a California resident, you have a right to request the erasure/deletion of certain Personal Information collected or maintained by us. As described herein, we will delete your Personal Information from our records and direct any service providers (as defined under applicable law) to delete your Personal Information from their records. However, we are not required to honor a deletion request if an exemption applies under the law.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-[#0F172A]">3. Submitting a Request</h3>
              <p>
                <strong>Submission of Instructions:</strong> You may submit a request to know or to delete by email to the address provided in the "Grievances" section above or by submitting a request via mail to address provided by us in our Terms of Use or the Platform page. Regarding requests to delete, we may present you with the choice to delete select portions of your Personal Information, but a global option to delete all Personal Information will be offered and more prominently presented.
              </p>
              <p>
                <strong>Verification Process:</strong> We are required by law to verify the identities of those who submit requests to know or to delete. To determine whether the individual making the request is the consumer about whom we have collected information, we will verify your identity by matching the identifying information provided by you in the request to the Personal Information that we already maintain about you. As a part of this process, you will be required to provide your name and email address, and mobile number (if the same have been voluntarily provided by you at the time of registering on the Platform or otherwise while using the Platform). We will inform you if we cannot verify your identity. Please note:
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li>If we cannot verify the identity of the person making a request for categories of Personal Information, we may deny the request. If the request is denied in whole or in part for this reason, we will provide a copy of, or direct you to, our Privacy Policy.</li>
                <li>If we cannot verify the identity of the person making the request for specific pieces of Personal Information, we are prohibited from disclosing any specific pieces of Personal Information to the requestor. However, if denied in whole or in part for this reason, we will evaluate the request as if it is seeking the disclosure of categories of Personal Information about the consumer.</li>
                <li>If we cannot verify the identity of the person making a request to delete, we may deny the request. If there is no reasonable method by which we can verify the identity of the requestor to the degree of certainty required, we will state this in our response and explain why we have no reasonable method by which we can verify the identity of the requestor.</li>
              </ol>
              <p>
                <strong>Authorized Agents:</strong> Authorized agents may submit requests via the methods identified in this Policy. If you use an authorized agent to submit a request to know or a request to delete, we may require you to: (1) provide the authorized agent with signed permission to do so; (2) verify your identity directly with us; and (3) directly confirm with us that you provided the authorized agent permission to submit the request.
              </p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
