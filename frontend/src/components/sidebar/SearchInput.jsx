import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [filteredConversations, setFilteredConversations] = useState([]);
  const { setSelectedConversation } = useConversation();
  const { loading, conversations } = useGetConversations();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    if (searchTerm.length >= 3) {
      const matches = conversations?.filter((c) =>
        c.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredConversations(matches || []);
    } else {
      setFilteredConversations([]);
    }
  };

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setSearch("");
    setFilteredConversations([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term is too short!");
    }
    if (filteredConversations.length === 0) {
      return toast.error("No user found!!");
    }
  };

  return (
    <div className="relative">
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered rounded-full"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>

      {/* Display filtered conversations */}
      {filteredConversations.length > 0 && (
        <div className="absolute top-full mt-2 w-full  border rounded-lg shadow-lg z-10 text-black bg-blue-700">
          <ul>
            {filteredConversations.map((conversation) => (
              <li
                key={conversation.id}
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => handleSelectConversation(conversation)}
              >
                {conversation.fullname}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
