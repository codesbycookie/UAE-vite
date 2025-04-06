import './TC.css'

const TC = () => {
  return (
    <div className="terms-page bg-white text-dark">
      <header className="bg-primary-custom text-white py-4 text-center shadow">
        <h1 className="fw-bold mb-1">Terms and Conditions</h1>
        <p className="mb-0">Effective Date: 1st April 2024</p>
      </header>

      <div className="container py-5">
        <p className="mb-4">
          Welcome to IQ Bridge! These Terms and Conditions (“Terms”) govern your use of our platform and services. 
          By accessing or using our website and tutoring services, you agree to comply with and be bound by these Terms.
        </p>

        <section className="mb-5">
          <h2 className="section-heading">1. About IQ Bridge</h2>
          <p>IQ Bridge offers personalized one-on-one tutoring sessions for students on a pay-per-session basis.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">2. Eligibility</h2>
          <p>Users must be at least 13 years old. Under 18s need parental consent.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">3. Account Registration</h2>
          <p>Keep your account credentials safe; you&apos;re responsible for all activity under your account.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">4. Booking & Payment</h2>
          <ul>
            <li>Sessions must be booked and paid for in advance.</li>
            <li>Payments are securely processed and displayed in [Insert Currency].</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">5. Cancellations & Rescheduling</h2>
          <ul>
            <li>Free changes allowed up to 12 hours before the session.</li>
            <li>No refunds for late cancellations.</li>
            <li>In tutor no-show cases, users can reschedule or get a full refund.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">6. Refunds</h2>
          <ul>
            <li>Only granted for missed sessions due to tutor absence or platform issues.</li>
            <li>Request within 48 hours. Refunds processed in 5–7 business days.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">7. Code of Conduct</h2>
          <p>All users must behave respectfully. Violations may result in suspension or termination.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">8. Intellectual Property</h2>
          <p>All content is the property of IQ Bridge or tutors and may not be copied or redistributed.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">9. Limitation of Liability</h2>
          <p>IQ Bridge&apos;s liability is limited to the session fee. We are not liable for indirect damages.</p>
        </section>

        <section className="mb-5">
          <h2 className="section-heading">10. Modifications</h2>
          <p>We may revise these Terms. You will be notified of significant changes.</p>
        </section>

        <section>
          <h2 className="section-heading">11. Governing Law</h2>
          <p>These Terms are governed by UAE law and under the jurisdiction of Dubai courts.</p>
          <p className='d-flex align-items-center'>Contact us: <span><a href="mailto:contact@iqbridge.org" className='email_link'>contact@iqbridge.org</a></span></p>
        </section>
      </div>
    </div>
  );
};

export default TC;
