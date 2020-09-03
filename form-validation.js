
function formValidator(form) {
    document.querySelector('#submit').addEventListener('click', function(event) {
        event.preventDefault()
        let inputs = form.querySelectorAll('input');
        let textArea = form.querySelector('.footerTextarea')

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if (input.value == "") {
                input.classList.add('formError');
            } else {
                input.classList.remove('formError');
            }
        } 
        if (textArea.value == "") {
            textArea.classList.add('formError');
        } else {
            textArea.classList.remove('formError');
        }
    })
}

export default formValidator;