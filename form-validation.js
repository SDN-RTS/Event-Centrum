
function formValidator(form) {
    document.querySelector('#submit').addEventListener('click', function(event) {
        event.preventDefault();
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if (input.value == "") {
                input.classList.add('formError');
            }
        }
    })
}

export default formValidator;