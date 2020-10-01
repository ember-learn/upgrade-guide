import Application from 'upgrade-guide/app';
import config from 'upgrade-guide/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
