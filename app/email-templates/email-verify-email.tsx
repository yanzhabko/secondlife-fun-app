import React from "react";

interface ResetPasswordEmailTemplateProps {
  email: string;
  emailVerificationToken: string;
}

export const ResetPasswordEmailTemplate: React.FC<
  Readonly<ResetPasswordEmailTemplateProps>
> = ({ email, emailVerificationToken }) => {
  return (
    <div>
      <h1>
        Змінити пароль <b>{email}</b>
      </h1>
      <p>Для зміни паролю натисніть на посилання</p>
      <a
        href={`http://secondlife-fun-app.vercel.app/verify-user?token=${emailVerificationToken}`}
      >
        Зміна паролю
      </a>
    </div>
  );
};
