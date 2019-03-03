import { Season } from "./Season";
import { Standing } from "./Standing";

export interface ApiResponse {
  competition: any,
  filters: any,
  season: Season,
  standings: Standing[]
}