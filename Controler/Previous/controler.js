const jwt = require('jsonwebtoken');

const prevFunc = (req, res) => {
    try {
        const { user } = req.cookies;

        if (user) {
            var aptitude_data;
            var technical_data;
            var geography_data;
            var pol_his_data;

            var result = [];

            if (req.cookies["aptitude"] != undefined) {
                jwt.verify(req.cookies["aptitude"], process.env.SECRET_KEY, (err, decoded) => {
                    if (err) {
                        throw Error('Failed to authenticate token')
                    } else {
                        aptitude_data = decoded;
                        result.push({
                            pre_data: aptitude_data,
                            pre_data_token: req.cookies["aptitude"]
                        });
                    }
                });
            }
            if (req.cookies["technical"] != undefined) {
                jwt.verify(req.cookies["technical"], process.env.SECRET_KEY, (err, decoded) => {
                    if (err) {
                        throw Error('Failed to authenticate token')
                    } else {
                        technical_data = decoded;
                        result.push({
                            pre_data: technical_data,
                            pre_data_token: req.cookies["technical"]
                        });
                    }
                });
            }
            if (req.cookies["geography"] != undefined) {
                jwt.verify(req.cookies["geography"], process.env.SECRET_KEY, (err, decoded) => {
                    if (err) {
                        throw Error('Failed to authenticate token')
                    } else {
                        geography_data = decoded;
                        result.push({
                            pre_data: geography_data,
                            pre_data_token: req.cookies["geography"]
                        });
                    }
                });
            }
            if (req.cookies["political and history"] != undefined) {
                jwt.verify(req.cookies["political and history"], process.env.SECRET_KEY, (err, decoded) => {
                    if (err) {
                        throw Error('Failed to authenticate token')
                    } else {
                        pol_his_data = decoded;
                        result.push({
                            pre_data: pol_his_data,
                            pre_data_token: req.cookies["political and history"]
                        });
                    }
                });
            }

            res.render("previous", {
                data: result
            });
        } else {
            throw Error("Authentication failed");
        }

    } catch (error) {
        res.render("error", {
            msg: error.message
        })
    }
}

module.exports = { prevFunc };
