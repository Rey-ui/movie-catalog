import { Field, Formik, Form } from "formik";

const SearchForm = ({ submit }) => {
  const inicialValues = {
    query: "",
  };
  const onSubmit = (values, actions) => {
    submit(values.query ?? "");
    actions.resetForm();
  };
  return (
    <Formik onSubmit={onSubmit} initialValues={inicialValues}>
      <Form>
        <Field type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
