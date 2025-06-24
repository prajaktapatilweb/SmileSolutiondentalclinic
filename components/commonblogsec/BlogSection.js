export default function BlogSection({ title, children }) {
    return (
      <section style={{ marginBottom: '40px' }}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
  