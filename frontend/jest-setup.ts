import '@testing-library/jest-dom'
// add jQuery to the global scope so libraries depending on it can be loaded
import * as $ from 'jquery';
global['$'] = global['jQuery'] = $;

global['CSRF_TOKEN'] = "";
global['urls'] = {};
global['VOTING_SYSTEM'] = false;
global['ADMIN'] = false;
global['CONTROLS_ENABLED'] = false;

