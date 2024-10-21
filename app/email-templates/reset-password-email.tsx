import React from "react";

interface ResetPasswordEmailTemplateProps {
  name: string;
  email: string;
  resetPasswordToken: string;
}

export const ResetPasswordEmailTemplate: React.FC<
  Readonly<ResetPasswordEmailTemplateProps>
> = ({ name, email, resetPasswordToken }) => {
  return (
    <div>
      <p>Вітаєм, {name} </p>
      <p>
        Для зміни паролю натисніть на посилання -
        <a href={`http://secondlife-fun-app.vercel.app/recovery?token=${resetPasswordToken}`}>
          клік
        </a>
      </p>
      <p>
        Якщо запит на відновлення паролю зробили не ви, проігноруйте це
        повідомлення
      </p>
    </div>
  );
};
