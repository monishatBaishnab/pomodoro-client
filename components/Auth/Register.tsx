import { FieldValues, SubmitHandler } from "react-hook-form";
import HForm from "../Form/HForm";
import HInput from "../Form/HInput";
import { Button } from "../ui/button";
import HFile from "../Form/HFile";
import { registerUser } from "@/services/auth";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { Loader, MoveRight } from "lucide-react";

const Register = ({
  setMode,
  setOpen,
}: {
  setMode: (key: "login" | "register") => void;
  setOpen: (key: boolean) => void;
}) => {
  const { mutate, isLoading } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: FormData) => registerUser(data),
    onSuccess: (data) => {
      console.log(data);
      if (!data?.error) {
        toast.success("Register Success.");
        setOpen(false);
      } else {
        toast.error(data?.error?.message);
      }
    },
  });
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = { ...data };

    // Remove profilePhoto from the userData
    delete userData.profile;

    // Create FormData instance
    const formData = new FormData();

    formData.append("data", JSON.stringify(userData));

    if (data.profile) {
      formData.append("file", data.profile);
    }
    // Pass FormData to the mutate function
    mutate(formData);
  };

  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <h4 className="text-center text-xl font-bold text-h-black">Register</h4>
        <p className="text-center text-athens-gray-600">Please register using account detail.</p>
      </div>
      <HForm onSubmit={handleSubmit}>
        <div className="space-y-4">
          <HInput placeholder="Full Name" name="name" />
          <HInput placeholder="Email Address" name="email" />
          <HInput placeholder="Password" name="password" />
          <HFile name="profile" />

          <Button type="submit" className="w-full" size="lg">
            {isLoading ? <Loader className="animate-spin" /> :<MoveRight />} Register
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
