import { FieldValues, SubmitHandler } from "react-hook-form";
import HForm from "../Form/HForm";
import HInput from "../Form/HInput";
import { Button } from "../ui/button";

const Login = ({ setMode }: { setMode: (key: "login" | "register") => void }) => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <h4 className="text-center text-xl font-bold text-h-black">Login</h4>
        <p className="text-center text-athens-gray-600">
          Please login using account detail bellow.
        </p>
      </div>
      <HForm onSubmit={handleSubmit}>
        <div className="space-y-4">
          <HInput placeholder="Email Address" name="email" />
          <HInput placeholder="Password" name="password" />

          <Button type="submit" className="w-full" size="lg">
            Login
          </Button>
          <div className="text-center text-athens-gray-600">
            <span>Don&apos;t have an Account? </span>
            <span onClick={() => setMode("register")} className="text-rose-600 cursor-pointer">
              Create account
            </span>
          </div>
        </div>
      </HForm>
    </div>
  );
};

export default Login;
