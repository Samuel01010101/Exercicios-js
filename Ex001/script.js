function calcular() {

	let num = document.getElementById('num');
	let res = document.getElementById('res');
	let n = Number(num.value);
	if(num.value.length == 0){
		window.alert('Campo Vazio, digite um número!');
	}
	else{
		res.innerHTML = '<p>Resultado: </p>';
		let soma = 0;
		if(n == 0){
			res.innerHTML = `<p>0 é um número neutro</p>`;
		}else{
		if(n%2 == 0){
			res.innerHTML += `<p>O número ${n} é par</p>`;
			for(let c = 1; c <= n; c++){
				soma += c;
			}
			res.innerHTML += `<p>A soma de todos os números até ${n} é ${soma}</p>`;
			
		}
		else{
			res.innerHTML += `<p>O número ${n} é ímpar</p>`;
			for(let c = 1; c <= n; c++){
				soma += c;
			}
			res.innerHTML += `<p>A soma de todos os números até ${n} é ${soma}</p>`;
			
		}
	}
		
		num.value = '';
		num.focus();
	}
}
