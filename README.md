# Assessment

# FRONTEND

# Responsive E-Commerce Homepage

---

## *1.1 Responsive Web Design*  
### *Overview*
This section implements a *fully responsive* homepage that adapts to various screen sizes (from *320px to 1920px). The layout adjusts using **CSS Flexbox and Grid*.

### *Key Features*
- A *navigation bar* with links: Home, Shop, About Us, and Contact Us.
- On *small screens, the navbar transforms into a **hamburger menu*.
- A *hero section* with a *carousel* featuring 3 slides.
- A *product grid layout* displaying 4 products in *2 rows*.
- A *footer* with *contact info, social media links, and privacy policies*.

### *Implementation Details*
1. *CSS Flexbox/Grid* ensures the layout remains structured across all devices.
2. The *hamburger menu* is managed using *CSS media queries*.
3. The *image carousel* cycles through images with JavaScript.
4. The *grid layout* dynamically adjusts using grid-template-columns and flex-wrap.  

---

## *1.2 JavaScript Interactive Features*  
### *Overview*
This section introduces an *interactive lightbox* for product images using *pure JavaScript*.  

### *Key Features*
- Clicking a *product image* opens a *lightbox (modal window)*.
- *Navigation buttons* (Next, Previous) allow switching between images.
- Clicking the *"X" button* or pressing the Esc key *closes the modal*.
- *Smooth transitions* for modal opening and closing.

### *Implementation Details*
1. The modal (#lightbox-modal) is *created dynamically* using JavaScript.
2. *Event listeners* detect when a product image is clicked and update the modal’s src.
3. *Next/Previous buttons* allow users to cycle through images.
4. *Keyboard accessibility* is handled via keydown events (Esc to close).
5. *Smooth animations* are applied using opacity and transform for a fade-in effect.  

---

## *1.3 CSS Animation*  
### *Overview*
This section implements a *loading spinner animation* using *pure CSS*, with no JavaScript involved.  

### *Key Features*
- *Rotates continuously* in a loop.
- *Two different colored segments*, spinning in opposite directions.
- *Centered on the screen* for visibility.

### *Implementation Details*
1. The spinner is created using ::before and ::after pseudo-elements.
2. border-top and border-bottom create two distinct colored segments.
3. *Two animations*:
   - ::before rotates *clockwise* (rotate(360deg)).
   - ::after rotates *counterclockwise* (rotate(-360deg)).
4. The animation *runs infinitely* to simulate a loading effect.

---

## *Technologies Used*
- *HTML5* for page structure.
- *CSS3* for styling, animations, and responsiveness.
- *JavaScript* for interactive components.

---

# BACKEND

# 2.1 Product Catalog API 

A simple RESTful API built using **Node.js** and **Express.js** for managing a product catalog.

## Features
- Retrieve all products → `GET /products`
- Retrieve a product by ID → `GET /products/:id`
- Create a new product → `POST /products`
- Update an existing product → `PUT /products/:id`
- Delete a product → `DELETE /products/:id`

---

## 2.2 JWT Authentication API 

This is a simple **Node.js** and **Express.js**-based API implementing **JWT authentication**. It includes:

### Features:
- **User Authentication** → `POST /login` (Generates JWT)
- **Protected Routes** → Middleware to validate JWT
- **Secured Product Management**:
  - Create a product → `POST /products` (Protected)
  - Update a product → `PUT /products/:id` (Protected)
  - Delete a product → `DELETE /products/:id` (Protected)

---

## 2.3 SQLite API Integration 

This project integrates an **Express.js API** with an **SQLite database** for product management.

###  Features:
- **CRUD Operations** (Create, Read, Update, Delete)
- Uses **SQLite** as a lightweight, file-based database
- No ORM → Uses **raw SQL queries** for optimized performance

---





Due to time constraints, I was unable to attempt the bonus question, as completing both the frontend and backend sections required careful attention. The frontend portion, in particular, was a bit time-consuming, which limited the time available to address the bonus question.
