import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms and Conditions | Insightstap Solutions",
  description: "Terms and conditions for Insightstap Solutions PVT. LTD.",
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-white" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
          {/* Dot-grid background */}
          <div className="dot-grid absolute inset-0" />

          {/* Glow orbs */}
          <div className="glow-orb absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.07] blur-[160px]" />
          <div
            className="glow-orb absolute right-[15%] top-[55%] h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]"
            style={{ animationDelay: "-4s" }}
          />
          <div
            className="glow-orb absolute left-[10%] top-[65%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]"
            style={{ animationDelay: "-6s" }}
          />

          {/* Soft radial wash */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13,207,207,0.04) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mb-12 text-lg text-[#64748B]">Insightstap Solutions PVT. LTD.</p>

            {/* ── Introduction ── */}
            <div className="space-y-6 mb-14">
              <p className="text-[#64748B] leading-relaxed">
                These Terms of Use set out the terms and conditions for use of this Insightstap Solutions PVT LTD
                (&quot;Website&quot;) and any content, Public Forums, or services offered on or through the Website
                and/or through any mobile application(s) (&quot;Application&quot;) (collectively referred to as the
                &quot;Platform&quot;).
              </p>
              <p className="text-[#64748B] leading-relaxed">
                These Terms of Use apply to end users of the Website (referred to as &quot;Learners&quot;,
                &quot;You&quot;, &quot;Your&quot;). These Terms of Use, including the Privacy Policy and any other terms
                and conditions published on the Platform or communicated to you from time to time (collectively referred
                to as the &quot;Agreement&quot;), define the relationship and responsibilities between you and Creator
                (as defined herein) in using the Platform. Your access to the Platform is subject to Your acceptance of
                this Agreement. Hence, please take Your time to read this Agreement.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                When we speak of &quot;Creator&quot;, &apos;we&apos;, &apos;us&apos;, and &apos;our&apos;, we
                collectively mean Insightstap Solutions PVT LTD being the creator of this Platform and the
                content/materials/services contained therein.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                By accessing this Platform, You are agreeing to be bound by the terms of this Agreement, all applicable
                laws and regulations.
              </p>
            </div>

            {/* ── 1. Access and Registration ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">1. Access and Registration</h2>
              <div className="space-y-4">
                <p className="text-[#64748B] leading-relaxed">
                  You must be at least 18 years of age to use this Platform. If you are between the ages of 13 and 18
                  (or between 13 and the age of legal majority in your jurisdiction of residence), you may only use the
                  Platform under the supervision of a parent or legal guardian who agrees to be bound by these Terms of
                  Use.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  If you are under the age of 13 (or under 16 in the European Economic Area), you may not use the
                  Platform. By using the Platform, you represent and warrant that you meet the eligibility requirements
                  in this section. If you do not meet these requirements, you must not access or use the Platform.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  To access certain features of the Platform, you may be required to register for an account. When
                  registering, you agree to provide accurate, current, and complete information, including your name and
                  email address. You are responsible for maintaining the confidentiality of your account credentials and
                  for all activities that occur under your account.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  &quot;Content&quot; means any course, session, program, or other educational material published by the
                  Creator on the Platform. The Creator reserves the right to modify, suspend, or discontinue any Content
                  at any time without prior notice.
                </p>
              </div>
            </div>

            {/* ── 2. License to Use ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">2. License to Use</h2>
              <div className="space-y-4">
                <p className="text-[#64748B] leading-relaxed">
                  Subject to your compliance with these Terms of Use, the Creator grants you a limited, non-exclusive,
                  non-transferable, revocable license to access and use the Platform and its Content for your personal,
                  non-commercial use only.
                </p>
                <p className="text-[#64748B] leading-relaxed">You agree that you shall not:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#64748B] leading-relaxed">
                  <li>Modify or create derivative works based on the Platform or any Content;</li>
                  <li>
                    Publicly display, perform, distribute, or otherwise make available any Content or the Platform to any
                    third party;
                  </li>
                  <li>Decompile, reverse engineer, or disassemble the Platform or any Content;</li>
                  <li>Remove any copyright, trademark, or other proprietary notices from any Content;</li>
                  <li>
                    Transfer, sublicense, lease, lend, rent, or otherwise distribute the Platform or any Content to any
                    third party;
                  </li>
                  <li>
                    Use the Platform or any Content for any commercial purpose, including but not limited to advertising,
                    marketing, or offering services to third parties.
                  </li>
                </ul>
                <p className="text-[#64748B] leading-relaxed">
                  &quot;Creator Content&quot; means any audio, video, images, text, graphics, or other materials
                  uploaded, posted, or otherwise made available by the Creator on the Platform. All Creator Content is
                  owned by the Creator and is protected by applicable intellectual property laws.
                </p>
              </div>
            </div>

            {/* ── 3. Communications ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">3. Communications</h2>
              <div className="space-y-4">
                <p className="text-[#64748B] leading-relaxed">
                  The Platform may include public forums, comment sections, discussion boards, or other interactive
                  features (&quot;Public Forums&quot;) that allow you to post, submit, publish, display, or transmit
                  content or materials (&quot;Learner Content&quot;) to other users of the Platform.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Your participation in Public Forums is entirely voluntary. You acknowledge that Public Forums are
                  available to the public and you should exercise caution when disclosing personal information in Public
                  Forums. We do not endorse or control the Learner Content posted in Public Forums.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  We reserve the right to terminate or restrict your access to any Public Forum at any time, without
                  notice, for any reason, including but not limited to violations of these Terms of Use.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  You retain ownership of your Learner Content. However, by posting Learner Content on the Platform, you
                  grant the Creator a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to
                  use, reproduce, distribute, prepare derivative works of, display, and perform the Learner Content in
                  connection with the Platform and the Creator&apos;s business, including for the purposes of promoting
                  and redistributing part or all of the Platform.
                </p>
              </div>
            </div>

            {/* ── 4. Code of Conduct ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">4. Code of Conduct</h2>
              <p className="mb-4 text-[#64748B] leading-relaxed">
                You agree that you will use the Platform in compliance with these Terms of Use and all applicable laws
                and regulations. You further agree that you will not:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">a) Legitimate Usage</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    Use the Platform only for lawful purposes and in a manner consistent with these Terms of Use. You
                    shall not use the Platform to engage in any activity that is illegal, fraudulent, or harmful to
                    others.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">b) No Harmful Content</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not upload, post, or transmit any content that contains viruses, malware, spyware, or any
                    other harmful code or software designed to disrupt, damage, or limit the functionality of the
                    Platform or any computer system.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">c) No Hateful or Defamatory Content</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not upload, post, or transmit any content that is hateful, defamatory, libelous,
                    threatening, pornographic, obscene, or that promotes racism, bigotry, hatred, or physical harm of any
                    kind against any group or individual.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">d) No Violent or Graphic Content</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not upload, post, or transmit any content that depicts or promotes violence, gore, or
                    graphic material that is disturbing or offensive.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">e) No Harassment or Bullying</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not engage in any form of harassment, bullying, intimidation, or abuse of any user of the
                    Platform. This includes but is not limited to stalking, doxxing, or making threats of violence.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">f) No Spam</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not use the Platform to send unsolicited or unauthorized advertising, promotional
                    materials, spam, junk mail, chain letters, or any other form of solicitation.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">g) No Scams</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not use the Platform to engage in any fraudulent, deceptive, or misleading activities,
                    including but not limited to phishing, pyramid schemes, or other scams.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">h) Privacy Respect</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not collect, harvest, or store personal information of other users of the Platform without
                    their express consent. You shall respect the privacy of other users at all times.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">i) No Impersonation</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not impersonate any person or entity, or falsely state or otherwise misrepresent your
                    affiliation with a person or entity.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">j) No Unauthorized Access</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You shall not attempt to gain unauthorized access to any portion or feature of the Platform, or any
                    other systems or networks connected to the Platform, by hacking, password mining, or any other
                    illegitimate means.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">k) Right to Terminate</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    We reserve the right to terminate or suspend your access to the Platform at any time, without notice,
                    for conduct that we believe violates these Terms of Use or is harmful to other users of the Platform,
                    us, or third parties, or for any other reason at our sole discretion.
                  </p>
                </div>
              </div>
            </div>

            {/* ── 5. Intellectual Property ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">5. Intellectual Property</h2>
              <div className="space-y-4">
                <p className="text-[#64748B] leading-relaxed">
                  The Platform and all of its contents, features, and functionality, including but not limited to all
                  Content, Creator Content, information, software, text, displays, images, video, audio, design,
                  selection, and arrangement thereof, are owned by the Creator, its licensors, or other providers of such
                  material and are protected by copyright, trademark, patent, trade secret, and other intellectual
                  property or proprietary rights laws.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  The Creator&apos;s name, logo, trademarks, service marks, and all related names, logos, product and
                  service names, designs, and slogans are trademarks of the Creator or its affiliates or licensors. You
                  must not use such marks without the prior written permission of the Creator. All other names, logos,
                  product and service names, designs, and slogans on the Platform are the trademarks of their respective
                  owners.
                </p>
              </div>
            </div>

            {/* ── 6. Feedback ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">6. Feedback</h2>
              <p className="text-[#64748B] leading-relaxed">
                If you provide any feedback, suggestions, ideas, or recommendations to the Creator regarding the
                Platform or its Content (&quot;Feedback&quot;), you acknowledge and agree that the Creator may use such
                Feedback for any purpose without any obligation or compensation to you. You hereby grant the Creator a
                worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicensable, and transferable license
                to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and
                display such Feedback in any media or format, whether now known or hereafter developed.
              </p>
            </div>

            {/* ── 7. Payments and Refunds ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">7. Payments and Refunds</h2>
              <div className="space-y-4">
                <p className="text-[#64748B] leading-relaxed">
                  Certain Content on the Platform may require payment of a fee (&quot;Content Fee&quot;). All Content
                  Fees are processed through third-party payment processors. The Creator does not store or have access to
                  your payment information, including credit card numbers or bank account details.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  All purchases are final. No cancellation or refund will be provided unless otherwise stated in the
                  Creator&apos;s Refund Policy. The Creator reserves the right to modify the Content Fee at any time
                  without prior notice.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  You are responsible for any taxes, duties, or other governmental assessments associated with your
                  purchase of Content on the Platform.
                </p>
              </div>
            </div>

            {/* ── 8. Disclaimer ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">8. Disclaimer</h2>
              <div className="space-y-4 uppercase text-[#64748B] leading-relaxed text-sm">
                <p>
                  THE PLATFORM, INCLUDING ALL CONTENT, CREATOR CONTENT, AND SERVICES MADE AVAILABLE ON OR ACCESSED
                  THROUGH THE PLATFORM, IS PROVIDED TO YOU &quot;AS IS&quot;, &quot;AS AVAILABLE&quot;, AND &quot;WITH
                  ALL FAULTS&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, THE CREATOR DISCLAIMS ALL WARRANTIES, EXPRESS
                  OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.
                </p>
                <p>
                  THE CREATOR DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE,
                  THAT DEFECTS WILL BE CORRECTED, OR THAT THE PLATFORM OR THE SERVERS THAT MAKE THE PLATFORM AVAILABLE
                  ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
                <p>
                  THE CREATOR DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE
                  OF THE PLATFORM, CONTENT, OR CREATOR CONTENT IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY,
                  TIMELINESS, COMPLETENESS, CURRENTNESS, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO THE SAFETY,
                  CONDITION, OR QUALITY OF ANY CONTENT.
                </p>
                <p>
                  YOU ASSUME ALL RISK FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM YOUR USE
                  OF THE PLATFORM, INCLUDING ANY DAMAGES RESULTING FROM COMPUTER VIRUSES.
                </p>
              </div>
            </div>

            {/* ── 9. Limitation of Liability ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">9. Limitation of Liability</h2>
              <div className="space-y-4">
                <p className="text-[#64748B] leading-relaxed">
                  To the fullest extent permitted by applicable law, the Creator, its affiliates, officers, directors,
                  employees, agents, suppliers, or licensors shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill,
                  or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#64748B] leading-relaxed">
                  <li>Your access to or use of, or inability to access or use, the Platform;</li>
                  <li>Any conduct or content of any third party on the Platform;</li>
                  <li>Any content obtained from the Platform;</li>
                  <li>
                    Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty,
                    contract, tort (including negligence), or any other legal theory, whether or not we have been informed
                    of the possibility of such damage.
                  </li>
                </ul>
              </div>
            </div>

            {/* ── 10. Indemnity and Release ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">10. Indemnity and Release</h2>
              <p className="text-[#64748B] leading-relaxed">
                You agree to indemnify, defend, and hold harmless the Creator, its affiliates, officers, directors,
                employees, agents, suppliers, and licensors from and against any and all claims, liabilities, damages,
                losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating
                to: (a) your use of the Platform; (b) your violation of these Terms of Use; (c) your violation of any
                rights of a third party; or (d) your Learner Content. The Creator reserves the right to assume the
                exclusive defense and control of any matter otherwise subject to indemnification by you, in which event
                you will cooperate with the Creator in asserting any available defenses.
              </p>
            </div>

            {/* ── 11. Links to Third Party Website ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">11. Links to Third Party Website</h2>
              <p className="text-[#64748B] leading-relaxed">
                The Platform may contain links to third-party websites or services that are not owned or controlled by
                the Creator. The Creator has no control over, and assumes no responsibility for, the content, privacy
                policies, or practices of any third-party websites or services. You acknowledge and agree that the
                Creator shall not be responsible or liable, directly or indirectly, for any damage or loss caused or
                alleged to be caused by or in connection with the use of or reliance on any such content, goods, or
                services available on or through any such third-party websites or services. We strongly advise you to
                read the terms and conditions and privacy policies of any third-party websites or services that you
                visit.
              </p>
            </div>

            {/* ── 12. Governing Law and Jurisdiction ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">12. Governing Law and Jurisdiction</h2>
              <p className="text-[#64748B] leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with the laws of the
                Creator&apos;s home jurisdiction, without regard to its conflict of law provisions. Any disputes
                arising out of or relating to these Terms of Use or the Platform shall be subject to the exclusive
                jurisdiction of the courts located in the Creator&apos;s home jurisdiction. You agree to submit to
                the personal jurisdiction of such courts for the purpose of litigating any such disputes.
              </p>
            </div>

            {/* ── 13. Miscellaneous ── */}
            <div className="mb-14">
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">13. Miscellaneous</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">a) Right to Alter</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    The Creator reserves the right to modify, suspend, or discontinue the Platform or any part thereof,
                    including these Terms of Use, at any time without prior notice. Your continued use of the Platform
                    after any such changes constitutes your acceptance of the new Terms of Use. It is your responsibility
                    to review these Terms of Use periodically for updates.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">b) Waiver</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    The failure of the Creator to enforce any right or provision of these Terms of Use shall not
                    constitute a waiver of such right or provision. Any waiver of any provision of these Terms of Use
                    will be effective only if in writing and signed by the Creator.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">c) Assignment</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    You may not assign or transfer these Terms of Use, by operation of law or otherwise, without the
                    Creator&apos;s prior written consent. Any attempt by you to assign or transfer these Terms of Use
                    without such consent shall be null and void. The Creator may assign or transfer these Terms of Use,
                    in its sole discretion, without restriction.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">d) Severability</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    If any provision of these Terms of Use is held to be invalid, illegal, or unenforceable by a court of
                    competent jurisdiction, the remaining provisions of these Terms of Use shall remain in full force and
                    effect. The invalid, illegal, or unenforceable provision shall be modified to the minimum extent
                    necessary to make it valid, legal, and enforceable.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-[#0F172A]">e) Events Beyond Reasonable Control</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    The Creator shall not be liable for any failure or delay in performing its obligations under these
                    Terms of Use where such failure or delay results from events beyond the Creator&apos;s reasonable
                    control, including but not limited to acts of God, natural disasters, war, terrorism, riots,
                    embargoes, acts of civil or military authorities, fire, floods, accidents, epidemics, pandemics,
                    strikes, shortages of transportation, facilities, fuel, energy, labor, or materials.
                  </p>
                </div>
              </div>
            </div>

            {/* ── 14. Contact Us ── */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">14. Contact Us</h2>
              <p className="text-[#64748B] leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:{" "}
                <a
                  href="mailto:info@insightstap.com"
                  className="text-[#0dcfcf] underline underline-offset-2 hover:text-[#0bb8b8]"
                >
                  info@insightstap.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
