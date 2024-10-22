// src/Dashboard.js
import React from 'react';
import Card from './Card';

const Dashboard = () => {
  const cardsData = [
    { title: "Leave Application", link: "https://docs.google.com/forms/d/e/1FAIpQLSevtr9TWQBsX6N-5na-cuVYWWcprKHrXHj_23bNUiFEhJCwNQ/viewform" },
    { title: "Gate Pass", link: "https://docs.google.com/forms/d/e/1FAIpQLSdrpJhnADcyT5xXNeClZLatI7W4fCvtsYsf8iwYFTm2raM_8Q/viewform" },
    { title: "Bus Part Authorization", link: "https://docs.google.com/forms/d/e/1FAIpQLScN6K5v4yesirCwv9lKlmoV6fFlDz61t4ix1jdsGPRoAG6NeQ/viewform" },
    { title: "Exit Protocols", link: "https://docs.google.com/forms/d/e/1FAIpQLSeN0EFyFKwJhDqOtIBponRDmlgRWM_ee0VU7iYk2urJFA8oKg/viewform" },
    { title: "Travel Authorization", link: "https://docs.google.com/forms/d/e/1FAIpQLSc3pbocZwMOmixlulgtnpsx2WvY3j3-utbXmgBsEPoBDr-vmw/viewform" },
    { title: "Skilling and Capacity Development", link: "https://docs.google.com/forms/d/e/1FAIpQLSf2vKVMRxfp_0N1RhiQgZBybDlOT3noMrC7t5myvSuE14JPiw/viewform" },
    { title: "Asset Transfer", link: "https://docs.google.com/forms/d/e/1FAIpQLScgtkdhfJWxxnVe8UJSTJnIwvcEWhRjgC5cvAI6IUZlBTVW6A/viewform" },
    { title: "Warehouse Production Planning and Control System", link: "https://docs.google.com/forms/d/e/1FAIpQLScVVVzB8tee0Ybi8jTnEaUVA6UiHuxPMbOUmOlzGSXDmBqEUQ/viewform" },
    { title: "Vehicle Nomination Form", link: "https://docs.google.com/forms/d/e/1FAIpQLSfZOUqKGnDeam-4e_-rLKfb-KCit4oX-aDlT9Oks_mTirfBSA/viewform" }
  ];

  return (
    <div className="dashboard">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} link={card.link} />
      ))}
    </div>
  );
};

export default Dashboard;
