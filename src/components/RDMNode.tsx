import { RDM } from "@/types/timeline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Circle } from "lucide-react";

interface RDMNodeProps {
  rdm: RDM;
  index: number;
  total: number;
  color: string;
}

const RDMNode = ({ rdm, index, total, color }: RDMNodeProps) => {
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluída";
      case "in-progress":
        return "Em Andamento";
      case "pending":
        return "Pendente";
      default:
        return status;
    }
  };

  return (
    <div 
      className="flex-shrink-0 animate-slide-in"
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="relative group cursor-pointer flex flex-col items-center">
              {/* Node Circle */}
              <div 
                className="w-11 h-11 rounded-full bg-background border-[3px] flex items-center justify-center shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-110 relative z-10"
                style={{ borderColor: color }}
              >
              </div>

              {/* Info Below */}
              <div className="mt-4 text-center max-w-[120px]">
                <p className="text-[10px] font-medium text-muted-foreground mb-1">{rdm.time}</p>
                <p className="text-[11px] text-foreground leading-tight">{rdm.id}</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="top" 
            className="max-w-xs p-4 shadow-strong"
            sideOffset={10}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-sm text-foreground">{rdm.id}</p>
                <Badge 
                  variant={rdm.status === "completed" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {getStatusLabel(rdm.status)}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{rdm.description}</p>
              <p className="text-xs font-medium text-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {rdm.time}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default RDMNode;
