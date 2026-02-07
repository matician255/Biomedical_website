
import { NavItem, Project, Service, AboutPoint } from './types';
// @ts-ignore
import dmArticleImg from './img/dm_article.png';
// @ts-ignore
import heartArticleImg from './img/heart_article.png';

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
    image: dmArticleImg,
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
    title: "5 Heart Attack Warning Signs That Appear 30 Days Before (Don't Ignore Them)",
    description: 'Learn the 5 critical heart attack warning signs that appear weeks before the event. Evidence-based medical guidance from a licensed physician on early detection and prevention.',
    image: heartArticleImg,
    location: 'Remote',
    category: 'Script Writing',
    link: '#',
    content: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="YouTube script sample: 5 Heart Attack Warning Signs. Professional medical scriptwriting by Dr. Emily Godfrey using Hook-Value-Retention framework.">
    <title>YouTube Script Portfolio | Dr. Emily Godfrey</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .portfolio-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .portfolio-header h1 {
            margin: 0 0 10px 0;
            font-size: 2em;
        }
        
        .portfolio-header .subtitle {
            font-size: 1.1em;
            opacity: 0.9;
        }
        
        .portfolio-meta {
            background-color: white;
            padding: 25px;
            border-radius: 8px;
            margin-bottom: 25px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            color: #333;
        }
        
        .portfolio-meta h2 {
            margin-top: 0;
            color: #667eea;
        }
        
        .meta-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }
        
        .meta-item {
            padding: 12px;
            background-color: #f8f9fa;
            border-radius: 5px;
            border-left: 3px solid #667eea;
        }
        
        .meta-item strong {
            color: #667eea;
            display: block;
            margin-bottom: 5px;
        }
        
        .script-container {
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            color: #333;
        }
        
        .timestamp {
            display: inline-block;
            background-color: #667eea;
            color: white;
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 0.85em;
            font-weight: bold;
            margin-right: 10px;
        }
        
        .section-label {
            background-color: #ffc107;
            color: #333;
            padding: 8px 15px;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            margin: 30px 0 15px 0;
            text-transform: uppercase;
        }
        
        .script-section {
            margin-bottom: 35px;
            padding: 20px;
            background-color: #fafafa;
            border-left: 4px solid #667eea;
            border-radius: 5px;
        }
        
        .script-section h3 {
            color: #c41e3a;
            margin-top: 0;
        }
        
        .script-section p {
            margin: 12px 0;
            line-height: 1.8;
        }
        
        .stat-highlight {
            background-color: #fff3cd;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: 600;
        }
        
        .technique-note {
            background-color: #e7f3ff;
            border-left: 4px solid #0066cc;
            padding: 15px;
            margin: 20px 0;
            font-style: italic;
        }
        
        .cta-section {
            background-color: #d4edda;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
        }
        
        .framework-badge {
            background-color: #667eea;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85em;
            display: inline-block;
            margin: 5px;
        }
        
        @media (max-width: 768px) {
            .portfolio-header, .script-container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <header class="portfolio-header">
        <h1>YouTube Script Portfolio</h1>
        <p class="subtitle">Professional Medical Scriptwriting | Evidence-Based Health Content</p>
        <div>
            <span class="framework-badge">HVR Framework</span>
            <span class="framework-badge">1,500 Words</span>
            <span class="framework-badge">Physician-Written</span>
        </div>
    </header>

    <section class="portfolio-meta">
        <h2>Script Overview</h2>
        <div class="meta-grid">
            <div class="meta-item">
                <strong>Title</strong>
                5 Heart Attack Warning Signs That Appear 30 Days Before
            </div>
            <div class="meta-item">
                <strong>Format</strong>
                Hook-Value-Retention (HVR)
            </div>
            <div class="meta-item">
                <strong>Length</strong>
                8-10 minutes
            </div>
            <div class="meta-item">
                <strong>Citations</strong>
                6 peer-reviewed sources
            </div>
        </div>
    </section>

    <article class="script-container">
        
        <div class="section-label">Hook (0:00-0:45)</div>
        
        <div class="script-section">
            <p>What if I told you that your body starts warning you about a heart attack a full month before it happens? Most people miss these signs completely, and by the time they realize something's wrong, they're in the emergency room.</p>
            
            <p>Here's the terrifying truth: According to the American Heart Association, <span class="stat-highlight">someone in the United States has a heart attack every 40 seconds</span>. That's while you're watching this video, right now. But here's what most people don't know, your heart doesn't just suddenly fail. It sends out distress signals weeks in advance.</p>
            
            <p>I'm Dr. Emily, a licensed physician in clinical practice, and I've seen patients ignore these exact warning signs until it was almost too late. Today, I'm going to share the 5 critical symptoms that appear up to 30 days before a heart attack, symptoms that could save your life or the life of someone you love.</p>
            
            <div class="technique-note">
                <strong>Retention Hook:</strong> Stick with me until the end, because warning sign number 5 is so subtle that even some doctors miss it during routine checkups.
            </div>
        </div>

        <div class="section-label">Value Delivery (0:45-8:30)</div>

        <div class="script-section">
            <h3><span class="timestamp">1:00-2:15</span> Warning Sign #1: Unusual Fatigue</h3>
            
            <p>Let me start with the most commonly missed warning sign: extreme fatigue that seems to come out of nowhere.</p>
            
            <p>Now, we all get tired. Long workday, you didn't sleep well, chasing kids around, that's normal. But I'm talking about a different kind of exhaustion. This is the kind where you feel completely drained after simple activities that never used to bother you.</p>
            
            <p>A study published in <em>Circulation</em> found that <span class="stat-highlight">71% of women who had heart attacks reported unusual fatigue</span> beforehand.</p>
            
            <div class="cta-section">
                <strong>Action:</strong> If fatigue persists for more than a week despite rest, see your doctor immediately.
            </div>
        </div>

        <div class="script-section">
            <h3><span class="timestamp">2:15-3:30</span> Warning Sign #2: Shortness of Breath</h3>
            
            <p>When blood flow to your heart decreases, fluid can start backing up into your lungs. This is called pulmonary congestion, and it makes breathing feel difficult even when you're at rest.</p>
            
            <p>Mayo Clinic research shows <span class="stat-highlight">40% of people report unexplained shortness of breath</span> in the month before their heart attack.</p>
            
            <div class="technique-note">
                <strong>Clinical Story:</strong> I had a patient in his early 50s sleeping propped on three pillows because lying flat caused breathlessness. Three weeks later, he was in the ER with a massive heart attack.
            </div>
        </div>

        <div class="script-section">
            <h3><span class="timestamp">3:30-4:45</span> Warning Sign #3: Unexplained Indigestion</h3>
            
            <p>The nerves that supply your heart are very close to the nerves that supply your digestive system. When your heart muscle isn't getting enough oxygen, your brain can misinterpret those signals as stomach problems.</p>
            
            <p>A <em>JAMA</em> study found <span class="stat-highlight">30% of heart attack patients initially thought they had indigestion</span>, delaying appropriate care.</p>
        </div>

        <div class="script-section">
            <h3><span class="timestamp">4:45-6:00</span> Warning Sign #4: Chest Discomfort That Comes and Goes</h3>
            
            <p>This intermittent chest discomfort is called angina. The American Heart Association reports <span class="stat-highlight">50% of heart attack patients experienced intermittent chest discomfort</span> beforehand, but few sought help.</p>
            
            <div class="cta-section">
                <strong>Gender Note:</strong> Women often experience atypical symptoms like pressure or tightness rather than classic chest pain.
            </div>
        </div>

        <div class="script-section">
            <h3><span class="timestamp">6:00-7:15</span> Warning Sign #5: Cold Sweats and Dizziness</h3>
            
            <p><em>European Heart Journal</em> studies show cold sweats combined with other symptoms dramatically increase heart attack risk. These symptoms rarely appear alone.</p>
            
            <div class="cta-section">
                <strong>Critical:</strong> If experiencing multiple warning signs, call emergency services immediately.
            </div>
        </div>

        <div class="section-label">Close & Call-to-Action (7:15-9:00)</div>

        <div class="script-section">
            <p>Remember: Your heart has been working nonstop since before you were born. It deserves your attention when it's asking for help. These warning signs are your body's way of giving you a chance to act before it's too late.</p>
            
            <p>Don't ignore them. Don't wait. Your life might literally depend on it.</p>
        </div>

    </article>

    <section class="portfolio-meta" style="margin-top: 30px;">
        <h2>Why This Script Works</h2>
        <div class="technique-note">
            <ul style="margin: 10px 0;">
                <li><strong>Evidence-Based:</strong> 6 peer-reviewed citations from top medical journals</li>
                <li><strong>Physician Authority:</strong> Written by licensed MD with clinical experience</li>
                <li><strong>Pattern Interrupts:</strong> Engagement hooks every 60-90 seconds</li>
                <li><strong>Clinical Stories:</strong> Authentic patient examples for emotional impact</li>
                <li><strong>Clear CTAs:</strong> Specific action steps throughout</li>
                <li><strong>Gender-Inclusive:</strong> Addresses differences in symptoms</li>
            </ul>
        </div>
    </section>

</body>
</html>
    `
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
    description: 'I help researchers and pharmaceutical companies turn complex medical data into publication-ready manuscripts and regulatory documents. As a licensed physician, I write clinical study reports, journal articles, and regulatory dossiers that meet the exacting standards of top journals and health authorities like the FDA.',
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
  { id: 1, content: 'Over 4 years of specialized experience as a Medical Doctor, Medical Writer, Researcher and Bioinformatics Analyst, bridging the gap between clinical data and efficient disease management.' },
  { id: 2, content: 'Authored 5 peer-reviewed publications and clinical reports for leading healthcare institutions and pharmaceutical giants.' },
  { id: 3, content: 'Technical expertise in R, Python, Linux and SQL for biological data mining, coupled with an MD background for scientific depth.' },
  { id: 4, content: 'Certified specialist in AMA and ICMJE reporting standards, ensuring regulatory compliance and ethical integrity in all documentation.' },
  { id: 5, content: 'Led data visualization projects for complex genomic datasets, making high-dimensional data accessible to multi-disciplinary teams.' },
  { id: 6, content: 'Expertise in translating medical and technical findings into patient-centric narratives for medical affairs departments.' },
];
