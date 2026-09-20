export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
  breaking?: boolean;
};

export const categories = [
  "Investigations",
  "Politics",
  "Business",
  "Africa",
  "Opinion",
  "Crime",
] as const;

export const articles: Article[] = [
  {
    id: "1",
    slug: "ssa-court-victory-thabo-makwakwa",
    title:
      "Thabo Makwakwa wins landmark SCA case against State Security Agency over CIA-ANC intelligence leak",
    excerpt:
      "The Supreme Court of Appeal has ruled in favour of investigative journalist Thabo Makwakwa in a high-stakes battle with the SSA over the publication of a classified report detailing alleged US intelligence operations targeting the ANC.",
    category: "Investigations",
    author: "Inside Factor Staff",
    date: "2024-04-05",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    featured: true,
    breaking: true,
  },
  {
    id: "2",
    slug: "idt-ceo-resigns-bribery-scandal",
    title: "Suspended IDT CEO Tebogo Malaka resigns following bribery scandal",
    excerpt:
      "Former Independent Development Trust CEO has stepped down after explosive allegations of corruption and bribery rocked the state-owned entity.",
    category: "Investigations",
    author: "Thabo Makwakwa",
    date: "2026-01-14",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: "3",
    slug: "cat-matlala-saps-testimony",
    title:
      "Inside 'Cat' Matlala's SAPS testimony: Criminal past, expensive tender and R500k claims",
    excerpt:
      "Businessman Vusimuzi 'Cat' Matlala made explosive claims before the Ad Hoc Committee investigating systemic corruption in South Africa's law enforcement agencies.",
    category: "Crime",
    author: "Thabo Makwakwa",
    date: "2025-11-26",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
  {
    id: "4",
    slug: "enl-mutual-bank-launch",
    title:
      "South Africa's first black women-led Mutual Bank set to launch next week",
    excerpt:
      "eNL Mutual Bank, the country's newest fully licensed mutual bank that is majority black women-owned and women-led, is preparing for its official launch.",
    category: "Business",
    author: "Thabo Makwakwa",
    date: "2025-12-10",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: "5",
    slug: "anc-us-interference-report",
    title:
      "The battle to expose US interference in the ANC: State Security Agency vs Independent Media",
    excerpt:
      "A leaked top-secret report titled 'US interest in ANC party dynamics' sparked a multi-year legal war between the SSA and journalist Thabo Makwakwa.",
    category: "Investigations",
    author: "Thabo Makwakwa",
    date: "2022-11-05",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
  },
  {
    id: "6",
    slug: "magaqa-hitman-leaked-audio",
    title:
      "LEAKED: Hitman behind Sindiso Magaqa murder heard discussing R600k payment",
    excerpt:
      "Exclusive audio recordings surface in which the self-confessed hitman discusses the outstanding payment with key political figures linked to the assassination.",
    category: "Crime",
    author: "Inside Factor Staff",
    date: "2025-06-11",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    breaking: true,
  },
  {
    id: "7",
    slug: "mbalula-presidential-ambitions",
    title: "Mbalula's presidential ambitions raise eyebrows in ANC regions",
    excerpt:
      "Numerous ANC regions have raised concerns that the party's Secretary-General is attempting to influence conferences for his own presidential ambitions.",
    category: "Politics",
    author: "Inside Factor Staff",
    date: "2025-05-25",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
  },
  {
    id: "8",
    slug: "eskom-ipp-tender-scandal",
    title:
      "Former Eskom COO's company lands major IPP battery storage tender",
    excerpt:
      "Mulilo Energy, chaired by former Eskom COO Jan Oberholzer, has been appointed as a successful bidder in the R9.5 billion battery storage project.",
    category: "Business",
    author: "Inside Factor Staff",
    date: "2025-05-31",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    id: "9",
    slug: "opinion-uncensored-journalism",
    title:
      "Why South Africa still needs unfiltered, uncensored investigative journalism",
    excerpt:
      "In an era of media capture and political pressure, independent platforms remain the last line of defence for the public's right to know.",
    category: "Opinion",
    author: "Thabo Makwakwa",
    date: "2026-03-12",
    image:
      "https://images.unsplash.com/photo-1504711434869-ba6c8d46958c?w=800&q=80",
  },
  {
    id: "10",
    slug: "drc-sa-troops-withdrawal",
    title:
      "SA soldiers stuck in DRC told to surrender weapons as they cross into Rwanda",
    excerpt:
      "South African troops deployed in the Democratic Republic of Congo face a tense withdrawal route through Rwanda amid ongoing regional tensions.",
    category: "Africa",
    author: "Inside Factor Staff",
    date: "2025-05-24",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
  },
];

export function getFeatured() {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getBreaking() {
  return articles.filter((a) => a.breaking);
}

export function getByCategory(category: string) {
  return articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}

export function getLatest(limit = 6) {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
