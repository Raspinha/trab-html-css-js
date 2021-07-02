function trocarcorfundopag(){
    var corf = document.getElementById('corfundopag').value;
    document.getElementById('fundo').style.backgroundColor = corf;
}

function trocarcorsubtit(){
    var corsub = document.getElementById('corsubtit').value;
    document.getElementById('jas').style.color = corsub;
    document.getElementById('rel').style.color = corsub;
    document.getElementById('jir').style.color = corsub;
    document.getElementById('pol').style.color = corsub;
}

function trocarcorfundotexto(){
    var corft = document.getElementById('corfundotexto').value;
    document.getElementById('conteudo').style.backgroundColor = corft;
}

function trocarcorparag(){
    var corparag = document.getElementById('corparag').value;
    document.getElementById('').style.color = corparag;
}

function trocarcortitprinc(){
    var cortitprinc = document.getElementById('cortituloprinc').value;
    document.getElementById('principal').style.color = cortitprinc;
}

function trocarcorlinks(){
    var corlinks = document.getElementById('corlinks').value;
    document.getElementById('jasp').style.color = corlinks;
    document.getElementById('rela').style.color = corlinks;
    document.getElementById('jira').style.color = corlinks;
    document.getElementById('poli').style.color = corlinks;
    document.getElementById('linktopo').style.color = corlinks;
}

function trocarcorparag(){
    var corparag = document.getElementById('corparag').value;
    document.getElementById('texto').style.color = corparag;
}

tamanho = 15.3;
function diminuir(){
  tamanho--;
  document.getElementById('fundo').style.fontSize=tamanho+"px";
  document.getElementById('p1').style.fontSize=tamanho+"px";
  document.getElementById('p2').style.fontSize=tamanho+"px";
  document.getElementById('p3').style.fontSize=tamanho+"px";
  document.getElementById('p4').style.fontSize=tamanho+"px";
  document.getElementById('p5').style.fontSize=tamanho+"px";
  document.getElementById('p6').style.fontSize=tamanho+"px";
  document.getElementById('p7').style.fontSize=tamanho+"px";
  document.getElementById('p8').style.fontSize=tamanho+"px";
  document.getElementById('p9').style.fontSize=tamanho+"px";
  document.getElementById('p10').style.fontSize=tamanho+"px";
  document.getElementById('p11').style.fontSize=tamanho+"px";
  document.getElementById('p12').style.fontSize=tamanho+"px";
  document.getElementById('p13').style.fontSize=tamanho+"px";
  document.getElementById('p14').style.fontSize=tamanho+"px";
  document.getElementById('p15').style.fontSize=tamanho+"px";
  document.getElementById('p16').style.fontSize=tamanho+"px";
  document.getElementById('p17').style.fontSize=tamanho+"px";
  document.getElementById('p18').style.fontSize=tamanho+"px";
  document.getElementById('addr').style.fontSize=tamanho+"px";
  document.getElementById('linktopo').style.fontSize=tamanho+"px";
  document.getElementById('jasp').style.fontSize=tamanho+"px";
  document.getElementById('rela').style.fontSize=tamanho+"px";
  document.getElementById('jira').style.fontSize=tamanho+"px";
  document.getElementById('poli').style.fontSize=tamanho+"px";
  
}
function aumentar(){
  tamanho++;
  document.getElementById('fundo').style.fontSize=tamanho+"px";
  document.getElementById('p1').style.fontSize=tamanho+"px";
  document.getElementById('p2').style.fontSize=tamanho+"px";
  document.getElementById('p3').style.fontSize=tamanho+"px";
  document.getElementById('p4').style.fontSize=tamanho+"px";
  document.getElementById('p5').style.fontSize=tamanho+"px";
  document.getElementById('p6').style.fontSize=tamanho+"px";
  document.getElementById('p7').style.fontSize=tamanho+"px";
  document.getElementById('p8').style.fontSize=tamanho+"px";
  document.getElementById('p9').style.fontSize=tamanho+"px";
  document.getElementById('p10').style.fontSize=tamanho+"px";
  document.getElementById('p11').style.fontSize=tamanho+"px";
  document.getElementById('p12').style.fontSize=tamanho+"px";
  document.getElementById('p13').style.fontSize=tamanho+"px";
  document.getElementById('p14').style.fontSize=tamanho+"px";
  document.getElementById('p15').style.fontSize=tamanho+"px";
  document.getElementById('p16').style.fontSize=tamanho+"px";
  document.getElementById('p17').style.fontSize=tamanho+"px";
  document.getElementById('p18').style.fontSize=tamanho+"px";
  document.getElementById('addr').style.fontSize=tamanho+"px";
  document.getElementById('linktopo').style.fontSize=tamanho+"px";
  document.getElementById('jasp').style.fontSize=tamanho+"px";
  document.getElementById('rela').style.fontSize=tamanho+"px";
  document.getElementById('jira').style.fontSize=tamanho+"px";
  document.getElementById('poli').style.fontSize=tamanho+"px";
}

function trocarfonte(){
    var fonte = document.getElementById('fontes');
    var selecionado = fonte.options[fonte.selectedIndex].value;

    if (selecionado == "Arial"){
        document.getElementById('fundo').style.fontFamily = 'Arial';
    }
    if (selecionado == 'Comic'){
        document.getElementById('fundo').style.fontFamily = 'Comic Sans Ms'
    }
    if (selecionado == 'Courier'){
        document.getElementById('fundo').style.fontFamily = 'Courier New'
    }
    if (selecionado == 'Tahoma'){
        document.getElementById('fundo').style.fontFamily = 'Tahoma'
    }
    if (selecionado == 'Verdana'){
        document.getElementById('fundo').style.fontFamily = 'Verdana'
    }
}

