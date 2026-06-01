"use client";

import {
  InsightArticleTemplate,
  ArticleLead,
  ArticleQuestion,
  ArticleParagraph,
  ArticleQuote,
} from "@/components/InsightArticleTemplate";

const RELATED = [
  {
    title: "How Unified Data Management Set the Stage for Using AI",
    description: "Jaakko Mattila explains how a global organization built trust in its data through change management.",
    category: "Expert Talk",
    date: "Oct 16, 2025",
    author: "Jaakko Mattila",
    authorPhoto: "/images/people/JaakkoMattila.png",
    image: "/images/people/JaakkoMattila_wide.png",
    href: "/insights/unified-data-management-for-ai",
  },
  {
    title: "How a Data Strategy Was Turned into Business Growth",
    description: "Toni Haapakoski explains how a data strategy can turn a company's business goals into concrete actions.",
    category: "Expert Talk",
    date: "Nov 24, 2025",
    author: "Toni Haapakoski",
    authorPhoto: "/images/people/ToniHaapakoski.jpg",
    image: "/images/people/ToniHaapakoski_wide.jpg",
    href: "/insights/data-strategy-into-business-growth",
  },
  {
    title: "What Does an AI-Native Organization Actually Look Like?",
    description: "Not a framework or maturity model — a day-in-the-life. What changes when AI goes from project to operating model.",
    category: "AI Insights",
    date: "Feb 19, 2026",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/illustrations/DD-Illustration-2.png",
    href: "/insights/ai-native-organization",
  },
];

export default function ClarifyingDataOwnershipPage() {
  return (
    <InsightArticleTemplate
      title="Clarifying Data Ownership Opened the Door to Using It Effectively"
      category="Expert Talk"
      date="Jan 19, 2026"
      readTime="6 min read"
      author="Suvi Huotari"
      authorPhoto="/images/people/SuviHuotari.jpg"
      authorRole="Data & AI Advisor, Data Design"
      authorBio="Suvi works as an advisor on data and AI initiatives, specializing in improving data usability and supporting data-driven decision-making. Her methods include developing governance models, service design, and data strategies."
      image="/images/people/SuviHuotari.jpg"
      tags={["Data Governance", "Data Ownership", "Data Utilization", "Collaboration"]}
      keyTakeaways={[
        "Unclear data ownership leads to paralysis — people hesitate to use data they're not sure they're allowed to touch",
        "Assigning accountability to whoever is best equipped for data quality oversight resolves ambiguity faster than debating theoretical ownership",
        "A shared language for discussing data is often more valuable than the governance document itself",
        "The journey of clarifying ownership — the conversations, the joint reflection — matters as much as the final deliverable",
      ]}
      relatedArticles={RELATED}
    >
      <ArticleLead>
        In many organizations, the use of data remains limited because no one is quite sure who is responsible for it or what it can be used for. Unclear ownership leads to hesitation, and in the worst cases, to situations where data is not used at all.
      </ArticleLead>

      <ArticleParagraph>
        Data & AI Advisor Suvi Huotari shares a project where her team clarified data ownership and established clear principles for how data can be used across a complex network of stakeholders.
      </ArticleParagraph>

      <ArticleQuestion>Who are you and what do you do?</ArticleQuestion>

      <ArticleParagraph>
        I am Suvi Huotari, and I work as an advisor in various data and AI projects. My focus is on improving the usability and purposeful application of data — in other words, developing the foundations for data-driven decision-making through data governance models, service design, or data strategies. I also make sure our projects are successfully completed while helping clients discover how AI tools can enhance their capabilities.
      </ArticleParagraph>

      <ArticleQuestion>Is there a particular project that stands out to you?</ArticleQuestion>

      <ArticleParagraph>
        One of the most memorable projects was about defining common principles for data ownership and use within an organization that involved several different stakeholders. The starting point was quite complex, as each party had its own needs and perspectives on how the data should be used.
      </ArticleParagraph>

      <ArticleParagraph>
        It stood out because we managed to simplify a complicated setup and create clear principles that truly enabled the organization to use its data to support business objectives.
      </ArticleParagraph>

      <ArticleQuestion>What was the project about?</ArticleQuestion>

      <ArticleParagraph>
        The company acted as an umbrella organization overseeing several smaller entities. The main challenge was the lack of clarity about how the data could be used, who owned which data, and how it moved between stakeholders.
      </ArticleParagraph>

      <ArticleParagraph>
        There was limited visibility into the data, which made it difficult to develop use cases. Ownership was interpreted in many ways. Despite a clear willingness to pursue new data-driven use cases, many initiatives were held back because the data was perceived as belonging to someone else. As a result, data use remained cautious — or did not happen at all.
      </ArticleParagraph>

      <ArticleParagraph>
        The goal of the project was to clarify data ownership, define principles for its use, and build a shared understanding of how and under what conditions the data could be utilized across different use cases.
      </ArticleParagraph>

      <ArticleQuestion>What kind of solution did you end up with?</ArticleQuestion>

      <ArticleParagraph>
        In the final solution, we defined what data was shared between different stakeholders and who was responsible for it. Ownership and accountability were assigned to the parties best equipped to ensure data quality, timeliness, data protection, and related decision-making.
      </ArticleParagraph>

      <ArticleParagraph>
        In particular, ownership of combined datasets had previously been unclear, but during the project, this was clarified. To support the solution, we produced both communication materials and more formal documentation to ensure the principles became part of daily practice.
      </ArticleParagraph>

      <ArticleQuestion>What challenges did you encounter?</ArticleQuestion>

      <ArticleParagraph>
        The biggest challenge was finding the right level of detail. At times, we went very deep into the data itself, exploring what existed and in what form, and at other times, we stepped back to look at the strategic big picture. Finding balance between these two perspectives was key, as the project had a limited timeline and not everything could be solved at once.
      </ArticleParagraph>

      <ArticleParagraph>
        As the work progressed, new perspectives and change needs also emerged that were not visible at the start. I worked both as an expert and project manager, which added complexity but also made scheduling and decision-making smoother.
      </ArticleParagraph>

      <ArticleQuestion>How was the solution received?</ArticleQuestion>

      <ArticleParagraph>
        The solution was very well received. We built a trusting and open environment where discussions were honest and straightforward — something especially important since this was one of the organization's first projects of its kind.
      </ArticleParagraph>

      <ArticleQuote>
        Data governance models can easily become abstract or overly technical, so simplifying the language and grounding everything in practical examples was essential. The goal isn't a perfect governance model — it's one that people actually follow.
      </ArticleQuote>

      <ArticleParagraph>
        It was great to see how openly the client shared their expectations and views. Once communication became clear and easy to understand, even the complex themes started to make sense for everyone.
      </ArticleParagraph>

      <ArticleQuestion>Any other interesting takeaways?</ArticleQuestion>

      <ArticleParagraph>
        A shared language and way of thinking about data emerged during the project, which made communication between stakeholders much smoother and reduced ambiguity. It also helped make previously tacit practices visible, allowing gaps and risks to be identified.
      </ArticleParagraph>

      <ArticleQuote>
        In projects like this, the journey itself is often more valuable than the final deliverable, as clich&eacute; as that sounds. The best insights come from joint reflection and hands-on exploration.
      </ArticleQuote>

      <ArticleParagraph>
        We tested ideas several times and continued training the client even after the project ended.
      </ArticleParagraph>

      <ArticleQuestion>Could the same approach be applied elsewhere?</ArticleQuestion>

      <ArticleParagraph>
        Definitely. Data ownership is a relevant topic for every organization, especially now that data and AI use is increasing. Regardless of structure, there always needs to be a clearly accountable party for data so it can be used responsibly and in a controlled way.
      </ArticleParagraph>

      <ArticleParagraph>
        Even though this particular organization had a somewhat atypical structure, the same principles apply across many different contexts.
      </ArticleParagraph>

      <ArticleQuestion>What was the best part of the project?</ArticleQuestion>

      <ArticleParagraph>
        The best part was the shared thinking and how we got different parties to reflect on data ownership and use through practical examples.
      </ArticleParagraph>

      <ArticleParagraph>
        Having full responsibility for the project from start to finish also made the work both smooth and meaningful. Planning and execution went hand in hand in close collaboration with the client.
      </ArticleParagraph>

      <ArticleParagraph>
        Open communication and mutual trust made it possible to identify areas that still needed clarification as the project evolved. In the end, it was rewarding to see how all the discussions and decisions came together into a clear, concrete solution from a complex starting point.
      </ArticleParagraph>
    </InsightArticleTemplate>
  );
}
