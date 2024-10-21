"use client";

import { FC, useState } from "react";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import { recoveryPassword } from "@/app/action/user/recovery-password";
import { useRouter } from "next/navigation";

interface ChangePasswordFormFormProps {
  resetPasswordToken: string;
}

const ChangePasswordForm: FC<ChangePasswordFormFormProps> = ({
  resetPasswordToken,
}) => {
  const [info, setInfo] = useState({
    password: "",
    confirmedPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      const massages = await recoveryPassword(
        resetPasswordToken,
        info.password
      );
      toast.success(massages);
      router.push("/signin");
    } catch (err: any) {
      toast.error(err.message || "Помилка при зміні пароля");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-230px)]  flex flex-col justify-center items-center">
      <form className="mx-auto flex flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-lg w-[95%] sm:w-[calc(100%-20%)] md:w-[calc(100%-40%)] xl:w-[40%] p-10">
        <Title
          title="Змінити пароль"
          type="title"
          className="text-purple-400"
        />
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
        <Button title="Змінити пароль" types="login" onClick={handleSubmit} />
      </form>
    </section>
  );
};

export default ChangePasswordForm;
