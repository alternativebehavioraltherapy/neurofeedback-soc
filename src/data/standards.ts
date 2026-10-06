export type Block =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "callout"; label: string; text: string }
  | { kind: "h"; text: string };

export type StandardSection = {
  id: string;
  number: string;
  title: string;
  blocks: Block[];
};

export const PURPOSE: Block[] = [
  {
    kind: "p",
    text: "These standards describe a proposed floor for competent neurofeedback practice, so clients, colleagues, and other health disciplines can see what adopters agree to. They are not the legal standard of care. They do not replace statute, a professional license, or the ethics code of a provider’s primary profession.",
  },
  {
    kind: "p",
    text: "The standards apply to clinical treatment of diagnosed conditions, to performance and wellness training, and to research that uses neurofeedback with human participants.",
  },
];

export const SCOPE: Block[] = [
  {
    kind: "p",
    text: "Neurofeedback is a form of biofeedback directed at brain activity. Sensors record electrical activity from the scalp. That activity is displayed in real time so the trainee can learn to change it. Providers use the method inside the limits of their license or under lawful supervision.",
  },
  {
    kind: "p",
    text: "Certification in neurofeedback or quantitative EEG is a mark of training. It is not a license to practice independently and does not enlarge a statutory scope of practice.",
  },
];

export const SECTIONS: StandardSection[] = [
  {
    id: "1",
    number: "1",
    title: "Licensure, scope, and supervision",
    blocks: [
      {
        kind: "p",
        text: "A provider who treats a diagnosed mental or medical condition shall hold an independent license whose scope includes that population, or shall work under the documented legal supervision of such a licensee. The supervising professional remains accountable for assessment, the plan, side effects, and outcome.",
      },
      {
        kind: "p",
        text: "Unlicensed technicians do not independently evaluate, diagnose, or alter training for diagnostic conditions. Their duties, limits of independent action, and duty to report unexpected change are set out in writing. The supervisor is present at the site of training when services are provided for a diagnosed condition.",
      },
      {
        kind: "p",
        text: "Performance and wellness training with non-clinical populations remains inside the provider’s demonstrated competence and does not become unlicensed treatment of a disorder by another name.",
      },
    ],
  },
  {
    id: "2",
    number: "2",
    title: "Competence beyond an introductory course",
    blocks: [
      {
        kind: "p",
        text: "An introductory workshop does not qualify a provider for independent practice or independent outcome research. Before working independently, the provider completes structured didactic education covering the science and methods of the work, supervised mentoring of personal training, client sessions, and case review, and an examination of knowledge. Competence is maintained through continuing education, consultation, and supervision matched to case complexity.",
      },
      {
        kind: "p",
        text: "Early cases after training are limited to those a mentor or supervisor has approved. When a presentation exceeds the provider’s skill, the provider refers or obtains consultation.",
      },
    ],
  },
  {
    id: "3",
    number: "3",
    title: "Representation of credentials",
    blocks: [
      {
        kind: "p",
        text: "Providers state their degrees, licenses, certifications, and limits accurately. They do not imply that a certificate is a license. They do not present themselves as a “neurofeedback therapist” or “biofeedback therapist” as if those were independent licensed professions. Neurofeedback is a method used inside a primary profession.",
      },
      {
        kind: "p",
        text: "Public listings do not pair a professional credential with an unaccredited degree or a degree unrelated to health care.",
      },
    ],
  },
  {
    id: "4",
    number: "4",
    title: "Informed consent",
    blocks: [
      {
        kind: "p",
        text: "Before training begins, and as the work changes, the client (or guardian) gives documented consent that covers:",
      },
      {
        kind: "list",
        items: [
          "the method, including where and how the body will be touched when sensors are applied",
          "reasonably expected benefits, risks, discomforts, and costs",
          "the possibility that agreed goals will not be reached",
          "the possibility of unexpected change in experience or behavior, and the duty to report it so training can be adjusted or stopped",
          "limits of confidentiality",
          "the role, qualifications, and supervision of any technician",
          "use of data for teaching or research, if any",
          "whether a procedure is experimental or not yet well supported for the presenting problem",
        ],
      },
      {
        kind: "p",
        text: "Written consent is required for experimental applications. Consent is an ongoing process, not a single signature.",
      },
    ],
  },
  {
    id: "5",
    number: "5",
    title: "Assessment before training",
    blocks: [
      {
        kind: "p",
        text: "Training follows an assessment adequate to the presenting problem and goal. The assessment includes history, current symptoms, medications and other treatments, and a pre-training EEG assessment. The provider and client agree on measurable goals, a plan, and a method for reviewing progress, including whether continued training merits its cost.",
      },
      {
        kind: "p",
        text: "Quantitative EEG, when used, is one way to examine the EEG in greater detail. It is not required for every case and is not a substitute for clinical interviewing or for the raw-trace review required in Standard 13.",
      },
    ],
  },
  {
    id: "6",
    number: "6",
    title: "Claims about evidence",
    blocks: [
      {
        kind: "p",
        text: "Providers distinguish procedures with published support for the presenting problem from procedures that remain experimental. They describe the degree of support accurately and do not treat a general statement about “neurofeedback” as proof that a particular protocol is established for a particular condition. Experimental work is labeled as such and proceeds only with the consent required in Standard 4.",
      },
    ],
  },
  {
    id: "7",
    number: "7",
    title: "Presence, coaching, and technicians",
    blocks: [
      {
        kind: "p",
        text: "A responsible practitioner remains with the trainee and coaches the session to a degree sufficient to meet the agreed goals. The client is told, and the record states, how present that person will be. Unsupervised multi-station arrangements in which no qualified person watches the trainee and the signal are not an acceptable model of care for diagnostic conditions.",
      },
      {
        kind: "p",
        text: "Technicians work under direction. Changes in the plan are made by the supervising professional.",
      },
    ],
  },
  {
    id: "8",
    number: "8",
    title: "Remote and home training",
    blocks: [
      {
        kind: "p",
        text: "Home or remote training is approached with added caution. It is generally discouraged when the goal is treatment of a diagnosed condition. Before it begins, the provider assesses and documents the benefits, the risks, and the skill of the person who will run sessions away from the clinic.",
      },
      {
        kind: "p",
        text: "Additional consent covers how problems will be reported and resolved, how hardware and software will be limited to their intended use, and whether the work crosses the geographic limit of the provider’s license. The provider retains control of the protocol. The client does not independently redesign training.",
      },
    ],
  },
  {
    id: "9",
    number: "9",
    title: "Hygiene, sensors, and equipment",
    blocks: [
      {
        kind: "p",
        text: "Providers maintain hygiene, apply sensors so that the electrical connection is adequate, and keep hardware and software in working order. Equipment used for clinical care is safe, accurate, and fit for the purpose. Devices that meet recognized electrical and documentation standards, or that are registered for clinical use, are preferred in clinical settings.",
      },
      {
        kind: "p",
        text: "A device listing or registration does not authorize an unlicensed person to treat a diagnosed condition and does not by itself establish that a product treats a named disorder.",
      },
    ],
  },
  {
    id: "10",
    number: "10",
    title: "Records, billing, and privacy",
    blocks: [
      {
        kind: "p",
        text: "The record includes consent, assessment, the plan, session dates and procedures, progress, side effects or unexpected change, and the identity and role of each person who delivered care. Providers bill only for services they or lawfully supervised staff actually provided, and they identify which work was direct and which was supervised. Privacy law applicable to the setting is followed.",
      },
      {
        kind: "p",
        text: "Services continue only while the client is reasonably expected to benefit. When the work is outside the provider’s competence, the provider arranges an appropriate referral and does not abandon the client.",
      },
    ],
  },
  {
    id: "11",
    number: "11",
    title: "Public statements",
    blocks: [
      {
        kind: "p",
        text: "Advertising and public education match the published support for the methods described. Providers do not promise cure, do not hide limits, and do not imply endorsement by a professional society or certifying body that has not been given. When a presenter also sells a device or a course, that interest is disclosed.",
      },
    ],
  },
  {
    id: "12",
    number: "12",
    title: "Training programs and equipment sales",
    blocks: [
      {
        kind: "p",
        text: "Those who teach clinical workshops or sell clinical-grade systems have a duty not to place the method in the hands of people who will treat diagnosed conditions without license or supervision. Workshop admission and device sale for clinical use are limited to licensed professionals, to students under a training plan, and to technicians who will work under such a professional. Manufacturer training on a device is part of competence. It does not replace the mentoring and assessment required in Standard 2.",
      },
    ],
  },
  {
    id: "13",
    number: "13",
    title: "Quantitative EEG used to guide training",
    blocks: [
      {
        kind: "p",
        text: "Quantitative EEG may guide neurofeedback planning. It is not a stand-alone medical diagnosis. Maps, z-scores, source images, connectivity displays, and software narratives are derived products. They are valid only to the extent that the raw recording is valid and that the segments chosen for analysis represent the intended brain state.",
      },
      { kind: "h", text: "13.1 Competence to acquire and to interpret" },
      {
        kind: "p",
        text: "Recording a quantitative EEG and interpreting one are different tasks. A trained technician may acquire data under supervision. Interpretation, raw-trace validation, and any protocol recommendation based on quantitative EEG require demonstrated competence in reviewing raw EEG, not only in operating software.",
      },
      { kind: "h", text: "13.2 Raw-trace validation is required" },
      {
        kind: "p",
        text: "Before any quantitative analysis is accepted for clinical use, a qualified reviewer inspects the original raw traces. Review covers the recording as a whole, not a software summary of it, and uses more than one montage so that artifacts, asymmetries, and transient events can be distinguished from background rhythm.",
      },
      { kind: "p", text: "The reviewer identifies and documents at least:" },
      {
        kind: "list",
        items: [
          "electrode, impedance, and reference problems, including contamination of a common reference",
          "eye blinks, eye flutter, and slow eye movements",
          "muscle activity",
          "movement, sweat, cable, and line-frequency interference",
          "drowsiness or sleep mixed into an intended waking record",
          "paroxysmal or spike-like events",
          "marked asymmetries and changes of state",
        ],
      },
      { kind: "h", text: "13.3 Automated processing is an aid, not a substitute" },
      {
        kind: "p",
        text: "Automated artifact rejection, component analysis, cloud or laboratory processing services, and computer-generated reports may assist review. They do not replace inspection of the original raw tracings.",
      },
      {
        kind: "p",
        text: "Uploading a recording to automated processing software or a remote mapping service does not satisfy raw-data validation unless the original traces are independently reviewed and the processed output is checked against those traces.",
      },
      {
        kind: "p",
        text: "If automated methods are used, the reviewer compares their output with the original raw record and confirms that:",
      },
      {
        kind: "list",
        items: [
          "true artifacts were removed",
          "valid EEG was not discarded",
          "transient cerebral events were not treated as noise",
          "drowsy or asleep segments were not treated as an awake baseline",
        ],
      },
      {
        kind: "p",
        text: "A map, z-score table, source image, or narrative report produced by software without this verification shall not be used as the basis for a training protocol.",
      },
      {
        kind: "callout",
        label: "Required floor.",
        text: "Feeding a recording into automated processing software and accepting the resulting maps or recommendations without a qualified person verifying those products against the original raw tracings is not an acceptable method. It is a common and methodologically flawed practice. These proposed standards prohibit it.",
      },
      { kind: "h", text: "13.4 Why raw validation is required" },
      {
        kind: "p",
        text: "Quantification averages selected segments. It does not see waveform shape. Several distortions follow if the raw record is not reviewed first:",
      },
      {
        kind: "list",
        items: [
          "muscle activity can appear as excess fast activity and be mistaken for a training target",
          "eye movement and pulse can appear as excess slow activity, especially over frontal sites",
          "movement or a failing electrode can appear as excess slow activity",
          "drowsiness changes the spectrum and is not removed by ordinary blink filters; mixing drowsy segments into a waking baseline invalidates the comparison",
          "brief discharges and focal slowing can vanish in an average or be stripped out by automatic rejection",
          "a contaminated reference can make a local finding look widespread",
        ],
      },
      {
        kind: "p",
        text: "A color map cannot make these distinctions. Treating a map hotspot as a training target without confirming the feature in the raw record is unsound. If a quantitative abnormality cannot be seen in the raw tracing, it is not used as a training target.",
      },
      { kind: "h", text: "13.5 Data used for quantification" },
      {
        kind: "p",
        text: "Quantitative analysis uses only segments judged acceptable after raw review. Providers retain enough continuous clean data in each intended condition to represent the client’s waking background, not a collage of isolated seconds. Eyes-closed waking and eyes-open waking are not interchangeable with drowsy or asleep samples. If too little acceptable data remain after review, the recording is repeated rather than forced through the software.",
      },
      { kind: "h", text: "13.6 Reporting" },
      {
        kind: "p",
        text: "When quantitative EEG informs care, the record states:",
      },
      {
        kind: "list",
        items: [
          "that the original raw tracing was reviewed, by whom, and in which montages",
          "the quality of the record and the artifact burden",
          "how data were selected or cleaned",
          "whether automated tools or third-party processing were used, and how their output was checked against the raw traces",
        ],
      },
      {
        kind: "p",
        text: "Software text is not accepted as the clinical interpretation. Interpretation is correlated with history, symptoms, medications, and other findings. Findings that suggest medical evaluation are referred. Quantitative EEG used to guide neurofeedback does not replace a clinical EEG interpretation when one is indicated. Progress maps are held to the same raw-validation standard as intake maps.",
      },
    ],
  },
  {
    id: "14",
    number: "14",
    title: "Research using neurofeedback",
    blocks: [
      {
        kind: "p",
        text: "Research with human participants uses an adequate design for the question being asked, informed consent, and honest reporting of methods, limitations, and adverse events. Investigators who conduct outcome research have documented clinical competence with the method or are supervised by a person who does. Reports describe the feedback actually delivered, whether and how learning of the trained signal was shown, and the conditions of control or comparison.",
      },
    ],
  },
];

export const CLOSING: Block[] = [
  {
    kind: "p",
    text: "The client’s welfare comes first. Providers work inside competence, tell the truth about what they can and cannot do, keep adequate records, and accept responsibility for the people who work under them. When an unexpected change occurs, training is adjusted or stopped and appropriate care is arranged.",
  },
];
