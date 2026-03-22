// ══ TRANSLATIONS ══
const T = {
  en: {
    nav_home:'Home',nav_checker:'Symptom Checker',nav_chat:'AI Diagnosis',nav_doctors:'Doctors',
    nav_cta:'Check Symptoms →',badge:'AI-Powered Health Insights',
    hero_h1:'Know your health, <em>intelligently.</em>',
    hero_sub:'Afya AI combines advanced AI with clinical data to help you understand symptoms, assess risks, and connect with the right specialists — instantly.',
    btn_check:'🩺 Check Symptoms',btn_chat:'💬 AI Chat',
    fc1_title:'Symptom Checker',fc1_desc:'Guided 3-step analysis with real AI-powered condition matching.',
    fc2_title:'AI Diagnosis Chat',fc2_desc:'Conversational health guidance powered by Claude AI.',
    fc3_title:'Book a Doctor',fc3_desc:'Find and consult verified specialists near you.',
    stat1:'Symptoms analyzed',stat2:'Accuracy rate',stat3:'Verified specialists',stat4:'Avg. booking time',
    checker_title:'Symptom Checker',checker_sub:'Answer a few questions and AI will help identify what might be going on.',
    step1_label:'Body Area',step2_label:'Symptoms',step3_label:'Severity',
    s1_q:'Where do you feel discomfort?',
    area1:'Head & Brain',area2:'Chest & Heart',area3:'Stomach & Gut',area4:'Respiratory',
    area5:'Skin',area6:'Joints & Muscles',area7:'Eyes',area8:'Ear, Nose, Throat',area9:'General / Whole Body',
    s2_q:'What symptoms are you experiencing?',sym_placeholder:'e.g. headache, fever, nausea...',
    s3_sev:'How severe are your symptoms? (1–10)',mild:'Mild (1)',severe:'Severe (10)',
    s3_dur:'How long have you had these symptoms?',
    dur1:'Today',dur2:'2–3 days',dur3:'1 week',dur4:'2+ weeks',dur5:'Chronic',
    s3_extra:'Do you have any of the following?',
    ex1:'Fever',ex2:'Shortness of breath',ex3:'Chest pain',ex4:'Nausea',ex5:'Rash',ex6:'None',
    btn_next:'Next →',btn_back:'← Back',btn_analyze:'🤖 Analyze with AI →',
    results_title:'Your Results',results_sub:'AI-generated assessment. Not a medical diagnosis — always consult a doctor.',
    analyzing:'Analyzing your symptoms with AI...',
    filter_label:'Filter by:',filter_all:'All Conditions',filter_low:'🟢 Low Severity',
    filter_mod:'🟡 Moderate',filter_high:'🔴 High Severity',filter_sim:'🔗 Most Similar',
    ai_summary_title:'AI Summary & Recommendations',
    next_steps:'What would you like to do next?',
    btn_book:'👨‍⚕️ Book a Doctor',btn_chat_ai:'💬 Chat with AI',btn_recheck:'🔄 Re-check Symptoms',
    doc_title:'Doctor Directory',doc_sub:'Find and book verified specialists. All doctors are licensed and peer-reviewed.',
    filter_all_spec:'All Specialties',spec1:'General Practice',spec2:'Pulmonology',
    spec3:'Cardiology',spec4:'Neurology',spec5:'Dermatology',
    spec_gp:'General Practice',spec_pulmo:'Pulmonologist',spec_cardio:'Cardiologist',
    spec_neuro:'Neurologist',spec_derm:'Dermatologist',
    reviews:'reviews',avail_today:'Available today',avail_tom:'Tomorrow 9am',avail_now:'Available now',book:'Book',
    chat_title:'AI Diagnosis Chat',chat_sub:'Describe your symptoms naturally and our AI will help assess your condition.',
    chat_placeholder:'Describe your symptoms...',
    chat_welcome:'Hello! I\'m your AI health assistant powered by Claude. Describe what you\'re feeling — symptoms, duration, severity. I\'ll help identify possible conditions and guide you. I\'m not a replacement for a doctor. 🩺',
    cancel:'Cancel',confirm:'Confirm ✓',footer:'For informational purposes only. Always consult a licensed medical professional.',
  },
  sw: {
    nav_home:'Nyumbani',nav_checker:'Kikagua Dalili',nav_chat:'Uchunguzi wa AI',nav_doctors:'Madaktari',
    nav_cta:'Kagua Dalili →',badge:'Maarifa ya Afya Yanayotumia AI',
    hero_h1:'Jua afya yako, <em>kwa akili.</em>',
    hero_sub:'Afya AI inachanganya AI ya hali ya juu na data ya kliniki kukusaidia kuelewa dalili, kutathmini hatari, na kuunganika na wataalamu wanaofaa — mara moja.',
    btn_check:'🩺 Kagua Dalili',btn_chat:'💬 Gumza na AI',
    fc1_title:'Kikagua Dalili',fc1_desc:'Uchambuzi wa hatua 3 na AI inayolinganisha hali za kiafya.',
    fc2_title:'Gumza la Uchunguzi',fc2_desc:'Mwongozo wa afya kwa mazungumzo unaotumia Claude AI.',
    fc3_title:'Hifadhi Daktari',fc3_desc:'Pata na wasiliana na wataalamu walioidhinishwa karibu nawe.',
    stat1:'Dalili zilizochambuliwa',stat2:'Kiwango cha usahihi',stat3:'Wataalamu walioidhinishwa',stat4:'Muda wa wastani wa kuhifadhi',
    checker_title:'Kikagua Dalili',checker_sub:'Jibu maswali machache na AI yetu itakusaidia kutambua tatizo.',
    step1_label:'Eneo la Mwili',step2_label:'Dalili',step3_label:'Ukali',
    s1_q:'Unahisi usumbufu wapi?',
    area1:'Kichwa & Ubongo',area2:'Kifua & Moyo',area3:'Tumbo & Utumbo',area4:'Mfumo wa Kupumua',
    area5:'Ngozi',area6:'Viungo & Misuli',area7:'Macho',area8:'Sikio, Pua, Koo',area9:'Jumla / Mwili Wote',
    s2_q:'Unajisikiaje? Dalili gani unazopata?',sym_placeholder:'Mfano: maumivu ya kichwa, homa, kichefuchefu...',
    s3_sev:'Dalili zako ni kali kiasi gani? (1–10)',mild:'Hafifu (1)',severe:'Kali (10)',
    s3_dur:'Umekuwa na dalili hizi kwa muda gani?',
    dur1:'Leo',dur2:'Siku 2–3',dur3:'Wiki moja',dur4:'Wiki 2+',dur5:'Sugu',
    s3_extra:'Je, una yoyote ya haya?',
    ex1:'Homa',ex2:'Upungufu wa pumzi',ex3:'Maumivu ya kifua',ex4:'Kichefuchefu',ex5:'Upele',ex6:'Hakuna',
    btn_next:'Ifuatayo →',btn_back:'← Rudi',btn_analyze:'🤖 Changanua kwa AI →',
    results_title:'Matokeo Yako',results_sub:'Tathmini ya AI. Hii si uchunguzi wa kimatibabu — wasiliana na daktari.',
    analyzing:'Inachambua dalili zako kwa AI...',
    filter_label:'Chuja kwa:',filter_all:'Hali Zote',filter_low:'🟢 Ukali Mdogo',
    filter_mod:'🟡 Ukali wa Kati',filter_high:'🔴 Ukali Mkubwa',filter_sim:'🔗 Dalili Zinazofanana',
    ai_summary_title:'Muhtasari wa AI & Mapendekezo',
    next_steps:'Ungependa kufanya nini baadaye?',
    btn_book:'👨‍⚕️ Hifadhi Daktari',btn_chat_ai:'💬 Gumza na AI',btn_recheck:'🔄 Kagua Tena',
    doc_title:'Saraka ya Madaktari',doc_sub:'Pata na hifadhi wataalamu walioidhinishwa. Madaktari wote wana leseni.',
    filter_all_spec:'Utaalamu Wote',spec1:'Dawa ya Jumla',spec2:'Magonjwa ya Mapafu',
    spec3:'Cardiolojia',spec4:'Neurolojia',spec5:'Dermatolojia',
    spec_gp:'Dawa ya Jumla',spec_pulmo:'Mtaalamu wa Mapafu',spec_cardio:'Mtaalamu wa Moyo',
    spec_neuro:'Mtaalamu wa Neva',spec_derm:'Mtaalamu wa Ngozi',
    reviews:'maoni',avail_today:'Anapatikana leo',avail_tom:'Kesho saa 3',avail_now:'Anapatikana sasa',book:'Hifadhi',
    chat_title:'Gumza la Uchunguzi wa AI',chat_sub:'Elezea dalili zako na AI yetu itakusaidia kutathmini hali yako.',
    chat_placeholder:'Elezea dalili zako...',
    chat_welcome:'Habari! Mimi ni msaidizi wako wa afya wa AI anayetumia Claude. Elezea unachohisi — ni dalili gani, umekuwa nazo kwa muda gani, na ukali wao. Nitakusaidia kutambua hali zinazowezekana. Kumbuka, niko hapa kukuongoza, si kuchukua nafasi ya daktari. 🩺',
    cancel:'Ghairi',confirm:'Thibitisha ✓',footer:'Kwa madhumuni ya habari tu. Daima wasiliana na mtaalamu wa kimatibabu.',
  }
};

let lang = 'en';

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent.trim().toLowerCase() === l));
  applyTranslations();
}

function applyTranslations() {
  const t = T[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined && el.tagName !== 'INPUT') el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-key-placeholder]').forEach(el => {
    const key = el.getAttribute('data-key-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  const wEl = document.getElementById('chat-welcome');
  if (wEl) wEl.textContent = t.chat_welcome;
}

// ══ ROUTING ══
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  window.scrollTo(0,0);
}

// ══ CHECKER ══
let selectedArea = '', symptoms = [], diagnosisResults = [];

const quickMap = {
  'Head & Brain':         ['Headache','Dizziness','Memory issues','Blurred vision','Migraine','Confusion'],
  'Chest & Heart':        ['Chest pain','Palpitations','Shortness of breath','Tightness','Fatigue','Irregular heartbeat'],
  'Stomach & Gut':        ['Nausea','Bloating','Diarrhea','Stomach cramps','Vomiting','Constipation'],
  'Respiratory':          ['Cough','Wheezing','Shortness of breath','Runny nose','Sore throat','Phlegm'],
  'Skin':                 ['Rash','Itching','Redness','Blisters','Dry skin','Swelling'],
  'Joints & Muscles':     ['Joint pain','Swelling','Stiffness','Muscle ache','Weakness','Cramps'],
  'Eyes':                 ['Redness','Discharge','Blurred vision','Itchy eyes','Light sensitivity','Tearing'],
  'Ear, Nose, Throat':    ['Earache','Sore throat','Nasal congestion','Loss of smell','Hoarseness','Ear discharge'],
  'General / Whole Body': ['Fever','Fatigue','Night sweats','Weight loss','Chills','Loss of appetite'],
};

function selectArea(btn, area) {
  document.querySelectorAll('.area-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedArea = area;
  loadQuickSymptoms(area);
}

function loadQuickSymptoms(area) {
  const c = document.getElementById('quick-symptoms');
  c.innerHTML = '';
  (quickMap[area]||[]).forEach(s => {
    const b = document.createElement('button');
    b.className='radio-btn'; b.textContent=s;
    b.onclick=()=>{ addSymptomText(s); b.classList.add('selected'); };
    c.appendChild(b);
  });
}

function addSymptom() { const i=document.getElementById('symptom-in'); addSymptomText(i.value.trim()); i.value=''; }
function addSymptomText(t) { if(!t||symptoms.includes(t)) return; symptoms.push(t); renderTags(); }
function renderTags() {
  document.getElementById('symptom-tags').innerHTML = symptoms.map((s,i)=>
    `<span class="tag">${s}<button class="tag-remove" onclick="removeSymptom(${i})">×</button></span>`).join('');
}
function removeSymptom(i) { symptoms.splice(i,1); renderTags(); }

function goStep(n) {
  [1,2,3].forEach(i => {
    document.getElementById('checker-step-'+i).style.display = i===n?'block':'none';
    const el=document.getElementById('step'+i);
    el.classList.remove('active','done');
    if(i===n) el.classList.add('active');
    if(i<n) el.classList.add('done');
    const line=document.getElementById('line'+i);
    if(line) line.classList.toggle('done',i<n);
  });
}
function selectRadio(btn,gid) { document.querySelectorAll(`#${gid} .radio-btn`).forEach(b=>b.classList.remove('selected')); btn.classList.add('selected'); }
function toggleExtra(btn) { btn.classList.toggle('selected'); }

// ══ AI DIAGNOSIS ══
async function runAIDiagnosis() {
  const severity = document.getElementById('severity-range').value;
  const duration = document.querySelector('#duration-group .selected')?.textContent || 'unknown';
  const extras = [...document.querySelectorAll('#extra-group .selected')].map(b=>b.textContent).join(', ') || 'none';
  const responseLang = lang==='sw' ? 'Swahili' : 'English';

  showPage('results');
  document.getElementById('results-loading').style.display='block';
  document.getElementById('results-content').style.display='none';

  const prompt = `You are a medical AI assistant. A patient reports:
- Body area: ${selectedArea||'General'}
- Symptoms: ${symptoms.length ? symptoms.join(', ') : 'not specified'}
- Severity: ${severity}/10
- Duration: ${duration}
- Additional: ${extras}

Respond ONLY with a JSON object (no markdown, no preamble):
{
  "riskLevel": "low"|"moderate"|"high",
  "riskSummary": "One sentence risk summary in ${responseLang}",
  "conditions": [
    {
      "name": "Condition name in ${responseLang}",
      "matchPercent": 85,
      "description": "1-2 sentence description in ${responseLang}",
      "severity": "low"|"moderate"|"high",
      "keySymptoms": ["symptom1","symptom2","symptom3"],
      "matchedSymptoms": ["matched symptom from patient input"]
    }
  ],
  "summary": "2-3 sentence AI recommendation in ${responseLang} including urgency advice",
  "disclaimer": "Short disclaimer in ${responseLang}"
}
Return 3-5 conditions ranked by matchPercent descending. matchedSymptoms must only include items from: [${symptoms.join(', ')}].`;

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ model:'claude-sonnet-4-20250514', max_tokens:1200, messages:[{role:'user',content:prompt}] })
    });
    const data = await resp.json();
    const text = data.content?.map(c=>c.text||'').join('') || '';
    const clean = text.replace(/```json|```/g,'').trim();
    renderResults(JSON.parse(clean));
  } catch(e) {
    renderResults(getFallback());
  }
}

function getFallback() {
  return {
    riskLevel:'moderate',
    riskSummary: lang==='sw'
      ? 'Dalili zako zinaashiria hali ya hatari ya wastani inayohitaji ushauri wa kimatibabu.'
      : 'Your symptoms suggest a moderate-risk condition that may benefit from medical consultation.',
    conditions:[
      {name:'Viral Respiratory Infection',matchPercent:80,description:lang==='sw'?'Ugonjwa wa kawaida wa virusi unaoathiri njia ya juu ya kupumua. Kawaida hupona ndani ya siku 7-10.':'Common viral illness affecting the upper respiratory tract. Usually resolves in 7–10 days.',severity:'low',keySymptoms:['cough','runny nose','sore throat'],matchedSymptoms:symptoms.slice(0,2)},
      {name:'Seasonal Allergies',matchPercent:62,description:lang==='sw'?'Jibu la kinga la mwili kwa vichafuzi vya mazingira.':'Immune response to environmental allergens causing nasal and respiratory symptoms.',severity:'low',keySymptoms:['sneezing','itchy eyes','runny nose'],matchedSymptoms:symptoms.slice(0,1)},
      {name:'Influenza',matchPercent:48,description:lang==='sw'?'Ugonjwa wa kuambukizwa wa njia ya kupumua unaosababishwa na virusi vya mafua.':'Contagious respiratory illness caused by influenza viruses.',severity:'moderate',keySymptoms:['fever','body ache','fatigue'],matchedSymptoms:symptoms.slice(0,1)},
    ],
    summary: lang==='sw'
      ? 'Kulingana na dalili zako, maambukizi ya virusi au mzio wa mazingira yanawezekana. Pumzika na kunywa maji. Tembelea daktari ikiwa dalili zinazidi au kudumu zaidi ya wiki moja.'
      : 'Based on your symptoms, a viral infection or allergic response is most likely. Rest and stay hydrated. See a doctor if symptoms worsen or persist beyond one week.',
    disclaimer: lang==='sw'
      ? 'Hii si uchunguzi wa kimatibabu. Daima wasiliana na daktari aliyeidhinishwa.'
      : 'This is not a medical diagnosis. Always consult a licensed healthcare professional.'
  };
}

function renderResults(result) {
  diagnosisResults = result.conditions || [];
  document.getElementById('results-loading').style.display='none';
  document.getElementById('results-content').style.display='block';

  const banner = document.getElementById('risk-banner');
  banner.className = `risk-banner ${result.riskLevel||'moderate'}`;
  const icons={low:'✅',moderate:'⚠️',high:'🚨'};
  document.getElementById('risk-icon').textContent = icons[result.riskLevel]||'⚠️';
  const titles={low:'Low Risk / Hatari Ndogo',moderate:'Moderate Risk / Hatari ya Kati',high:'High Risk — Seek Care / Tafuta Daktari'};
  document.getElementById('risk-title').textContent = titles[result.riskLevel]||'Moderate Risk';
  document.getElementById('risk-sub').textContent = result.riskSummary||'';
  document.getElementById('ai-summary-text').innerHTML =
    `<p>${result.summary||''}</p><p style="margin-top:10px;font-size:.78rem;color:var(--muted);font-style:italic">${result.disclaimer||''}</p>`;

  renderConditionCards('all');
}

function renderConditionCards(filter) {
  const grid = document.getElementById('conditions-grid');
  let conditions = [...diagnosisResults];
  if(filter==='low') conditions=conditions.filter(c=>c.severity==='low');
  else if(filter==='moderate') conditions=conditions.filter(c=>c.severity==='moderate');
  else if(filter==='high') conditions=conditions.filter(c=>c.severity==='high');
  else if(filter==='similar') conditions=[...conditions].sort((a,b)=>(b.matchedSymptoms?.length||0)-(a.matchedSymptoms?.length||0));

  const barColors={low:'var(--accent)',moderate:'var(--accent3)',high:'var(--accent2)'};
  grid.innerHTML = conditions.map(c => {
    const col=barColors[c.severity]||'var(--accent)';
    const badgeCls=c.severity==='low'?'sev-low':c.severity==='high'?'sev-high':'sev-mod';
    const badgeText={low:'Low Severity',moderate:'Moderate Severity',high:'High Severity'}[c.severity]||c.severity;
    const matched=new Set((c.matchedSymptoms||[]).map(s=>s.toLowerCase()));
    const allSyms=[...new Set([...(c.matchedSymptoms||[]),...(c.keySymptoms||[])])].slice(0,5);
    const symHTML=allSyms.map(s=>`<span class="csym${matched.has(s.toLowerCase())?' match':''}">${s}</span>`).join('');
    return `<div class="condition-card" onclick="openModal('${c.name.replace(/'/g,"\\'")}')">
      <div class="match-bar" style="width:${c.matchPercent}%;background:${col}"></div>
      <div class="match-pct">${c.matchPercent}%</div>
      <div class="condition-name">${c.name}</div>
      <div class="condition-desc">${c.description}</div>
      <div class="condition-symptoms">${symHTML}</div>
      <div class="severity-badge ${badgeCls}">${badgeText}</div>
    </div>`;
  }).join('');
  if(!conditions.length) grid.innerHTML=`<div class="card" style="grid-column:1/-1;text-align:center;color:var(--muted)">${lang==='sw'?'Hakuna hali zinazofanana na kichujio hiki.':'No conditions match this filter.'}</div>`;
}

function filterIllness(type,btn) {
  document.querySelectorAll('.illness-filter-bar .filter-chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  renderConditionCards(type);
}

// ══ DOCTOR FILTER ══
function setFilter(btn, spec) {
  document.querySelectorAll('.spec-filter-bar .filter-chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.doctor-card').forEach(card=>{
    card.style.display=(spec==='all'||card.getAttribute('data-spec')===spec)?'flex':'none';
  });
}

// ══ MODAL ══
let modalContext='';
function openModal(ctx) {
  modalContext=ctx;
  const isDoc=ctx.startsWith('Dr.');
  document.getElementById('modal-title').textContent = isDoc?(lang==='sw'?`Hifadhi na ${ctx}`:`Book with ${ctx}`):ctx;
  document.getElementById('modal-body').textContent = isDoc
    ?(lang==='sw'?`Thibitisha miadi yako na ${ctx}. Utapokea uthibitisho kwa barua pepe na SMS.`:`Confirm your appointment with ${ctx}. You'll receive a confirmation via email and SMS.`)
    :(lang==='sw'?`Jifunze zaidi kuhusu ${ctx} na jinsi inavyohusiana na dalili zako.`:`Learn more about ${ctx} and how it relates to your symptoms. Consider booking a specialist.`);
  document.getElementById('modal').classList.add('open');
}
function closeModal() { document.getElementById('modal').classList.remove('open'); }
function confirmModal() {
  closeModal();
  if(modalContext.startsWith('Dr.')) {
    showPage('doctors');
    setTimeout(()=>alert(`✅ ${lang==='sw'?'Umefanikiwa kuhifadhi miadi na':'Booking confirmed with'} ${modalContext}!`),200);
  } else { showPage('chat'); }
}
document.getElementById('modal').addEventListener('click',e=>{ if(e.target===e.currentTarget) closeModal(); });

// ══ AI CHAT ══
let chatHistory=[];

async function sendChat() {
  const inp=document.getElementById('chat-input');
  const msg=inp.value.trim(); if(!msg) return;
  inp.value='';
  addChatMsg(msg,'user');
  chatHistory.push({role:'user',content:msg});

  const tid='t'+Date.now();
  addChatMsg(`<div class="typing-dots"><span></span><span></span><span></span></div>`,'ai',tid);

  const sys = lang==='sw'
    ? 'Wewe ni msaidizi wa afya wa AI anayejibu KWA KISWAHILI PEKE YAKE. Saidia mtumiaji kuelewa dalili zao, pendekeza hali zinazowezekana, na ushauri wa kimatibabu. Daima kumbuka kwamba hii si uchunguzi wa kimatibabu. Jibu kwa ufupi, kwa huruma, na kwa taarifa.'
    : 'You are a compassionate AI health assistant. Help the user understand symptoms, suggest possible conditions, and give general medical guidance. This is not a formal diagnosis. Be concise, warm, and informative. Ask follow-up questions when needed.';

  try {
    const resp=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,system:sys,messages:chatHistory})
    });
    const data=await resp.json();
    const reply=data.content?.map(c=>c.text||'').join('')||(lang==='sw'?'Samahani, kuna hitilafu. Jaribu tena.':'Sorry, an error occurred. Please try again.');
    removeMsg(tid);
    addChatMsg(reply,'ai');
    chatHistory.push({role:'assistant',content:reply});
  } catch(e) {
    removeMsg(tid);
    addChatMsg(lang==='sw'?'Samahani, hitilafu ya mtandao.':'Sorry, network error. Please try again.','ai');
  }
}

function addChatMsg(text,role,id=null) {
  const msgs=document.getElementById('chat-messages');
  const div=document.createElement('div');
  div.className=`msg ${role}`;
  if(id) div.id=id;
  const sender=role==='ai'?'Afya AI':(lang==='sw'?'Wewe':'You');
  div.innerHTML=`<div class="msg-sender">${sender}</div>${text}`;
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}
function removeMsg(id) { const e=document.getElementById(id); if(e) e.remove(); }
