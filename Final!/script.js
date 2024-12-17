
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

   
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
});