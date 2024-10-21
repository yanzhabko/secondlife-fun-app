type VerifyEmailEmailTemplateProps = {
  email: string;
  emailVerificationToken: string;
};

export const VerifyEmailEmailTemplate: React.FC<
  VerifyEmailEmailTemplateProps
> = ({ email, emailVerificationToken }) => {
  return (
    <div>
      <p>Dear user,</p>
      <p>Please verify your email address by clicking on the link below:</p>
      <a
        href={`http://secondlife-fun-app.vercel.app/verify-email?token=${emailVerificationToken}`}
      >
        Verify Email
      </a>
      <p>Thank you!</p>
    </div>
  );
};
