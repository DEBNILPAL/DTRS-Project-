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
      url: "https://admin-dtrs.vercel.app/", // Change this to your live deployment URL (e.g., https://delays.dtrs.vercel.app)
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
      id: "Deployement 3",
      platform: "Admin View (Mapped)",
      title: "Visualising DTRS Division System and Delay on Realtime Map",
      description: "This dashboard gives railway staff a comprehensive view of delays, signal status, and train movements across the network, Inspired by Bhuvan Map",
      url: "https://dtpr-mapping.vercel.app", // Change this to your live API URL
      status: "LIVE"
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
      url: "https://dtrs-tsimulation.vercel.app", // Change this to your simulator URL
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
      title: "DTRS Admin Gateway",
      description: "Codebase behind admin-facing ETA DTRS Application.",
      url: "https://github.com/bratatech/Admin-DTRS.git", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    },
    {
      id: "github-application",
      platform: "REPO 02",
      title: "DTRS Mobile Gateway",
      description: "Codebase behind the passenger-facing ETA DTRS Application",
      url: "https://github.com/bratatech/DTPR.git", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    },
    {
      id: "github-application",
      platform: "REPO 03",
      title: "DTRS Mapping System",
      description: "Codebase behind DTRS Division and Delay Mapping System",
      url: "https://github.com/bratatech/Mapping-DTRS.git", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    },
    {
      id: "github-application",
      platform: "REPO 04",
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
