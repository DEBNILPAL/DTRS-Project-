/**
 * DTRS - Dynamic Train Rescheduling System
 * Dynamic Renderer & UI Interactions using config.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Clock (IST)
  const liveClockEl = document.getElementById('live-clock');
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    if (liveClockEl) {
      liveClockEl.textContent = `${hours}:${minutes}:${seconds} IST`;
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 2. Render Cards from config.js
  if (typeof DTRS_CONFIG !== 'undefined') {
    renderSection('deployments-grid', DTRS_CONFIG.deployments || [], 'cyan');
    renderSection('githubs-grid', DTRS_CONFIG.githubs || [], 'purple');
    renderSection('simulators-grid', DTRS_CONFIG.simulators || [], 'amber');

    // Update Telemetry Counts
    const countDeployments = document.getElementById('count-deployments');
    const countGithubs = document.getElementById('count-githubs');
    const countSimulators = document.getElementById('count-simulators');

    if (countDeployments) countDeployments.textContent = `${(DTRS_CONFIG.deployments || []).length} Live`;
    if (countGithubs) countGithubs.textContent = `${(DTRS_CONFIG.githubs || []).length} Public`;
    if (countSimulators) countSimulators.textContent = `${(DTRS_CONFIG.simulators || []).length} Active`;

    // Render Contact Emails in Footer
    renderFooterEmails(DTRS_CONFIG.emails);
  }

  function renderSection(containerId, items, theme) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(item => {
      const urlDisplay = escapeHtml(item.url);
      const title = escapeHtml(item.title);
      const desc = escapeHtml(item.description);
      const platform = escapeHtml(item.platform);
      const status = escapeHtml(item.status);

      let statusBadgeHtml = '';
      if (theme === 'cyan') {
        statusBadgeHtml = `<span class="status-indicator-tag green"><span class="signal-bulb signal-green"></span> ${status}</span>`;
      } else if (theme === 'purple') {
        statusBadgeHtml = `<span class="status-indicator-tag purple">${status}</span>`;
      } else {
        statusBadgeHtml = `<span class="status-indicator-tag amber"><span class="signal-bulb signal-amber"></span> ${status}</span>`;
      }

      return `
        <article class="hub-card card-${theme}" data-id="${item.id || ''}">
          <div class="card-accent-rail ${theme}"></div>
          <div class="card-top">
            <span class="platform-tag">${platform}</span>
            ${statusBadgeHtml}
          </div>

          <div class="card-content">
            <h3 class="card-title">${title}</h3>
            <p class="card-text">${desc}</p>
          </div>

          <div class="card-url-container">
            <span class="url-label">${theme.toUpperCase()} URL:</span>
            <div class="url-display mono-text" title="${urlDisplay}">
              ${urlDisplay}
            </div>
          </div>

          <div class="card-bottom">
            <a href="${item.url}" class="launch-btn btn-${theme}" target="_blank" rel="noopener noreferrer">
              <span>Launch Site</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderFooterEmails(emails) {
    const footerEmailsEl = document.getElementById('footer-emails');
    if (!footerEmailsEl) return;
    if (!emails || (!emails.projectLead && !emails.technicalSupport)) {
      footerEmailsEl.innerHTML = `<span class="mono-text" style="color: var(--text-dim); font-size: 0.78rem;">CENTRAL STATION DISPATCH PORTAL</span>`;
      return;
    }

    footerEmailsEl.innerHTML = `
      <div class="footer-contact-group">
        <span class="contact-label">CONTACT:</span>
        ${emails.projectLead ? `<a href="mailto:${escapeHtml(emails.projectLead)}" class="footer-email-link mono-text" title="Project Lead Email">${escapeHtml(emails.projectLead)}</a>` : ''}
        ${emails.projectLead && emails.technicalSupport ? `<span class="footer-dot">&bull;</span>` : ''}
        ${emails.technicalSupport ? `<a href="mailto:${escapeHtml(emails.technicalSupport)}" class="footer-email-link mono-text" title="Support Email">${escapeHtml(emails.technicalSupport)}</a>` : ''}
      </div>
    `;
  }

  // 3. Attach Card Click Navigation & 3D Interactive Hover Physics
  const cards = document.querySelectorAll('.hub-card');

  cards.forEach(card => {
    const launchLink = card.querySelector('.launch-btn');
    const targetUrl = launchLink ? launchLink.getAttribute('href') : null;

    if (!targetUrl) return;

    card.style.cursor = 'pointer';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');

    // Click on card navigates to target URL
    card.addEventListener('click', (e) => {
      if (e.target.closest('.launch-btn')) return;

      card.style.transform = 'scale(0.98)';
      setTimeout(() => {
        card.style.transform = '';
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }, 120);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    });

    // 3D Tilt Effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
