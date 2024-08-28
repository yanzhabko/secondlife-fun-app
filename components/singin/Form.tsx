"use client";
import { FC, useState } from "react";
import Input from "../Input";
import Link from "next/link";
import Button from "../Button";
import Title from "../Title";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface FormProps {}

const Form: FC<FormProps> = () => {
  const router = useRouter();
  const session = useSession();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  if (session?.status === "authenticated") {
    router.replace("/");
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email: info.email,
      password: info.password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Ви увійшли!");
      router.replace("/");
    } else if (login?.error) {
      toast.error("Сталась помилка!");
    }

    setLoading(false);
  };

  return (
    <form className=" mx-auto flex flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-lg w-[95%] sm:w-[calc(100%-20%)] md:w-[calc(100%-40%)] xl:w-[40%] p-10">
      <Title title="Авторизація" type="title" className="text-purple-400" />
      <Input
        label="Пошта"
        disabled={loading}
        value={info.email}
        name="email"
        onChange={(e) => handleInput(e)}
      />
      <Input
        label="Пароль"
        disabled={loading}
        value={info.password}
        name="password"
        onChange={(e) => handleInput(e)}
        type="password"
      />
      <Button title="Увійти" types="login" onClick={login} />
      <div className="flex gap-1">
        <Title title="Не маєш аккаунту?" type="text" />
        <Link
          href="/signup"
          className="text-blue-500 font-semibold text-1 hover:text-blue-700"
        >
          Регістрація
        </Link>
      </div>
    </form>
  );
};

export default Form;
