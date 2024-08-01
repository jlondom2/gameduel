import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CiSearch } from "react-icons/ci";
import { useNavigate } from "@tanstack/react-router";
import useUIStore from "../../stores/ui.store";

type Inputs = {
  search: string;
};

const schema = yup
  .object({
    search: yup.string().required(),
  })
  .required();

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate({ to: `/search`, search: { q: data.search } });
  };

  return (
    <>
      <form className="sidebar-search-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="submit-input full blue">
          <input
            type="text"
            placeholder="Search articles here..."
            {...register("search", { required: true })}
          />
          <button type="submit" className="submit-input-button">
            <CiSearch className="search-icon small" />
          </button>
        </div>
        {errors.search && errors.search.type === "required" && (
          <div
            className="dark:bg-gray-800 mb-4 mt-2 rounded-lg bg-red-50 p-1 px-3 text-center text-sm text-red-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Field is Required</span>
          </div>
        )}
      </form>
    </>
  );
};
