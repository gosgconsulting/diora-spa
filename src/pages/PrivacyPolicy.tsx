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
          <p className="font-garet text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="font-garet text-lg mb-8" style={{ color: '#3a2c1b' }}>
                  This page is currently being updated. Please check back soon for our complete privacy policy.
                </p>
                
                <div className="text-center py-16">
                  <div className="inline-block p-8 rounded-full" style={{ backgroundColor: '#FAF8F4' }}>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3a2c1b' }}>
                      <span className="text-white text-2xl">📄</span>
                    </div>
                  </div>
                  <h2 className="font-dream text-3xl font-bold mb-4" style={{ color: '#3a2c1b' }}>
                    Coming Soon
                  </h2>
                  <p className="font-garet text-lg" style={{ color: '#3a2c1b' }}>
                    We're working on our privacy policy to ensure transparency about how we handle your information.
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
