function validaDados() {
	let nome = form1.nome.value;
	let email = form1.email.value;
	let assunto = form1.assunto.value;
	let mensagem = form1.mensagem.value;


	if (nome == "" || document.form1.nome.value.indexOf(' ')==-1) {
		alert('Preencha seu nome completo!');
		return false;
	}
	if (email == "" || document.form1.email.value.indexOf('@')==-1) {
		alert('Preencha seu email!');
		return false;
	}
	
	if (assunto == "") {
		alert('Selecione um Assunto!');
		return false;
	}	
	if (mensagem == "") {
		alert('Preencha sua mensagem!');
		return false;
	}
	alert('Email enviado! Em breve entraremos em contato.');
}
