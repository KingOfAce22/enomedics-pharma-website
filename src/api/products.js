
import axios from "axios";

export const demoProducts = [
  {
    id: "enomedics-hair-nutrition",
    slug: "hair-&-beauty-nutrition",
    name: "Hair & beauty nutrition",
    category: "Hair Nutrition",
    form: "Capsule",
    strength: "Biotin + Zinc + Selenium + B vitamins",
    pack: "60 capsules",
    price: 899,
    currency: "INR",
    color: "mint",
    icon: "✳",
    imageFolder: "Hair and beauty nutrition",
    imageCount: 4,
    tagline: "Premium hair and beauty daily nutrition.",
    description:
      "Enomedics Hair Nutrition is a thoughtfully formulated daily nutritional supplement combining biotin, zinc, selenium and essential B vitamins. Its blend brings together nutrients commonly included in hair and beauty nutrition products in a convenient capsule format for everyday routines.",
    dosage: "1 capsule daily after meal",
    ingredients: [
      { name: "Biotin", amount: "30 µg" },
      { name: "Zinc (elemental)", amount: "10 mg" },
      { name: "Selenium", amount: "40 µg" },
      { name: "Vitamin B6", amount: "1.4 mg" },
      { name: "Folate", amount: "200 µg" },
      { name: "Vitamin B12", amount: "2.5 µg" },
      { name: "Pantothenic acid", amount: "5 mg" },
      { name: "Riboflavin", amount: "1.4 mg" },
      { name: "Thiamine", amount: "1.1 mg" },
      { name: "Niacin", amount: "14 mg NE" }
    ],
    highlights: [
      "Biotin, zinc and selenium combination",
      "Includes essential B vitamins",
      "Convenient daily capsule format",
      "60 capsules per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-collagen-beauty",
    slug: "collagen-beauty",
    name: "Skin & beauty nutrition",
    category: "Collagen Beauty",
    form: "Powder",
    strength: "Hydrolyzed collagen + Vitamin C",
    pack: "30 sachets",
    price: 1999,
    currency: "INR",
    color: "peach",
    icon: "☼",
    imageFolder: "Skin and beauty nutrition",
    imageCount: 4,
    tagline: "Premium beauty-from-within powder.",
    description:
      "Enomedics Collagen Beauty combines hydrolyzed collagen peptides with Vitamin C in an easy-to-mix powder formulation. Designed for convenient daily beauty nutrition, each serving provides 5 g of collagen peptides along with Vitamin C. Hyaluronic acid may be included subject to the final approved formulation.",
    dosage: "1 sachet daily dissolved in 200–250 mL water",
    ingredients: [
      { name: "Hydrolyzed collagen peptides", amount: "5 g" },
      { name: "Vitamin C", amount: "40 mg" },
      { name: "Hyaluronic acid", amount: "20 mg", optional: true }
    ],
    highlights: [
      "5 g hydrolyzed collagen peptides",
      "Includes Vitamin C",
      "Convenient single-serving sachets",
      "30 sachets per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-daily-vitamin-d3",
    slug: "daily-vitamin-d3",
    name: "Everyday vitamin D support",
    category: "Daily Vitamin D3",
    form: "Capsule",
    strength: "Vitamin D3",
    pack: "60 tablets/capsules",
    price: 799,
    currency: "INR",
    color: "peach",
    icon: "☼",
    imageFolder: "D3",
    imageCount: 3,
    tagline: "Simple everyday vitamin D nutrition.",
    description:
      "Enomedics Daily Vitamin D3 provides Vitamin D3 in a convenient daily capsule format. Each unit contains 600 IU (15 µg) of Vitamin D3, making it a straightforward addition to a nutritional supplement range focused on everyday vitamin D intake.",
    dosage: "1 unit daily with a meal",
    ingredients: [
      { name: "Vitamin D3", amount: "600 IU (15 µg)" }
    ],
    highlights: [
      "600 IU Vitamin D3 per unit",
      "Simple single-ingredient formulation",
      "Convenient daily format",
      "60 units per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-d3-k2",
    slug: "d3-k2",
    name: "Premium bone nutrition",
    category: "D3 + K2",
    form: "Capsule",
    strength: "Vitamin D3 + Vitamin K2 (MK-7)",
    pack: "60 capsules",
    price: 799,
    currency: "INR",
    color: "lavender",
    icon: "◒",
        imageFolder: "Premium bone nutrition",
    imageCount: 4,
    tagline: "Premium bone and calcium-metabolism nutrition.",
    description:
      "Enomedics D3 + K2 combines Vitamin D3 with Vitamin K2 in the MK-7 form. Each capsule contains 600 IU of Vitamin D3 and 55 µg of Vitamin K2. This combination is positioned within the premium bone nutrition category.",
    dosage: "1 capsule daily with a meal",
    ingredients: [
      { name: "Vitamin D3", amount: "600 IU (15 µg)" },
      { name: "Vitamin K2 (MK-7)", amount: "55 µg" }
    ],
    highlights: [
      "Vitamin D3 and K2 combination",
      "Includes MK-7 form of Vitamin K2",
      "Premium nutritional formulation",
      "60 capsules per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-womens-daily",
    slug: "womens-daily",
    name: "Women's daily nutrition",
    category: "Women's Daily",
    form: "Tablet",
    strength: "Multivitamin + minerals",
    pack: "60 tablets",
    price: 699,
    currency: "INR",
    color: "peach",
    icon: "✳",
    imageFolder: "Women's daily nutrition",
    imageCount: 4,
    tagline: "Everyday women's nutritional care.",
    description:
      "Enomedics Women's Daily is a multivitamin and mineral formulation designed around everyday women's nutrition. It combines vitamins A, C, D3, E and B-complex vitamins with minerals including calcium, magnesium, zinc, iron, selenium and iodine in one convenient tablet.",
    dosage: "1 tablet daily after meal",
    ingredients: [
      { name: "Vitamin A", amount: "700 µg RE" },
      { name: "Vitamin D3", amount: "600 IU" },
      { name: "Vitamin E", amount: "10 mg" },
      { name: "Vitamin C", amount: "40 mg" },
      { name: "Vitamin B1", amount: "1.1 mg" },
      { name: "Vitamin B2", amount: "1.4 mg" },
      { name: "Vitamin B6", amount: "1.4 mg" },
      { name: "Folate", amount: "200 µg" },
      { name: "Vitamin B12", amount: "2.5 µg" },
      { name: "Biotin", amount: "30 µg" },
      { name: "Niacin", amount: "14 mg NE" },
      { name: "Pantothenic acid", amount: "5 mg" },
      { name: "Calcium", amount: "200 mg" },
      { name: "Magnesium", amount: "60 mg" },
      { name: "Zinc", amount: "10 mg" },
      { name: "Iron", amount: "14 mg" },
      { name: "Selenium", amount: "40 µg" },
      { name: "Iodine", amount: "150 µg" }
    ],
    highlights: [
      "Broad-spectrum multivitamin formulation",
      "Essential vitamins and minerals",
      "Designed for women's daily nutrition",
      "60 tablets per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-womens-iron",
    slug: "womens-iron",
    name: "Women's nutritional support",
    category: "Women's Iron",
    form: "Capsule",
    strength: "Iron + folate + Vitamin B12",
    pack: "60 units",
    price: 549,
    currency: "INR",
    color: "peach",
    icon: "✳",
       imageFolder: "Women's nutritional support",
    imageCount: 4,
    tagline: "Gentle daily iron nutrition.",
    description:
      "Enomedics Women's Iron combines elemental iron with folate, Vitamin B12 and Vitamin C. This formulation brings together four nutritional ingredients in a convenient daily capsule format, with clearly specified quantities for each component.",
    dosage: "1 tablet/capsule daily after meal, unless advised otherwise",
    ingredients: [
      { name: "Elemental Iron", amount: "14 mg" },
      { name: "Folate", amount: "200 µg" },
      { name: "Vitamin B12", amount: "2.5 µg" },
      { name: "Vitamin C", amount: "40 mg" }
    ],
    highlights: [
      "Elemental iron formulation",
      "Includes folate and Vitamin B12",
      "Vitamin C combination",
      "60 units per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-pcos-nutrition",
    slug: "pcos-nutrition",
    name: "Women's wellness",
    category: "PCOS Nutrition",
    form: "Sachet",
    strength: "Myo-inositol + D-chiro-inositol + folate",
    pack: "30 sachets",
    price: 1299,
    currency: "INR",
    color: "lavender",
    icon: "◒",
        imageFolder: "Women's wellness",
    imageCount: 4,
    tagline: "Women's metabolic and cycle wellness nutrition.",
    description:
      "Enomedics PCOS Nutrition is a sachet-based nutritional formulation combining myo-inositol, D-chiro-inositol and folate. The formulation is positioned within women's wellness and nutritional care. It is not a treatment for PCOS or a substitute for professional medical care.",
    dosage: "1 sachet daily; formulation and claim review required before launch",
    ingredients: [
      { name: "Myo-inositol", amount: "2 g" },
      { name: "D-chiro-inositol", amount: "50 mg" },
      { name: "Folate", amount: "200 µg" }
    ],
    highlights: [
      "Myo-inositol and D-chiro-inositol combination",
      "Includes folate",
      "Convenient sachet format",
      "30 sachets per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-daily-b12",
    slug: "daily-b12",
    name: "B12 nutrition",
    category: "Daily B12",
    form: "Tablet",
    strength: "Methylcobalamin / Vitamin B12",
    pack: "60 tablets",
    price: 399,
    currency: "INR",
    color: "blue",
    icon: "✧",
    imageFolder: "B12 nutrition",
    imageCount: 4,
    tagline: "Simple daily Vitamin B12 nutrition.",
    description:
      "Enomedics Daily B12 features methylcobalamin, a form of Vitamin B12, in a convenient tablet format. Each tablet contains 2.5 µg of Vitamin B12, making it a focused addition to an everyday nutritional supplement range.",
    dosage: "1 tablet daily",
    ingredients: [
      { name: "Vitamin B12 (methylcobalamin)", amount: "2.5 µg" }
    ],
    highlights: [
      "Methylcobalamin formulation",
      "2.5 µg Vitamin B12 per tablet",
      "Convenient daily tablet",
      "60 tablets per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-omega-3",
    slug: "omega-3",
    name: "Omega-3",
    category: "Omega-3",
    form: "Softgel",
    strength: "EPA + DHA",
    pack: "60 softgels",
    price: 999,
    currency: "INR",
    color: "blue",
    icon: "✧",
    imageFolder: "OMEGA 3",
    imageCount: 4,
    tagline: "Premium omega-3 daily nutrition.",
    description:
      "Enomedics Omega-3 features a fish oil concentrate providing EPA and DHA, two long-chain omega-3 fatty acids. Each softgel contains 1,000 mg of fish oil concentrate, including 180 mg EPA and 120 mg DHA.",
    dosage: "1 softgel daily with meal",
    ingredients: [
      { name: "Fish oil concentrate", amount: "1000 mg" },
      { name: "EPA", amount: "180 mg" },
      { name: "DHA", amount: "120 mg" }
    ],
    highlights: [
      "1000 mg fish oil concentrate",
      "EPA and DHA combination",
      "Convenient softgel format",
      "60 softgels per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-gut-probiotic",
    slug: "gut-probiotic",
    name: "Daily gut health",
    category: "Gut Probiotic",
    form: "Capsule",
    strength: "Selected probiotic strains",
    pack: "30 capsules",
    price: 999,
    currency: "INR",
    color: "mint",
    icon: "✳",
    imageFolder: "Daily gut health",
    imageCount: 4,
    tagline: "Daily gut microbiome nutrition.",
    description:
      "Enomedics Gut Probiotic combines Lactobacillus acidophilus and Bifidobacterium lactis in a convenient capsule formulation. The product provides a total of 10 billion CFU at manufacture, with storage conditions to be followed as specified on the final product label.",
    dosage: "1 capsule daily; maintain specified storage conditions",
    ingredients: [
      { name: "Lactobacillus acidophilus", amount: "5 billion CFU" },
      { name: "Bifidobacterium lactis", amount: "5 billion CFU" },
      { name: "Total probiotics", amount: "10 billion CFU at manufacture" }
    ],
    highlights: [
      "Two selected probiotic strains",
      "10 billion CFU at manufacture",
      "Convenient capsule format",
      "30 capsules per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-prebiotic-fiber",
    slug: "prebiotic-fiber",
    name: "Digestive wellness",
    category: "Prebiotic Fiber",
    form: "Powder",
    strength: "Inulin / FOS or permitted fiber",
    pack: "30 sachets",
    price: 899,
    currency: "INR",
    color: "mint",
    icon: "✳",
        imageFolder: "Digestive wellness",
    imageCount: 4,
    tagline: "Simple daily prebiotic fiber nutrition.",
    description:
      "Enomedics Prebiotic Fiber is a powder-based nutritional product featuring inulin, a dietary fiber ingredient. Each serving provides 5 g of inulin and can be incorporated into a daily routine by mixing it with water as directed.",
    dosage: "1 sachet daily in 200–250 mL water; increase gradually as tolerated",
    ingredients: [
      { name: "Inulin", amount: "5 g per serving" }
    ],
    highlights: [
      "5 g inulin per serving",
      "Powder-based fiber formulation",
      "Easy-to-mix sachets",
      "30 sachets per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-magnesium",
    slug: "magnesium",
    name: "Daily magnesium support",
    category: "Magnesium",
    form: "Capsule",
    strength: "Magnesium bisglycinate + Vitamin B6",
    pack: "60 capsules",
    price: 799,
    currency: "INR",
    color: "lavender",
    icon: "◒",
        imageFolder: "Daily magnesium support",
    imageCount: 4,
    tagline: "Premium gentle magnesium nutrition.",
    description:
      "Enomedics Magnesium features magnesium bisglycinate, a magnesium compound, alongside Vitamin B6. Each serving provides 100 mg of elemental magnesium and 1.4 mg of Vitamin B6 in a convenient capsule format.",
    dosage: "1 capsule daily after meal",
    ingredients: [
      { name: "Magnesium bisglycinate", amount: "Providing elemental magnesium 100 mg" },
      { name: "Vitamin B6", amount: "1.4 mg" }
    ],
    highlights: [
      "Magnesium bisglycinate formulation",
      "100 mg elemental magnesium",
      "Includes Vitamin B6",
      "60 capsules per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-joint-nutrition",
    slug: "joint-nutrition",
    name: "Joint & mobility nutrition",
    category: "Joint Nutrition",
    form: "Tablet",
    strength: "Glucosamine + Chondroitin + MSM",
    pack: "60 tablets",
    price: 1099,
    currency: "INR",
    color: "blue",
    icon: "✧",
       imageFolder: "Joint and mobility nutrition",
    imageCount: 4,
    tagline: "Combined joint and mobility nutrition.",
    description:
      "Enomedics Joint Nutrition combines glucosamine hydrochloride, chondroitin sulfate and MSM in a tablet formulation. These ingredients are brought together in a nutritional product positioned for the joint and mobility nutrition category.",
    dosage: "2 tablets daily with meals",
    ingredients: [
      { name: "Glucosamine HCl", amount: "750 mg" },
      { name: "Chondroitin sulfate", amount: "400 mg" },
      { name: "MSM", amount: "500 mg" }
    ],
    highlights: [
      "Glucosamine HCl formulation",
      "Includes chondroitin sulfate",
      "MSM combination",
      "60 tablets per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-electrolytes",
    slug: "electrolytes",
    name: "Hydration",
    category: "Electrolytes",
    form: "Sachet",
    strength: "Sodium + Potassium + Electrolytes",
    pack: "30 sachets",
    price: 699,
    currency: "INR",
    color: "peach",
    icon: "☼",
       imageFolder: "Hydration",
    imageCount: 4,
    tagline: "Daily hydration and active lifestyle nutrition.",
    description:
      "Enomedics Electrolytes is a sachet-based formulation combining sodium, potassium, magnesium and chloride with Vitamin C. Designed for convenient preparation, each sachet can be dissolved in water according to the specified preparation instructions.",
    dosage: "1 sachet in 500–750 mL water as directed",
    ingredients: [
      { name: "Sodium", amount: "200 mg" },
      { name: "Potassium", amount: "100 mg" },
      { name: "Magnesium", amount: "20 mg" },
      { name: "Chloride", amount: "300 mg" },
      { name: "Vitamin C", amount: "40 mg" }
    ],
    highlights: [
      "Sodium and potassium combination",
      "Includes magnesium and chloride",
      "Vitamin C included",
      "30 sachets per pack"
    ],
    stock: false,
  },
  {
    id: "enomedics-daily-multivitamin",
    slug: "daily-multivitamin",
    name: "Everyday wellness",
    category: "Daily Multivitamin",
    form: "Tablet",
    strength: "Vitamins + minerals",
    pack: "60 tablets",
    price: 649,
    currency: "INR",
    color: "mint",
    icon: "✳",
     imageFolder: "Everyday wellness",
    imageCount: 4,
    tagline: "Everyday wellness with essential vitamins and minerals.",
    description:
      "Enomedics Daily Multivitamin combines a broad range of vitamins and minerals in one convenient daily tablet. Its formulation includes vitamins A, C, D3, E and B-complex vitamins alongside calcium, magnesium, zinc, iron, selenium and iodine.",
    dosage: "1 tablet daily after meal",
    ingredients: [
      { name: "Vitamin A", amount: "700 µg RE" },
      { name: "Vitamin D3", amount: "600 IU" },
      { name: "Vitamin E", amount: "10 mg" },
      { name: "Vitamin C", amount: "40 mg" },
      { name: "Vitamin B1", amount: "1.1 mg" },
      { name: "Vitamin B2", amount: "1.4 mg" },
      { name: "Vitamin B6", amount: "1.4 mg" },
      { name: "Folate", amount: "200 µg" },
      { name: "Vitamin B12", amount: "2.5 µg" },
      { name: "Biotin", amount: "30 µg" },
      { name: "Niacin", amount: "14 mg NE" },
      { name: "Pantothenic acid", amount: "5 mg" },
      { name: "Calcium", amount: "200 mg" },
      { name: "Magnesium", amount: "60 mg" },
      { name: "Zinc", amount: "10 mg" },
      { name: "Iron", amount: "14 mg" },
      { name: "Selenium", amount: "40 µg" },
      { name: "Iodine", amount: "150 µg" }
    ],
    highlights: [
      "Broad-spectrum vitamins and minerals",
      "Includes essential B-complex vitamins",
      "Multiple nutritional ingredients in one tablet",
      "60 tablets per pack"
    ],
    stock: false,
  },
];

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
  timeout: 5000,
});

export async function getProducts() {
  if (!import.meta.env.VITE_API_BASE_URL) return demoProducts;

  try {
    const response = await client.get("/products");
    return response.data;
  } catch (error) {
    console.warn(
      "Product API unavailable; using demo catalogue.",
      error.message,
    );
    return demoProducts;
  }
}
