from flask import Flask, jsonify
from .config import Config, db, migrate, bcrypt, cors
from .routes.auth_routes import auth_bp
from .routes.book_routes import book_bp
from .routes.review_routes import review_bp
from .routes.genre_routes import genre_bp
from .routes.book_genre_routes import book_genre_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    cors.init_app(app, supports_credentials=True)

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(book_bp, url_prefix="/books")
    app.register_blueprint(review_bp, url_prefix="/reviews")
    app.register_blueprint(genre_bp, url_prefix="/genres")
    app.register_blueprint(book_genre_bp, url_prefix="/book-genres")

    # Default homepage route
    @app.route("/")
    def index():
        return jsonify({"message": "Welcome to the Book Club API"}), 200

    # Create database tables
    with app.app_context():
        db.create_all()

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True, port=5001)
