const animScrollDuration = 800;

const ready = function (cb) {
	// Check if the `document` is loaded completely
	document.readyState === "loading" ?
		document.addEventListener("DOMContentLoaded", function (e) {
			cb();
		}) :
		cb();
};


// CUSTOM FUNCTIONS
// END - CUSTOM FUNCTIONS

// ON READY
ready(function () {
});
// END - ON READY