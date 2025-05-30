# React Gallery App

## Overview
This project is a simple image gallery built with React. It fetches images from the Picsum API and displays them in a gallery format. Users can navigate through the images using "Next" and "Previous" buttons.

## Project Structure
```
react-gallery-app
├── src
│   ├── api
│   │   └── photosApi.js        ← Function to fetch images from the API
│   ├── components
│   │   └── Gallery.jsx         ← Main gallery component
│   ├── App.js                  ← Main application component
│   └── index.js                ← Entry point of the application
├── package.json                 ← Project configuration and dependencies
└── README.md                    ← Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-gallery-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Functionality
- The application fetches images from the [Picsum API](https://picsum.photos/v2/list).
- Initially, 4 images are displayed.
- Users can navigate through the images using "Next" and "Previous" buttons.
- The page number is managed to ensure it does not go below 1.

## Technologies Used
- React
- JavaScript
- CSS

## Future Improvements
- Implement a loading spinner while fetching images.
- Use localStorage to remember the current page number across sessions.