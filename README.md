# 🏆 Powerplay Store

Powerplay Store is a modern e-commerce web application for premium sports gear.  
Built with **Next.js 15 (App Router)**, **MongoDB**, and **NextAuth**, it provides a smooth shopping experience with authentication, product management, and responsive design.

---

### 🔗 **Live Site URL :** [PowerPlay Live Demo](https://powerplay-store.vercel.app/)
---

## 🚀 Features
- Google Authentication with NextAuth
- Dynamic product listing from MongoDB
- Modern UI with TailwindCSS & Lucide Icons
- Fully responsive design
- Deployed on Vercel

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/marziulrafi/Powerplay-Store.git
cd Powerplay-Store
```

### 2️⃣ Install dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables
```bash
Create a .env.local file in the root directory:

DB_USER=yourMongoUser
DB_PASS=yourMongoPassword

GOOGLE_CLIENT_ID=yourGoogleClientId
GOOGLE_CLIENT_SECRET=yourGoogleClientSecret

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=anyrandomstring


⚠️ Replace values with your actual credentials.
```
### 4️⃣ Run the development server
```bash
npm run dev
```

---

## 📦 Deployment
- Deployed on Vercel
- MongoDB hosted on MongoDB Atlas
- OAuth via Google Cloud Console
