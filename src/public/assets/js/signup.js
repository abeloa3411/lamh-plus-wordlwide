document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("all fields required");
    }
    // Simulate sending login credentials to the server
    const credentials = {
      name,
      email,
      password,
    };

    // Assuming there's an API endpoint for authentication
    fetch("http://localhost:3000/api/v1/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Authentication failed");
        }
        return response.json();
      })
      .then((data) => {
        const token = data.token;
        // Store token in localStorage or sessionStorage
        localStorage.setItem("token", token);
        // Redirect user to dashboard or any other authenticated route
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
