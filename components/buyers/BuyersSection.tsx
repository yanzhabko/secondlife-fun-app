"use client";

import { FC } from "react";
import { DataTable } from "./Table/DataTable";
import { columns } from "@/components/buyers/Table/Column";
import Time from "./Time";
import Button from "../Button";
import NavBar from "./NavBar";
import useBuyersByCategory from "@/hooks/useBuyersByCategory";
import Modal from "@/components/buyers/modal/Modal";
import useModal from "@/hooks/useModal";

const BuyersSection: FC = () => {
  const { data, isLoading, time } = useBuyersByCategory();
  const { handleOpenModal, handleCloseModal, active } = useModal();

  return (
    <section className="container flex flex-col gap-10 w-full h-full">
      <Modal handleClick={handleCloseModal} active={active} />
      <NavBar id="Скупники" />
      <div className="flex justify-between gap-8 items-center">
        <Time lastTime={time.latest} />
        <Button
          title="Оновити ціни"
          tag="button"
          types="login"
          className="flex-0 !py-3"
          onClick={handleOpenModal}
        />
      </div>
      <DataTable columns={columns} data={data || []} isLoading={isLoading} />
    </section>
  );
};

export default BuyersSection;
