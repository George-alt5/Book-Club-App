# Book Club API

A Flask-based REST API for book enthusiasts to manage and review books. This backend provides full CRUD operations for books and reviews with SQLite database persistence.

## Features

- **User Authentication**: Sign up and log in to manage your book reviews
- **Book Management**: Add, view, edit, and delete books from the collection
- **Review System**: Leave ratings and reviews for books
- **Genre Association**: Associate books with genres
- **Responsive UI**: Clean, user-friendly interface built with React

## Technologies Used

### Backend
- **Flask**: Web framework
- **SQLAlchemy**: ORM for database management
- **Flask-CORS**: Cross-origin resource sharing

### Database
- **SQLite**: Database engine

## Models

- **User**: Stores user information and authentication details
- **Book**: Represents books with title, author, year, and price
- **Review**: User reviews and ratings for books
- **Genre**: Book genres
- **BookGenre**: Association table linking books to genres with additional attributes

## API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `GET /auth/me` - Get current user info

### Books
- `GET /books/` - List all books
- `POST /books/` - Create a new book
- `GET /books/<id>` - Get a specific book
- `PUT /books/<id>` - Update a book
- `DELETE /books/<id>` - Delete a book

### Reviews
- `GET /reviews/` - List all reviews
- `POST /reviews/` - Create a new review
- `GET /reviews/<id>` - Get a specific review
- `PUT /reviews/<id>` - Update a review
- `DELETE /reviews/<id>` - Delete a review

### Genres
- `GET /genres/` - List all genres
- `POST /genres/` - Create a new genre
- `GET /genres/<id>` - Get a specific genre
- `PUT /genres/<id>` - Update a genre
- `DELETE /genres/<id>` - Delete a genre

### Book-Genre Associations
- `GET /book-genres/` - List all book-genre associations
- `POST /book-genres/` - Create a new association
- `GET /book-genres/<id>` - Get a specific association
- `PUT /book-genres/<id>` - Update an association
- `DELETE /book-genres/<id>` - Delete an association

## Getting Started

### Prerequisites
- Python 3.8+
- pipenv

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-club-app
   ```

2. **Install dependencies**
   ```bash
   pipenv install
   ```

3. **Run the API server**
   ```bash
   pipenv shell
   cd server
   python app.py
   ```

4. **Access the API**
   - API Base URL: `http://localhost:5000`
   - API Documentation: See endpoints below

## Usage

1. Sign up for an account or log in
2. Browse and manage books
3. Leave reviews and ratings for books
4. Explore different genres

## Project Structure

```
book-club-app/
├── server/                 # Flask backend
│   ├── models/             # SQLAlchemy models
│   ├── routes/             # API routes
│   ├── migrations/         # Database migrations
│   ├── app.py              # Flask app
│   ├── config.py           # Configuration
│   └── Pipfile
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
