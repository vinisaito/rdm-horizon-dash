export type RDMStatus = "completed" | "in-progress" | "pending";

export interface RDM {
  id: string;
  time: string;
  status: RDMStatus;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  rdms: RDM[];
}
