window.onload = function(){
    $('#acciones-mejora').load('../_acciones_mejora.html');
    $('#verificacion-eficacia').load('../_verificacion_eficacia.html');
    $('#evaluacion-afa').load('../_evaluacion_afa.html');
    $('#contexto-falla').load('../_contexto_falla.html');
    $('#diagnostico-seccion').load('../_diagnostico-seccion.html');
    $('#analisis-seccion').load('../_analisis_seccion.html');
    $('.show-sidebar-mejora').load('../_sidebar_acciones_mejora.html');
    $('.show-sidebar-diagnostico').load('../_sidebar_diagnostico.html');
    $('.show-sidebar-analisis').load('../_sidebar_analisis_de_causas.html');
    $('.show-sidebar-contexto').load('../_sidebar_contexto.html');
    $('.show-sidebar').load('../_sidebar.html');
}

function openNav() {
  $("#mySidenav").css("width", "300px");
  $("#mySidenav").css("padding", "4rem 2rem");
  $("#main-content").css("padding-right", "300px");
}

function closeNav() {
  $("#mySidenav").css("width", "0");
  $("#mySidenav").css("padding", "0");
  $("#main-content").css("padding-right", "0");
}

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

function openAnalisisNav() {
    $("body #analisisSidenav").css("width", "300px");
    $("body #analisisSidenav").css("padding", "4rem 2rem");
    $("body #main-content").css("padding-right", "300px");
}

function closeAnalisisNav() {
    $("body #analisisSidenav").css("width", "0");
    $("body #analisisSidenav").css("padding", "0");
    $("body #main-content").css("padding-right", "0");
}

function openNavContexto() {
    $("body #context-sidebar").css("width", "300px");
    $("body #context-sidebar").css("padding", "4rem 2rem");
    $("body #main-content").css("padding-right", "300px");
}

function closeNavContexto() {
    $("body #context-sidebar").css("width", "0");
    $("body #context-sidebar").css("padding", "0");
    $("body #main-content").css("padding-right", "0");
}

$("#main_help_button").click(openNav);
$(document).on("click", "#mySidenav .closebtn", closeNav);

$("#seccion-contexto .fa-question-circle").parent().click(openNavContexto);
$(document).on("click", "#context-sidebar .closebtn", closeNavContexto);

$("#seccion-mejora .fa-question-circle").parent().click(openNavAcciones);
$(document).on("click", "#mySidenavAcciones .closebtn", closeNavAcciones);

$("#seccion-diagnostico .fa-question-circle").parent().click(openNavDiag);
$(document).on("click", "#diagnosticoSidenav .closebtn", closeNavDiag);

$("#seccion-analisis .fa-question-circle").parent().click(openAnalisisNav);
$(document).on("click", "#analisisSidenav .closebtn", closeAnalisisNav);
