# 🌍 WanderLust

### A Full-Stack Vacation Rental & Listing Platform

WanderLust is a full-stack web application that allows users to explore vacation properties, create their own listings, upload property images, and leave reviews and ratings.

The project is built using the **MVC architecture** with Node.js, Express.js, MongoDB, EJS, Passport.js, and Cloudinary.

---

## ✨ Features

### 🏡 Explore Listings

- Browse all available properties
- View property images and pricing
- View location and country information
- Open individual listing pages for complete details

### 🔐 Authentication

- User registration
- Secure login/logout
- Session-based authentication
- Protected routes for authenticated users
- Authorization for listing owners and review authors

### ➕ Create Listings

Authenticated users can create new properties by providing:

- Title
- Description
- Property image
- Price
- Location
- Country

### ✏️ Manage Listings

Listing owners can:

- Edit their listings
- Delete their listings
- Manage listing information

### ⭐ Reviews & Ratings

Users can:

- Leave reviews
- Rate properties from 1–5 stars
- View reviews associated with listings
- Edit/delete their own reviews

### ☁️ Image Uploads

Property images are uploaded through **Multer** and stored using **Cloudinary**.

### 🔔 Flash Messages

The application provides user feedback through flash messages for actions such as:

- Login
- Logout
- Listing creation
- Errors
- Other user actions

---

## 🏠 All Listings

Browse available vacation properties from the main listings page.
<img width="1218" height="759" alt="image" src="https://github.com/user-attachments/assets/f2bd0e17-07b0-453a-bea3-fa8a5a003ab8" />



---

## 🔐 Login

Users can securely log into their WanderLust account.
<img width="1232" height="762" alt="image" src="https://github.com/user-attachments/assets/4b76e984-6c6f-46f5-abbc-bf5257571eda" />



---

## ➕ Create a Listing

Authenticated users can create a new property listing.
<img width="1228" height="765" alt="image" src="https://github.com/user-attachments/assets/b30d3bc9-75cd-41ee-8c14-bb40d6556d1c" />


---

## 🏡 Listing Details

Each listing has a dedicated page containing the property image, description, price, location, country, and review section.
<img width="1217" height="777" alt="image" src="https://github.com/user-attachments/assets/73158f64-c150-489c-a446-22cdf7c87f14" />
<img width="1213" height="764" alt="image" src="https://github.com/user-attachments/assets/18389649-cfda-485a-889d-696134e9a58c" />

---

# 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- EJS
- Bootstrap
- JavaScript

### Backend

- Node.js
- Express.js
- MVC Architecture

### Database

- MongoDB
- Mongoose

### Authentication

- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session

### Image Management

- Cloudinary
- Multer
- Multer Storage Cloudinary

### Validation & Utilities

- Joi
- Method Override
- Connect Flash
- Cookie Parser
- Dotenv

The current project dependencies are defined in `package.json`. GGitHub


---

# 🏗️ Project Architecture

WanderLust follows a structured **MVC architecture**.
```text
                    ┌──────────────────┐
                    │      Client      │
                    │   Browser / UI   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │     Express      │
                    │      Routes      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Controllers    │
                    │ Business Logic   │
                    └────────┬─────────┘
                             │
                 ┌───────────┴───────────┐
                 ▼                       ▼
        ┌─────────────────┐     ┌─────────────────┐
        │     Models      │     │    Middleware   │
        │    Mongoose     │     │ Auth / Validate │
        └────────┬────────┘     └─────────────────┘
                 │
                 ▼
        ┌─────────────────┐
        │     MongoDB     │
        └─────────────────┘

              Images
                 │
                 ▼
        ┌─────────────────┐
        │    Cloudinary   │
        └─────────────────┘

```
# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/Hershe-cpu/WanderLust.git
cd WanderLust
```

## 2. Install dependencies

```powershell
npm install
```

## 3. Create Environment Variables

Create a .env file in the root directory:

```powershell
MONGO_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

## ▶️ Run the Application

Start MongoDB and run:

```powershell
node index.js
```

The application will be available at:

```powershell
http://localhost:8080
```

## 🤝 Contributing
Contributions are welcome!

Fork the repository
Create a new branch
```bash
git checkout -b feature/new-feature
```

Make your changes
Commit your changes
```bash
git add .
git commit -m "Add new feature"
```

Push your branch
```bash
git push origin feature/new-feature
```

Create a Pull Request

👨‍💻 Author
Hershe-cpu

📄 License
This project is licensed under the ISC License.

⭐ Support
If you like this project, consider giving the repository a ⭐ on GitHub.

