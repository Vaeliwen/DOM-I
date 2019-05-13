const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Image SRCs
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middle = document.getElementById("middle-img")
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//Navbar content

let navElement = document.querySelector('nav')
navElement.children[0].textContent = siteContent["nav"]["nav-item-1"]
navElement.children[0].style.color = 'green';

navElement.children[1].textContent = siteContent["nav"]["nav-item-2"]
navElement.children[1].style.color = 'green';

navElement.children[2].textContent = siteContent["nav"]["nav-item-3"]
navElement.children[2].style.color = 'green';

navElement.children[3].textContent = siteContent["nav"]["nav-item-4"]
navElement.children[3].style.color = 'green';

navElement.children[4].textContent = siteContent["nav"]["nav-item-5"]
navElement.children[4].style.color = 'green';

navElement.children[5].textContent = siteContent["nav"]["nav-item-6"]
navElement.children[5].style.color = 'green';

let oldestChild = document.createElement('a')
oldestChild.setAttribute('href', '#')
oldestChild.textContent = 'Cool Dudes'
oldestChild.style.color = 'green'

let youngestChild = document.createElement('a')
youngestChild.setAttribute('href', '#')
youngestChild.textContent = 'Lame-os'
youngestChild.style.color = 'green'

navElement.appendChild(oldestChild)
navElement.prepend(youngestChild)

//cta content
let ctaLeft = document.querySelector('h1')
ctaLeft.textContent = siteContent["cta"]["h1"]


let ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent["cta"]["button"]


//H4 Headers
let h4Headers = document.querySelectorAll('h4')
h4Headers[0].textContent = siteContent["main-content"]["features-h4"]
h4Headers[1].textContent = siteContent["main-content"]["about-h4"]
h4Headers[2].textContent = siteContent["main-content"]["services-h4"]
h4Headers[3].textContent = siteContent["main-content"]["product-h4"]
h4Headers[4].textContent = siteContent["main-content"]["vision-h4"]
h4Headers[5].textContent = siteContent["contact"]["contact-h4"]

//p content
let para = document.querySelectorAll('p')
para[0].textContent = siteContent["main-content"]["features-content"]
para[1].textContent = siteContent["main-content"]["about-content"]
para[2].textContent = siteContent["main-content"]["services-content"]
para[3].textContent = siteContent["main-content"]["product-content"]
para[4].textContent = siteContent["main-content"]["vision-content"]
para[5].textContent = siteContent["contact"]["address"]
para[6].textContent = siteContent["contact"]["phone"]
para[7].textContent = siteContent["contact"]["email"]
para[8].textContent = siteContent["footer"]["copyright"]