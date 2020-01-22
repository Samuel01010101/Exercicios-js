function getCor() {
	let nums = '0123456789ABCDEF'
	let color = '#'
		for(let i = 0; i< 6; i++){
			color += nums[Math.floor(Math.random() * 16)]
		}
		return color
}
function mCor() {
	let divp = document.querySelector('#principal')
	divp.style.backgroundColor = getCor()
}
