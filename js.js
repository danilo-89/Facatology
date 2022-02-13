const nav = document.getElementById('nav');
const navBtn = document.getElementById('navBtn');
const navHolder = document.getElementById('navHolder');

navBtn.addEventListener('click', () => {
	nav.classList.add('expanded');
});

navHolder.addEventListener('click', function (event) {
	if (event.target === event.currentTarget) {
		nav.classList.remove('expanded');
	}
});

function calcCatAge() {
	var catAge = document.getElementsByName('catAge')[0].value;
	var humanYears = 4 * (catAge - 2) + 24;
	console.log(catAge);
	console.log(humanYears);
	document.getElementById('humanAge').innerHTML = humanYears;
}
