import Eyebrow from '../components/ui/Eyebrow';

export default function ContactPage() {
  return (
    <section className="section page-container inner-page">
      <Eyebrow>CONTACT</Eyebrow>
      <h1 className="page-title">Let’s build<br /><span>something useful.</span></h1>
      <p className="page-lead">I’m interested in meaningful software projects and international opportunities.</p>
      <div className="contact-links">
        <p>Add your professional email, GitHub, and LinkedIn links here before publishing.</p>
        {/* Replace these placeholders with your actual public profile URLs. */}
      </div>
    </section>
  );
}
