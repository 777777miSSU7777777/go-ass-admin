import { Injectable } from '@nestjs/common';
import { GenreTracks } from "@model";

@Injectable()
export class GenreTracksService {
  async getGenreTracks(): Promise<GenreTracks[]> {
    return await GenreTracks.query().select();
  }

  async newGenreTracks(genreTracks: GenreTracks[]): Promise<GenreTracks[]> {
    return await GenreTracks.query().insertAndFetch(genreTracks);
  }
}

export default GenreTracksService;