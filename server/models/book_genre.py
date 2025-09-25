from ..config import db

class BookGenre(db.Model):
    __tablename__ = "book_genres"

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey("books.id"), nullable=False)
    genre_id = db.Column(db.Integer, db.ForeignKey("genres.id"), nullable=False)
    primary_genre = db.Column(db.Boolean, default=False, nullable=False)  # user-submittable attribute

    def to_dict(self):
        return {
            "id": self.id,
            "book_id": self.book_id,
            "genre_id": self.genre_id,
            "primary_genre": self.primary_genre,
            "genre": self.genre.to_dict()
        }