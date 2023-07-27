/* =======================================================
 *
 * Created by anele on 25/07/2023.
 *
 * @anele_ace
 *
 * =======================================================
 */

export interface Vehicles {
  name?:                 string;
  model?:                string;
  manufacturer?:         string;
  costInCredits?:        string;
  length?:               string;
  maxAtmospheringSpeed?: string;
  crew?:                 string;
  passengers?:           string;
  cargoCapacity?:        string;
  consumables?:          string;
  vehicleClass?:         string;
  pilots?:               string[];
  films?:                string[];
  created?:              Date;
  edited?:               Date;
  url?:                  string;
}
