import Controller from "@ember/controller";

export default class IndexController extends Controller {
  fromVersion = 3.13;
  toVersion = 3.15;
  versions = [3.13, 3.14, 3.15, 3.16];

  features = [
    {
      version: 3.13,
      title: "Tracked Properties and Tracked Property Updates",
      link: "https://blog.emberjs.com/2019/09/25/ember-3-13-released.html"
    },
    {
      version: 3.13,
      title: "Component Templates Co-location: Part One",
      link: "https://blog.emberjs.com/2019/09/25/ember-3-13-released.html"
    },
    {
      version: 3.13,
      title: "component-class generator",
      link: "https://blog.emberjs.com/2019/09/25/ember-3-13-released.html"
    },
    {
      version: 3.13,
      title: "Detect the edition that is in use",
      link: "https://blog.emberjs.com/2019/09/25/ember-3-13-released.html"
    },
    {
      version: 3.13,
      title: "Add updateHook component-manager capabilit",
      link: "https://blog.emberjs.com/2019/09/25/ember-3-13-released.html"
    },
    {
      version: 3.14,
      title: "@model in Route Templates",
      link: "https://blog.emberjs.com/2019/11/18/ember-3-14-released.html"
    }
  ];

  deprecations = [
    {
      version: 3.15,
      title: "window.ENV",
      link: "https://github.com/emberjs/ember.js/pull/18441"
    },
    {
      version: 3.15,
      title: "{{partial}}",
      link: "https://deprecations.emberjs.com/v3.x#toc_ember-partial"
    },
    {
      version: 3.15,
      title: "Component#isVisible",
      link:
        "https://deprecations.emberjs.com/v3.x#toc_ember-component-is-visible"
    },
    {
      version: 3.16,
      title: "Global Resolver",
      link:
        "https://deprecations.emberjs.com/v3.x/#toc_ember-deprecate-globals-resolver"
    }
  ];
}
