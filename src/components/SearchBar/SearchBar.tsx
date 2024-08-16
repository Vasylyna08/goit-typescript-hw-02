import css from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';
import { notify } from '../services/toaster';

interface SearchFormValues {
  searchTerm: string;
}

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}

const initialValues: SearchFormValues = {
  searchTerm: '',
};

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (
    values: SearchFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (!values.searchTerm) {
      notify();
      return;
    }
    onSubmit(values.searchTerm);
    resetForm();
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
