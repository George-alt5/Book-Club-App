from flask import Blueprint, request, jsonify
from ..config import db
from ..models.book_genre import BookGenre

book_genre_bp = Blueprint("book_genres", __name__)

@book_genre_bp.route("/", methods=["GET"])
def list_book_genres():
    book_genres = BookGenre.query.all()
    return jsonify([bg.to_dict() for bg in book_genres])

@book_genre_bp.route("/", methods=["POST"])
def create_book_genre():
    data = request.get_json()
    book_genre = BookGenre(
        book_id=data.get("book_id"),
        genre_id=data.get("genre_id"),
        primary_genre=data.get("primary_genre", False)
    )
    db.session.add(book_genre)
    db.session.commit()
    return jsonify(book_genre.to_dict()), 201

@book_genre_bp.route("/<int:id>", methods=["GET"])
def get_book_genre(id):
    book_genre = BookGenre.query.get_or_404(id)
    return jsonify(book_genre.to_dict())

@book_genre_bp.route("/<int:id>", methods=["PUT"])
def update_book_genre(id):
    book_genre = BookGenre.query.get_or_404(id)
    data = request.get_json()
    book_genre.primary_genre = data.get("primary_genre", book_genre.primary_genre)
    db.session.commit()
    return jsonify(book_genre.to_dict())

@book_genre_bp.route("/<int:id>", methods=["DELETE"])
def delete_book_genre(id):
    book_genre = BookGenre.query.get_or_404(id)
    db.session.delete(book_genre)
    db.session.commit()
    return jsonify({"message": "Book genre association deleted"})