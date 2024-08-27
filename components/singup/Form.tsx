"use client";
import { FC, useState, useEffect } from "react";
import Input from "../Input";
import Link from "next/link";
import Button from "../Button";
import Title from "../Title";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface FormProps {}

const Form: FC<FormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const register = async () => {
    setLoading(true);
    try {
      const name = `${firstName}_${secondName}`;
      await axios.post("/api/register", {
        name,
        email,
        password,
      });

      toast.success("Ви успішно зараєстровані!");
      router.push("/singin");
    } catch (err: any) {
      toast.error(err?.response?.data);
    } finally {
      setLoading(false);
    }
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
        label="Ім'я"
        disabled={loading}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        label="Прізвище"
        disabled={loading}
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <Input
        label="Пароль"
        disabled={loading}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Input
        label="Повторіть пароль"
        disabled={loading}
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)}
        type="password"
      />
      <Button title="Регістрація" types="login" onClick={register} />
      <div className="flex gap-1">
        <Title title="Маєш аккаунт?" type="text" />
        <Link
          href="/signin"
          className="text-blue-600 font-medium text-1 hover:text-blue-800"
        >
          Увійти
        </Link>
      </div>
    </form>
  );
};

export default Form;
