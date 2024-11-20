# **CodeGenie**  
CodeGenie is a comprehensive web platform designed to enhance coding productivity through advanced developer tools. This project aims to empower developers by providing features for algorithm analysis, syntax error detection, language conversion, and code optimization, all wrapped in a user-friendly interface.

![image](https://github.com/user-attachments/assets/45476186-6c3c-4843-b095-cbc90bc8beda)
![image](https://github.com/user-attachments/assets/a0c26588-83a2-4d01-9ee2-91b7ac72ca97)
![image](https://github.com/user-attachments/assets/61e246c9-9210-436a-824e-a86a4353a5fd)
![image](https://github.com/user-attachments/assets/ccf81dfd-c01a-4451-a630-a6cd821a6c5c)

---

## **Features**  
- **Time Complexity Analyzer**: Evaluate algorithm performance and identify bottlenecks.  
- **Real-Time Syntax Correction**: Instantly detect and fix syntax errors to ensure code quality.  
- **Code Language Conversion**: Seamlessly translate code between multiple programming languages.  
- **Code Optimization**: Get actionable suggestions to improve code readability and performance.  

Additionally, CodeGenie offers a **Chrome extension** for quick and accessible time complexity analysis.  

---

## **Tech Stack**  
- **Frontend**: React, Material UI, HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Authentication**: JWT (JSON Web Token)  
- **Additional Libraries/Tools**: Gemini API, Three.js  

---

## **Installation Instructions**

### **1. Clone the Repository**  
```bash
git clone https://github.com/alex4840/codegenie.git
cd codegenie
```

### **2. Install Dependencies**  
```bash
npm install
```

### **Environment Variables**  
To run this project, you need to create a `.env` file in the `src` directory and add the following environment variables:  

1. `PORT=3000` – The port on which the backend server runs.  
2. `DEV_MODE=development` – Specifies the development mode.  
3. `MONGO_URI=your_database_url` – Your MongoDB connection string.  
4. `JWT_ACCESS_SECRET=your_jwt_access_secret` – Secret key for signing access tokens.  
5. `JWT_ACCESS_EXPIREIN=access_token_expiry_time` – Access token expiration time (e.g., `15m`).  
6. `JWT_REFRESH_TOKEN=your_jwt_refresh_secret` – Secret key for signing refresh tokens.  
7. `JWT_REFRESH_EXPIREIN=refresh_token_expiry_time` – Refresh token expiration time (e.g., `7d`).  
8. `GEMINI_API_KEY=your_gemini_api_key` – API key for the Gemini API integration.  

---


### **3. Start the Application**   
```bash
npm start
```
open browser and type http://localhost:3000/


---

## **Usage**  
1. Open CodeGenie in your browser.  
2. Explore features like real-time syntax correction, time complexity analysis, and more.  
