"use client";
import { FC, useState } from "react";
import Link from "next/link";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { singUp } from "@/app/action/user/singup";

interface SignUpFormProps {}

const SignUpForm: FC<SignUpFormProps> = () => {
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
    if (info.password !== info.confirmedPassword) {
      toast.error("Паролі не співпадають!");
    }
    const name = `${info.firstName}_${info.secondName}`;
    const massage = await singUp(name, info.email, info.password);
    router.push("/signin");
    toast.success(massage);
    setLoading(false);
  };

  return (
    <section className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-230px)]  flex flex-col justify-center items-center">
      <form className="mx-auto flex flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-lg w-[95%] sm:w-[calc(100%-20%)] md:w-[calc(100%-40%)] xl:w-[40%] p-10">
        <Title title="Реєстрація" type="title" className="text-purple-400" />
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
    </section>
  );
};

export default SignUpForm;
