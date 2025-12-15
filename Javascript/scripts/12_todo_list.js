const arr = JSON.parse(localStorage.getItem('arr')) || [];

function addtodo() {
  const inp = document.querySelector(".js-name-input");
  const inpDate = document.querySelector(".js-date-input");
  arr.push({name:inp.value,dueDate:inpDate.value});
  localStorage.setItem('arr',JSON.stringify(arr));
  inp.value = '';
  renderTodo();
}
document.querySelector('.js-add-btn')
  .addEventListener('click',()=>{
    addtodo();
  });

renderTodo();
function renderTodo() {
  let html = '';
  arr.forEach((value,index)=>{
    const {name,dueDate} = value;
    html += 
      `<div>
        ${name}
      </div>
      <div>
        ${dueDate}
      </div>
      <div>
        <button class="delete-btn js-delete-btn"
        >Delete</button>
      </div>`
    ;
  })
  document.querySelector(".inputText").innerHTML = html;
  document.querySelectorAll('.js-delete-btn')
    .forEach((deletebtn, index)=>{
      deletebtn.addEventListener('click',()=>{
          arr.splice(index,1);  
          localStorage.setItem('arr',JSON.stringify(arr));
          renderTodo();
      });
    });

}
