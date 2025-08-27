function selecionarPrato(elementoClicado){
    let listaElemento = document.querySelectorAll(".massas > .produto"); 
  
    listaElemento.forEach(item => item.classList.contains("selecionado") ? item.classList.remove("selecionado") : null);
    
    elementoClicado.classList.add("selecionado");
    check();
  }   
  
  function selecionarBebida(elementoClicado){
      let listaElemento = document.querySelectorAll(".bebidas > .produto"); 
  
    listaElemento.forEach(item => item.classList.contains("selecionado") ? item.classList.remove("selecionado") : null);
    
    elementoClicado.classList.add("selecionado");
    check();
  }
  
  function selecionarMolho(elementoClicado){
      let listaElemento = document.querySelectorAll(".molhos > .produto"); 
  
    listaElemento.forEach(item => item.classList.contains("selecionado") ? item.classList.remove("selecionado") : null);
    
    elementoClicado.classList.add("selecionado");
    check();
  }
  
  function finalizarPedido(){
    let carrinho = document.querySelectorAll(".produtos > .selecionado");
    console.log(carrinho);
  
    if(carrinho.length == 3){
      let modal = document.querySelector(".modal");
      let modalBox = document.querySelector(".modal-box");
  
      modal.classList.remove("escondido");
      modalBox.classList.remove("escondido");
  
      document.querySelector(".modal-box .item-1").innerHTML = carrinho[0].querySelector("p:nth-child(2)").innerHTML
      document.querySelector(".modal-box .item-2").innerHTML = carrinho[1].querySelector("p:nth-child(2)").innerHTML
      document.querySelector(".modal-box .item-3").innerHTML = carrinho[2].querySelector("p:nth-child(2)").innerHTML
    
      let carrinhoPreco1 = Number(carrinho[0].querySelector(".preco > p").innerHTML.replace("R$ ", "").replace(",","."));
      
      let carrinhoPreco2 = Number(carrinho[1].querySelector(".preco > p").innerHTML.replace("R$ ", "").replace(",","."));
      
      let carrinhoPreco3 = Number(carrinho[2].querySelector(".preco > p").innerHTML.replace("R$ ", "").replace(",","."));
  
      document.querySelector(".modal-box .preco-1").innerHTML = carrinhoPreco1
      document.querySelector(".modal-box .preco-2").innerHTML = carrinhoPreco2
      document.querySelector(".modal-box .preco-3").innerHTML = carrinhoPreco3
  
      let total = carrinhoPreco1 + carrinhoPreco2 + carrinhoPreco3
  
      document.querySelector(".modal-box .preco-4").innerHTML = total.toFixed(2)
    } else{
      alert("Selecione 1 item de cada");
    }
    
  }
  
  function esconder() {
      let modal = document.querySelector(".modal");
      let modalBox = document.querySelector(".modal-box");
  
      modal.classList.add("escondido");
      modalBox.classList.add("escondido");
  }
  
  function check() {
    let carrinho = document.querySelectorAll(".produtos > .selecionado");
    console.log(carrinho);
  
    if(carrinho.length == 3){
      let botao = document.querySelector(".botao-footer > button");
      botao.classList.add("habilitado");
      botao.style.backgroundColor = "#32B72F";
      
      botao = document.querySelector(".botao-footer > button > span");
      botao.innerHTML = "Fechar pedido";
    } else {
      let botao = document.querySelector(".botao-footer > button");
      botao.classList.remove("habilitado");
      botao.style.backgroundColor = "#cbcbcc";
      
      botao = document.querySelector(".botao-footer > button > span");
      botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }
    
  }
  
  function notificacao(){
    let endereco = prompt("Qual o seu endereço: ");
    let nome = prompt("Qual o seu nome: ");
    
    let texto = "Olá, gostaria de fazer o pedido: \n"
              + `- Prato: ${document.querySelector(".modal-box .item-1").innerHTML} \n`
              + `- Bebida: ${document.querySelector(".modal-box .item-2").innerHTML} \n`
              + `- Sobremesa: ${document.querySelector(".modal-box .item-3").innerHTML} \n`
              + `Total: R$ ${document.querySelector(".modal-box .preco-4").innerHTML}`
              +"\n \n"
              +`Nome: ${nome} \nEndereço: ${endereco}`;
  

    window.location = `https://wa.me/+5516982246353?text=${encodeURIComponent(texto)}`;
  }