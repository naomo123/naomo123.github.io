document.getElementById("btnBuscar").onclick = function () {
	let patron = document.getElementById("patron").value;
	let re = new RegExp(patron, "gmsi");

	let texto = document.getElementById("texto").value;

	let resultado = texto.replace(re, '<span class="encontrado">$&</span>');

	document.getElementById("resultado").innerHTML = resultado;
	document.getElementById("resultado").style.textAlign = "justify";
};

document.getElementById("btnRemp").onclick = function () {
	let patron = document.getElementById("patron").value;
	let res = new RegExp(patron, "gmsi");

	let texto = document.getElementById("texto").value;
	let palabra = document.getElementById("remplazo").value;

	let nuevotexto = texto.replace(res, palabra);
	let nuevot = nuevotexto.replace(
		palabra,
		'<span class="encontrado">$&</span>'
	);

	document.getElementById("resultado2").innerHTML = nuevot;
	document.getElementById("resultado2").style.textAlign = "justify";

	document.getElementById("h1").innerHTML = "NUEVO TEXTO";
	document.getElementById("resultado2").style.background =
		"linear-gradient(to right, white, gray";
};
