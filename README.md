# Namaste React 

# Parcel https://parceljs.org/
- Dev build
- Local Server
- HMR = Hot module replacement
- File watching algorithm - written in C++
- Cachig - Faster builds 
- Image optimization 
- Minification - process of removing unnecessary characters from your code without changing its functionality.
- Bundling 
- Compress
- Consistent Hashing 
- Code Splitting 
- Differential Bundling - support older browsers.
- Diagnostic 
- Error Handling 
- HTTPs
- Tree Shaking - remove unused code.
- Different dev and production build

# Namaste Food 

// Header
//  -- Logo
//  -- Nav Items
// Body 
//  -- search
//  --RestaurentContainer
//    --RestaurentCard
        //  --Image
        //  --name of the restaurent, star Rating, cuisines, Delivery time
// Footer
//  --copyright
//  --links
//  --Address
//  --Contact


//passing props to the component = passing arguments to the function 
//dynamically pass in some data to component - use props  
//configure driven UI - Basically our UI is driven by config (data) 

Two types of Import/Export

- Default Export/Import

export default component;
import component from "path";

- Named Export/Import

export const Component;
import {Component} from "path"

# React Hooks
- Normal JS utility Fuctions - Created by facebook developers 
- useState() - SuperPowerful state variables in react.
- const [stateVariable, setStateVariable] = useState(initialValue);
- stateVariable: The current value of the state.
- setStateVariable: A function to update the state.
- initialValue: The initial value of the state (can be a number, string, array, object, etc.).
- We should only write useState() inside the functional component and best practice is to write it on the top. Is it easy for react to understand. Never use useState() hooks inside - if() else() or for() loop or a function.

- When i write npm install react - Then we got all the utility functions in our code.
- React keep track of all state variables(special variables).
- When ever a state variables updates react re-renders the components. check the difference between previous virtual dom and new virtual dom. Only updates that difference on real dom.

- useEffect() 
- There are 2 arguments we will keep into useEffect.
- First argument is arrow function (Callback function)  () => {} 
- Second argument is dependency array. [ ] - (optional)
- This callback function will be called after your component renders.
- So if you have to do something after rendering the component you have to write it inside useEffect.
- if no dependency array => useEffect is called on every render
- if dependency array is empty = [ ] => useEffect is called on initial render(just once) 
- if dependency array is [btnName] => useEffect is called everytime btnName is updated.

- fetch() is a built-in JavaScript function used to make HTTP requests (like GET, POST, etc.) to servers 
- for example, to fetch data from an API.

- If there is an origin mismatch then browsers blocks that api call - CORS policy.
- If suppose i want to call swiggy's api from my local host.
- Cors chrome extension should be added to access.

- Shimmer UI 
- Shimmer UI (also called skeleton loading or shimmer loading) is a loading placeholder animation that  gives users a visual hint that content is being loaded.
- Instead of showing a blank screen or a spinner, it displays gray blocks with a shimmering effect (like a light moving across), imitating the layout of the real content.

# React Router 
- npm install react-router-dom 
- when ever we have to develop routes we have to create the routing configuration 
- routing configuration means some information that will define what will happen on a specific route.
- an information that will tell the browser router that what will happen on a specific path.

- RouterProvider -> Provide this routing configuration to our app.
- react-router-dom gives us access to an important hook --> useRouteError
- react-router-dom also gives us a super power link component.

# 2 types Routing in web apps
- Client Side Routing (React -> Single Page Application -> Client Side Routing)
- Server Side Routing (older Websites)







