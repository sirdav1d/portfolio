const btn = document.getElementById('btnForm')
const form = document.getElementById('form')


btn.addEventListener('click', function () {
  toastr.success('E-mail enviado com sucesso');
  form.remove()
})

form.addEventListener