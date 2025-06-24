export default function BlogTable() {
    return (
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Myth</th>
            <th>Fact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brushing harder cleans better</td>
            <td>Brushing too hard can damage enamel and gums. Gentle strokes are more effective.</td>
          </tr>
          <tr>
            <td>Only sugary foods cause cavities</td>
            <td>Acidic foods, dry mouth, and poor brushing habits also contribute.</td>
          </tr>
          <tr>
            <td>Mouthwash replaces brushing</td>
            <td>Mouthwash is a supplement, not a substitute for brushing and flossing.</td>
          </tr>
          <tr>
            <td>If nothing hurts, I don’t need a dentist</td>
            <td>Many dental issues are painless in early stages. Prevention is key.</td>
          </tr>
          <tr>
            <td>White teeth mean healthy teeth</td>
            <td>Teeth can appear white but still have decay or gum issues underneath.</td>
          </tr>
        </tbody>
      </table>
    );
  }
  