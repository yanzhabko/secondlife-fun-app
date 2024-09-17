"use client";

import { FC, useEffect, useState } from "react";
import { DataTable } from "./Table/DataTable";
import { columns, Buyers } from "@/components/buyers/Table/Column";
import UpdateInformation from "./UpdateInformation";
import Button from "../Button";
import NavBar from "./NavBar";
import { buyers } from "@/lib/index";
import { usePathname } from "next/navigation";

async function getData(category: string): Promise<Buyers[]> {
  if (category.includes("fish")) {
    return buyers.fish
      .map((item) => {
        const percentage =
          ((item.nowPrice - item.min) / (item.max - item.min)) * 100;
        return { ...item, percentage };
      })
      .sort((a, b) => b.percentage - a.percentage);
  } else if (category.includes("vegetables")) {
    return buyers.vegetables
      .map((item) => {
        const percentage =
          ((item.nowPrice - item.min) / (item.max - item.min)) * 100;
        return { ...item, percentage };
      })
      .sort((a, b) => b.percentage - a.percentage);
  } else {
    return buyers.other
      .map((item) => {
        const percentage =
          ((item.nowPrice - item.min) / (item.max - item.min)) * 100;
        return { ...item, percentage };
      })
      .sort((a, b) => b.percentage - a.percentage);
  }
}

const BuyersSection: FC = () => {
  const pathname = usePathname();
  const [data, setData] = useState<Buyers[]>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(pathname);
      setData(result);
    };
    fetchData();
  }, [pathname]);
  return (
    <section className="container flex flex-col gap-10">
      <NavBar id="Скупники" />
      <div className="flex justify-between gap-[30px] items-center">
        <UpdateInformation lastTime="16.09 16:40" newTime="16.09 21:40" />
        <Button
          title="Оновити ціни"
          tag="button"
          types="login"
          className="flex-0 !py-3"
        />
      </div>
      <DataTable columns={columns} data={data || []} />
    </section>
  );
};

export default BuyersSection;
