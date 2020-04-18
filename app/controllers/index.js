import Controller from "@ember/controller";
import { DEPRECATIONS } from "../models/deprecations";
import { FEATURES } from "../models/features";
import { VERSIONS } from "../models/versions";
import { ED_FEATURES, ED_DEPRECATIONS } from "../models/ember-data";
import { EC_FEATURES, EC_DEPRECATIONS } from "../models/ember-cli";

export default class IndexController extends Controller {
  queryParams = ["fromVersion", "toVersion"];
  fromVersion = 3.0;
  toVersion = 3.16;
  versions = VERSIONS;
  features = FEATURES;
  deprecations = DEPRECATIONS;
  emberDataFeatures = ED_FEATURES;
  emberDataDeprecations = ED_DEPRECATIONS;
  emberCliFeatures = EC_FEATURES;
  emberCliDeprecations = EC_DEPRECATIONS;
}
