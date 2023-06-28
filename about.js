

let form = document.querySelector('#contact');

function handleSubmit(event) {
	event.preventDefault(); // Prevents the default form submission behavior
  
	// Perform form handling logic here
  
	// Access form data
	const form = event.target;
	const formData = new FormData(form);
	const username = formData.get('username');
	const password = formData.get('password');
  
	
	alert('Form submitted successfully!');
	alert('mouseover duck Image')
  
	
  }
  
 
  form.addEventListener('submit', handleSubmit);
  
  
