import { Product } from "@/types/timeline";
import RDMNode from "./RDMNode";

interface ProductTimelineProps {
  product: Product;
  index: number;
}

const ProductTimeline = ({ product, index }: ProductTimelineProps) => {
  return (
    <div 
      className="animate-slide-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Product Name */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.rdms.length} RDM(s) registrada(s)</p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6">
        {/* Horizontal Line */}
        <div className="absolute left-6 top-[18px] right-0 h-[2px] bg-gradient-to-r from-border via-muted to-border"></div>

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
