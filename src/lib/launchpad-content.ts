export type HomepageSection = {
  title: string;
  body: string;
};

export type RoleDemo = {
  id: "graduate" | "mentor" | "employer";
  label: string;
  heading: string;
  summary: string;
  actions: string[];
};

export const homepage = {
  productName: "KasiCareer Connect",
  promise: "Help Soweto graduates turn qualifications into visible proof, mentor feedback and real opportunities.",
  primaryCta: "View the demo",
  secondaryCta: "Open the pitch",
  sections: [
    {
      title: "Problem",
      body: "Many unemployed graduates have potential, but their proof of skill, referrals and interview readiness are scattered."
    },
    {
      title: "Solution",
      body: "KasiCareer Connect gives graduates a profile, matches them to local opportunities and adds mentor feedback before employers review them."
    },
    {
      title: "How it works",
      body: "Create a profile, get mentor feedback, then apply to a relevant opportunity with a stronger story."
    },
    {
      title: "Impact",
      body: "The first win is not a giant platform. It is one graduate with a clearer next step, one mentor note and one employer conversation."
    },
    {
      title: "Business case",
      body: "The model can grow through sponsored readiness clinics, employer shortlist support and post-event learning pathways."
    }
  ] satisfies HomepageSection[]
};

export const roles: RoleDemo[] = [
  {
    id: "graduate",
    label: "Graduate",
    heading: "Graduate view",
    summary: "Naledi sees opportunities, saves the best match and applies with mentor-reviewed proof.",
    actions: ["Browse matched opportunities", "Save junior admin internship", "Apply with proof of skills"]
  },
  {
    id: "mentor",
    label: "Mentor",
    heading: "Mentor view",
    summary: "Thabo reviews graduate profiles and leaves practical next steps that improve readiness.",
    actions: ["Review Naledi's profile", "Leave interview advice", "Recommend one next action"]
  },
  {
    id: "employer",
    label: "Employer",
    heading: "Employer view",
    summary: "Lindiwe reviews applicants with profiles, proof and mentor notes before shortlisting.",
    actions: ["Open the internship dashboard", "Review mentor feedback", "Shortlist a candidate"]
  }
];

export const challengeTracks = [
  "Youth Employment and Skills Access",
  "Township Business and Informal Economy",
  "Food Security and Urban Agriculture",
  "Community Safety and GBV Response",
  "Education and Learner Support",
  "Health, Wellness and Mental Health",
  "Waste, Environment and Clean Communities",
  "Civic Participation and Service Delivery"
];

export const submissionChecklist = [
  "The app starts with npm run dev.",
  "The homepage explains who the product helps and why now.",
  "The demo includes 2-3 roles without requiring login.",
  "At least one end-to-end user journey works.",
  "The SQLite database is seeded with fictional local demo data.",
  "The pitch page states problem, target user, solution, business model and impact pathway.",
  "npm run check passes.",
  "npm run build passes.",
  "The team can explain what they built in five minutes."
];

export const masterclassSchedule = [
  { time: "10:05", activity: "Why AI-assisted building matters for unemployed graduates" },
  { time: "10:10", activity: "Entrepreneurship: choose a painful, specific local problem" },
  { time: "10:18", activity: "Harness engineering: make Codex's work testable" },
  { time: "10:26", activity: "Plan mode, Goal mode, side chats and short task loops" },
  { time: "10:34", activity: "Clone the repo and start the first team prompt" },
  { time: "10:40", activity: "Teams begin problem definition and prototype build" }
];
