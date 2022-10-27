import {ITag} from "./ITag";
import {IAttrTag} from "./IAttrTag";

export interface ITags {
  tags:ITag[], //list of tags
  attr:IAttrTag   //info about tags (page, perpage, total, totalpages)
}
