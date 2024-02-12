const createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", createOrder);

const url = "https://lamhplusworldwide.onrender.com/api/v1/orders";
const localUrl = "/api/v1/orders";
const localUrlCustomer = "/api/v1/customer";
//create an order
async function createOrder() {
  //   select elements
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;
  const shipperName = document.getElementById("shippers-name").value;
  const shipperCompany = document.getElementById("shippers-company").value;
  const shipperPhone = document.getElementById("shippers-phone").value;
  const shipperAddress = document.getElementById("shippers-address").value;
  const shipperCity = document.getElementById("shippers-city").value;
  const shipperZip = document.getElementById("shippers-zip-code").value;
  const shipperCountry = document.getElementById("shippers-country").value;
  const shipperEmail = document.getElementById("shippers-email").value;
  const recipientName = document.getElementById("recipient-name").value;
  const recipientCompany = document.getElementById("recipient-company").value;
  const recipientPhone = document.getElementById("recipient-phone").value;
  const recipientAddress = document.getElementById("recipient-address").value;
  const recipientCity = document.getElementById("recipient-city").value;
  const recipientZip = document.getElementById("recipient-zip-code").value;
  const recipientCountry = document.getElementById("recipient-country").value;
  const recipientEmail = document.getElementById("recipient-email").value;
  const weight = document.getElementById("weight").value;
  const dimension = document.getElementById("dimensions").value;
  const merchant = document.getElementById("merchant").value;
  const chargeableWeight = document.getElementById("chargeable-weight").value;
  const cost = document.getElementById("cost").value;
  const sale = document.getElementById("sale").value;
  const description = document.getElementById("description").value;

  if (
    name === "" ||
    email === "" ||
    contact === "" ||
    address === "" ||
    shipperName === "" ||
    shipperCompany === "" ||
    shipperPhone === "" ||
    shipperAddress === "" ||
    shipperCity === "" ||
    shipperZip === "" ||
    shipperCountry === "" ||
    shipperEmail === "" ||
    recipientName === "" ||
    recipientCompany === "" ||
    recipientPhone === "" ||
    recipientAddress === "" ||
    recipientCity === "" ||
    recipientZip === "" ||
    recipientCountry === "" ||
    recipientEmail === "" ||
    weight === "" ||
    dimension === "" ||
    merchant === "" ||
    chargeableWeight === "" ||
    cost === "" ||
    sale === "" ||
    description === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  try {
    await fetch(localUrl, {
      method: "post",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        name,
        email,
        contact,
        address,
        shipperName,
        shipperCompany,
        shipperPhone,
        shipperAddress,
        shipperCity,
        shipperZip,
        shipperCountry,
        shipperEmail,
        recipientName,
        recipientCompany,
        recipientPhone,
        recipientAddress,
        recipientCity,
        recipientZip,
        recipientCountry,
        recipientEmail,
        weight,
        dimension,
        merchant,
        chargeableWeight,
        cost,
        sale,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Order Added Successfully");
        window.location.reload();
      });
  } catch (error) {
    console.log(error);
  }
}

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

  try {
    await fetch(localUrlCustomer, {
      method: "post",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        name,
        email,
        contact,
        address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Customer added");
      });
  } catch (error) {
    console.log(error);
  }
}
