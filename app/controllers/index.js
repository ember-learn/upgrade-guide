import Controller from "@ember/controller";
import { VERSIONS } from "../models/versions";
import { ED_FEATURES, ED_DEPRECATIONS } from "../models/ember-data";

export default class IndexController extends Controller {
  queryParams = ["fromVersion", "toVersion"];
  fromVersion = 3.0;
  toVersion = 3.16;
  versions = VERSIONS;
  emberDataFeatures = ED_FEATURES;
  emberDataDeprecations = ED_DEPRECATIONS;
}
