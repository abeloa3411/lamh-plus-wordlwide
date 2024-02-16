//api calls
//get orders
(async function getOrders() {
  const url = "https://lamhplusworldwide.onrender.com/api/v1/orders";
  const localUrl = "/api/v1/orders";

  try {
    const res = await fetch(url);
    const orders = await res.json();

    const orderBody = document.getElementById("order-body");
    const orderCount = document.getElementById("order-count");

    orderCount.innerHTML = orders.length + " orders";

    const loadedOrders = orders
      .map((order) => {
        const {
          _id,
          name,
          shipperCity,
          orderNo,
          recipientCity,
          trackingNo,
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
                            <p>${orderNo}</p>
                        </td>
                        <td>            
                            <p>${trackingNo}</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <p> ${shipperCity} </p>
                        </td>
                        <td class="align-middle text-center">
                          <p>${recipientCity}</p>
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
                          <p>${state}</>
                        </td>
                        <td class="align-middle text-center">
                          <a href="#" class="btn btn-outline-primary" id="cancel-btn" data-id="${_id}">Cancel Order</a>
                        </td>
            </tr>
    
    `;
      })
      .join("");

    orderBody.innerHTML = loadedOrders;

    const cancelBtn = document.querySelectorAll("#cancel-btn");

    cancelBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        deleteOrder(id);
      });
    });
  } catch (error) {
    console.log(error);
  }
})();

(async function getustomers() {
  const url = "https://lamhplusworldwide.onrender.com/api/v1/customer";
  const localUrl = "/api/v1/customer";

  const customerBody = document.getElementById("customer-body");

  try {
    const res = await fetch(localUrl);
    const customerCount = document.getElementById("customer-count");
    const customers = await res.json();

    customerCount.innerHTML = customers.length + " customers";
    const loadedCustomers = customers
      .map((customer) => {
        console.log();
        const { _id, name, address, contact, email, customerNo } = customer;

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
                            <p>${email}</p>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold">${customerNo}</span>
                        </td>
                        <td class="align-middle text-center">
                          <p>${address}</p>
                        </td>
                        <td class="align-middle text-center">
                          <p>${contact}</p>
                        </td>
                      <td class="align-middle text-center">
                          <a href="../pages/details/customer-details.html?=${_id}">Details</p>
                        </td>
              </tr>
       `;
      })
      .join("");

    customerBody.innerHTML = loadedCustomers;
  } catch (error) {
    console.log(error);
  }
})();

function deleteOrder(id) {
  const url = `/api/v1/orders/${id}`;

  if (confirm("Cancel Order")) {
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Order Canceled");
          window.location.reload();
        }
        return;
      })
      .catch((error) => console.log(error));
  }
}
