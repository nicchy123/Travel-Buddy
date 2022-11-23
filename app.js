var carObject = {
    vehicle: 'Car',
    imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100',
    farePerKilo: 3,
    capacity: 4,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisciThere is no one who loves pain itself, who seeks after it and wants to have it, simply because it is'
};
var bikeObject = {
    vehicle: 'Bike',
    imageUrl: 'https://images.unsplash.com/photo-1558981033-0f0309284409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100',
    farePerKilo: 2,
    capacity: 1,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisciThere is no one who loves pain itself, who seeks after it and wants to have it, simply because it is'
};
var busObject = {
    vehicle: 'Bus',
    imageUrl: 'https://images.unsplash.com/photo-1577459640575-219cbf231b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=727&q=80" class="d-block w-100',
    farePerKilo: 3,
    capacity: 4,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisciThere is no one who loves pain itself, who seeks after it and wants to have it, simply because it is'
};

const servicesArray = [bikeObject, carObject, busObject];
function displayAllArticles(arr){
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        displayAllArticles(element);
    }
} 


function displayServices(services) {
    const mainSection = document.getElementById('main-section')
    const stringyFiedobj = JSON.stringify(services);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 850px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${services.imageUrl} class="img-fluid rounded-start h-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Transport Mode: ${services.vehicle}</h5>
          <p class="card-text">${services.description}.</p>
          <p class="card-text"><small>Fareperkilo: ${services.farePerKilo}</small> <small>Capacity: ${services.capacity}</small></p>
          <button type="button" onclick='handleBooking(${stringyFiedobj})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Book Now
           </button>
        </div>
      </div>
    </div>
  </div>
    `
    mainSection.appendChild(div);
};
displayServices(carObject);
displayServices(busObject);
displayServices(bikeObject);

function handleBooking(obj) {
    const modalBody = document.getElementById('modal-body');
    const stringyFiedobj = JSON.stringify(obj);
    modalBody.innerHTML = `
    <div class="card" style="width: 18rem mx-auto;">
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Transport Mood: ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text"><small>Fareperkilo: ${obj.farePerKilo}</small> <small>Capacity: ${obj.capacity}</small></p>
    
    <p>Fare: <small id="fare"></small></p>
    <p>Tax: <small id="tax"></small></p>
    <p>Total Cost: <small id="cost"></small></p>
    
    <div class="d-flex flex-column" role="search">
            <input class="form-control mt-2" id="distance-input" type="number" placeholder="Distance" aria-label="Search">
            <input class="form-control mt-2" id="quantity-input" type="number" placeholder="How Many Vehicle" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringyFiedobj})' class="btn btn-primary">Submit</button>
            </div>
         
  </div>
</div>
    `
}
handleBooking(carObject)
handleBooking(busObject)
handleBooking(bikeObject)


function calculateCost(obj){
    const quantity = document.getElementById('quantity-input').value;
    const distance = document.getElementById('distance-input').value;
    const fareDiv = document.getElementById('fare');
    fareDiv.innerHTML = quantity * distance * obj.farePerKilo;
    const taxDiv = document.getElementById('tax');
    taxDiv.innerHTML = fareDiv.innerHTML * 0.02;
    const costDiv = document.getElementById('cost');
    costDiv.innerHTML = quantity * distance * obj.capacity;
};
document.getElementById("search-btn").addEventListener("click", function(){
  const  value = document.getElementById("search-value").value;
  
  for (let i = 0; i < servicesArray.length; i++) {
      const element = servicesArray[i];
      if(value.toLowerCase()== element.vehicle.toLowerCase()){
              document.getElementById("main-section").innerHTML=""
              displayServices(element);
              return;
      }
      
  }
  
  alert("nothing found with your input")
  })