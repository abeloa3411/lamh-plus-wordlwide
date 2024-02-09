const createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", createOrder);
//create an order
async function createOrder() {
  //   select elements
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const cost = document.getElementById("cost").value;
  const chargeableWeight = document.getElementById("chargeable-weight").value;
  const dimensions = document.getElementById("dimensions").value;
  const merchant = document.getElementById("merchant").value;
  const orderDate = document.getElementById("date-of-order").value;
  const deliveryDate = document.getElementById("date-of-delivery").value;
  const description = document.getElementById("description").value;
  const sale = document.getElementById("sale").value;
  const shipper = document.getElementById("shippers-name").value;
  const recipient = document.getElementById("recipient-name").value;

  if (
    name === "" ||
    email === "" ||
    orderDate === "" ||
    orderDate === "" ||
    destination === "" ||
    cost === "" ||
    chargeableWeight === "" ||
    dimensions === "" ||
    merchant === "" ||
    deliveryDate === "" ||
    description === "" ||
    sale === "" ||
    shipper === "" ||
    recipient === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  try {
    await fetch("http://localhost:3000/api/orders", {
      method: "post",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        name,
        email,
        origin,
        destination,
        cost,
        chargeableWeight,
        dimensions,
        merchant,
        orderDate,
        deliveryDate,
        description,
        shipper,
        recipient,
        sale,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Order Added Successfully");
      });
  } catch (error) {
    console.log(error);
  }
}
