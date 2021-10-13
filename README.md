# LC-React-Studio10

This studio focuses on using fragments, refs, and portals. It is recommended to view these instructions from the main repository page on GitHub where the markdown formatting and images are displayed.

You're going to finish a salon web page that should ultimately let a user click on the photo of a stylist and get a modal with various details about that person. Pretty straightforward, but there's a few steps involved. All the styling has been done for you using the styled-components library.

---

## Getting Started

### A. Fork & clone the repository from GitHub.
 - [ ] Navigate to the [studio 10 project repository](https://github.com/Carolista/LC-React-Studio10).
 - [ ] Fork the repository to your own account, then grab the link from the green Code dropdown.
 - [ ] In your terminal, go to the folder where you want your project to be. Use `git clone` to create your local copy.

### B. Get the project ready to code.
 - [ ] Still in your terminal, use `cd LC-React-Studio10/shear-perfection` to navigate to the actual React project and then use the command `npm install` to download any required dependencies. *Note: You won't be able to install the correct files or start the program unless you are in the `shear-perfection` directory.*
 - [ ] Now use the command `npm start` to serve the project to your browser. Test it out - you can resize the window and see the responsive layout, and notice how there are some fun transitions when you hover over each picture. The "nav menu" at the top is just for show - no actual links or other pages.

<p align="center"><img width="600" alt="Initial view of page with hover over one stylist's photo" src="https://user-images.githubusercontent.com/55961845/132589073-5ded6cf5-8ce3-4539-a060-4d4d667a7cf0.png"></p>

 - [ ] In VSCode (or the IDE of your choice), open the project so you can view the code. You should already be in the `main` branch, which is where the starter code resides. Now you're ready to go!

<p align="center"><img width="1240" alt="Starter code" src="https://user-images.githubusercontent.com/55961845/132589644-e09856b3-53aa-451e-a1ab-8a79dbee138a.png"></p>

---

## Part 1 - Get Familiar with the Existing Code.

### A. Take a look at the data.
 - [ ] In `/public/data/` open `stylistData.json`. Here you can see all the information available for each stylist. Most of this has already been prepped for you, but it's good for you to see where it's coming from.

### B. Get the big picture.
 - [ ] Open `App.js`. You can see here that there is nothing for you to add, but since this is the parent of `Stylists` and grandparent of `PhotoBox` and `StylistDetailsModal`, it is important to understand what is here and what it is tied into.
 - [ ] You can see that `async` and `await` are used to fetch the JSON from the file you just viewed. It is then set into the state variable `stylists`. 
 - [ ] The `useEffect` just initiates the fetch function when the component first loads.
 - [ ] Lastly, in the JSX, notice that the content in `<MainArea>` displays conditionally - only once `stylists` actually has loaded. Then it is passed to the `Stylists` component via the `allStylists` prop.
 - [ ] The `stylists` data will continue to passed to the other components, as you will see when you get there. But it all starts here.

### C. The header is a façade!
 - [ ] Everything in `Header` is just set up to look like a fully functional header, but it's not. The nav menu is for show, just to give the impression that you are on one of many pages. But you are only building out this one page.

The `Stylists`, `PhotoBox`, and `StylistDetailsModal` components are where you'll spend most of your time, and there are comments to explain what's already been done for you.

---

## Part 2 - Finish the `Stylists` Component

### A. Create a state variable and two event handlers.
 - [ ] Add the `useState` hook to the import from `'react'` at the top.
 - [ ] Inside the secondary `Stylist` component class (NOT the primary one, `Stylists`), create a state variable called `open`. Initialize it to the boolean value `false`.
 - [ ] Just below that, create two event handlers - `handleOpenModal` should set `open` to `true`, and `handleCloseModal` should set `open` back to false.

### B. Give `<PhotoBox>` one more prop to pass down.
 - [ ] In the implementation of `<PhotoBox>` in the JSX, add a prop called `handleOpen` and give it `handleOpenModal`.

### C. Implement the `StylistDetailsModal` component and give it props to pass down.
 - [ ] Before you can add a second component here to render, you need to group it together. Surround `<PhotoBox>` with a React fragment.
 - [ ] Inside the fragment, either above or below `<PhotoBox>`, add an implementation of `<StylistDetailsModal>`. Don't forget to import it at the top!
 - [ ] Give `<StylistDetailsModal>` three props: `stylist`, `show`, and `handleClose`. Give each of them the values `stylist` (local variable), `open` (state variable), and `handleCloseModal`.

Now everything should be ready for the children components, `PhotoBox` and `StylistDetailsModal`, to use.

---

## Part 3 - Add onClick Handlers inside the `PhotoBox` and `StylistDetailsModal` Components

### A. First, `PhotoBox`
 - [ ] Add an `onClick` attribute to `<ShadowBox>` and give it the prop `handleOpen` provided by the parent component, `Stylists`.
 - [ ] Now, when you click on a photo, (eventually) you'll be able to open its corresponding modal.

### B. Then, `StylistDetailsModal`
 - [ ] In the `Backdrop` subcomponent, add an `onClick` attribute to `<StyledBackdrop>` and give it the prop `handleClose` provided by the parent component, `Stylists`.
 - [ ] Do the same in the `Modal` subcomponent for `<StyledButton>`.
 - [ ] Now you will have two different ways to close your modal!

Only a couple last things to do before you can see your modal in action.
 
---

## Part 4 - Create Portals & Add Refs

### A. Create refs so each instance of the photo boxes and modals can be identified and correlated.
 - [ ] In the `PhotoBox` component, add the `useRef` hook to the import from `'react'`. 
 - [ ] Just inside the component class, create a new ref called `boxRef`.
 - [ ] In the implementation of `<ShadowedBox>`, add the `ref` attribute and give it `boxRef`.
 - [ ] In the `StylistDetailsModal` component, repeat that process, except the ref will be called `modalRef` and you'll put it in the `<div>` in the JSX at the bottom that is returned from the primary component.
 - [ ] Wow, that was easy!

### B. Create portals and send them to new root elements in the home page. This is where your backdrop and modal will display.
 - [ ] Go to `index.html` and look at the `TODO`. Create two new divs and give them the ids of `backdrop-root` and `modal-root`. 
 - [ ] Now go to the `StylistDetailsModal` component and scroll to the bottom. Within the JSX, follow the instructions on the last `TODO` to place the `Backdrop` and `Modal` components into their respective portals. Visit the [createPortal page](https://reactjs.org/docs/portals.html) in the React documentation if you need a reminder of the usage - and you can use your old DOM knowledge from Unit 1 to reference the new elements you just created in `index.html`!

Give it a whirl! You should now have the ability to see this:

<p align="center"><img width="947" alt="The final product - a working modal" src="https://user-images.githubusercontent.com/55961845/132597842-7ab77c57-b60e-47e2-8a14-6264a54e9c2d.png"></p>

---

## That's it! Great job!
