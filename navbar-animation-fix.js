$('#sanduiche').on('show.bs.collapse', function() {
	$('.banner').css('transform', 'translate(-50%, 10%');     /*BOOTSTRAP>JS>COLLAPSE>EVENTS*/

});

$('#sanduiche ').on('hide.bs.collapse', function() {
	$('.banner').css('transform', 'translate(-50%, -50%');     /*REVER, NAO É SIMPLES*/
});