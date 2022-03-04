# The app is continuously deployed to Heroku and you can access by the below link:
https://terveystalotestapp.herokuapp.com/

# If you wish to test it locally:
Clone the repo.
On the client app.js, change the URL to
http://localhost:5000/myapi/?action=${query.actionQuery}&number${query.actionQuery === "sumandcheck" ? "s" : ""}=${query.numbersQuery}

npm install both client and server dependencies.
from server path in terminal, run
# npm run dev
which runs both client and server concurrently in development modes.

