const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sql = require("mssql");

const app = express();
const port = 8086;

app.use(cors());
app.use(bodyParser.json());  


const config = {
    user: "root",
    password: "capodos99",
    server: "localhost",
    port: 8086,
    database: "gulliver_travels",
    options: {
        encrypt: true, 
        trustServerCertificate: true,
    },
};

sql.connect(config).then(pool => {
    console.log("[+] Correctly connected!");
    app.locals.pool = pool;
}).catch(error => {
    console.error("[!] Can't connect!", error);
});

app.get("/api/users", async (req, res) => {
    try {
        const pool = app.locals.pool;
        const result = await pool.request().query("SELECT * FROM [user]");  
        res.json(result.recordset);
    } catch(err) {
        res.status(500).json({ error: "[!] Fetching Users Error!" });
    }
});

app.get("/api/comments", async (req, res) => {  
    try {
        const pool = app.locals.pool;
        const result = await pool.request().query("SELECT * FROM [comment]"); 
        res.json(result.recordset);
    } catch(err) {
        res.status(500).json({ error: "[!] Fetching Comments Error!" });
    }
});

app.post("/api/users", async (req, res) => {
    const { user_nm } = req.body;
    try {
        const pool = app.locals.pool;
        await pool.request()
            .input('user_nm', sql.NVarChar, user_nm)
            .query("INSERT INTO [user] (user_nm) VALUES (@user_nm)");  
        res.status(201).json({ message: "User Added!" });
    } catch(err) {
        res.status(500).json({ error: "[!] Adding User Error!" });
    }
});

app.post("/api/comments", async (req, res) => {
    const { comm_ctx, comm_rid } = req.body;
    try {
        const pool = app.locals.pool;
        await pool.request()
            .input('comm_ctx', sql.NVarChar, comm_ctx)
            .input('comm_rid', sql.NVarChar, comm_rid)
            .query("INSERT INTO [comment] (comm_ctx, comm_rid) VALUES (@comm_ctx, @comm_rid)");  
        res.status(201).json({ message: "Comment Added!" });
    } catch(err) {
        res.status(500).json({ error: "[!] Adding Comment Error!" });
    }
});

app.listen(port, () => {
    console.log("[+] Server running at: http://localhost:8086");
});
