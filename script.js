const SearchBar= document.querySelector('.search-bar');
const Searchbtn= document.querySelector('#search_gif');
const container3= document.querySelector('.container-3');
const images= document.querySelector('.images');



function getFacts(URL){
    return new Promise((resolve, reject) => {
          const xhr= new XMLHttpRequest();
          xhr.onload=(res)=>{
            let data = JSON.parse(res.target.response);
            resolve(data);
          }
           // Added an onerror handler to handle network errors.

           xhr.onerror=(err)=>{
               reject(err);
           }

        //    Open the XMLHttpRequest with the 'GET' method 
        // and set it to asynchronous (true).
        // Send the request.

        xhr.open('Get',URL);
        xhr.send();   

    })

   

}

Searchbtn.addEventListener('click',(ev)=>{
    getFacts(`https://api.giphy.com/v1/gifs/search?&q=${input.value}&limit=100&api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0`)

    .then((res)=>{
        let factList=document.querySelector('.results')
        console.log(res.data);
        if(res.data){
            console.log(res.data);
            res.data.forEach(element => {
                const img= document.createElement("img");
                img.src=element.images.original.url;
                factList.appendChild(img).classList.add('figure')
                img.parentElement.classList.add('figcaption');
            });
       }
    })

    .catch(err =>{
            console.log(err);
     })
})

getFacts('https://api.giphy.com/v1/gifs/search?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0');

