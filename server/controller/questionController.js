export default function(router) {
    router.get('/question', (req, res) => {
        res.send('Hello Questions');
    });
}