import * as $ from "jquery";
import {infoToast} from '@src/base';
import * as fs from 'fs';
import {JSDOM} from "jsdom";

let document;
beforeEach(done => {
	JSDOM.fromFile("test.html", {
		runScripts: "dangerously",
		resources: "usable",
		url: "file://" + __dirname,
	}).then(dom => {
		document = dom.window.document;
		$(document).ready(() => {
			done();
		});
	});
});

test('info toast', done => {
	done();
});
