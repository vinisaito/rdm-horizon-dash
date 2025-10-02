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
      className="animate-slide-in rounded-lg p-4 transition-all duration-300"
      style={{ 
        animationDelay: `${index * 100}ms`,
        backgroundColor: color.light,
        borderLeft: `4px solid ${color.primary}`
      }}
    >
      {/* Product Name */}
      <div className="mb-4 flex items-center gap-3">
        <div 
          className="w-3 h-3 rounded-full" 
          style={{ backgroundColor: color.primary }}
        ></div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.rdms.length} RDM(s) registrada(s)</p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6">
        {/* Horizontal Line */}
        <div 
          className="absolute left-6 top-[18px] right-0 h-[2px]"
          style={{ backgroundColor: color.primary, opacity: 0.5 }}
        ></div>

        {/* RDM Nodes */}
        <div className="flex items-start gap-0 relative">
          {product.rdms.map((rdm, rdmIndex) => (
            <RDMNode 
              key={rdm.id} 
              rdm={rdm}
              index={rdmIndex}
              total={product.rdms.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTimeline;
