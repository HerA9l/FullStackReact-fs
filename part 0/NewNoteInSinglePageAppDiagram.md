SequenceDiagram
    participant broswer
    participant server

    Note right of browser: User types a note and clicks "Save" in the SPA

    Note right of browser: JavaScript handles the form submission without reloading the page

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 created {"message":"note created"}
    deactivate server

    Note right of browser: The browser updates the local state and re-renders the note list 