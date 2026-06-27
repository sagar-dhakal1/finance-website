// ============ TICKER ============
const TICKERS = [
  ['S&P 500', '5832.10', 0.42],
  ['NASDAQ', '18966.13', 0.81],
  ['DOW', '43210.45', -0.12],
  ['BTC', '67430.20', 1.24],
  ['ETH', '3520.18', 0.66],
  ['GOLD', '2710.30', 0.18],
  ['OIL', '70.45', -0.55],
  ['EUR/USD', '1.0842', 0.05],
  ['USD/JPY', '154.22', -0.21],
  ['10Y YIELD', '4.31%', 0.03],
  ['VIX', '15.62', -1.10],
  ['AAPL', '232.18', 0.92],
  ['MSFT', '418.55', 0.34],
  ['NVDA', '142.10', 2.15],
  ['BRK.B', '462.30', 0.41],
];
function buildTicker() {
  const line = TICKERS.map(([s, p, c]) => {
    const cls = c >= 0 ? 'up' : 'down';
    const arrow = c >= 0 ? '▲' : '▼';
    return `<span class="item"><span class="sym">${s}</span>${p} <span class="${cls}">${arrow} ${Math.abs(c).toFixed(2)}%</span></span>`;
  }).join('');
  document.getElementById('ticker').innerHTML = line + line;
}
buildTicker();

// ============ INTERESTS ============
const INTERESTS = [
  ['Financial Analysis', 'My lens for understanding the world — ratios, models, and the narrative behind every number.'],
  ['Investing', 'How I think about patience, risk, and compounding — in markets and in life.'],
  ['Corporate Finance', 'Capital structure, M&A, and the decisions that move money inside companies.'],
  ['Accounting', 'The language of business. I read footnotes the way others read headlines.'],
  ['Economics', 'Why things cost what they cost, and where the world might be heading next.'],
  ['Technology', 'AI, fintech, and the platforms quietly reshaping how we live and invest.'],
  ['Books', 'Fiction and non-fiction. I believe in compounding knowledge, not just capital.'],
  ['Data Analysis', 'Excel, SQL, Python — tools for turning curiosity into better questions.'],
];
document.getElementById('interests').innerHTML = INTERESTS.map(([t, d]) =>
  `<div class="card"><h3>${t}</h3><p>${d}</p></div>`).join('');

// ============ CHIPS ============
const CHIPS = ['AI and Finance','Behavioral Economics','Emerging Markets','Business Models','Venture Capital','Fiction & Storytelling','Productivity Systems','Network Effects'];
document.getElementById('chips').innerHTML = CHIPS.map(c => `<span class="chip">${c}</span>`).join('');

// ============ GARDEN ============
const NODES = [
  { id: 'Finance', x: 50, y: 50 },
  { id: 'Accounting', x: 22, y: 30 },
  { id: 'Investing', x: 78, y: 30 },
  { id: 'Economics', x: 18, y: 72 },
  { id: 'Psychology', x: 82, y: 72 },
  { id: 'Technology', x: 50, y: 14 },
  { id: 'Data', x: 50, y: 88 },
];
const EDGES = [
  ['Finance','Accounting'],['Finance','Investing'],['Finance','Economics'],
  ['Finance','Psychology'],['Finance','Technology'],['Finance','Data'],
  ['Investing','Psychology'],['Investing','Technology'],['Accounting','Data'],
  ['Economics','Psychology'],['Technology','Data'],
];
function renderGarden(active) {
  const svg = document.getElementById('garden-svg');
  svg.innerHTML = EDGES.map(([a,b]) => {
    const A = NODES.find(n=>n.id===a), B = NODES.find(n=>n.id===b);
    const on = active === a || active === b;
    return `<line x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}" stroke="${on?'#34d399':'rgba(255,255,255,0.12)'}" stroke-width="${on?0.35:0.18}" vector-effect="non-scaling-stroke"/>`;
  }).join('');
  const garden = document.getElementById('garden');
  garden.querySelectorAll('.node').forEach(n => n.remove());
  NODES.forEach(n => {
    const btn = document.createElement('button');
    btn.className = 'node' + (active === n.id ? ' active' : '');
    btn.style.left = n.x + '%';
    btn.style.top = n.y + '%';
    btn.textContent = n.id;
    btn.onmouseenter = () => renderGarden(n.id);
    btn.onmouseleave = () => renderGarden(null);
    garden.appendChild(btn);
  });
}
renderGarden(null);

// ============ PROJECTS ============
const PROJECTS = [
  ['DCF Model — Coca-Cola', 'A reverse-DCF on KO probing the assumptions behind the current price.', 'Valuation · Excel'],
  ['Bank Earnings Dashboard', 'Python + SQL pipeline tracking NIM, efficiency, and credit costs across 10 US banks.', 'Python · SQL'],
  ['Working Capital Tracker', 'Sheet that watches inventory and receivables velocity for a coverage list.', 'Excel'],
  ['Footnote Forensics', 'Notes from reading 25 10-Ks, flagging accounting choices that quietly moved earnings.', 'Research'],
  ['Macro Cheatsheet', 'A one-pager I update monthly: rates, FX, credit, commodities.', 'Markets'],
  ['Reading Stats', 'A small site tracking what I read in finance vs fiction each quarter.', 'JS · Data'],
];
document.getElementById('projects-grid').innerHTML = PROJECTS.map(([t,d,tag]) =>
  `<div class="card"><h3>${t}</h3><p>${d}</p><p class="kicker" style="margin-top:14px">${tag}</p></div>`).join('');

// ============ EXPERIENCE ============
const EXP = [
  ['2025 — Present', 'Independent Research', 'Writing equity notes, building models, and publishing what I learn.'],
  ['2024 — 2025', 'Finance Club, University', 'Led valuation workshops and a stock-pitch competition for first-years.'],
  ['Summer 2024', 'Audit Intern (Local Firm)', 'Tested controls and reviewed reconciliations for SME clients.'],
  ['2023 — 2024', 'Teaching Assistant — Accounting', 'Helped run problem sessions for the introductory accounting course.'],
];
document.getElementById('timeline').innerHTML = EXP.map(([w,t,d]) =>
  `<li><div class="when">${w}</div><h3>${t}</h3><p>${d}</p></li>`).join('');

// ============ RESEARCH ============
const RESEARCH = [
  ['What the Cash Flow Statement Actually Tells You', '8 min read · Accounting'],
  ['Reading a Bank: The 5 Numbers That Matter', '12 min read · Investing'],
  ['Reverse-DCFs as a Thinking Tool', '6 min read · Valuation'],
  ['Why Most Multiples Are Lying to You', '9 min read · Markets'],
  ['Footnotes I Always Read First', '7 min read · Accounting'],
];
document.getElementById('research-list').innerHTML = RESEARCH.map(([t,m]) =>
  `<a href="#" class="row"><h3>${t}</h3><span class="meta">${m}</span></a>`).join('');

// ============ BOOKS ============
const BOOKS = [
  ['The Intelligent Investor', 'Benjamin Graham', 'Re-reading'],
  ['Poor Charlie\'s Almanack', 'Charlie Munger', 'Finished'],
  ['Financial Shenanigans', 'Howard Schilit', 'Reading'],
  ['Thinking, Fast and Slow', 'Daniel Kahneman', 'Finished'],
  ['The Outsiders', 'William Thorndike', 'Finished'],
  ['Norwegian Wood', 'Haruki Murakami', 'Fiction'],
];
document.getElementById('books-grid').innerHTML = BOOKS.map(([t,a,s]) =>
  `<div class="card"><p class="kicker">${s}</p><h3 style="color:var(--fg)">${t}</h3><p>${a}</p></div>`).join('');

// ============ LEARNING ============
const LEARNING = [
  ['DCF & Multiples', 'Building intuition by valuing 1 company per week.'],
  ['SQL for Finance', 'Querying EDGAR data and bank call reports.'],
  ['Python for Analysis', 'pandas, plotly, simple scrapers for fundamentals.'],
  ['CFA Level I (self-study)', 'Ethics, FRA, and quant — slow and steady.'],
  ['Writing', 'One short essay every two weeks. Clarity over cleverness.'],
  ['Mental Models', 'Borrowed from Munger, Kahneman, and Taleb.'],
];
document.getElementById('learning-grid').innerHTML = LEARNING.map(([t,d]) =>
  `<div class="card"><h3>${t}</h3><p>${d}</p></div>`).join('');

// ============ QUOTES ============
const QUOTES = [
  ["The stock market is a device for transferring money from the impatient to the patient.", "Warren Buffett"],
  ["All I want to know is where I'm going to die, so I'll never go there.", "Charlie Munger"],
  ["What gets measured gets managed.", "Peter Drucker"],
  ["Play long-term games with long-term people.", "Naval Ravikant"],
  ["Risk comes from not knowing what you're doing.", "Warren Buffett"],
];
let qi = 0;
function showQuote(i) {
  qi = i;
  document.getElementById('quote-text').textContent = QUOTES[i][0];
  document.getElementById('quote-author').textContent = '— ' + QUOTES[i][1];
  document.querySelectorAll('#quote-dots button').forEach((b, idx) => b.classList.toggle('on', idx === i));
}
document.getElementById('quote-dots').innerHTML = QUOTES.map((_, i) => `<button data-i="${i}" aria-label="Quote ${i+1}"></button>`).join('');
document.querySelectorAll('#quote-dots button').forEach(b => b.onclick = () => showQuote(+b.dataset.i));
showQuote(0);
setInterval(() => showQuote((qi + 1) % QUOTES.length), 6000);

// ============ CONTACT ============
const LINKS = [
  ['Email', 'hello@yourdomain.info.np', 'mailto:hello@yourdomain.info.np'],
  ['LinkedIn', 'linkedin.com/in/yourname', 'https://linkedin.com'],
  ['GitHub', 'github.com/yourname', 'https://github.com'],
  ['X / Twitter', '@yourname', 'https://x.com'],
];
document.getElementById('contact-grid').innerHTML = LINKS.map(([k,v,h]) =>
  `<a class="card" href="${h}" target="_blank" rel="noreferrer"><div><div class="label">${k}</div><div class="val">${v}</div></div><span class="arrow">→</span></a>`).join('');

// ============ YEAR ============
document.getElementById('year').textContent = new Date().getFullYear();
