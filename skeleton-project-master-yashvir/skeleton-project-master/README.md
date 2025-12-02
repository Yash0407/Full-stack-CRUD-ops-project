### Full-Stack Fund Management CRUD Application
#### Angular + Node.js/Express

This is a full-stack CRUD application built using Angular for the frontend and Node.js/Express for the backend. The application manages fund data stored in a JSON file and includes three major components: Admin Data Table View, User Facing Data View, and Admin Edit View—all implemented with clean UI/UX, routing, and API integrations.

### 🚀 Features
#### 🔹 Admin Data Table View

- I developed an interactive admin dashboard-style table that provides a complete overview of all fund records.
- Fetches data from backend/data/funds_data.json.
- Displays data using a sortable and filterable PrimeNG table.
- Includes filters for every column.
- Supports sorting (ascending/descending).
- Clicking on Name navigates to the User Facing Data View.
- Includes an Edit (pencil) icon to open the Admin Edit View.
- Styled for high readability and usability.

#### 🔹 User Facing Data View

- A clean, user-friendly page displaying details of a single fund.
- Fetches a single fund record using a dedicated API.
- Displays all available information for that fund.
- Includes a search bar for finding a specific fund.
- Built with simple and intuitive UI.
- 
#### 🔹 Admin Edit View

- A dedicated admin-only screen for editing fund information.
- Fetches a single fund from the backend.
- Allows editing with auto-save functionality.
- Includes a Delete feature to remove the record from the JSON file.
- Designed with a smooth and straightforward editing experience.
- Implemented as a standalone page.

#### 🧭 App Navigation

- Home / Index Page – Welcome / landing page
- Data Table View – Admin dashboard listing all funds
- User Facing View – View and search for a single fund
- Admin Edit View – Edit or delete a selected fund

### 🛠️ Tech Stack
#### Frontend

- Angular
- TypeScript
- PrimeNG
- HTML, CSS

#### Backend

- Node.js
- Express.js
- Data Storage
- Local JSON file (funds_data.json)

#### ⚙️ Installation & Setup
##### Backend
- cd backend
- npm install
- npm run start

##### Frontend
- cd frontend
- npm install
- npm install primeng
- npm install primeng @primeuix/themes
- npm start

#### 📌 Remaining Enhancements (Optional)

- Improved error handling.
- More comments/documentation.
- Flexible search (case-insensitive, partial matching).
- Authentication (SSO/JWT)

#### 📝 Notes Section

Name: Yashvir Singh
Email: yashvir.ys.singh@gmail.com
