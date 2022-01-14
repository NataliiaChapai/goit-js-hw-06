const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    event.preventDefault();
     
    if (email === '' || password === '') {
        alert('Please note that all fields are required!')
    } else {
        const formData = {
        email,
        password,
    }
        console.log(formData);
        
    }
    
    formRef.reset()
}