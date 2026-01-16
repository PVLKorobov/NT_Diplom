import { useState } from "react";

import styles from "./DynamicForm.module";

const DynamicForm = ({ title, subtitle, fields, buttons }) => {
  const [fieldsValues, setFieldValues] = useState({});

  const changeFormFieldData = ({ fieldName, value }) => {
    if (fieldName !== null) {
    } else throw "Name of the changed field cannot be null.";
  };

  return <div className="form-contents"></div>;
};

export { DynamicForm };
