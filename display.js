window.addEventListener('load',() =>{
  
  document.getElementById("first1").innerHTML = localStorage.getItem("First");
  document.getElementById("middle1").innerHTML = localStorage.getItem("Middle");
  document.getElementById("last1").innerHTML = localStorage.getItem("Last");
  document.getElementById("phone1").innerHTML = localStorage.getItem("Phone");
  document.getElementById("address1").innerHTML = localStorage.getItem("Address");
  document.getElementById("email1").innerHTML = localStorage.getItem("Email");
  document.getElementById("tenth1").innerHTML = localStorage.getItem("Tenth");
  document.getElementById("twelth1").innerHTML = localStorage.getItem("Twelth");
  })