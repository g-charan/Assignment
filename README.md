## Install Packages

    cmd cd Frontend
    cmd npm i

## Check Migrations

    cmd cd Backend
    cmd python manage.py migrations

## Run both the FrontEnd and Backend

    cmd Frontend npm start
    cmd Backend python manage.py runserver
    (Note that the frontend shound run on localhost:3000 for preventing CORS exception)

## User Creation

    The User authentication is not very reliable as it is just retrieving user data from api
    but before going to the dashboard make sure you create a user through register page and use the exact details(Case Sensitive)

## Dashboard

    The dashboard is quite simple and most of the components use static JSON Data
    The Graphs include PieChart and Line Graph
    You can see your recent scheduled posts(API is not written,just static data) & recent comments from the dashboard itself

## Posts

    You can view the last three recently updated posts here through Schedule posts page

## Schedule Posts

    You can schedule posts here by choosing the date and time of your preference(Note that you can only send one but I have written a flexible code to add multiple in the future)
    the post gets posted to the api which stores the data after the countdown reaches 0

## Dependencies

    react-router for routing in the frontend
    django-rest-framework for creating REST apis quickly
    tailwindcss for css styling
    lucide-react for beautiful icons
    mui library for charts and components
    axios for the different api requests
