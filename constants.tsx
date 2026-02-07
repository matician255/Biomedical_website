
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
  <article class="diabetes-article" lang="en">
  <header class="article-header">
    <h1><strong>Five Common Diabetes Myths Young Adults Should Know</strong></h1>
    <p class="lead">If you are aged 18-35, diabetes may feel like a distant concern, but incidence among young adults is rising. This article debunks five widespread myths so you can recognize risk, seek appropriate screening, and take action early.</p>
  </header>

  <section id="myth-1" aria-labelledby="myth-1-heading">
    <h2 id="myth-1-heading"><strong><span class="misconception-number">#1</span> Only Overweight People Get Diabetes</strong></h2>
    <p>Although excess weight raises the risk of type 2 diabetes, many lean individuals develop diabetes because of genetic predisposition, insulin resistance, or other metabolic factors. Type 1 diabetes is an autoimmune condition and is unrelated to body weight or lifestyle.</p>
    <p>Both types can occur in young adults. People of South Asian, Hispanic, or African descent often have higher risk regardless of BMI, so family history and symptoms warrant timely testing.</p>

    <aside class="actionable-tip" role="note" aria-labelledby="tip-1-title">
      <h3 id="tip-1-title"><strong>Actionable tip</strong></h3>
      <p>If you have a family history of diabetes, ask your clinician for a fasting glucose or HbA1c test during routine care, regardless of your weight. Early detection enables interventions that reduce long‑term complications.</p>
    </aside>
  </section>

  <section id="myth-2" aria-labelledby="myth-2-heading">
    <h2 id="myth-2-heading"><strong><span class="misconception-number">#2</span> If You Feel Fine, You Don't Have Diabetes</strong></h2>
    <p>Diabetes often progresses silently. Many people are asymptomatic until metabolic damage prompts an acute event or emergency. By the time classic symptoms; excessive thirst, frequent urination, blurred vision, unexplained weight loss , appear , significant harm may already have occurred.</p>
    <p>Intervening during this silent window is most effective: modest weight loss (5-7% body weight) and ≈150 minutes of moderate activity per week substantially lower progression to type 2 diabetes in high‑risk individuals, making routine screening valuable for at‑risk groups.</p>

    <aside class="actionable-tip" role="note" aria-labelledby="tip-2-title">
      <h3 id="tip-2-title"><strong>Actionable tip</strong></h3>
      <p>Follow screening advice from your healthcare provider. While some guidelines recommend screening from age 35 for average‑risk adults, clinicians may advise earlier or more frequent testing based on family history, ethnicity, or other risk factors.</p>
    </aside>
  </section>

  <section id="myth-3" aria-labelledby="myth-3-heading">
    <h2 id="myth-3-heading"><strong><span class="misconception-number">#3</span> Eating Sugar Alone Causes Diabetes</strong></h2>
    <p>This simplification is misleading. Type 1 diabetes is autoimmune and not caused by sugar consumption. For type 2 diabetes, excess sugar can contribute to weight gain and metabolic dysfunction, but risk is determined by a complex mix of genetics, overall diet quality, activity, sleep, stress, and body composition.</p>
    <p>Focusing on dietary patterns rather than single nutrients is more effective for prevention and long‑term health.</p>

    <aside class="actionable-tip" role="note" aria-labelledby="tip-3-title">
      <h3 id="tip-3-title"><strong>Actionable tip</strong></h3>
      <p>Adopt a balanced dietary pattern like a Mediterranean‑style diet rich in vegetables, whole grains, lean proteins, and healthy fats, rather than fixating solely on sugar elimination.</p>
    </aside>
  </section>

  <section id="myth-4" aria-labelledby="myth-4-heading">
    <h2 id="myth-4-heading"><strong><span class="misconception-number">#4</span> Having Diabetes Means Your Life Is Over</strong></h2>
    <p>Advances in diabetes care have greatly improved quality of life. Technologies such as continuous glucose monitors, insulin pumps, and mobile apps help make management more precise and less intrusive.</p>
    <p>With appropriate management and regular clinical care, complications are largely preventable. Landmark trials demonstrate that maintaining near‑normal glucose levels significantly reduces the risk of eye, kidney, and nerve disease.</p>

    <aside class="actionable-tip" role="note" aria-labelledby="tip-4-title">
      <h3 id="tip-4-title"><strong>Actionable tip</strong></h3>
      <p>If diagnosed, connect promptly with an endocrinologist and a certified diabetes educator (CDE). Peer support groups whether in person or online, provide practical tips and emotional support from others living with diabetes.</p>
    </aside>
  </section>

  <section id="myth-5" aria-labelledby="myth-5-heading">
    <h2 id="myth-5-heading"><strong><span class="misconception-number">#5</span> Type 2 Diabetes Only Affects Older Adults</strong></h2>
    <p>Type 2 diabetes among young adults has increased markedly over the past two decades. In many regions, a substantial share of new diabetes diagnoses in younger adults is type 2, which often progresses more rapidly and may lead to earlier complications than type 2 onset later in life.</p>
    <p>Young adults often respond particularly well to lifestyle interventions when diagnosis occurs early, because metabolic flexibility is greater at younger ages.</p>

    <aside class="actionable-tip" role="note" aria-labelledby="tip-5-title">
      <h3 id="tip-5-title"><strong>Actionable tip</strong></h3>
      <p>If you are diagnosed with type 2 diabetes in your 20s or 30s, treat it seriously: pursue intensive lifestyle change and specialist care to minimize long‑term risk.</p>
    </aside>
  </section>

  <footer class="article-footer">
    <section class="bottom-line">
      <h2><strong>The bottom line</strong></h2>
      <p>Diabetes in young adults is increasingly common but highly manageable when detected early. Understanding these misconceptions helps you pursue timely screening, accurate diagnosis, and effective treatment.</p>
    </section>

    <section class="disclaimer">
      <p><strong>Disclaimer:</strong> This article provides general information only and is not medical advice. Consult a healthcare professional for personalized recommendations.</p>
    </section>

    <section class="references" aria-label="References">
      <h2><strong>References</strong></h2>
      <ul>
        <li>Diabetes Prevention Program Research Group (2002)</li>
        <li>Diabetes Control and Complications Trial Research Group (1993)</li>
        <li>TODAY Study Group (2013)</li>
      </ul>
    </section>
  </footer>
</article>
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
