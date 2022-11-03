let createAccount = document.forms.createAccount;
console.log(createAccount);
console.log(createAccount.name);
console.log(createAccount.elements);
console.log(createAccount.agree);


let agree = createAccount.agree.addEventListener("click", function () {
  if (createAccount.agree.checked) {
      createAccount.button.style.backgroundColor = "rgb(43, 145, 43)";
      console.log("dfsdf");
   } else {
    createAccount.button.style.backgroundColor = "rgb(74, 197, 74)";
   }
});

createAccount.button.addEventListener("click", function () {
 if (createAccount.agree.checked) {
   let div = document.createElement('div');
   let section = document.querySelector(".section");
   let modal = document.querySelector(".modal");
   document.body.appendChild(div);
   section.style.display = "none";
   console.log("dfsdf");
   modal.style.display = 'block'

 } 

});





