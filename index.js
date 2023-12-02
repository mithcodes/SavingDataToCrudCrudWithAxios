const submit = document.getElementById('submit');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const div = document.getElementById('div');

submit.addEventListener('click', function () {
    
    const data = {
        name: name.value,
        phone: phone.value,
        address: address.value
    };

    
    const list = document.createElement('li');
    list.textContent = `${data.name}, ${data.phone}, ${data.address}`;

    
    const remove = document.createElement('button');
    remove.textContent = 'remove';

    
    list.appendChild(remove);

    
    div.appendChild(list);

    
    axios.post('https://crudcrud.com/api/9e3ec5db431c44a68fd6cb3319e4ffdd/mentdata', data)
        .then(function (response) {
            
            console.log('Data submitted successfully:', response.data);
        })
        .catch(function (error) {
        
            console.error('Error submitting data:', error);
            document.getElementById('div').innerText = 'Error submitting data.';
        });

    
    remove.addEventListener('click', function () {
        div.removeChild(list);
    });
});
