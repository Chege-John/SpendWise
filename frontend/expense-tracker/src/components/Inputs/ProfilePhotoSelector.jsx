import React, { useRef } from "react";

const ProfilePhotoSelector = ({ image, setimage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update the image state
      setimage(file);

      // Generate preview URL from the file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setimage(null);
    setPreviewUrl(null);
  };

  return <div>ProfilePhotoSelector</div>;
};

export default ProfilePhotoSelector;
