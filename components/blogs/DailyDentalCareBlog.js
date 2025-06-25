import React from 'react';
import BlogSection from '../commonblogsec/BlogSection';
import BlogList from '../commonblogsec/BlogList';
import BlogTable from '../commonblogsec/BlogTable';
import BlogStats from '../commonblogsec/BlogStats';
import BlogFinalNote from '../commonblogsec/BlogFinalNote';
import { Card, Container, Grid, Typography } from '@mui/material';

export default function DailyDentalCareBlog() {
  return (

    <Container sx={{py:7,}}>
    <Card sx={{p:{xs:3,sm:3,md:7},boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <Typography variant='h3' sx={{ color: '#20509e',fontSize:{xs:20,md:30} }}>Smile Brighter: Top 10 Tips for Daily Dental Care</Typography>
      <p>
        Maintaining a radiant smile is about more than just aesthetics—it’s a reflection of your overall health.
        A consistent dental care routine not only prevents cavities and gum disease but also supports your heart health,
        digestion, and confidence.
      </p>
      <p>
        Whether you're brushing at home or consulting with professionals, here are <b>10 essential daily dental care tips</b>, plus bonus insights to help you and your family achieve long-term oral wellness.
      </p>

      <BlogSection title="Top 10 Daily Dental Care Tips">
        <BlogList items={[
          <span><b>Brush Twice a Day:</b> Use a soft-bristled toothbrush with fluoride toothpaste for 2 full minutes—once in the morning and again before bed. Night brushing is especially crucial.</span>,
          <span><b>Don’t Skip Flossing:</b> Floss once a day to remove plaque and food particles between teeth.</span>,
          <span><b>Use Mouthwash:</b> An antibacterial mouthwash complements brushing and flossing.</span>,
          <span><b>Clean Your Tongue:</b> Use a tongue scraper or your toothbrush to gently clean your tongue.</span>,
          <span><b>Stay Hydrated: </b>Water rinses away food particles and neutralizes acids.</span>,
          <span><b>Limit Sugary & Acidic Foods: </b>Cut down on soda, sweets, and acidic fruits.</span>,
          <span><b>Replace Your Toothbrush Regularly:</b> Change your brush every 3 months.</span>,
          <span><b>Visit Your Dentist Twice a Year:</b> Regular check-ups help catch issues early.</span>,
          <span><b>Quit Smoking or Tobacco:</b> Tobacco stains teeth and raises oral cancer risks.</span>,
          <span><b>Use a Mouth Guard If Needed: </b>Protect your teeth from grinding or sports injury.</span>,
        ]} />
      </BlogSection>

      <BlogSection title="🕓 Morning vs Night Routine: Is One More Important?">
        <p>
          Brushing at night is slightly more important. During sleep, saliva production drops and bacteria multiply.
          Cleaning your teeth before bed reduces the risk of decay.
        </p>
      </BlogSection>

      <BlogSection title="Diet & Dental Health: What to Eat (and Avoid)">
        <h4>Helpful Foods:</h4>
        <BlogList items={['Cheese (neutralizes acid)', 'Leafy greens (vitamin-rich)', 'Apples and carrots (natural cleaners)', 'Green tea (antibacterial)']} />
        <h4>Harmful Foods:</h4>
        <BlogList items={['Sticky candies', 'Sugary beverages', 'Citrus fruits (in excess)', 'Packaged snacks with hidden sugars']} />
      </BlogSection>

      <BlogSection title="👶 Dental Care Across All Ages">
        <BlogList items={[
          'Children: Use fun brushes, flavored toothpaste, and supervise brushing habits.',
          'Adults: Prioritize flossing, stress management, and regular scaling.',
          'Seniors: Watch for dry mouth, gum recession, and proper denture hygiene.',
        ]} />
      </BlogSection>

      <BlogSection title="⚠️ Common Signs of Oral Health Issues">
        <BlogList items={['Bleeding gums', 'Persistent bad breath', 'Tooth sensitivity', 'Receding gums', 'Loose teeth']} />
      </BlogSection>

      <BlogSection title="💡 Bonus Tip: Sugar-Free Gum Helps!">
        <p>Chewing sugar-free gum after meals stimulates saliva production, neutralizes acids, and cleans food debris—especially when brushing isn’t an option right away.</p>
      </BlogSection>

      <BlogSection title="❌ Dental Myths vs ✅ Facts">
        <BlogTable />
      </BlogSection>

      <BlogSection title="📊 Dental Care Stats in India">
        <BlogStats />
      </BlogSection>

      <BlogSection title="Sustainable Dental Habits">
        <BlogList items={['Bamboo toothbrushes', 'Recyclable floss containers', 'Toothpaste tablets', 'Refillable mouthwash bottles']} />
      </BlogSection>

      <BlogSection title="DIY vs Professional Cleaning">
        <p>Brushing and flossing maintain day-to-day oral hygiene, but only professional scaling can remove hardened tartar and detect hidden issues. Don’t skip biannual appointments.</p>
      </BlogSection>

      <BlogFinalNote />
    </Card>
   </Container>
  );
}
