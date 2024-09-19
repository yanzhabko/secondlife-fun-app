"use client";

import { FC } from "react";
import { DataTable } from "./Table/DataTable";
import { columns } from "@/components/buyers/Table/Column";
import UpdateInformation from "./UpdateInformation";
import Button from "../Button";
import NavBar from "./NavBar";
import toast from "react-hot-toast";
import useBuyersByCategory from "@/hooks/useBuyersByCategory";

const BuyersSection: FC = () => {
  const { data, isLoading, time } = useBuyersByCategory();

  return (
    <section className="container flex flex-col gap-10">
      <NavBar id="Скупники" />
      <div className="flex justify-between gap-[30px] items-center">
        <UpdateInformation lastTime={time.latest} newTime={time.update} />
        <Button
          title="Оновити ціни"
          tag="button"
          types="login"
          className="flex-0 !py-3"
        />
      </div>
      <DataTable columns={columns} data={data || []} isLoading={isLoading} />
    </section>
  );
};

export default BuyersSection;
