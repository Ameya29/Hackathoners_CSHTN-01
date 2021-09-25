function events() {
  alert("Succesfully Submitted !");
}

 
function HandleEvent() {

  const first = document.getElementById("first").value;
  localStorage.setItem("First", first);


  const middle = document.getElementById("middle").value;
  localStorage.setItem("Middle", middle);


  const last = document.getElementById("last").value;
  localStorage.setItem("Last", last);

  const phone = document.getElementById("phone").value;
  localStorage.setItem("Phone", phone);

  const address = document.getElementById("address").value;
  localStorage.setItem("Address", address);

  const email = document.getElementById("email").value;
  localStorage.setItem("Email", email);

  const tenth = document.getElementById("tenth").value;
  localStorage.setItem("Tenth", tenth);

  const twelth = document.getElementById("twelth").value;
  localStorage.setItem("Twelth", twelth);

  return false;
}