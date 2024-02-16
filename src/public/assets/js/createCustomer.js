const createCustomerBtn = document.getElementById("create-customer-btn");
const localUrl = "/api/v1/customer";

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

  const res = await fetch(localUrl, {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({
      name,
      email,
      contact,
      address,
    }),
  });

  if (!res.ok) {
    alert("Customer already exists");
    window.location.reload();
  } else if (res.ok) {
    alert("Customer created successfully");
    window.location.reload();
  }
}
