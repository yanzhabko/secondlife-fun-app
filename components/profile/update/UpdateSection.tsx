import { FC } from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import UpdateUserForm from "./UpdateUserForm";

interface UpdateSectionProps {}

const UpdateSection: FC<UpdateSectionProps> = () => {
  return (
    <section className=" lg:flex-1 flex flex-col items-center gap-[50px]">
      <UpdateUserForm />
      <ChangePasswordForm />
    </section>
  );
};

export default UpdateSection;
