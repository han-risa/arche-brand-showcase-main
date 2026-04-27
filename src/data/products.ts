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
  variants?: string[];
  specs?: Record<string, string>;
  price?: string;
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
    specs: {
      "Production": "1000 units/month",
    },
    price: "Rp.75.000,-",
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
    specs: {
      "Production": "1000 units/month",
    },
    price: "Rp.75.000,-",
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
    specs: {
      "Production": "1000 units/month",
    },
    price: "Rp.135.000,-",
  },
  {
    id: "shisha-charcoal-briquettes",
    name: "Shisha Charcoal Briquettes",
    brand: "Charcoal Products",
    category: "Material",
    image: "/images/shisha-charcoal.png",
    description: "Premium 100% coconut charcoal briquettes for shisha. 99% crack free, odorless, smokeless, chemical free. Available in multiple sizes and shapes including cube, flat, hexagonal, and finger formats.",
    specs: {
      Moisture: "Max 5%",
      "Ash Content": "1.8 - 2.5%",
      "Fixed Carbon": "80.2 - 82.1%",
      "Volatile Matter": "14%",
      Calories: "7000 - 7500 kcal/kg",
      "Ignition Time": "<4 minutes",
      "Burning Time": "90 - 120 minutes",
      "Raw Material": "100% Coconut Charcoal",
      "Ash Color": "Light Grey / Natural",
      "Crack Free": "99%",
      "Features": "Odorless, Smokeless, Chemical free",
      "Production": "17-18 × 40ft containers per month",
      "MOQ": "1 ton / 20ft container",
    },
    variants: [
      "Cube sizes: 20×20×20mm, 22×22×22mm, 25×25×25mm, 26×26×26mm, 27×27×27mm, 28×28×28mm, 29×29×29mm, 30×30×30mm",
      "Flat sizes: 25×25×15mm",
      "Hexagonal sizes: 22×35mm, 23×40mm, 25×50mm",
      "Finger sizes: 22×35mm, 23×40mm, 25×50mm",
    ],
    price: "Premium $1.680/ton EXW (2.2-2.5% ash) | Super Premium $1.825/ton EXW (1.8-2.2% ash)",
  },
  {
    id: "bbq-charcoal-briquettes",
    name: "BBQ Charcoal Briquettes",
    brand: "Charcoal Products",
    category: "Material",
    image: "/images/bbq-charcoal.png",
    description: "Premium 100% coconut charcoal briquettes for BBQ. Smokeless, odorless, no spark, food grade. Extended burning time up to 9 hours.",
    specs: {
      Moisture: "Max 5%",
      "Ash Content": "7% - 20%",
      "Fixed Carbon": "65% - 70%",
      "Volatile Matter": "14%",
      Calories: "6400 - 7200 Kcal",
      "Burning Time": "5 - 9 hours",
      "Raw Material": "100% Coconut Charcoal",
      "Ash Color": "White",
      "Features": "Smokeless, Odorless, No Spark, No Chemical, Food Grade",
      "Production": "17-18 × 40ft containers per month",
      "MOQ": "1 ton / 20ft container",
      "Packaging": "Inner Plastic, Master Box, Silica gel included",
    },
    variants: [
      "Hexagonal: 50×200mm, 50×150mm, 50×100mm, 50×50mm, 40×200mm, 40×150mm, 40×100mm, 40×50mm",
      "Rectangle: 40×200mm, 50×200mm",
      "Rectangular Prism: 40×40×80mm",
    ],
    price: "Premium $650/ton EXW (7-8 hours burn time) | Super Premium $750/ton EXW (up to 9 hours burn time)",
  },
  {
    id: "solsol-terra",
    name: "TERRA — Masculien",
    brand: "Sol & Ash",
    category: "Beauty & Care",
    weight: "30 ml",
    description: "Terinspirasi dari hutan yang misterius dan aroma bumi. Dengan perpaduan aroma woody dan smoky yang intens, Terra membangkitkan gambaran jejak langkah di antara pepohonan kuno, aroma tanah basah. Cocok digunakan saat malam hari atau acara yang lebih serius.",
    image: "/images/solterra.png",
    ingredients: ["Saffron", "Lavender", "Nutmeg", "Incense Smoke", "Natural Oud", "Tobacco Leaf", "Cinnamon", "Geranium", "Amber", "Vanilla Absoulte", "Sandalwood", "Patchouli", "Musk"],
    specs: {
      "Type": "Eau de Parfum",
      "Character": "Woody, Earthy, Smoky",
      "Longevity": "6-8+ Jam",
      "Target": "Unisex / Masculine",
      "Production": "800-1000 units/month"
    },
    price: "Rp.120.000,-",
  },
  {
    id: "solsol-soie",
    name: "SOIE — Feminine",
    brand: "Sol & Ash",
    category: "Beauty & Care",
    weight: "30 ml",
    description: "Terinspirasi dari kelembutan dan pesona misterius sehelai kain. Dengan aroma manis yang memikat, Soie membisikkan cerita tentang tatapan mata wanita yang penuh rahasia dan sentuhan lembut yang menghanyutkan. Cocok digunakan saat suasana malam hari atau acara formal.",
    image: "/images/solsoie.png",
    ingredients: ["Berries", "Orange Blossom", "Jasmine", "Vanilla", "Almond Cream", "Musk", "Tonka Bean", "Sandalwood"],
    specs: {
      "Type": "Eau de Parfum",
      "Character": "Elegan dan Sensual",
      "Longevity": "6-8+ Jam",
      "Target": "Unisex / Feminine",
      "Production": "800-1000 units/month"
    },
    price: "Rp.120.000,-",
  },
  {
    id: "solsol-calore",
    name: "CALORE — Unisex",
    brand: "Sol & Ash",
    category: "Beauty & Care",
    weight: "30 ml",
    description: "Terinspirasi dari hangatnya senja. Varian Calore menceritakan keindahan matahari terbenam yang terpancar dari gambar jeruk yang cerah dan hangat. Cocok digunakan saat sore hingga malam hari, memberikan nuansa hangat, bersemangat, dan menenangkan.",
    image: "/images/solcalore.png",
    ingredients: ["Pear", "Bergamot", "Lavender", "Mandarin Orange", "Jasmine", "Orange Blossom", "Rose", "White Flowers", "Vanilla", "Tonka Bean", "Cedarwood", "Musk"],
    specs: {
      "Type": "Eau de Parfum",
      "Character": "Hangat dan misterius",
      "Longevity": "6-8+ Jam",
      "Target": "Unisex",
      "Production": "800-1000 units/month"
    },
    price: "Rp.120.000,-",
  },
  {
    id: "solsol-sora",
    name: "SORA — Unisex",
    brand: "Sol & Ash",
    category: "Beauty & Care",
    weight: "30 ml",
    description: "Terinspirasi dari kesegaran puncak gunung es yang dingin dan udara yang bersih. Aroma lemon yang cerah dan dingin dibalik pegunungan, memberikan sensasi kebersihan. Cocok digunakan saat suasana pagi hingga siang hari.",
    image: "/images/solsora.png",
    ingredients: ["Bergamot", "Grapefruit", "Mint", "Lemon Zest", "Ginger", "Geranium", "Lavender", "Sage", "Cedarwood", "Sandalwood", "White Musk", "Amberwood", "Patchouli"],
    specs: {
      "Type": "Eau de Parfum",
      "Character": "Fresh dan Cool",
      "Longevity": "6-8+ Jam",
      "Target": "Unisex",
      "Production": "800-1000 units/month"
    },
    price: "Rp.120.000,-",
  },
  {
    id: "solsol-shootaspire",
    name: "SHOOTASPIRE — Unisex",
    brand: "Sol & Ash",
    category: "Beauty & Care",
    weight: "30 ml",
    description: "Terinspirasi dari hamparan laut yang luas dan biru, serta kesegaran ombak. Aroma fresh dan aquatic-nya membangkitkan sensasi berada di tengah laut. Cocok digunakan saat suasana pagi hingga siang hari untuk kesan energik dan bebas.",
    image: "/images/solshootaspire.png",
    ingredients: ["Bergamot", "Lavender", "Pineapple", "Pepper", "Geranium", "Sage", "Ambroxan", "Vetiver", "Cedarwood", "White Musk", "Patchouli", "Amberwood"],
    specs: {
      "Type": "Eau de Parfum",
      "Character": "Fresh, Cool, Aquatic",
      "Longevity": "6-8+ Jam",
      "Target": "Unisex",
      "Production": "800-1000 units/month"
    },
    price: "Rp.120.000,-",
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
export const brands = [...new Set(products.map((p) => p.brand))];