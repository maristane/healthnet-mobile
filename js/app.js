$(document).on('pageinit', '#testes', function(){
	//Gera o link para o teste com base no nome da imagem do botão
	$('.botao-teste').on('click', function(){
		var img = $(this).find('img');
		if (img.length==0){
			console.log("Botão inativo.");
		} else{
			var src = img.attr('src');
			var url = src.substring(src.indexOf('_')+1, src.indexOf('.'))+".html";
			$.mobile.changePage( url, { transition: "slideUp"} ); 
		}
		
	});	
});