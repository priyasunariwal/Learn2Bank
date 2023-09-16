// Function to toggle between sign-in and sign-up
let toggle = () => {
    const container = document.getElementById('container');
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
  };
  
  setTimeout(() => {
    const container = document.getElementById('container');
    container.classList.add('sign-in');
  }, 200);
  
  // Function to show the login popup
  function showLoginPopup() {
    const popup = document.getElementById('login-popup');
    popup.style.display = 'block';
  }
  
  // Function to hide the login popup
  function hideLoginPopup() {
    const popup = document.getElementById('login-popup');
    popup.style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Select the form element inside the 'sign-in' section
    const loginForm = document.querySelector('.sign-in form');
  
    // Add an event listener to the form submission
    loginForm.addEventListener('submit', async function (event) {
      event.preventDefault(); // Prevent the default form submission
      console.log('Form submitted'); // Debug message
  
      // Get user data from the form
      const formData = new FormData(loginForm);
  
      // Create an object to store user data
      const userData = {};
  
      // Loop through form fields and populate the userData object
      formData.forEach((value, key) => {
        userData[key] = value;
      });
  
      // For testing, you can log the user data to the console
      console.log('User Data:', userData);
  
      // This is where you should have your AJAX or fetch request to the server
      // Make sure your server is properly set up to handle this request
      // For testing purposes, you can simulate a response using setTimeout
      setTimeout(() => {
        const response = {
          success: true,
          authtoken: 'your-auth-token',
        };
  
        console.log(response);
        function Redirect() {
            window.location.href = "after.html";
         }
        if (response.success) {
          localStorage.setItem('token', response.authtoken);
          console.log(response.authtoken);
          Redirect()
          // Handle successful login, e.g., redirect to another page
        } else {
          // Handle the case where login was not successful
          console.error('Login failed');
        }
      }, 1000); // Simulate a delay as if sending a request to the server
    });
  });
  