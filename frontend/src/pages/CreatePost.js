import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("it worked");
    });
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field id="createPost" name="title" placeholder="(ex title)" />
          <label>postText:</label>
          <ErrorMessage name="postText" component="span" />
          <Field id="createPost" name="postText" placeholder="(ex postText)" />
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field id="createPost" name="username" placeholder="(ex username)" />
          <button type="submit">createPost</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
