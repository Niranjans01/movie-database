### Updated README Draft for GitHub Repository

#### Project Name: Movie Information System (MIS)

#### Introduction
The Movie Information System is designed to provide users with the ability to see list of movies, view detailed information about specific movies, and submit personal ratings.

#### Technology Stack
- **Next.js**: The primary React framework for building the application.
- **Cypress**: Used for robust component testing and end-to-end (E2E) testing.
- **TypeScript**: Ensures type safety and enhances code quality.
- **Reach Headless UI**: Integrated for creating accessible, reusable UI components.
- **React Multi Carousel**: Employed for displaying photos and videos in a carousel format. Decided to use a popular and comparatively secure libraru to save time.

#### Setup and Installation
1. **Clone the Repository**: 
   ```
   git clone [repository-url]
   ```
2. **Install Dependencies**:
   ```
   npm install
   ```
   or if you have yarn installed
   ```
   yarn install
   ```

#### Running the Application
- To start the development server:
  ```
  npm run dev
  ```
  or if you have yarn installed
  ```
  yarn dev
  ```
  The project runs on http://localhost:3000

#### Testing
- **Component Tests and End to end test can be run through cypress once setup**
  ```
  npm run cypress:open
  ```

#### API Endpoints
- **Assumption**: A mocking API is made using next.js node functions.
- **Functionality**: Users see list of movies, get movie by id and provide rating to movie.

#### TypeScript Interfaces
- Designed TypeScript interfaces for movie data, user rating, and API responses.
- Ensured interfaces are comprehensive and cater to all components' data needs.


#### Component Design and Documentation
- **Page Layout**: A React application page that retrieves and sends data to an external API.
- **Context API** : A Rating data is rendered using context api avoiding issues like prop drilling and unnecessary re-rendering
- **Key Components**: Components are designed to support reusability, code understandability 
- **Stubs**: Each component contains basic stubs, representing their structure and required props, I used **tailwindcc** to better style the components
