import React from "react";

interface ResetPasswordEmailTemplateProps {
  email: string;
  resetPasswordToken: string;
}

export const ResetPasswordEmailTemplate: React.FC<
  Readonly<ResetPasswordEmailTemplateProps>
> = ({ email, resetPasswordToken }) => {
  return (
    <div>
      <h1>
        Змінити пароль <b>{email}</b>
      </h1>
      <p>Для зміни паролю натисніть на посилання</p>
      <a
        href={`http://localhost:3000/reset-password?token=${resetPasswordToken}`}
      >
        Зміна паролю
      </a>
    </div>
  );
};
