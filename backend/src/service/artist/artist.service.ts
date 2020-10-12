import { Injectable } from '@nestjs/common';
import { Artist } from "@model";

@Injectable()
export class ArtistService {
  async getArtists() {
    return await Artist.query().select();
  }
  
}

export default ArtistService;
