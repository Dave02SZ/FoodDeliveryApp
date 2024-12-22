import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface OrderItem {
    id: number;
    name: string;
    description: string;
    price: number;
    type: "FOOD" | "DRINK";
}

interface OrderContextProps {
    orderItems: OrderItem[];
    addToOrder: (item: OrderItem) => void;
    removeFromOrder: (id: number) => void;
    clearOrder: () => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    // Rendelési lista betöltése localStorage-ból az első rendereléskor
    useEffect(() => {
        const storedOrders = localStorage.getItem("orderItems");
        if (storedOrders) {
            setOrderItems(JSON.parse(storedOrders));
        }
    }, []);

    const addToOrder = (item: OrderItem) => {
        const updatedItems = [...orderItems, item];
        setOrderItems(updatedItems);
        localStorage.setItem("orderItems", JSON.stringify(updatedItems)); // Adatok mentése
    };

    const removeFromOrder = (id: number) => {
        const updatedItems = orderItems.filter((item) => item.id !== id);
        setOrderItems(updatedItems);
        localStorage.setItem("orderItems", JSON.stringify(updatedItems)); // Adatok mentése
    };

    const clearOrder = () => {
        setOrderItems([]);
        localStorage.removeItem("orderItems");
    };

    return (
        <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder, clearOrder }}>
            {children}
        </OrderContext.Provider>
    );
};


export const useOrder = (): OrderContextProps => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrder must be used within an OrderProvider");
    }
    return context;
};


