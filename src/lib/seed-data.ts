export type ActorRole = "graduate" | "mentor" | "employer" | "admin";

export type Actor = {
  id: string;
  name: string;
  role: ActorRole;
  bio: string;
  location: string;
  goal: string;
};

export type Opportunity = {
  id: string;
  title: string;
  track: string;
  provider: string;
  description: string;
  status: "open" | "reviewing" | "closed";
};

export type DemoAction = {
  id: string;
  actorId: string;
  opportunityId: string;
  type: "save" | "application" | "shortlist";
  status: "draft" | "submitted" | "shortlisted";
  note: string;
};

export type Feedback = {
  id: string;
  fromActorId: string;
  toActorId: string;
  message: string;
  nextStep: string;
};

export type PitchFact = {
  id: string;
  label: string;
  value: string;
};

export type LaunchpadData = {
  actors: Actor[];
  opportunities: Opportunity[];
  actions: DemoAction[];
  feedback: Feedback[];
  pitchFacts: PitchFact[];
};

export const seedData: LaunchpadData = {
  actors: [
    {
      id: "graduate-naledi",
      name: "Naledi Mokoena",
      role: "graduate",
      bio: "Unemployed BCom graduate building a portfolio while looking for a first analyst role.",
      location: "Diepkloof, Soweto",
      goal: "Find credible entry-level opportunities and prepare for interviews."
    },
    {
      id: "graduate-sipho",
      name: "Sipho Dlamini",
      role: "graduate",
      bio: "IT graduate with support-desk experience from a short learnership.",
      location: "Meadowlands, Soweto",
      goal: "Show practical skills and get a junior technical interview."
    },
    {
      id: "graduate-ayanda",
      name: "Ayanda Khumalo",
      role: "graduate",
      bio: "Recent graduate helping local businesses with spreadsheets and posters.",
      location: "Orlando East, Soweto",
      goal: "Turn informal experience into a visible work profile."
    },
    {
      id: "graduate-kabelo",
      name: "Kabelo Ndlovu",
      role: "graduate",
      bio: "Self-taught web builder looking for mentorship and project feedback.",
      location: "Pimville, Soweto",
      goal: "Get feedback on a portfolio and apply to learnerships."
    },
    {
      id: "graduate-zanele",
      name: "Zanele Maseko",
      role: "graduate",
      bio: "Public management graduate interested in civic tech and service delivery.",
      location: "Jabulani, Soweto",
      goal: "Find community-impact internships and prepare a strong application."
    },
    {
      id: "mentor-thabo",
      name: "Thabo Nkosi",
      role: "mentor",
      bio: "Volunteer career coach who reviews CVs and runs mock interviews on Saturdays.",
      location: "Soweto",
      goal: "Help graduates take one practical next step each week."
    },
    {
      id: "employer-lindiwe",
      name: "Lindiwe Mthembu",
      role: "employer",
      bio: "Owner of a local operations company looking for reliable junior admin talent.",
      location: "Diepkloof Zone 3",
      goal: "Find shortlisted candidates with clear profiles and mentor notes."
    }
  ],
  opportunities: [
    {
      id: "opp-admin-internship",
      title: "Junior admin internship",
      track: "Youth Employment and Skills Access",
      provider: "Mthembu Operations",
      description: "Three-month internship for a graduate who can manage records, calls and spreadsheets.",
      status: "open"
    },
    {
      id: "opp-it-support",
      title: "IT support learnership shortlist",
      track: "Youth Employment and Skills Access",
      provider: "Soweto Digital Desk",
      description: "Shortlist for graduates who can troubleshoot devices and explain fixes clearly.",
      status: "reviewing"
    },
    {
      id: "opp-portfolio-clinic",
      title: "Saturday portfolio clinic",
      track: "Education and Learner Support",
      provider: "Boundless Alumni Mentors",
      description: "Mentors help graduates turn projects into a one-page portfolio and demo script.",
      status: "open"
    },
    {
      id: "opp-community-data",
      title: "Community data volunteer sprint",
      track: "Civic Participation and Service Delivery",
      provider: "Ward Action Circle",
      description: "Collect and organize service issue reports for a local community action meeting.",
      status: "open"
    }
  ],
  actions: [
    {
      id: "action-save-admin",
      actorId: "graduate-naledi",
      opportunityId: "opp-admin-internship",
      type: "save",
      status: "draft",
      note: "Naledi saved the junior admin internship after matching on spreadsheet and communication skills."
    },
    {
      id: "action-apply-admin",
      actorId: "graduate-naledi",
      opportunityId: "opp-admin-internship",
      type: "application",
      status: "shortlisted",
      note: "Naledi applied for the junior admin internship with a mentor-reviewed profile."
    },
    {
      id: "action-shortlist-admin",
      actorId: "employer-lindiwe",
      opportunityId: "opp-admin-internship",
      type: "shortlist",
      status: "shortlisted",
      note: "Lindiwe shortlisted Naledi because her profile had proof of spreadsheet work."
    }
  ],
  feedback: [
    {
      id: "feedback-naledi",
      fromActorId: "mentor-thabo",
      toActorId: "graduate-naledi",
      message: "Your profile is strongest when it shows the spreadsheet you built for your aunt's shop.",
      nextStep: "Book interview practice and prepare a 60-second story about the spreadsheet project."
    },
    {
      id: "feedback-sipho",
      fromActorId: "mentor-thabo",
      toActorId: "graduate-sipho",
      message: "Your support-desk notes are useful proof. Turn them into two short case studies.",
      nextStep: "Add screenshots of the troubleshooting steps before applying for IT support."
    },
    {
      id: "feedback-zanele",
      fromActorId: "mentor-thabo",
      toActorId: "graduate-zanele",
      message: "Your civic-tech interest is clear. Connect it to one real service issue in your area.",
      nextStep: "Choose one issue report and explain the impact in plain language."
    }
  ],
  pitchFacts: [
    {
      id: "fact-problem",
      label: "Problem",
      value: "Unemployed graduates often have qualifications but no visible proof, warm referrals or clear next step."
    },
    {
      id: "fact-target-user",
      label: "Target user",
      value: "Soweto unemployed graduates who need practical job readiness and trusted opportunity access."
    },
    {
      id: "fact-solution",
      label: "Solution",
      value: "A local opportunity and mentorship hub that turns profiles, mentor feedback and applications into one demo-ready journey."
    },
    {
      id: "fact-business",
      label: "Business model",
      value: "Sponsored career clinics, employer shortlist fees and post-event learning pathways."
    },
    {
      id: "fact-impact",
      label: "Impact pathway",
      value: "Start with one campus cohort, measure completed profiles and interviews, then expand through mentors and local employers."
    }
  ]
};
