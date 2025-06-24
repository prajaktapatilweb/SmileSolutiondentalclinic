export default function BlogList({ items }) {
    return (
      <ul style={{ paddingLeft: '20px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
        ))}
      </ul>
    );
  }
  