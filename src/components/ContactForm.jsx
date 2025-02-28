import { useForm } from "../hooks/useForm";
import Loader from "./Loader";

const initialForm = { name: "", email: "", subject: "", msg: "" };
const validateForm = (f) => {
  let errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexComments = /^.{1,255}$/;

  if (!f.name.trim()) {
    errors.name = "El Nombre es obligatorio";
  } else if (!regexName.test(f.name.trim())) {
    errors.name = "El Nombre no es valido";
  }

  if (!f.email.trim()) {
    errors.email = "El mail es obligatorio";
  } else if (!regexEmail.test(f.email.trim())) {
    errors.email = "El email no es valido";
  }

  if (!f.subject.trim()) {
    errors.subject = "El asunto es obligatorio";
  }

  if (!f.msg.trim()) {
    errors.msg = "El mensaje es obligatorio";
  } else if (!regexComments.test(f.msg.trim())) {
    errors.msg = "El mensaje debe tener entre 1 y 255 caracteres";
  }

  return errors;
};

const ContactForm = () => {
  const { form, errors, loading, res, handleBlur, handleChange, handleSubmit } =
    useForm(initialForm, validateForm);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          //required
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          className={errors.name && "err"}
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          //required
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          className={errors.email && "err"}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          //required
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          className={errors.subject && "err"}
        />
        {errors.subject && <p>{errors.subject}</p>}

        <textarea
          name="msg"
          placeholder="Mensaje"
          //required
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.msg}
          className={errors.msg && "err"}
        ></textarea>
        <small className="chars">
          <span className={errors.msg && "red"}>{form.msg.length}</span>
          /255
        </small>
        {errors.msg && <p>{errors.msg}</p>}

        <br />
        {loading && <Loader />}

        {!res && !loading && <input type="submit" value="Enviar" />}

        {res && <>✅ Enviado</>}
      </form>
    </div>
  );
};

export default ContactForm;
