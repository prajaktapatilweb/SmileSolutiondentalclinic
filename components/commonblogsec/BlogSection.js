import { Typography } from "@mui/material";

export default function BlogSection({ title, children }) {
    return (
      <section style={{ marginBottom: '5px' }}>
        <Typography variant="h2" color="primary">{title}</Typography>
        {children}
      </section>
    );
  }
  