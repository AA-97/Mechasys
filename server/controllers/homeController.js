const userdb = require('../database/user');

exports.getHome = async (req, res) => {
    try {
      const user = await userdb.getUser(1);

        return res.status(200).json({
          success: true,
          user: user,
        })
        
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }
  };