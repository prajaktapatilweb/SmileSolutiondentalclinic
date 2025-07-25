import React from 'react'
import BlogSection from '../commonblogsec/BlogSection';
import BlogList from '../commonblogsec/BlogList';
import { Card, Container,Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function GumDiease() {
     const rows = [
    { cityType: 'Metro Cities', costRange: '₹1,500 - ₹3,000+' },
    { cityType: 'Smaller Cities', costRange: '₹800 - ₹1,800' },
  ];
  return (
    <div>
        <Container sx={{py:7,}}>
    <Card sx={{p:{xs:3,sm:3,md:7},boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <Typography variant='h3' sx={{ color: '#20509e',fontSize:{xs:20,md:30} }}>The Silent Threat: Are You at Risk for Gum Disease? (And What You Can Do About It!)</Typography>
      <p>
Imagine a silent enemy, one that attacks your health without much warning, slowly but surely causing damage. That's often how gum disease, also known as periodontal disease, works. It's a common health issue that many people don't even realize they have until it's quite advanced. But the good news is, by understanding your risk and taking simple steps, you can protect your smile and your overall health.
    </p>
    <p>
So, let's explore this "silent threat" and find out if you might be at risk.
      </p>
    

      <h3>Are You at Risk? Let's Check the Common Culprits!</h3>
      <p>
While anyone can get gum disease, some factors significantly increase your likelihood of developing it. Let’s look at the primary culprits:

</p>

      <BlogSection title="Poor Oral Hygiene: The Biggest Problem">
        <BlogList items={[

<span>If you don't brush at least twice a day and floss daily, a sticky film called plaque builds up.</span>,
<span>Plaque is teeming with bacteria. If not removed, it hardens into tartar (calculus), which irritates gums and fosters more bacterial growth.</span>,
<span><b>Only a dental professional can remove tartar.</b></span>

        ]} />
      </BlogSection>

      <BlogSection title="Smoking and Chewing Tobacco: A Major Destroyer">
        <BlogList items={[

<span>Tobacco use dramatically increases your risk and the severity of gum disease.</span>,
<span>It impairs your body's ability to fight infection and reduces blood flow to your gums.</span>,
<span><b>Vaping is also an emerging concern for gum health.</b></span>,

        ]} />
      </BlogSection>
        <BlogSection title="Genetics: Is It in Your Family?">
        <BlogList items={[

<span>You might be more prone due to family history, even with good oral hygiene.</span>,
<span>If close relatives had severe gum problems or tooth loss from gum disease, you might have a higher risk.</span>,
<span><b>Be extra proactive if genetics are a factor.</b></span>,

        ]} />
      </BlogSection>
       <BlogSection title="Hormonal Changes: Especially for Women">
  <BlogList
  items={[
    <span><b>Puberty:</b> Gums can become more sensitive.</span>,
    <span><b>Pregnancy:</b> "Pregnancy gingivitis" is common, causing red, swollen, bleeding gums due to increased hormones.</span>,
    <span><b>Menopause:</b> Hormonal shifts can lead to dry mouth and changes in gum tissue.</span>,
  ]}
/>
</BlogSection>
<BlogSection title="Certain Medications: An Unintended Effect">
<BlogList
  items={[
    <span>Some medicines cause dry mouth (xerostomia), which reduces saliva's natural cleansing action, accelerating plaque buildup.</span>,
    <span>Others, like those for seizures or high blood pressure, can cause gum tissue overgrowth, making cleaning difficult.</span>,
    <span>Always inform your dentist about all medications you're taking.</span>,
  ]}
/>
</BlogSection>
<BlogSection title="Underlying Health Conditions: A Body-Wide Connection">
  <BlogList
    items={[
      <span><b>Diabetes:</b> Poorly controlled blood sugar significantly increases gum disease risk and severity. High blood sugar impairs infection fighting.</span>,
      <span><b>Weakened Immune System:</b> Conditions like HIV/AIDS or certain cancer treatments make you more vulnerable.</span>,
      <span><b>Heart Disease:</b> Research shows a link between severe gum disease and heart conditions due to inflammation affecting other body parts.</span>,
    ]}
  />
</BlogSection>
<BlogSection title="Stress: The Silent Body Burden">
  <BlogList
    items={[
      <span>Chronic stress weakens your immune system, making you less effective at fighting infections, including gum infections.</span>,
      <span>Can lead to habits like teeth grinding or clenching (bruxism), straining teeth and gum tissues.</span>,
    ]}
  />
</BlogSection>
<BlogSection title="Poor Nutrition: What You Eat Matters">
  <BlogList
    items={[
      <span>A diet lacking essential vitamins and minerals (especially Vitamin C) can weaken immunity and make gums fragile.</span>,
      <span>A balanced diet supports overall health, including gums.</span>,
    ]}
  />
</BlogSection>


      <BlogSection title="Take Control! What Can You Do About It?">
  The good news is you have significant power to prevent and manage gum disease, even with existing risk factors. Here’s how you can take charge:
<br></br><b>Become a Champion of Oral Hygiene: Your Strongest Defense!</b>
      </BlogSection>

    <BlogSection title="Brush Properly">
  <BlogList
    items={[
      <span>Brush for at least two minutes, twice a day (morning and night).</span>,
      <span>Use a soft-bristled toothbrush and fluoride toothpaste.</span>,
      <span>Use gentle circles or up-and-down motions – avoid scrubbing too hard.</span>,
    ]}
  />
</BlogSection>

<BlogSection title="Floss Daily">
  <BlogList
    items={[
      <span>Flossing once a day removes food particles and plaque between teeth and under the gum line where your brush can't reach.</span>,
      <span>It's a game-changer!</span>,
    ]}
  />
</BlogSection>
<BlogSection title="Consider Mouthwash">
  <BlogList
    items={[
      <span>An antimicrobial mouthwash can help reduce bacteria but is not a substitute for brushing and flossing.</span>,
      <span>Ask your dentist for a recommendation.</span>,
    ]}
  />
</BlogSection>
<BlogSection title="Quit Smoking/Vaping and Chewing Tobacco">
  <BlogList
    items={[
      <span>This is arguably the single most important step you can take for your gum health and overall well-being.</span>,
      <span>Seek support if you need help to quit.</span>,
    ]}
  />
</BlogSection>
<BlogSection title="Visit Your Dentist Regularly (Don't Delay!): Absolutely Crucial!">
  <BlogList
    items={[
      <span><b>Regular Check-ups:</b> Visit your dentist at least once every six months, or more often if you have risk factors or early signs.</span>,
      <span><b>Professional Cleanings (Scaling):</b> Your dentist or hygienist can remove plaque and tartar buildup that you can't reach. This "scaling" is vital.</span>,
      <span><b>Early Detection:</b> Dentists can spot early signs of gum disease before you notice symptoms, allowing for timely and simpler treatment.</span>,
    ]}
  />
</BlogSection>

<BlogSection title="Cost of Professional Cleaning in India">
<TableContainer component={Paper}>
      <Table aria-label="Cost Table">
        <TableHead>
          <TableRow>
            <TableCell><b>City/Clinic Type</b></TableCell>
            <TableCell><b>Typical Cost Range (₹)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.cityType}</TableCell>
              <TableCell>{row.costRange}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
  <b>This is a small investment compared to the cost of treating advanced gum disease or losing teeth!</b>
    </BlogSection>



      <BlogSection title="Other Key Actions:">
      <BlogList items={[
<span><b>Manage Underlying Health Conditions:</b> If you have diabetes or other health conditions, work closely with your doctor to keep them well-controlled. This positively impacts your gum health.</span>,
<span><b>Eat a Healthy, Balanced Diet:</b> Fuel your body with nutritious foods. A diet rich in vitamins and minerals, especially Vitamin C (found in citrus fruits, guava, bell peppers), helps your body fight infections. Limit sugary snacks and drinks.</span>,
<span><b>Find Ways to Manage Stress:</b> Incorporate stress-reducing activities like yoga, meditation, walking, or spending time in nature into your daily routine.</span>,
<span><b>Be Aware of Your Medications:</b> Always inform your dentist about all medications (prescription and over-the-counter). They can advise on potential oral side effects and suggest management strategies.</span>,
]} />
      </BlogSection>
<p><b>Don't let gum disease be a silent threat to your health. By understanding the risks and taking these proactive steps, you can keep your smile healthy and vibrant for years to come!</b></p>
    </Card>
   </Container>
    </div>
  )
}
