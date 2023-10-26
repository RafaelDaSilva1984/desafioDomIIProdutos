/* Instruções do projeto
Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML 
a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo',
um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço.
Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem.
Procure usar o método simples e o método complexo, ensinados neste tópico.
*/

let elementoProdutoVenda = document.createElement("div");
elementoProdutoVenda.innerHTML = `
<h1>Produto Loja Rafael da Silva</h1>
<h3>Mouse Logitech Vertical Ergonõmico</h3>
<p>Este tipo de mouse é projetado para um ajuste mais natural e um melhor posicionamento do antebraço e, 
<br>assim como um banho quente, eles removem a pressão, 
permitindo que você mantenha sua <br>produtividade por mais tempo</p>
<img src="mouse.jpeg.jpg">
<h2><b>Valor: R$ 650,00</b></h2>
<a href="https://www.logitech.com/pt-br/ergo/ergonomic-mouse-benefits.html">Saiba Mais Clicando AQUI.</a>
`;
const produtoLojaRafael = document.body.appendChild(elementoProdutoVenda);
console.log(elementoProdutoVenda);