import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsConditions() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />

      {/* Page Title */}
      <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-dream text-8xl font-medium text-white mb-4">Terms & Conditions</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="font-garet" style={{ color: '#3a2c1b' }}>
                  <p className="text-lg mb-6">
                    Last Updated: September 10, 2025
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">1. Introduction</h2>
                  <p className="mb-6">
                    These Terms and Conditions ("Terms") govern your use of the Diora Spa by Michelle Tran website and services. By accessing our website, booking appointments, or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our website or use our services.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">2. Services</h2>
                  <p className="mb-4">
                    Diora Spa by Michelle Tran provides various spa services including but not limited to head spa treatments, waxing, laser hair removal, and eyelash extensions. All services are subject to availability and may be modified or discontinued at any time without prior notice.
                  </p>
                  <p className="mb-6">
                    Our services are provided by trained professionals. However, results may vary depending on individual factors such as skin type, hair type, and adherence to aftercare instructions.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">3. Appointments and Cancellations</h2>
                  <p className="mb-4">
                    Appointments can be made online through our website, by phone, or in person. We recommend booking in advance to secure your preferred time slot.
                  </p>
                  <p className="mb-4">
                    <strong>Cancellation Policy:</strong> If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance. Cancellations made less than 24 hours before the scheduled appointment may be subject to a cancellation fee of 50% of the service price. No-shows will be charged the full service price.
                  </p>
                  <p className="mb-6">
                    We reserve the right to refuse service to anyone for any reason at any time.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">4. Health and Safety</h2>
                  <p className="mb-4">
                    Your health and safety are our priority. Before receiving any treatment, you may be required to complete a consultation form disclosing relevant health information. It is your responsibility to inform us of any medical conditions, allergies, or medications that may affect your treatment.
                  </p>
                  <p className="mb-6">
                    We reserve the right to refuse service if we believe a treatment may be unsafe for you based on the information provided or observed.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">5. Payment and Pricing</h2>
                  <p className="mb-4">
                    All prices are displayed in Singapore Dollars (SGD) and are inclusive of GST. Prices are subject to change without prior notice. The current price at the time of your appointment will apply.
                  </p>
                  <p className="mb-4">
                    Payment is due at the time of service. We accept cash, major credit cards, and electronic payment methods such as PayNow.
                  </p>
                  <p className="mb-6">
                    Gift certificates and prepaid packages are non-refundable but may be transferable with prior approval from management.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">6. Liability</h2>
                  <p className="mb-6">
                    While we strive to provide the highest quality services, we cannot guarantee specific results. By using our services, you acknowledge that there are inherent risks associated with spa treatments. Diora Spa by Michelle Tran and its staff shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of our services.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">7. Personal Belongings</h2>
                  <p className="mb-6">
                    We recommend that you do not bring valuable items to your appointment. Diora Spa by Michelle Tran is not responsible for any loss or damage to personal belongings while on our premises.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">8. Behavior and Conduct</h2>
                  <p className="mb-6">
                    We are committed to providing a safe, comfortable, and respectful environment for all clients and staff. Inappropriate behavior, harassment, or abuse towards our staff or other clients will not be tolerated and may result in immediate termination of service without refund and potential legal action.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">9. Intellectual Property</h2>
                  <p className="mb-6">
                    All content on our website, including text, graphics, logos, images, and software, is the property of Diora Spa by Michelle Tran and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">10. Privacy</h2>
                  <p className="mb-6">
                    Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">11. Changes to Terms</h2>
                  <p className="mb-6">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified Terms.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">12. Governing Law</h2>
                  <p className="mb-6">
                    These Terms shall be governed by and construed in accordance with the laws of Singapore. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">13. Contact Us</h2>
                  <p className="mb-6">
                    If you have any questions about these Terms, please contact us at:<br />
                    Email: dioraspabymichelletran@gmail.com<br />
                    Phone: +65 9224 6789<br />
                    Address: 14 Scotts Rd, #05-80 Far East Plaza, Singapore 228213
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
