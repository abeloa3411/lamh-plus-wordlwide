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
          orderDate,
          deliveryDate,
          cost,
          state,
          dimensions,
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
                          <p>${state}</p>
                        </td>
                        <td class="align-middle text-center">
                          <p>${dimensions}</p>
                        </td>
                          <td class="align-middle text-center">
                          <p>${deliveryDate}</p>
                        </td>
                          <td class="align-middle text-center">
                          <p>${orderDate}</p>
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

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("table.table"));
});
