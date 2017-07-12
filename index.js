const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs');
const path = require('path');

const emptyMessage = new Message();
const emptyPhotoMessage = new ImageMessage();

console.log(emptyMessage);
console.log(emptyPhotoMessage);

class MessagesService {

  constructor() {
    let resolvePromise;
    let rejectPromise;
    const filePath = path.join(__dirname, 'messages.json');
    this.messagePromise = new Promise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        rejectPromise(err);
      } else {
        const dataArray = JSON.parse(data);
        const dataObj = dataArray
                          .map(item => new Message(item.text, item.created));
        resolvePromise(dataObj);
      }
    });
  }

  get messages() {
    return this.messagePromise;
  }
}

const messageService = new MessagesService();
messageService.messages.then((messages) => {
  console.log(messages);
}).catch((err) => {
  console.log(err);
});
