import { helper } from '@ember/component/helper';
import { compare } from 'compare-versions';

/**
 * Wrapper helper on `compare-versions` npm package.
 * params[0]: baseVersion: Base version for comparison
 * params[1]: targetVersion: Target version for comparison
 * params[2]: operator: Defaults: '<=', to determine a human readable output from `compare-versions`
 */
export default helper(function compareVersions(params) {
  let [baseVersion, targetVersion, operator = '<='] = params;

  return compare(baseVersion, targetVersion, operator);
});
