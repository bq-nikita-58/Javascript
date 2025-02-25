const form = document.getElementById('myForm');

        // Handle form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Get values from the inputs
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;

            // Validate phone number using the pattern
            const phonePattern = /^[0-9]{10}$/;
            const phoneError = document.getElementById('phoneError');
            if (!phonePattern.test(phone)) {
                phoneError.textContent = 'Phone number must be exactly 10 digits.';
                return;
            } else {
                phoneError.textContent = ''; // Clear error if phone is valid
            }

            // Check if all fields are filled
            if (name && phone && email) {
                // Show the data in an alert
                alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}`);
            } else {
                alert('Please fill in all required fields.');
            }
        });



        /*
        /^[0-9]{10}$/: This is the regular expression that performs the check.

^: This symbol indicates the start of the string.
[0-9]: This defines a range for any digit between 0 and 9. So, it matches any digit.
{10}: This specifies that the preceding [0-9] should appear exactly 10 times.
$: This symbol indicates the end of the string.

.test(phone): This method tests if the regular expression matches the string provided (phone in this case).

*/
