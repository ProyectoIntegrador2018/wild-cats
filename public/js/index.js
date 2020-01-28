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
    $('.show-sidebar-verificacion').load('../_sidebar_verificacion.html');
    $('.show-sidebar').load('../_sidebar.html');
}

function openNav(block) {
    $("body " + block).css({"width": "300px", "padding": "4rem 2rem"});
    $("body #main-content").css("padding-right", "300px");
}

function closeNav(block) {
    $("body " + block).css({"width": "0", "padding": "0"});
    $("#main-content").css("padding-right", "0");
}

$("#main_help_button").click(() => {openNav("#mySidenav")});
$(document).on("click", "#mySidenav .closebtn", () => {closeNav("#mySidenav")});

$("#seccion-contexto .fa-question-circle").parent().click(() => {openNav("#context-sidebar")});
$(document).on("click", "#context-sidebar .closebtn", () => {closeNav("#context-sidebar")});

$("#seccion-mejora .fa-question-circle").parent().click(() => {openNav("#mySidenavAcciones")});
$(document).on("click", "#mySidenavAcciones .closebtn", () => {closeNav("#mySidenavAcciones")});

$("#seccion-diagnostico .fa-question-circle").parent().click(() => {openNav("#diagnosticoSidenav")});
$(document).on("click", "#diagnosticoSidenav .closebtn", () => {closeNav("#diagnosticoSidenav")});

$("#seccion-analisis .fa-question-circle").parent().click(() => {openNav("#analisisSidenav")});
$(document).on("click", "#analisisSidenav .closebtn", () => {closeNav("#analisisSidenav")});

$("#seccion-verificacion .fa-question-circle").parent().click(() => {openNav("#verificacionSidenav")});
$(document).on("click", "#verificacionSidenav .closebtn", () => {closeNav("#verificacionSidenav")});
