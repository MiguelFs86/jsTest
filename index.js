document.body.onload = init();

/* Load widget styles from external file */
function loadWidgetStyles() {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://cdn.jsdelivr.net/gh/miguelFs86/jsTest@0.3/index.css');
  document.head.appendChild(link);
  link.onload = () => {
    createWidget();
  };
}

/* Set widget title */
function getDivTitle() {
  return 'Lorem ipsum dolor';
}

/* Set widget text */
function getDivText() {
  return 'Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi ridiculus porttitor mi cursus condimentum ut mauris, diam vulputate quisque euismod aptent dui. Curabitur himenaeos vitae quis tellus dictum fringilla fusce semper, pulvinar per eu facilisis nisl habitasse at tincidunt commodo, magna auctor ultrices suspendisse nostra eros orci. Ad massa enim natoque est vitae senectus gravida at viverra ornare, congue ut urna pretium porta diam sagittis rutrum libero, sociosqu pellentesque id luctus lacinia accumsan litora fermentum varius.';
}

/* Create the widget elements */
function createWidget() {
  const divContentTitle = getDivTitle();
  const divContentText = getDivText();
  
  /* Create the HTML elements */
  const divContainer = document.createElement('div');
  const divTitle = document.createElement('p');
  const divContent = document.createElement('p');

  divContainer.id = 'widget-main-div';
  divTitle.id = 'widget-div-title';
  divContent.id = 'widget-div-content';
  
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

function init() {
  loadWidgetStyles();
}
