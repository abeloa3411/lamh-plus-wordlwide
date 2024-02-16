const createCustomerBtn = document.getElementById("create-customer-btn");

createCustomerBtn.addEventListener("click", createCustomer);

//create customer
async function createCustomer() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;

  if (name === "" || email === "" || contact === "" || address === "") {
    alert("Add all customer fields");
    return;
  }

  await fetch(localUrl, {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({
      name,
      email,
      contact,
      address,
    }),
  })
    .then((res) => {
      res.json();
    })
    .then(() => {
      alert("Customer added");
    })
    .catch((err) => console.log(err));
}
