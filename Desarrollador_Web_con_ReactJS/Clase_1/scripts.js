const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#talk');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = new FormData(this);
  console.log(form.get('name'));

  $buttonMailto.setAttribute(
    'href', `mailto:davikin_01@hotmail.com?subject=${form.get('email')}&body=Establecimiento: "${form.get('establishment')}" 
    País: "${form.get('country')}" 
    Nombre:"${form.get('nombre')}" 
    Apellido:"${form.get('apellido')}" 
    DNI:"${form.get('dni')}" 
    Email: "${form.get('email')}" 
    Teléfono: "${form.get('telefono')}"
    Tipo de Seguro: "${form.get('tipo-seguro')}"
    `
    );
  $buttonMailto.click();
}
      
const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', e =>{
  textarea.style.height = 'auto';
  let cajaDeTexto = e.target.scrollHeight;
  textarea.style.height = `${cajaDeTexto}px`;
});