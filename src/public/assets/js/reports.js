(async function getOrders() {
  try {
    const res = await fetch("http://localhost:3000/api/v1/orders");
    const orders = await res.json();

    const reportBody = document.querySelector(".report-body");

    const loadedOrders = orders
      .map((order) => {
        const {
          name,
          orderNo,
          orderDate,
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
                        <td class="align-middle text-center">
                          <p> ${shipperCity} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${email} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${contact} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${shipperAddress} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${shipperName} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${shipperCompany} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${shipperPhone} </p>
                        </td>
                        <td class="align-middle text-center">
                          <p>${shipperCountry}</p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${shipperZip} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${shipperAddress} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${recipientName} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${recipientAddress} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${recipientCity} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${recipientCompany} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${recipientPhone} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${recipientZip} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${recipientCountry} </p>
                        </td>
                         <td class="align-middle text-center">
                          <p> ${recipientEmail} </p>
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
                          <p>${sale}</p>
                        </td>
                        <td class="align-middle text-center">
                          <p>${chargeableWeight}</p>
                        </td>
                        <td class="align-middle text-center">
                          <p>${dimension}</p>
                        </td>
                          <td class="align-middle text-center">
                          <p>${weight}</p>
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
