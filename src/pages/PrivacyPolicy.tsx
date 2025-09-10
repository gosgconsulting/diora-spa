import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F4' }}>
      <Header />

      {/* Page Title */}
      <section className="pt-24 pb-16" style={{ backgroundColor: '#3a2c1b' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-dream text-8xl font-medium text-white mb-4">Privacy Policy</h1>
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
                  <p className="mb-4">
                    Diora Spa by Michelle Tran ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and inform you of your privacy rights and how the law protects you.
                  </p>
                  <p className="mb-6">
                    This privacy policy applies to all personal information collected through our website, in-store, and during the provision of our spa services.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">2. Information We Collect</h2>
                  <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2"><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, date of birth.</li>
                    <li className="mb-2"><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li className="mb-2"><strong>Health Data</strong> includes information about allergies, skin conditions, medical history relevant to treatments.</li>
                    <li className="mb-2"><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                    <li className="mb-2"><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                    <li className="mb-2"><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your preferences, feedback and survey responses.</li>
                    <li className="mb-2"><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                    <li className="mb-2"><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                  </ul>

                  <h2 className="font-dream text-3xl font-medium mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">To register you as a new customer</li>
                    <li className="mb-2">To process and deliver your order including managing payments</li>
                    <li className="mb-2">To provide appropriate spa treatments based on your health information</li>
                    <li className="mb-2">To manage our relationship with you including notifying you about changes to our terms or privacy policy</li>
                    <li className="mb-2">To enable you to participate in promotions or complete a survey</li>
                    <li className="mb-2">To administer and protect our business and this website</li>
                    <li className="mb-2">To deliver relevant website content and advertisements to you</li>
                    <li className="mb-2">To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</li>
                    <li className="mb-2">To make suggestions and recommendations to you about goods or services that may be of interest to you</li>
                  </ul>

                  <h2 className="font-dream text-3xl font-medium mb-4">4. Data Security</h2>
                  <p className="mb-6">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">5. Data Retention</h2>
                  <p className="mb-6">
                    We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">6. Your Legal Rights</h2>
                  <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Request access to your personal data</li>
                    <li className="mb-2">Request correction of your personal data</li>
                    <li className="mb-2">Request erasure of your personal data</li>
                    <li className="mb-2">Object to processing of your personal data</li>
                    <li className="mb-2">Request restriction of processing your personal data</li>
                    <li className="mb-2">Request transfer of your personal data</li>
                    <li className="mb-2">Right to withdraw consent</li>
                  </ul>

                  <h2 className="font-dream text-3xl font-medium mb-4">7. Cookies</h2>
                  <p className="mb-6">
                    Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">8. Changes to This Privacy Policy</h2>
                  <p className="mb-6">
                    We may update this privacy policy from time to time by publishing a new version on our website. You should check this page occasionally to ensure you are happy with any changes to this policy.
                  </p>

                  <h2 className="font-dream text-3xl font-medium mb-4">9. Contact Us</h2>
                  <p className="mb-6">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:<br />
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
