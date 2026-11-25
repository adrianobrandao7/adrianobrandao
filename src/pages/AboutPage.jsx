import Eyebrow from '../components/ui/Eyebrow';

export default function AboutPage() {
  return (
    <section className="section page-container inner-page about-page">
      <Eyebrow>ABOUT</Eyebrow>
      <h1 className="page-title">Business context.<br /><span>Engineering mindset.</span></h1>
      <div className="prose">
        <p>I’m a developer and business owner who enjoys turning complex, everyday processes into clear and useful software.</p>
        <p>Working close to a real business gives me a practical perspective on requirements, usability, and the impact of technology. I’m currently focused on full stack development, backend engineering, and building maintainable applications.</p>
        <h2>What I value</h2>
        <ul><li>Understanding the real problem before choosing the technology.</li><li>Writing readable, maintainable code.</li><li>Building reliable systems that people can use every day.</li><li>Learning continuously and improving through feedback.</li></ul>
      </div>
    </section>
  );
}
