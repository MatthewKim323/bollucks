export const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;
export const ACCENT = "#182E5F";

export type Highlight = { delay: number; duration: number; type?: "wash" | "pill" };
export type Fragment = { text: string; highlight?: Highlight };
export type Block =
  | { type: "paragraph"; fragments: Fragment[] }
  | { type: "heading"; text: string };
export type Fact = { key: string; value: string; src: string };
export type Scenario = {
  id: string;
  sourceIndex: number;
  agentIndex: number;
  doc: { title: string; blocks: Block[] };
  sync: { facts: Fact[] };
};

const H1: Highlight = { delay: 1600, duration: 550 };
const H2: Highlight = { delay: 2100, duration: 550 };
const H3: Highlight = { delay: 2600, duration: 550 };
const H4: Highlight = { delay: 3100, duration: 550 };

export const SCENARIOS: Scenario[] = [
  {
    id: "returns",
    sourceIndex: 0,
    agentIndex: 0,
    doc: {
      title: "Returns Policy, Enterprise",
      blocks: [
        {
          type: "paragraph",
          fragments: [
            { text: "Full-price items are returnable within " },
            { text: "30 days", highlight: { ...H1, type: "pill" } },
            { text: " of delivery confirmation. Sale items are " },
            { text: "final sale", highlight: H2 },
            { text: ", no returns or exchanges accepted." },
          ],
        },
        {
          type: "paragraph",
          fragments: [
            { text: "International orders subject to a " },
            { text: "$12 handling fee", highlight: { ...H3, type: "pill" } },
            { text: " on refund. APAC returns require advance authorization within 14 days of delivery." },
          ],
        },
        { type: "heading", text: "Refund processing" },
        {
          type: "paragraph",
          fragments: [
            { text: "Refunds issued to original payment method within " },
            { text: "5 business days", highlight: H4 },
            { text: " of return receipt. Items damaged in transit are replaced free of charge." },
          ],
        },
        {
          type: "paragraph",
          fragments: [
            {
              text: "Exchange requests follow the same window. Store credit issued instantly when the return label is scanned at carrier intake.",
            },
          ],
        },
      ],
    },
    sync: {
      facts: [
        { key: "refund_window", value: "30 days", src: "Returns Policy v3.2" },
        { key: "sale_items", value: "Final sale", src: "Help Center FAQ" },
        { key: "handling_fee", value: "$12 international", src: "Returns Policy v3.2" },
        { key: "refund_method", value: "Original payment", src: "Returns Policy v3.2" },
        { key: "transit_damage", value: "Replaced free", src: "Returns Policy v3.2" },
        { key: "apac_window", value: "14 days, advance auth", src: "Returns Policy v3.2" },
        { key: "store_credit", value: "Instant at intake", src: "Carrier Integration" },
      ],
    },
  },
  {
    id: "formulary",
    sourceIndex: 1,
    agentIndex: 1,
    doc: {
      title: "Formulary 2026, Biosimilar X",
      blocks: [
        {
          type: "paragraph",
          fragments: [
            { text: "Formulary " },
            { text: "Tier 3", highlight: { ...H1, type: "pill" } },
            { text: ", prior authorization required. Step therapy requires a " },
            { text: "30-day", highlight: H2 },
            { text: " tier-1 alternative trial before approval." },
          ],
        },
        { type: "heading", text: "HMO Medicaid plans" },
        {
          type: "paragraph",
          fragments: [
            { text: "Coverage excluded, refer member to Specialty Pharmacy Network. Max days supply per fill is " },
            { text: "90 days", highlight: { ...H3, type: "pill" } },
            { text: "." },
          ],
        },
        { type: "heading", text: "Commercial PPO" },
        {
          type: "paragraph",
          fragments: [
            {
              text: "Covered after step therapy completion. Quantity limits apply per member per month based on diagnosis code.",
            },
          ],
        },
        {
          type: "paragraph",
          fragments: [
            { text: "Appeals processed within " },
            { text: "72 hours", highlight: H4 },
            { text: " for urgent requests. Standard appeals reviewed within 14 calendar days of submission." },
          ],
        },
      ],
    },
    sync: {
      facts: [
        { key: "tier", value: "Tier 3, prior auth", src: "Formulary 2026" },
        { key: "step_therapy", value: "30-day tier-1 trial", src: "Formulary 2026" },
        { key: "medicaid_hmo", value: "Excluded", src: "Prior Auth Rules" },
        { key: "days_supply", value: "90 days max", src: "Formulary 2026" },
        { key: "specialty_network", value: "Required for HMO", src: "Specialty Network" },
        { key: "ppo_coverage", value: "After step therapy", src: "Formulary 2026" },
        { key: "urgent_appeals", value: "72-hour review", src: "Appeals SOP" },
      ],
    },
  },
  {
    id: "sla",
    sourceIndex: 2,
    agentIndex: 2,
    doc: {
      title: "SLA, Tier 1 Incidents",
      blocks: [
        {
          type: "paragraph",
          fragments: [
            { text: "Acknowledgement: within " },
            { text: "15 minutes", highlight: { ...H1, type: "pill" } },
            { text: " of paging via on-call rota. Mitigation target: " },
            { text: "30 minutes", highlight: H2 },
            { text: " from acknowledgement to recovery." },
          ],
        },
        { type: "heading", text: "Escalation policy" },
        {
          type: "paragraph",
          fragments: [
            { text: "Page secondary on-call after " },
            { text: "20 minutes", highlight: { ...H3, type: "pill" } },
            { text: " unacknowledged. Status page must update within 10 minutes of incident bridge open." },
          ],
        },
        { type: "heading", text: "Communications" },
        {
          type: "paragraph",
          fragments: [
            {
              text: "Customer notification channels post within 5 minutes of bridge open. Internal Slack channel #incidents auto-summons on-call leads.",
            },
          ],
        },
        {
          type: "paragraph",
          fragments: [
            { text: "Post-mortem draft due within " },
            { text: "48 hours", highlight: H4 },
            { text: ". Root-cause analysis published to engineering all-hands within one week of resolution." },
          ],
        },
      ],
    },
    sync: {
      facts: [
        { key: "ack_time", value: "15 minutes", src: "Incident Runbook" },
        { key: "mitigation", value: "30-minute target", src: "SLA Matrix" },
        { key: "paging", value: "PagerDuty 24/7", src: "On-call rota" },
        { key: "escalation", value: "20 min unack", src: "Incident Runbook" },
        { key: "status_page", value: "10 min from bridge", src: "Incident Runbook" },
        { key: "customer_comms", value: "5 min from bridge", src: "Comms Playbook" },
        { key: "postmortem", value: "48-hour draft", src: "Incident Runbook" },
      ],
    },
  },
];

export type StageId = "document" | "sync";
export const STAGES: { id: StageId; durationMs: number }[] = [
  { id: "document", durationMs: 4500 },
  { id: "sync", durationMs: 3000 },
];

export const SOURCES = [
  { name: "Zendesk", logo: "/img/img-1fe5f48d5d.svg", size: 46 },
  { name: "Notion", logo: "/img/img-cdd7c139eb.svg", size: 110 },
  { name: "ServiceNow", logo: "/img/img-65215d6db6.svg", size: 64 },
  { name: "Salesforce", logo: "/img/img-c68aea8c17.svg", size: 150 },
  { name: "Microsoft", logo: "/img/img-1f0f669483.svg", size: 130 },
  { name: "Slack", logo: "/img/img-6bf68a8a19.svg", size: 120 },
  { name: "Dropbox", logo: "/img/img-a646485f44.svg", size: 60 },
  { name: "HubSpot", logo: "/img/img-4430a53450.svg", size: 110 },
];

/** Status pill copy per stage. */
export const STATUS: Record<StageId, string[]> = {
  document: ["Reading document", "Detecting key facts"],
  sync: ["Extracting claims"],
};
export const STATUS_ALL = [...STATUS.document, ...STATUS.sync];
