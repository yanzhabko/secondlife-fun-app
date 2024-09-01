"use client";
import Title from "@/components/Title";
import Input from "@/components/Input";
import { FC, useState } from "react";
import { resendPassword } from "@/app/action/user/reset-password";
import toast from "react-hot-toast";
import Button from "@/components/Button";

interface FormProps {}

const ResetPasswordForm: FC<FormProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const massages = await resendPassword(email);
    toast.success(massages);

    setLoading(false);
  };
  return (
    <form className="mx-auto flex flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-lg w-[95%] sm:w-[calc(100%-20%)] md:w-[calc(100%-40%)] xl:w-[40%] p-10">
      <Title
        title="Відновлення паролю"
        type="title"
        className="text-purple-400"
      />
      <Input
        label="Пошта"
        value={email}
        name="email"
        disabled={loading}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <Button types="login" title="Відправити" onClick={handleSubmit} />
    </form>
  );
};

export default ResetPasswordForm;
