const form=document.getElementById('contact');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === ''  || message === '') {
        alert('please fill all fields');
    }

});