//api calls
//get orders
(async function getOrders() {
  const url = "https://lamhplusworldwide.onrender.com/api/v1/orders";
  const localUrl = "http://localhost:3000/api/v1/orders";

  try {
    const res = await fetch(localUrl);
    const orders = await res.json();

    const orderBody = document.getElementById("order-body");
    const orderCount = document.getElementById("order-count");

    orderCount.innerHTML = orders.length + " orders";

    const loadedOrders = orders
      .map((order) => {
        const {
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
                          <a href="#" class="btn btn-outline-primary"
                            >Cancel Order</a
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

(async function getustomers() {
  const url = "https://lamhplusworldwide.onrender.com/api/v1/orders";
  const localUrl = "http://localhost:3000/api/v1/customer";

  const customerBody = document.getElementById("customer-body");

  try {
    const res = await fetch(localUrl);
    const customers = await res.json();

    const loadedCustomers = customers
      .map((customer) => {
        console.log();
        const { name, address, contact, email, customerNo } = customer;

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
                      </tr>
       `;
      })
      .join("");

    customerBody.innerHTML = loadedCustomers;
  } catch (error) {
    console.log(error);
  }
})();
