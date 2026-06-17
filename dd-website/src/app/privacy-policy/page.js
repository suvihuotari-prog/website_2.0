import { LegalArticle } from "@/components/LegalArticle";

export const metadata = {
  title: "Privacy Policy | Data Design",
  description:
    "How Data Design Oy collects, uses, and stores personal data when you use our website.",
  alternates: {
    canonical: "/privacy-policy",
    languages: { en: "/privacy-policy", fi: "/fi/privacy-policy" },
  },
};

const SECTIONS = [
  {
    title: "Data We Collect",
    body: [
      "We collect personal data in two ways. First, when you visit our website, we use Google Analytics to collect anonymized data such as the type of device and browser you use, your general location (such as country), the pages you visit, and the duration of your visit. This helps us understand how our website is used and improve its functionality.",
      "Second, if you contact us via our contact form, we collect the information you provide, such as your name, email address, company name, and message content. This information is stored securely in our customer relationship management system, Pipedrive, and used only for the purpose of responding to your inquiry or request.",
      "We do not allow users to create accounts or leave comments on our website, and therefore we do not collect or store such data.",
    ],
  },
  {
    title: "Purpose and Legal Basis for Processing",
    body: [
      "We process personal data for two main purposes. The first is to respond to inquiries submitted via our contact form. The second is to analyze website usage in order to improve our services and the performance of our website.",
      "The legal basis for this data processing is our legitimate interest in maintaining effective communication and improving our services. In some cases, we may also rely on your consent in accordance with the EU General Data Protection Regulation (GDPR).",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our website uses cookies to support web analytics and to improve user experience. Cookies are small text files stored on your device that allow us to collect anonymous statistics and ensure that the site functions as intended. In some cases, third-party content embedded on our site (such as videos or maps) may also place cookies on your device. You can manage or delete cookies through your browser settings at any time.",
    ],
  },
  {
    title: "Embedded content from other websites",
    body: [
      "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.",
      "These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.",
    ],
  },
  {
    title: "Data Sharing and Transfers",
    body: [
      "We may share your personal data with trusted service providers who help us operate our website and manage customer relationships. These include Google Analytics for web analytics and Pipedrive for managing contact requests and communications. These service providers may process your data outside the European Union or European Economic Area, but only under strict data protection safeguards such as Standard Contractual Clauses or other appropriate legal mechanisms, in accordance with GDPR.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. For example, contact form submissions are stored for up to twelve months unless continued communication is required. Data collected via Google Analytics is retained in accordance with Google's standard retention settings.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "As a data subject under the GDPR, you have the right to request access to the personal data we hold about you, the right to request corrections to any inaccurate information, and the right to request deletion of your personal data. You may also have the right to object to the processing of your data or request a copy of your data in a commonly used format. To exercise these rights, please contact us using the information provided below.",
    ],
  },
  {
    title: "Contact Information",
    body: [
      "If you have any questions about this Privacy Policy or how your personal data is processed, you can contact us by email at info@datadesign.fi. We will respond as promptly as possible.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalArticle
      badge="Legal"
      title="Privacy Policy"
      effectiveDate="Effective date: June 1, 2025"
      intro={'At Data Design Oy ("we", "us", "our"), we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, and store personal data when you use our website at https://datadesign.fi.'}
      sections={SECTIONS}
    />
  );
}
