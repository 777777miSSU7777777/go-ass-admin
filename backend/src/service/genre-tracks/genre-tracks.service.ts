import { Injectable } from '@nestjs/common';
import { GenreTracks } from "@model";

@Injectable()
export class GenreTracksService {
  async getGenreTracks(): Promise<GenreTracks[]> {
    return await GenreTracks.query().select();
  }
  
}

export default GenreTracksService;