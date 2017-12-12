var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('img', {src: 'http://logosrated.net/wp-content/uploads/parser/React-Logo-1.png', className:'logo'},),
        React.createElement('h1', {className: 'header'}, "Exercise App"),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
          className: 'first-name',
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
          className: 'last-name',
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
          className: 'email',
        }),
        React.createElement('button', {type: 'submit', className: 'btn'}, "Add Contact")
      )
    )
  },
})