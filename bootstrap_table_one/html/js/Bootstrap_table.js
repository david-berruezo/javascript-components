/*
 * Clase Bootstrap table
 * look for table name as bootstrap_table_add_ + number 
 * vector_bootstrap_table_one keep objects Bootstrap_table_one
 * methods object 
 */

// Public var
let vector_bootstrap_table_one = [];

document.addEventListener("DOMContentLoaded",function(event){
    console.log("ready");
    create_objects(); 
});

function create_objects(){
    var elementos = document.body.querySelectorAll("input[name^='bootstrap_table_add_']");
    //console.log("elementos: "+elementos.length);
    for(var i=0;i<elementos.length;i++){
        let objeto = new_object(i);    
        vector_bootstrap_table_one.push(objeto);
    }        
}


function new_object(contador){
    
    // create an object
    let Bootstrap_table_one = {};
    
    // vars
    Bootstrap_table_one.id_objeto = contador;
    Bootstrap_table_one.contador_registro = 0;


    // add_row event
    Bootstrap_table_one.add_row = function(){
        let that = this;
        let element = document.body.querySelector("input[name^='bootstrap_table_add_"+that.id_objeto+"']");
            element.onclick = function(){
                let table  = document.body.querySelector("table[name='bootstrap_table_"+that.id_objeto+"']");
                that.get_data(table);
                that.contador_registro++;
                // delete listener
                that.delete_row();
            }
    };
   
    // get data rows
    Bootstrap_table_one.get_data = function(table){
        let that = this;
        // vars
        let tr_tag = document.createElement("tr");
        let td_tag_name = document.createElement("td");
        let td_tag_mail = document.createElement("td");
        let td_tag_phone = document.createElement("td");
        let td_tag_button = document.createElement("td");
        let input_name = document.createElement("input");
        let input_mail = document.createElement("input");
        let input_phone = document.createElement("input");
        let input_button = document.createElement("input");
        //name
        input_name.setAttribute("type","text");
        input_name.setAttribute("class","form-control");
        input_name.setAttribute("id","name"+that.contador_registro);
        input_name.setAttribute("name","name"+that.contador_registro);
        // mail
        input_mail.setAttribute("type","text");
        input_mail.setAttribute("class","form-control");
        input_mail.setAttribute("id","mail"+that.contador_registro);
        input_mail.setAttribute("name","mail"+that.contador_registro);
        // phone
        input_phone.setAttribute("type","text");
        input_phone.setAttribute("class","form-control");
        input_phone.setAttribute("id","phone"+that.contador_registro);
        input_phone.setAttribute("name","phone"+that.contador_registro);
        // button
        input_button.setAttribute("type","button");
        input_button.setAttribute("name","bootstrap_table_delete_"+that.contador_registro);
        input_button.setAttribute("class","ibtnDel btn btn-md btn-danger");
        input_button.setAttribute("id","ibtnDel"+that.contador_registro);
        input_button.setAttribute("value","Delete");
        // add elements
        td_tag_name.appendChild(input_name);
        td_tag_mail.appendChild(input_mail);
        td_tag_phone.appendChild(input_phone);
        td_tag_button.appendChild(input_button);
        tr_tag.appendChild(td_tag_name);
        tr_tag.appendChild(td_tag_mail);
        tr_tag.appendChild(td_tag_phone);
        tr_tag.appendChild(td_tag_button);
        table.tBodies[0].appendChild(tr_tag);
    }

    // delete_row event
    Bootstrap_table_one.delete_row = function(puntero){
        var that = this;
        var element = document.body.querySelector("table[name^='bootstrap_table_"+that.id_objeto+"']"); 
        var elementos = element.getElementsByClassName("ibtnDel");
        //var prueba = element.querySelectorAll(".ibtnDel");
        //console.log("prueba "+prueba.length);
        var elementos_tr = element.tBodies[0].getElementsByTagName("tr");
        //var prueba_tr = element.tBodies[0].querySelectorAll("tr");
        //console.log("prueba_tr "+prueba_tr.length);
        for(var i=0;i<elementos.length;i++){
            let element = elementos[i];
            let indice = i;
            //console.log("element: "+element);
            element.onclick = function(){
                elementos_tr[indice].remove();    
            }    
        }

    };
    
    // call to events
    Bootstrap_table_one.add_row();
    
    return Bootstrap_table_one;
}; // end function


