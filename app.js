const userText = fetch("http://localhost:1337/api/articles/?populate=*");
const textContent = document.querySelector('#contenu');
const textContentUser2 = document.querySelector('#contenu2');




userText.then((response) =>{
    const userData = response.json(); 
    
    userData.then((pictures) =>{
    console.log((pictures).data ['1']);

    const titreText = pictures.data['0'].attributes.titre;
    console.log(titreText)
    textContent.innerHTML = titreText;
    
    var img = new Image();
    img.src = "http://localhost:1337" + pictures.data ['0'].attributes.image.data ['0'].attributes.url;

    var block = document.querySelector('#test');
    block.appendChild(img);
    console.log(img)
    
    
    const textUser2 = pictures.data ['1'].attributes.titre;
    console.log(textUser2)
    textContentUser2.innerHTML = textUser2;

    var img2 = new Image();
    img2.src = "http://localhost:1337" + pictures.data ['1'].attributes.image.data ['0'].attributes.url;

    var block2 = document.querySelector('#test2');
    block2.appendChild(img2);

    
    
})
})
