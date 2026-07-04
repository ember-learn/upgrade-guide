import Component from '@glimmer/component';
import { createCache, getValue } from '@glimmer/tracking/primitives/cache';
import { compare } from 'compare-versions';

export default class ListFeaturesDeprecationsComponent extends Component {
  #relevantChangeLogs = createCache(() => {
    const allChangeLogs = this.args.allChangeLogs ?? [];

    return allChangeLogs.filter((changeLog) => {
      return (
        compare(this.args.toVersion, changeLog.version, '>=') &&
        compare(this.args.fromVersion, changeLog.version, '<')
      );
    });
  });

  get relevantChangeLogs() {
    return getValue(this.#relevantChangeLogs);
  }

  #flattenedChangeLogs = createCache(() => {
    return this.relevantChangeLogs.flatMap((changeLog) => {
      const changes = changeLog.changes ?? [];

      return changes.map((change) => {
        return {
          version: changeLog.version,
          ...change,
        };
      });
    });
  });

  get flattenedChangeLogs() {
    return getValue(this.#flattenedChangeLogs);
  }

  get deprecations() {
    return this.flattenedChangeLogs.filter(({ deprecation }) => deprecation);
  }

  get features() {
    return this.flattenedChangeLogs.filter(({ feature }) => feature);
  }
}

<h3>New features</h3>
<h4 class="mb-1">Count: {{this.features.length}}</h4>

{{#if this.features}}
  <ul>
    {{#each this.features as |feature|}}
      <li data-test-feature>
        <span data-test-field="Title">{{feature.title}}</span>
        <a
          data-test-field="Version"
          href={{feature.link}}
          rel="noopener noreferrer"
          target="_blank"
          title="Check version {{feature.version}} link for more info"
        >
          ({{feature.version}})
        </a>
      </li>
    {{/each}}
  </ul>
{{else}}
  <p>No new features</p>
{{/if}}

<h3>Deprecations</h3>
<h4 class="mb-1">Count: {{this.deprecations.length}}</h4>

{{#if this.deprecations}}
  <ul>
    {{#each this.deprecations as |deprecation|}}
      <li data-test-deprecation>
        <span data-test-field="Title">{{deprecation.title}}</span>
        <a
          data-test-field="Version"
          href={{deprecation.link}}
          rel="noopener noreferrer"
          target="_blank"
          title="Check version {{deprecation.version}} link for more info"
        >
          ({{deprecation.version}})
        </a>
      </li>
    {{/each}}
  </ul>
{{else}}
  <p>No new deprecations</p>
{{/if}}