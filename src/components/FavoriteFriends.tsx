import { useState } from 'react'; 
import { mockUsers, Friend } from '@/mockUsers';
import { TbStar } from "react-icons/tb";

const FavoriteFriends = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // Initialize search term
  const [friends, setFriends] = useState<Friend[]>(mockUsers.filter(friend => friend.friend)); // Load only true friends initially
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to toggle edit mode
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]); // Store selected friend IDs

  // Filter friends based on search term
  const filteredFriends = friends.filter((friend) =>
    friend.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle updating the selected friends
  const handleFriendSelect = (friendId: number) => {
    if (selectedFriends.includes(friendId)) {
      setSelectedFriends(prev => prev.filter(id => id !== friendId)); // Deselect if already selected
    } else {
      if (selectedFriends.length < 10) {
        setSelectedFriends(prev => [...prev, friendId]); // Select the friend
      } else {
        alert("You can only pin a maximum of 10 friends.");
      }
    }
  };

  // Handle saving the selected friends to the favorite list and closing the edit mode
  const handleUpdate = () => {
    const updatedFriends = selectedFriends.map((id) => 
      mockUsers.find((friend) => friend.id === id)
    ).filter(Boolean) as Friend[];

    // Update the state of friends
    setFriends(updatedFriends);
    setIsEditing(false); // Close the modal (edit mode)
  };

  return (
    <div className='w-full max-w-md mx-auto mb-4'>
      {/* Display favorite friends */}
      <div className='flex flex-row items-center justify-between p-2 rounded'>
        <h3 className="text-xl font-semibold ">Favorite Friends</h3>

        {/* Edit Button */}
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          <TbStar/>
        </button>
      </div>
      <ul className="list-none p-0 bg-white shadow-md rounded">
        {filteredFriends.length > 0 ? (
          filteredFriends.map((friend) => (
            <li key={friend.id} className="p-2 border-b flex items-center">
              <img
                src={friend.image}
                alt={friend.username}
                className="w-8 h-8 rounded-full inline-block mr-2"
              />
              <span>{friend.name} (@{friend.username})</span>
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No friends found</li>
        )}
      </ul>

      {/* Modal (Edit Mode) */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
            <h4 className="mb-4">Select Friends to Add</h4>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by username"
              className="p-2 border rounded mb-4 w-full"
            />

            {/* List of all users to select from */}
            <ul className="list-none max-h-60 overflow-auto mb-4">
              {mockUsers
                .filter((user) =>
                  user.username.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((user) => (
                  <li key={user.id} className="p-2 border-b flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFriends.includes(user.id)}
                      onChange={() => handleFriendSelect(user.id)}
                      className="mr-2"
                    />
                    <img
                      src={user.image}
                      alt={user.username}
                      className="w-8 h-8 rounded-full inline-block mr-2"
                    />
                    <span>{user.name}</span>
                  </li>
                ))}
            </ul>

            <div className="flex justify-end mt-4">
              
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-white mr-2 p-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteFriends;
