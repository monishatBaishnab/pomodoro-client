import { FieldValues, SubmitHandler } from "react-hook-form";
import HForm from "../Form/HForm";
import HInput from "../Form/HInput";
import { Button } from "../ui/button";
import { loginUser } from "@/services/auth";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { Loader, MoveRight } from "lucide-react";

const Login = ({
  setMode,
  setOpen,
}: {
  setMode: (key: "login" | "register") => void;
  setOpen: (key: boolean) => void;
}) => {
  const { mutate, isLoading } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: FormData) => loginUser(data),
    onSuccess: (data) => {
      console.log(data);
      if (!data?.error) {
        toast.success("Login Success.");
        setOpen(false);
      } else {
        toast.error(data?.error?.message);
      }
    },
  });
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    // Pass FormData to the mutate function
    mutate(data as FormData);
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
