from flask import Blueprint, redirect, render_template, url_for

from app.data import BRANDS, DIVISIONS

pages_bp = Blueprint("pages", __name__)


@pages_bp.app_context_processor
def inject_site_data():
    return {
        "site_divisions": DIVISIONS,
        "site_brands": BRANDS,
    }


@pages_bp.get("/")
def home():
    return render_template("home.html", brands=BRANDS)


@pages_bp.get("/about")
def about():
    return render_template("about.html")


@pages_bp.get("/businesses")
def businesses():
    return render_template("businesses.html", divisions=DIVISIONS)


@pages_bp.get("/contact")
def contact():
    return render_template("contact.html")


# Compatibility redirects for old links; these are not standalone content pages.
@pages_bp.get("/brands")
def legacy_brands():
    return redirect(url_for("pages.home", _anchor="brands"), code=301)


@pages_bp.get("/businesses/<slug>")
def legacy_business_detail(slug):
    return redirect(url_for("pages.businesses"), code=301)
