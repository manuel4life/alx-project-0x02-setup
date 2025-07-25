import { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 id="modal-title" className="text-xl font-bold mb-4">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit}>
          {/* ... rest of your form code remains the same ... */}
        </form>
      </div>
    </div>
  );
};

export default PostModal;
