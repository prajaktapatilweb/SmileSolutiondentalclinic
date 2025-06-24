import React from 'react';
import BlogSection from '../commonblogsec/BlogSection';
import BlogList from '../commonblogsec/BlogList';
import BlogTable from '../commonblogsec/BlogTable';
import BlogStats from '../commonblogsec/BlogStats';
import BlogFinalNote from '../commonblogsec/BlogFinalNote';

export default function DailyDentalCareBlog() {
  return (
    <div className="blog-container" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Smile Brighter: Top 10 Tips for Daily Dental Care</h1>
      <p>
        Maintaining a radiant smile is about more than just aesthetics—it’s a reflection of your overall health.
        A consistent dental care routine not only prevents cavities and gum disease but also supports your heart health,
        digestion, and confidence.
      </p>
      <p>
        Whether you're brushing at home or consulting with professionals, here are 10 essential daily dental care tips, plus bonus insights to help you and your family achieve long-term oral wellness.
      </p>

      <BlogSection title="Top 10 Daily Dental Care Tips">
        <BlogList items={[
          'Brush Twice a Day: Use a soft-bristled toothbrush with fluoride toothpaste for 2 full minutes—once in the morning and again before bed. Night brushing is especially crucial.',
          'Don’t Skip Flossing: Floss once a day to remove plaque and food particles between teeth.',
          'Use Mouthwash: An antibacterial mouthwash complements brushing and flossing.',
          'Clean Your Tongue: Use a tongue scraper or your toothbrush to gently clean your tongue.',
          'Stay Hydrated: Water rinses away food particles and neutralizes acids.',
          'Limit Sugary & Acidic Foods: Cut down on soda, sweets, and acidic fruits.',
          'Replace Your Toothbrush Regularly: Change your brush every 3 months.',
          'Visit Your Dentist Twice a Year: Regular check-ups help catch issues early.',
          'Quit Smoking or Tobacco: Tobacco stains teeth and raises oral cancer risks.',
          'Use a Mouth Guard If Needed: Protect your teeth from grinding or sports injury.',
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
    </div>
  );
}
