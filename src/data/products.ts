export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "necklace" | "ring" | "brooch" | "pendant" | "earring" | "other";
  imageUrl: string;
  baseUrl: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "cobalt-green-necklace",
    name: "コバルトグリーンのネックレス",
    price: 10000,
    description: "フランスアンティーク磁器をリメイクした一点物。ヴィンテージチェーン使用、長さ約50cm。",
    category: "necklace",
    imageUrl: "/images/products/cobalt-green-necklace.jpg",
    baseUrl: "https://springwater.base.shop/",
    featured: true,
  },
  {
    id: "cherry-pendant",
    name: "さくらんぼのペンダント",
    price: 18000,
    description: "フランスアンティーク陶器を使用した繊細な一点物。ヴィンテージチェーン、長さ61cm。",
    category: "pendant",
    imageUrl: "/images/products/cherry-pendant.jpg",
    baseUrl: "https://springwater.base.shop/",
    featured: true,
  },
  {
    id: "sakura-necklace",
    name: "桜のネックレス",
    price: 15000,
    description: "ローズクォーツカボション製。シルバー925チェーン40cm。春の訪れを纏う上品な一作。",
    category: "necklace",
    imageUrl: "/images/products/sakura-necklace.jpg",
    baseUrl: "https://springwater.base.shop/",
    featured: true,
  },
  {
    id: "bird-necklace",
    name: "小鳥の親子のネックレス",
    price: 10000,
    description: "フランスアンティーク陶器のアップサイクル。サファイア、琥珀使用、長さ47cm。",
    category: "necklace",
    imageUrl: "/images/products/bird-necklace.jpg",
    baseUrl: "https://springwater.base.shop/",
    featured: true,
  },
  {
    id: "crystal-ring",
    name: "Monpetit en Cristal オーダーリング",
    price: 20000,
    description: "本水晶、シルバー925使用。約16mm×12mm。オーダーメイド対応の特別な一作。",
    category: "ring",
    imageUrl: "/images/products/crystal-ring.jpg",
    baseUrl: "https://springwater.base.shop/",
    featured: true,
  },
  {
    id: "strawberry-pendant",
    name: "いちごのペンダント",
    price: 8000,
    description: "磁器リメイク。ロザリオリメイクチェーン、約3.7×2.4cm。愛らしさの中に品格が宿る一品。",
    category: "pendant",
    imageUrl: "/images/products/strawberry-pendant.jpg",
    baseUrl: "https://springwater.base.shop/",
    featured: true,
  },
  {
    id: "fairy-brooch-cat",
    name: "フェアリーズ・ブローチ 猫",
    price: 3000,
    description: "フランスアンティーク陶器使用。約5.2×3.5cm。猫モチーフの愛らしいブローチ。",
    category: "brooch",
    imageUrl: "/images/products/fairy-brooch-cat.jpg",
    baseUrl: "https://springwater.base.shop/",
  },
  {
    id: "violet-necklace",
    name: "すみれのネックレス",
    price: 5000,
    description: "アメジスト製。マグネットクラスプ、ヴィンテージチェーン約50cm。すみれの花言葉を纏って。",
    category: "necklace",
    imageUrl: "/images/products/violet-necklace.jpg",
    baseUrl: "https://springwater.base.shop/",
  },
  {
    id: "chankai-ring",
    name: "CHANKAi リング",
    price: 4000,
    description: "PUIFORCAT磁器製。本珊瑚付き、フリーサイズ。フランス名窯の欠片が指先を彩る。",
    category: "ring",
    imageUrl: "/images/products/chankai-ring.jpg",
    baseUrl: "https://springwater.base.shop/",
  },
  {
    id: "bernard-pendant",
    name: "ベルナルドのリメイクペンダントトップ",
    price: 6000,
    description: "リモージュ磁器メーカー製。鹿モチーフ、約5.3×5.1cm。格調ある一点物。",
    category: "pendant",
    imageUrl: "/images/products/bernard-pendant.jpg",
    baseUrl: "https://springwater.base.shop/",
  },
  {
    id: "lily-necklace",
    name: "すずらんの一粒ネックレス",
    price: 10000,
    description: "シルバー925製。花約5mm×5mm、チェーン40cm。清楚なすずらんの一粒をそっと。",
    category: "necklace",
    imageUrl: "/images/products/lily-necklace.jpg",
    baseUrl: "https://springwater.base.shop/",
  },
  {
    id: "drop-earring",
    name: "雫（しずく）のアメリカンピアス",
    price: 4000,
    description: "シルバー925製。左右で長さ変更可能。揺れるたびに光を宿す雫のフォルム。",
    category: "earring",
    imageUrl: "/images/products/drop-earring.jpg",
    baseUrl: "https://springwater.base.shop/",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const formatPrice = (price: number): string =>
  `¥${price.toLocaleString("ja-JP")}`;
