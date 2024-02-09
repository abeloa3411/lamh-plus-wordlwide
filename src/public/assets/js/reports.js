(async function getOrders() {
  try {
    const res = await fetch("http://localhost:3000/api/orders");
    const orders = await res.json();

    const reportBody = document.querySelector(".report-body");

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

        console.log(order);
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

    reportBody.innerHTML = loadedOrders;
  } catch (error) {
    console.log(error);
  }
})();
