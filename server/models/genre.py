from ..config import db

class Genre(db.Model):
    __tablename__ = "genres"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

    book_genres = db.relationship("BookGenre", backref="genre", lazy=True)

    def to_dict(self):
        return {"id": self.id, "name": self.name}