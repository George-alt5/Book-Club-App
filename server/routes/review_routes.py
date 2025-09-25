from flask import Blueprint, request, jsonify
from ..config import db
from ..models.review import Review

review_bp = Blueprint("reviews", __name__)

@review_bp.route("/", methods=["GET"])
def list_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])

@review_bp.route("/", methods=["POST"])
def create_review():
    data = request.get_json()
    review = Review(
        content=data.get("content"),
        rating=data.get("rating"),
        user_id=data.get("user_id"),
        book_id=data.get("book_id")
    )
    db.session.add(review)
    db.session.commit()
    return jsonify(review.to_dict()), 201

@review_bp.route("/<int:id>", methods=["GET"])
def get_review(id):
    review = Review.query.get_or_404(id)
    return jsonify(review.to_dict())

@review_bp.route("/<int:id>", methods=["PUT"])
def update_review(id):
    review = Review.query.get_or_404(id)
    data = request.get_json()
    review.content = data.get("content", review.content)
    review.rating = data.get("rating", review.rating)
    db.session.commit()
    return jsonify(review.to_dict())

@review_bp.route("/<int:id>", methods=["DELETE"])
def delete_review(id):
    review = Review.query.get_or_404(id)
    db.session.delete(review)
    db.session.commit()
    return jsonify({"message": "Review deleted"})