export const SITE_NAME = "Standards of Care for Neurofeedback Working Group";
export const SITE_SHORT = "SoC Working Group";
export const CONTACT_EMAIL = "office@altbehtherapy.com";
export const CONTACT_PHONE = "360-553-1350";
export const CONTACT_TEL = "tel:+13605531350";
export const MARK_LEGEND =
  "Theoretical participant mark for committee discussion. Not a license. Not a BCIA credential or an IQCB credential. Not society endorsement. Not being issued now.";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/proposal", label: "Proposal" },
  { to: "/standards", label: "Standards" },
  { to: "/history", label: "History" },
  { to: "/documents", label: "Documents" },
  { to: "/structure", label: "Structure" },
  { to: "/working-group", label: "Working Group" },
] as const;

export const PEOPLE = [
  {
    initials: "GS",
    name: "Dr. Gary J. Schummer",
    title: "Convening Chair",
    line: "Licensed psychologist; BCIA Senior Fellow in biofeedback and neurofeedback. Trained under M. Barry Sterman. Former Clinical Director, ADD Treatment Center, Torrance, CA. Longer biography to be added.",
  },
  {
    initials: "PJ",
    name: "Pete Jansons",
    title: "Project Coordinator",
    line: "Host of the NeuroNoodle podcast. Longer biography and organizational details to be added.",
  },
  {
    initials: "JM",
    name: "Joshua Moore, MA, LMHC, BCN",
    title: "Founding Working Group Member",
    line: "Licensed mental health counselor; board-certified in neurofeedback. Longer biography and photograph to be added.",
  },
] as const;

export const PHOTOS = [
  { src: "/photos/5Q8A0100.jpg", alt: "EEG sensor cap on a glass mannequin", caption: "EEG cap" },
  { src: "/photos/5Q8A0094.jpg", alt: "EEG cap fitted on a glass head from another angle", caption: "Sensor montage" },
  { src: "/photos/5Q8A0214.jpg", alt: "Raw EEG traces displayed on a monitor", caption: "Raw traces" },
  { src: "/photos/5Q8A0229.jpg", alt: "Quantitative EEG maps and connectivity displays on a screen", caption: "qEEG maps" },
  { src: "/photos/5Q8A0050.jpg", alt: "Adult in a training session with scalp sensors", caption: "Adult training session" },
  { src: "/photos/5Q8A0286.jpg", alt: "Adult seated with EEG sensors during a session", caption: "Adult training session" },
  { src: "/photos/5Q8A0113.jpg", alt: "Hands applying conductive gel to an EEG cap", caption: "Cap preparation" },
  { src: "/photos/5Q8A0102.jpg", alt: "EEG software displaying recorded traces", caption: "Recording software" },
] as const;

export const DOCUMENTS = [
  {
    title: "Essential Practice Standards for Neurofeedback",
    role: "Proposed public standards text in 14 domains, including required raw-trace validation when quantitative EEG guides training.",
    label: "Proposed standards text",
    href: "/docs/Essential_Practice_Standards_for_Neurofeedback.docx",
    filename: "Essential_Practice_Standards_for_Neurofeedback.docx",
  },
  {
    title: "History of Neurofeedback Practice Standards",
    role: "Chronology and source map: what each prior document is, and what it is not.",
    label: "History and source map",
    href: "/docs/History_of_Neurofeedback_Practice_Standards.docx",
    filename: "History_of_Neurofeedback_Practice_Standards.docx",
  },
  {
    title: "IQCB minimum technical requirements for clinical QEEG",
    role: "Collura and colleagues, Clinical EEG and Neuroscience (2025). Minimum acquisition, visual inspection of the raw EEG, artifact handling, and quantitative processing. An IQCB-supported technical guideline, not this working group’s standard.",
    label: "Prior instrument · 2025",
    href: "/docs/QEEG-Minimum-Guidelines-ECNS.pdf",
    filename: "QEEG-Minimum-Guidelines-ECNS.pdf",
  },
  {
    title: "IQCB recommended guidelines for QEEG report writing",
    role: "Committee guidance dated 16 March 2025. Seven report sections, a required disclaimer, and a limit on using AI as the interpretation. Not this working group’s standard.",
    label: "Prior instrument · 16 March 2025",
    href: "/docs/IQCB-Guidelines-for-Report-Writing-03-16-2025.pdf",
    filename: "IQCB-Guidelines-for-Report-Writing-03-16-2025.pdf",
  },
];
