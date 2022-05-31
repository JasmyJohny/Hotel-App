
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('../service_worker.js',{scope: '/'})
    .then((registration) => {
        console.log('Success. Scope:', registration.scope);
        })
        .catch((error) => {
        console.log('Failed. Error:', error);
    });

}
else
{
    console.log('Service worker is not supported')
}

