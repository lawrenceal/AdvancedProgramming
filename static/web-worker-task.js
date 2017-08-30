self.onmessage = function(event){
    event.data.msg = 'from web worker task';

    //throw new Error('web worker error');

    self.postMessage(event.data);
};