
import { Article, Report, Webinar, Comment } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Navigating Supply Chain Volatility in 2024',
    description: 'Exploring strategic frameworks for global logistics and risk mitigation in an unpredictable market environment.',
    category: 'Logistics',
    categoryColor: 'text-primary',
    author: {
      name: 'Jonathan Vance',
      role: 'Operations Lead',
      avatar: 'https://picsum.photos/seed/john/100/100'
    },
    date: 'May 15',
    readTime: '6 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZP56UT25KKNF_mDoHpgS2OK9xqL2ByOSmtwq0vud5TyAaWnvHObMdC1-qhgv8Jf21xTVdeo5btKk2E5myvw5A05W88hVN0SWncV73YG_US1479BzhfOTbs5DsSvb3L_mqRaZGFRWPOZ3mmEybsrasCZIKyZnPdUOrpviojefm84O7jjf1ZVXVhpLOtUFiFfCJPQDwaT89_OiVPGrEMjQwpYm6F0Wb3kAPeEocVdUPIy8IBIld6J2Wq6CRp1zlxCyFTZoazL1jtiXn'
  },
  {
    id: '2',
    title: 'The Rise of Sustainable Finance and ESG',
    description: 'Why environmental and social governance criteria are becoming the gold standard for modern investment portfolios.',
    category: 'Finance',
    categoryColor: 'text-primary',
    author: {
      name: 'Evelyn Harper',
      role: 'ESG Analyst',
      avatar: 'https://picsum.photos/seed/jane/100/100'
    },
    date: 'May 12',
    readTime: '8 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY_jOOfyQwhIK2DK28HgB9fQ7go96sJYVIOn-4jccaJGqP5uwyU9z7KsEB7uOJ7U78J_QrX6GS3i-I8A8a2kB9B3ID2DJYcLNWVAY2zi5V-BR8ywYPJ8K4MkJa5c9J7mZf1qUAFmlZo7MIhj3eBBcqqTI24i9mt14w8zpEvebc3KnbvEZvuz-lelgWEqJ5I1rJS0uPEHyVzc6UEtmsLA_h3Mr2n0hmDA35ZDCcKAPwVKyB1wpCj8JQ98TKEgAiSMkAq98ERkGGbXiL'
  },
  {
    id: '3',
    title: 'Cybersecurity in the Remote Era',
    description: 'The essential guide to zero-trust architecture and protecting decentralized workforce networks.',
    category: 'Technology',
    categoryColor: 'text-primary',
    author: {
      name: 'Robert Chen',
      role: 'Security Consultant',
      avatar: 'https://picsum.photos/seed/robert/100/100'
    },
    date: 'May 10',
    readTime: '5 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv_r9JEvRPENmHyZD4FDjyTiBBhqMb5e-kWDH0CvBpwCiR0q9YFDIVq1qWtnr6VUFll2pGDKD-Eam78Es2xVSatjUBuuAqF9KDi7iuVfayBmx98Qm7uJmGNyN26h0fqbwy43UBN2n1DxlNNFJnundlbCc-FO7T7Vr7Dy_gZqdrZWJHGo8mlFoR286RNW8Yz_6y0X616a1jCABmxjvrrJsCHG8k4e3n7qfiygkV0RgYBzsi6JMxD4Kqz85Ue4dWN4LAA933nF6-emNL'
  },
  {
    id: '4',
    title: 'Building Resilient Teams Post-Pandemic',
    description: 'Fostering psychological safety and productivity in hybrid workspaces while maintaining company values.',
    category: 'Culture',
    categoryColor: 'text-primary',
    author: {
      name: 'Sarah Williams',
      role: 'HR Strategy',
      avatar: 'https://picsum.photos/seed/sarah/100/100'
    },
    date: 'May 08',
    readTime: '7 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Q5nlI7YFp-cdH_L1relUSUw2Wg8VgWNSJfZ5hsvY22PAHeZlxgoS6vmZBwAss0BJuDEwdRHSv9tKvJgGMWYxWO-lyYCmHHCtX5sQqUFBuKg9Ar9EsFxnNOSYo9TFXWLpJ2KkmTt5qgBWJnml5h8TDyxAs3wKwjLJAVdaV_D8MqHNJ3ssr3-b7qaEaLST4BTV4yOxJvkjmsJYCZ-RBActIcwoPvmBtf8mNIqJFV80APyIXlXkR6AgH3J6QxncNM5ttg-r0x-VqG4r'
  }
];

export const REPORTS: Report[] = [
  { id: '1', title: 'Market Shift Analysis: Emerging Tech in Manufacturing', period: 'Q3 2023', type: 'MARKET REPORT' },
  { id: '2', title: 'The Future of Sustainable Logistics', period: 'WHITE PAPER', type: 'INSIGHTS' }
];

export const WEBINARS: Webinar[] = [
  { id: '1', title: 'Scaling AI Foundations for Enterprise Leaders', month: 'NOV', day: '12', date: 'Nov 12' },
  { id: '2', title: 'Corporate Governance in the Age of Web3', month: 'NOV', day: '18', date: 'Nov 18' }
];

export const COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: 'James Wilson',
    avatar: 'https://picsum.photos/seed/james/100/100',
    timeAgo: '2 days ago',
    content: "Great insights on the ROI of dynamic resource allocation. We've seen a significant shift in our project velocity since adopting a quarterly re-prioritization model.",
    replies: [
      {
        id: 'c2',
        author: 'Sarah Chen',
        avatar: 'https://picsum.photos/seed/sarahc/100/100',
        timeAgo: '1 day ago',
        content: "James, did you face any resistance from department heads during that shift? We're currently exploring this at our firm.",
      }
    ]
  }
];
