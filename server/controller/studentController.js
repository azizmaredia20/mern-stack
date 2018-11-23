export default function(router) {
    router.get('/student', (req, res) => {
        res.send('Hello Students');
    });
}