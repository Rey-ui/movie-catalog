import { Field, Formik, Form, ErrorMessage, useField } from "formik";
import { useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import css from "./SearchForm.module.css";
import clsx from "clsx";
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
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={inicialValues}
      validationSchema={schema}
    >
      <Form className={css.searchForm}>
        <label className={css.searchLabel}>
          <span className={css.searchText}>Search Movie</span>
          <div className={css.searchInputCont}>
            <Field className={css.searchInput} type="text" name="query" />
            <ErrorMessage
              className={css.searchInputError}
              name="query"
              component="span"
            />
          </div>
        </label>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
