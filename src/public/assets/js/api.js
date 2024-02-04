//api calls
//get orders
(async function getOrders() {
  try {
    const res = await fetch("http://localhost:3000/api/orders");
    const orders = await res.json();

    const orderBody = document.getElementById("order-body");
    const orderCount = document.getElementById("order-count");

    orderCount.innerHTML = orders.length + " orders";

    const loadedOrders = orders
      .map((order) => {
        const {
          name,
          destination,
          orderNo,
          origin,
          cost,
          state,
          chargeableWeight,
          merchant,
          description,
        } = order;

        return `
             <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">${name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="avatar-group mt-2">
                            <p>${orderNo}</p>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> ${origin} </span>
                        </td>
                        <td class="align-middle text-center">
                          <p>${destination}</p>
                        </td>
                        <td class="align-middle text-center">
                          <p>${description}</p>
                        </td>
                           <td class="align-middle text-center">
                          <p>${merchant}</p>
                        </td>
                           <td class="align-middle text-center">
                          <p>${cost}</p>
                        </td>
                           <td class="align-middle text-center">
                          <p>${chargeableWeight}</p>
                        </td>
                        <td class="align-middle text-center">
                          <a class="btn btn-outline-primary">${state}</a>
                        </td>
                        <td class="align-middle text-center">
                          <a href="update.html" class="btn btn-outline-primary"
                            >Edit</a
                          >
                        </td>
            </tr>
    
    `;
      })
      .join("");

    orderBody.innerHTML = loadedOrders;
  } catch (error) {
    console.log(error);
  }
})();

//create an order

const createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", createOrder);

async function createOrder(e) {
  e.preventDefault();

  try {
    fetch("http://localhost:3000/api/orders", {
      method: "post",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        name: "Shawn Makolo",
        email: "shawn@gmail.com",
        origin: "Finland",
        destination: "kenya",
        cargoType: "Pampers",
        cost: "20500",
        chargeableWeight: "4000",
        dimensions: "40 * 40 * 40",
        merchant: "FEDEX",
        orderDate: "20-10-2024",
        deliveryDate: "20-10-2025",
        descriptoin: "good to go",
        currentLocation: "egypt",
        state: "not fullfilled",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
}
