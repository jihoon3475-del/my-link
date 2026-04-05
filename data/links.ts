export interface LinkItem {
  id: string;
  title: string;
  url: string;
  faviconUrl?: string; // PRD 명세에 따른 아이콘/파비콘 URL 필드
  clickCount: number;  // PRD 명세 추가
  createdAt: string;   // PRD 명세 추가
}

export const dummyLinks: LinkItem[] = [
  {
    id: "1",
    title: "Instagram",
    url: "https://instagram.com",
    faviconUrl: "https://s2.googleusercontent.com/s2/favicons?domain=instagram.com",
    clickCount: 154,
    createdAt: new Date("2026-04-01T10:00:00Z").toISOString(),
  },
  {
    id: "2",
    title: "YouTube",
    url: "https://youtube.com",
    faviconUrl: "https://s2.googleusercontent.com/s2/favicons?domain=youtube.com",
    clickCount: 89,
    createdAt: new Date("2026-04-02T11:30:00Z").toISOString(),
  },
  {
    id: "3",
    title: "Blog",
    url: "https://velog.io",
    faviconUrl: "https://s2.googleusercontent.com/s2/favicons?domain=velog.io",
    clickCount: 42,
    createdAt: new Date("2026-04-03T15:20:00Z").toISOString(),
  },
  {
    id: "4",
    title: "GitHub",
    url: "https://github.com",
    faviconUrl: "https://s2.googleusercontent.com/s2/favicons?domain=github.com",
    clickCount: 201,
    createdAt: new Date("2026-04-04T09:15:00Z").toISOString(),
  },
  {
    id: "5",
    title: "Portfolio",
    url: "https://my-portfolio.com",
    clickCount: 76,
    createdAt: new Date("2026-04-05T14:00:00Z").toISOString(),
  },
];
