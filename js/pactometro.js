var resultados=[
    {
        nombre:"PP",
        dipu:123,
        imagen:"logotipo-pp.png"
    },
    {
        nombre:"PSOE",
        dipu:89,
        imagen:"logotipo-psoe.png"
    },
    {
        nombre:"Podemos",
        dipu:65,
        imagen:"logotipo-podemos.png"
    },
    {
        nombre:"Compromis",
        dipu:4,
        imagen:"logotipo-compromis.png"
    },
    {
        nombre:"Ciudadanos",
        dipu:40,
        imagen:"logotipo-ciudadanos.png"
    },
    {
        nombre:"ERC",
        dipu:9,
        imagen:"logotipo-erc.jpg"
    },
    {
        nombre:"DL",
        dipu:8,
        imagen:"logotipo-ciu.png"
    },
    {
        nombre:"PNV",
        dipu:6,
        imagen:"logotipo-pnv.png"
    },
    {
        nombre:"Bildu",
        dipu:2,
        imagen:"logotipo-bildu.png"
    },
    {
        nombre:"IU-UP",
        dipu:2,
        imagen:"logotipo-iu.png"
    },
    {
        nombre:"CC",
        dipu:1,
        imagen:"logotipo-cc.png"
    }

];
var app={
    resultados:resultados,
    sies:[],
    noes:[],
    abst:[],
    seleccionados:[],
    noEstaPartido:function(array,boton){
        var num=array.length;
        var result=true;
        for(var i=0;i<num;i++){
            if(array[i]==boton){
                result=false;
            }
        }
        return result;
    },
    pulsado:function(evento) {
        //console.log(evento.target);
        //console.log(evento.target.parentNode);
        var boton = $(evento.currentTarget)[0];
        //console.log(boton);
        if (app.noEstaPartido(app.seleccionados,boton)) {
            app.seleccionados.push(boton);
        }
        $(evento.currentTarget).attr("disabled","disabled");
        //console.log(app.seleccionados);
    },
    coloca:function(evento){
        console.log(app.seleccionados);
        var num=app.seleccionados.length;
        var div=$(evento.currentTarget);
        var dipus=parseInt($(div).children("h2")[0].innerHTML);
        console.log(dipus);
        for (var i=0;i<num;i++){
            var boton=$(app.seleccionados[i]);
            //console.log(boton.attr("data-dipu"));
            dipus+=parseInt(boton.attr("data-dipu"));
            $(div).children("h2")[0].innerHTML=dipus;
            //console.log($(boton[i]).attr("data-nombre"));
            $(boton).hide();
            //pinta logo en div
            var HTML="<img src='img/"+boton.attr("data-img")+"'/>";
            div.append(HTML);
        }
        app.seleccionados=[];
    },
    pinta_init:function(){
        var num=app.resultados.length;
        console.log(num);
        if(num==0){
            $("#partidos").append("<h1>No hay Datos</h1>");
        }
        for(var i=0;i<num;i++){
            //console.log(i);
            var partido=this.resultados[i];
            //console.log(partido);
            //console.log(partido.nombre);
            //var partidoHTML='<button id="part-PP" data-dipu="123" data-nombre="PP" class="boton-partido" style="background-image: url(\"logotipo-pp.png\");"></button>';

            var partidoHTML="<button id='part-"+partido.nombre+"' " +
                " data-dipu='"+partido.dipu+"' " +
                " data-nombre='"+partido.nombre+"' " +
                " data-img='"+partido.imagen+"'" +
                "class='boton-partido' " +
                " " +
                "><img src='img/"+partido.imagen+"' width='100px'/> " +
                "<h2>"+partido.dipu+"</h2></button>";
            //console.log(partidoHTML);
            //Injertando al final http://api.jquery.com/append/
            $("#partidos").append(partidoHTML);
        }
        //console.log($(".boton-partido"));
        $(".boton-partido").click(app.pulsado);
    },
    resetea:function(){
        $("#cabecera div h2").text("0");
        $(".boton-partido").removeAttr("disabled");
        $(".boton-partido").show();
        $("#cabecera div img").remove();
        app.seleccionados=[];
    },
    init:function(){
        //console.log("init");
        var jqxhr=$.get("resultados.json")
            .done(function(data) {
                //console.log(eval(data));
                app.resultados=eval(data);

            })
            .fail(function(error) {
                console.log(error);
                console.log("error");
                app.resultados=[];
            })
            .always(function() {
                app.pinta_init();
            });

        $("#sies").click(app.coloca);
        $("#noes").click(app.coloca);
        $("#abst").click(app.coloca);
        $("#reset").click(app.resetea);
    }
};
$(document).ready(app.init);
