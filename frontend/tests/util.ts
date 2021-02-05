import * as child from 'child_process';

export function render_template(template) {
	child.spawnSync('../manage.py', ['render_template', template, 'head.html', 'body.html'], {
		env: {"DJANGO_MOCK": "1"}
	});
}
