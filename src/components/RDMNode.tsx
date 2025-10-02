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
}

const RDMNode = ({ rdm, index, total }: RDMNodeProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success";
      case "in-progress":
        return "bg-warning";
      case "pending":
        return "bg-muted-foreground";
      default:
        return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-3 h-3 text-success-foreground" />;
      case "in-progress":
        return <Clock className="w-3 h-3 text-warning-foreground" />;
      case "pending":
        return <Circle className="w-3 h-3 text-muted-foreground" />;
      default:
        return null;
    }
  };

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

  // Calculate spacing between nodes
  const spacing = total > 3 ? "w-32" : "w-40";

  return (
    <div 
      className={`flex-shrink-0 ${spacing} animate-slide-in`}
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="relative group cursor-pointer">
              {/* Node Circle */}
              <div className={`
                w-9 h-9 rounded-full ${getStatusColor(rdm.status)} 
                flex items-center justify-center
                shadow-medium hover:shadow-strong
                transition-all duration-300
                hover:scale-110
                relative z-10
                ${rdm.status === "in-progress" ? "animate-pulse-soft" : ""}
              `}>
                {getStatusIcon(rdm.status)}
              </div>

              {/* Time Label */}
              <div className="mt-3 text-center">
                <p className="text-xs font-semibold text-foreground">{rdm.time}</p>
                <Badge 
                  variant="outline" 
                  className="mt-1 text-[10px] px-1.5 py-0 h-5"
                >
                  {rdm.id}
                </Badge>
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
