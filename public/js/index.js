window.onload = function(){
    $('#acciones-mejora').load('../_acciones_mejora.html');
    $('#verificacion-eficacia').load('../_verificacion_eficacia.html');
    $('#evaluacion-afa').load('../_evaluacion_afa.html');
    $('#contexto-falla').load('../_contexto_falla.html');
    $('#diagnostico-seccion').load('../_diagnostico-seccion.html');
    $('#analisis-seccion').load('../_analisis_seccion.html');
    $('.show-sidebar-mejora').load('../_sidebar_acciones_mejora.html');
    $('.show-sidebar-diagnostico').load('../_sidebar_diagnostico.html');
    $('.show-sidebar').load('../_sidebar.html');

}

//FUNCIONALIDAD DEL SIDEBAR ACCIONES DE MEJORA
function openNavAcciones() {
    $("body #mySidenavAcciones").css("width", "300px");
    $("body #mySidenavAcciones").css("padding", "4rem 2rem");
    $("body #main-content").css("padding-right", "300px");
}

function closeNavAcciones() {
    $("body #mySidenavAcciones").css("width", "0");
    $("body #mySidenavAcciones").css("padding", "0");
    $("body #main-content").css("padding-right", "0");
}

function openNavDiag() {
    $("body #diagnosticoSidenav").css("width", "300px");
    $("body #diagnosticoSidenav").css("padding", "4rem 2rem");
    $("body #main-content").css("padding-right", "300px");
}

function closeNavDiag() {
    $("body #diagnosticoSidenav").css("width", "0");
    $("body #diagnosticoSidenav").css("padding", "0");
    $("body #main-content").css("padding-right", "0");
}

$("#seccion-mejora .fa-question-circle").parent().click(openNavAcciones);
$(document).on("click", "#mySidenavAcciones .closebtn", closeNavAcciones);

//FUNCIONALIDAD DEL SIDEBAR DIAGNOSTICO

$("#seccion-diagnostico .fa-question-circle").parent().click(openNavDiag);
$(document).on("click", "#diagnosticoSidenav .closebtn", closeNavDiag);
