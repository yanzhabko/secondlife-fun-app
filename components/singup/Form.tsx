"use client";
import { FC, useState } from "react";
import Input from "../Input";
import Link from "next/link";
import Button from "../Button";
import Title from "../Title";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface FormProps {}

const Form: FC<FormProps> = () => {
  const session = useSession();
  const [info, setInfo] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    firstName: "",
    secondName: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (session?.status === "authenticated") {
    router.push("/");
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const register = async () => {
    setLoading(true);
    try {
      if (info.password !== info.confirmedPassword) {
        toast.error("Паролі не співпадають!");
      } else {
        const name = `${info.firstName}_${info.secondName}`;
        await axios.post("/api/register", {
          name,
          email: info.email,
          password: info.password,
        });
        toast.success("Ви успішно зараєстровані!");
        router.push("/signin");
      }
    } catch (err: any) {
      toast.error(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mx-auto flex flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-lg w-[95%] sm:w-[calc(100%-20%)] md:w-[calc(100%-40%)] xl:w-[40%] p-10">
      <Title title="Регістрація" type="title" className="text-purple-400" />
      <Input
        label="Пошта"
        disabled={loading}
        value={info.email}
        onChange={(e) => handleInput(e)}
        name="email"
      />
      <Input
        label="Ім'я"
        disabled={loading}
        value={info.firstName}
        onChange={(e) => handleInput(e)}
        name="firstName"
      />
      <Input
        label="Прізвище"
        disabled={loading}
        value={info.secondName}
        onChange={(e) => handleInput(e)}
        name="secondName"
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
      <Button title="Регістрація" types="login" onClick={register} />
      <div className="flex gap-1">
        <Title title="Маєш аккаунт?" type="text" />
        <Link
          href="/singin"
          className="text-blue-500 font-semibold text-1 hover:text-blue-700"
        >
          Увійти
        </Link>
      </div>
    </form>
  );
};

export default Form;
