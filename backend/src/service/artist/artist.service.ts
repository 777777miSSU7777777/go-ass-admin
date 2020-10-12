import { Injectable } from '@nestjs/common';
import { Artist } from "@model";
import * as uuid from 'uuid';

@Injectable()
export class ArtistService {
  async getArtists(): Promise<Artist[]> {
    return await Artist.query().select();
  }

  async newArtists(artists: Artist[]): Promise<Artist[]> {
      return Artist.query().insertAndFetch(artists.map((artist: Artist) => {
        return { 
            ...artist,
            artistId: artist.artistId || uuid.v4(),
        }
    }));
  }
}

export default ArtistService;
