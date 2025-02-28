import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateForm(form);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      alert("ok");
      setLoading(true);

      helpHttp()
        .post("https://formsubmit.co/sistema.caja.unlz.2024@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((r) => {
          setLoading(false);
          setRes(r);
          setForm(initialForm);
        });
    }
  };

  const handleBlur = (e) => {
    //setErrors(validateForm(form));
  };

  return {
    form,
    errors,
    loading,
    res,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
