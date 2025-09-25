from ..config import db

class Book(db.Model):
    __tablename__ = "books"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    author = db.Column(db.String(120), nullable=False)
    year = db.Column(db.Integer, nullable=True)
    price = db.Column(db.Float, nullable=True)

    reviews = db.relationship("Review", backref="book", lazy=True)
    book_genres = db.relationship("BookGenre", backref="book", lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "year": self.year,
            "price": self.price,
            "genres": [bg.genre.to_dict() for bg in self.book_genres]
        }