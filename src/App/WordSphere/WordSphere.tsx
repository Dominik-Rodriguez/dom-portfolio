import { useEffect } from 'react';
import './WordSphere.css';

const WordSphere = () => {

	const texts = [
		'React', 'Redux', 'Angular', 'TypeORM', 'Typescript',
		'MySQL', 'NestJS', 'ExpressJS', 'Node', 'Github', 'Git',
		'Kanban', 'Agile', 'VueJS', 'Javascript', 'Java', 'Android',
		'NPM', 'HTML5', 'SCSS', 'CSS', 'Stripe', 'WordPress', 'RxJS',
		'Clarity Design'
	];
	const counts = [1,2,4,5,4,2,1];

	const options = {
	tilt: Math.PI / 9,
	initialVelocityX: 0.09,
	initialVelocityY: 0.09,
	initialRotationX: Math.PI * 0.14,
	initialRotationZ: 0
	};
	
	function wordSphere(canvas: HTMLCanvasElement, texts: string[], counts: string | any[], options: { tilt: any; initialVelocityX: any; initialVelocityY: any; initialRotationX: any; initialRotationZ: any; width?: any; height?: any; radius?: any; padding?: any; fontSize?: any; }) {

		const pi = Math.PI;
		
		const {
			width = 500,
			height = 500,
			radius = 150,
			fontSize = 22,
			tilt = 0,
			initialVelocityX = 0,
			initialVelocityY = 0,
			initialRotationX = 0,
			initialRotationZ = 0,
		} = options;
		
		let vx = initialVelocityX, vy = initialVelocityY;
		let rx = initialRotationX, rz = initialRotationZ;
		
		let ctx = canvas.getContext('2d'); 
		ctx!.textAlign = 'center';
		
		canvas.width = width * 2;
		canvas.height = height * 2;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		ctx!.scale(2,2); 

		let clicked = false, lastX: number, lastY: number;
		canvas.addEventListener('mousedown', (event: { screenX: number; screenY: number; }) => {
			clicked = true;
			lastX = event.screenX;
			lastY = event.screenY;
		});
		canvas.addEventListener('mousemove', (event: { screenX: number; screenY: number; }) => {
			if (!clicked) return;
			const [dx, dy] = [event.screenX - lastX, event.screenY - lastY];
			[lastX, lastY] = [event.screenX, event.screenY];

			// rotation update
			rz += -dy * 0.01;
			rx += dx * 0.01;

			// velocity update
			vx = dx * 0.1;
			vy = dy * 0.1;

			if (!looping) startLoop();
		});
		canvas.addEventListener('mouseup', () => clicked = false);
		canvas.addEventListener('mouseleave', () => clicked = false);
		
		function rot(x: number, y: number,t: number) {
			return [x*Math.cos(t)-y*Math.sin(t), x*Math.sin(t)+y*Math.cos(t)];
		}

		function render() {
			ctx!.clearRect(0, 0, canvas.width, canvas.height);

			let ix = 0, iz = 0, i = 1;
			for (const text of texts) {
				const degZ = (pi/(counts.length-1)) * iz;
				const degX = (2*pi/counts[iz]) * ix;

				let x = radius * Math.sin(degZ) * Math.cos(degX);
				let y = radius * Math.sin(degZ) * Math.sin(degX); 
				let z = radius * Math.cos(degZ) + 8*(ix % 2);

				[y,z] = rot(y, z, tilt);
				[x,z] = rot(x, z, rz);
				[x,y] = rot(x, y, rx);

				const alpha = 0.6 + 0.4 * (x/radius);
				const size = fontSize + 2 + 5*(x/radius);
				ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;
				ctx!.font = `${size}px "Helvetica Neue", sans-serif`;
				ctx!.fillText(text, y + width/2, -z + height/2);

				ix--;
				if (ix < 0) {
					iz++;
					ix = counts[iz] - 1;
				}
				i++;
			}
		}

		// renderer
		let looping = false;
		function rendererLoop() {
			if (looping) window.requestAnimationFrame(rendererLoop);
			render();

			if (vx > 0) vx = vx - 0.01;
			if (vy > 0) vy = vy - 0.01;
			if (vx < 0) vx = vx + 0.01;
			if (vy > 0) vy = vy + 0.01;
			if (vx == 0 && vy == 0) stopLoop();
			
			rz += vy * 0.01;
			rx += vx * 0.01;
		}

		function startLoop() {
			looping = true;
			window.requestAnimationFrame(rendererLoop);
		}

		function stopLoop() {
			looping = false;
		}
		startLoop();
	}

	useEffect(() => {
		const canvas = document.getElementById('canvas') as HTMLCanvasElement;
		if (canvas) {
			wordSphere(canvas, texts, counts, options);
		}
	}, []);

	return (
		<canvas id='canvas'></canvas>
	);
};

export default WordSphere;
