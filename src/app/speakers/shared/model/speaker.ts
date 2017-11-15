import { Name } from './name'
import { LocationSpeaker } from './location-speaker'
import { PictureSpeaker } from './picture-speaker'

export class Speaker {
  gender: string;
  name: Name;
  location: LocationSpeaker;
  email: string;
  picture: PictureSpeaker;
  registered: string

  constructor() {
    this.name = new Name();
    this.location = new LocationSpeaker();
    this.picture = new PictureSpeaker();
  }
}
