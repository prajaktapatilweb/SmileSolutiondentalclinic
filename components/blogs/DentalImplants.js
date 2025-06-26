import React from 'react';
import BlogSection from '../commonblogsec/BlogSection';
import BlogList from '../commonblogsec/BlogList';
import { Card, Container, Grid, Typography } from '@mui/material';
import Implanttable from '../commonblogsec/Implanttable';
import DentalImplantCostTable from '../commonblogsec/DentalImplantCostTable';
import MythsVsFactsTable from '../commonblogsec/MythsVsFactsTable';
import HealingTimelineTable from '../commonblogsec/HealingTimelineTable';
import ComparisonTable from '../commonblogsec/ComparisonTable';

export default function DentalImplants() {
  return (

    <Container sx={{py:7,}}>
    <Card sx={{p:{xs:3,sm:3,md:7},boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <Typography variant='h3' sx={{ color: '#20509e',fontSize:{xs:20,md:30} }}>Are Dental Implants Worth It? Insights from Dr. Heeral Chikhal & Dr. Kalpesh Dey</Typography>
     <h3>Expert Insights from Dr. Heeral Chikhal & Dr. Kalpesh Dey</h3>
      <p>
      Missing teeth can affect more than just your smile—they can impact your confidence, chewing ability, and even your bone health. Dental implants have emerged as the gold standard for tooth replacement, but are they really worth the investment?
      </p>
      <p>
      We asked two leading dental experts from Mumbai—<b>Dr. Heeral Chikhal (MDS – Prosthodontics & Implantology)</b> and <b>Dr. Kalpesh Dey (MDS – Endodontics & Cosmetic Dentistry)</b>—to share their professional opinion. Both have <b>13+ years of experience</b>, are <b>former Assistant Professors at Government Dental College, Mumbai,</b> and specialize in advanced, long-term dental solutions.
      </p>


      <h3>What Are Dental Implants?</h3>
      <p>
      A dental implant is a titanium post that functions like a natural tooth root. It is surgically embedded into the jawbone and topped with a custom crown, bridge, or denture. Over time, the implant fuses with the bone (osseointegration), making it one of the most stable and natural-feeling replacements available.      </p>



      <BlogSection title="How It Works:">
        <BlogList items={[

<span><b>Implant Placement: </b>Titanium post is surgically inserted into the jaw.</span>,
<span><b>Healing Period: </b>The bone integrates with the implant over 3–6 months.</span>,
<span><b>Crown Attachment:</b> A custom crown is placed on the abutment.</span>,

        ]} />
      </BlogSection>
  
      <BlogSection title="Types of Dental Implants">
  <Implanttable/>

      </BlogSection>

    




      <BlogSection title="📊 Global & Indian Dental Implant Stats">
      <BlogList items={[
<span><b>Success rate:</b> 95–98% globally with proper care</span>,
<span><b>Implant lifespan: </b>15–25+ years</span>,
<span><b>Implants placed in India annually: </b>Over 1 million</span>,
<span><b>Age group most commonly treated: </b>35–65 years</span>,
<span><b>Complication rate: </b>Less than 5% in experienced hands</span>,

]} />
      </BlogSection>

      <BlogSection title="💸 Dental Implant Cost in Mumbai (2025 Guide)">
        <DentalImplantCostTable/>
        </BlogSection>
        <BlogSection title="🧾 Myths vs Facts: Dental Implants">
        <MythsVsFactsTable/>
      </BlogSection>
      <BlogSection title=" 🗓️ Healing Timeline at a Glance">
       <HealingTimelineTable/>
      </BlogSection>

      <BlogSection title=" 🛡 Post-Implant Care Tips">
     
      <ul style={{ paddingLeft: '20px' }}>
<li>Use a soft-bristle toothbrush and non-abrasive toothpaste</li>
<li>Avoid hard foods like nuts during the initial healing period</li>
<li>Don’t skip follow-up visits</li>
<li>Quit smoking to improve healing and success rates</li>
<li>Use an antibacterial mouthwash as prescribed</li>
</ul>
      </BlogSection>

      <BlogSection title=" 👩‍⚕️ What Dr. Heeral & Dr. Kalpesh Say:">
<p>“Dental implants do more than replace missing teeth—they help preserve the jawbone and maintain your face structure. When done right, they feel and function just like natural teeth.”
<br></br><b> — Dr. Heeral Chikhal, MDS – Prosthodontics & Implantology</b></p>
<p>“We always guide patients with clarity—implants are not just about aesthetics. They’re about restoring confidence and long-term oral health. We consider bone health, general health, and lifestyle before recommending implants.”
 <br></br><b> - Dr. Kalpesh Dey, MDS – Endodontics & Cosmetic Dentistry</b></p>
 </BlogSection>  

      <BlogSection title="⚖️ Implants vs. Bridges vs. Dentures">
        <ComparisonTable/>
      </BlogSection>

      <BlogSection title="🙋 Frequently Asked Questions (FAQs)">
<b>Q1: Is the implant procedure painful?</b><br></br>
<b> A:</b> No, it's done under local anesthesia. Most patients report only mild post-operative discomfort.<br></br><br></br>
<b>Q2: Can older adults get implants?</b><br></br>
<b> A:</b> Yes! As long as you’re in good health and have enough bone (or can undergo grafting), age is not a limit.<br></br><br></br>
<b>Q3: What if I have diabetes or high BP?</b><br></br>
<b> A:</b> Controlled medical conditions generally do not interfere with implant success. A full medical history is always reviewed first.<br></br><br></br>
<b>Q4: Can implants fail?</b><br></br>
<b> A:</b> Yes, but it’s rare (under 5%). Smoking, poor oral hygiene, or low bone density are the top risk factors.<br></br><br></br>
<b>Q5:How soon can I resume work after surgery?</b><br></br>
<b> A:</b> Most patients return to work the next day with minor precautions.<br></br>
      </BlogSection>

      <BlogSection title="✅ Final Word from the Experts">  
<p>Dental implants aren’t just a cosmetic fix—they are a functional, long-term solution that can improve your quality of life. With proper assessment, planning, and care, implants can last decades.</p>
<p>“Whether you’ve lost a single tooth or require full-mouth rehabilitation, dental implants—when placed correctly—offer unmatched stability and confidence.”</p>
<b> — Dr. Heeral Chikhal & Dr. Kalpesh Dey</b>

<p>Looking for long-term tooth replacement options? <b>A dental clinic in Borivali West</b> with experienced implantologists can provide personalized guidance and treatment based on your oral health and lifestyle.
</p>    </BlogSection>
    </Card>
   </Container>
  );
}
