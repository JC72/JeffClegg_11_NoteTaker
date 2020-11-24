# JeffClegg_11_NoteTaker
This project was designed as a homework assignment for MSU's coding bootcamp. 

This project has been loaded to my Personal GitHub Page and deployed to my Heroku account. To get this project up and running, you can follow the deployment link that I have included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Demo](#demo)
4. [Assignment](#assignment)
5. [File Structure](#filestructure)
6. [License](#license)
7. [Execution](Execution)
8. [Contains](#contains)
9. [Credit](#credit)
10. [Creators](#creators)

## Links

* [GitHub Repository](https://github.com/JC72/JeffClegg_11_NoteTaker)
* [Active Site](https://lit-savannah-70105.herokuapp.com/)

## Project Overview <a name="projectoverview"></a>
* Uses HTML, CSS, Node.js, JQuery, JSON, AJAX, Express and Heroku to create a active web page allows the user to write notes, save , review old notes and delete them from the site.

## Demo:

![](https://github.com/JC72/JeffClegg_11_NoteTaker/blob/main/public/assets/video/demovideo.gif)

## Assignment
### This assignment contains the following features:

* Home Page
    * Contains a button to go to the working Notes page.

    ![Home Page](https://github.com/JC72/JeffClegg_11_NoteTaker/blob/main/public/assets/screenshots/homepage.png)


* Notes Page

    *Contains a NavBar the holds the following:

        1. Note Taker text

            * when clicked takes you back to the home page.

        2. Save Icon

            * which shows up when only a Title for the note and the note is added to the designated placeholders.

        3. Pencil Icon 
        
            * which allows you to create a new note

    * Container the when the note is saved stores it with the title and a trash can icon.

    * Container that allow the user to type the Title and the Note itself.

    ![Note Page](https://github.com/JC72/JeffClegg_11_NoteTaker/blob/main/public/assets/screenshots/notespage.png)

## File Structure <a name="filestructure"></a>

The following folders and what they contain are listed below:

```bash
  |-- JeffClegg_11_NoteTaker
    |-- .gitignore
    |-- LICENSE
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- server.js
    |-- db
    |   |-- db.json
    |-- public
    |   |-- assets
    |   |   |-- css
    |   |   |   |-- styles.css
    |   |   |-- js
    |   |   |   |-- index.js
    |   |   |-- screenshots
    |   |   |   |-- homepage.png
    |   |   |   |-- notespage.png
    |   |   |-- video
    |   |   |   | - demovideo.gif
    |   |-- index.html
    |   |-- notes.html
    |-- routes
    |   |-- apiRoutes.js
    |   |-- htmlRoutes.js
```

## License

This project is licensed under the MIT License License

![Badge for GitHub repo license](https://img.shields.io/github/license/JC72/JeffClegg_11_NoteTaker?style=flat&logo=appveyor)

## Execution
### To Execute File:
> Just click on the Active site link in the link section or go to
https://lit-savannah-70105.herokuapp.com/ in the web browser.

### Contains:

* Two HTML files
    * index.html
    * notes.html

* One css file
    * styles.css

* Three javascript files
    * index.js 
    * apiRoutes.js
    * htmlRoutes.js

* One Json File
    *db.json
        
* Package.json
    * Contains:
        * express


## Credit

* Would like to thank stackoverflow for helping me find fixes for some of my conflicts.  Especially with my problem when running the applicaion locally with the internal server error 500 is was having.

* [Stack Overflow](https://stackoverflow.com/)

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp