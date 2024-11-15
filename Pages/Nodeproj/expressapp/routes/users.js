const express = require('express')
const router = express.Router()
const connection = require('../db')

router.get('/', (req, res) => {
    connection.query('select * from users', (err, result) => {
        if (err) throw console.err;
        res.send(result)
    })
})

router.post('/userdata', (req, res) => {
    const {name,email} = req.body
    console.log(name,email)
    connection.query('insert into users (name,email) values(?,?)',[name,email], (err, result) => {
        if (err) throw console.err;
        res.send(result)
    })
})

// Update user endpoint
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;

    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    const values = [name, email, userId];

    connection.query(query, values, (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'An error occurred while updating the user' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User updated successfully' });
    });
});

module.exports = router;
