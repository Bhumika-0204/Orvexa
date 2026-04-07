# Orvexa Complete Setup Guide

Since Orvexa consists of two parts (Frontend and Backend), both need some specific configuration before they work perfectly together. The backend handles the database and user data, so it needs "secrets" which we store in a `.env` file.

Follow these instructions exactly to get everything up and running!

---

## Step 1: Setting up the Backend `.env` File

1. Navigate to your backend folder:
   Go to `c:\Users\Bhumika Kumari\OneDrive\Desktop\orvexa\backend`
2. Create a new file right inside the `backend` folder and name it exactly: `.env`
3. Copy and paste the following template into the new `.env` file:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_super_secret_access_string_here
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=another_super_secret_refresh_string_here
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### How to get each of these values:

**1. MongoDB URI (Database)**:
- Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database) and create a free account.
- Build a free cluster (M0 sandbox).
- Click **"Connect"** on your cluster, then select **"Drivers"**, and copy the connection string.
- It will look something like this: `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/orvexa`
- Replace `<username>` and `<password>` with the database user credentials you created in MongoDB, and paste the entire link into `MONGODB_URI`.

**2. Token Secrets (Authentication)**:
- These are just random strings used to encrypt user logins. You can literally just type random gibberish or use a generator.
- Example: `ACCESS_TOKEN_SECRET=bhumika12345orvexa_secret_key` and `REFRESH_TOKEN_SECRET=another_long_random_string_xyz789`

**3. Cloudinary (For Video/Image Uploads)**:
- Go to [Cloudinary.com](https://cloudinary.com/) and sign up for a free account.
- Once logged in, go to your Dashboard.
- You will see your **Cloud Name**, **API Key**, and **API Secret** displayed right at the top.
- Copy each one and paste them into their respective fields in the `.env` file.

---

## Step 2: Running the Backend

Now that your backend knows how to connect to the database and upload files, it's time to run it!

1. Open your terminal (PowerShell or Command Prompt).
2. Change directory into the backend folder:
   ```bash
   cd "C:\Users\Bhumika Kumari\OneDrive\Desktop\orvexa\backend"
   ```
3. Start the server using:
   ```bash
   npm run dev
   ```
4. You should see a message in the terminal saying something like "App is listening on port 8000" and "MongoDB connected successfully".
*Keep this terminal window open!*

---

## Step 3: Running the Frontend

With your backend running and ready to take requests, we need to spin up the website interface.

1. Open **a second, entirely new terminal window**.
2. Change directory into the frontend folder:
   ```bash
   cd "C:\Users\Bhumika Kumari\OneDrive\Desktop\orvexa\frontend"
   ```
3. If there is a `.env` file needed for the frontend, usually you would define your backend URL. In Vite/React, it might need to look like this (create a `.env` file in `frontend` folder if needed):
   ```env
   VITE_BACKEND_URL=http://localhost:8000
   ```
   *(Often times this is already handled in the codebase, so you can skip this if you don't know if it's strictly necessary yet).*
4. Start the frontend server using:
   ```bash
   npm run dev
   ```
5. Vite will give you a local URL, typically `http://localhost:5173`.
6. Ctrl+Click the link or paste it into your browser. You will now see your Orvexa application working!

---

### In Summary, every time you want to work on or run the project:
- **Terminal 1:** `cd orvexa/backend` > `npm run dev`
- **Terminal 2:** `cd orvexa/frontend` > `npm run dev`

That's it! If you get any errors when running the backend, double-check your MongoDB URL and password in the `.env` file.
