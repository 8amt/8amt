"use client"
import React, { useState } from 'react';

const FeedbackPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [message, setMessage] = useState('');
  const [other, setOther] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission logic here (e.g., API call)
    console.log({ name, email, feedbackType, message, other, screenshot });
    alert('Thank you for your feedback!');
    // Reset form fields after submission
    setName('');
    setEmail('');
    setFeedbackType('');
    setMessage('');
    setOther('');
    setScreenshot(null);
  };

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setScreenshot(e.target.files[0]);
    }
  };

  // Define feedback types that should show the screenshot field
  const feedbackTypesRequiringScreenshot = ['Problem', 'Update Feature', 'Improve'];

  return (
    <div className="min-h-[88.5vh] flex flex-col justify-center items-center p-4">
      <h1 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Submit Your Feedback</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="feedbackType" className="block text-gray-700 font-semibold mb-2">Type of Feedback</label>
            <select
              id="feedbackType"
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className=" text-gray-400 w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Select Feedback Type</option>
              <option value="Problem" className='text-gray-900'>Problem</option>
              <option value="Update Feature" className='text-gray-900'>Update Feature</option>
              <option value="Improve" className='text-gray-900'>Improve</option>
              <option value="General Feedback" className='text-gray-900'>General Feedback</option>
              <option value="Other" className='text-gray-900'>Other</option>
            </select>
          </div>

          {feedbackType === 'Other' && (
            <div className="mb-4">
              <label htmlFor="other" className="block text-gray-700 font-semibold mb-2">Please Specify</label>
              <input
                type="text"
                id="other"
                value={other}
                onChange={(e) => setOther(e.target.value)}
                placeholder="Specify other feedback"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Feedback"
              className="w-full p-2 border rounded h-32 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Conditionally show screenshot input if feedback type requires it */}
          {feedbackTypesRequiringScreenshot.includes(feedbackType) && (
            <div className="mb-6">
              <label htmlFor="screenshot" className="block text-gray-700 font-semibold mb-2">Upload Screenshot (optional)</label>
              <input
                type="file"
                id="screenshot"
                accept="image/*"
                onChange={handleScreenshotChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
