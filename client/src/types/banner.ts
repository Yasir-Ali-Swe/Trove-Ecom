export interface HeroSlideItem {
  id: string;
  tag?: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  image: string;
  route: string;
  category?: string;
}

export interface HeroSlideProps {
  slide: HeroSlideItem;
  width: number;
  onPress: () => void;
}
export interface HeroSliderProps {
  slides?: HeroSlideItem[];
  autoPlayInterval?: number;
}
