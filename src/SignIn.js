
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailSuggestions, setEmailSuggestions] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
    setEmailSuggestions(storedEmails);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Signed in with:', email, password);

    let updatedEmails = [...emailSuggestions];
    if (!updatedEmails.includes(email)) {
      updatedEmails.push(email);
      localStorage.setItem('emails', JSON.stringify(updatedEmails));
    }

    setPassword('');

    // ✅ Redirect to Home after sign-in
    navigate('/Home');
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Sign In</h2>
      <form style={{ maxWidth: '400px', margin: '0 auto' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            list="email-suggestions"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <datalist id="email-suggestions">
            {emailSuggestions.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
      </form>
    </div>
  );
}
