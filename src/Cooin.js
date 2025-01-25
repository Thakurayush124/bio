// import React, { useState } from 'react';
// import { Trophy, Coins, User } from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const TaskComponent = ({ onTaskComplete, updateWeeklyStats }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [tasks] = useState([
//     { 
//       id: 1, 
//       title: 'Plant plantations', 
//       description: 'Take a fresh plant and plant it in your garden or park!',
//       coins: 10, 
//       image: 'ic3.png',
//     },
//     { 
//       id: 2, 
//       title: 'Pet Stray', 
//       description: 'spending time with a street dog by offering affection and companionship.',
//       coins: 20, 
//       image: 'ic1.png'
//     },
//     { 
//       id: 3, 
//       title: 'Healthy Meal', 
//       description: 'Snap a picture of you feeding the stray.',
//       coins: 15, 
//       image: 'ic2.png'
//     },
//     { 
//       id: 4, 
//       title: 'Green Hero', 
//       description: 'Snap a picture of you taking initiative to stop deforestation.',
//       coins: 15, 
//       image: 'ic4.png'
//     }
//   ]);

//   const styles = {
//     taskContainer: {
//       backgroundColor: '#f8f9fa',
//       padding: '20px',
//       borderRadius: '12px',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     },
//     taskItem: {
//       display: 'flex',
//       alignItems: 'center',
//       backgroundColor: 'white',
//       border: '1px solid #e0e0e0',
//       padding: '15px',
//       marginBottom: '15px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//     },
//     taskImage: {
//       width: '200px',
//       height: '150px',
//       marginRight: '15px',
//       borderRadius: '8px'
//     },
//     taskDetails: {
//       flex: 1
//     },
//     taskDescription: {
//       color: '#6c757d',
//       fontSize: '0.9em',
//       marginTop: '5px'
//     },
//     button: {
//       backgroundColor: '#28a745',
//       color: 'white',
//       border: 'none',
//       padding: '10px 15px',
//       borderRadius: '6px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//       transform:'translate(-85px,10px)',
//     }
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleTaskSubmit = (task) => {
//     if (selectedFile) {
//       onTaskComplete(task.coins);
//       updateWeeklyStats(task);
//       setSelectedFile(null);
//     } else {
//       alert('Please upload a photo first!');
//     }
//   };

//   return (
//     <div style={styles.taskContainer}>
//       <h2>Daily Tasks</h2>
//       {tasks.map(task => (
//         <div key={task.id} style={styles.taskItem}>
//           <img 
//             src={task.image} 
//             alt={task.title} 
//             style={styles.taskImage}
//           />
//           <div style={styles.taskDetails}>
//             <h3>{task.title}</h3>
//             <p style={styles.taskDescription}>{task.description}</p>
//             <p>Reward: {task.coins} Coins</p>
//             <input 
//               type="file" 
//               accept="image/*"
//               onChange={handleFileChange}
//             />
//             <button 
//               onClick={() => handleTaskSubmit(task)}
//               style={styles.button}
//             >
//               Complete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const ProfileComponent = ({ coins, taskCompleted, weeklyStats }) => {
//   const styles = {
//     profileContainer: {
//       width: '100%',
//       backgroundColor: '#f8f9fa',
//       padding: '20px',
//       borderRadius: '12px',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     },
//     profileHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: '20px'
//     },
//     userAvatar: {
//       width: '80px',
//       height: '80px',
//       borderRadius: '50%',
//       marginRight: '15px'
//     },
//     profileStats: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '15px'
//     },
//     statItem: {
//       display: 'flex',
//       alignItems: 'center',
//       backgroundColor: 'white',
//       padding: '15px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//     },
//     taskHistoryItem: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       backgroundColor: 'white',
//       padding: '10px',
//       marginBottom: '10px',
//       borderRadius: '6px'
//     },
//     graphContainer: {
//       width: '100%',
//       height: '300px',
//       marginTop: '20px'
//     }
//   };

//   const [userDetails] = useState({
//     name: 'Divyam Mishra',
//     email: 'divyammishra2004@gmail.com',
//     level: 1,
//     avatar: 'profile.png'
//   });

//   return (
//     <div style={styles.profileContainer}>
//       <div style={styles.profileHeader}>
//         <img 
//           src={userDetails.avatar} 
//           alt="User Avatar" 
//           style={styles.userAvatar}
//         />
//         <h2>{userDetails.name}'s Profile</h2>
//       </div>
//       <div style={styles.profileStats}>
//         <div style={styles.statItem}>
//           <Coins style={{marginRight: '10px'}} color="#ffc107" />
//           <div>
//             <span>Total Coins    </span>
//             <strong>{coins}</strong>
//           </div>
//         </div>
//         <div style={styles.statItem}>
//           <Trophy style={{marginRight: '10px'}} color="#28a745" />
//           <div>
//             <span>Level   </span>
//             <strong>{userDetails.level}</strong>
//           </div>
//         </div>
//       </div>
//       <div>
//         <h3>Recent Task History</h3>
//         {taskCompleted.map((task, index) => (
//           <div key={index} style={styles.taskHistoryItem}>
//             <User color="#007bff" />
//             <span>Task Completed</span>
//             <span>+{task} Coins</span>
//           </div>
//         ))}
//       </div>
//       <div style={styles.graphContainer}>
//         <h3>Weekly Task Completion</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <LineChart data={weeklyStats}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="day" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line 
//               type="monotone" 
//               dataKey="Plant Plantations" 
//               stroke="#8884d8" 
//               activeDot={{r: 8}} 
//             />
//             <Line 
//               type="monotone" 
//               dataKey="Pet Stray" 
//               stroke="#82ca9d" 
//             />
//             <Line 
//               type="monotone" 
//               dataKey="Healthy Meal" 
//               stroke="#ffc658" 
//             />
//              <Line 
//               type="monotone" 
//               dataKey="Green Hero" 
//               stroke="red" 
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// function App() {
//   const [coins, setCoins] = useState(0);
//   const [taskHistory, setTaskHistory] = useState([]);
//   const [weeklyStats, setWeeklyStats] = useState([
//     { day: 'Mon', 'Morning Selfie': 0, 'Workout Proof': 0, 'Healthy Meal': 0 },
//     { day: 'Tue', 'Morning Selfie': 0, 'Workout Proof': 0, 'Healthy Meal': 0 },
//     { day: 'Wed', 'Morning Selfie': 0, 'Workout Proof': 0, 'Healthy Meal': 0 },
//     { day: 'Thu', 'Morning Selfie': 0, 'Workout Proof': 0, 'Healthy Meal': 0 },
//     { day: 'Fri', 'Morning Selfie': 0, 'Workout Proof': 0, 'Healthy Meal': 0 },
//     { day: 'Sat', 'Morning Selfie': 0, 'Workout Proof': 0, 'Healthy Meal': 0 },
//     { day: 'Sun', 'Morning Selfie': 0, 'Workout Proof': 0, 'Healthy Meal': 0 }
//   ]);

//   const handleTaskComplete = (earnedCoins) => {
//     setCoins(prevCoins => prevCoins + earnedCoins);
//     setTaskHistory(prev => [earnedCoins, ...prev.slice(0, 4)]);
//   };

//   const updateWeeklyStats = (task) => {
//     const today = new Date().getDay();
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
//     setWeeklyStats(prevStats => {
//       const updatedStats = [...prevStats];
//       updatedStats[today][task.title]++;
//       return updatedStats;
//     });
//   };

//   const appStyles = {
//     appContainer: {
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#e9ecef',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '30px',
//       borderRadius: '15px'
//     },
//     mainContent: {
//       display: 'flex',
//       gap: '20px'
//     }
//   };

//   return (
//     <div style={appStyles.appContainer}>
//       <h1>Coin Task Manager</h1>
//       <div style={appStyles.mainContent}>
//         <TaskComponent 
//           onTaskComplete={handleTaskComplete} 
//           updateWeeklyStats={updateWeeklyStats}
//         />
//         <ProfileComponent 
//           coins={coins} 
//           taskCompleted={taskHistory} 
//           weeklyStats={weeklyStats}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Trophy, Coins, User } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TaskComponent = ({ onTaskComplete, updateWeeklyStats }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tasks] = useState([
    { 
      id: 1, 
      title: 'Plant plantations', 
      description: 'Take a fresh plant and plant it in your garden or park!',
      coins: 10, 
      image: 'ic3.png',
    },
    { 
      id: 2, 
      title: 'Pet Stray', 
      description: 'spending time with a street dog by offering affection and companionship.',
      coins: 20, 
      image: 'ic1.png'
    },
    { 
      id: 3, 
      title: 'Healthy Meal', 
      description: 'Snap a picture of you feeding the stray.',
      coins: 15, 
      image: 'ic2.png'
    },
    { 
      id: 4, 
      title: 'Green Hero', 
      description: 'Snap a picture of you taking initiative to stop deforestation.',
      coins: 15, 
      image: 'ic4.png'
    }
  ]);

  const styles = {
    taskContainer: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    taskImage: {
      width: '200px',
      height: '150px',
      marginRight: '15px',
      borderRadius: '8px'
    },
    taskDetails: {
      flex: 1
    },
    taskDescription: {
      color: '#6c757d',
      fontSize: '0.9em',
      marginTop: '5px'
    },
    button: {
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      transform:'translate(-85px,10px)',
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTaskSubmit = (task) => {
    if (selectedFile) {
      onTaskComplete(task.coins);
      updateWeeklyStats(task);
      setSelectedFile(null);
    } else {
      alert('Please upload a photo first!');
    }
  };

  return (
    <div style={styles.taskContainer}>
      <h2>Daily Tasks</h2>
      {tasks.map(task => (
        <div key={task.id} style={styles.taskItem}>
          <img 
            src={task.image} 
            alt={task.title} 
            style={styles.taskImage}
          />
          <div style={styles.taskDetails}>
            <h3>{task.title}</h3>
            <p style={styles.taskDescription}>{task.description}</p>
            <p>Reward: {task.coins} Coins</p>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileChange}
            />
            <button 
              onClick={() => handleTaskSubmit(task)}
              style={styles.button}
            >
              Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProfileComponent = ({ coins, taskCompleted, weeklyStats }) => {
  const styles = {
    profileContainer: {
      width: '100%',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    profileHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    userAvatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginRight: '15px'
    },
    profileStats: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px'
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    taskHistoryItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '6px'
    },
    graphContainer: {
      width: '100%',
      height: '300px',
      marginTop: '20px'
    }
  };

  const [userDetails] = useState({
    name: 'Divyam Mishra',
    email: 'divyammishra2004@gmail.com',
    level: 1,
    avatar: 'profile.png'
  });

  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileHeader}>
        <img 
          src={userDetails.avatar} 
          alt="User Avatar" 
          style={styles.userAvatar}
        />
        <h2>{userDetails.name}'s Profile</h2>
      </div>
      <div style={styles.profileStats}>
        <div style={styles.statItem}>
          <Coins style={{marginRight: '10px'}} color="#ffc107" />
          <div>
            <span>Total Coins    </span>
            <strong>{coins}</strong>
          </div>
        </div>
        <div style={styles.statItem}>
          <Trophy style={{marginRight: '10px'}} color="#28a745" />
          <div>
            <span>Level   </span>
            <strong>{userDetails.level}</strong>
          </div>
        </div>
      </div>
      <div>
        <h3>Recent Task History</h3>
        {taskCompleted.map((task, index) => (
          <div key={index} style={styles.taskHistoryItem}>
            <User color="#007bff" />
            <span>Task Completed</span>
            <span>+{task} Coins</span>
          </div>
        ))}
      </div>
      <div style={styles.graphContainer}>
        <h3>Weekly Task Completion</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={weeklyStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="Plant Plantations" 
              stroke="#8884d8" 
              activeDot={{r: 8}} 
            />
            <Line 
              type="monotone" 
              dataKey="Pet Stray" 
              stroke="#82ca9d" 
            />
            <Line 
              type="monotone" 
              dataKey="Healthy Meal" 
              stroke="#ffc658" 
            />
             <Line 
              type="monotone" 
              dataKey="Green Hero" 
              stroke="red" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

function App() {
  const [coins, setCoins] = useState(0);
  const [taskHistory, setTaskHistory] = useState([]);
  const [notification, setNotification] = useState(null);
  const [weeklyStats, setWeeklyStats] = useState([
    { day: 'Mon', 'Plant Plantations': 0, 'Pet Stray': 0, 'Healthy Meal': 0, 'Green Hero': 0 },
    { day: 'Tue', 'Plant Plantations': 0, 'Pet Stray': 0, 'Healthy Meal': 0, 'Green Hero': 0 },
    { day: 'Wed', 'Plant Plantations': 0, 'Pet Stray': 0, 'Healthy Meal': 0, 'Green Hero': 0 },
    { day: 'Thu', 'Plant Plantations': 0, 'Pet Stray': 0, 'Healthy Meal': 0, 'Green Hero': 0 },
    { day: 'Fri', 'Plant Plantations': 0, 'Pet Stray': 0, 'Healthy Meal': 0, 'Green Hero': 0 },
    { day: 'Sat', 'Plant Plantations': 0, 'Pet Stray': 0, 'Healthy Meal': 0, 'Green Hero': 0 },
    { day: 'Sun', 'Plant Plantations': 0, 'Pet Stray': 0, 'Healthy Meal': 0, 'Green Hero': 0 }
  ]);

  const handleTaskComplete = (earnedCoins) => {
    setCoins(prevCoins => prevCoins + earnedCoins);
    setTaskHistory(prev => [earnedCoins, ...prev.slice(0, 4)]);
    
    // Add notification
    setNotification(`${earnedCoins} Coins added successfully!`);
    
    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const updateWeeklyStats = (task) => {
    const today = new Date().getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    setWeeklyStats(prevStats => {
      const updatedStats = [...prevStats];
      updatedStats[today][task.title]++;
      return updatedStats;
    });
  };

  const appStyles = {
    appContainer: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#e9ecef',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '30px',
      borderRadius: '15px'
    },
    mainContent: {
      display: 'flex',
      gap: '20px'
    },
    notification: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#28a745',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      zIndex: 1000,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  };

  return (
    <div style={appStyles.appContainer}>
      {notification && (
        <div style={appStyles.notification}>
          {notification}
        </div>
      )}
      <h1>Coin Task Manager</h1>
      <div style={appStyles.mainContent}>
        <TaskComponent 
          onTaskComplete={handleTaskComplete} 
          updateWeeklyStats={updateWeeklyStats}
        />
        <ProfileComponent 
          coins={coins} 
          taskCompleted={taskHistory} 
          weeklyStats={weeklyStats}
        />
      </div>
    </div>
  );
}

export default App;