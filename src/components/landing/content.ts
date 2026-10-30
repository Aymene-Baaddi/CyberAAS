export const contactEmail = "contact@kryptos.security";

export const governorates = [
  { code: "CAP", name: "Capital" },
  { code: "HAW", name: "Hawalli" },
  { code: "FAR", name: "Farwaniya" },
  { code: "AHM", name: "Ahmadi" },
  { code: "JAH", name: "Jahra" },
  { code: "MUB", name: "Mubarak Al-Kabeer" },
] as const;

export const serviceLines = [
  {
    index: "01",
    title: "Penetration test",
    text: "We test the application, system, infrastructure or network you authorise, and hand you the vulnerabilities.",
  },
  {
    index: "02",
    title: "Remediation",
    text: "We propose the fixes and carry them out. It starts only after you have read the findings.",
  },
] as const;

export const services = [
  {
    title: "Applications and APIs",
    text: "Web applications, mobile backends and the interfaces they expose. The test follows the paths a user, or an outsider, can actually reach.",
  },
  {
    title: "Systems",
    text: "Servers, identities and the administration paths around them. Misconfiguration and excessive privilege are in scope when the rules say so.",
  },
  {
    title: "Infrastructure",
    text: "Cloud accounts, hosting and the control plane. The report names the flaw, the evidence, and the asset it sits on.",
  },
  {
    title: "Networks",
    text: "Exposed services, remote access and the routes between sites. Segmentation is tested only where you have authorised it.",
  },
] as const;

export const sectors = [
  {
    title: "Energy and industry",
    text: "Oil, refining, petrochemicals, power and water.",
  },
  {
    title: "Financial services",
    text: "Banks, exchanges, payments and the groups behind them.",
  },
  {
    title: "Government",
    text: "Ministries, authorities and the suppliers they depend on.",
  },
  {
    title: "Aviation and ports",
    text: "Carriers, airports, free zones and maritime gateways.",
  },
  {
    title: "Healthcare",
    text: "Hospital groups and the patient data they hold.",
  },
  {
    title: "Telecom and cities",
    text: "Operators and the digital infrastructure of the city.",
  },
] as const;

export const method = [
  {
    index: "01",
    title: "Scope",
    text: "Name the target, what is in, what is out, and who can authorise the test.",
  },
  {
    index: "02",
    title: "Test",
    text: "We pentest the agreed surface and record each flaw with the evidence that proves it.",
  },
  {
    index: "03",
    title: "Report",
    text: "You receive the vulnerabilities, with severity and what they allow.",
  },
  {
    index: "04",
    title: "Remediate",
    text: "If you commission it, we propose the fixes and carry them out.",
  },
] as const;

export const frameworks = [
  { name: "CITRA Cybersecurity Framework", where: "Kuwait" },
  { name: "ISO/IEC 27001", where: "When an international certificate applies" },
] as const;

export const questions = [
  {
    q: "How is the work priced?",
    a: "On quote. There is no public rate card. The penetration test and the remediation are quoted separately.",
  },
  {
    q: "What do we receive from the test?",
    a: "The vulnerabilities. Each one comes with severity and the evidence behind it. The report is the end of the test.",
  },
  {
    q: "Are the fixes included?",
    a: "No. Proposing the fixes and applying them is the remediation, quoted on its own after you have read the findings.",
  },
  {
    q: "What can you test?",
    a: "An application, a system, an infrastructure or a network, inside a written scope. If you cannot authorise the test, we do not start.",
  },
  {
    q: "How long does a test take?",
    a: "It depends on the target. The window is set when the work is quoted. Access is named and time-boxed.",
  },
  {
    q: "Do you work outside Kuwait?",
    a: "No. The estate has to be in Kuwait, and you have to be allowed to authorise the test.",
  },
  {
    q: "Can the report be in Arabic?",
    a: "Yes. Findings are delivered in Arabic or English. The language is chosen when the scope is agreed.",
  },
  {
    q: "Do you keep the brief we send?",
    a: "No. The form copies the brief to your clipboard. Nothing is stored on this page.",
  },
] as const;

export const needs = ["Penetration test", "Remediation", "Test and remediation"] as const;
