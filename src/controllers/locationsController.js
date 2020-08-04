const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM locations', (err, locations) => {
            if (err) {
                res.json(err);
            }
            console.log(locations)
            res.render('locations', {
                data: locations
            })
        })
    });
};

controller.save = (req, res) => {
    const data = req.body
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO locations set ?', [data], (err, locations) => {
            res.redirect('/');
        })
    })
}

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM locations WHERE id = ?', [id], (err, locations) => {
            res.redirect('/');
        })
    })
}

module.exports = controller;