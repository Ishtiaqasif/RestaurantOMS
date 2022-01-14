
class HealthController {
    constructor(){}

    checkHealth(req, res) {
        return res.status(200).send({
            status: 'OK'
        });
    }
}


module.exports = HealthController;