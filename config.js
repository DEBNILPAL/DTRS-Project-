/**
 * ==============================================================================
 * DTRS CENTRAL CONFIGURATION FILE (config.js)
 * ==============================================================================
 * 
 * Edit all your hardcoded URLs, GitHub links, Simulator URLs, and Contact Emails
 * in this ONE single file instead of traversing the whole codebase!
 * 
 * Whenever you update any URL or email here, it automatically updates both the 
 * displayed text and the "Launch Site" redirect buttons on the homepage.
 * ==============================================================================
 */

const DTRS_CONFIG = {

  // ----------------------------------------------------------------------------
  // 1. DEPLOYMENTS (Live Web Applications & Services)
  // ----------------------------------------------------------------------------
  deployments: [
    {
      id: "Deployement 1",
      platform: "Web Application",
      title: "Admin View of DTRS",
      description: "This dashboard gives railway staff a comprehensive view of delays, signal status, and train movements across the network.",
      url: "apps/delays/index.html", // Change this to your live deployment URL (e.g., https://delays.dtrs.vercel.app)
      status: "LIVE"
    },
    {
      id: "Deployment 2",
      platform: "Mobile Application",
      title: "Passenger View of DTRS",
      description: "This dashboard gives passengers real-time updates on their train's schedule, platform information, and expected arrival times.",
      url: "https://dtpr-mobile.vercel.app", // Change this to your live deployment URL (e.g., https://eta.dtrs.streamlit.app)
      status: "LIVE"
    },
    {
      id: "deploy-api",
      platform: "Admin View (Mapped)",
      title: "Understanding the delay and train movement on the tracks",
      description: "FastAPI microservice streaming high-frequency GPS coordinate sync, block section telemetry, and delay metrics to clients.",
      url: "apps/platform-allocator/index.html", // Change this to your live API URL
      status: "ACTIVE"
    }
  ],

  // ----------------------------------------------------------------------------
  // 2. SIMULATORS (Railway Sandboxes & Testing Environments)
  // ----------------------------------------------------------------------------
  simulators: [
    {
      id: "sim-weather",
      platform: "SIM-01",
      title: "Weather Simulator",
      description: "Simulator which helps understand how weather causes train delays",
      url: "https://dtrs-wsimulation.vercel.app", // Change this to your simulator URL
      status: "SANDBOX"
    },
    {
      id: "sim-priority",
      platform: "SIM-02",
      title: "Priority Order Simulation",
      description: "Simulator which helps understand how priority order of trains causes train delays",
      url: "https://dtrs-psimulation.vercel.app", // Change this to your simulator URL
      status: "SANDBOX"
    },
    {
      id: "sim-tsr",
      platform: "SIM-03",
      title: "Temporary Speed Restrictions Simulator",
      description: "Simulator which helps understand how temporrary speed restrictions cause train delays",
      url: "https://dtrs-tsrsimulation.vercel.app", // Change this to your simulator URL
      status: "SANDBOX"
    }
  ],

  // ----------------------------------------------------------------------------
  // 3. GITHUBS (Source Code Repositories)
  // ----------------------------------------------------------------------------
  githubs: [
    {
      id: "github-portal",
      platform: "REPO 01",
      title: "DTRS Frontend & Web Gateway",
      description: "Codebase behind admin-facing ETA DTRS Application.",
      url: "https://github.com/dtrs-project/dtrs-portal", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    },
    {
      id: "github-application",
      platform: "REPO 02",
      title: "ETA DTRS Mobile Gateway",
      description: "Codease behind the passenger-facing ETA DTRS Application",
      url: "Link Due", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    },
    {
      id: "github-application",
      platform: "REPO 03",
      title: "Weather Simulator",
      description: "Codebase behind the simulator which helps understand how weather causes train delays",
      url: "https://github.com/AmrityaRajwanshy/Weather-Simulation-DTRS.git", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    },
    {
      id: "github-application",
      platform: "REPO 04",
      title: "Priority Order Simulation",
      description: "Codease behind the simulator which helps understand how priority order of trains causes train delays",
      url: "https://github.com/AmrityaRajwanshy/Priority-Simulation-DTRS.git", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    },
    {
      id: "github-application",
      platform: "REPO 05",
      title: "Temporary Speed Restrictions Simulator",
      description: "Codebase behind the simulator which helps understand how temporrary speed restrictions cause train delays",
      url: "https://github.com/AmrityaRajwanshy/TSR-Simulator-DTRS.git", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    }
  ],
};

// Export for Node/CommonJS environments if ever imported, otherwise accessible globally in browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DTRS_CONFIG;
}
