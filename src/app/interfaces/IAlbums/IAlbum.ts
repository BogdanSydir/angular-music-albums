import {IArtist} from "./IArtist";
import {IImage} from "./IImage";
import {IAttrAlbum} from "./IAttrAlbum";

export interface IAlbum {
  name: string,
  mbid: string,
  url: string,
  artist: IArtist
  image: IImage[]
  attr:IAttrAlbum
}
