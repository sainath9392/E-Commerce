# 🛍️ Fashnior - E-commerce Web Application

**Fashnior** is a modern, fully-featured fashion e-commerce web application built using the **MERN** stack. It provides a seamless online shopping experience with features like user authentication, product browsing, dynamic cart updates, online payments, and admin product management.

🔗 **Live App**: [https://fashnior.vercel.app](https://fashnior.vercel.app)  
🔐 **Admin Panel**: [https://fashnior-admin-app.vercel.app](https://fashnior-admin-app.vercel.app)

---

## 📸 Screenshots

> *(Add screenshots or a demo video here if available)*

---

## ✨ Features

### 👤 User Side
- Browse and filter fashion products by category
- User registration and login with JWT-based authentication
- Dynamic cart and quantity updates
- Place orders with **Cash on Delivery** or **Razorpay** payments
- View and manage order history

### 🛠️ Admin Side
- Secure admin login
- Dashboard to manage products, categories, users, and orders
- Add, update, and delete products
- Update order statuses

---

## 🧰 Tech Stack

| Area        | Tech Used                             |
|-------------|----------------------------------------|
| Frontend    | React.js, Redux Toolkit, Tailwind CSS |
| Backend     | Node.js, Express.js                   |
| Database    | MongoDB with Mongoose ODM             |
| Auth        | JWT (JSON Web Tokens)                 |
| Payments    | Razorpay                              |
| Deployment  | Vercel (Frontend), Render (Backend)   |

---

## 🗂️ Folder Structure

fashnior-ecommerce/
│
├── client/                         # User-facing frontend (React)
│   ├── public/                     # Static files
│   └── src/
│       ├── assets/                 # Images, icons, etc.
│       ├── components/             # Reusable UI components
│       ├── pages/                  # Route-level pages (Home, Product, Cart, etc.)
│       ├── redux/                  # Redux slices and store
│       ├── services/               # Axios API calls
│       ├── utils/                  # Utility functions
│       ├── App.js                  # Root component
│       └── main.jsx                # React entry point
│
├── admin/                          # Admin panel frontend (React)
│   ├── public/                     # Static files for admin
│   └── src/
│       ├── components/             # Admin-specific components (sidebar, dashboard cards, etc.)
│       ├── pages/                  # Admin pages (Add Product, Orders, Users, etc.)
│       ├── redux/                  # Redux logic for admin
│       ├── services/               # API calls for admin functionality
│       ├── utils/                  # Utilities (e.g., token management)
│       ├── App.js                  # Root component for admin
│       └── main.jsx                # React entry point
│
├── server/                         # Backend (Node.js + Express)
│   ├── config/                     # Config files (DB, Razorpay)
│   ├── controllers/                # Logic for handling requests
│   ├── middleware/                 # Auth and error handling
│   ├── models/                     # Mongoose schemas (Product, User, Order)
│   ├── routes/                     # Express route handlers
│   ├── utils/                      # Token generation, validators, etc.
│   ├── .env                        # Environment variables (not committed)
│   └── index.js                    # Entry point for backend server
│
├── .gitignore                      # Git ignore rules
├── README.md                       # Project documentation
└── package.json                    # Project metadata and dependencies



## 🚀 Getting Started Locally

### 1. Clone the repository


git clone https://github.com/yourusername/fashnior-ecommerce.git
cd fashnior-ecommerce


## 2. Setup Backend

cd server
npm install

Create a .env file and add the following:
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASS=your_admin_password
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret

npm run dev

## 3. Setup Frontend
cd ../client
npm install
npm start

## ⚙️ Environment Variables
Make sure to configure the following variables in your .env file:

MONGO_URI=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASS=
RAZORPAY_KEY=
RAZORPAY_SECRET=

## Future Improvements
Product reviews and ratings

Wishlist feature

Email notifications

SEO and performance optimizations

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 📄 License
This project is open-source and available under the MIT License.

## 📬 Contact
Built by Duvvuri Sainath
📧 Email: sainathduvvuri03@gmail.com
🔗 LinkedIn: [https://www.linkedin.com/in/sainath-duvvuri-46ab61292/](https://www.linkedin.com/in/sainath-duvvuri-46ab61292/)
