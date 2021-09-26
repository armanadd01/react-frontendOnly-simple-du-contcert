# DU Farewell Concert bands list

This project deployed on [netlify, https://elated-benz-b34faa.netlify.app/](https://elated-benz-b34faa.netlify.app/).

## 

In the project src folder you can find a component folder, 
Here some short description or details of those folders

### `Header`

In Header Component, site details added. 
You can fiend here Two main header div. One is `top-header` and `header-menu`
`top-header` contain Header information like "The porupose of this project total Budget of the concert and a short text about project"


### `Main`

In Main component lots of thing added here. 
In this component all the  `JSON` data fatched here by using `useState` and `useEffect`
A handler function added. This function can handle a button under the single-band section, which you can find on `Band` component.
This Main component pass data to both `Band` and `Cart` component.
On `return` of data I returned `Band` component data under the hood of band-container by using `.map` method and pass a unique key, pass full Array of Object and pass  handleAddToCart funcction. And also under the hood of cart-container I pass an Array for `Cart` component. 

### `Band`

Builds

### `Cart`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If 
