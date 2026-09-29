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
      url: "dtpr-mobile.vercel.app", // Change this to your live deployment URL (e.g., https://eta.dtrs.streamlit.app)
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
  // 2. GITHOBS (Source Code Repositories)
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
      url: "https://github.com/dtrs-project/eta-rescheduling-ai", // Change this to your GitHub repo URL
      status: "PUBLIC REPO"
    },
  ],

  // ----------------------------------------------------------------------------
  // 3. SIMULATORS (Railway Sandboxes & Testing Environments)
  // ----------------------------------------------------------------------------
  simulators: [
    {
      id: "sim-headway",
      platform: "SIM-01",
      title: "Dynamic Headway & Conflict Sandbox",
      description: "Simulate single-line holds, overtaking loops, track clearance intervals, and automatic block signal progression under load.",
      url: "https://simulator.dtrs-network.in/headway", // Change this to your simulator URL
      status: "SANDBOX"
    },
    {
      id: "sim-delays",
      platform: "SIM-02",
      title: "Cascading Delay Propagation Engine",
      description: "Stress-test network disruption scenarios and analyze how an initial 15-minute rake delay cascades through busy junction hubs.",
      url: "https://simulator.dtrs-network.in/delays", // Change this to your simulator URL
      status: "SANDBOX"
    },
    {
      id: "sim-yard",
      platform: "SIM-03",
      title: "Yard Master Platform Sandbox",
      description: "Simulate real-time platform occupancy, rake turnaround maintenance cycles, and dynamic track switching in major terminal stations.",
      url: "https://simulator.dtrs-network.in/platform-allocator", // Change this to your simulator URL
      status: "SANDBOX"
    }
  ],
};

// Export for Node/CommonJS environments if ever imported, otherwise accessible globally in browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DTRS_CONFIG;
}
