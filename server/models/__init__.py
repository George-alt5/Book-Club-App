from flask_sqlalchemy import SQLAlchemy

from ..config import db

# Import all models so migrations can detect them
from .user import User
from .book import Book
from .review import Review
from .genre import Genre
from .book_genre import BookGenre