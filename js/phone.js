const loadPhone= async(phoneText) => {
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneText}`);
    const data= await res.json();
    displayPhones(data.data);
};
const displayPhones=  phones =>{
    const phonecontainer=document.getElementById('phone-container');
   const showAll=document.getElementById('show-all-container');
   if(phones.length>10){
    showAll.classList.remove('hidden');
   }
   else {
    showAll.classList.add('hidden');
   }
    phones=phones.slice(0,10)
    phonecontainer.innerHTML='';
   phones.forEach(phone => {
   // console.log(phone)
    const phoneCard=document.createElement('div');
    phoneCard.classList=`card bg-base-100 shadow-xl"`;
    phoneCard.innerHTML=`
    <figure>
    <img src="${phone.image}" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>I love coding(akif)</p>
        <div class="card-actions justify-center">
        <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
    </div>
    `
    phonecontainer.appendChild(phoneCard);
     });
     toggleSpinner(false);
};
const handelSearch=()=>{
    toggleSpinner(true);
    const searchField=document.getElementById('search');
    const searchText=searchField.value;
    loadPhone(searchText);
   
};
const toggleSpinner=(isLoding)=>{
    const spinner=document.getElementById('spinner');
    if(isLoding){
        spinner.classList.remove('hidden');
    }
   else{
    spinner.classList.add('hidden');
   }
  
};
const showDetails=async(id)=>{
    console.log(id);
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data=await res.json();
    //console.log(data);
  const phone=data.data;
  //showDetailsData(phone);
  showDetailsData(data.data);
};
const showDetailsData =(phone)=>{
    show_details_modal.showModal();
    console.log(phone);
    const showName=document.getElementById('show_details_name');
    const showDetailscontainer=document.getElementById('show_details_container');
    showDetailscontainer.innerHTML=`
    <p>Name:${phone.name}</p>
    <img  src ="${phone.image}">
    <p><span>Storage:</span>${phone.mainFeatures.storage}</p>
    `
  
}


