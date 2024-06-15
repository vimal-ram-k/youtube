import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Videouploader() {
  const videoRef = useRef<HTMLInputElement | null>(null);

  const [video, setVideo] = useState<File | null>(null);

  const uploadFileChunks = async (
    chunk: Blob,
    index: number,
    totalChunks: number
  ) => {
    if (video) {
      const formdata = new FormData();
      formdata.append("chunk", chunk);
      formdata.append("index", index.toString());
      formdata.append("totalchunk", totalChunks.toString());
      formdata.append("filename", video?.name);

      const response = await axios.post("http://localhost:3000", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File Uploaded");
    }
  };

  const uploadFile = () => {
    if (videoRef.current?.files) {
      setVideo(videoRef.current.files[0]);
    }

    if (video) {
      const chunkSize = 5 * 1024 * 1024;

      const totalChunks = Math.ceil(video?.size / chunkSize);

      for (let i = 0; i < totalChunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, video.size);
        const chunk = video.slice(start, end);

        uploadFileChunks(chunk, i, totalChunks);
      }
    }
  };

  useEffect(() => {
    const handleUpload = () => {
      if (videoRef.current) {
        videoRef.current.click();
      }
    };

    const upload_btn = document.getElementById("upload-btn");
    upload_btn?.addEventListener("click", handleUpload);

    return () => {
      upload_btn?.removeEventListener("click", handleUpload);
    };
  }, []);
  return (
    <div>
      <input type="file" name="" id="" ref={videoRef} hidden />
      <button id={"upload-btn"} className="">
        UPLOAD VIDEOS
      </button>
      <button onClick={uploadFile}>UPLOAD</button>
    </div>
  );
}

export default Videouploader;
