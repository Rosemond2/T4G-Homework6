//Wwhen the mouse enter the 'explore our product buttion', it takes the users name.
//When the images are clicked on, it shows an external alerts an external link

function promptName(){//prompting the explore our product button
    let name = prompt("What is your name please");
    let pchange=document.querySelector("p");
    pchange.innerHTML= `👋 Welcome ${name} to taste the raw goodness of Africa😘`;
    let hone=document.querySelector("h1");
    hone.innerHTML=`Hi ${name}, Browse Through Our African Goodies`;

}


let explore = document.getElementById("contain");
explore.addEventListener("mouseenter", promptName);

function alertSpiceLink(){//alerting external link to African spices
    alert("https://www.google.com/search?client=firefox-b-d&q=african+spices");
}
let spice = document.querySelector("#spices");
spice.addEventListener("click", alertSpiceLink);

function alertFruitLink(){//alerting external link to African fruits
    alert("https://www.google.com/search?q=african+fruits&client=firefox-b-d&sca_esv=f30a9b7fa8506153&sca_upv=1&sxsrf=ADLYWIKut94K9NbYwnCgsHCsJSIqourlug%3A1720434610292&ei=sr-LZt_IEeCGhbIPqPic6A0&oq=african+fr&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmFmcmljYW4gZnIqAggAMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjqLVCBBVjQGHABeAGQAQCYAZ8CoAHmD6oBAzItOLgBAcgBAPgBAZgCBaACpAjCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAsICFhAuGIAEGLADGEMY1AIYyAMYigXYAQLCAgoQIxiABBgnGIoFwgIKEAAYgAQYQxiKBcICBBAjGCfCAhAQLhiABBixAxjRAxjHARgKwgIKEAAYgAQYsQMYCpgDAIgGAZAGE7oGBggBEAEYCboGBggCEAEYCJIHBTEuMC40oAeVPA&sclient=gws-wiz-serp");
}
let fruit = document.getElementById("fruits");
fruit.addEventListener("click", alertFruitLink);

function alertGreensLink(){//alerting external link to African greens
    alert("https://www.google.com/search?client=firefox-b-d&sca_esv=f30a9b7fa8506153&sca_upv=1&sxsrf=ADLYWIIBY0MwKlAZyXMxAxWc_aaQasi0wA:1720436176835&q=african+greens&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2joZDvir2QxhZkTA8rK1etu4Y3067o-fAl7lygmK690uJyNhakMg---uzr_Yo0p3ZtGQanELZDOaVjFN7yUDe4fgm8aQJKQiASDBoi8CDjwBb6GIRacDnd6jmUt3-NxqSASwMc-y&sa=X&ved=2ahUKEwiY_raZpJeHAxVlV0EAHcInCGYQtKgLegQIEhAB&biw=1600&bih=775&dpr=1");
}
let green = document.querySelector("#greens");
green.addEventListener("click", alertGreensLink);


//when the user clicks on the click to load more button, the first set of images appear
function loadMore(){//load more images
    let hide=document.getElementById("hide");
    hide.style.display= "block";
    hide.style.display= "flex";
    hide.style.flexWrap= "wrap";
    hide.style.flexDirection= "row";
    let disappear=document.getElementById("more-images");
    disappear.style.display= "none";
}
let moreImages = document.getElementById("more-images")
moreImages.addEventListener("click", loadMore)

//when the user clicks on the 'click to close' button, the other set of images should disappear
function vanish(){//closes 9 other images
    let noImages=document.getElementById("hide");
    noImages.style.display= "none";
    let block=document.getElementById("more-images");
    block.style.display= "block";
}
let closeImages = document.getElementById("close");
closeImages.addEventListener("click", vanish);


