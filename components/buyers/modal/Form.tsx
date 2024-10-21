"use client";

import { FC, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { IoMdClose } from "react-icons/io";
import { Buyers } from "../Table/Column";
import { updateBuyers } from "@/app/action/buyers/update-buyers";
import toast from "react-hot-toast";

interface Category {
  title: string;
  type: string;
}

interface FormProps {
  category: Category | undefined;
  onClick: () => void;
  buyer: Buyers[] | undefined;
}

const Form: FC<FormProps> = ({ buyer, category, onClick }) => {
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState<number[]>([]);

  const handlePriceChange = (index: number, value: number) => {
    setPrices((prevPrices) => {
      const updatedPrices = [...prevPrices];
      updatedPrices[index] = value;
      return updatedPrices;
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!category) {
      toast.error("Сталася помилка(");
      setLoading(false);
      return;
    }

    const invalidPrices = prices.some((price, index) => {
      const minimum = buyer?.[index]?.minimum || 0;
      const maximum = buyer?.[index]?.maximum || Infinity;
      return price < minimum || price > maximum;
    });

    if (invalidPrices) {
      toast.error("Числа введені не в діапазоні!");
      setLoading(false);
      return;
    }

    try {
      const message = await updateBuyers(category.type, prices);
      toast.success(message);
    } catch (error) {
      console.error(error);
      toast.error("Сталася помилка при оновленні!");
    } finally {
      setLoading(false);
      window.location.reload();
      onClick();
    }
  };

  return (
    <form className="flex flex-col items-center gap-2 relative">
      <Title type="title" title={category?.title} className="text-purple-500" />
      {buyer?.map((item, index) => (
        <Input
          type="number"
          label={item.title}
          name={item.title}
          min={item.minimum}
          max={item.maximum}
          key={index}
          value={prices[index] || ""}
          onChange={(e) => handlePriceChange(index, Number(e.target.value))}
        />
      ))}
      <Button
        types="login"
        title="Оновити"
        className="mt-2"
        onClick={handleSubmit}
      />
      <Button
        Icon={IoMdClose}
        types="icon"
        title=""
        className="absolute top-0 right-0"
        onClick={onClick}
      />
    </form>
  );
};

export default Form;
