
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('../service_worker.js',{scope: '/Food-App/'})
    .then((registration) => {
        console.log('Success. Scope:', registration.scope);
        })
        .catch((error) => {
        console.log('Failed. Error:', error);
    });

}

