import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center p-4">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Studio Ghibli Film Archive</h1>
        <img src="/Studio_Ghibli_logo.png" alt="Studio Ghibli Logo" style={{ width: '600px' }} className="mx-auto mt-4 h-auto" />
        <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Welcome to the Studio Ghibli API Lab! This application allows you to explore data from the Studio Ghibli films and characters. Utilize the search and filter options to discover information about your favorite films and characters from the Studio Ghibli universe. Created by Thomson Knoles thomsonknoles@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Home;
