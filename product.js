// Product data split into categories with English and Tamil names
const muttonMeat = [
  { name_en: "Mutton Leg", name_ta: "மட்டன் காலணி", price: 500, img: "images/mutton_leg.jpg" },
  { name_en: "Mutton Shoulder", name_ta: "மட்டன் தோள்பகுதி", price: 480, img: "images/mutton_shoulder.jpg" },
  { name_en: "Mutton Chops", name_ta: "மட்டன் சாப்ஸ்", price: 550, img: "images/mutton_chops.jpg" },
  { name_en: "Mutton Ribs", name_ta: "மட்டன் எலும்பு", price: 420, img: "images/mutton_ribs.jpg" },
  { name_en: "Mutton Boneless", name_ta: "எலும்பில்லா மட்டன்", price: 600, img: "images/mutton_boneless.jpg" },
  { name_en: "Mutton Curry Cut", name_ta: "மட்டன் குழம்பு துண்டுகள்", price: 450, img: "images/mutton_curry_cut.jpg" },
  { name_en: "Mutton Rack", name_ta: "மட்டன் ராக்", price: 700, img: "images/mutton_rack.jpg" },
  { name_en: "Mutton Mix Cut (Assorted)", name_ta: "மிக்சு (கலவை) துண்டுகள்", price: 400, img: "images/mutton_mix_cut.jpg" },
  { name_en: "Mutton Shoulder Chops", name_ta: "மட்டன் தோள் சாப்ஸ்", price: 460, img: "images/mutton_shoulder_chops.jpg" },
  { name_en: "Mutton Neck", name_ta: "மட்டன் கழுத்து", price: 400, img: "images/mutton_neck.jpg" }
];

const muttonParts = [
  { name_en: "Mutton Liver", name_ta: "மட்டன் கல்லீரல்", price: 300, img: "images/mutton_liver.jpg" },
  { name_en: "Mutton Mince (Keema)", name_ta: "மட்டன் நறுக்கியது (கீமா)", price: 380, img: "images/mutton_mince.jpg" },
  { name_en: "Mutton Brain", name_ta: "மட்டன் மூளை", price: 250, img: "images/mutton_brain.jpg" },
  { name_en: "Mutton Kidney", name_ta: "மட்டன் சிறுநீரகங்கள்", price: 270, img: "images/mutton_kidney.jpg" },
  { name_en: "Mutton Heart", name_ta: "மட்டன் இதயம்", price: 280, img: "images/mutton_heart.jpg" },
  { name_en: "Mutton Paya (Trotters)", name_ta: "மட்டன் கால்கள் (பாயா)", price: 350, img: "images/mutton_paya.jpg" },
  { name_en: "Mutton Head", name_ta: "மட்டன் தலை", price: 500, img: "images/mutton_head.jpg" },
  { name_en: "Mutton Fat", name_ta: "மட்டன் கொழுப்பு", price: 200, img: "images/mutton_fat.jpg" },
  { name_en: "Mutton Testicles", name_ta: "மட்டன் கொழும்புகள்", price: 320, img: "images/mutton_testicles.jpg" },
  { name_en: "Mutton Intestines", name_ta: "மட்டன் குடல்", price: 180, img: "images/mutton_intestines.jpg" }
];

// Function to render products
function renderProducts(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  category.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name_en}">
      <h4>${item.name_en} / ${item.name_ta}</h4>
      <p>₹${item.price} / kg</p>
      <input type="number" min="0.5" step="0.5" value="1" id="qty-${item.name_en.replace(/\s/g,'')}">
      <br>
      <button class="buy-btn" onclick="order('${item.name_en}', ${item.price})">Buy Now</button>
    `;
    container.appendChild(card);
  });
}

// WhatsApp order function
function order(name, price) {
  const qtyInput = document.getElementById(`qty-${name.replace(/\s/g,'')}`);
  const quantity = qtyInput ? parseFloat(qtyInput.value) : 1;

  if (quantity > 0) {
    const total = price * quantity;
    const whatsappNumber = "919943067917"; // Replace with your WhatsApp number
    const text = `Hello, Mr Ananth Kumar, I want to order ${quantity} kg of ${name}. Total Price: ₹${total}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappURL, "_blank");
  } else {
    alert("Please enter a valid quantity.");
  }
}

// Render categories on page
renderProducts(muttonMeat, "meat-list");
renderProducts(muttonParts, "parts-list");
