import React from 'react';
import './Form.css';

function Form() {
  return (
    <form
      action="http://192.168.253.187:8000/api/method/custom_app.api.create_lead"
      method="POST"
      className="form-container"
    >
      <div className="form-group">
        <label htmlFor="lead_name">Lead Name</label>
        <input type="text" id="lead_name" name="lead_name" required />
      </div>

      <div className="form-group">
        <label htmlFor="lead_email">Email Address</label>
        <input type="email" id="lead_email" name="lead_email" required />
      </div>

      <div className="form-group">
        <label htmlFor="company_name">Organization Name</label>
        <input type="text" id="company_name" name="company_name" required />
      </div>

      <div className="form-group">
        <label htmlFor="lead_mobile">Mobile</label>
        <input type="text" id="lead_mobile" name="lead_mobile" required />
      </div>

      <div className="form-group">
        <label htmlFor="lead_gender">Gender</label>
        <input type="text" id="lead_gender" name="lead_gender" required />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default Form;
