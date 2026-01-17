export interface City {
  id: number;
  name: string;
  region: string;
  rank: number;
  isHot: boolean;
  image: string;
  nomadScore: number;
  monthlyCost: number;
  internetSpeed: number;
  recommendRate: number;
  safetyGrade: string;
  weather: { icon: string; temp: number };
  aqi: number;
  currentNomads: number;
}

export interface Review {
  id: number;
  cityName: string;
  author: {
    name: string;
    avatar: string;
    nationality: string;
  };
  rating: number;
  content: string;
  createdAt: string;
}

export interface Meetup {
  id: number;
  title: string;
  city: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
}

export interface NomadLocation {
  city: string;
  count: number;
  avatars: string[];
}

export const cities: City[] = [
  {
    id: 1,
    name: "제주시",
    region: "제주특별자치도",
    rank: 1,
    isHot: true,
    image: "/images/jeju.jpg",
    nomadScore: 4.2,
    monthlyCost: 1800000,
    internetSpeed: 95,
    recommendRate: 87,
    safetyGrade: "A",
    weather: { icon: "sun", temp: 18 },
    aqi: 45,
    currentNomads: 23,
  },
  {
    id: 2,
    name: "부산",
    region: "부산광역시",
    rank: 2,
    isHot: true,
    image: "/images/busan.jpg",
    nomadScore: 4.0,
    monthlyCost: 1600000,
    internetSpeed: 120,
    recommendRate: 85,
    safetyGrade: "A",
    weather: { icon: "cloud", temp: 15 },
    aqi: 52,
    currentNomads: 18,
  },
  {
    id: 3,
    name: "서울",
    region: "서울특별시",
    rank: 3,
    isHot: false,
    image: "/images/seoul.jpg",
    nomadScore: 3.9,
    monthlyCost: 2200000,
    internetSpeed: 150,
    recommendRate: 82,
    safetyGrade: "A+",
    weather: { icon: "cloud-sun", temp: 12 },
    aqi: 68,
    currentNomads: 45,
  },
  {
    id: 4,
    name: "강릉",
    region: "강원특별자치도",
    rank: 4,
    isHot: false,
    image: "/images/gangneung.jpg",
    nomadScore: 3.8,
    monthlyCost: 1400000,
    internetSpeed: 85,
    recommendRate: 80,
    safetyGrade: "A",
    weather: { icon: "sun", temp: 10 },
    aqi: 38,
    currentNomads: 12,
  },
  {
    id: 5,
    name: "전주",
    region: "전북특별자치도",
    rank: 5,
    isHot: false,
    image: "/images/jeonju.jpg",
    nomadScore: 3.7,
    monthlyCost: 1300000,
    internetSpeed: 90,
    recommendRate: 78,
    safetyGrade: "A",
    weather: { icon: "cloud", temp: 14 },
    aqi: 55,
    currentNomads: 8,
  },
  {
    id: 6,
    name: "대전",
    region: "대전광역시",
    rank: 6,
    isHot: false,
    image: "/images/daejeon.jpg",
    nomadScore: 3.6,
    monthlyCost: 1500000,
    internetSpeed: 110,
    recommendRate: 75,
    safetyGrade: "A",
    weather: { icon: "cloud-sun", temp: 13 },
    aqi: 60,
    currentNomads: 10,
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    cityName: "제주시",
    author: {
      name: "김민수",
      avatar: "",
      nationality: "한국",
    },
    rating: 5,
    content: "제주도는 디지털 노마드에게 최고의 장소입니다. 카페 문화가 발달해 있고, 인터넷 속도도 빠르며, 자연환경이 아름다워 일과 삶의 균형을 잡기 좋습니다.",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    cityName: "부산",
    author: {
      name: "이영희",
      avatar: "",
      nationality: "한국",
    },
    rating: 4,
    content: "해운대 근처에서 한 달간 머물렀습니다. 바다를 보며 일할 수 있는 카페가 많고, 생활비가 서울보다 저렴해서 만족스러웠습니다.",
    createdAt: "2024-01-12",
  },
];

export const meetups: Meetup[] = [
  {
    id: 1,
    title: "제주 노마드 커피챗",
    city: "제주시",
    date: "2024-01-20",
    time: "14:00",
    location: "노마드카페 애월점",
    participants: 8,
    maxParticipants: 15,
  },
  {
    id: 2,
    title: "부산 디지털노마드 네트워킹",
    city: "부산",
    date: "2024-01-22",
    time: "19:00",
    location: "해운대 코워킹스페이스",
    participants: 12,
    maxParticipants: 20,
  },
  {
    id: 3,
    title: "서울 프리랜서 밋업",
    city: "서울",
    date: "2024-01-25",
    time: "18:30",
    location: "성수동 워크라운지",
    participants: 25,
    maxParticipants: 30,
  },
];

export const nomadLocations: NomadLocation[] = [
  { city: "서울", count: 45, avatars: ["", "", "", ""] },
  { city: "제주시", count: 23, avatars: ["", "", ""] },
  { city: "부산", count: 18, avatars: ["", "", ""] },
  { city: "강릉", count: 12, avatars: ["", ""] },
];

export const stats = {
  cities: 45,
  reviews: 1200,
  nomads: 890,
};

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCurrencyShort(amount: number): string {
  if (amount >= 10000) {
    return `${(amount / 10000).toFixed(0)}만원`;
  }
  return formatCurrency(amount);
}
