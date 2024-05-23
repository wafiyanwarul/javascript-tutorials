// INHERITANCE

// Superclass
class MailService {
  constructor (sender) {
    this.sender = sender
  }

  sendMessage (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`)
  }
}

// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage (message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver)
    }
  }
}

// Subclass
class EmailService extends MailService {
  sendDelayedMessage (message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver)
    }, delay)
  }
}

whatsappMsg = new EmailService('Zaky')
whatsappMsg.sendMessage('This is message', 'Doni')

const wa = new WhatsAppService('Wafiy')
wa.sendBroadcastMessage("Hello my friends, this is Wafiy's contact", [
  'Doni',
  'Rizal',
  'Rahman'
])

const eml = new EmailService('andikapratama5689@gmail.com')
eml.sendDelayedMessage(
  "Hello Brandon, how's your condition now? \nAre you okay?",
  'brandon@mailku.com',
  20
)

// >>>>>>> ("INHERITANCE WITHOUT ES6 CLASS") <<<<<<< 'more difficult'

function MailServices (sender) {
  this.sender = sender
}

MailServices.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`)
}

function WhatsAppServices (sender) {
  MailServices.call(this, sender)
}

// Prototype inheritance
WhatsAppServices.prototype = Object.create(MailServices.prototype)
WhatsAppServices.prototype.constructor = WhatsAppServices

WhatsAppServices.prototype.sendBroadcastMessage = function (
  message,
  receivers
) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver)
  }
}

function EmailServices (sender) {
  MailServices.call(this, sender)
}

// Prototype inheritance
EmailServices.prototype = Object.create(MailServices.prototype)
EmailServices.prototype.constructor = EmailServices

EmailServices.prototype.sendDelayedMessage = function (
  message,
  receiver,
  delay
) {
  setTimeout(() => {
    this.sendMessage(message, receiver)
  }, delay)
}

const whatsapp = new WhatsAppServices('+6281234567890')
const email = new EmailServices('dimas@dicoding.com')
whatsapp.sendMessage('Hello', '+6289876543210')
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890'])
email.sendMessage('Hello', 'john@doe.com')
email.sendDelayedMessage('Hello', 'john@doe.com', 3000)

// operator instance of

// operand1 instanceof operand2

// Penjelasannya:
/* operand1: merupakan objek yang ingin dites prototype-nya.
operand2: merupakan constructor function atau class. */

const whatsapps = new WhatsAppService('+6281234567890')

console.log(whatsapps instanceof WhatsAppService) // true
console.log(whatsapps instanceof EmailService) // false

const whatsapp1 = new WhatsAppService('+6281234567890')
const email1 = new EmailService('dimas@dicoding.com')

console.log(whatsapp1 instanceof WhatsAppService) // true
console.log(whatsapp1 instanceof EmailService) // false
console.log(whatsapp1 instanceof MailService) // true 

console.log(email1 instanceof EmailService) // true
console.log(email1 instanceof WhatsAppService) // false
console.log(email1 instanceof MailService) // true
