const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: "YOUR_CLOUD_NAME",
    api_key: "YOUR_API_KEY",
    api_secret: "YOUR_API_SECRET"
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "blogify", // folder name on Cloudinary
        allowed_formats: ["jpg", "jpeg", "png"],
        public_id: (req, file) => `${Date.now()}-${file.originalname}`
    }
});

module.exports = {
    cloudinary,
    storage
};
