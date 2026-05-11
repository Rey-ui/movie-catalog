import { Field, Formik, Form, ErrorMessage } from "formik";
import { useSearchParams } from "react-router-dom";
import * as Yup from "yup";
const schema = Yup.object().shape({
  query: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const SearchForm = ({ submit }) => {
  const [searchParam] = useSearchParams();
  const movieTitle = searchParam.get("query") ?? "";
  const inicialValues = {
    query: movieTitle,
  };
  const onSubmit = (values, actions) => {
    submit("query", values.query);
    //actions.resetForm();
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={inicialValues}
      validationSchema={schema}
    >
      <Form>
        <Field type="text" name="query" />
        <ErrorMessage name="query" component="span" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
