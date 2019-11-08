# Postman to CSharp documentation helper
### Description
Tampermonkey user script converts documentation from postman to c# in a single click.

### Dependencies
- Tampermonkey for Google Chrome, Safari, Firefox.
- jQuery CDN access.
- Postman documentation page access

### Installation
- Install tampermonkey in Google Chrome (recomended)
- Download this script and install it on tampermonkey
- Go to your documentation page in postman
- After script starts the link "comments" will be replaced by a new link "View C# Docu" that opens a modal with the comments.


``` javascript

(function(){
    return {
        "name": "Postman to CSharp documentation helper",
        "by": "Luis Arias",
        "at": 2019
    }
})()
```