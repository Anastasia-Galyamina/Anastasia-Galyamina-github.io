const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let data = new FormData(form);

  let Name = data.get('Name'); 

 
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Добавить?',
      text: "Добавить новость на сайт?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Да',
      cancelButtonText: 'Нет',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Добавлено!',
          'Ваша новость добавлена',
          'success'
        )
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Отменена',
          'Не удалось сохранить',
          'error'
        )
      }
    })
});

form.addEventListener("formdata", event => {
    const data = event.formData;

    const entries = [...data.entries()];

    entries.forEach(field => {
        console.log(field);
    })
});
