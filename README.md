# React Login Form Component

This project is a **responsive login form** built using **React** and styled with **Tailwind CSS**. It includes features such as form validation, toast notifications for successful submissions, and error messages for invalid inputs.

---

## 🚀 Features

- **Responsive Design**: The form adapts beautifully to all screen sizes.
- **Form Validation**:
  - Ensures a password is at least 8 characters long.
  - Requires at least one special character (`!@#$%`).
  - Ensures one uppercase character is included.
  - Validates password and confirm password match.
- **Dynamic Error Handling**: Displays error messages in real time for invalid inputs.
- **Toast Notifications**: Feedback for successful submission.
- **User State Management**: Captures and stores user information temporarily.

---

## 🛠️ Technologies Used

- **React**: For building the UI components.
- **Tailwind CSS**: For styling the application with responsive utilities.
- **React Toastify**: For beautiful toast notifications.

---

## 📂 Directory Structure

React_Login_Form_Component/ │ ├── public/ │ └── index.html # Entry HTML file │ ├── src/ │ ├── App.css # Custom styles │ ├── App.jsx # Main application component │ ├── index.css # Tailwind CSS imports │ ├── index.jsx # Application entry point │ └── components/ # (Optional) Additional components can go here │ ├── .gitignore # Files to ignore in version control ├── package.json # Project dependencies ├── README.md # Project documentation (this file) ├── tailwind.config.js # Tailwind CSS configuration ├── postcss.config.js # PostCSS configuration └── vite.config.js # Vite configuration for development server



---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 14+)
- **npm** or **yarn**

---

## 🔧 Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/selenophile1805/React_Login_Form_Component.git
    cd React_Login_Form_Component
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

   This will start the application on [http://localhost:5173](http://localhost:5173).

---

## 📄 Usage

1. Open the application in your browser ([http://localhost:5173](http://localhost:5173)).
2. Fill in the form with the following details:
   - **Full Name**
   - **Email**
   - **Password**
   - **Confirm Password**
   
3. On successful validation:
   - A **toast notification** will appear.
   - The form will reset.

---

## ✨ Future Enhancements

- Add **backend integration** for storing user data.
- Implement **authentication mechanisms** (e.g., JWT).
- Add additional pages like a **signup form** or **dashboard**.

---

## 📜 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as per the license terms.

---

## 🖼️ Screenshots

**Login Form (Desktop)**

![Login Form (Desktop)](https://via.placeholder.com/500x300?text=Desktop+Login+Form)

**Login Form (Mobile)**

![Login Form (Mobile)](https://via.placeholder.com/250x500?text=Mobile+Login+Form)

---

## 👩‍💻 Author

- **Chetan Dongare**  
  [GitHub Profile](https://github.com/selenophile1805)  
  [LinkedIn Profile](https://www.linkedin.com/in/chetan-dongare-01854022b/)
