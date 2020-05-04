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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//CTA SECTION!
document.querySelector(".cta-text h1").textContent = siteContent.cta["h1"];
document.querySelector(".cta-text button").textContent =
  siteContent.cta["button"];
document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.cta["img-src"]);

//MAIN CONTENT!
document.querySelector(".text-content h4").textContent =
  siteContent["main-content"]["features-h4"];
document.querySelector(".text-content p").textContent =
  siteContent["main-content"]["features-content"];

textContentClassElements = document.getElementsByClassName("text-content");

textContentClassElements[1].querySelector("h4").textContent =
  siteContent["main-content"]["about-h4"];
textContentClassElements[1].querySelector("p").textContent =
  siteContent["main-content"]["about-content"];

//MIDDLE IMAGE!

let middleimg = document.getElementById(`middle-img`);
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//VISION!

let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerText = "Vision";
let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//PRODUCT!

let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerText = "Product";
let productContent = document.getElementsByTagName('p')[3];
productContent.innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//SERVICES!

let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerText = "Services";
let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//CONTACT!

contactSectionElements = document.getElementsByClassName("contact")[0].children;
contactSectionElements[0].textContent = siteContent["contact"]["contact-h4"];
contactSectionElements[1].textContent = siteContent["contact"]["address"];
contactSectionElements[2].textContent = siteContent["contact"]["phone"];
contactSectionElements[2].textContent = siteContent["contact"]["email"];


//FOOTER!

document.querySelector("footer").textContent = siteContent.footer.copyright;