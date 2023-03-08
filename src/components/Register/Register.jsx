import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="Contact" id="register">
        <h2 style={{ marginTop: '2em', textAlign: 'center' }}>
          Înscrie-te completând formularul de mai jos!
        </h2>

        <div className="form-container">
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="row">
              <input type="text" placeholder="Nume*" name="surname" className="text-input" />
              <input type="text" placeholder="Prenume*" name="name" className="text-input" />
            </div>

            <div className="row">
              <input type="number" placeholder="Vârstă*" min="14" max="18" className="text-input" />
              <input type="phone" placeholder="Telefon*" className="text-input" />
            </div>

            <input type="email" placeholder="E-mail*" className="text-input long" />
            <h3 style={{ marginTop: '2em', marginBottom: '2em', fontWeight: '400', lineHeight: '1.3' }}>
              De ce dorești să participi la eveniment?
            </h3>

            <input type="radio" id="for-fun" name="purpose" value="for-fun" />
            <label for="for-fun">Just for fun</label>
            <br />
            <br />

            <input type="radio" id="soulmate-seeking" name="purpose" value="soulmate-seeking" />
            <label for="soulmate-seeking">Soulmate seeking</label>
            <br />
            <br />

            <input type="radio" id="bro/sis-seeking" name="purpose" value="bro/sis-seeking" />
            <label for="bro/sis-seeking">Bro/sis seeking</label>
            <br />

            <button type="submit" className="submit-button">
              Trimite
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
