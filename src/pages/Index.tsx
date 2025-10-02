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

  // Cores únicas para cada produto
  const productColors = [
    { primary: "hsl(var(--primary))", light: "hsl(var(--primary) / 0.2)" },
    { primary: "hsl(var(--info))", light: "hsl(var(--info) / 0.2)" },
    { primary: "hsl(var(--success))", light: "hsl(var(--success) / 0.2)" },
    { primary: "hsl(var(--warning))", light: "hsl(var(--warning) / 0.2)" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TimelineHeader />
      
      <div className="container mx-auto px-6 py-8">
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
                color={productColors[index % productColors.length]}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
