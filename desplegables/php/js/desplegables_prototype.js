/*
 * Clase Desplegable
 * opciones: modo     :automatic = toggle plegar y desplegar o manual = display bock,flex,hide  
 * opciones: modo_css :normal y flex
 */

var vector_labels        = [];
var desplegable_dinamico = ""; 
var modo                 = "automatic"; // automatic and manual
var modo_css             = "normal"; // normal y flex

$(function(){
    // init code 
});

window.onload = function (){
    // init code 
    desplegable_dinamico = new Desplegable_dinamico();
    desplegable_dinamico.guardar_labels()
    desplegable_dinamico.desplegar();
    // todas
    $(".button_plegar").click(function(){
        desplegable_dinamico.plegar_todas();
    });
    $(".button_desplegar").click(function(){
        desplegable_dinamico.desplegar_todas();
    });
    $(".button_css").click(function(){
        desplegable_dinamico.cambiar_css();
    });
}

var Desplegable_dinamico = function (){
    // start object
}

Desplegable_dinamico.prototype.guardar_labels = function(){
    $("label[name='label-categoria[]']").each(function(index){
        vector_labels.push($(this));
    });
    console.log(this);
}

Desplegable_dinamico.prototype.desplegar = function(){
    vector_labels.forEach(function(element,index,vector){
        var identificador = $(element).data("id-label-categoria");
        var contenido     = $(element).text();
        $(element).click(function(){
            if (modo == "automatic" && modo_css == "normal"){
                $("div[data-id-content-categoria='"+identificador+"']").toggle();
                var encontrado = contenido.search("[+]");
                if (encontrado != -1){
                    contenido = contenido.replace("[+]","[-]");
                    $(element).text(contenido);
                }else{
                    contenido = contenido.replace("[-]","[+]");
                    $(element).text(contenido);
                }
            }else if(modo == "manual" && modo_css == "normal"){
                if ( $("div[data-id-content-categoria='"+identificador+"']").css("display") == "block" ){
                    $("div[data-id-content-categoria='"+identificador+"']").hide();    
                    contenido = contenido.replace("[-]","[+]");
                    $(element).text(contenido);
                }else{
                    $("div[data-id-content-categoria='"+identificador+"']").css("display","block");
                    contenido = contenido.replace("[+]","[-]");
                    $(element).text(contenido);
                }
            }else if (modo == "automatic" && modo_css == "flex"){
                $("div[data-id-content-categoria='"+identificador+"']").toggle();
                var encontrado = contenido.search("[+]");
                if (encontrado != -1){
                    contenido = contenido.replace("[+]","[-]");
                    $(element).text(contenido);
                }else{
                    contenido = contenido.replace("[-]","[+]");
                    $(element).text(contenido);
                }
            }else if(modo == "manual" && modo_css == "flex"){
                if ( $("div[data-id-content-categoria='"+identificador+"']").css("display") == "block" || $("div[data-id-content-categoria='"+identificador+"']").css("display") == "flex"){
                    $("div[data-id-content-categoria='"+identificador+"']").hide();    
                    contenido = contenido.replace("[+]","[-]");
                    $(element).text(contenido);
                }else if( $("div[data-id-content-categoria='"+identificador+"']").css("display") == "none" ){
                    $("div[data-id-content-categoria='"+identificador+"']").css("display","flex");
                    contenido = contenido.replace("[+]","[-]");
                    $(element).text(contenido);
                }    
            }        
        });
    });
}

Desplegable_dinamico.prototype.desplegar_todas = function(){
    if (modo_css == "normal"){
        $("div[data-id-content-categoria]").css("display","block");
    }else if( modo_css == "flex" ){
        $("div[data-id-content-categoria]").css("display","flex");
    }
    $(".label-categoria").each(function(){
        var content = $(this).text();
        content = content.replace("[+]","[-]");
        $(this).text(content);
    });
    modo = "manual";
    //console.log("modo: "+modo);
}

Desplegable_dinamico.prototype.plegar_todas = function(){
    if (modo_css == "normal" || modo_css == "flex" ){
        $("div[data-id-content-categoria]").hide();
    }
    $(".label-categoria").each(function(){
        var content = $(this).text();
        content = content.replace("[-]","[+]");
        $(this).text(content);
    }); 
    modo = "manual";
    //console.log("modo: "+modo);
}

Desplegable_dinamico.prototype.cambiar_css = function(){
    if ( modo_css == "normal" ){
        modo_css = "flex";
    }else if ( modo_css == "flex" ){    
        modo_css = "normal";
    }
    //console.log("modo_css: "+modo_css);
};    
