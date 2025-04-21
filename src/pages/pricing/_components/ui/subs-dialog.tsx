import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema } from "@/schemas/sign-up";
import { z } from "zod";
import { useState } from "react";
import { SignUp } from "@/services/sign-up";

function SubsDialog({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userFormSchema),
    defaultValues:{
        first_name:"",
        last_name:"",
        email:"",
        mobile_number:""
    }
  });

  console.log(errors);

  const onSubmit = async (val: z.infer<typeof userFormSchema>) => {
    setLoader(true);
    const data = {
      ...val,
      package_id: id,
    };
    const res = await SignUp(data);
    if (res) {
      window.location.href = res.data.checkout_session_url;
      setLoader(false);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          <button className="border bg-black text-white hover:bg-white hover:text-black transition-all ease-linear w-full p-2 rounded-full">
            Subscribe
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogDescription className="capitalize">
              Sign Up to get package
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="first_name" className="text-right">
                  First Name
                </Label>
                <div className="col-span-3">
                  <Input id="first_name" {...register("first_name")} />
                  {errors.first_name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="last_name" className="text-right">
                  Last Name
                </Label>
                <div className="col-span-3">
                  <Input id="last_name" {...register("last_name")} />
                  {errors.last_name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <div className="col-span-3">
                  <Input id="email" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mobile_number" className="text-right">
                  Mobile Number
                </Label>
                <div className="col-span-3">
                  <Input id="mobile_number" {...register("mobile_number")} />
                  {errors.mobile_number && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.mobile_number.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="text-white w-full"
              disabled={loader}
            >
              {loader ? "Loading..." : " Submit "}
            </Button>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default SubsDialog;
