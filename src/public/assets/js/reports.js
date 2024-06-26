const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", searcResult);

async function searcResult() {
  const dateOne = document.getElementById("from").value;
  const dateTwo = document.getElementById("to").value;

  const data = {
    dateOne,
    dateTwo,
  };

  if (!data) {
    alert("Enter atleast two date fields");
  }

  fetch("/api/v1/orders/report", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        alert("Authentication failed");
      }
      return response.json();
    })
    .then((data) => {
      if (!data) {
        alert("Failed to get data");
      }
      displayData(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function displayData(data) {
  const reportBody = document.querySelector(".report-body");

  if (data.length === 0) {
    alert("Result not found");
    return;
  }

  const loadedReport = data
    .map((report) => {
      const {
        name,
        orderNo,
        orderDate,
        shipperName,
        shipperCountry,
        recipientName,
        recipientCountry,
        weight,
        merchant,
        chargeableWeight,
        cost,
        sale,
        trackingNo,
        state,
      } = report;

      return `
               <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div
                                class="d-flex flex-column justify-content-center"
                              >
                                <h6 class="mb-0 text-sm">${orderDate}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>${merchant}</p>
                          </td>
                          <td class="align-middle text-center">
                            <p> ${orderNo} </p>
                          </td>
                           <td class="align-middle text-center">
                            <p> ${trackingNo} </p>
                          </td>
                           <td class="align-middle text-center">
                            <p> ${weight} </p>
                          </td>
                           <td class="align-middle text-center">
                            <p> ${chargeableWeight} </p>
                          </td>
                           <td class="align-middle text-center">
                            <p> ${cost} </p>
                          </td>
                           <td class="align-middle text-center">
                            <p> ${sale} </p>
                          </td>
                           <td class="align-middle text-center">
                            <p> ${shipperCountry} </p>
                          </td>
                          <td class="align-middle text-center">
                            <p>${recipientCountry}</p>
                          </td>
                           <td class="align-middle text-center">
                            <p> ${name} </p>
                          </td>
                           <td class="align-middle text-center">
                            <p> ${shipperName} </p>
                          </td>
                           </td>
                           <td class="align-middle text-center">
                            <p> ${recipientName} </p>
                          </td>
                              <td class="align-middle text-center">
                            <p> ${state} </p>
                          </td>
              </tr>

      `;
    })
    .join("");

  reportBody.innerHTML = loadedReport;
}

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("table.table"));
});
