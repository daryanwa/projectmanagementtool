import React, { useEffect, useState } from "react";
import { LoginUser, RegisterUser } from "../../services/loginService";

function LoginComponentNew() {
  const [select, setSelect] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loginUser, setLoginUser] = useState<
    { email: string; password: string }[]
  >([]);

  const register = new RegisterUser(email, pass);

  const user = new LoginUser(email, pass, register);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (select === "login") {
      try {
        const response = await user.validateUser(email, pass);

        console.log("Login Succesful", response);
      } catch (error) {
        console.log("Login failed", error);
      }
    } else {
      try {
        const response = await register.register(email, pass);
        console.log("Register success", response);
      } catch (error) {
        console.log("SignUp failed", error);
      }
    }
  };

  useEffect(() => {
    setEmail("");
    setPass("");
  }, [select]);

  return (
    <div className="bg-background min-h-screen flex justify-center">
      <div className="flex w-full max-w-md  md:min-h-48  max-h-96 p-8  relative  bg-gradient-to-t from-blue-200 from-10% to-primary to-100%   rounded-lg  flex-grow-1 shadow-md mt-4 border-1 border-gray-100  ">
        <div className=" w-full ">
          <div className="flex justify-between ">
            <button
              onClick={() => setSelect("login")}
              className={`ml-28 max-md:ml-[1rem] font-semibold  text-xl ${
                select === "login"
                  ? "underline underline-offset-8 decoration-amber-400 text-slate-100"
                  : "text-black"
              }`}>
              Login
            </button>
            <button
              onClick={() => setSelect("signup")}
              className={`mr-28 max-md:mr-[1rem] font-semibold text-xl ${
                select === "signup"
                  ? "underline underline-offset-8 decoration-amber-400 text-slate-100"
                  : "text-black"
              }`}>
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col ">
            <div className="mt-4">
              <div className=" relative flex flex-col text-lg font-normal">
                <label className="block">Email</label>
                <input
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
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="p-[calc(0.5em-1px)_calc(0.75em-1px)] text-lg h-[45px] bg-surface outline-none rounded shadow-sm"
                />
              </div>
            </div>
            <button className=" min-h-auto mt-4 mb-8 items-start flex w-32 hover:text-primary font-semibold ">
              {select === "login" ? <p>Forgot Password?</p> : <p></p>}
            </button>
            <button
              type="submit"
              className="bg-secondary h-10 rounded hover:bg-slate-400 hover:shadow-sm font-bold shadow-md hover:bg-gradient-to-t  hover:from-white hover:to-slate-100">
              {select === "login" ? <p>Login</p> : <p>Sign Up</p>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponentNew;
