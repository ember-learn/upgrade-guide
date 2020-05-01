import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = '/api'

  urlForFindAll(modelName) {
    return `${this.namespace}/${this.pathForType(modelName)}.json`;
  }
}
