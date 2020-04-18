import Controller from "@ember/controller";
import { DEPRECATIONS } from "../models/deprecations";
import { FEATURES } from "../models/features";
import { VERSIONS } from "../models/versions";

export default class IndexController extends Controller {
  queryParams = ["fromVersion", "toVersion"];
  fromVersion = 3.0;
  toVersion = 3.16;
  versions = VERSIONS;
  features = FEATURES;
  deprecations = DEPRECATIONS;
}
