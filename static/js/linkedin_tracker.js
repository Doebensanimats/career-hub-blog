const DAYS = [
  {
    title:"Reintroduction post",goal:"Reset how LinkedIn categorizes you",tag:"positioning",tagClass:"amber",
    post:`I am transitioning from 8+ years in medical laboratory science into AI automation and technical support engineering.

My focus now is building and debugging real-world systems using Python, AWS, and automation tools.

I don't just write code — I diagnose systems, fix failures, and optimize reliability.

Recent projects include AI translation systems, voice assistants, and workflow automation tools.

I am currently open to remote roles in AI automation and technical support engineering.`,
    targets:[
      {text:"Publish reintroduction post before 9am",type:"post"},
      {text:"Add graphic: 'AI Automation | Python | AWS'",type:"design"},
      {text:"Update LinkedIn headline to match post keywords",type:"profile"},
      {text:"Comment on 5+ posts from AI engineers or recruiters",type:"engage"}
    ]
  },
  {
    title:"Project breakdown: LinguaFlow",goal:"Demonstrate technical depth publicly",tag:"technical proof",tagClass:"teal",
    post:`Building LinguaFlow taught me one thing: real systems don't fail in obvious ways.

Key challenges I solved:
• API latency in the translation pipeline
• Speech-to-text inconsistency under load
• Workflow synchronization issues

Solution approach:
• Structured debugging logs
• Async request handling
• API optimization and retry logic

Outcome: stable real-time translation pipeline.`,
    targets:[
      {text:"Attach a screenshot or architecture diagram to post",type:"design"},
      {text:"Link to GitHub repo in first comment",type:"technical"},
      {text:"Tag relevant tools: AWS, Python in post body",type:"post"},
      {text:"Comment on 5+ posts from SaaS engineers",type:"engage"}
    ]
  },
  {
    title:"Debugging mindset post",goal:"Position as engineer, not just career changer",tag:"problem-solving",tagClass:"blue",
    post:`In medical labs, a wrong result isn't a bug — it's a failure in the system.

That mindset shaped how I debug software today:

• Identify anomaly
• Trace root cause
• Validate system integrity

Whether it's lab diagnostics or APIs, the thinking is the same.`,
    targets:[
      {text:"Keep post under 150 words for best reach",type:"post"},
      {text:"End with question: 'What's your debugging process?'",type:"engage"},
      {text:"Reply to every comment within 2 hours",type:"engage"},
      {text:"Comment on 5+ posts from technical leads",type:"engage"}
    ]
  },
  {
    title:"AWS voice assistant build",goal:"Show real cloud engineering skills",tag:"technical proof",tagClass:"teal",
    post:`Technical breakdown: AWS voice assistant

• AWS Transcribe pipeline setup
• Async processing to handle real-time load
• Solved streaming desync under heavy input

The hardest part wasn't the code.
It was understanding how failure propagates in a live audio stream.

I build systems that must work under real-time pressure.`,
    targets:[
      {text:"Include code snippet or architecture screenshot",type:"technical"},
      {text:"Mention AWS Transcribe by name — recruiter keyword",type:"post"},
      {text:"Push updated code to GitHub before posting",type:"technical"},
      {text:"Comment on 5+ posts from cloud engineers",type:"engage"}
    ]
  },
  {
    title:"Before vs after transition",goal:"Make your career pivot relatable and shareable",tag:"positioning",tagClass:"amber",
    post:`Before: medical laboratory scientist
After: AI automation builder

The tools changed. The thinking didn't.

Manual diagnostics → system debugging
Lab QC protocols → API reliability testing
Result validation → output integrity checks

Every skill transferred. I just had to see it that way.`,
    targets:[
      {text:"Create a simple split graphic (before/after)",type:"design"},
      {text:"Add hashtags: #CareerChange #TechTransition #AIEngineering",type:"post"},
      {text:"Send 5 connection requests to career-changers in tech",type:"engage"},
      {text:"Comment on 5+ career transition posts",type:"engage"}
    ]
  },
  {
    title:"Mini technical insight",goal:"Build consistent technical voice",tag:"technical proof",tagClass:"teal",
    post:`Most API failures aren't code problems.
They're timing problems.

When a request hits a slow downstream service, your code looks broken — but it isn't.

Fixes I've used:
• Timeout thresholds + retry logic
• Async queuing for non-blocking calls
• Logging latency per endpoint, not just errors

Debugging is about asking better questions, not writing more code.`,
    targets:[
      {text:"Post between 7–9am or 5–7pm for max reach",type:"post"},
      {text:"End with: 'What timing issues have you hit?'",type:"engage"},
      {text:"Share to 2 relevant LinkedIn groups",type:"engage"},
      {text:"Comment on 5+ posts from backend developers",type:"engage"}
    ]
  },
  {
    title:"Soft CTA post",goal:"Signal open availability to recruiters",tag:"positioning",tagClass:"amber",
    post:`I am actively looking for remote roles in AI automation or technical support engineering.

If your team needs someone who can debug, build, and stabilize systems — let's connect.

Open to: L2/L3 support engineering, backend automation, AI pipeline work.`,
    targets:[
      {text:"Add #OpenToWork in first comment (not post body)",type:"post"},
      {text:"Pin this post to your profile after publishing",type:"profile"},
      {text:"Send 10 connection requests to recruiters today",type:"engage"},
      {text:"Reply to every comment within 1 hour",type:"engage"}
    ]
  },
  {
    title:"Client intake automation system",goal:"Show workflow automation skills",tag:"technical proof",tagClass:"teal",
    post:`Automation project: client intake system

The problem: manual form processing, data scattered across inboxes, delays in routing.

What I built:
• Automated intake form → structured data pipeline
• Logic-based routing to the right team
• Audit trail for every submission

Result: reduced manual handling time significantly.

Automation isn't about replacing steps — it's about removing the ones that shouldn't exist.`,
    targets:[
      {text:"Share a workflow diagram of the system",type:"design"},
      {text:"Mention the stack used: Python, Zapier, etc.",type:"technical"},
      {text:"Tag a SaaS founder or product engineer",type:"engage"},
      {text:"Comment on 5+ automation or workflow posts",type:"engage"}
    ]
  },
  {
    title:"Problem-solving story: lab → tech",goal:"Build emotional connection with narrative",tag:"problem-solving",tagClass:"blue",
    post:`A misdiagnosis in a lab and a broken API share one thing: hidden failure points.

In labs, we chase the anomaly until we find what triggered it — never assume the instrument is wrong without proof.

I apply the same method when a pipeline breaks silently:

1. Reproduce the failure
2. Isolate the variable
3. Validate the fix before closing

The method doesn't care what the system is. It just works.`,
    targets:[
      {text:"Don't rush to the technical conclusion — let the story breathe",type:"post"},
      {text:"End with: 'What's your debugging philosophy?'",type:"engage"},
      {text:"Comment on 5+ engineering story posts",type:"engage"},
      {text:"DM 3 recruiters who viewed your profile this week",type:"engage"}
    ]
  },
  {
    title:"Technical opinion post",goal:"Build authority with a strong point of view",tag:"technical proof",tagClass:"teal",
    post:`Most automation systems fail not because of bad code — but because of missing edge-case thinking.

The happy path gets tested. The edge cases get ignored.

What breaks in production:
• Null inputs from unexpected user behavior
• Third-party API format changes
• Timeout collisions during peak load

Test the failure modes, not just the features.`,
    targets:[
      {text:"Take a clear stance — don't hedge the opinion",type:"post"},
      {text:"Invite debate: 'Do you agree? What would you add?'",type:"engage"},
      {text:"Comment on 5+ posts from senior engineers",type:"engage"},
      {text:"Update GitHub with any recent code today",type:"technical"}
    ]
  },
  {
    title:"Build-in-public update",goal:"Show active ongoing development",tag:"technical proof",tagClass:"teal",
    post:`Small update on a current build:

Fixed an edge case where the translation queue would silently drop requests under high concurrency.

Root cause: task lock timeout wasn't surfaced in the main error handler.

Fix: explicit timeout propagation + queue health monitoring.

GitHub updated. System is stable.

Shipping in public keeps me honest.`,
    targets:[
      {text:"Link to the specific GitHub commit",type:"technical"},
      {text:"Add hashtags: #BuildInPublic #Python #AWS",type:"post"},
      {text:"Comment on 5+ build-in-public posts",type:"engage"},
      {text:"Reply to anyone who comments within 1 hour",type:"engage"}
    ]
  },
  {
    title:"System thinking breakdown",goal:"Demonstrate L2/L3 support engineering thinking",tag:"problem-solving",tagClass:"blue",
    post:`How I approach a broken system:

1. Don't touch anything first — observe the failure
2. Check logs before assumptions
3. Isolate: is this input, logic, or output?
4. Reproduce in a controlled environment
5. Fix one variable at a time
6. Validate before calling it resolved

This isn't just debugging. It's how reliable systems stay reliable.`,
    targets:[
      {text:"Numbered posts get higher engagement — keep the format clean",type:"post"},
      {text:"Add: 'What step do most engineers skip?' for replies",type:"engage"},
      {text:"Comment on 5+ posts from support engineering roles",type:"engage"},
      {text:"Search LinkedIn for L2/L3 job openings and save 3",type:"job-hunt"}
    ]
  },
  {
    title:"Recruiter target post",goal:"Maximize inbound recruiter messages",tag:"positioning",tagClass:"amber",
    post:`Looking for roles in:

• AI Automation Engineering
• Technical Support Engineering (L2/L3)
• Backend Support Systems
• Remote-first SaaS teams

Skills: Python · AWS · Debugging · API integration · Workflow automation

If you're hiring or know someone who is — I'd appreciate the intro.`,
    targets:[
      {text:"Pin this post to profile immediately after publishing",type:"profile"},
      {text:"Send 10+ connection requests to recruiters today",type:"engage"},
      {text:"Update your LinkedIn 'Open to Work' settings",type:"profile"},
      {text:"Comment on 5+ recruiter posts",type:"engage"}
    ]
  },
  {
    title:"Final authority post",goal:"Close 14 days with a strong lasting impression",tag:"positioning",tagClass:"amber",
    post:`I don't just transition into tech.

I build systems, break them, fix them, and improve them until they scale.

Over the past two weeks I've shared the builds, the debugging methods, and the thinking behind the work.

If you need someone who can hold a system together under pressure — I'm ready.

Open to remote roles in AI automation and technical support engineering.`,
    targets:[
      {text:"Share in 2–3 relevant LinkedIn groups",type:"engage"},
      {text:"Ask 3 connections to like it within the first hour",type:"engage"},
      {text:"Update your headline to match this post's message",type:"profile"},
      {text:"Send personalized notes to top 5 recruiter connections",type:"job-hunt"}
    ]
  }
];

const typeColors = {
  post: "#1D9E75", engage: "#378ADD", technical: "#EF9F27",
  design: "#D4537E", profile: "#7F77DD", "job-hunt": "#5DCAA5"
};

let state = {
  currentDay: 0,
  currentWeek: 1,
  doneDays: new Set(),
  checkedTargets: {},
  counters: { c1: 0, c2: 0, c3: 0 }
};

function load() {
  try {
    const s = localStorage.getItem('careerhub_li14');
    if (s) {
      const p = JSON.parse(s);
      state.doneDays = new Set(p.doneDays || []);
      state.checkedTargets = p.checkedTargets || {};
      state.counters = p.counters || { c1:0, c2:0, c3:0 };
      state.currentDay = p.currentDay || 0;
    }
  } catch(e) {}
}

function save() {
  try {
    localStorage.setItem('careerhub_li14', JSON.stringify({
      doneDays: [...state.doneDays],
      checkedTargets: state.checkedTargets,
      counters: state.counters,
      currentDay: state.currentDay
    }));
  } catch(e) {}
}

function setWeek(w) {
  state.currentWeek = w;
  document.getElementById('w1-btn').classList.toggle('active', w === 1);
  document.getElementById('w2-btn').classList.toggle('active', w === 2);
  document.getElementById('week-label').textContent = w === 1 ? 'days 1–7' : 'days 8–14';
  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById('days-grid');
  grid.innerHTML = '';
  const start = state.currentWeek === 1 ? 0 : 7;
  for (let i = start; i < start + 7; i++) {
    const d = document.createElement('div');
    d.className = 'day-cell'
      + (state.doneDays.has(i) ? ' done' : '')
      + (state.currentDay === i ? ' active' : '');
    d.innerHTML = `<div class="dc-num">Day ${i+1}</div><div class="dc-dot"></div><div class="dc-check"><svg viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
    d.onclick = () => { state.currentDay = i; renderGrid(); renderPanel(); };
    grid.appendChild(d);
  }
}

function renderPanel() {
  const d = DAYS[state.currentDay];
  document.getElementById('dp-daynum').textContent = 'day ' + (state.currentDay + 1);
  document.getElementById('dp-title').textContent = d.title;
  document.getElementById('dp-goal').textContent = 'Goal: ' + d.goal;
  const tag = document.getElementById('dp-tag');
  tag.textContent = d.tag;
  tag.className = 'dp-tag ' + d.tagClass;
  document.getElementById('dp-post').textContent = d.post;

  const key = 'day_' + state.currentDay;
  const checked = state.checkedTargets[key] || {};
  const list = document.getElementById('targets-list');
  list.innerHTML = '';
  d.targets.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'target-item';
    const isChecked = !!checked[i];
    li.innerHTML = `
      <div class="target-check ${isChecked ? 'checked' : ''}" onclick="toggleTarget(${i})">
        <svg viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div>
        <div class="target-text ${isChecked ? 'done-text' : ''}">${t.text}</div>
        <div class="target-type" style="color:${typeColors[t.type] || '#7a7a72'}">${t.type}</div>
      </div>`;
    list.appendChild(li);
  });

  const markBtn = document.getElementById('mark-done');
  const isDone = state.doneDays.has(state.currentDay);
  markBtn.textContent = isDone ? 'day complete ✓' : 'mark day complete';
  markBtn.className = 'mark-done-btn' + (isDone ? ' done-state' : '');

  updateStats();
}

window.toggleTarget = function(i) {
  const key = 'day_' + state.currentDay;
  if (!state.checkedTargets[key]) state.checkedTargets[key] = {};
  state.checkedTargets[key][i] = !state.checkedTargets[key][i];
  save();
  renderPanel();
};

window.toggleDayDone = function() {
  if (state.doneDays.has(state.currentDay)) state.doneDays.delete(state.currentDay);
  else state.doneDays.add(state.currentDay);
  save();
  renderGrid();
  renderPanel();
};

window.navDay = function(dir) {
  state.currentDay = Math.max(0, Math.min(13, state.currentDay + dir));
  state.currentWeek = state.currentDay < 7 ? 1 : 2;
  setWeek(state.currentWeek);
  renderPanel();
};

window.copyPost = function() {
  navigator.clipboard.writeText(DAYS[state.currentDay].post).then(() => {
    const btn = document.getElementById('copy-btn');
    btn.textContent = 'copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'copy post'; btn.classList.remove('copied'); }, 2000);
  });
};

window.bump = function(id, delta) {
  const maxes = { c1: 10, c2: 10, c3: 20 };
  state.counters[id] = Math.max(0, Math.min(maxes[id], (state.counters[id] || 0) + delta));
  save();
  renderCounters();
  updateStats();
};

function renderCounters() {
  const targets = { c1: 5, c2: 5, c3: 10 };
  ['c1', 'c2', 'c3'].forEach(id => {
    const v = state.counters[id] || 0;
    document.getElementById(id + '-val').textContent = v;
    document.getElementById(id + '-bar').style.width = Math.min(100, Math.round(v / targets[id] * 100)) + '%';
  });
}

function updateStats() {
  const done = state.doneDays.size;
  const pct = Math.round((done / 14) * 100);
  document.getElementById('stat-days').innerHTML = done + ' <span>/ 14</span>';
  document.getElementById('global-fill').style.width = pct + '%';
  document.getElementById('pct-label').textContent = pct + '%';

  let tasks = 0;
  Object.values(state.checkedTargets).forEach(obj => {
    tasks += Object.values(obj).filter(Boolean).length;
  });
  document.getElementById('stat-tasks').innerHTML = tasks + ' <span>/ 56</span>';
  document.getElementById('stat-comments').innerHTML = (state.counters.c1 || 0) + ' <span>/ day</span>';

  let streak = 0;
  for (let i = done - 1; i >= 0; i--) {
    if (state.doneDays.has(i)) streak++;
    else break;
  }
  document.getElementById('stat-streak').innerHTML = streak + ' <span>days</span>';
}

// ── Init ──────────────────────────────────────────────────────────────────
load();
document.getElementById('today-date').textContent =
  new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
setWeek(state.currentDay < 7 ? 1 : 2);
renderPanel();
renderCounters();
