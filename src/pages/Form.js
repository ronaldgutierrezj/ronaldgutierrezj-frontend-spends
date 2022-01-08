import { useState } from "react";

const Form = ({ initialSpend, handleSubmit, buttonLabel, history }) => {
  
  const [formData, setFormData] = useState(initialSpend);


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmisson = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmisson}>
      <input
        list="concept"
        onChange={handleChange}
        value={formData.concept}
        name="concept"
      />
       <datalist id="concept">
          <option value="School"/>
          <option value="Salary"/>
          <option value="Groceries"/>
          <option value="Entertaiment"/>
          <option value="House"/>
          <option value="Health"/>
          <option value="Others"/>
          </datalist>
      
      <input
        type="number"
        onChange={handleChange}
        value={formData.amount}
        name="amount"
      />

      <input
        type="text"
        onChange={handleChange}
        value={formData.details}
        name="details"
      />

      <input
        type="date"
        onChange={handleChange}
        value={formData.date}
        name="date"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;