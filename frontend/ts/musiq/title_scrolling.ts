import {decideScrolling} from "../base.js";
import $ from "jquery";

export function onReady() {
	if (!window.location.pathname.endsWith('musiq/')) {
		return;
	}
	// rotate the currently playing song if its title is too long
	function decideTitleScrolling() {
		decideScrolling($('#current_song_title'), 0.030, 2)
	}
	$('#current_song_title').on('change', decideTitleScrolling);
	$(window).on('resize', decideTitleScrolling);
}

$(document).ready(onReady);
