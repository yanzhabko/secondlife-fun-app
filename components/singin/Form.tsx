"use client";
import { FC, useState } from "react";
import Input from "../Input";
import Link from "next/link";
import Button from "../Button";
import Title from "../Title";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface FormProps {}

const Form: FC<FormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Ви увійшли!");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setLoading(false);
  };

  return (
    <form className="mx-auto flex flex-col gap-5 justify-center items-center bg-white rounded-md shadow-lg sm:w-3/4 lg:w-3/6 xl:w-2/6 p-10">
      <Title title="Авторизація" type="title" />
      <Input
        label="Пошта"
        disabled={loading}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Пароль"
        disabled={loading}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button title="Увійти" types="login" onClick={login} />
      <div className="flex gap-1">
        <Title title="Не маєш аккаунту?" type="text" />
        <Link
          href="/signup"
          className="text-blue-600 font-medium text-1 hover:text-blue-800"
        >
          Регістрація
        </Link>
      </div>
    </form>
  );
};

export default Form;
