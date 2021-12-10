document.body.onload = init();

/* Load external Google Font */
function loadExternalFonts() {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;500&display=swap');
  document.head.appendChild(link);
}

function loadWidgetStyles() {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://cdn.jsdelivr.net/gh/miguelFs86/jsTest/main/index.min.css');
  document.head.appendChild(link);
}

/* Set widget title */
function getDivTitle() {
  return 'Lorem ipsum dolor';
}

/* Set widget text */
function getDivText() {
  return 'Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi ridiculus porttitor mi cursus condimentum ut mauris, diam vulputate quisque euismod aptent dui. Curabitur himenaeos vitae quis tellus dictum fringilla fusce semper, pulvinar per eu facilisis nisl habitasse at tincidunt commodo, magna auctor ultrices suspendisse nostra eros orci. Ad massa enim natoque est vitae senectus gravida at viverra ornare, congue ut urna pretium porta diam sagittis rutrum libero, sociosqu pellentesque id luctus lacinia accumsan litora fermentum varius.';
}

/* Apply styles for widget main div */
function applyDivStyles(element) {
  element.id = 'widget-main-div';
  element.style.zIndex = 99999;
  element.style.position = 'absolute';
  element.style.top = '100px';
  element.style.left = '200px';
  element.style.width = '350px';
  element.style.padding = '20px';
  element.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
  element.style.fontFamily = 'Cairo, sans-serif';
  element.style.backgroundColor = "white";
}

/* Apply styles for widget title */
function applyTitleStyles(element) {
  element.id = 'widget-div-title';
  element.style.fontWeight = 'bold';
  element.style.textDecoration = 'underline';
  element.style.margin = '0';
  element.style.fontSize = '1.8rem';
  element.style.color = '#34558b'
}

/* Apply styles for widget content */
function applyContentStyles(element) {
  element.id = 'widget-div-content';
  element.style.textAlign = 'justify';
  element.style.lineHeight = '1.6rem';
  element.style.color = '#798fa8';
}

/* Create the widget elements */
function init() {
  loadExternalFonts();
  const divContentTitle = getDivTitle();
  const divContentText = getDivText();
  
  /* Create the HTML elements */
  const divContainer = document.createElement("div");
  const divTitle = document.createElement("p");
  const divContent = document.createElement("p");

  /* Apply the styles */
  applyDivStyles(divContainer);
  applyTitleStyles(divTitle);
  applyContentStyles(divContent);
  
  /* Append the title and content to the main DIV */
  divContainer.appendChild(divTitle);
  divContainer.appendChild(divContent);

  /* Add the text elements to title/content elements */
  const divTitleTextElement = document.createTextNode(divContentTitle);
  divTitle.appendChild(divTitleTextElement)

  const divContentTextElement = document.createTextNode(divContentText);
  divContent.appendChild(divContentTextElement);

  /* Append the widget element to the body */
  document.body.appendChild(divContainer);
}

