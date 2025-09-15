import { transporter } from "../config/nodemailer";

interface IEmail {
  email: string;
  name: string;
  token: string;
}

export class AuthEmail {
  static sendConfirmationEmail = async (user: IEmail) => {
    const info = await transporter.sendMail({
      from: "Task <admin@task.com>",
      to: user.email,
      subject: "task confirm your account",
      text: "Confirm your account",
      html: `<p>Hello ${user.name} this email allow confirm your account</p>
      
      <p>Visit the next link</p>
      <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirm your account</a>
      <p>Enter the code here: <b>${user.token}</b></p>
      <p>This token expires in 10 minutes</p>
      
      `,
    });
    console.log("message sent", info.messageId);
  };

  static sendPasswordResetToken = async (user: IEmail) => {
    const info = await transporter.sendMail({
      from: "Task <admin@task.com>",
      to: user.email,
      subject: "task reset your password",
      text: "Reset your password",
      html: `<p>Hello ${user.name} you have requested to reset your password</p>
      
      <p>Visit the next link</p>
      <a href="${process.env.FRONTEND_URL}/auth/new-password">Reset your Password</a>
      <p>Enter the code here: <b>${user.token}</b></p>
      <p>This token expires in 10 minutes</p>
      
      `,
    });
    console.log("message sent", info.messageId);
  };
}
