import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const FormExample = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <>
      <h2>Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue={"test"} {...register("example")} />
        <input
          type="text"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export { FormExample };
