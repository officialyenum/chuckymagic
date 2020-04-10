/* eslint-disable */
const Joi = require('joi')//framework for validation
module.exports = {
    register (req, res, next) {
        const schema = {
            username: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$')
                ),
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
                )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'username':
                    res.status(400).send({
                        error: `The username failed to match the following rules
                        <br>
                        1. lowercase, uppercase and numbers can be used
                        <br>
                        2. _ and - are the only symbols allowed
                        <br>
                        3. username cannot be ended with symbols
                        `
                    })
                    break;
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email'
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error: `The password failed to match the following rules
                        <br>
                        1. lowercase, uppercase and numerics can be used
                        <br>
                        2. not less than 8 characters in length and not greater than 32
                        `
                    })
                    break;
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
                    break;
            }
        } else {
            next()
        }
    }
}