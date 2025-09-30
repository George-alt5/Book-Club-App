import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { createBook, updateBook, getBook } from "../api";
import '../App.css';

function BookForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({ title: "", author: "", pages: "" });

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    pages: Yup.number()
      .typeError("Pages must be a number")
      .positive("Pages must be positive")
      .integer("Pages must be an integer")
      .required("Pages are required"),
  });

  useEffect(() => {
    if (id) getBook(id).then((data) => setInitialValues(data));
  }, [id]);

  const handleSubmit = (values) => {
    if (id) {
      updateBook(id, values).then(() => navigate("/books"));
    } else {
      createBook(values).then(() => navigate("/books"));
    }
  };

  return (
    <div>
      <h1 className="page-title">{id ? "Edit Book" : "Add New Book"}</h1>
      <Formik enableReinitialize initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Title:</label>
            <Field name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label>Author:</label>
            <Field name="author" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label>Pages:</label>
            <Field name="pages" />
            <ErrorMessage name="pages" component="div" />
          </div>
          <button type="submit">{id ? "Update Book" : "Add Book"}</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BookForm;
