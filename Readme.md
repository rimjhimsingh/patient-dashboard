# Patient Health Dashboard
## Use the App
Click here to view the app: https://note-keeper-application123.vercel.app/

## Overview
This project is a **Patient Health Dashboard** that visualizes blood pressure trends, diagnosis history, lab results, and other patient-related data. The data is fetched from an external API, processed dynamically, and presented in an interactive UI using **React.js**.

## Functionalities

### 1. **Fetching and Handling Patient Data**
- The application fetches patient records from a **secured API** using `fetch` and **basic authentication**.
- Data is stored in **state variables** using `useState`.
- It processes **diagnosis history** to extract available years for user selection.

### 2. **Dynamic Blood Pressure Chart**
- Displays **blood pressure trends** over time.
- Users can filter by **last 6 months** or a specific **year**.
- Data is processed using JavaScript’s `map`, `filter`, and `sort` functions.

### 3. **Patient List Sidebar**
- Displays a list of all available patients fetched from the API.
- Allows dynamic rendering of multiple patients.

### 4. **Diagnosis History Dropdown**
- Enables users to select a **year filter** for diagnosis history.
- Dropdown is dynamically populated based on fetched data.
- Integrated within the **Diagnosis History** section for improved UX.

### 5. **Patient Info and Lab Results**
- Displays selected patient’s **personal information**.
- Fetches and renders **lab results** dynamically.

## Concepts and Technologies Used

### **React.js**
- **Components**: Used to modularize UI into separate, reusable components.
- **State Management (`useState`)**: Manages patient data, blood pressure readings, and selected year filters.
- **Effects (`useEffect`)**: Handles data fetching and updates state when dependencies change.

### **API Integration**
- `fetch()` is used to retrieve data from an external API.
- Implemented **Basic Authentication** using `btoa()` for encoding credentials.
- Error handling with `try-catch` to handle failed API responses.

### **Data Manipulation & Filtering**
- Used JavaScript’s **`map`, `filter`, and `sort`** to format and organize data efficiently.
- Implemented logic for extracting **last 6 months of data** dynamically.

### **Tailwind CSS for Styling**
- Used **utility classes** for a modern, responsive design.
- `flexbox` and `grid` layout for structured alignment.

## Future Improvements
- Implement **patient selection functionality**.
- Optimize **API calls** to reduce unnecessary fetch requests.
- Improve **mobile responsiveness** for better user experience.

## Conclusion
I am thrilled to apply to **Coalition Technologies** and demonstrate my front-end development skills through this project. I hope it showcases my ability to build **dynamic, interactive, and data-driven applications** with React.js. Looking forward to the opportunity to contribute! ✨

---

**Author:** Rimjhim Singh

