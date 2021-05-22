const express = require("express")

const app = express();

const PORT = process.env.PORT || 3001

// channels get request
app.get("/channels", (req, res) => {
    console.log('hello')
    res.send({
        success: true,
        data: [
            {
                id: 1,
                name: 'test',
            }

        ]
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
