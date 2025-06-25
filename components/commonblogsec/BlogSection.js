export default function BlogSection({ title, children }) {
    return (
      <section style={{ marginBottom: '5px' }}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
  