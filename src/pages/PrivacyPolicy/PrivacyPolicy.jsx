import './PrivacyPolicy.css'; // for custom styles

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page bg-white text-dark">
      <header className="bg-primary-custom text-white py-4 text-center shadow">
        <h1 className="fw-bold mb-1">Privacy Policy</h1>
        <p className="mb-0">Effective Date: 1st April 2024</p>
      </header>

      <div className="container py-5">
        <section className="mb-5">
          <h2 className="section-heading">1. Information We Collect</h2>
          <ul>
            <li>Name, email, phone number, and billing address</li>
            <li>Academic level and subject preferences</li>
            <li>Session history and performance feedback</li>
            <li>Payment information (secured via third-party processors)</li>
            <li>IP address, browser type, and usage data</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">2. How We Use Your Information</h2>
          <ul>
            <li>To deliver tutoring services</li>
            <li>To communicate about sessions and platform updates</li>
            <li>To enhance platform functionality and user experience</li>
            <li>To fulfill legal obligations</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">3. Sharing Your Information</h2>
          <p>We do not sell your data. We may share information with:</p>
          <ul>
            <li>Tutors (to prepare for sessions)</li>
            <li>Payment processors (to handle transactions)</li>
            <li>Authorities, if legally required</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">4. Data Security</h2>
          <p>Sensitive data is encrypted and securely stored. We implement appropriate safeguards to protect your information.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">5. Cookies</h2>
          <p>Cookies help improve your browsing experience. You can manage cookie preferences through your browser.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">6. Your Rights</h2>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent for communications</li>
          </ul>
          <p className='d-flex align-items-center'>To exercise these rights, contact us at:  <span><a href="mailto:contact@iqbridge.org" className='email_link'>contact@iqbridge.org</a></span></p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">7. Data Retention</h2>
          <p>We retain data only as long as necessary for our services or as required by law.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">8. Third-Party Links</h2>
          <p>Our site may contain links to third-party websites. We are not responsible for their privacy practices.</p>
        </section>

        <section>
          <h2 className="section-heading">9. Updates to This Policy</h2>
          <p>We may revise this Privacy Policy periodically. Major changes will be communicated to users via email or our platform.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
