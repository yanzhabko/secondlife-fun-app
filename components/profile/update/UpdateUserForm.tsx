"use client";
import { FC, useState } from "react";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { updateUser } from "@/app/action/user/update-user";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface UpdateUserFormProps {}

const UpdateUserForm: FC<UpdateUserFormProps> = () => {
  const [info, setInfo] = useState({
    discord: "",
    phoneNumber: "",
    cardNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const massages = await updateUser(
        session.data?.user?.email as string,
        info.discord,
        info.phoneNumber,
        info.cardNumber
      );
      toast.success(massages);
      setInfo({ discord: "", phoneNumber: "", cardNumber: "" });
    } catch (err: any) {
      toast.error(err.message || "Сталась помилка!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-[30px] lg:m-0">
      <Title
        type="title"
        title="Редагування профілю"
        className="text-purple-500"
      />
      <form className="w-full sm:w-[50%] flex flex-col gap-4 items-center mt-[10px]">
        <Input
          label="Ваш Discord"
          disabled={loading}
          value={info.discord}
          onChange={(e) => handleInput(e)}
          name="discord"
        />
        <Input
          label="Номер телефону в грі"
          disabled={loading}
          value={info.phoneNumber}
          onChange={(e) => handleInput(e)}
          name="phoneNumber"
        />
        <Input
          label="Номер картки в грі"
          disabled={loading}
          value={info.cardNumber}
          onChange={(e) => handleInput(e)}
          name="cardNumber"
        />
        <Button title="Редагувати" types="login" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default UpdateUserForm;
