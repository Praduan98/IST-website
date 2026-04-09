import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmailLink } from "@/components/email-link"

export const metadata = {
  title: "Refund Policy | Insightstap Solutions",
  description: "Refund policy for Insightstap Solutions PVT. LTD.",
}

export default function RefundPolicyPage() {
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
            <h1 className="mb-4 text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Refund Policy
            </h1>
            <p className="mb-12 text-lg text-[#64748B]">Insightstap Solutions PVT. LTD.</p>

            <div className="space-y-10">
              <div>
                <p className="text-[#64748B] leading-relaxed">
                  Thank you for availing our services at{" "}
                  <a href="https://insightstap.com" className="text-[#0dcfcf] underline underline-offset-2 hover:text-[#0bb8b8]">
                    insightstap.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">
                  Non-tangible irrevocable goods (&quot;Digital products&quot;) and services (&quot;Digital Services&quot;)
                </h2>
                <p className="text-[#64748B] leading-relaxed">
                  We do not issue refunds for non-tangible irrevocable goods (&quot;digital products&quot;) and services
                  (&quot;Digital Services&quot;) once the order is confirmed and the product is sent and/or service period
                  has initiated.
                </p>
              </div>

              <div>
                <p className="text-[#64748B] leading-relaxed">
                  We recommend contacting us for assistance if you experience any issues receiving or downloading our
                  products/services.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold text-[#0F172A]">Contact us for any issues</h2>
                <p className="text-[#64748B] leading-relaxed">
                  If you have any questions about our Returns and Refunds Policy, please contact us at:{" "}
                  <EmailLink className="text-[#0dcfcf] underline underline-offset-2 hover:text-[#0bb8b8]">
                    info@insightstap.com
                  </EmailLink>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
