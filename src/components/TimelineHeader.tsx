import { BarChart3 } from "lucide-react";

const TimelineHeader = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-medium">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Relatório Administrativo</h1>
              <p className="text-sm text-muted-foreground">Dashboard de Gestão de RDMs</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">
              {new Date().toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Atualizado: {new Date().toLocaleTimeString('pt-BR')}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TimelineHeader;
