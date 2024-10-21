"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Buyers = {
  id: string;
  title: string;
  minimum: number;
  maximum: number;
  priceNow: number;
  percentage: number | null;
};

export const columns: ColumnDef<Buyers>[] = [
  {
    accessorKey: "title",
    header: () => <div className="text-center">Товар</div>,
    cell: ({ row }) => {
      const item = row.getValue<string>("title");
      return <div className="text-center font-semibold p-4">{item}</div>;
    },
  },
  {
    accessorKey: "minimum",
    header: () => <div className="text-center">Мін</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("minimum"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);

      return <div className="text-center font-semibold p-4">{formatted}</div>;
    },
  },
  {
    accessorKey: "maximum",
    header: () => <div className="text-center">Макс</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("maximum"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);

      return <div className="text-center font-semibold p-4">{formatted}</div>;
    },
  },
  {
    accessorKey: "priceNow",
    header: () => <div className="text-center">Поточна</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("priceNow"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);

      return <div className="text-center font-semibold p-4">{formatted}</div>;
    },
  },
  {
    accessorKey: "percentage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="!w-full font-bold !bg-transparent !hover:bg-transparent !hover:text-white"
        >
          Відсоток
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const percentage = parseFloat(row.getValue("percentage"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(percentage / 100);

      return (
        <div
          className={`text-center font-semibold w-full h-full text-white p-4 ${
            percentage < 70
              ? "bg-red-400"
              : percentage <= 90
              ? "bg-orange-300"
              : "bg-emerald-400"
          }`}
        >
          {formatted}
        </div>
      );
    },
  },
];
