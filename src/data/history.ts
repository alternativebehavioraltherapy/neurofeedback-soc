export type HistoryRow = {
  source: string;
  type: string;
  what: string;
  not: string;
  links: { label: string; href: string }[];
};

export const CHRONOLOGY: { year: string; text: string }[] = [
  {
    year: "1990–",
    text: "BCIA Professional Standards and Ethical Principles, first adopted 26 August 1990. The tenth revision was adopted on 2 May 2026. The document governs certificants and applicants. Certification is not a license.",
  },
  {
    year: "2004",
    text: "Hammond et al. published an ISNR Board-accepted position paper on quantitative EEG used to guide neurofeedback. It is a QEEG paper, not a general Standard of Care.",
  },
  {
    year: "2008",
    text: "Hammond and Kirk, “First, do no harm,” documented adverse effects and argued that the field needed practice standards. The article is an argument in the literature, not an adopted instrument.",
  },
  {
    year: "2011",
    text: "Hammond, Bodenhamer-Davis, Gluck, Stokes, Harper, Trudeau, MacDonald, Lunt, and Kirk published “Standards of Practice for Neurofeedback and Neurotherapy” in the Journal of Neurotherapy, 15:54–64, online 26 February 2011. The ISNR Board accepted it as a position paper. It is not a membership-ratified Standard of Care. Do not date this paper to 2014.",
  },
  {
    year: "2013",
    text: "AAPB Standards for Performing Biofeedback, written to apply to every provider of biofeedback-related services, member or not.",
  },
  {
    year: "2020",
    text: "ISNR Professional Standards and Ethical Principles modified; home and remote training toolkit; CRED-nf research reporting checklist.",
  },
  {
    year: "2023",
    text: "IEEE Std 2010-2023, a recommended practice for documenting EEG neurofeedback systems. AAPB and ISNR Evidence-Based Practice, 4th edition — efficacy ratings, not a Standard of Care.",
  },
  {
    year: "2024",
    text: "ISNR “What is Neurofeedback” page edited and ratified by the ISNR Board on 28 July 2024. That is a guidelines page, not a voted Standard of Care.",
  },
  {
    year: "2025",
    text: "The International QEEG Certification Board supported two quantitative-EEG instruments. Collura and colleagues published minimum technical requirements for clinical QEEG in Clinical EEG and Neuroscience (received 7 June 2023, accepted 3 December 2024). The guideline asks for a 19-site recording, eyes-open and eyes-closed samples, visual inspection of the whole raw tracing by a qualified reviewer, and a check of any automated artifacting or computer-generated maps against that tracing. An IQCB committee, dated 16 March 2025, recommended a seven-part report, a disclaimer that the report does not diagnose, and a signature by a qualified clinician. Software and AI may help gather or summarize. They are not the interpretation. These are QEEG guidelines, not a field-wide Standard of Care for neurofeedback.",
  },
  {
    year: "2026",
    text: "BCIA Professional Standards and Ethical Principles, 10th revision, adopted 2 May 2026.",
  },
];

export const HISTORY_ROWS: HistoryRow[] = [
  {
    source: "This working group. Essential Practice Standards for Neurofeedback.",
    type: "Working-group draft",
    what: "The proposed standards text in 14 domains, including required raw-trace validation when quantitative EEG guides training.",
    not: "Not a society-ratified Standard of Care. Not in force.",
    links: [{ label: "Download", href: "/docs/Essential_Practice_Standards_for_Neurofeedback.docx" }],
  },
  {
    source: "This working group. History of Neurofeedback Practice Standards.",
    type: "Working-group file",
    what: "This chronology and source map, as a file.",
    not: "Not an adopted instrument. A map of the other documents.",
    links: [{ label: "Download", href: "/docs/History_of_Neurofeedback_Practice_Standards.docx" }],
  },
  {
    source: "Hammond, D. C., and Kirk, L. (2008). First, do no harm. Journal of Neurotherapy, 12(1), 79–88.",
    type: "Journal article / call for standards",
    what: "Documents adverse effects and argues that uneven training created a need for practice standards and licensed scope.",
    not: "Not a society-adopted standard.",
    links: [{ label: "DOI", href: "https://doi.org/10.1080/10874200802219947" }],
  },
  {
    source: "Hammond, Walker, Hoffman, Lubar, Trudeau, Gurnee, and Horvat (2004). Journal of Neurotherapy, 8(1), 5–27.",
    type: "ISNR Board position paper (QEEG)",
    what: "Board-accepted recommendations when quantitative EEG is used to guide neurofeedback rather than to make a medical diagnosis.",
    not: "Not a general Standard of Care for neurofeedback.",
    links: [{ label: "DOI", href: "https://doi.org/10.1300/J184v08n01_02" }],
  },
  {
    source: "Hammond, Bodenhamer-Davis, Gluck, Stokes, Harper, Trudeau, MacDonald, Lunt, and Kirk (2011). Journal of Neurotherapy, 15(1), 54–64. Published online 26 February 2011.",
    type: "ISNR Board position paper",
    what: "Committee product accepted by the ISNR Board as a position paper on standards of practice.",
    not: "Not a membership-ratified Standard of Care. Not dated 2014.",
    links: [{ label: "DOI", href: "https://doi.org/10.1080/10874208.2010.545760" }],
  },
  {
    source: "ISNR Professional Standards and Ethical Principles (modified August 2020).",
    type: "Ethics code",
    what: "Binding on ISNR members, applicants, staff, and agents.",
    not: "Not a Standard of Care. Applies to members, not the entire market.",
    links: [{ label: "ISNR PSEP", href: "https://isnr.org/isnr-code-of-ethics/" }],
  },
  {
    source: "ISNR Guidelines for Practice",
    type: "Practice guidelines",
    what: "Public-facing methods reference. States that ISNR membership and BCIA certification are voluntary.",
    not: "Not a replacement for Standards of Care. The live page does not print an adoption date.",
    links: [{ label: "Guidelines", href: "https://isnr.org/guidelines-for-practice" }],
  },
  {
    source: "ISNR “What is Neurofeedback” page, Board-ratified 28 July 2024",
    type: "Board-ratified society page",
    what: "Current ISNR public definition and practice-guidance page.",
    not: "Not a membership-ratified Standard of Care.",
    links: [{ label: "What is Neurofeedback", href: "https://isnr.org/what-is-neurofeedback" }],
  },
  {
    source: "BCIA Professional Standards and Ethical Principles of Biofeedback, 10th revision, adopted 2 May 2026.",
    type: "Certification ethics",
    what: "Ethics for BCIA certificants and applicants. States that certification is not a license to practice independently.",
    not: "Not a field-wide Standard of Care. Not a substitute for a state license.",
    links: [
      { label: "PSEP page", href: "https://www.bcia.org/bcia-professional-standards-ethical-principles" },
      { label: "PDF", href: "https://bcia.memberclicks.net/assets/docs/ProfessionalStandardsAndEthicalPrinciplesofBiofeedback.pdf" },
    ],
  },
  {
    source: "BCIA Neurofeedback entry-level certification (BCN) and Blueprint of Knowledge",
    type: "Voluntary certification standard",
    what: "Didactic, mentoring, examination, and recertification requirements for BCN designations.",
    not: "Not a license. Not legally required to practice.",
    links: [{ label: "BCIA NF entry", href: "https://www.bcia.org/nf-entry-level" }],
  },
  {
    source: "AAPB Standards for Performing Biofeedback (2013 committee; Sherman, chair).",
    type: "Association standards",
    what: "Written to apply to every provider of biofeedback-related services, member or not.",
    not: "Not a statute. Not a neurofeedback-only Standard of Care.",
    links: [{ label: "AAPB Standards", href: "https://aapb.org/Standards_for_Performing_Biofeedback" }],
  },
  {
    source: "AAPB Code of Ethics",
    type: "Ethics code",
    what: "Member ethics. Written consent required for non-validated procedures.",
    not: "Not a neurofeedback Standard of Care. Applies to AAPB members.",
    links: [{ label: "AAPB Ethics", href: "https://aapb.org/Code_of_Ethics" }],
  },
  {
    source: "IEEE Std 2010-2023. Recommended Practice for EEG Neurofeedback Systems. Published 11 July 2023.",
    type: "Equipment / documentation standard",
    what: "Minimum documentation so conforming EEG neurofeedback systems give users clear information.",
    not: "Not a clinical Standard of Care for practitioners.",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/IEEESTD.2023.10186304" }],
  },
  {
    source: "21 CFR 882.5050 (biofeedback device) and 882.1400 (electroencephalograph).",
    type: "U.S. device regulation",
    what: "Classifies certain biofeedback and EEG devices.",
    not: "Not a practitioner Standard of Care. Does not authorize an unlicensed person to treat a diagnosed condition.",
    links: [{ label: "21 CFR 882.5050", href: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-882/section-882.5050" }],
  },
  {
    source: "International QEEG Certification Board (IQCB). QEEG-DL, QEEG-D, QEEG-T.",
    type: "Voluntary QEEG credential",
    what: "Board certification in quantitative EEG, with separate technologist and diplomate tracks.",
    not: "Not a medical license. Not neurofeedback certification.",
    links: [{ label: "IQCB", href: "https://qeegcertificationboard.org/" }],
  },
  {
    source: "Collura and colleagues (2025). IQCB Guideline: Minimum Technical Requirements for Performing Clinical QEEG. Clinical EEG and Neuroscience, 56(5), 391–399.",
    type: "QEEG technical guideline",
    what: "IQCB-supported minimum for clinical QEEG. A 19-site 10–20 recording, about ten minutes eyes open and ten minutes eyes closed, then visual inspection of the whole raw tracing. Quantification uses about two to five minutes of artifact-free data in each condition. Automated artifact rejection, source imaging, and discriminant functions may assist. They do not replace inspection of the original traces. Intended for practicum submissions, intakes, baselines, and comparative use.",
    not: "Not a general neurofeedback Standard of Care.",
    links: [
      { label: "DOI", href: "https://doi.org/10.1177/15500594241308654" },
      { label: "IQCB PDF", href: "https://qeegcertificationboard.org/wp-content/uploads/QEEG-Minimum-Guidelines-ECNS.pdf" },
      { label: "Download", href: "/docs/QEEG-Minimum-Guidelines-ECNS.pdf" },
    ],
  },
  {
    source: "IQCB Recommended Guidelines for QEEG Report Writing (16 March 2025).",
    type: "QEEG report-writing guidance",
    what: "IQCB committee guidance of 16 March 2025. Seven sections: clinician identity, client information, technical methods, surface EEG observations, quantitative findings, summary and recommendations within scope, and appendices. The report carries a disclaimer that it does not diagnose. A qualified clinician (QEEG-D or QEEG-DL) reviews and signs it. AI may help gather or summarize. It is not the interpretation, and it does not replace artifact review or clinical correlation.",
    not: "Not a general neurofeedback Standard of Care.",
    links: [
      { label: "IQCB PDF", href: "https://qeegcertificationboard.org/wp-content/uploads/IQCB-Guidelines-for-Report-Writing-03-16-2025.pdf" },
      { label: "Download", href: "/docs/IQCB-Guidelines-for-Report-Writing-03-16-2025.pdf" },
    ],
  },
  {
    source: "American Clinical Neurophysiology Society. Guideline 1 (2016). Minimum Technical Requirements for Performing Clinical EEG.",
    type: "Clinical EEG technical guideline",
    what: "Minimum technical conditions for clinical EEG recording.",
    not: "Not a neurofeedback practice standard.",
    links: [{ label: "ACNS guidelines", href: "https://www.acns.org/advocacy/guidelines-and-consensus-statements" }],
  },
  {
    source: "Ros et al. (2020). CRED-nf checklist. Brain, 143(6), 1674–1685.",
    type: "Research reporting consensus",
    what: "Consensus checklist for design and reporting of neurofeedback studies.",
    not: "Not a clinical Standard of Care.",
    links: [{ label: "DOI", href: "https://doi.org/10.1093/brain/awaa009" }],
  },
  {
    source: "U.S. Department of Veterans Affairs. Community Care Network guidance for biofeedback / neurofeedback providers.",
    type: "Payer / network credentialing",
    what: "Requires an independent license plus specified training minima for network providers.",
    not: "Not a field-wide Standard of Care. A purchaser rule for one system.",
    links: [{ label: "VA CCN guidance", href: "https://www.va.gov/wholehealth/professional-resources/Guidance_CCN_Biofeedback_Neurofeedback.asp" }],
  },
  {
    source: "BrainFutures (2020/21). Neurofeedback: An Efficacious Treatment for Behavioral Health.",
    type: "Advocacy evidence review",
    what: "Makes a policy case for neurofeedback in ADHD and anxiety.",
    not: "Not a practice standard. Do not import “first-line” language.",
    links: [{ label: "BrainFutures", href: "https://www.brainfutures.org/neurofeedback-report/" }],
  },
  {
    source: "State and provincial practice acts",
    type: "Law",
    what: "Determine who may diagnose and treat. There is no national U.S. neurofeedback license.",
    not: "A future Standard of Care cannot override statute.",
    links: [],
  },
];
