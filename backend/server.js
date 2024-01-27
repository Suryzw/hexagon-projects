
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'hexagon_web'
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Perform authentication logic, e.g., check credentials in the database
    const sql = `SELECT * FROM db_user_hexagon WHERE email = ? AND password = ?`;
    db.query(sql, [email, password], (err, data) => {
        if (err) return res.json(err);

        if (data.length > 0) {
            // User authenticated
            return res.json({ 
                success: true, 
                message: 'Login Sukses',
                userData: {
                    userId: data[0].id_user,
                    userPass: data[0].password,
                    userName: data[0].nama,
                    userEmail: data[0].email,
                    userTelp: data[0].telp
            }});
        } else {
            // Invalid credentials
            return res.json({ success: false, message: 'Login Gagal' });
        }
    });
});

app.post('/register', (req, res) => {
    const { password, firstName,lastName, email, phoneNumber,confirmPassword } = req.body;

    // Check if the user with the provided email already exists
    const checkUserSql = 'SELECT * FROM db_user_hexagon WHERE email = ?';
    db.query(checkUserSql, [email], (checkErr, checkData) => {
        if (checkErr) return res.json(checkErr);

        if (checkData.length > 0) {
            // User with the given email already exists
            return res.json({ success: false, message: 'Email sudah terdaftar' });
        } else {
            // Insert the new user into the database
            const insertUserSql = 'INSERT INTO db_user_hexagon (password, nama, email, telp) VALUES (?, ?, ?, ?)';
            db.query(insertUserSql, [password,firstName+' '+lastName,email,phoneNumber], (insertErr, insertResult) => {
                if (insertErr) return res.json(insertErr);

                // User successfully registered
                return res.json({ success: true, message: 'Registrasi Sukses' });
            });
        }
    });
});

app.post('/submitRecruitment', (req, res) => {
    const formData = req.body;
    // Perform logic to save recruitment data to the database
    const insertRecruitmentSql = 'INSERT INTO db_recruitment (id_peserta, id_user,id_ptpln, nama, email, pendidikan, pengalaman, skill, alasan, telp, tujuan, tanggal, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(insertRecruitmentSql, [
        formData.id_peserta,
        formData.id_user,
        formData.id_ptpln,
        formData.nama,
        formData.email,
        formData.pendidikan,
        formData.pengalaman,
        formData.skill,
        formData.alasan,
        formData.telp,
        formData.tujuan,
        formData.tanggal,
        formData.status,
    ], (insertErr, insertResult) => {
        if (insertErr) return res.json({ success: false, message: 'Error submitting recruitment form' });

        // Recruitment form successfully submitted
        return res.json({ success: true, message: 'Recruitment form submitted successfully' });
    });
});

app.get('/perusahaan/:status', (req, res) => {
    const status = req.params.status;

    const sql = 'SELECT * FROM db_ptpln WHERE status = ?';
    db.query(sql,[status], (err, data) => {
        if (err) {
            console.error("Error checking user registration:", err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.get('/check-registration/:userId', (req, res) => {
    const userId = req.params.userId;

    const checkRegistrationSql = 'SELECT * FROM db_recruitment WHERE id_user = ?';
    db.query(checkRegistrationSql,[userId], (err, data) => {
        if (err) {
            console.error("Error checking user registration:", err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
            // User is not registered
    });
});

app.get('/admin/db_user_hexagon', (req, res) => {

    const sql = 'SELECT * FROM db_user_hexagon where id_user != 1';
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error checking user registration:", err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
            // User is not registered
    });
});

app.get('/admin/db_recruitment', (req, res) => {

    const sql = 'SELECT * FROM db_recruitment';
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error checking user registration:", err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.get('/admin/db_ptpln', (req, res) => {

    const sql = 'SELECT * FROM db_ptpln';
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error checking user registration:", err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.delete('/admin/db_user_hexagon/:userId', (req,res) => {
    const userId = req.params.userId;

    const sql = 'DELETE FROM db_user_hexagon WHERE id_user = ?';
    db.query(sql,[userId], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.delete('/admin/db_recruitment/:idPeserta', (req,res) => {
    const idPeserta = req.params.idPeserta;

    const sql = 'DELETE FROM db_recruitment WHERE id_peserta = ?';
    db.query(sql,[idPeserta], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.put('/admin/db_recruitment/:idPeserta/:status', (req,res) => {
    const idPeserta = req.params.idPeserta;
    const status = req.params.status;
    if(status === 'hold'){
            const sql = 'UPDATE db_recruitment SET status = ? WHERE id_peserta = ?';
            db.query(sql,['pass',idPeserta], (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(data);
        });
    }
    else if(status === 'pass'){
        const sql = 'UPDATE db_recruitment SET status = ? WHERE id_peserta = ?';
        db.query(sql,['hold',idPeserta,], (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(data);
        });
    }   
});

app.put('/admin/db_ptpln/:idPTPLN/:status', (req,res) => {
    const idPTPLN = req.params.idPTPLN;
    const status = req.params.status;
    if(status === 'tersedia'){
            const sql = 'UPDATE db_ptpln SET status = ? WHERE id_ptpln = ?';
            db.query(sql,['tutup',idPTPLN], (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(data);
        });
    }
    else if(status === 'tutup'){
        const sql = 'UPDATE db_ptpln SET status = ? WHERE id_ptpln = ?';
        db.query(sql,['tersedia',idPTPLN], (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(data);
        });
    }   
});

app.listen(8081,()=>{
    console.log("listening")
})