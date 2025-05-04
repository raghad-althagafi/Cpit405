# Welcome to our IT Solutions Project!🚀✨

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

## First! The prototype!
The prototype is one of the main aspects of creating any application, whether a web or a mobile one! We used Figma to create the layout of each page, making sure that we are all have the same vision that we are going for. Here:https://www.figma.com/design/f35fsTTMJJyhxBmXxIKEJd/405PROTO?node-id=0-1&p=f&t=irio4XYRlxKix34q-0 

![image](https://github.com/user-attachments/assets/83a923bc-373b-49b6-b8e6-2e2aa6f103f5)


## Home page

The first page that the website opens to is the landing page also known as the home page.
![image](https://github.com/user-attachments/assets/b3aeb83d-ba61-4933-9923-078d2d40c6da)

### Morphing Gradients animation:
On this page, we decided to make it as interactive as possible with the Morphing Gradients animation in the background that follows the movement of the mouse. 
We used the `addEventListener` alongside the  `removeEventListener`. The `UseEffect` helps to track the user's cursor position `curX`, and `curY` is the current position of the interactive blob.
while `tgX`, and `tgY` are the target cursor positions.

**CSS Structure and animation**
<ul>
<li>A set of animated div elements (.g1 to .g5) using radial gradients and CSS animations.</li>
<li>A div.gradient-bg that defines the background area.</li>
<li>A .text-container holding the main hero title.</li>
<li>A @keyframes (like moveInCircle, moveVertical, moveHorizontal) animate each gradient blob in its unique pattern.</li>
<li>The gradient colors, circle sizes, and blending modes are declared in:root</li>
</ul>

### React Reusable Component: 
### Header
`Link` from `react-router-dom` is used to allow the transition between the pages, and we also reused the Button component for the `Let's Talk!` button. 
for the header appearance `.Header_Style` to align the menu, make it fixed on top of the page and also the ` background-color: rgba(255, 255, 255, 0.112);
backdrop-filter: blur(10px);` code is used to give the header the glassy look.
also the `nav a:hover` is used to create a shadow beneath the object the user hovers over.
    
### Footer
`.FooterContainer` to create a container at the end of the page. There is nothing else that deserves mentioning since it reuses the same list of the header.
![image](https://github.com/user-attachments/assets/38a13fdb-d30c-431e-b17d-dc0a89a71c9f)


### Interactive Button
this reusable button is used across all web applications. The `Button(props)` function uses two `props`. `props.link` to take the user from one page to another and `props.name` allows the developer to change the title of the button. We also use `Link` from `react-router-dom` to allow the transition between the pages and the `.Button: hover` is also used to change the color of the button when the user's mouse hovers over the button.

## Services page

xxxxxx


## About Us page

xxxxxx

## Contact Us page

xxxxxx

