import Model, { attr } from '@warp-drive/legacy/model';

export default class EmberJsChangesModel extends Model {
  @attr version;
  @attr changes;

  // html and content are not used, but they appear in the data
  @attr html;
  @attr content;
}
