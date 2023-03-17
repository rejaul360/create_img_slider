let images = [
    'images/architect.png',
    'images/banner.png',
    'images/team1.png',
    'images/team2.png',
    'images/team3.png',
    'images/team4.png'
]
    
let imgIndex =  0; 

setInterval( () => {
    const imgElement =  document.getElementById('slider_img');
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgURl = images[imgIndex]
    console.log(imgURl);
    imgElement.setAttribute('src' , imgURl)
    imgIndex++;
},1000)