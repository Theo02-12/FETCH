fetch('http://localhost:8082/api/articles/?populate=*')
.then(res => res.json())
.then((data)=>{

    const container = document.querySelector('#container')
    // Boucle pour afficher chaque article de strapi
    
    
    
    


    
    
    
    
    data.data.forEach(articles => {

    //URL pour les images et les titres
        const productImg = articles.attributes.image.data.attributes.url
        const productTitle = articles.attributes.titre

        const myH1 = document.createElement('h1')
        
    // Panier   
        const button = document.createElement('button')
        const panier = document.querySelector('#panier')
        
        button.innerHTML = "Acheter"

        button.addEventListener('click', function(){
            panier.innerHTML = productTitle
        })
    // Fin du panier    

    // Page html
        var img = new Image()
        img.src = "http://localhost:8082" + productImg

        myH1.append(productTitle)
        container.append(myH1, img, button)
        
        const size = ['S', 'M', 'L']
        
        const selectSize = document.createElement('select')
        
    size.forEach(taille =>{

        
        const option = document.createElement('option') 
        option.value = taille;
        option.text = taille;

        
        selectSize.appendChild(option)
        container.append(selectSize)
        console.log(option)
        })
        

      
    });
})