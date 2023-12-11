export type TSendNewReview = {
  id: string | undefined;
  rating: number;
  comment: string;
}

export type TNewReview = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}
