import React from "react";
import { Container, Typography, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Card } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BlogSection from "../commonblogsec/BlogSection";

const Implantbridge = () => {
    const mythFactdentureData = [
        [
            "Once I receive my new dentures, I'm set for life.",
            "Dentures need replacement or relining every 5–7 years due to natural changes in your mouth."
        ],
        [
            "Once I have dentures, I don't need to see the dentist anymore.",
            "Annual dental check-ups are essential for adjustments and overall oral health."
        ],
        [
            "I will never be able to eat foods like apples and corn on the cob with dentures.",
            "With time and practice, most denture wearers can enjoy a wide variety of foods."
        ],
        [
            "Dentures are meant to hurt.",
            "Dentures should not hurt. Initial discomfort is common, but proper adjustments resolve irritation."
        ]
    ];
    const mythFactbridgeData = [
        [
            "Dental bridges are only for cosmetic purposes.",
            "Bridges also restore chewing function, prevent tooth shifting, and evenly distribute bite forces."
        ],
        [
            "Dental bridges require a lot of care and maintenance.",
            "They require the same care as natural teeth; only flossing under the bridge needs special attention."
        ],
        [
            "Dental bridges are uncomfortable and feel unnatural.",
            "Modern bridges are custom-designed for comfort and a natural feel; most patients adjust quickly."
        ],
        [
            "Dental bridges break easily and need frequent replacement.",
            "Made from durable materials, bridges can last 10+ years with good care."
        ]
    ];
    const mythFactData = [
        [
            "Everyone will know you have implants.",
            "Implants look and feel like natural teeth. Most people won’t know unless you tell them."
        ],
        [
            "Implants don't last long.",
            "With proper care, implants can last a lifetime. The crown may need replacement after 10–15 years."
        ],
        [
            "Getting implants is painful.",
            "Implant surgery is performed under anesthesia, making the procedure painless. Post-op discomfort is manageable."
        ],
        [
            "Dental implants cause bone loss.",
            "Implants prevent bone loss by stimulating bone growth and preserving jawbone density."
        ]
    ];

    const tableData = [
        ["What It Is", "Titanium post surgically placed into jawbone", "Crown-supported false tooth/teeth anchored to adjacent teeth", "Removable plate with false teeth"],
        [
            "Best For",
            "Single tooth, multiple teeth, full arch",
            "One or few missing teeth in a row",
            "Multiple missing teeth or full arch of teeth",],
        [
            "Permanence",
            "Fixed (non-removable by patient)",
            "Fixed (non-removable by patient)",
            "Removable",
        ],
        [
            "Longevity",
            "Can last a lifetime (implant post), crown 10-15+ yrs",
            "Typically 5-15 years",
            "Typically 5-10 years (may need relining/replacement)",
        ],
        [
            "Jawbone Health",
            "Preserves bone density, prevents bone loss",
            "Does not prevent bone loss",
            "Does not prevent bone loss",
        ],
        [
            "Adjacent Teeth",
            "No alteration needed",
            "Requires reshaping of adjacent healthy teeth",
            "No alteration needed (partial dentures clasp onto existing teeth)",

        ],
        ["Cost", "Highest", "Moderate", "Lowest"],
        ["Feel/Function", "Most natural, like real teeth", "Good", "Can feel less natural, may shift"],
        ["Maintenance", "Like natural teeth (brushing, flossing)", "Requires careful cleaning under the bridge", "Daily removal, cleaning, and soaking"],
        ["Procedure Time", "Several months (including healing)", "Weeks", "Weeks"]
    ];
    return (
        <Container sx={{ py: 7, }}>
            <Card sx={{ p: { xs: 2, sm: 2, md: 5 }, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <Typography variant='h3' sx={{ color: '#20509e', fontSize: { xs: 20, md: 30 } }}>
                    Tooth Replacement Options: Implants, Bridges, and Dentures
                </Typography>
                <Typography variant="body1" paragraph>
                    Losing a tooth can impact your smile, confidence, and ability to chew and speak. Fortunately, modern dentistry offers several excellent solutions to restore your smile and oral function. The most common options are dental implants, bridges, and dentures. Deciding which one is right for you involves considering various factors like the number of missing teeth, cost, longevity, and your overall oral health.      </Typography>

                {/* Section: Dental Implants */}
                <Box>
                    <BlogSection title="1. Dental Implants" />
                    <Typography variant="body1" paragraph>
                        Dental implants are considered the "gold standard" due to their durability and natural function. They involve titanium posts inserted into the jawbone to support crowns, bridges, or dentures.
                    </Typography>
                    <b>What they are:</b> Titanium posts surgically inserted into the jawbone, acting as artificial tooth roots. Once healed, they support crowns, bridges, or even full dentures.
                    <br></br><b>Best for: </b>Replacing a single tooth, multiple teeth in different areas, or supporting a full arch of teeth.

                    <Typography variant="subtitle1"><b>Pros:</b></Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 0.5, lineHeight: 1.9 }}>
                        {[
                            <span><b>Longevity:</b> Can last a lifetime with proper care.</span>,
                            <span><b>Bone Preservation:</b> Preserve jawbone density, preventing facial sagging and maintaining the natural contours of your face.</span>,
                            <span><b>Natural Feel:</b> Look, feel, and function like natural teeth; they don't shift or click.</span>,
                            <span><b>No Harm to Adjacent Teeth:</b> Do not require modification of neighboring healthy teeth.</span>,
                            <span><b>Easy to Maintain:</b> Care for them like natural teeth (brushing, flossing, regular check-ups).</span>,

                        ].map((item, index) => (
                            <li key={index}>
                                <Typography>{item}</Typography>
                            </li>
                        ))}
                    </Box>
                    <Typography variant="subtitle1"><b>Cons:</b></Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 0.5, lineHeight: 1.9 }}>
                        {[

                            <span><b>Cost:</b> Highest initial cost.</span>,
                            <span><b>Procedure Length:</b> Can take several months to complete, including healing time for osseointegration (bone fusing with the implant).</span>,
                            <span><b>Surgical Procedure:</b> Requires minor surgery, which may not be suitable for all individuals (e.g., those with certain medical conditions or insufficient bone density).</span>,
                            <span><b>Multiple Appointments:</b> Often necessitate several appointments spaced out over months.</span>,

                        ].map((item, index) => (
                            <li key={index}>
                                <Typography>{item}</Typography>
                            </li>
                        ))}
                    </Box>
                </Box>

                {/* Section: Dental Bridges */}
                <Box sx={{ mt: 4 }}>
                    <BlogSection title="2. Dental Bridges" />
                    <Typography variant="body1" paragraph>
                        Dental bridges "bridge" the gap created by missing teeth using crowns attached to adjacent teeth or implants.
                    </Typography>
                    <b>What they are:</b> A set of porcelain teeth (pontics) attached to crowns that are adhered to the natural teeth (abutment teeth) on both sides of the gap, or sometimes to implants.
                    <br></br><b>Best for:</b> Replacing one or a few missing teeth in a row.<br></br>


                    <Typography variant="subtitle1"><b>Pros:</b></Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 0.5, lineHeight: 1.9 }}>
                        {[
                            <span><b>Aesthetics:</b> Restore a natural and appealing smile.</span>,
                            <span><b>Improved Function:</b> Enhance chewing ability and speech clarity.</span>,
                            <span><b>Fixed Option:</b> Non-removable, providing a stable solution.</span>,
                            <span><b>Cost-Effective:</b> Generally less expensive upfront than implants.</span>,
                            <span><b>Quicker Procedure:</b> Can be completed in a shorter timeframe (often 2-3 weeks) compared to implants.</span>,

                        ].map((item, index) => (
                            <li key={index}>
                                <Typography>{item}</Typography>
                            </li>
                        ))}
                    </Box>

                    <Typography variant="subtitle1"><b>Cons:</b></Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 0.5, lineHeight: 1.9 }}>
                        {[
                            <span><b>Alteration of Natural Teeth:</b> Requires reshaping of healthy adjacent teeth to accommodate the crowns, which is irreversible.</span>,
                            <span><b>Limited Longevity:</b> Typically last 10 to 15 years and may need replacement.</span>,
                            <span><b>Does Not Prevent Bone Loss:</b> Do not address bone loss beneath the missing tooth.</span>,
                            <span><b>Maintenance Challenges:</b> Requires diligent oral hygiene, including special tools like floss threaders, to clean under the bridge.</span>,
                            <span><b>Risk of Decay/Gum Disease:</b> Adjacent teeth supporting the bridge can be more susceptible to decay or gum disease if not maintained properly.</span>,

                        ].map((item, index) => (
                            <li key={index}>
                                <Typography>{item}</Typography>
                            </li>
                        ))}
                    </Box>
                </Box>

                {/* Section: Dentures */}
                <Box sx={{ mt: 4 }}>
                    <BlogSection title="3. Dentures" />
                    <Typography variant="body1" paragraph>
                        Dentures are a traditional and often more affordable option for replacing missing teeth.
                    </Typography>
                    <b>What they are:</b> Removable prosthetic teeth that sit on the gums. They can be partial (to fill gaps) or complete (full sets for upper, lower, or both jaws).
                    <br></br><b>Best for:</b> Individuals missing many teeth or all teeth in an arch, especially those on a tight budget or not candidates for surgery.

                    <Typography variant="subtitle1"><b>Pros:</b></Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 0.5, lineHeight: 1.9 }}>
                        {[
                            <span><b>Cost-Effective:</b> Generally the most affordable option upfront.</span>,
                            <span><b>Non-Invasive:</b> Do not require surgery.</span>,
                            <span><b>Quick Solution:</b> Can be fabricated and fitted relatively quickly.</span>,
                            <span><b>Versatility:</b> Can replace a few teeth (partial dentures) or a full arch (complete dentures).</span>
                        ].map((item, index) => (
                            <li key={index}>
                                <Typography>{item}</Typography>
                            </li>
                        ))}
                    </Box>
                    <Typography variant="subtitle1"><b>Cons:</b></Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 0.5, lineHeight: 1.9 }}>
                        {[
                            <span><b>Stability:</b> May not offer the same bite strength or stability as implants; can sometimes become loose, click, or affect speech.</span>,
                            <span><b>Bone Loss: </b>Do not prevent jawbone loss, which can lead to changes in facial structure over time and require denture adjustments or replacement.</span>,
                            <span><b>Comfort:</b> Can cause mouth sores, discomfort, or affect taste, especially if not fitted properly.</span>,
                            <span><b>Maintenance:</b> Require daily removal for cleaning and soaking.</span>,
                            <span><b>Longevity:</b> Typically need to be replaced or relined every 5 to 10 years.</span>,
                        ].map((item, index) => (
                            <li key={index}>
                                <Typography>{item}</Typography>
                            </li>
                        ))}
                    </Box>
                </Box>

                {/* Comparison Table */}
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h2" color='primary' gutterBottom>
                        At a Glance: Comparing Tooth Replacement Options
                    </Typography>
                    <p>To help you quickly compare, here's a table summarizing the key differences:</p>

                    <TableContainer
                        component={Paper}
                        elevation={4}
                        sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            my: 4,
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',

                        }}
                    >
                        <Table sx={{ width: '100%' }}>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                                    {["Feature", "Dental Implants", "Dental Bridges", "Dentures"].map((text, index) => (
                                        <TableCell
                                            key={index}
                                            align="center"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                color: '#212121'
                                            }}
                                        >
                                            {text}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row, rowIndex) => (
                                    <TableRow
                                        key={rowIndex}
                                        sx={{
                                            backgroundColor: rowIndex % 2 === 0 ? '#fafafa' : '#f0f0f0'
                                        }}
                                    >
                                        {row.map((cell, cellIndex) => (
                                            <TableCell
                                                key={cellIndex}
                                                //   align="center"
                                                sx={{
                                                    fontSize: '0.975rem',
                                                    px: 2,
                                                    py: 1.5
                                                }}
                                            >
                                                {cell}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>

                {/* Myths and Facts Section */}
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h2" color='primary' gutterBottom>Key Considerations for Choosing</Typography>
                    <Box component="ul" sx={{ pl: 3, mt: 0.5, lineHeight: 2 }}>
                        {[
                            <span><b>Number of Missing Teeth:</b><br></br>
                                <b>1. Single tooth:</b> Implant or bridge.<br></br>
                                <b>2. Multiple teeth in a row:</b> Bridge or implant-supported bridge..<br></br>
                                <b>3. Many or all teeth:</b> Full dentures, implant-supported dentures, or full-arch implants.</span>,
                            <span><b>Cost:</b> Dentures are generally the least expensive initially, followed by bridges, with implants being the highest upfront investment. However, implants can be more cost-effective long-term due to their durability and lack of replacement needs.</span>,
                            <span><b>Jawbone Health:</b> Implants require sufficient healthy jawbone. If bone density is low, bone grafting may be necessary.</span>,
                            <span><b>Overall Health:</b> Surgical procedures for implants may not be suitable for everyone, especially those with certain chronic conditions or who smoke.</span>,
                            <span><b>Lifestyle and Comfort:</b> Implants offer the most natural feel. Dentures may require an adjustment period for eating and speaking.</span>,
                            <span><b>Maintenance:</b> All options require good oral hygiene, but fixed options (implants, bridges) may feel more like natural teeth in terms of daily care.</span>,
                        ].map((item, index) => (
                            <li key={index}>
                                <Typography>{item}</Typography>
                            </li>
                        ))}
                    </Box>
                    <Typography variant="h2" color='primary' gutterBottom>Statistics</Typography>
                    Dental Implants Success Rate: Dental implants have a high success rate, often exceeding 97% at 10 years. (Source: <a href="https://www.jomos.org/articles/mbcb/full_html/2022/02/mbcb210065/mbcb210065.html" style={{ color: 'blue' }} target="_blank">Implant failure rate and the prevalence of associated risk factors: a 6-year</a>)
                    <br></br>Dentures Wearers: A study across 19 countries found that an average of 19% of the population wears some form of denture, which is nearly one in five people. (Source: <a href="https://www.google.com/search?q=https://www.dentalhealth.org/blog/facts-tips-dentures%23:~:text%3DIn%2520a%2520study%2520across%252019,by%2520lost%2520or%2520missing%2520teeth." style={{ color: 'blue' }} target="_blank">Facts & Tips: Dentures - Oral Health Foundation</a>)

                    <Typography variant="h2" color='primary' sx={{ mt: 2 }} gutterBottom>Myths vs. Facts: Dental Implants</Typography>

                    <TableContainer
                        component={Paper}
                        elevation={3}
                        sx={{
                            my: 4,
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',

                        }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                        Myth
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                        Fact
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mythFactData.map(([myth, fact], index) => (
                                    <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#f0f0f0' }}>
                                        <TableCell sx={{ fontSize: '0.975rem' }}>
                                            {myth}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: '0.975rem' }}>
                                            {fact}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography variant="h2" color='primary'>Myths vs. Facts: Dental Bridges</Typography>

                    <TableContainer
                        component={Paper}
                        elevation={3}
                        sx={{
                            my: 4,
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                        Myth
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                        Fact
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mythFactbridgeData.map(([myth, fact], index) => (
                                    <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#f0f0f0' }}>
                                        <TableCell sx={{ fontSize: '0.975rem' }}>
                                            {myth}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: '0.975rem' }}>
                                            {fact}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="h2" color='primary'>Myths vs. Facts: Dentures</Typography>
                    <TableContainer
                        component={Paper}
                        elevation={0}
                        sx={{
                            my: 4,
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // subtle card-like shadow
                        }}
                    >
                        <Table sx={{ minWidth: 650 }} size="medium">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                        Myth
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                        Fact
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mythFactData.map(([myth, fact], index) => (
                                    <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#f0f0f0' }}>
                                        <TableCell sx={{ fontSize: '0.975rem' }}>
                                            {myth}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: '0.975rem' }}>
                                            {fact}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>

                {/* FAQs */}
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h2" color='primary' gutterBottom>Frequently Asked Questions (FAQs)</Typography>
                    {[
                        ["How do I decide which option is best for me?", "The best way to decide is to consult with your dentist. They will evaluate your oral health, discuss your individual needs and preferences, and recommend the most suitable option."],
                        ["Is dental implant surgery painful?", "Local anesthesia is used during the procedure, so you should experience minimal or no pain. Post-surgery discomfort is usually manageable with over-the-counter pain relievers."],
                        [" How long do dental implants last?", "With good oral hygiene and regular dental check-ups, dental implants can last a lifetime."],
                        ["Can one implant replace two teeth?", " In some cases, one implant can not support two adjacent teeth."],
                        ["Are dental implants safe?", "Dental implant surgery is considered one of the safest treatments in dentistry, with a very high success rate."],
                        ["Are dental bridges permanent?", "Dental bridges are considered semi-permanent as they are fixed in place and can only be removed by a dentist. However, they typically need to be replaced every 10-15 years."],
                        [" Do dental bridges look natural?", "Yes, modern dental bridges are crafted from materials like porcelain or ceramic and are carefully matched to your natural teeth for a seamless and aesthetically pleasing result."],
                        ["Will a dental bridge change how I speak?", "Replacing missing teeth with a bridge should improve speech clarity, especially if missing teeth previously affected pronunciation."],
                        ["Can a person sleep with their dentures in?", " It is generally recommended to remove dentures at night to allow your gums to rest and to clean the dentures properly."],
                        ["Will dentures allow for normal eating?", "While there's an adjustment period, dentures are designed to help you eat most foods naturally. Starting with soft foods and gradually introducing others is advisable."],
                        [" How do I care for my dentures?", " Dentures should be cleaned daily with a denture brush and soaked in a denture solution. Handle them gently to prevent damage."],


                    ].map(([q, a], i) => (
                        <Accordion key={i} sx={{ border: '1px solid lightgrey', mb: 1 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography><strong>Q:</strong> {q}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography><strong>A:</strong> {a}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                <Box sx={{ mt: 6 }}>
                    <Typography variant="body1">
                        Choosing the right tooth replacement option is a significant decision. By understanding the pros, cons, longevity, and maintenance requirements of dental implants, bridges, and dentures, you can have an informed discussion with your dentist to select the best solution for your unique needs and a healthy, confident smile.        </Typography>
                </Box>
            </Card>
        </Container>
    );
};

export default Implantbridge;

