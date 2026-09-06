# Huzaifa Holding — Flask Website

Responsive Flask website with a simplified information architecture and bilingual English / Fusha Arabic interface.

## Routes

- `/` — image-led homepage, short group introduction and brand portfolio
- `/about` — group story, mission and vision
- `/businesses` — all ten business divisions on one portfolio page
- `/contact` — headquarters and contact details

Brands intentionally remain on the homepage and do not have a separate route. Business divisions intentionally share one route and do not have individual detail routes.

## Language

Use the English / العربية control in the navigation. The selected language is stored in the browser and persists between routes. Arabic uses Fusha copy and switches the complete interface to RTL.

## Local setup

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
python run.py
```

Then open `http://127.0.0.1:8000`.

## cPanel / Passenger

The project includes `passenger_wsgi.py`, `app_wsgi.py`, and `.cpanel.yml` for deployment in the same pattern as the Green Falcon Flask project.
