# Some Notes for old version of Studyfans.com

## Repo

To run the project locally use the backend repo as the frontend code is embedded with the backend code.
https://github.com/StudyFans2/Main-StudyFans

## Views

If you need to make structure changes on the pages designs you mostly need to work under this directory: 
./platform/themes/ripple/views

## Work on Server
*if you need to work on the server directly for any reason, back up the files before changing them and after you make the changes you need to clear the cash via: studyfans.com/w3speedup_admin , under “CACHE” delete the first one only!

## Admin panel
The system has an admin dashboard, under “Appearance” tab you can find Custom CSS & Custom JS sub tabs. 
Under Custom JS: any existing code I advise to keep them as they are and you may add more if you need under any section
https://studyfans.com/admin-control


## Deploy for your live site

Change the base URL with your domain and build your application.

You can control this with the homepage field in your 
`package.json`
```
"homepage": "http://example.com"
```

## Some styling are external

There are some custom CSS codes under this path: https://studyfans.com/w3speedup_admin under CSS tab you can find the codes under section “Custom css to load with preload css”, not sure the reason to write them here but using Arabic fonts and Persian fonts worked based on this section.

