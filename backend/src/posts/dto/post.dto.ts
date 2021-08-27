export class PostDto {
  readonly postId: string;
  readonly title: string;
  readonly description: string;
  readonly actors: any;
  readonly categories: any;
  readonly imdbRate: number;
}

/* @IsString gibi Class-validator yapisi da kullanilabilirdi */
