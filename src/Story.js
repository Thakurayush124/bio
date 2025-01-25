import React, { useState, useRef } from 'react';
import { Camera, Heart, MessageCircle, User, Upload } from 'lucide-react';


const initialPosts = [
  {
    id: 1,
    username: 'Forest_Guardians',
    image: 'post1.jpg',
    caption: 'Tree planting day in Amazon rainforest! 🌳',
    likes: 258,
    tags: ['#Reforestation', '#ClimateAction', '#TreePlanting']
  },
  {
    id: 2,
    username: 'Wildlife_Rescue',
    image: 'post2.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 3,
    username: 'Wildlife_Rescue',
    image: 'post3.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 4,
    username: 'Wildlife_Rescue',
    image: 'post4.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 5,
    username: 'Wildlife_Rescue',
    image: 'post5.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 6,
    username: 'Wildlife_Rescue',
    image: 'post6.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 7,
    username: 'Wildlife_Rescue',
    image: 'post7.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 8,
    username: 'Wildlife_Rescue',
    image: 'post8.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 9,
    username: 'Wildlife_Rescue',
    image: 'post9.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 10,
    username: 'Wildlife_Rescue',
    image: 'post10.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 11,
    username: 'Wildlife_Rescue',
    image: 'post11.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 12,
    username: 'Wildlife_Rescue',
    image: 'post12.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 13,
    username: 'Wildlife_Rescue',
    image: 'post13.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 14,
    username: 'Wildlife_Rescue',
    image: 'post14.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 15,
    username: 'Wildlife_Rescue',
    image: 'post15.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 16,
    username: 'Wildlife_Rescue',
    image: 'post16.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 17,
    username: 'Wildlife_Rescue',
    image: 'post17.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 18,
    username: 'Wildlife_Rescue',
    image: 'post18.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 19,
    username: 'Wildlife_Rescue',
    image: 'post19.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 20,
    username: 'Wildlife_Rescue',
    image: 'post20.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
  {
    id: 21,
    username: 'Wildlife_Rescue',
    image: 'post21.jpg',
    caption: 'Rescued baby elephant reunited with herd! 🐘',
    likes: 412,
    tags: ['#WildlifeConservation', '#AnimalRescue']
  },
 
];

const EcoSocialApp = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({ caption: '', tags: '', image: null });
  const [cameraOptions, setCameraOptions] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handlePostUpload = () => {
    if (newPost.caption && newPost.image) {
      const uploadedPost = {
        id: posts.length + 1,
        username: 'Current_User',
        image: typeof newPost.image === 'string' ? newPost.image : URL.createObjectURL(newPost.image),
        caption: newPost.caption,
        likes: 0,
        tags: newPost.tags.split(',').map(tag => `#${tag.trim()}`)
      };
      setPosts([uploadedPost, ...posts]);
      setNewPost({ caption: '', tags: '', image: null });
      setCameraOptions(false);
    }
  };

  const handleFileSelect = (e) => {
    setNewPost({...newPost, image: e.target.files[0]});
    setCameraOptions(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 400, 400);
    const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
    
    setNewPost({...newPost, image: imageDataUrl});
    
    // Stop camera stream
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    
    setCameraOptions(false);
  };

  return (
    <div className="eco-social-app">
      <header className="eco-header">
        <h1 className="eco-header-title">EcoConnect</h1>
        <div className="eco-header-icons">
          <div className="eco-camera-dropdown">
            <Camera 
              className="eco-icon" 
              onClick={() => setCameraOptions(!cameraOptions)}
            />
            {cameraOptions && (
              <div className="eco-dropdown-menu">
                <button onClick={triggerFileInput}>
                  Choose from Device
                </button>
                <button onClick={startCamera}>
                  Take Photo
                </button>
              </div>
            )}
          </div>
          <User className="eco-icon" />
        </div>
      </header>

      <input 
        type="file" 
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileSelect}
        className="eco-hidden-input"
      />

      {/* Camera Capture Area */}
      {videoRef.current && !newPost.image && (
        <div className="eco-camera-capture">
          <video 
            ref={videoRef} 
            width="400" 
            height="400"
          />
          <button onClick={capturePhoto}>Capture</button>
        </div>
      )}

      <div className="eco-post-upload">
        {newPost.image && (
          <img 
            src={typeof newPost.image === 'string' ? newPost.image : URL.createObjectURL(newPost.image)} 
            alt="Selected" 
            className="eco-preview-image"
          />
        )}
        <textarea
          placeholder="Write a caption about your eco-moment..."
          value={newPost.caption}
          onChange={(e) => setNewPost({...newPost, caption: e.target.value})}
        />
        <input
          type="text"
          placeholder="Add tags (comma separated)"
          value={newPost.tags}
          onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
        />
        <button 
          onClick={handlePostUpload}
          disabled={!newPost.image}
        >
          Post
        </button>
      </div>

      <canvas 
        ref={canvasRef} 
        width="400" 
        height="400" 
        style={{display: 'none'}}
      />

      <div className="eco-posts-feed">
        {posts.map((post) => (
          <div key={post.id} className="eco-post">
            <div className="eco-post-header">
              <User className="eco-icon" />
              <span className="eco-username">{post.username}</span>
            </div>
            <img 
              src={post.image} 
              alt="Post" 
              className="eco-post-image"
            />
            <div className="eco-post-actions">
              <div className="eco-action-icons">
                <Heart className="eco-icon" />
                <MessageCircle className="eco-icon" />
              </div>
              <span className="eco-likes">{post.likes} likes</span>
            </div>
            <p className="eco-caption">{post.caption}</p>
            <div className="eco-tags">
              {post.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>
        {
          `
          .eco-social-app {
            max-width: 650px;
            margin: 4% auto;
            background-color: white;
            min-height: 100vh;
            font-family: Arial, sans-serif;
          }

          /* Header Styles */
          .eco-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid #e0e0e0;
          }

          .eco-header-title {
            font-size: 24px;
            color: #ef4444;
            font-weight: bold;
          }

          .eco-header-icons {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .eco-icon {
            color: #2c7a2c;
            cursor: pointer;
          }

          /* Camera Dropdown */
          .eco-camera-dropdown {
            position: relative;
          }

          .eco-dropdown-menu {
            position: absolute;
            right: 0;
            top: 100%;
            width: 200px;
            background-color: white;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            z-index: 10;
          }

          .eco-dropdown-menu button {
            width: 100%;
            padding: 8px;
            text-align: left;
            border: none;
            background: none;
            cursor: pointer;
          }

          .eco-dropdown-menu button:hover {
            background-color: #f0f0f0;
          }

          /* Hidden Inputs */
          .eco-hidden-input {
            display: none;
          }

          /* Camera Capture */
          .eco-camera-capture {
            position: relative;
            width: 400px;
            margin: 0 auto;
          }

          .eco-camera-capture video {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }

          .eco-camera-capture button {
            position: absolute;
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #2c7a2c;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
          }

          /* Post Upload Section */
          .eco-post-upload {
            padding: 16px;
            border-bottom: 1px solid #e0e0e0;
          }

          .eco-preview-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            margin-bottom: 8px;
          }

          .eco-post-upload textarea,
          .eco-post-upload input {
            width: 100%;
            padding: 8px;
            margin-bottom: 8px;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
          }

          .eco-post-upload button {
            width: 100%;
            padding: 8px;
            background-color: #2c7a2c;
            color: white;
            border: none;
            border-radius: 4px;
          }

          .eco-post-upload button:disabled {
            background-color: #a0a0a0;
            cursor: not-allowed;
          }

          /* Posts Feed */
          .eco-posts-feed .eco-post {
            border-bottom: 1px solid #e0e0e0;
            padding: 16px;
          }

          .eco-post-header {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
          }

          .eco-username {
            margin-left: 8px;
            font-weight: bold;
          }

          .eco-post-image {
            width: 100%;
            height: 256px;
            object-fit: cover;
            margin-bottom: 8px;
          }

          .eco-post-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          }

          .eco-action-icons {
            display: flex;
            gap: 16px;
          }

          .eco-tags {
            color: #1e90ff;
          }

          .eco-tags span {
            margin-right: 8px;
          }
          `
        }
      </style>
    </div>
  );
};

export default EcoSocialApp;