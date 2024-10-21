"use client";

import { FC, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { changePassword } from "@/app/action/user/change-password";
import Title from "@/components/Title";

interface ChangePasswordFormProps {}

const ChangePasswordForm: FC<ChangePasswordFormProps> = () => {
  const [info, setInfo] = useState({
    password: "",
    confirmedPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (info.password !== info.confirmedPassword) {
      toast.error("Паролі не співпадають");
      return;
    }

    try {
      const massages = await changePassword(
        session.data?.user?.email as string,
        info.password
      );
      toast.success(massages);
      setInfo({ password: "", confirmedPassword: "" });
    } catch (err: any) {
      toast.error(err.message || "Помилка при зміні пароля");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mb-[20px] lg:m-0">
      <Title type="title" title="Зміна паролю" className="text-purple-500" />
      <form className="w-full sm:w-[50%] flex flex-col gap-4 items-center mt-[10px]">
        <Input
          label="Пароль"
          disabled={loading}
          value={info.password}
          onChange={(e) => handleInput(e)}
          name="password"
          type="password"
        />
        <Input
          label="Повторіть пароль"
          disabled={loading}
          value={info.confirmedPassword}
          onChange={(e) => handleInput(e)}
          name="confirmedPassword"
          type="password"
        />
        <Button title="Зберегти" types="login" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default ChangePasswordForm;
