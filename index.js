document.body.onload = init();

function loadExternalFonts() {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,700');
  document.head.appendChild(link);
}

function getDivTitle() {
  return 'Lorem ipsum dolor';
}

function getDivText() {
  return 'Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi ridiculus porttitor mi cursus condimentum ut mauris, diam vulputate quisque euismod aptent dui. Curabitur himenaeos vitae quis tellus dictum fringilla fusce semper, pulvinar per eu facilisis nisl habitasse at tincidunt commodo, magna auctor ultrices suspendisse nostra eros orci. Ad massa enim natoque est vitae senectus gravida at viverra ornare, congue ut urna pretium porta diam sagittis rutrum libero, sociosqu pellentesque id luctus lacinia accumsan litora fermentum varius.';
}

function applyDivStyles(element) {
  element.id = 'widget-main-div';
  element.style.zIndex = 999;
  element.style.position = 'absolute';
  element.style.top = '100px';
  element.style.left = '200px';
  element.style.width = '250px';
  element.style.padding = '20px';
  element.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
  element.style.fontFamily = "Arial, Sans Serif";
}

function applyTitleStyles(element) {
  element.id = 'widget-div-title';
  element.style.fontWeight = 'bold';
  element.style.textDecoration = 'underline';
}

function applyContentStyles(element) {
  element.id = 'widget-div-content';
  element.style.textAlign = 'justify';
}

function init() {
  loadExternalFonts();
  const divContentTitle = getDivTitle();
  const divContentText = getDivText();
  
  const divContainer = document.createElement("div");
  applyDivStyles(divContainer);
  
  const divTitle = document.createElement("p");
  const divContent = document.createElement("p");
  
  divContainer.appendChild(divTitle);
  divContainer.appendChild(divContent);

  applyTitleStyles(divTitle);
  applyContentStyles(divContent);
  
  const divTitleContainer = document.createTextNode(divContentTitle);
  divTitle.appendChild(divTitleContainer)

  const divContentContainer = document.createTextNode(divContentText);
  divContent.appendChild(divContentContainer);

  const currentDiv = document.getElementById("div");
  document.body.insertBefore(divContainer, currentDiv);
}

