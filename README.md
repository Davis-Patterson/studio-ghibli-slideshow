# React Studio Ghibli Slideshow

For this project you will build a component that allows a user to progress through a set of data, one item at a time.

The user will be able to navigate through a slideshow showing information about the films of Hayao Miyazaki.

Each "slide" should show the title of the film, the original title of the film in Japanese, the movie poster image, the film's release date, and description text about the film.

Data for the Miyazaki films is provided in a file named `film-data.json`. You should put this file in your `src` folder.

## Skills you're building in this project

Doing this project, you will...

- Build a component that advances through a set of data showing one item at a time, using buttons to navigate and restart
- Use state in React
- Use multiple click events in React
- Use props to pass data from a parent component to a child component

## Definition of Done

- When the page loads, the user should see the first slide.
- A user can see the next slide in the slideshow when the next button is clicked.
- A user can go back to the previous slide in the slideshow when the back button is clicked.
- A user can start over from the beginning when the Start Over button is clicked.
- A user should not be able to click on the Next button when the slide is the last one (because the button is disabled).
- A user should not be able to click on the Back button when the slide is the first one (because the button is disabled).
- A user should not be able to click on the Start Over button when the slide is the first one (because the button is disabled).
- The application should be styled, but it can be very simple. Keep your focus on functionality. You can use a library if you want to (lightweight ones like Bulma or Materialize are good options, though if you want more of a challenge here you could reach for Tailwind or Material UI).

#### Here is an example of how a finished app should work

![](react-slides.gif)

## How to Start

We'll use [Vite](https://vitejs.dev/) to create a new React application. [What is Vite and why should you use it instead of CRA?](https://luketheweb.dev/blog/what-is-vite-and-why-should-you-use-it-instead-of-create-react-app) Glad you asked. 

[The Vite documentation walks you through creating a React project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). You'll run `npm create vite@latest` and follow the prompts (choose "React" as your framework; for variant, select "JavaScript"). You'll have a `src` folder like you are used to and can install dependencies with `npm` in exactly the same way. To run the server, you will need to run the command `npm run dev`. Note that `npm start` will not work by default with Vite.

⚠️ Pay attention to directories here. Vite will ask you for the project name. If you want it to install the files inside the directory you are currently in, you can give it `.` as the name. If you give it some other name, Vite will create a subdirectory with that name, and install the files there. Either way is fine, just be aware of what you're doing.

❗If you install the react app inside a subdirectory, note that you will need to `cd` into that subdirectory in order to run commands with npm like `npm start` or `npm install`.

Once you have scaffolded the React app, you can approach developing the slideshow app in whatever way makes the most sense to you. Here is one way you could approach it.

- Create a component called `Slideshow` in a file called `Slideshow.jsx`. You will need to write all the code for the slideshow in this component.
    - Optionally, you might choose to also make a Slide component, but it's not necessary to make this work.
- App.jsx should render the `Slideshow` component.
- Put the data file in the `src` directory and import it in the file you want to use it in.
- Pass the slide data in as a prop from App.jsx to the `Slideshow` component. The data can then be used in the `Slideshow` component.
- Figure out what you want the UI to look like. What elements will the JSX need to include?
- Think about how you will make it possible to show a single film in the UI. How could this work? (hint: you'll need the `useState` hook)
- Once you have one film showing in the UI, consider how a click on the next button could tell React that the next slide should be shown. (hint: you will need an `onClick` event handler)

## 🌶️ Spicy options

- Create a sort button that allows a user to view the slides in order by release date.
- Create a Go To feature: an input field that lets a user type in the number of the slide they want to go to and the UI shows that slide immediately. Bonus: find a way to let the user go back to the slide they were on before they used Go To, even if it is not the one right before the current slide (i.e.: if a user is on slide 2, and then uses Go To to slide 7, they have an option to return to slide 2 instead of slide 6. Your UI should make this option clear to the user).
- Add [pagination](https://bulma.io/documentation/components/pagination/) [links](https://materializecss.com/pagination.html#!) to navigate through the content (those links are just some examples!).
- Instead of showing one film at a time, show a list of 10 films on each slide (or "page"). A longer data file with many more Studio Ghibli films is provided, so you can swap it in for `film-data.json`. You should provide [pagination links](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Pagination) to the user.
  - Allow a user to see more detail about a film by clicking on the film's title. This could be done by showing a modal with more information about the film, or by showing the information on the same page as the list of films.
- Imagine that this data was not being provided in a file, but was being requested from an external API. Handle a case when the data passed in as a prop contains 0 slides.
- Add a search bar that allows a user to search for a film by title. The search should be case-insensitive and should match any part of the title. You can use a library like [Fuse.js](https://fusejs.io/) to help with making approximate matches in the searched data, rather than exact matches.
- Use more of the provided data on the page. For example, you could show the director, producer, and Rotten Tomatoes score for each film. Can you think of a way to show this information in a way that is not overwhelming to the user?
- Let the user choose which data they want to see on the page. For example, a user could choose to see the title, release date, and description, but not the Japanese title or the poster image.
- Add a feature that allows a user to add a film to a list of favorites. The list of favorites should be shown on the page. The list of favorites should be saved in [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) so that it persists when the page is refreshed. Take it further by allowing the user to remove a film from the list of favorites.
- Improve the UX by adding animations to the slideshow. For example, you could add a fade-in effect when a new slide is shown, or a slide-in effect when a slide is removed from the page.
- Allow the user to navigate using the keyboard. For example, the user could use the left and right arrow keys to go back and forth between slides.
- Add a timer that automatically advances the slides after a certain amount of time. The user should be able to pause the timer, and the timer should be reset when the user clicks the Start Over button.

_Data courtesy of [ghibliapi](https://github.com/janaipakos/ghibliapi)_
