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
    $('.show-sidebar-FAQ').load('../_frequently_asked_questions.html');
    $('.show-sidebar').load('../_sidebar.html');
    
}

function actionNav(block, action) {
    let paddingRightContent = "300px";
    if (action == "open") {
        if(!$("body " + block).hasClass("active-sidebar")){
            $(".active-sidebar").removeClass("active-sidebar");
            $("body " + block).addClass("active-sidebar");
        }
    } else {
        $(".active-sidebar").removeClass("active-sidebar");
        paddingRightContent = "0";
    }
    $("body #main-content").css("padding-right", paddingRightContent);
    
}
function focusScrollMethod(place) {
    $('html, body').animate({ scrollTop: $(place).offset().top }, 'slow');
}



$("#main_help_button").click(() => {actionNav("#mySidenav", "open")});
$(document).on("click", "#mySidenav .closebtn", () => {actionNav("#mySidenav", "close")});

$("#seccion-contexto .fa-question-circle").parent().click(() => {actionNav("#context-sidebar", "open")});
$(document).on("click", "#context-sidebar .closebtn", () => {actionNav("#context-sidebar", "close")});
$(document).on("click", ".sidenav .color_contexto",() =>{actionNav("#context-sidebar", "open"),focusScrollMethod("#seccion-contexto")});

$("#seccion-mejora .fa-question-circle").parent().click(() => {actionNav("#mySidenavAcciones", "open")});
$(document).on("click", "#mySidenavAcciones .closebtn", () => {actionNav("#mySidenavAcciones", "close")});
$(document).on("click", ".sidenav .color_acciones",() =>{actionNav("#mySidenavAcciones", "open"),focusScrollMethod("#seccion-mejora")});

$("#seccion-diagnostico .fa-question-circle").parent().click(() => {actionNav("#diagnosticoSidenav", "open")});
$(document).on("click", "#diagnosticoSidenav .closebtn", () => {actionNav("#diagnosticoSidenav", "close")});
$(document).on("click", ".sidenav .color_diagnostico",() =>{actionNav("#diagnosticoSidenav", "open"),focusScrollMethod("#seccion-diagnostico")});

$("#seccion-analisis .fa-question-circle").parent().click(() => {actionNav("#analisisSidenav", "open")});
$(document).on("click", "#analisisSidenav .closebtn", () => {actionNav("#analisisSidenav", "close")});
$(document).on("click", ".sidenav .color_analisis",() =>{actionNav("#analisisSidenav", "open"),focusScrollMethod("#seccion-analisis")});

$("#seccion-verificacion .fa-question-circle").parent().click(() => {actionNav("#verificacionSidenav", "open")});
$(document).on("click", "#verificacionSidenav .closebtn", () => {actionNav("#verificacionSidenav", "close")});
$(document).on("click", ".sidenav .color_eficacia",() =>{actionNav("#verificacionSidenav", "open"),focusScrollMethod("#seccion-verificacion")});

$(document).on("click", "#FAQ_button", () => {actionNav("#FaqSidenav", "open")});
$(document).on("click", "#FaqSidenav .closebtn", () => {actionNav("#FaqSidenav", "close")});

$(document).on("click", "#mySidenav #Tutorial_button", () => {actionNav("#context-sidebar", "open"),focusScrollMethod("#seccion-contexto")});