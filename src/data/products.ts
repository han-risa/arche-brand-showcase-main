export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  weight?: string;
  description: string;
  image?: string;
  ingredients?: string[];
  benefits?: string[];
  specs?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "shera-whitening-body-lotion",
    name: "Whitening Body Lotion",
    brand: "Shera Beauty",
    category: "Beauty & Care",
    weight: "120 ml",
    description: "Day Lotion Shera Beauty dengan kandungan Alpha Arbutin, Niacinamide, dan Collagen. BPOM certified.",
    image: "/images/shera-whitening-body-lotion.JPG",
    ingredients: ["Alpha Arbutin", "Niacinamide", "Collagen"],
    benefits: [
      "Membantu mencerahkan kulit",
      "Membantu melembabkan kulit",
      "Membantu meratakan warna kulit",
      "Membantu mengurangi tanda penuaan kulit",
      "Membantu melindungi kulit dari sinar matahari",
    ],
  },
  {
    id: "shera-whitening-body-booster",
    name: "Whitening Body Booster",
    brand: "Shera Beauty",
    category: "Beauty & Care",
    weight: "20 gr",
    description: "Body booster dengan WhiteTen SL 10x Brightening Power, 8x Hyaluronic Acid, dan 5% Niacinamide untuk kulit cerah maksimal.",
    image: "/images/shera-whitening-body-booster.JPG",
    ingredients: [
      "WhiteTen SL — 10x Brightening Power",
      "8x Hyaluronic Acid",
      "8x Vitamin",
      "5% Niacinamide",
      "4% Almond Oil",
      "Chromabright",
      "Licorice Extract",
    ],
    benefits: [
      "Membantu meratakan rona kulit yang tidak rata",
      "Membantu memudarkan bekas luka membandel",
      "Membantu mencerahkan kulit lebih cepat",
      "Mengunci kelembaban pada kulit",
      "Meregenerasi sel kulit mati",
      "Membantu mengencangkan kulit",
      "Membuat kulit tampak sehat",
    ],
  },
  {
    id: "shera-premium-whitening-body-lotion",
    name: "Premium Whitening Body Lotion",
    brand: "Shera Beauty",
    category: "Beauty & Care",
    weight: "250 gr",
    description: "Premium body lotion dengan WhiteTen SL, Hyaluronic Acid, Niacinamide, Almond Oil, Peony Extract, dan UV Filter.",
    image: "/images/shera-premium-whitening-body-lotion.jpeg",
    ingredients: [
      "WhiteTen SL — 10x Brightening Power",
      "8x Hyaluronic Acid",
      "5% Niacinamide",
      "3% Almond Oil",
      "Peony Extract",
      "UV Filter",
    ],
    benefits: [
      "Membantu meratakan rona kulit yang tidak rata",
      "Membantu memudarkan bekas luka membandel",
      "Membantu mencerahkan kulit lebih cepat",
      "Mengunci kelembaban pada kulit",
      "Meregenerasi sel kulit mati",
      "Membantu mengencangkan kulit",
      "Membuat kulit tampak sehat",
    ],
  },
  {
    id: "shisha-charcoal-briquettes",
    name: "Shisha Charcoal Briquettes",
    brand: "Charcoal Products",
    category: "Material",
    image: "/images/shisha-charcoal-3.png",
    description: "Premium 100% coconut charcoal briquettes for shisha. 99% crack free, odorless, smokeless, chemical free.",
    specs: {
      Moisture: "3.23 - 3.34%",
      "Ash Content": "1.6 - 2.15%",
      "Fixed Carbon": "80.2 - 82.1%",
      "Volatile Matter": "12.43 - 14.8%",
      Calories: "8000 Kcal",
      "Burning Time": "120+ Minutes",
      "Raw Material": "100% Coconut Charcoal",
      "Ash Color": "White",
    },
  },
  {
    id: "bbq-charcoal-briquettes",
    name: "BBQ Charcoal Briquettes",
    brand: "Charcoal Products",
    category: "Material",
    image: "/images/bbq-charcoal-1.png",
    description: "Premium 100% coconut charcoal briquettes for BBQ. Long burning time with high calorie output.",
    specs: {
      Moisture: "4.3 - 5.5%",
      "Ash Content": "3.4 - 9.4%",
      "Fixed Carbon": "52.8 - 78.8%",
      "Volatile Matter": "13.4 - 16.2%",
      Calories: "6500 Kcal",
      "Burning Time": "120+ Minutes",
      "Raw Material": "100% Coconut Charcoal",
      "Ash Color": "White",
    },
  },
  {
    id: "solsol-terra",
    name: "TERRA — Masculien",
    brand: "Sol Sol & Ash",
    category: "Beauty & Care",
    description: "Aroma hutan yang misterius dan alami dengan aroma kayu dan asap yang kuat.",
    image: "/images/terra.png",
    ingredients: ["Incense Smoke", "Natural Oud", "Vanilla"],
  },
  {
    id: "solsol-soie",
    name: "SOIE — Feminine",
    brand: "Sol Sol & Ash",
    category: "Beauty & Care",
    description: "Pesona lembut dan misterius dari kain yang beraroma harum.",
    image: "/images/soie.png",
    ingredients: ["Berries", "Vanilla", "Musk"],
  },
  {
    id: "solsol-calore",
    name: "CALORE — Unisex",
    brand: "Sol Sol & Ash",
    category: "Beauty & Care",
    description: "Kehangatan senja melalui keindahan matahari terbenam.",
    image: "/images/calore.png",
    ingredients: ["Mandarin Orange", "Jasmine", "Vanilla"],
  },
  {
    id: "solsol-sora",
    name: "SORA — Unisex",
    brand: "Sol Sol & Ash",
    category: "Beauty & Care",
    description: "Dingin yang menyegarkan di puncak gunung.",
    image: "/images/sora.png",
    ingredients: ["Lemon Zest", "Lavender", "Musk"],
  },
  {
    id: "solsol-shootaspire",
    name: "SHOOTASPIRE — Unisex",
    brand: "Sol Sol & Ash",
    category: "Beauty & Care",
    description: "Aroma segar dan akuatik yang membangkitkan sensasi berada di tengah laut.",
    image: "/images/shootaspire.png",
    ingredients: ["Geranium", "Sage", "Cedarwood"],
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
export const brands = [...new Set(products.map((p) => p.brand))];
