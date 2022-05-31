
self.addEventListener('install',function(event){
    console.log('Service worker installed:',event);
    self.skipWaiting();
});

self.addEventListener('activate',function(event){
    console.log('Service worker activated:',event);
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch',function(){
    return;
    });