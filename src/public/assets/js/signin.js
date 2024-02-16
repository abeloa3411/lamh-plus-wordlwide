document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("all fields required");
    }
    // Simulate sending login credentials to the server
    const credentials = {
      email,
      password,
    };

    // Assuming there's an API endpoint for authentication
    fetch("/api/v1/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          alert("Authentication failed");
          window.location.href = "index.html";
        }
        return response.json();
      })
      .then((data) => {
        const user = data.user.name;
        //Store token in localStorage or sessionStorage
        sessionStorage.setItem("user", user);
        // Redirect user to dashboard or any other authenticated route
        window.location.href = "./pages/dashboard.html";
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
