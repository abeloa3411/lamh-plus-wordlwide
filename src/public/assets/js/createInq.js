const urlInq = "/api/v1/inquiries";
const url = "https://lamhplusworldwide.onrender.com/api/v1/inquiries";

const createInqBtn = document.getElementById("create-inq-btn");

createInqBtn.addEventListener("click", createInq);

async function createInq() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const description = document.getElementById("description").value;

  if (name === "" || email === "" || phone === "" || description === "") {
    alert("Add all customer fields");
    return;
  }

  try {
    await fetch(urlInq, {
      method: "post",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        name,
        email,
        phone,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Inquiry added");
        window.location.reload();
      });
  } catch (error) {
    console.log(error);
  }
}
