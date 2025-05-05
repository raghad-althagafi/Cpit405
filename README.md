# Welcome to our IT Solutions Project!🚀✨


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
This page is responsible for displaying the services.
It includes a brief description, a dynamic list of services from the backend database, and a button linking to the contact page.

**CSS Structure:**
<ul>
<li>.Page, .title, .text: These classes are used to organize the content.</li>
<li>.services-section: Defines the upper part of the page, including the background and intro text.</li>
<li>.service-box, .service-title and .service-desc: These classes are used to structure and style the services data.</li>
<li>.End-Page: Contains the final part of the page.</li>
</ul>

## Backend
To handle the backend, we created `Services_list` component.
This component dynamically fetches and displays a list of services from the backend.
It uses the `useEffect` to fetch data.
The data is fetched from the endpoint:
http://localhost/Api/get_services.php
The backend returns a list of services in JSON format
it handles any errors that occur. 
Each service is rendered inside a styled box using CSS classes (`.service-box`, `.service-title`, `.service-desc`).
This component will be used in Services page

## The database
This application uses a MySQL database set up via AMPPS, with PHP scripts to connect and retrieve data.
<ul>
<li>Database name: it_solutions</li>
<li>Table name: services</li>
<li>Attributes:</li>
<ul>
<li>id (Primary Key, auto-increment)</li>
<li>name (VARCHAR)</li>
<li>description (TEXT)</li>
</ul>
</ul>

**db.php - Database Connection**
This file establishes a connection to the MySQL database.
```php
<?php
$servername = "localhost";  
$username = "root";         
$password = "mysql";             
$dbname = "it_solutions";   

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
```

**get_services.php - Fetch Services**
This file retrieves all services from the services table and returns them as JSON.
```php
<?php
header("Access-Control-Allow-Origin: *");
include 'db.php';

header('Content-Type: application/json');

$sql = "SELECT id, name, description FROM services";
$result = $conn->query($sql);

$services = [];

while($row = $result->fetch_assoc()) {
    $services[] = $row;
}

echo json_encode($services);

$conn->close();
?>
```
This setup allows the React frontend to fetch content from the backend using fetch() in the Services_list component.

Note: These two files are located in the www folder inside the AMPPS directory.





## About Us page

At IT Solutions, we’re dedicated to delivering innovative, reliable technology services that drive business growth and security. Our About Us page consists of three core pillars—Vision, Mission, and Values—presented in a clean, card‑style layout.

![About Us section screenshot](https://github.com/raghad-althagafi/Cpit405/public/AboutUs1.jpg)

### Our Vision
To lead the industry by providing top‑tier IT solutions that empower companies with secure and scalable infrastructure.

### Our Mission
To tailor technology services that meet the unique needs of each client, fostering innovation and continuous support.

### Our Values
- **Integrity**: We uphold the highest standards of honesty and ethics in everything we do.  
- **Innovation**: We embrace creativity and strive to stay ahead of technological trends.  
- **Transparency**: We communicate openly with our clients, ensuring clarity at every step.  
- **Customer Focus**: Our clients’ success is our success—every decision is made with them in mind.

**CSS Structure:**
<ul>
  <li><code>.about-section</code>: Main container for the About Us content, with padding and centered text.</li>
  <li><code>.cards-container</code>: Flex‑ or grid‑layout wrapper for the three info cards.</li>
  <li><code>.card</code>: Styles each Vision/Mission/Values card (background, border‑radius, shadow).</li>
  <li><code>.card h3</code>: Title styling for each card.</li>
  <li><code>.card p</code>: Body text styling for readability within each card.</li>
</ul>




## Contact Us page

The Contact Us page provides users with a way to get in touch with the IT Solutions team. It features a contact form and additional contact information.

**Components and Features:**
<ul>
<li>Contact Form: A user-friendly form that collects visitor information and messages</li>
<li>Form Fields: Name, email, subject, and message input fields</li>
<li>Submit Button: Uses the reusable Button component for consistency</li>
<li>Contact Information: Displays company contact details</li>
</ul>

**CSS Structure:**
<ul>
<li>.contact-container: Main container for the contact page layout</li>
<li>.contact-form: Styles the form container and input fields</li>
<li>.form-group: Groups form elements with proper spacing</li>
<li>.input-field: Styles for text inputs and textarea</li>
<li>.contact-info: Container for displaying company contact details</li>
</ul>

**Form Handling:**
The contact form uses React state management to handle form inputs and submission. The form data is sent to the backend for processing.

**Backend Integration:**
The contact form submissions are processed through a PHP endpoint that:
<ul>
<li>Validates the incoming data</li>
<li>Sends submissions</li>
<li>Returns success/error responses to the frontend</li>
</ul>
