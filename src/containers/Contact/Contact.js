import React, { Component } from 'react';
import client from '../../services/clientManagement';
import GoogleMapReact from 'google-map-react';

import validate from '../../helpers/validate';

import './Contact.css';

const MapMarker = ({ icon, style }) =>
  <i className={`fa fa-${icon}`} style={style} />;

const mapConfig = {
  key: process.env.REACT_APP_GOOGLE_MAP_API_KEY
};

const defaultFormState = {
  fields: {
    name: {
      value: ''
    },
    email: {
      value: ''
    },
    subject: {
      value: ''
    },
    text: {
      value: ''
    }
  },
  errors: {
    name: '',
    value: '',
    subject: '',
    text: ''
  },
  sending: false,
  sent: false
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: defaultFormState
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyNav);
  }

  handleKeyNav = e => {
    const { history } = this.props;

    if (e.keyCode === 39) {
      history.push('/blog');
    }

    if (e.keyCode === 37) {
      history.push('/works');
    }
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyNav);
  }

  handleInputNameChange = e => {
    const value = e.target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        fields: {
          ...prevState.form.fields,
          name: {
            ...prevState.form.fields.name,
            value
          }
        }
      }
    }));
  };

  handleInputEmailChange = e => {
    const value = e.target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        fields: {
          ...prevState.form.fields,
          email: {
            ...prevState.form.fields.email,
            value
          }
        }
      }
    }));
  };

  handleInputSubjectChange = e => {
    const value = e.target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        fields: {
          ...prevState.form.fields,
          subject: {
            ...prevState.form.fields.subject,
            value
          }
        }
      }
    }));
  };

  handleInputTextChange = e => {
    const value = e.target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        fields: {
          ...prevState.form.fields,
          text: {
            ...prevState.form.fields.text,
            value
          }
        }
      }
    }));
  };

  validateForm = () => {
    const errors = {};

    errors.name = validate.required(this.state.form.fields.name.value);
    errors.email = validate.required(this.state.form.fields.email.value);
    errors.subject = validate.required(this.state.form.fields.subject.value);
    errors.message = validate.required(this.state.form.fields.subject.value);

    if (errors.email === undefined) {
      errors.email = validate.email(this.state.form.fields.email.value);
    }

    return errors;
  };

  anyError = err => {
    if (err.name || err.email || err.subject || err.message) {
      return true;
    }

    return false;
  };

  handleClick = () => {
    const errors = this.validateForm();
    if (this.anyError(errors)) {
      this.setState(prevState => ({
        form: { ...prevState.form, errors }
      }));

      return;
    }

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        sending: true
      }
    }));

    client
      .getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID)
      .then(space =>
        space.createEntry('mail', {
          fields: {
            from: {
              'en-US': this.state.form.fields.name.value
            },
            fromEmail: {
              'en-US': this.state.form.fields.email.value
            },
            subject: {
              'en-US': this.state.form.fields.subject.value
            },
            text: {
              'en-US': this.state.form.fields.text.value
            }
          }
        })
      )
      .then(entry => {
        this.setState(prevState => ({
          form: {
            ...defaultFormState,
            sent: true
          }
        }));
        entry.publish();
      })
      .catch(console.error);
  };

  render() {
    return (
      <div className="contact-outer">
        <div className="contact-container">
          <div className="contact-left animated fadeIn">
            <div className="page-title">Contact</div>
            <div className="contact-subtitle">
              Whether you want to invite me to work, giving feedbacks, or to
              have a nice little chit-chat.
            </div>
            <div className="form-container">
              <form action="">
                <div className="input-container">
                  <input
                    name="name"
                    className="form-input"
                    placeholder="Name"
                    type="text"
                    value={this.state.form.fields.name.value}
                    onChange={this.handleInputNameChange}
                  />
                  <span className="error-info">
                    {this.state.form.errors.name}
                  </span>
                </div>
                <div className="input-container">
                  <input
                    className="form-input"
                    placeholder="Email"
                    value={this.state.form.fields.email.value}
                    onChange={this.handleInputEmailChange}
                    type="text"
                  />
                  <span className="error-info">
                    {this.state.form.errors.email}
                  </span>
                </div>
                <div className="input-container">
                  <input
                    className="form-input"
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    value={this.state.form.fields.subject.value}
                    onChange={this.handleInputSubjectChange}
                  />
                  <span className="error-info">
                    {this.state.form.errors.subject}
                  </span>
                </div>
                <div className="input-container">
                  <textarea
                    className="form-input"
                    name="text"
                    id="text"
                    rows="7"
                    value={this.state.form.fields.text.value}
                    onChange={this.handleInputTextChange}
                    placeholder="Message"
                  />
                  <span className="error-info">
                    {this.state.form.errors.message}
                  </span>
                </div>
              </form>
              <button
                className={`contact-submit ${this.state.form.sending
                  ? 'sending'
                  : ''}`}
                disabled={this.state.form.sending}
                onClick={this.handleClick}
              >
                <i
                  className={`fa fa-spinner send-icon ${this.state.form.sending
                    ? 'i-sending'
                    : ''}`}
                />
                <span>
                  {this.state.form.sending ? ' Sending' : 'Send'}
                </span>
              </button>
              <span
                className={`sent-info ${this.state.form.sent ? '' : 'hidden'}`}
              >
                Success! I'll reply to your email address within 2 days.
              </span>
            </div>
          </div>
          <div className="contact-right animated fadeIn">
            <div className="map-container">
              <GoogleMapReact
                bootstrapURLKeys={mapConfig}
                defaultCenter={{ lat: -7.7708566, lng: 110.4141595 }}
                defaultZoom={9}
              >
                <MapMarker
                  style={{ fontSize: '25px', color: '#fd5872' }}
                  icon="map-marker"
                  lat={-7.7708566}
                  lng={110.4141595}
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
