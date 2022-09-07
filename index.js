const express = require("express")
const cookieSesion= require("cookie-session")
const passportSetup = require("./passport")
const passport = require("passport")
const authRoute = require("./routes/auth");
const app = express()


app.use(
    cookieSesion({
        name:"sesion",
        keys:["baru"],
        maxAge: 24 * 60 * 60 * 100
    })
)

// app.use(
//     cors({
//       origin: "http://localhost:3000",
//       methods: "GET,POST,PUT,DELETE",
//       credentials: true,
//     })
//   );

app.use(passport.initialize());
app.use(passport.session())



app.use("/auth", authRoute);

app.listen("5000", ()=> {
    console.log("Server Is Running")
})