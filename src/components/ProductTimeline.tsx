import { Product } from "@/types/timeline";
import RDMNode from "./RDMNode";

interface ProductTimelineProps {
  product: Product;
  index: number;
  color: { primary: string; light: string };
}

const ProductTimeline = ({ product, index, color }: ProductTimelineProps) => {
  return (
    <div 
      className="animate-slide-in py-8 transition-all duration-300"
      style={{ 
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Product Name */}
      <div className="mb-6 flex items-center gap-3">
        <h3 className="text-base font-semibold text-foreground">{product.name}</h3>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Horizontal Line */}
        <div 
          className="absolute left-0 top-[22px] right-0 h-[3px]"
          style={{ backgroundColor: color.primary }}
        ></div>

        {/* RDM Nodes */}
        <div className="flex items-start justify-between relative">
          {product.rdms.map((rdm, rdmIndex) => (
            <RDMNode 
              key={rdm.id} 
              rdm={rdm}
              index={rdmIndex}
              total={product.rdms.length}
              color={color.primary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTimeline;
