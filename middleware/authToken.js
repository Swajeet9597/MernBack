
const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {
    try {
        // Get token from cookies or headers
        const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(400).json({
                msg: "User is not logged in",
                error: true,
                success: false
            });
        }

        
        // Verify JWT token
        jwt.verify(token, 'qwerddgfbgfjfghfgsdbgtre', (err, decoded) => {
            if (err) {
                console.error("JWT Error:", err);
                return res.status(403).json({ msg: "Invalid token", error: true });
            }

            // Attach user info to request object
            req.user = decoded._id;

            // Proceed to the next middleware
            next();
        });

    } catch (error) {
        console.error("Error in authToken:", error);
        res.status(500).json({
            msg: "Internal Server Error",
            error: true
        });
    }

    
};

module.exports = authToken;
