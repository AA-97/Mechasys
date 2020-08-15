exports.getHome = async (req, res) => {
    try {
        return res.status(200).json({
          success: true,
          message: "hello",
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }
  };