"use client";

import Image from "next/image";
import { useState } from "react";
import { type Product, formatPrice } from "@/data/products";

type Props = {
  product: Product;
};

const FALLBACK = "/images/product-placeholder.jpg";

export default function ProductCard({ product }: Props) {
  const [src, setSrc] = useState(product.imageUrl || FALLBACK);

  return (
    <a
      href={product.baseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="hover-lift bg-white overflow-hidden">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-[#F0EBE3]">
          <Image
            src={src}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setSrc(FALLBACK)}
          />
          <div className="absolute inset-0 bg-[#3A3028]/0 group-hover:bg-[#3A3028]/10 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#3A3028]/60">
            <p className="text-[10px] tracking-[0.25em] text-white/90 uppercase">
              View on BASE →
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 lg:p-5 border-t border-[#E8E0D6]">
          <p className="text-[10px] tracking-[0.2em] text-[#C9A96E] uppercase mb-1">
            {product.category === "necklace" && "Necklace"}
            {product.category === "ring" && "Ring"}
            {product.category === "brooch" && "Brooch"}
            {product.category === "pendant" && "Pendant"}
            {product.category === "earring" && "Earring"}
            {product.category === "other" && "Item"}
          </p>
          <h3 className="font-cormorant text-lg text-[#3A3028] font-medium leading-snug mb-2">
            {product.name}
          </h3>
          <p className="text-[11px] text-[#8A7A6A] leading-relaxed mb-3 line-clamp-2">
            {product.description}
          </p>
          <p className="text-[15px] tracking-wider text-[#3A3028] font-light">
            {formatPrice(product.price)}
            <span className="text-[10px] text-[#8A7A6A] ml-1">税込</span>
          </p>
        </div>
      </div>
    </a>
  );
}
