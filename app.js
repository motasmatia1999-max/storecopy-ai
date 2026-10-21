* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f5ff;
  --bg-soft: #eef2ff;
  --panel: #ffffff;
  --panel-alt: #f8f9ff;
  --primary: #4f46e5;
  --primary-dark: #3933c9;
  --secondary: #eef1ff;
  --text: #171d2f;
  --muted: #58627a;
  --line: #e6eaf5;
  --shadow: 0 20px 50px rgba(34, 43, 86, 0.12);
  --radius: 22px;
  --success: #1d9b7a;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Cairo", "Inter", sans-serif;
  background: linear-gradient(180deg, #f9faff 0%, #f3f5ff 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 88px 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(246, 248, 255, 0.82);
  backdrop-filter: blur(22px);
  border-bottom: 1px solid rgba(230, 234, 245, 0.9);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  background: linear-gradient(135deg, var(--primary), #7c6dfd);
  color: white;
  display: grid;
  place-items: center;
  font-weight: 900;
  box-shadow: 0 12px 26px rgba(79, 70, 229, 0.28);
}

.brand-name {
  font-weight: 800;
  letter-spacing: -0.04em;
  font-size: 1.08rem;
}

.main-nav,
.nav-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.main-nav {
  color: var(--muted);
  font-size: 0.96rem;
}

.link-btn {
  color: var(--text);
  font-weight: 700;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid transparent;
  padding: 13px 20px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 18px 30px rgba(79, 70, 229, 0.22);
}

.btn-secondary {
  background: white;
  border-color: var(--line);
  color: var(--text);
}

.full {
  width: 100%;
}

.hero {
  padding: 76px 0 36px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 42px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(79, 70, 229, 0.08);
  color: var(--primary-dark);
  border: 1px solid rgba(79, 70, 229, 0.13);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow.dark {
  background: rgba(23, 29, 47, 0.04);
  border-color: rgba(23, 29, 47, 0.09);
  color: var(--text);
}

h1 {
  margin: 18px 0 20px;
  font-size: clamp(2.6rem, 4vw, 4.7rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 0;
  font-size: 1.08rem;
  line-height: 1.8;
  color: var(--muted);
  max-width: 620px;
}

.cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.trial-banner {
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(29, 155, 122, 0.08);
  border: 1px solid rgba(29, 155, 122, 0.2);
  color: var(--success);
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  flex-wrap: wrap;
}

.trust-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 28px;
}

.trust-row div {
  display: grid;
  gap: 4px;
}

.trust-row strong {
  font-size: 1.4rem;
  letter-spacing: -0.04em;
}

.trust-row span {
  color: var(--muted);
  font-size: 0.88rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.window {
  width: min(100%, 500px);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.window-bar {
  background: #f2f5fd;
  border-bottom: 1px solid var(--line);
  padding: 14px 16px;
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  display: inline-block;
}

.dot.red { background: #ff6666; }
.dot.amber { background: #ffcc66; }
.dot.green { background: #58d68d; }

.window-body {
  padding: 22px 20px 20px;
  display: grid;
  gap: 14px;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--secondary);
  color: var(--primary-dark);
  font-weight: 700;
  font-size: 0.8rem;
}

.mini-box {
  background: rgba(243, 245, 255, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
}

.mini-label {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mini-box h3 {
  margin: 0;
  font-size: 1.35rem;
  letter-spacing: -0.04em;
}

.mini-box p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.logos-strip {
  background: rgba(255, 255, 255, 0.35);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 20px 0;
}

.logos-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
  font-weight: 700;
  flex-wrap: wrap;
}

.logo-list {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  color: rgba(23, 29, 47, 0.72);
}

.logo-list span {
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 999px;
}

.section-head {
  margin-bottom: 28px;
}

.section-head.center {
  text-align: center;
}

.section-head.left {
  text-align: left;
}

.section-head h2 {
  margin: 16px 0 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.feature-card,
.use-case-card,
.price-card,
.faq-item,
.generator-panel,
.result-panel {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: 0 16px 30px rgba(24, 31, 54, 0.04);
}

.feature-card {
  padding: 24px 20px;
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 1.55rem;
  background: rgba(79, 70, 229, 0.08);
  margin-bottom: 16px;
}

.feature-card h3,
.use-case-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.feature-card p,
.use-case-card p,
.faq-item p,
.price-card li,
.result-group p,
.result-group li {
  margin: 0;
  color: var(--muted);
  line-height: 1.72;
}

.generator-section {
  background: linear-gradient(180deg, rgba(238, 241, 255, 0.35), rgba(255, 255, 255, 0.2));
}

.generator-grid {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 22px;
  align-items: flex-start;
}

.generator-panel,
.result-panel {
  padding: 28px;
}

.trial-box {
  margin-top: 18px;
  background: rgba(79, 70, 229, 0.05);
  border: 1px solid rgba(79, 70, 229, 0.12);
  border-radius: 14px;
  padding: 12px 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-dark);
  font-weight: 700;
}

.copy-form {
  display: grid;
  gap: 18px;
  margin-top: 20px;
}

label {
  display: grid;
  gap: 10px;
  color: var(--text);
  font-weight: 600;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fafbff;
  color: var(--text);
  padding: 14px 16px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: rgba(79, 70, 229, 0.6);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.08);
}

.two-col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.result-box {
  display: grid;
  gap: 22px;
  margin-top: 20px;
}

.result-group {
  display: grid;
  gap: 10px;
}

.result-label {
  margin: 0;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-size: 0.76rem;
  font-weight: 700;
}

#headlineOutput,
#descriptionOutput,
#adOutput {
  margin: 0;
  line-height: 1.62;
}

#descriptionOutput,
#adOutput {
  color: var(--muted);
}

#bulletsOutput {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 8px;
}

.result-actions {
  display: flex;
  justify-content: flex-end;
}

.use-case-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.use-case-card {
  padding: 22px 20px;
}

.use-case-card span {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(79, 70, 229, 0.08);
  color: var(--primary-dark);
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.price-card {
  padding: 28px 22px;
  position: relative;
}

.price-card.highlight {
  border-color: rgba(79, 70, 229, 0.28);
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.12);
  transform: translateY(-4px);
}

.popular {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--primary);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 999px;
}

.plan-name {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.price {
  font-size: 2.25rem;
  letter-spacing: -0.06em;
  font-weight: 900;
  margin-bottom: 18px;
}

.price span {
  font-size: 0.88rem;
  color: var(--muted);
  font-weight: 600;
}

.price-card ul {
  list-style: none;
  margin: 0 0 22px;
  padding: 0;
  display: grid;
  gap: 10px;
}

.price-card li {
  position: relative;
  padding-left: 24px;
}

.price-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: 800;
}

.faq-list {
  display: grid;
  gap: 14px;
  max-width: 980px;
  margin: 0 auto;
}

.faq-item {
  padding: 22px 24px;
}

.faq-item h3 {
  margin: 0 0 8px;
  font-size: 1.08rem;
}

.site-footer {
  padding: 18px 0 30px;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid var(--line);
  padding-top: 20px;
  color: var(--muted);
  flex-wrap: wrap;
}

.footer-brand {
  font-weight: 800;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(17, 22, 36, 0.52);
  display: grid;
  place-items: center;
  padding: 18px;
  z-index: 50;
}

.modal.hidden {
  display: none;
}

.modal-box {
  width: min(520px, 100%);
  background: white;
  border-radius: 24px;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  padding: 24px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.close-btn {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--panel-alt);
  font-size: 1.4rem;
  cursor: pointer;
}

.modal-box p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.8;
}

.modal-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

@media (max-width: 960px) {
  .feature-grid,
  .pricing-grid,
  .use-case-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-grid,
  .generator-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .main-nav {
    display: none;
  }

  .nav-wrap {
    justify-content: space-between;
  }

  .feature-grid,
  .pricing-grid,
  .use-case-grid,
  .two-col {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
  }

  .cta-row .btn,
  .nav-actions .btn {
    width: 100%;
  }

  .nav-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .trust-row {
    gap: 14px 26px;
  }

  .logos-wrap {
    justify-content: center;
  }

  .window {
    width: 100%;
  }

  .modal-actions {
    flex-direction: column;
  }
}
