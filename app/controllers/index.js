import Controller from "@ember/controller";
import { THREE_FEATURES } from "../models/three-features";
// import fetch from "fetch";

export default class IndexController extends Controller {
  queryParams = ["fromVersion", "toVersion"];
  fromVersion = 3.0;
  toVersion = 3.15;
  versions = [
    3.0,
    3.01,
    3.02,
    3.03,
    3.04,
    3.05,
    3.06,
    3.07,
    3.08,
    3.09,
    3.1,
    3.11,
    3.12,
    3.13,
    3.14,
    3.15,
    3.16,
  ];

  features = THREE_FEATURES;

  deprecations = [
    {
      version: 3.01,
      title: "Calling array.get('@each')",
      link: "https://blog.emberjs.com/2018/04/13/ember-3-1-released.html",
    },
    {
      version: 3.01,
      title: "propertyWillChange and propertyDidChange",
      link: "https://blog.emberjs.com/2018/04/13/ember-3-1-released.html",
    },
    {
      version: 3.02,
      title: "Use of Ember.Logger",
      link: "https://blog.emberjs.com/2018/07/02/ember-3-2-released.html",
    },
    {
      version: 3.02,
      title: "Private API Router#router renamed",
      link: "https://blog.emberjs.com/2018/07/02/ember-3-2-released.html",
    },
    {
      version: 3.02,
      title: "Define computed properties with defineProperty",
      link: "https://blog.emberjs.com/2018/07/02/ember-3-2-released.html",
    },
    {
      version: 3.03,
      title: "Operation 'make jQuery optional' continues",
      link: "https://blog.emberjs.com/2018/07/16/ember-3-3-released.html",
    },
    {
      version: 3.03,
      title: "Deprecation of three private, unused classes",
      link: "https://blog.emberjs.com/2018/07/16/ember-3-3-released.html",
    },
    {
      version: 3.03,
      title: "Deprecation of copy/copyable",
      link: "https://blog.emberjs.com/2018/07/16/ember-3-3-released.html",
    },
    {
      version: 3.04,
      title: "Use closure actions instead of sendAction",
      link: "https://blog.emberjs.com/2018/10/07/ember-3-4-released.html",
    },
    {
      version: 3.04,
      title: "Ember 2 Legacy",
      link: "https://blog.emberjs.com/2018/10/07/ember-3-4-released.html",
    },
    {
      version: 3.06,
      title: "new EmberObject",
      link: "https://blog.emberjs.com/2018/12/13/ember-3-6-released.html",
    },
    {
      version: 3.06,
      title: "Remove All Listeners/Observers",
      link: "https://blog.emberjs.com/2018/12/13/ember-3-6-released.html",
    },
    {
      version: 3.06,
      title: "Deprecate Ember.merge",
      link: "https://blog.emberjs.com/2018/12/13/ember-3-6-released.html",
    },
    {
      version: 3.06,
      title: "HandlerInfos Removal ",
      link: "https://blog.emberjs.com/2018/12/13/ember-3-6-released.html",
    },
    {
      version: 3.06,
      title: "Deprecate Router Events",
      link: "https://blog.emberjs.com/2018/12/13/ember-3-6-released.html",
    },
    {
      version: 3.06,
      title: "Transition State Removal",
      link: "https://blog.emberjs.com/2018/12/13/ember-3-6-released.html",
    },
    {
      version: 3.08,
      title: "Component Manager Factory Function",
      link: "https://blog.emberjs.com/2019/02/27/ember-3-8-released.html",
    },
    {
      version: 3.09,
      title: "Computed Property Overridability",
      link: "https://blog.emberjs.com/2019/04/10/ember-3-9-released.html",
    },
    {
      version: 3.09,
      title: "Computed Property .property() Modifier",
      link: "https://blog.emberjs.com/2019/04/10/ember-3-9-released.html",
    },
    {
      version: 3.09,
      title: "Computed Property Volatility",
      link: "https://blog.emberjs.com/2019/04/10/ember-3-9-released.html",
    },
    {
      version: 3.09,
      title: "Deprecate @ember/object#aliasMethod",
      link: "https://blog.emberjs.com/2019/04/10/ember-3-9-released.html",
    },
    {
      version: 3.09,
      title: "Deprecate this.$() in components",
      link: "https://blog.emberjs.com/2019/04/10/ember-3-9-released.html",
    },
    {
      version: 3.09,
      title: "Deprecate Ember.$()",
      link: "https://blog.emberjs.com/2019/04/10/ember-3-9-released.html",
    },
    {
      version: 3.1,
      title: "Application Controller Router Properties",
      link: "https://blog.emberjs.com/2019/05/21/ember-3-10-released.html",
    },
    {
      version: 3.11,
      title: "Deprecate Function.prototype.observes",
      link: "https://blog.emberjs.com/2019/07/15/ember-3-11-released.html",
    },
    {
      version: 3.15,
      title: "window.ENV",
      link: "https://github.com/emberjs/ember.js/pull/18441",
    },
    {
      version: 3.15,
      title: "{{partial}}",
      link: "https://deprecations.emberjs.com/v3.x#toc_ember-partial",
    },
    {
      version: 3.15,
      title: "Component#isVisible",
      link:
        "https://deprecations.emberjs.com/v3.x#toc_ember-component-is-visible",
    },
    {
      version: 3.16,
      title: "Global Resolver",
      link:
        "https://deprecations.emberjs.com/v3.x/#toc_ember-deprecate-globals-resolver",
    },
  ];
}
