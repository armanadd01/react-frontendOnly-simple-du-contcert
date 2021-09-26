# DU Farewell Concert bands list

This project deployed on [netlify: https://elated-benz-b34faa.netlify.app/](https://elated-benz-b34faa.netlify.app/).

## 

In the project src folder user can find a component folder, 
Here some short description or details of those folders

### `Header`

In Header Component, site details added. 
user can fiend here Two main header div. One is `top-header` and `header-menu`
`top-header` contain Header information like "The porupose of this project total Budget of the concert and a short text about project"


### `Main`

In Main component lots of thing added here. 
In this component all the  `JSON` data fetched here by using `useState` and `useEffect`
A handler function added. This function can handle a button under the single-band section, which user can find on `Band` component.
This Main component pass data to both `Band` and `Cart` component.
On `return` of data I returned `Band` component data under the hood of band-container by using `.map` method and pass a unique key, pass full Array of Object and pass  handleAddToCart function. And also under the hood of cart-container I pass an Array for `Cart` component. 

### `Band`

`Band` component is one of the main component of this projects here user shaw all the data. 
And also in this component I added a button. Which get data from `Main` component. When user click on that button cart data will updated

### `Cart`

**Note: When user clicked on `Add This Band` , Cart data will update !**

This `Cart` component is on of the main interactive part of this project. When a user clicked on `Add This Band` button 
user can shaw 3 data updated
:one: Total Band data 
:two: Total amount
:three: And at last a list of added band 

for listing the band I use `.map` method. Because Cart data itself an Array. 

## Thanks Giving

**Thanks for visiting my 1st react project :smiley: :smiley: :smiley:**