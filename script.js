/**
 * DTRS - Dynamic Train Rescheduling System
 * Consolidated Semi-Light Hub Dynamic Renderer & Interactions
 */

function initDTRSApp() {
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

  let activeFilter = 'all';
  let searchQuery = '';

  // 2. Initial Setup from config.js
  if (typeof DTRS_CONFIG !== 'undefined') {
    initHub();
  }

  function initHub() {
    const deployments = DTRS_CONFIG.deployments || [];
    const simulators = DTRS_CONFIG.simulators || [];
    const githubs = DTRS_CONFIG.githubs || [];
    const totalCount = deployments.length + simulators.length + githubs.length;

    // Update Counts in Filter Tabs
    setTextContent('count-all', totalCount);
    setTextContent('tab-count-deployments', deployments.length);
    setTextContent('tab-count-simulators', simulators.length);
    setTextContent('tab-count-githubs', githubs.length);

    // Update Metrics Summary Ribbon
    setTextContent('metric-deployments', deployments.length);
    setTextContent('metric-simulators', simulators.length);
    setTextContent('metric-githubs', githubs.length);

    // Update Telemetry Status Strip
    setTextContent('count-deployments', `${deployments.length} Live`);
    setTextContent('count-simulators', `${simulators.length} Active`);
    setTextContent('count-githubs', `${githubs.length} Public`);

    // Render Contact Emails in Footer
    renderFooterEmails(DTRS_CONFIG.emails);

    // Initial Cards Render
    renderAllSections();

    // Setup Search & Category Filter Listeners
    setupControls();
  }

  function renderAllSections() {
    renderSection('deployments-grid', filterItems(DTRS_CONFIG.deployments || []), 'cyan');
    renderSection('simulators-grid', filterItems(DTRS_CONFIG.simulators || []), 'amber');
    renderSection('githubs-grid', filterItems(DTRS_CONFIG.githubs || []), 'purple');

    applySectionVisibility();
    bindCardInteractions();
  }

  function filterItems(items) {
    if (!searchQuery) return items;
    const query = searchQuery.toLowerCase().trim();
    return items.filter(item => {
      const matchTitle = (item.title || '').toLowerCase().includes(query);
      const matchDesc = (item.description || '').toLowerCase().includes(query);
      const matchPlatform = (item.platform || '').toLowerCase().includes(query);
      const matchUrl = (item.url || '').toLowerCase().includes(query);
      const matchStatus = (item.status || '').toLowerCase().includes(query);
      return matchTitle || matchDesc || matchPlatform || matchUrl || matchStatus;
    });
  }

  function renderSection(containerId, items, theme) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="no-results-box">
          <h4>No matching modules found</h4>
          <p>Try searching for a different keyword or reset the search filter.</p>
        </div>
      `;
      return;
    }

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

      const resolvedUrl = formatHref(item.url);

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
            <!-- <span class="url-label">${theme.toUpperCase()} ENDPOINT:</span> -->
            <div class="url-display mono-text" title="${urlDisplay}">
              ${urlDisplay}
            </div>
          </div>

          <div class="card-bottom">
            <a href="${resolvedUrl}" class="launch-btn btn-${theme}" target="_blank" rel="noopener noreferrer">
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

  function applySectionVisibility() {
    const sections = document.querySelectorAll('.hub-section');
    sections.forEach(sec => {
      const sectionType = sec.getAttribute('data-section-type');
      if (activeFilter === 'all' || activeFilter === sectionType) {
        sec.classList.remove('hidden-section');
      } else {
        sec.classList.add('hidden-section');
      }
    });
  }

  function setupControls() {
    // 1. Search Input Listener
    const searchInput = document.getElementById('module-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderAllSections();
      });
    }

    // 2. Filter Tab Buttons
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        activeFilter = tab.getAttribute('data-filter') || 'all';
        applySectionVisibility();
      });
    });
  }

  function bindCardInteractions() {
    const cards = document.querySelectorAll('.hub-card');

    cards.forEach(card => {
      const launchLink = card.querySelector('.launch-btn');
      const targetUrl = launchLink ? launchLink.getAttribute('href') : null;

      if (!targetUrl) return;

      card.style.cursor = 'pointer';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'link');

      // Click card navigates to target URL
      card.onclick = (e) => {
        if (e.target.closest('.launch-btn') || e.target.closest('.url-display')) return;

        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
          card.style.transform = '';
          window.open(targetUrl, '_blank', 'noopener,noreferrer');
        }, 100);
      };

      card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(targetUrl, '_blank', 'noopener,noreferrer');
        }
      };

      // 3D Smooth Hover Physics
      card.onmousemove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      };

      card.onmouseleave = () => {
        card.style.transform = '';
      };
    });
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

  function setTextContent(elementId, text) {
    const el = document.getElementById(elementId);
    if (el) el.textContent = text;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatHref(url) {
    if (!url) return '#';
    const trimmed = String(url).trim();
    if (/^(https?:\/\/|\/|\.\/|\.\.\/|apps\/|mailto:|#)/i.test(trimmed)) {
      return trimmed;
    }
    return `https://${trimmed}`;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDTRSApp);
} else {
  initDTRSApp();
}

