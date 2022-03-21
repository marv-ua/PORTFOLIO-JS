//const form = document.querySelector('.form-test-drive');
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const body = {};

        formData.append('form', form.classList.value);

        formData.forEach((value, field) => {
            body[field] = value;
        })

        // отправка данных на тестовый сервер
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(Response => {
                if (Response.ok) {
                    return Response.json();
                } else {
                    throw new Error(Response.status);
                }
            })
            .then(data => {
                // тут можно что-то делать с данными
                alert('Данные отправлены успешно!');
            })
            .catch(error => {
                alert('Данные отправлены с ошибкой ' + error.message);
            })
            .finally(() => {
                form.reset();
            })
        //
    })
})