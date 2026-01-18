import { Budget, Region, Environment, BestSeason } from '@/types/filters';

export interface City {
  id: number;
  name: string;
  region: Region;
  rank: number;
  isHot: boolean;
  image: string;
  budget: Budget;
  environment: Environment;
  bestSeason: BestSeason;
  likes: number;
  dislikes: number;
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
    region: "제주도",
    rank: 1,
    isHot: true,
    image: "/images/jeju.jpg",
    budget: "200만원 이상",
    environment: "자연친화",
    bestSeason: "겨울",
    likes: 123,
    dislikes: 12,
  },
  {
    id: 2,
    name: "부산",
    region: "경상도",
    rank: 2,
    isHot: true,
    image: "/images/busan.jpg",
    budget: "100~200만원",
    environment: "도심선호",
    bestSeason: "여름",
    likes: 98,
    dislikes: 8,
  },
  {
    id: 3,
    name: "서울",
    region: "수도권",
    rank: 3,
    isHot: false,
    image: "/images/seoul.jpg",
    budget: "200만원 이상",
    environment: "코워킹 필수",
    bestSeason: "가을",
    likes: 156,
    dislikes: 23,
  },
  {
    id: 4,
    name: "강릉",
    region: "강원도",
    rank: 4,
    isHot: false,
    image: "/images/gangneung.jpg",
    budget: "100만원 이하",
    environment: "자연친화",
    bestSeason: "여름",
    likes: 67,
    dislikes: 5,
  },
  {
    id: 5,
    name: "전주",
    region: "전라도",
    rank: 5,
    isHot: false,
    image: "/images/jeonju.jpg",
    budget: "100만원 이하",
    environment: "카페작업",
    bestSeason: "봄",
    likes: 82,
    dislikes: 7,
  },
  {
    id: 6,
    name: "대전",
    region: "충청도",
    rank: 6,
    isHot: false,
    image: "/images/daejeon.jpg",
    budget: "100~200만원",
    environment: "도심선호",
    bestSeason: "가을",
    likes: 45,
    dislikes: 4,
  },
  {
    id: 7,
    name: "인천",
    region: "수도권",
    rank: 7,
    isHot: false,
    image: "/images/incheon.jpg",
    budget: "100~200만원",
    environment: "도심선호",
    bestSeason: "봄",
    likes: 52,
    dislikes: 6,
  },
  {
    id: 8,
    name: "대구",
    region: "경상도",
    rank: 8,
    isHot: false,
    image: "/images/daegu.jpg",
    budget: "100만원 이하",
    environment: "카페작업",
    bestSeason: "가을",
    likes: 61,
    dislikes: 5,
  },
  {
    id: 9,
    name: "광주",
    region: "전라도",
    rank: 9,
    isHot: false,
    image: "/images/gwangju.jpg",
    budget: "100만원 이하",
    environment: "카페작업",
    bestSeason: "봄",
    likes: 48,
    dislikes: 3,
  },
  {
    id: 10,
    name: "속초",
    region: "강원도",
    rank: 10,
    isHot: true,
    image: "/images/sokcho.jpg",
    budget: "100~200만원",
    environment: "자연친화",
    bestSeason: "여름",
    likes: 89,
    dislikes: 7,
  },
  {
    id: 11,
    name: "여수",
    region: "전라도",
    rank: 11,
    isHot: true,
    image: "/images/yeosu.jpg",
    budget: "100~200만원",
    environment: "자연친화",
    bestSeason: "여름",
    likes: 95,
    dislikes: 6,
  },
  {
    id: 12,
    name: "경주",
    region: "경상도",
    rank: 12,
    isHot: false,
    image: "/images/gyeongju.jpg",
    budget: "100만원 이하",
    environment: "자연친화",
    bestSeason: "가을",
    likes: 73,
    dislikes: 4,
  },
  {
    id: 13,
    name: "세종",
    region: "충청도",
    rank: 13,
    isHot: false,
    image: "/images/sejong.jpg",
    budget: "100~200만원",
    environment: "코워킹 필수",
    bestSeason: "봄",
    likes: 38,
    dislikes: 2,
  },
  {
    id: 14,
    name: "서귀포",
    region: "제주도",
    rank: 14,
    isHot: true,
    image: "/images/seogwipo.jpg",
    budget: "200만원 이상",
    environment: "자연친화",
    bestSeason: "겨울",
    likes: 112,
    dislikes: 9,
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

export function getCityById(id: number): City | undefined {
  return cities.find((city) => city.id === id);
}

export function getReviewsByCityName(cityName: string): Review[] {
  return reviews.filter((review) => review.cityName === cityName);
}

export function getMeetupsByCityName(cityName: string): Meetup[] {
  return meetups.filter((meetup) => meetup.city === cityName);
}

export function searchCities(query: string): City[] {
  if (!query.trim()) return cities;
  const q = query.toLowerCase();
  return cities.filter(
    (city) =>
      city.name.toLowerCase().includes(q) ||
      city.region.toLowerCase().includes(q) ||
      city.budget.toLowerCase().includes(q) ||
      city.environment.toLowerCase().includes(q) ||
      city.bestSeason.toLowerCase().includes(q)
  );
}
