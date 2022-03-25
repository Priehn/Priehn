const ciGray = '#dfdfdf',
	ciBlue = '#18A0FB';

function drawInoffensiveContent() {
	const cw = document.querySelectorAll('.iocv');
	console.log(cw);
	if (cw != null) {
		for (let cv of cw) {
			const dpi = window.devicePixelRatio;
			const style_height = window
				.getComputedStyle(cv)
				.getPropertyValue('height')
				.slice(0, -2);

			const style_width = window
				.getComputedStyle(cv)
				.getPropertyValue('width')
				.slice(0, -2);

			cv.setAttribute('height', style_height * dpi);
			cv.setAttribute('width', style_width * dpi);
			const width = cv.width,
				height = cv.height;

			const ctx = cv.getContext('2d');

			ctx.rect(0, 0, width, height);
			ctx.fillStyle = ciGray;
			ctx.fill();
			ctx.moveTo(0, 0);
			ctx.lineTo(width, 0);
			ctx.lineTo(width, height);
			ctx.lineTo(0, height);
			ctx.lineTo(0, 0);
			ctx.lineTo(width, height);
			ctx.moveTo(width, 0);
			ctx.lineTo(0, height);
			ctx.strokeStyle = '#000000';
			ctx.stroke();
		}
	}
}

function drawVideoScreen() {
	const cv = document.querySelector('#myCanvas');
	if (cv != null) {
		const dpi = window.devicePixelRatio;
		const style_height = window
			.getComputedStyle(cv)
			.getPropertyValue('height')
			.slice(0, -2);

		const style_width = window
			.getComputedStyle(cv)
			.getPropertyValue('width')
			.slice(0, -2);

		cv.setAttribute('height', style_height * dpi);
		cv.setAttribute('width', style_width * dpi);
		const width = cv.width,
			height = cv.height;

		const ctx = cv.getContext('2d');
		const a = height / 20;
		const ri = ((3 * a) / 4) * Math.sqrt(3);
		const h = Math.sqrt(a * a - a * a * 0.25);
		ctx.rect(0, 0, width, height);
		ctx.fillStyle = ciGray;
		ctx.fill();
		ctx.moveTo(0, 0);
		ctx.lineTo(width, 0);
		ctx.lineTo(width, height);
		ctx.lineTo(0, height);
		ctx.lineTo(0, 0);
		ctx.lineTo(width, height);
		ctx.moveTo(width, 0);
		ctx.lineTo(0, height);
		ctx.strokeStyle = '#000000';
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(width / 2, height / 2, height / 15, 0, Math.PI * 2);
		ctx.fillStyle = ciBlue;
		ctx.fill();
		ctx.closePath();
		ctx.fillStyle = '#FFFFFF';
		ctx.beginPath();
		const mi = h / 10;
		ctx.moveTo(width / 2 - h * 0.5 + mi, height / 2);
		ctx.lineTo(width / 2 - h * 0.5 + mi, height / 2 + a * 0.5);
		ctx.lineTo(width / 2 + h * 0.5 + mi, height / 2);
		ctx.lineTo(width / 2 - h * 0.5 + mi, height / 2 - a * 0.5);
		ctx.lineTo(width / 2 - h * 0.5 + mi, height / 2);
		ctx.closePath();
		ctx.fill();
		//font-size must be adapted to screen resolution
		ctx.font = 4 * dpi + 'vw Montserrat';
		//ctx.font = 8 + 'vw Montserrat';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#000000';
		ctx.fillText(
			'Nothing to see here, move along!',
			width / 2,
			height * 0.7
		);
		ctx.beginPath();
		ctx.rect(width / 2 - width / 16, height * 0.75, width / 8, height / 18);
		ctx.fillStyle = ciBlue;
		ctx.fill();
		ctx.closePath();
		//font-size must be adapted to screen resolution
		ctx.font = 1.5 * dpi + 'vw Montserrat';
		//ctx.font = 3 + 'vw Montserrat';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#ffffff';
		ctx.fillText('Go Away!', width / 2, height * 0.75 + 0.036 * height);
	}
}

drawVideoScreen();
drawInoffensiveContent();
function toggleMenu() {
	let links = document.getElementsByClassName('links');
	console.log(links); //debug output
	for (let i = 0; i < links.length; i++)
		if (links[i].style.display == 'block') {
			links[i].style.display = 'none';
			console.log('invisible');
		} else {
			links[i].style.display = 'block';
			console.log('visible');
		}
}
