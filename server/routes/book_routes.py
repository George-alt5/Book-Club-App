from flask import Blueprint, request, jsonify
from ..config import db
from ..models.book import Book

book_bp = Blueprint("books", __name__)

@book_bp.route("/", methods=["GET"])
def list_books():
    books = Book.query.all()
    return jsonify([book.to_dict() for book in books])

@book_bp.route("/", methods=["POST"])
def create_book():
    data = request.get_json()
    book = Book(
        title=data.get("title"),
        author=data.get("author"),
        year=data.get("year"),
        price=data.get("price")
    )
    db.session.add(book)
    db.session.commit()
    return jsonify(book.to_dict()), 201

@book_bp.route("/<int:id>", methods=["GET"])
def get_book(id):
    book = Book.query.get_or_404(id)
    return jsonify(book.to_dict())

@book_bp.route("/<int:id>", methods=["PUT"])
def update_book(id):
    book = Book.query.get_or_404(id)
    data = request.get_json()
    book.title = data.get("title", book.title)
    book.author = data.get("author", book.author)
    book.year = data.get("year", book.year)
    book.price = data.get("price", book.price)
    db.session.commit()
    return jsonify(book.to_dict())

@book_bp.route("/<int:id>", methods=["DELETE"])
def delete_book(id):
    book = Book.query.get_or_404(id)
    db.session.delete(book)
    db.session.commit()
    return jsonify({"message": "Book deleted"})