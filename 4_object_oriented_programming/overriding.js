// OVERRIDING

// 1_constructor overriding
class MailService {
  constructor (sender) {
    this.sender = sender
  }

  sendMessage (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`)
  }
}

class WhatsAppService extends MailService {
  // overriding constructor
  constructor (sender, isBusiness) {
    super(sender) // don't forget to call method 'super()'
    this.isBusiness = isBusiness
  }

  // Overriding method
  sendMessage (message, receiver) { // same method name but with the different content
    console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`)
  }
}

const whatsapp = new WhatsAppService('+6281234567890', true)

//overriding method ex
const mailService = new MailService('sender')
const whatsappService = new WhatsAppService('+6281234567890', true)

mailService.sendMessage('Hello, how are you today?', 'receiver')
whatsappService.sendMessage('Hi bro! Whats up!', '+6289876543210')
