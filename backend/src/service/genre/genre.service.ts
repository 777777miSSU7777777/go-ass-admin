import { Injectable } from '@nestjs/common';
import { Genre } from "@model";

@Injectable()
export class GenreService {
  async getGenres(): Promise<Genre[]> {
    return await Genre.query().select();
  }
  
}

export default GenreService;