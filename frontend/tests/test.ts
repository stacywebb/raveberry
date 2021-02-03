import {onReady, infoToast} from '@src/base';
import * as fs from 'fs';

beforeEach(() => {
	let head = fs.readFileSync('head.html', 'utf8');
	let body = fs.readFileSync('body.html', 'utf8');
	let css = fs.readFileSync('static/dark.css', 'utf8');
	document.head.innerHTML = head;
	document.body.innerHTML = body;
	let style = document.createElement("style");
	style.type = 'text/css';
	style.innerHTML = css;
	document.head.appendChild(style);
	onReady();
});

test('info toast', () => {
	expect($('#info-toast')[0]).not.toBeVisible();
	infoToast('');
	expect($('#info-toast')[0]).toBeVisible();
});
