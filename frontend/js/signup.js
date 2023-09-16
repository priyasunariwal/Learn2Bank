document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const signupForm = document.getElementById('signup-form');

    // Add an event listener to the form submission
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get user data from the form
        const formData = new FormData(signupForm);

        // Create an object to store user data
        const userData = {};

        // Loop through form fields and populate the userData object
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        // Now userData object contains user data from the form

        // For testing, you can log the user data to the console
        console.log('User Data:', userData);

        fetch('http://localhost:3001/api/auth/createPUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server Response:', data);
            if (data.success) {
                localStorage.setItem('token', data.authtoken);
                // You can redirect the user to a new page or perform other actions here
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
