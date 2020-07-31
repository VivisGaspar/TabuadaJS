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
  
calcTable();
  
document.querySelector("#valueA").addEventListener("change", calcTable);
  