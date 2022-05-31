
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('../Hotel-App/service_worker.js',{scope: '/Hotel-App/'})
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

