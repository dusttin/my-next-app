// City data type
export interface City {
  id: string;
  name: string;
  district?: string;
  image: string;
  badge?: "popular" | "trending" | "new";
  monthlyCost: number;
  region: string;
  environment: string;
  bestSeason: string;
  likes: number;
  dislikes: number;
}

// Mock cities data
export const mockCities: City[] = [
  {
    id: "1",
    name: "서울",
    district: "강남구",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2070",
    badge: "popular",
    monthlyCost: 250,
    region: "수도권",
    environment: "도심선호",
    bestSeason: "가을",
    likes: 234,
    dislikes: 12,
  },
  {
    id: "2",
    name: "부산",
    district: "해운대구",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071",
    badge: "trending",
    monthlyCost: 180,
    region: "경상도",
    environment: "자연친화",
    bestSeason: "여름",
    likes: 198,
    dislikes: 8,
  },
  {
    id: "3",
    name: "제주",
    district: "제주시",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
    badge: "popular",
    monthlyCost: 200,
    region: "제주도",
    environment: "자연친화",
    bestSeason: "봄",
    likes: 156,
    dislikes: 5,
  },
  {
    id: "4",
    name: "대구",
    image: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=2070",
    monthlyCost: 160,
    region: "경상도",
    environment: "도심선호",
    bestSeason: "가을",
    likes: 92,
    dislikes: 7,
  },
  {
    id: "5",
    name: "광주",
    image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=2064",
    badge: "new",
    monthlyCost: 95,
    region: "전라도",
    environment: "카페작업",
    bestSeason: "봄",
    likes: 87,
    dislikes: 4,
  },
  {
    id: "6",
    name: "대전",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=2070",
    monthlyCost: 165,
    region: "충청도",
    environment: "코워킹 필수",
    bestSeason: "가을",
    likes: 72,
    dislikes: 6,
  },
];

// Utility function to get city by ID
export function getCityById(id: string): City | undefined {
  return mockCities.find((city) => city.id === id);
}

// Get sorted cities by likes
export function getSortedCities(): City[] {
  return [...mockCities].sort((a, b) => b.likes - a.likes);
}
