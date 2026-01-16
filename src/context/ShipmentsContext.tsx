import React, { createContext, useContext, useState, ReactNode } from "react";

export type ShipmentStatus = "Completado" | "Pendiente" | "Atrasado";

export interface Shipment {
  id: string;
  recipientName: string;
  address: string;
  status: ShipmentStatus;
  date: string;
}

interface ShipmentsContextType {
  shipments: Shipment[];
  addShipment: (shipment: Omit<Shipment, "id">) => void;
}

const ShipmentsContext = createContext<ShipmentsContextType | undefined>(undefined);

// In memmory dummy data
const initialShipments: Shipment[] = [
  {
    id: "1",
    recipientName: "Saúl López",
    address: "San Salvador, El Salvador",
    status: "Completado",
    date: "2026-01-10",
  },
  {
    id: "2",
    recipientName: "Saúl López",
    address: "San Salvador, El Salvador",
    status: "Pendiente",
    date: "2026-01-12",
  },
  {
    id: "3",
    recipientName: "María García",
    address: "San Salvador, El Salvador",
    status: "Atrasado",
    date: "2026-01-08",
  },
  {
    id: "4",
    recipientName: "Carlos Mendez",
    address: "San Salvador, El Salvador",
    status: "Completado",
    date: "2026-01-05",
  },
  {
    id: "5",
    recipientName: "Ana Rodríguez",
    address: "San Salvador, El Salvador",
    status: "Pendiente",
    date: "2026-01-14",
  },
];

export function ShipmentsProvider({ children }: { children: ReactNode }) {
  const [shipments, setShipments] = useState<Shipment[]>(initialShipments);

  const addShipment = (shipment: Omit<Shipment, "id">) => {
    const newShipment: Shipment = {
      ...shipment,
      id: Date.now().toString(),
    };
    setShipments((prev) => [newShipment, ...prev]);
  };

  return (
    <ShipmentsContext.Provider value={{ shipments, addShipment }}>
      {children}
    </ShipmentsContext.Provider>
  );
}

export function useShipments() {
  const context = useContext(ShipmentsContext);
  if (!context) {
    throw new Error("useShipments must be used within a ShipmentsProvider");
  }
  return context;
}
