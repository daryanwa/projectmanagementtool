import React from "react";

interface AuthFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSignUp: (event: React.FormEvent) => void;
  handleSignIn: (event: React.FormEvent) => void;
  error: string | null;
  select: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSignUp,
  handleSignIn,
  error,
  select,
}) => {
  return (
    <form className="flex flex-col ">
      <div className="mt-4">
        <div className=" relative flex flex-col text-lg font-normal">
          <label className="block">Email</label>
          <input
            required
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="example@mail.com"
            className="  p-[calc(0.5em-1px)_calc(0.75em-1px)] text-lg h-[45px] bg-surface  outline-none rounded shadow-sm "
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="relative flex flex-col text-lg font-normal">
          <label>Password</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter your password"
            className="p-[calc(0.5em-1px)_calc(0.75em-1px)] text-lg h-[45px] bg-surface outline-none rounded shadow-sm"
          />
        </div>
      </div>
      <button className=" min-h-auto min-w-40 mt-4 mb-6 items-start flex w-32 hover:text-primary font-semibold ">
        {select === "login" ? <p>Forgot Password?</p> : <p></p>}
      </button>

      {select === "login" ? (
        <button
          onClick={handleSignIn}
          type="submit"
          className="bg-secondary h-10 rounded hover:bg-slate-400 hover:shadow-sm font-bold shadow-md hover:bg-gradient-to-t  hover:from-white hover:to-slate-100"
        >
          Login{" "}
        </button>
      ) : (
        <button
          onClick={handleSignUp}
          type="submit"
          className="bg-secondary h-10 rounded hover:bg-slate-400 hover:shadow-sm font-bold shadow-md hover:bg-gradient-to-t  hover:from-white hover:to-slate-100"
        >
          SignUp{" "}
        </button>
      )}
    </form>
  );
};

export default AuthForm;
