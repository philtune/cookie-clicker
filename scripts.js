const _counter = document.querySelector("#counter");
const _oven = document.querySelector("#oven");
const _machine = document.querySelector("#machine");
const _harvester = document.querySelector("#harvester");
const _dam = document.querySelector("#dam");
const _volcano = document.querySelector("#volcano");
const _reactor = document.querySelector("#reactor");
const _asteroid = document.querySelector("#asteroid");

const _cookie = document.querySelector('[data-is="cookie"]')
_cookie.addEventListener('mousedown', click_cookie)

const _cps = document.querySelector("#cps");
let count = 0;
let clicks_per_second = 0;

function display_it() {
	_cps.innerText = "CPS: " + Math.round(clicks_per_second).toLocaleString();
	_oven.classList.toggle("active", count >= 25);
	_machine.classList.toggle("active", count >= 100);
	_harvester.classList.toggle("active", count >= 250);
	_dam.classList.toggle("active", count >= 1000);
	_volcano.classList.toggle("active", count >= 5000);
	_reactor.classList.toggle("active", count >= 50000);
	_asteroid.classList.toggle("active", count >= 150000);

	let display_count = count;
	let suffix = "";
	let decimals = 0;
	if (count < 10 ** 5) {
		display_count = Math.floor(count);
	} else if (count < 10 ** 6) {
		display_count = (count / 10 ** 3).toFixed(2);
		suffix = "K";
	} else if (count < 10 ** 9) {
		if (count < 10 ** 7) {
			decimals = 3;
		} else if (count < 10 ** 8) {
			decimals = 2;
		} else {
			decimals = 1;
		}
		display_count = (count / 10 ** 6).toFixed(decimals);
		suffix = "M";
	} else if (count < 10 ** 12) {
		if (count < 10 ** 10) {
			decimals = 3;
		} else if (count < 10 ** 11) {
			decimals = 2;
		} else {
			decimals = 1;
		}
		display_count = (count / 10 ** 9).toFixed(decimals);
		suffix = "B";
	} else if (count < 10 ** 15) {
		if (count < 10 ** 13) {
			decimals = 3;
		} else if (count < 10 ** 14) {
			decimals = 2;
		} else {
			decimals = 1;
		}
		display_count = (count / 10 ** 12).toFixed(decimals);
		suffix = "T";
	} else {
		if (count < 10 ** 16) {
			decimals = 3;
		} else if (count < 10 ** 17) {
			decimals = 2;
		} else {
			decimals = 1;
		}
		display_count = (count / 10 ** 15).toFixed(decimals);
		suffix = "Q";
	}
	// if (count < 10 ** 3) {
	// 	display_count = Math.round(decimals);
	// } else if (count < 10 ** 6) {
	// 	if (count > 10 ** 5) {
	// 		decimals = 1;
	// 	} else if (count > 10 ** 4) {
	// 		decimals = 2;
	// 	} else if (count > 10 ** 3) {
	// 		decimals = 3;
	// 	}
	// 	display_count = (count / 10 ** 3).toFixed(decimals);
	// 	suffix = "K";
	// } else if (count < 10 ** 9) {
	// 	if (count > 10 ** 8) {
	// 		decimals = 1;
	// 	} else if (count > 10 ** 7) {
	// 		decimals = 2;
	// 	}
	// 	display_count = (count / 10 ** 6).toFixed(decimals);
	// 	suffix = "M";
	// } else if (count < 10 ** 12) {
	// 	display_count = (count / 10 ** 9).toFixed(decimals);
	// 	suffix = "B";
	// } else if (count < 10 ** 15) {
	// 	display_count = (count / 10 ** 12).toFixed(decimals);
	// 	suffix = "T";
	// } else {
	// 	display_count = (count / 10 ** 15).toFixed(decimals);
	// 	suffix = "Q";
	// }
	_counter.innerText = display_count.toLocaleString() + suffix;
}
function reset() {
	count = 0;
	clicks_per_second = 0;
	display_it();
}
function click_cookie() {
	count++;
	display_it();
}
function add_oven() {
	if (count >= 25) {
		count -= 25;
		clicks_per_second += 1;
		display_it();
	}
}
function add_machine() {
	if (count >= 100) {
		count -= 100;
		clicks_per_second += 5;
		display_it();
	}
}
function add_harvester() {
	if (count >= 250) {
		count -= 250;
		clicks_per_second += 15;
		display_it();
	}
}
function add_dam() {
	if (count >= 1000) {
		count -= 1000;
		clicks_per_second += 50;
		display_it();
	}
}
function add_volcano() {
	if (count >= 5000) {
		count -= 5000;
		clicks_per_second += 250;
		display_it();
	}
}
function add_reactor() {
	if (count >= 50000) {
		count -= 50000;
		clicks_per_second += 750;
		display_it();
	}
}
function add_asteroid() {
	if (count >= 150000) {
		count -= 150000;
		clicks_per_second += 2000;
		display_it();
	}
}

display_it();

const divisor = 10;
setInterval(() => {
	count += clicks_per_second / divisor;
	display_it();
}, 1000 / divisor);
