# FetchAPI

A lightweight, functional React component that fetches user data from a REST API and displays it in a clean, responsive, and styled data table.
## Overview
This component, UserTable, demonstrates the core principles of data fetching in React using the Hooks API. It retrieves a list of users from the JSONPlaceholder API and renders their details—including contact info and company data—into a structured HTML table.

## Key Features
• Asynchronous Data Fetching: Uses useEffect and the native fetch API to handle side effects.
• State Management: Manages users, loading, and error states using the useState hook.
• Conditional Rendering: Displays a loading indicator during transit and an error message if the request fails.
• Responsive Styling: Includes inline CSS for basic table formatting, hover-ready borders, and horizontal scrolling for smaller screens.

## Technical Implementation
Hooks Used
• useState: Tracks the data array and the UI status (loading/error).
• useEffect: Triggers the API call once when the component mounts.
Data Source
The component consumes data from:
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)


## How to Use
• Requirement: Ensure you have a React environment set up (e.g., Vite or Create React App).

• Import: Copy the UserTable.js file into your src/components folder.

• Usage:
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

## Styling
The component uses inline JavaScript objects for styling (cellStyle), ensuring it is self-contained and does not require external CSS files to look professional out of the box. It features a dark-themed header and a clean, minimalist row design.