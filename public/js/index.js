window.onload = function(){
    $('#acciones-mejora').load('../_acciones_mejora.html');
    $('#verificacion-eficacia').load('../_verificacion_eficacia.html');
    $('#evaluacion-afa').load('../_evaluacion_afa.html');
    $('#contexto-falla').load('../_contexto_falla.html');
    $('#diagnostico-seccion').load('../_diagnostico-seccion.html');
    $('#analisis-seccion').load('../_analisis_seccion.html');
    $('.show-sidebar').load('../_sidebar_acciones_mejora.html');
}

//FUNCIONALIDAD DEL SIDEBAR ACCIONES DE MEJORA
function openNavAcciones() {
    $("body #mySidenavAcciones").css("width", "300px");
    $("body #mySidenavAcciones").css("padding", "4rem 2rem");
}

function closeNavAcciones() {
    $("body #mySidenavAcciones").css("width", "0");
    $("body #mySidenavAcciones").css("padding", "0");
}

$("#seccion-mejora .fa-question-circle").parent().click(openNavAcciones);
$(document).on("click", "#mySidenavAcciones .closebtn", closeNavAcciones);

