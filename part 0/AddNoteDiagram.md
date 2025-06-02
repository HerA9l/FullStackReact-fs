SequenceDiagram
    participant broswer
    participant server
    
    broswer->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server 
    server->>browser: satuts code 302
    desactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>broswer: HTML document 
    desactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server 
    server->>browser: [{"content":"","date":"2025-06-02T00:57:32.099Z"},{"content":"","date":"2025-06-02T00:57:36.633Z"}...]
    desactivate server

    Note right of browser: The browser executes the callback function that renders the notes

