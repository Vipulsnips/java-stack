const arr = [];

function addtodo() {
  const inp = document.querySelector(".js-name-input");
  const inpDate = document.querySelector(".js-date-input");
  arr.push({name:inp.value,dueDate:inpDate.value});
  inp.value = '';
  renderTodo();
}

function renderTodo() {
  let html = '';
  for (let i = 0; i < arr.length; i++) {
    const {name}=arr[i];
    const {dueDate}=arr[i];
    html += 
      `<div>
        ${name}
      </div>
      <div>
        ${dueDate}
      </div>
      <div>
        <button onclick="
          arr.splice(${i},1);  
          renderTodo();
        "
        class="delete-btn"
        >Delete</button>
      </div>`
    ;
  }
  document.querySelector(".inputText").innerHTML = html;
}
