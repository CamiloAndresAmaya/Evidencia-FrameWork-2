const offerForm = document.getElementById('offerForm');
const offerList = document.getElementById('offerList');

offerForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  // Crear un nuevo elemento para mostrar la oferta
  const offerItem = document.createElement('div');
  offerItem.classList.add('offer');
  offerItem.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="Cajero.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="#" class="btn btn-primary">Ver Oferta</a>
        </div>
    </div>`;

  // Agregar el elemento al listado de ofertas
  offerList.appendChild(offerItem);

  // Limpiar el formulario después de la publicación exitosa.
  offerForm.reset();
});