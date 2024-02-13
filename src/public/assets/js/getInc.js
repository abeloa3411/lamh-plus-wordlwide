(async function getInq() {
  const url = "/api/v1/inquiries";

  try {
    const res = await fetch(url);
    const inquiryCount = document.getElementById("inquiry-count");
    const inquiries = await res.json();
    const inqBody = document.getElementById("inquiry-body");

    inquiryCount.innerHTML = inquiries.length + " inquiries";

    const loadedInquiries = inquiries
      .map((inquiry) => {
        console.log();
        const { name, description, phone, email, inqNo, date } = inquiry;

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
                          <span class="text-xs font-weight-bold">${inqNo}</span>
                        </td>
                        <td class="align-middle text-center">
                          <p>${date}</p>
                        </td>
                        <td class="align-middle text-center">
                          <p>
                      ${description}
                          </p>
                        </td>
                         <td class="align-middle text-center">
                          <p>
                      ${phone}
                          </p>
                        </td>
                      </tr>
       `;
      })
      .join("");

    inqBody.innerHTML = loadedInquiries;
  } catch (error) {
    console.log(error);
  }
})();
