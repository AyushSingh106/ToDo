'use client'
import { list } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, ({ title, desc })]);
    settitle('');
    setdesc('');
  };
  const deleteHandler = (i) => {
    let copy = [...mainTask];
    copy.splice(i, 1);
    setMainTask(copy)
  }
  let renderTask = <h1>No Task Available..</h1>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="bg-cyan-600 py-1" >
          <div className='flex justify-between items-center px-8 mt-5 mb-5'>
            <div className='flex justify-between items-center w-11/12  text-white'>
              <h3 className='text-2xl  text-black font-bold'>{t.title}</h3>
              <h4 className='text-xl w-3/4  text-white font-mono '>{t.desc}</h4>
            </div>
            <button className='bg-red-600 px-2 py-1 text-white text-lg rounded-lg'
              onClick={() => {
                deleteHandler(i)
              }}>Delete</button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className=' text-black py-3 font-bold text-center bg-teal-300 bg-opacity-90 text-3xl'>My ToDo List</h1>
      <form className='mt-6 text-xl mb-6 flex justify-center gap-10'
        onSubmit={submitHandler}>
        <input type="text" className='border-2  px-3 py-2 border-zinc-800 rounded-lg'
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}></input>
        <input type="text" className='border-2 border-zinc-800  px-3 py-2 rounded-lg'
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        ></input>
        <button className='bg-teal-700 px-3 py-2 rounded-lg text-white'>Add Task</button>
      </form>
      <hr />
      <div className='bg-teal-400 mt-4 text-start px-[20px] mx-5 py-5 rounded-lg opacity-80 text-black text-3xl font-bold '>
        <ul>{renderTask}</ul>
      </div>
    </>

  )
}

export default page