import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Filter, Download } from "lucide-react";
import ProductTimeline from "@/components/ProductTimeline";
import TimelineHeader from "@/components/TimelineHeader";
import { RDM, Product } from "@/types/timeline";

const Index = () => {
  // Mock data - últimas 6 horas de RDMs
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Sistema de Gestão",
      rdms: [
        { id: "R001", time: "08:30", status: "completed", description: "Atualização de segurança implementada" },
        { id: "R002", time: "10:15", status: "in-progress", description: "Correção de bug crítico em andamento" },
        { id: "R003", time: "12:45", status: "pending", description: "Melhoria de performance agendada" },
      ]
    },
    {
      id: "2",
      name: "Portal do Cliente",
      rdms: [
        { id: "R004", time: "09:20", status: "completed", description: "Nova funcionalidade de relatórios" },
        { id: "R005", time: "11:00", status: "completed", description: "Otimização de consultas" },
        { id: "R006", time: "13:30", status: "in-progress", description: "Integração com API externa" },
        { id: "R007", time: "14:00", status: "pending", description: "Ajustes de interface" },
      ]
    },
    {
      id: "3",
      name: "API Gateway",
      rdms: [
        { id: "R008", time: "08:00", status: "completed", description: "Deploy de nova versão" },
        { id: "R009", time: "10:30", status: "completed", description: "Configuração de rate limiting" },
        { id: "R010", time: "13:00", status: "in-progress", description: "Migração de infraestrutura" },
      ]
    },
    {
      id: "4",
      name: "Dashboard Analytics",
      rdms: [
        { id: "R011", time: "09:45", status: "completed", description: "Novos gráficos implementados" },
        { id: "R012", time: "12:00", status: "in-progress", description: "Cache distribuído" },
      ]
    },
  ]);

  const totalRDMs = products.reduce((acc, product) => acc + product.rdms.length, 0);
  const completedRDMs = products.reduce(
    (acc, product) => acc + product.rdms.filter(rdm => rdm.status === "completed").length,
    0
  );
  const inProgressRDMs = products.reduce(
    (acc, product) => acc + product.rdms.filter(rdm => rdm.status === "in-progress").length,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <TimelineHeader />
      
      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-slide-in">
          <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Total de RDMs</p>
                <p className="text-3xl font-bold text-foreground mt-1">{totalRDMs}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Concluídas</p>
                <p className="text-3xl font-bold text-success mt-1">{completedRDMs}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success to-success/80 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-success-foreground"></div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Em Andamento</p>
                <p className="text-3xl font-bold text-warning mt-1">{inProgressRDMs}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning to-warning/80 flex items-center justify-center animate-pulse-soft">
                <div className="w-3 h-3 rounded-full bg-warning-foreground"></div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Produtos</p>
                <p className="text-3xl font-bold text-info mt-1">{products.length}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-info to-info/80 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-info-foreground"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline Section */}
        <Card className="p-6 shadow-medium">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Timeline de RDMs - Últimas 6 Horas</h2>
              <p className="text-sm text-muted-foreground mt-1">Visualização cronológica das requisições de mudança por produto</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filtros
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Exportar
              </Button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="text-sm text-muted-foreground">Concluída</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <span className="text-sm text-muted-foreground">Em Andamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
              <span className="text-sm text-muted-foreground">Pendente</span>
            </div>
          </div>

          {/* Product Timelines */}
          <div className="space-y-8">
            {products.map((product, index) => (
              <ProductTimeline 
                key={product.id} 
                product={product}
                index={index}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
