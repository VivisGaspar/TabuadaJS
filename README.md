# TabuadaJS ![](https://img.icons8.com/clouds/50/000000/naruto-sign.png)

Segundo "projetin" simples iniciado nessa *Quarentine* para matar a vontade de codar.![](https://img.icons8.com/color/30/000000/naruto.png)

Feito com amor e carinho para meu filho Naruteiro(:fish_cake:igual a mamãe:ramen:) para ajudar nos estudos.

Os créditos vão para o Time da [HCode](https://github.com/hcodebr) que disponibilizou o projeto no curso HTML completo com Projetos Práticos Web [Veja aqui](https://hcode.com.br/cursos/HTML5)

* Usado HTML, CSS3 e framework Bootstrap.
* A lógica desenvolvida em JavaSCript

``` javaScript
function calcTable() {
    let table = document.querySelector("#table");
    let valueA = parseInt(document.querySelector("#valueA").value);
  
    table.innerHTML = "";
  
    for (let valueB = 0; valueB <= 10; valueB++) {
      let result = valueA * valueB;
  
      let template = `
              <td>${valueA}</td>
              <td>X</td>
              <td>${valueB}</td>
              <td>=</td>
              <td>${result}</td>
      `;
  
      let tr = document.createElement("tr");
  
      tr.innerHTML = template;
  
      table.append(tr);
    }
}
````

![](https://github.com/VivisGaspar/TabuadaJS/blob/master/src/fonts/img/front.JPG)
