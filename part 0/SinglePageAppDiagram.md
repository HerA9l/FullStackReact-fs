SequenceDiagram
    participant broswer
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server activated
    server->>browser: HTML document
    server desactivated

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server activated
    server->>browser: the css file 
    server desactivated

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server activated
    server->>browser: the js file 
    server desactivated

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server activated
    server->>browser: the js file 
    server desactivated

    Note right of browser: The browser executes the callback function that renders the notes
