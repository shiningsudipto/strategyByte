"use client";
import Input from "@/components/form/Input";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";

type meetingForm = {
  name: string;
  email: string;
};

const MeetingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<meetingForm>();
  const onSubmit = (data: FieldValues) => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-10 w-[400px]">
        <div className="space-y-5 ">
          {/* Name */}
          <Input
            label="Name"
            type="text"
            placeholder="John Doe"
            register={register("name", {
              required: "Name is required",
            })}
            error={errors.name}
          />
          {/* Email */}
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email Address"
            register={register("email", { required: "Email is required" })}
            error={errors.email}
          />
        </div>
        <p className="text-neutral-700 text-sm my-10">
          By proceeding, you confirm that you have read and agree to{" "}
          <Link href={"#"} className="text-primary underline font-semibold">
            StrategyByte&apos;s Terms of Use
          </Link>{" "}
          and{" "}
          <Link href={"#"} className="text-primary underline font-semibold">
            Privacy Notice.
          </Link>
        </p>
        <button className="py-[10px] px-6 bg-blue-100 font-bold text-white rounded-full cursor-pointer">
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;
