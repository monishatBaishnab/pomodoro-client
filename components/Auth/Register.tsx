import { FieldValues, SubmitHandler } from "react-hook-form";
import HForm from "../Form/HForm";
import HInput from "../Form/HInput";
import { Button } from "../ui/button";
import HFile from "../Form/HFile";

const Register = ({ setMode }: { setMode: (key: "login" | "register") => void }) => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <h4 className="text-center text-xl font-bold text-h-black">Register</h4>
        <p className="text-center text-athens-gray-600">
          Please register using account detail.
        </p>
      </div>
      <HForm onSubmit={handleSubmit}>
        <div className="space-y-4">
          <HInput placeholder="Email Address" name="email" />
          <HInput placeholder="Password" name="password" />
          <HFile name="profile" />

          <Button type="submit" className="w-full" size="lg">
            Register
          </Button>
          <div className="text-center text-athens-gray-600">
            <span>You have already an Account? </span>
            <span onClick={() => setMode("login")} className="text-rose-600 cursor-pointer">
              Login
            </span>
          </div>
        </div>
      </HForm>
    </div>
  );
};

export default Register;
