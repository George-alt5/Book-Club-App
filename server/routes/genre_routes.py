from flask import Blueprint, request, jsonify
from ..config import db
from ..models.genre import Genre

genre_bp = Blueprint("genres", __name__)

@genre_bp.route("/", methods=["GET"])
def list_genres():
    genres = Genre.query.all()
    return jsonify([genre.to_dict() for genre in genres])

@genre_bp.route("/", methods=["POST"])
def create_genre():
    data = request.get_json()
    genre = Genre(name=data.get("name"))
    db.session.add(genre)
    db.session.commit()
    return jsonify(genre.to_dict()), 201

@genre_bp.route("/<int:id>", methods=["GET"])
def get_genre(id):
    genre = Genre.query.get_or_404(id)
    return jsonify(genre.to_dict())

@genre_bp.route("/<int:id>", methods=["PUT"])
def update_genre(id):
    genre = Genre.query.get_or_404(id)
    data = request.get_json()
    genre.name = data.get("name", genre.name)
    db.session.commit()
    return jsonify(genre.to_dict())

@genre_bp.route("/<int:id>", methods=["DELETE"])
def delete_genre(id):
    genre = Genre.query.get_or_404(id)
    db.session.delete(genre)
    db.session.commit()
    return jsonify({"message": "Genre deleted"})