'use client'
import { list } from 'postcss'
import React, { useState,useEffect } from 'react'

const Page = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [mainTask, setMainTask] = useState([]);
  const [disable,setDisable] = useState(true);
  useEffect(() => {
    if (title.length > 0 && desc.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    }, [title, desc]);

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
  let renderTask ;
  if (mainTask.length > 0 ) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="bg-teal-500 py-[1px] mt-5 mx-[2vw] rounded-3xl">
          <div className='flex justify-between items-center px-8 mt-5 mb-5'>
            <div className='flex justify-between items-center w-11/12  text-white'>  
              <h3 className='text-2xl  text-black font-bold'>{t.title}</h3>
              <h4 className='text-xl w-3/4  text-white font-mono '>{t.desc}</h4>
            </div>
            <button className= " bg-red-600 font-bold rounded-md text-white px-2 py-2"
              onClick={() => {
                deleteHandler(i)
              }}>Delete</button>
          </div>
        </li>
      );
    });
  }
  else
  {
    renderTask=(
    <div className='bg-teal-500 mt-4 text-start px-[20px] mx-5 py-5 rounded-lg opacity-80 text-black text-3xl font-bold '>
     <h1>No Task Available..</h1>
    </div>);
  }
  return (
    <>
      <h1 className=' text-black py-3 font-bold text-center bg-teal-400 bg-opacity-90 text-3xl'>My ToDo List</h1>
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
        <button className={`${disable ? "bg-teal-700  text-black opacity-80 cursor-not-allowed" : " bg-red-600 text-white"} font-bold rounded-lg  px-2 py-2`}>Add Task</button>
      </form>
      <hr className='border-teal-700 border-t-2 mx-[10vw]'/>
      <div>
        <ul>{renderTask}</ul>
      </div>
    </>

  )
}

export default Page