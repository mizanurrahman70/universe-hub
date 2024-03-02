const mainDiv=document.getElementById('main-div')

const dataLoad=async()=>{
    const response= await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data= await response.json()
   const mainData=data.data.tools
   
   displayShows(mainData)
}
const displayShows=(data)=>{

data.forEach(item => {
    console.log(item)

   const futuri=item.features.map((data,index)=>`${index+1}.${data}`)
    const newDiv=document.createElement('div')
    newDiv.innerHTML=`
                    <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src=${item.image} alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">Features</h2>+
                      <p>${futuri.join("<br>")}</p>
                      <hr>
                      <h3 class="text-3xl">${item.name}</h3>
                      <p>${item.published_in}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
    `
    mainDiv.appendChild(newDiv)
});
}

dataLoad()



