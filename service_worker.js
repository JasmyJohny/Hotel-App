// const cacheAssets='version8'
// self.addEventListener('install',function(event){
//     console.log('Service worker installed:',event);
//     self.skipWaiting();

//     console.log('caches', caches);
//     event.waitUntil(
//     caches.open(cacheAssets)
//     .then(function (cache){
//        cache.addAll([
//         '/Hotel-App/',
//        '/Hotel-App/index.html',
//         '/Hotel-App/images/dinner.png',
//         '/Hotel-App/css/style.css',
//         '/Hotel-App/js/site.js',
//         '/Hotel-App/pages/add/index.html',
//         '/Hotel-App/pages/add/script.js',
//         '/Hotel-App/pages/add/style.css',
//         '/Hotel-App/pages/list/index.html',
//         '/Hotel-App/pages/list/script.js',
//         '/Hotel-App/pages/list/style.css',
//         '/Hotel-App/js/game-db.js',
      
//        ]);
       
//     })
    
//    );
// });

// self.addEventListener('activate',function(event){
//     console.log('Service worker activated:',event);
//      event.waitUntil(clients.claim());
//     event.waitUntil(
//         caches.keys()
//         .then(function (cacheNames)
//         {
//             console.log(cacheNames);
//             for(const cacheName of cacheNames)
//             {
//                 if(cacheName!==cacheAssets)
//                 {
//                     caches.delete(cacheName);
//                 }
               
//             }
//         })
//     )
// });




// self.addEventListener('fetch',function(event){
//    event.respondWith(caches.match(event.request)
//    .then(function (response)
//    {
//     return response||fetch(event.request)
//    }));

   
//     });


