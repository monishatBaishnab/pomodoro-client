/* eslint-disable react-hooks/exhaustive-deps */
import { FieldValues, SubmitHandler } from "react-hook-form";
import HForm from "../Form/HForm";
import HInput from "../Form/HInput";
import { Button } from "../ui/button";
import { Loader, MoveRight } from "lucide-react";
import { useLogInMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { login } from "@/redux/features/auth/auth.slice";

const Login = ({
  setMode,
  setOpen,
}: {
  setMode: (key: "login" | "register") => void;
  setOpen: (key: boolean) => void;
}) => {
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading, data, isSuccess }] = useLogInMutation();
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    // Pass FormData to the mutate function
    loginUser(data as FormData);
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      const user = jwtDecode(data.data.token);
      dispatch(login({ user, token: data.data.token }));
      setOpen(false);
    }
  }, [isSuccess, isLoading, data, dispatch]);
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <h4 className="text-center text-xl font-bold text-h-black">Login</h4>
        <p className="text-center text-athens-gray-600">
          Please login using account detail bellow.
        </p>
      </div>
      <HForm
        defaultValues={{
          email: "baishnabmonishat@gmail.com",
          password: 123,
        }}
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <HInput placeholder="Email Address" name="email" />
          <HInput placeholder="Password" name="password" />

          <Button type="submit" className="w-full" size="lg">
            {isLoading ? <Loader className="animate-spin" /> : <MoveRight />}Login
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
