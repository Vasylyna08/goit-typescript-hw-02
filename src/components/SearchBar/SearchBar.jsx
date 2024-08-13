import css from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';
import { notify } from '../services/toaster.jsx';

const initialValues = {
  searchTerm: '',
};

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (!values.searchTerm) {
      notify();
      return;
    }
    onSubmit(values.searchTerm);
    actions.resetForm();
  };
  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="searchTerm"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
