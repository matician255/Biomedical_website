
import { NavItem, Project, Service, AboutPoint } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'SERVICES', href: '#services' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Diabetes in Young Adults: 5 Common Myths | Medical Insights',
    description: "5 myths about diabetes in young adults; what’s true, what’s dangerous, and simple steps to protect your health",
    image:'img/dm_article.png',
    location: 'Remote',
    category: 'Medical Writing',
    link: '#',
    content: `
      <div class="intro">
            <p>If you're 18–35, you might think diabetes is a problem for older adults or children. In fact, rates of diabetes in young adults are rising worldwide, and widespread myths are delaying diagnosis and treatment. This article clears up five common misconceptions so you or someone you care about can act early.</p>
        </div>
        
        <h2><span class="misconception-number">#1</span> Only Overweight People Get Diabetes</h2>
        <p>While obesity increases the risk of type 2 diabetes, many lean people still develop the condition because of genetics, insulin resistance, or other metabolic problems. Separately, type 1 diabetes is an autoimmune disease in which the immune system attacks the insulin-producing cells of the pancreas. This form is unrelated to weight or lifestyle.</p>
        <p>Both types can occur in young adults, so family history and symptoms deserve prompt testing. Also, individuals from South Asian, Hispanic or African American populations face higher risk regardless of BMI.</p>
        
        <div class="actionable-tip">
            <div class="tip-title">Actionable Tip</div>
            <p>If you have a family history of diabetes, request a fasting glucose or HbA1c test (a simple blood test that shows average blood sugar over 2–3 months) at your annual physical check up, regardless of your weight. Early detection allows for intervention before complications develop.</p>
        </div>
        
        <h2><span class="misconception-number">#2</span> If You Feel Fine, You Don't Have Diabetes</h2>
        <p>Diabetes is often called a "silent disease" for good reason. Because early diabetes is often symptom-free, many people are only diagnosed after they're rushed to hospital with an acute diabetes-related emergency (i.e., very high blood sugar or a severe infection). That's why simple screening tests can save lives.</p>
        <p>By the time classic symptoms appear—like excessive thirst, frequent urination, blurred vision, unexplained weight loss—significant metabolic damage may have already occurred.</p>
        <p>The asymptomatic period is precisely when lifestyle changes are most effective. Research shows that modest weight loss (5-7% of body weight) and 150 minutes of weekly physical activity can reduce progression to type 2 diabetes by <span class="stat-highlight">58%</span> in high-risk individuals [2]. Waiting until symptoms appear means missing this critical prevention window.</p>
        
        <div class="actionable-tip">
            <div class="tip-title">Actionable Tip</div>
            <p>Current guidelines from the American Diabetes Association recommend screening every three years starting at age 35 for those without additional risk factors, though your healthcare provider may suggest earlier or more frequent screening based on your individual risk profile.</p>
        </div>
        
        <h2><span class="misconception-number">#3</span> Eating Too Much Sugar Causes Diabetes</h2>
        <p>This oversimplification causes both unnecessary anxiety and false reassurance. Type 1 diabetes results from autoimmune destruction of insulin-producing cells; sugar consumption plays no role. For type 2 diabetes, the relationship is indirect and complex.</p>
        <p>Excess sugar intake contributes to weight gain and metabolic dysfunction, which increases insulin resistance over time. However, the mechanism isn't "sugar in, diabetes out." Genetics, overall diet quality, physical activity, sleep patterns, stress levels, and body composition all interact to determine diabetes risk.</p>
        <p>Someone drinking daily sodas with protective genes might never develop diabetes, while someone with strong genetic predisposition could develop it despite moderate sugar intake.</p>
        
        <div class="actionable-tip">
            <div class="tip-title">Actionable Tip</div>
            <p>Focus on overall dietary patterns rather than demonizing single nutrients. The Mediterranean diet rich in vegetables, whole grains, lean proteins, and healthy fats reduces diabetes risk more effectively than simply cutting sugar while maintaining a poor overall diet.</p>
        </div>
        
        <h2><span class="misconception-number">#4</span> Having Diabetes Means Your Life Is Over</h2>
        <p>This fear-based misconception prevents many young adults from seeking diagnosis and treatment. Modern diabetes management has transformed dramatically. Continuous glucose monitors, insulin pumps, and smartphone apps make management more precise and less burdensome than ever before.</p>
        <p>Young adults with diabetes today lead full, active lives. They're athletes, travelers, parents, and professionals. With proper management, diabetes complications are largely preventable. The DCCT trial definitively showed that maintaining near-normal blood glucose levels prevents or delays eye disease, kidney disease, and nerve damage by <span class="stat-highlight">50-75%</span> [3].</p>
        <p>Yes, diabetes requires daily attention, but it doesn't define you. The real threat isn't the diagnosis; it's poor management driven by denial, misinformation, or inadequate support.</p>
        
        <div class="actionable-tip">
            <div class="tip-title">Actionable Tip</div>
            <p>If diagnosed, immediately connect with a certified diabetes educator (CDE) and endocrinologist who specialize in young adult care. Peer support groups, both in-person and online, provide invaluable practical advice and emotional support from others navigating the same challenges.</p>
        </div>
        
        <h2><span class="misconception-number">#5</span> Type 2 Diabetes Only Affects Older Adults</h2>
        <p>Perhaps the most dangerous misconception is that diabetes young adults develop must be type 1. Type 2 diabetes incidence in young adults has increased <span class="stat-highlight">5-fold</span> over the past two decades, paralleling rising obesity rates and sedentary lifestyles. Today, nearly one-third of new diabetes cases in young adults are type 2.</p>
        <p>Worse, type 2 diabetes in young adults often progresses more aggressively than in older adults, with faster beta-cell decline and earlier onset of complications. Young adults with type 2 diabetes face <span class="stat-highlight">14 times</span> the risk of heart attack compared to their peers without diabetes, a far higher relative risk than older adults experience [5].</p>
        <p>Young adults also respond exceptionally well to lifestyle interventions when diagnosed early. Your metabolic flexibility is still high, making dietary changes and exercise particularly effective.</p>
        
        <div class="actionable-tip">
            <div class="tip-title">Actionable Tip</div>
            <p>If diagnosed with type 2 diabetes in your 20s or 30s, treat it as seriously as you would any chronic condition. This isn't "borderline" diabetes; it requires immediate, aggressive management to prevent complications that could affect your quality of life for decades.</p>
        </div>
        
        <div class="bottom-line">
            <h2>The Bottom Line</h2>
            <p>Diabetes in young adults is more common, more serious, and more manageable than most people realize. Understanding the facts empowers you to advocate for appropriate screening, recognize warning signs, and take preventive action. Whether you're managing diabetes yourself or supporting someone who is, rejecting these misconceptions is the first step toward better health outcomes.</p>
        </div>
        
        <div class="disclaimer">
            <p><strong>Disclaimer:</strong> These are general guidelines and individual risk factors may warrant different approaches. Always consult with a healthcare professional for personalized medical advice.</p>
        </div>
        
        <div class="reference">
            <p>References: [2] Diabetes Prevention Program Research Group, 2002; [3] The Diabetes Control and Complications Trial Research Group, 1993; [5] TODAY Study Group, 2013</p>
        </div>
    </div>
    `,
  },
  {
    title: 'Clinical Trial Narrative',
    description: 'Expert medical writing for a Phase III Oncology drug submission (FDA/EMA).',
    image: 'https://picsum.photos/seed/med1/1200/800',
    location: 'Global Pharma - London',
    category: 'Regulatory Writing',
    link: '#',
  },
  {
    title: 'Microbiome Mapping',
    description: 'Visualizing temporal changes in gut microflora during probiotic intervention.',
    image: 'https://picsum.photos/seed/bio2/1200/800',
    location: 'Zurich Biotech - Switzerland',
    category: 'Data Visualization',
    link: '#',
  },
  {
    title: 'Public Health Review',
    description: 'A systematic review on the efficacy of telemedicine in rural endocrine care.',
    image: 'https://picsum.photos/seed/med2/1200/800',
    location: 'WHO Initiative - Geneva',
    category: 'Medical Review',
    link: '#',
  },
];

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Medical Writing',
    description: 'High-quality manuscripts, clinical study reports (CSRs), and regulatory dossiers tailored for high-impact journals and health authorities.',
  },
  {
    id: '02',
    title: 'Bioinformatics Analysis',
    description: 'Pipeline development for NGS data processing, protein modeling, and statistical validation of biological datasets.',
  },
  {
    id: '03',
    title: 'Expert Consultation',
    description: 'Strategic advisory for digital health startups looking to bridge the gap between complex science and commercial communication.',
  },
];

export const ABOUT_POINTS: AboutPoint[] = [
  { id: 1, content: 'Over 8 years of specialized experience as a Medical Writer and Bioinformatics Analyst, bridging the gap between clinical data and clear communication.' },
  { id: 2, content: 'Authored over 40 peer-reviewed publications and clinical reports for leading healthcare institutions and pharmaceutical giants.' },
  { id: 3, content: 'Technical expertise in R, Python, and SQL for biological data mining, coupled with an MD/PhD background for scientific depth.' },
  { id: 4, content: 'Certified specialist in AMA and ICMJE reporting standards, ensuring regulatory compliance and ethical integrity in all documentation.' },
  { id: 5, content: 'Led data visualization projects for complex genomic datasets, making high-dimensional data accessible to multi-disciplinary teams.' },
  { id: 6, content: 'Expertise in translating technical bioinformatics findings into patient-centric narratives for medical affairs departments.' },
];
