import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Mech Space Automation's privacy policy to understand how we collect, use, and protect your data and AI chatbot interactions.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg-primary min-h-screen pt-32 pb-24 px-6 font-barlow text-text-medium">
      <div className="max-w-4xl mx-auto bg-bg-surface border border-border-light rounded-2xl p-8 md:p-12 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-barlow-condensed font-bold text-text-high uppercase tracking-wider mb-8 border-b border-border-light pb-6">
          Privacy Policy
        </h1>

        <div className="space-y-8 leading-relaxed">
          <section>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-primary mb-2">Last Updated: May 2026</p>
            <p>
              At Mech Space Automation ("Mech Space", "we", "us", or "our"), we are committed to protecting your personal information and your right to privacy. This policy explains what information we collect, how we use it, and what rights you have in relation to it when you visit our website or interact with our AI Chatbot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-barlow-condensed font-bold text-text-high uppercase mb-4">1. What Information We Collect</h2>
            <p className="mb-4">
              We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. Specifically, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Directly Provided Data:</strong> Names, company names, emails, and WhatsApp numbers captured via our AI chat widget or contact forms.</li>
              <li><strong>Automated Data:</strong> IP addresses, browser types, and device information collected automatically for standard web analytics and security purposes.</li>
              <li><strong>Interaction Data:</strong> The actual chat logs and technical queries you type into our AI assistant.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-barlow-condensed font-bold text-text-high uppercase mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect or receive to facilitate your experience with our company. Your data is used specifically to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate technical quotes and respond to your specific inquiries about our mechanical solutions.</li>
              <li>Process your sales leads and respond to your inquiries.</li>
              <li>Improve the accuracy and helpfulness of our AI assistant over time.</li>
              <li>Maintain the safety and security of our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-barlow-condensed font-bold text-text-high uppercase mb-4">3. Third-Party Data Processors</h2>
            <p className="mb-4">
              To provide you with a modern, high-speed web experience, we utilize secure, industry-leading third-party infrastructure. We share your data only with third parties that perform services for us or on our behalf:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cloud Hosting Providers:</strong> We use modern cloud platforms (such as Vercel) to securely host our web application.</li>
              <li><strong>Database Providers:</strong> We use secure database providers (such as Supabase) to securely store your contact information and sales leads.</li>
              <li><strong>Artificial Intelligence APIs:</strong> Your chat interactions are securely processed by third-party AI models (such as Google Gemini or OpenAI) to generate intelligent technical responses. <em>Important: We have ensured via API agreements that your interaction data is opted-out and is NOT used to train public AI models.</em></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-barlow-condensed font-bold text-text-high uppercase mb-4">4. Data Security</h2>
            <p>
              We prioritize the security of your personal information. We have implemented industry-standard security measures, including HTTPS/SSL encryption for data in transit and secure, encrypted databases for data at rest. While no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, we continuously monitor and update our security practices to protect your data from unauthorized access or modification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-barlow-condensed font-bold text-text-high uppercase mb-4">5. User Rights</h2>
            <p className="mb-4">
              You have the right to request access to, update, or delete the personal information we hold about you. If you would like to exercise any of these rights, please contact our team directly.
            </p>
            <div className="bg-bg-primary p-6 rounded-xl border border-border-light">
              <p className="font-bold text-text-high mb-2">Request Data Deletion or Modification:</p>
              <p>Contact us at: <a href="mailto:sale@mechspaceautomation.com" className="text-accent-primary hover:text-accent-hover transition-colors font-bold">sale@mechspaceautomation.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
