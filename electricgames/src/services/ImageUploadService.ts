import axios from "axios";

/**
 * ImageUploadService
 * Lager en service for å laste opp bilde.
 */
const ImageUploadService = (() => {
  const imageUploadEndpoint = "https://localhost:7259/ImageUpload";

  const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);

    const result = await axios({
      url: imageUploadEndpoint,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return null;
    }
  };

  return {
    uploadImage,
  };
})();

export default ImageUploadService;
