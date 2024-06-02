from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import re

app = Flask(__name__)
CORS(app)

GEMINI_API_KEY = 'AIzaSyCclRMJ0cdftV0xAhHS7yPEyMWbc3TZtPs'
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-1.0-pro')

all_gift_ideas = []

def generate_prompt(age, gender, occasion, recipient_type, categories, price_range):
    categories_str = ', '.join(categories)
    return (
        f"You have a very good choice, so just provide me a list of 9 highly-rated and trending different gift ideas with a specific product that can be searched using the product name, for Indian people "
        f"for a {age}-year-old {recipient_type} who is {gender} and loves {categories_str} items. These gifts should be suitable for {occasion}, "
        f"available on Amazon India, and within the price range {price_range}. Ensure that each product is followed by its product_name, "
        f"and each product is followed by a convincing reason for its selection for Indian people in brief. Ensure that the products are listed without any "
        f"special characters such as *, -,\n"
        f"remove any numbering too, here is an example:\n"
        f"Product_name: Eco-friendly Water Bottle\n"
        f"Reason: Chosen for its environmental benefits and the growing consumer preference for sustainable products.\n"
        f"Generate 9 products with product_name and reason for selection as a gift idea. Each reason should be just below the product name."
    )

def generate_gift_ideas(prompt):
    response = model.generate_content(prompt)
    raw_text = response.text
    cleaned_text = clean_text(raw_text)
    return process_and_structure_gift_ideas(cleaned_text)

@app.route('/generate_gift_idea', methods=['POST'])
def generate_gift_idea():
    data = request.json
    prompt = generate_prompt(data.get('age'), data.get('gender'), data.get('occasion'), data.get('recipient_type'), data.get('categories'), data.get('price_range'))

    try:
        gift_ideas = generate_gift_ideas(prompt)
        unique_gift_ideas = filter_unique_gift_ideas(gift_ideas)
        all_gift_ideas.extend(unique_gift_ideas)
        return jsonify({"gift_ideas": unique_gift_ideas})
    except Exception as e:
        print(f"Error generating gift ideas: {e}")
        return jsonify({"error": "Error generating gift ideas"}), 500

@app.route('/search_gift_idea', methods=['POST'])
def search_gift_idea():
    data = request.json
    prompt = generate_prompt("", "", "", "", [data.get('prompt')], "")

    try:
        gift_ideas = generate_gift_ideas(prompt)
        unique_gift_ideas = filter_unique_gift_ideas(gift_ideas)
        all_gift_ideas.extend(unique_gift_ideas)
        return jsonify({"gift_ideas": unique_gift_ideas})
    except Exception as e:
        print(f"Error searching gift ideas: {e}")
        return jsonify({"error": "Error searching gift ideas"}), 500

@app.route('/generate_more_gift_ideas', methods=['POST'])
def generate_more_gift_ideas():
    data = request.json
    prompt = generate_prompt(data.get('age'), data.get('gender'), data.get('occasion'), data.get('recipient_type'), data.get('categories'), data.get('price_range'))

    try:
        gift_ideas = generate_gift_ideas(prompt)
        unique_gift_ideas = filter_unique_gift_ideas(gift_ideas)
        all_gift_ideas.extend(unique_gift_ideas)
        return jsonify({"gift_ideas": unique_gift_ideas})
    except Exception as e:
        print(f"Error generating more gift ideas: {e}")
        return jsonify({"error": "Error generating more gift ideas"}), 500

def filter_unique_gift_ideas(new_gift_ideas):
    unique_gift_ideas = [idea for idea in new_gift_ideas if idea not in all_gift_ideas]
    return unique_gift_ideas

def clean_text(text):
    return re.sub(r'[*-]', '', text)

def process_and_structure_gift_ideas(text):
    lines = text.split('\n')
    gift_ideas = []
    current_gift = {}

    for line in lines:
        if "Product_name:" in line:
            if current_gift:
                gift_ideas.append(current_gift)
                current_gift = {}
            current_gift["Product_name"] = line.replace("Product_name:", "").strip()
        elif "Reason:" in line:
            current_gift["Reason"] = line.replace("Reason:", "").strip()

    if current_gift:
        gift_ideas.append(current_gift)

    while len(gift_ideas) < 9:
        gift_ideas.append({"Product_name": "N/A", "Reason": "N/A"})

    return gift_ideas[:9]

if __name__ == '__main__':
    app.run(debug=True)
