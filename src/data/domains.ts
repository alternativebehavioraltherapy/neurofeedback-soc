export type Domain = {
  id: string;
  number: number;
  title: string;
  summary: string;
};

export const DOMAINS: Domain[] = [
  { id: "1", number: 1, title: "Licensure, scope, and supervision", summary: "Treat diagnosed conditions only inside a license, or under documented supervision." },
  { id: "2", number: 2, title: "Competence beyond an introductory course", summary: "A workshop is not qualification for independent practice." },
  { id: "3", number: 3, title: "Representation of credentials", summary: "State licenses and certificates accurately. A certificate is not a license." },
  { id: "4", number: 4, title: "Informed consent", summary: "Document the method, risks, limits, and experimental status before training begins." },
  { id: "5", number: 5, title: "Assessment before training", summary: "Plan from history, goals, and a pre-training EEG assessment." },
  { id: "6", number: 6, title: "Claims about evidence", summary: "Distinguish published support from experimental use, condition by condition." },
  { id: "7", number: 7, title: "Presence, coaching, and technicians", summary: "A responsible practitioner remains with the trainee. Technicians work under direction." },
  { id: "8", number: 8, title: "Remote and home training", summary: "Home programs are the exception for diagnosed conditions, not the default." },
  { id: "9", number: 9, title: "Hygiene, sensors, and equipment", summary: "Clean technique, adequate contact, and equipment fit for clinical use." },
  { id: "10", number: 10, title: "Records, billing, and privacy", summary: "Bill only what was delivered. Keep a complete clinical record." },
  { id: "11", number: 11, title: "Public statements", summary: "Advertising matches published support. No promised cure." },
  { id: "12", number: 12, title: "Training programs and equipment sales", summary: "Do not place clinical methods in unlicensed, unsupervised hands." },
  { id: "13", number: 13, title: "Quantitative EEG used to guide training", summary: "Raw traces must be reviewed before maps may set a protocol." },
  { id: "14", number: 14, title: "Research using neurofeedback", summary: "Honest design and reporting. Clinical competence, or supervision by someone who has it." },
];
