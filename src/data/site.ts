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
